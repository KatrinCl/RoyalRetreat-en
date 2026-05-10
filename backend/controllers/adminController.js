import jwt from 'jsonwebtoken'

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' })

            res.cookie('adminToken', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
                maxAge: 1 * 60 * 60 * 1000,
            });

            return res.json({ success: true, message: "Login successful" });
        } else {
            res.clearCookie('adminToken')
            res.json({ success: false, message: "Invalid credentials" });
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const adminLogout = async (req, res) => {
    try {
        res.clearCookie('adminToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })

        res.json({ success: true, message: 'Admin logged out' })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const checkAdmin = async (req, res) => {
    try {
        const token = req.cookies.adminToken
        if (!token) {
            return res.json({ success: false, message: "Unauthorized user" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (decoded.email !== process.env.ADMIN_EMAIL) {
            return res.json({ success: false, message: "Unauthorized user" })
        }

        return res.json({ success: true })

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
}



export { adminLogin, adminLogout, checkAdmin }