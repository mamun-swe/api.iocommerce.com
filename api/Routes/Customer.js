const express = require('express')
const customerRouter = express.Router()
const Account = require("../Controllers/Customer/Account")
const Order = require("../Controllers/Customer/Order")

// ----------- Customer Account Routes ------------
customerRouter.get("/me", Account.MyProfile)
customerRouter.put('/me', Account.UpdateAccount)
customerRouter.put('/change-password', Account.UpdatePassword)

// ----------- Customer Order Routes ------------
customerRouter.get('/order', Order.Index)
customerRouter.get('/order/:id', Order.Show)
customerRouter.post('/order', Order.Place)

// ---------- Web ----------
// customerRouter.get('/index', Client.Index)


module.exports = { customerRouter }
