import mongoose, {Schema} from "mongoose";

const registerSchema = new Schema({
    email: String,
    password: String,
    name: String,
    lastName: String,
    dateOfBirth: Date,
    address: {
        city: String,
        street: String,
        postal: String,
        houseNumber: String,
        apartmentNumber: String
    }
})

export default mongoose.model("registerSchema", registerSchema);
