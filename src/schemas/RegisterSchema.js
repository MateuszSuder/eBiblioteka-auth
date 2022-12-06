import mongoose, {Schema} from "mongoose";
import AddressSchema from "./AddressSchema.js";

const RegisterSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    address: {
        type: AddressSchema,
        required: true
    }
})

export default mongoose.model("registerSchema", RegisterSchema);
