import { RouteObject } from "react-router-dom";
import AccountComponent from "../MainComponents/AccountComponent";
import DashBoardComponent from "../MainComponents/DashboardComponent";
import { RegisterCompanyComponent } from "../MainComponents/RegisterCompanyComponent";
import RegisterComponent from "../MainComponents/RegisterComponent";
import { RegisterDatacenterComponent } from "../MainComponents/RegisterDatacenterComponent";
import ShopComponent from "../MainComponents/ShopComponent";
import RoutesConstants from "./RoutesConstants";

export const RoutesHandler: RouteObject[] = [
    {
        path: RoutesConstants.HOME_ROUTE,
        element: <DashBoardComponent />
    },
    {
        path: RoutesConstants.SIGNUP_ROUTE,
        element: <RegisterComponent />
    },
    {
        path: RoutesConstants.SHOP_ROUTE,
        element: <ShopComponent />
    },
    {
        path: RoutesConstants.REGISTER_COMPANY_ROUTE,
        element: <RegisterCompanyComponent />
    },
    {
        path: RoutesConstants.REGISTER_DATACENTER_ROUTE,
        element: <RegisterDatacenterComponent />
    },
    {
        path: RoutesConstants.ACCOUNT_ROUTE,
        element: <AccountComponent />
    }
]
