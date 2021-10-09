const redis = require("redis")

const REDIS_PORT = process.env.REDIS_PORT || 5002
const RedisClient = redis.createClient(REDIS_PORT)

// Banners cache
const Banners = async (req, res, next) => {
    try {
        const key = 'banners'
        RedisClient.get(key, (error, results) => {
            if (results) {
                return res.status(200).json({
                    status: true,
                    data: JSON.parse(results)
                })
            } else {
                next()
            }
        })
    } catch (error) {
        if (error) next(error)
    }
}

// Specific category cache
const Category = async (req, res, next) => {
    try {
        const { slug } = req.params
        RedisClient.get(slug, (error, result) => {
            if (result) {
                return res.status(200).json({
                    status: true,
                    data: JSON.parse(result)
                })
            } else {
                next()
            }
        })
    } catch (error) {
        if (error) next(error)
    }
}

// Category name list cache
const CategoryList = async (req, res, next) => {
    try {
        const key = 'categoryList'
        RedisClient.get(key, (error, results) => {
            if (results) {
                return res.status(200).json({
                    status: true,
                    data: JSON.parse(results)
                })
            } else {
                next()
            }
        })
    } catch (error) {
        if (error) next(error)
    }
}

// Specific product cache
const Product = async (req, res, next) => {
    try {
        const { slug } = req.params
        RedisClient.get(slug, (error, result) => {
            if (result) {
                return res.status(200).json({
                    status: true,
                    data: JSON.parse(result)
                })
            } else {
                next()
            }
        })
    } catch (error) {
        if (error) next(error)
    }
}

module.exports = {
    RedisClient,
    Banners,
    Category,
    CategoryList,
    Product
}