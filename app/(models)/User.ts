import { timeStamp } from "console";
import mongoose, {Schema} from "mongoose";

const MONGODB_CONNECTION_STRING: string = process.env.MONGODB_URI!

mongoose.connect(MONGODB_CONNECTION_STRING)
mongoose.Promise = global.Promise

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
},{
    timestamps: true,
})

const User = mongoose.models.User ||mongoose.model("User", userSchema)

export default User;