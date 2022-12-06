import internalFetcher from "../../http/internalFetcher.js";
import genericErrorResponse from "../../utils/genericErrorResponse.js";
import bcrypt from "bcrypt";

export default async (req, res) => {
    // const { email, password, name, lastName, dateOfBirth,
    //     address: { city, street, postal, houseNumber, apartmentNumber }
    // } = req.body;

    // const user = new RegisterSchema({...req.body});
    // try {
    //     await user.save();
    // } catch (e) {
    //     return mongooseErrorResponse(res, e);
    // }

    const { password } = req.body;

    if(!password) {
        return genericErrorResponse(res, "Password is required", 400);
    }

    if(password < 8) {
        return genericErrorResponse(res, "Password must be at least 8 characters", 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    try {
        const response = await internalFetcher("user", "GET", "health");

        console.log(response);
    } catch (e) {
        console.log(1, e);
        console.log(2, e.cause);
        console.log(3, e.headers);
    }


    res.send("register");
}