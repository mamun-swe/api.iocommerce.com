const express = require('express')
const authRouter = express.Router()
const AdminAuth = require("../Controllers/Auth/Admin")
const CustomerAuth = require("../Controllers/Auth/Customer")

// Admin auth
authRouter.post("/admin/login", AdminAuth.Login)
authRouter.post("/admin/reset", AdminAuth.Reset)

// Customer auth
authRouter.post("/customer/login", CustomerAuth.Login)
authRouter.post("/customer/register", CustomerAuth.Register)

module.exports = { authRouter }
