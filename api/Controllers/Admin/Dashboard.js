const Admin = require("../../../Models/Admin")
const Customer = require("../../../Models/Customer")
const Category = require("../../../Models/Category")
const Product = require("../../../Models/Product")

// Index of dashboard
const Index = async (req, res, next) => {
    try {
        const admin = await Admin.countDocuments()
        const customer = await Customer.countDocuments()
        const category = await Category.countDocuments()
        const product = await Product.countDocuments()

        res.status(200).json({
            status: true,
            admin,
            customer,
            category,
            product
        })
    } catch (error) {
        if (error) next(error)
    }
}


module.exports = {
    Index
}