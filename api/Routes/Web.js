const express = require('express')
const webRouter = express.Router()
const Cache = require("../Cache/Index")

const HomeController = require("../Controllers/Web/Home")
const BannerController = require("../Controllers/Web/Banner")
const CategoryController = require("../Controllers/Web/Category")
const ProductController = require("../Controllers/Web/Product")
const SearchController = require("../Controllers/Web/Search")

// ------ Home -------
webRouter.get("/home-products", HomeController.Index)

// ------ Banner -------
webRouter.get("/banner", Cache.Banners, BannerController.Index)

// ------ Category -------
webRouter.get("/category", Cache.CategoryList, CategoryController.Index)
webRouter.get("/category/:slug", Cache.Category, CategoryController.Show)
webRouter.get("/category/products/:category", CategoryController.Products)
webRouter.get("/category/name/slug/list", Cache.CategoryList, CategoryController.ListOfCategory)

// ------ Product -------
webRouter.get("/product/:slug", Cache.Product, ProductController.Show)

// ------ Search -------
webRouter.get("/search/suggestion/:query", SearchController.Suggestion)
webRouter.get("/search/results/:query", SearchController.Results)

module.exports = { webRouter }
