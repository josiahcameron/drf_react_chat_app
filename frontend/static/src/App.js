import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import ChannelList from "./Components/ChannelList";
import LoginForm from "./Components/LoginForm";
import RegistrationForm from "./Components/RegistrationForm";


function App() {
const [isAuth, setAuth] = useState(!!Cookies.get("Authorization"));

// If it's true, it will show the booklist - if not it will show the login form
return <>

{<RegistrationForm />/* {isAuth ? <ChannelList /> : <RegistrationForm setAuth={setAuth} />} */}
</>;
}

export default App;
