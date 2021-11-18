const { Schema, model } = require("mongoose")

const ReviewSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    rating: {
        type: Number,
        trim: true,
        default: null
    },
    review: {
        type: String,
        trim: true,
        default: null
    }
}, {
    timestamps: true
})


const Review = model("Review", ReviewSchema)
module.exports = Review
