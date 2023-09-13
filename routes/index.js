const userRouter = require('./user')
const productRouter = require('./product')
const categoryRouter = require('./category')




const initRoutes = (app) => {
    app.use('/api/user',userRouter)
    app.use('/api/product',productRouter)
    app.use('/api/category',categoryRouter)
   



   
}

module.exports = initRoutes