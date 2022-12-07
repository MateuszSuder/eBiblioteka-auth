import internalFetcher from "../../http/internalFetcher.js";
import genericErrorResponse from "../../utils/genericErrorResponse.js";
import bcrypt from "bcrypt";

export default async (req, res) => {
    const { password } = req.body;

    if(!password) {
        return genericErrorResponse(res, "Password is required", 400);
    }

    if(password < 8) {
        return genericErrorResponse(res, "Password must be at least 8 characters", 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const response = await internalFetcher("user", "POST", "user", {
            body: {
                ...req.body,
                password: hashedPassword
            },
            key: true
        });

        res.status(201).send(response);
    } catch (e) {
        return res.status(e.status).send(e);
    }
}