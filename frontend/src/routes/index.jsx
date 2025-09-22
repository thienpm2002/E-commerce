import { createBrowserRouter } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";


const allRoutes = [...publicRoutes, ...privateRoutes];

const router = createBrowserRouter(allRoutes);


export default router;