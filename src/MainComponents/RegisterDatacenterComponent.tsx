import NavBar from "../Components/NavbarComponent";
import { RegisterComponent } from '../Components/DatacenterComponents/RegisterComponent';

export function RegisterDatacenterComponent(loggedIn: any) {
    return (
        <div>
            <NavBar loggedIn={loggedIn} />
            <RegisterComponent />
        </div>
    )
}