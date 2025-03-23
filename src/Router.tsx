import {createBrowserRouter} from "react-router-dom";
import Root from "./Root.tsx";
import Coins from "./screen/Coins.tsx";
import Coin from "./screen/Coin.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "coins",
                element: <Coins />,
            },
            {
                path: "/:coinId",
                element: <Coin />,
            }
        ]
    }
]);

export default router;