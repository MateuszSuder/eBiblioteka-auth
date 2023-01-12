import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import internalFetcher from "../../http/internalFetcher.js";
import genericErrorResponse from "../../utils/genericErrorResponse.js";

export default async (req, res) => {
    const { email, password } = req.body;

    try {
        const { password: hashedPassword, ...rest } = await internalFetcher("user", "GET", "", {
            query: {
                email,
                includePassword: 1
            },
            key: true
        })

        console.log(password, hashedPassword);

        if(!hashedPassword) return genericErrorResponse(res, "Invalid credentials", 401);

        console.log(2);
        if(await bcrypt.compare(password, hashedPassword)) {
            const token = jwt.sign({
                ...rest
            }, process.env.AUTH_SECRET, {
                expiresIn: "30d"
            })

            return res.cookie("token", token, { maxAge: 2592000000, httpOnly: true }).status(200).send({ ...rest });
        } else {
            genericErrorResponse(res, "Invalid credentials", 401);
        }
    } catch (e) {
        return res.status(e.status).send(e);
    }
}