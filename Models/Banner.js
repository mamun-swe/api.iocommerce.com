const { Schema, model } = require("mongoose")

const bannerSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
}, {
    timestamps: true
})

const Banner = model('Banner', bannerSchema)

module.exports = Banner;