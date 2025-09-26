import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true,'nombre es obligatorio'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true,'email es obligatorio'],
        unique :true,
        trim: true,
        lowercase: true,
        match: [/.+@.+\..+/, 'Por favor ingrese un email valido']
    },
    password: {
        type: String,
        required: [true,'password es obligatorio'],
        minLenghth: 6,
    }, options: { timestamps: true }
});
    const User = mongoose.model('User', userSchema);

    export default User;




