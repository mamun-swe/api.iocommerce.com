const { Schema, model } = require("mongoose")

const validateEmail = function (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
}

const adminSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: [validateEmail, "Please provide a valid email address"],
    },
    phone: {
        type: String,
        trim: true,
        require: true
    },
    address: {
        presentAddress: {
            type: String,
            trim: true,
            default: null
        },
        permanentAddress: {
            type: String,
            trim: true,
            default: null
        }
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: true,
        default: 'Super admin'
    },
    status: {
        type: String,
        trim: true,
        default: 'Offline',
        enum: ['Offline', 'Online']
    },
    accountStatus: {
        type: String,
        trim: true,
        default: 'Active',
        enum: ['Active', 'Deactive']
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true
})


const Admin = model("Admin", adminSchema)
module.exports = Admin
