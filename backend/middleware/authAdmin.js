import jwt from "jsonwebtoken";

export const authAdmin = async (req, res, next) => {
    try {
        const token = req.cookies.adminToken;
        if (!token) {
            return res.status(401).json({ success: false, message: "No access" })
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        if (token_decode.email !== process.env.ADMIN_EMAIL) {
            return res.json({ success: false, message: "Not authorized" });
        }

        next();
    } catch (error) {
        res.status(401).json({ success: false, message: error.message });
    }
};
