import express from 'express'
// import videoRouter from './videoRouter.js'
// import userRouter from './userRouter.js'
import restaurantRouter from './restaurantRouter.js'

const rootRouter = express.Router()


// rootRouter.use("/video",videoRouter)

// rootRouter.use("/user",userRouter)

rootRouter.use("/restaurant",restaurantRouter)


export default rootRouter;


// localhost:8080/video/get-video
