import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import internalFetcher from "../../http/internalFetcher.js";
import genericErrorResponse from "../../utils/genericErrorResponse.js";

export default async (req, res) => {
    const { email, password } = req.body;

    try {
        const { password: hashedPassword, ...rest } = await internalFetcher("user", "GET", "user", {
            query: {
                email,
                includePassword: 1
            },
            key: true
        })

        if(!hashedPassword) return genericErrorResponse(res, "Invalid credentials", 401);

        if(await bcrypt.compare(password, hashedPassword)) {
            const token = jwt.sign({
                ...rest
            }, process.env.AUTH_SECRET, {
                expiresIn: "30d"
            })

            return res.cookie("token", token, { maxAge: 2592000000, httpOnly: true }).status(200).send({ success: true });
        }
    } catch (e) {
        return res.status(e.status).send(e);
    }

    genericErrorResponse(res, "Invalid credentials", 401);
}