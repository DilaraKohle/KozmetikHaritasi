import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String ,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
},
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);
export default User;
