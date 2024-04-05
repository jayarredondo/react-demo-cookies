import { useEffect } from "react";
import { useCookies } from "react-cookie";

const WelcomePage = () => {
    const [cookies, setCookie] = useCookies(['user', 'tokens'])

    useEffect( () => {
        console.log(cookies.tokens)
        console.log(cookies.user)
    }, [])

    return (
        <>
            <h1>Welcome, {cookies.user.firstName}</h1>
        </>
    )
}

export default WelcomePage;