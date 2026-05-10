import prisma from "../config/prismaClient.js";
import { v2 as cloudinary } from 'cloudinary';

export const addHouse = async (req, res) => {
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
                    folder: 'royalretreat/houses',
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

        const house = await prisma.house.create({
            data: {
                name,
                features: featuresArray,
                warning: warning || null,
                bonus: bonus || null,
                image: images,
                price: Number(price)
            }
        })

        res.json({ success: true, house })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export const listHouse = async (req, res) => {
    try {
        const houses = await prisma.house.findMany()
        res.json({ success: true, houses })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export const removeHouse = async (req, res) => {
    try {
        await prisma.house.delete({ where: { id: Number(req.body.id) } })
        res.json({ success: true, message: "House removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}