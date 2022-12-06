import {model, Schema} from "mongoose";

const AddressSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    postal: {
        type: String,
        required: true
    },
    houseNumber: {
        type: Date,
        required: true
    },
    apartmentNumber: String
})

export default model("AddressSchema", AddressSchema);