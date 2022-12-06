import internalFetcher from "../../http/internalFetcher.js";
import RegisterSchema from "../../schemas/RegisterSchema.js";
import mongooseErrorResponse from "../../utils/mongooseErrorResponse.js";

export default async (req, res) => {
    // const { email, password, name, lastName, dateOfBirth,
    //     address: { city, street, postal, houseNumber, apartmentNumber }
    // } = req.body;

    const user = new RegisterSchema({...req.body});
    try {
        await user.save();
    } catch (e) {
        return mongooseErrorResponse(res, e);
    }



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