import mongoose, {Schema} from "mongoose";

const RegisterSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: String,
    lastName: String,
    dateOfBirth: Date,
    address: {
        city: String,
        street: String,
        postal: String,
        houseNumber: String,
        apartmentNumber: String
    },
})

export default mongoose.model("registerSchema", RegisterSchema);
