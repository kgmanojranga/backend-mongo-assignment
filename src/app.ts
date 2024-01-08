import express, {NextFunction} from "express";
import itemRoutes from "./routes/item-routes";

const app = express()

// json serialize
app.use(express.json())

// Custom middleware
// app.use((req, res,next: NextFunction)=> {
//     console.log( "Metarooooooooooooooon !!!!")
//     next();
// })

// routes
app.use('/api/v1/items', itemRoutes)

export default app;