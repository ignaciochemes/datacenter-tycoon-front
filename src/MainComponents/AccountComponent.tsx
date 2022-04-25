import GeneralInformation from "../Components/AccountComponents/GeneralInformation";
import NavBar from "../Components/NavbarComponent";

export default function AccountComponent(loggedIn: any) {
    return (
        <div>
            <NavBar loggedIn={loggedIn} />
            <GeneralInformation />
        </div>
    )
}