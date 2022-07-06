import { CreateCompanyComponent } from "../Components/DashboardComponents/CreateCompanyComponent";
import NavBar from "../Components/NavbarComponent";

export function RegisterCompanyComponent(loggedIn: any) {
    return (
        <div>
            <NavBar />
            <CreateCompanyComponent />
        </div>
    )
}