import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async (req, res) => {
    const { password } = req.body;
    const pass = "$2b$10$PzUn1xOQ9PSxQB9aH1ptPuXUzk2x03tOSc3hWk3lfjU1jy10cFxz6";

    if(await bcrypt.compare(password, pass)) {
        const token = jwt.sign({
            id: 0,
            role: "admin"
        }, process.env.AUTH_SECRET, {
            expiresIn: "30d"
        })

        res.cookie("token", token, { maxAge: 2592000000 }).status(200).send({ success: true });
    }
}