import mongoose from "mongoose";

const url = `mongodb://${process.env.DB_CONTAINER_NAME}:27017/auth`;

const connectDb = () => {
    try {
        mongoose.connect(url, {
            user: process.env.DB_USERNAME,
            pass: process.env.DB_PASSWORD,
            authSource: "admin"
        }, (error) => {
            if(error) {
                console.error("error", error)
            } else {
                console.log("connected");
            }
        })
    } catch (e) {
        console.error(e);
    }

};

export default connectDb;