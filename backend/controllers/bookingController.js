import prisma from '../config/prismaClient.js'

export const createBooking = async (req, res) => {
    try {
        const { roomName, houseName, checkIn, checkOut, name, phone, image, price, guests } = req.body;
        const userId = req.user?.id;

        if ((!roomName && !houseName) || !checkIn || !checkOut) {
            return res.status(400).json({ success: false, message: "Fill in all fields" });
        }

        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

        const whereClause = {
            checkIn: { lte: checkOutDate },
            checkOut: { gte: checkInDate }
        };

        if (roomName) {
            whereClause.roomName = roomName;
        }
        if (houseName) {
            whereClause.houseName = houseName;
        }

        const overlapping = await prisma.booking.findFirst({
            where: whereClause
        });

        if (overlapping) {
            return res.status(409).json({ success: false, message: "This object is already booked for selected dates" });
        }

        const days = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
        const totalPrice = days * price;

        const booking = await prisma.booking.create({
            data: {
                userId,
                roomName: roomName || null,
                houseName: houseName || null,
                checkIn: checkInDate,
                checkOut: checkOutDate,
                name,
                phone,
                price,
                totalPrice,
                guests: Number(guests) || 1,
                image: image || "default-room.png"
            }
        });

        res.json({ success: true, booking });
    } catch (error) {
        console.error("Booking error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const checkAvailability = async (req, res) => {
    try {
        const { roomName, houseName, checkIn, checkOut } = req.query;

        if ((!roomName && !houseName) || !checkIn || !checkOut) {
            return res.status(400).json({ success: false, message: "Specify room or house and dates" });
        }

        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

        const whereClause = {
            checkIn: { lte: checkOutDate },
            checkOut: { gte: checkInDate }
        };

        if (roomName) {
            whereClause.roomName = roomName;
        }
        if (houseName) {
            whereClause.houseName = houseName;
        }

        const existingBooking = await prisma.booking.findFirst({
            where: whereClause
        });

        if (existingBooking) {
            return res.json({ success: true, available: false });
        }

        res.json({ success: true, available: true });
    } catch (error) {
        console.error("Availability check error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const getMyBookings = async (req, res) => {
    try {
        const userId = req.user.id;
        const bookings = await prisma.booking.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
        });

        const bookingsWithDays = bookings.map((b) => {
            const days = Math.ceil(
                (b.checkOut.getTime() - b.checkIn.getTime()) / (1000 * 60 * 60 * 24)
            );
            return { ...b, days };
        });

        res.json({ success: true, bookings: bookingsWithDays });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const allBookings = async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({ orderBy: { createdAt: "desc" } });
    res.json({ success: true, bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { bookingId, status } = req.body;

    const booking = await prisma.booking.update({
      where: { id: Number(bookingId) },
      data: { status },
    });

    res.json({ success: true, message: "Status updated", booking });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



export const searchAvailable = async (req, res) => {
    try {
        const { checkIn, checkOut, guests } = req.query

        if (!checkIn || !checkOut) {
            return res.status(400).json({ success: false, message: 'Specify check-in and check-out dates' })
        }

        const checkInDate = new Date(checkIn)
        const checkOutDate = new Date(checkOut)

        if (checkInDate >= checkOutDate) {
            return res.status(400).json({ success: false, message: 'Check-out date must be after check-in date' })
        }

        const [allHotels, allHouses] = await Promise.all([
            prisma.hotel.findMany(),
            prisma.house.findMany()
        ])

        const availableHotels = []
        const availableHouses = []

        for (const hotel of allHotels) {
            const existingBooking = await prisma.booking.findFirst({
                where: {
                    roomName: hotel.name,
                    checkIn: { lte: checkOutDate },
                    checkOut: { gte: checkInDate },
                }
            })
            
            if (!existingBooking) {
                availableHotels.push({
                    ...hotel,
                    type: 'hotel',
                    route: `/hotel/${hotel.id}`
                })
            }
        }

        for (const house of allHouses) {
            const existingBooking = await prisma.booking.findFirst({
                where: {
                    houseName: house.name,
                    checkIn: { lte: checkOutDate },
                    checkOut: { gte: checkInDate },
                }
            })
            
            if (!existingBooking) {
                availableHouses.push({
                    ...house,
                    type: 'house',
                    route: `/houses/${house.id}`
                })
            }
        }

        const available = [...availableHotels, ...availableHouses]

        res.json({ 
            success: true, 
            available,
            stats: {
                total: available.length,
                hotels: availableHotels.length,
                houses: availableHouses.length
            }
        })
    } catch (error) {
        console.error('Search available objects error:', error)
        res.status(500).json({ 
            success: false, 
            message: 'Server error while searching available options' 
        })
    }
}