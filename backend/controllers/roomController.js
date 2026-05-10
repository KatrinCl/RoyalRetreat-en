import prisma from "../config/prismaClient.js";
import { v2 as cloudinary } from 'cloudinary';

export const addRoom = async (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.json({ success: false, message: "At least one image must be uploaded" })
        }

        const { name, features, price, warning, bonus } = req.body

        if (!name || !features || !price) {
            return res.json({ success: false, message: "Fill in required fields" })
        }

        const images = [];
        for (let i = 1; i <= 4; i++) {
            const fileKey = `image${i}`;
            if (req.files[fileKey] && req.files[fileKey][0]) {
                const file = req.files[fileKey][0];
                const uploaded = await cloudinary.uploader.upload(file.path, {
                    folder: 'royalretreat/rooms',
                    resource_type: "image"
                });
                images.push(uploaded.secure_url);
            }
        }

        let featuresArray = [];
        try {
            featuresArray = JSON.parse(features);
        } catch (e) {
            featuresArray = features.split('\n')
                .map(item => item.trim())
                .filter(item => item.length > 0);
        }

        const room = await prisma.hotel.create({
            data: {
                name,
                features: featuresArray,
                warning: warning || null,
                bonus: bonus || null,
                image: images,
                price: Number(price)
            }
        })

        res.json({ success: true, room })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export const listRoom = async (req, res) => {
    try {
        const rooms = await prisma.hotel.findMany()
        res.json({ success: true, rooms })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export const removeRoom = async (req, res) => {
    try {
        await prisma.hotel.delete({ where: { id: Number(req.body.id) } })
        res.json({ success: true, message: "Room removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}