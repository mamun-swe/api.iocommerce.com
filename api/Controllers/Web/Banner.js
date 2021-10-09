const Banner = require("../../../Models/Banner")
const { Host } = require("../../Helpers/Index")
const { RedisClient } = require("../../Cache/Index")


// List of banners
const Index = async (req, res, next) => {
    try {
        let results = await Banner.find({}, { image: 1, category: 1 })
            .populate("category", "slug")
            .sort({ _id: -1 })

        results = await results.map(banner => {
            return {
                _id: banner._id,
                category: banner.category ? banner.category.slug : null,
                image: Host(req) + "uploads/banner/" + banner.image
            }
        })

        // set data to cache
        RedisClient.setex("banners", 3600, JSON.stringify(results))

        res.status(200).json({
            status: true,
            data: results
        })
    } catch (error) {
        if (error) next(error)
    }
}


module.exports = {
    Index
}