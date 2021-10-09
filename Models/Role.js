const { Schema, model } = require("mongoose")

const roleSchema = new Schema({
    role: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    rights: [{
        type: String,
        required: true,
        trim: true
    }]
}, {
    timestamps: true
})

const Role = model('Role', roleSchema)
module.exports = Role
