import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const [cookies, setCookie] = useCookies(['user', 'tokens']);
    const handleLogin = async () => {
        setCookie('tokens', {accessToken: "reallylonghardcodedaccesstokenstring", refreshToken: "reallylonghardcodedrefreshtokenstring"}, { path: "/"})
        console.log("Using token to make request to set User cookie request to /api/me...")
        setCookie('user', {id: 1, username: "jay", firstName: "Jay", lastName: "Arredondo"}, { path: "/"})
        console.log("Setting cookie for User object")
        navigate("/home")
    }

    return (
        <>
            <button onClick={handleLogin}>Login with Azure</button>
        </>
    )
}

export default LoginPage;