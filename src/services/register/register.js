import internalFetcher from "../../http/internalFetcher.js";
import genericErrorResponse from "../../utils/genericErrorResponse.js";

export default async (req, res) => {
    const { password } = req.body;

    if(!password) {
        return genericErrorResponse(res, "Password is required", 400);
    }

    if(password.length < 8) {
        return genericErrorResponse(res, "Password must be at least 8 characters", 400);
    }

    try {
        const response = await internalFetcher("user", "POST", "", {
            body: {
                ...req.body
            },
            key: true
        });

        res.status(201).send(response);
    } catch (e) {
        return res.status(e.status).send(e);
    }
}