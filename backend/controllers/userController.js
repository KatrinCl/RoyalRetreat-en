import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import validator from 'validator'
import prisma from '../config/prismaClient.js'

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await prisma.user.findUnique({ where: { email } })
        if (!user) {
            return res.json({ success: false, message: 'User not found' })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ success: false, message: 'Invalid password' })
        }

        const token = createToken(user.id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.json({ success: true, user: { email: user.email, name: user.name } });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const exists = await prisma.user.findUnique({ where: { email } })
        if (exists) {
            return res.json({ success: false, message: 'User already exists' })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Enter a valid Email' })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: 'Password must be at least 8 characters' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword }
        })

        const token = createToken(user.id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.json({ success: true, user: { email: user.email, name: user.name } });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        });
        return res.json({ success: true, message: "You have logged out" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export const isAuth = async (req, res) => {
    try {
        if (!req.user || !req.user.id) return res.status(401).json({ success: false, message: "Not authorized" });

        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
            select: { id: true, name: true, email: true },
        });

        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        return res.json({ success: true, user });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

