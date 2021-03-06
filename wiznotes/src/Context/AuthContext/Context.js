import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router';

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {

    let navigate = useNavigate();
    const [userLogin, setUserLogin] = useState(false);
    const [response, setResponse] = useState({});
    const userToken = localStorage.getItem("userToken")
    
    useEffect(() => {
        if(userToken){
            setUserLogin(true);
        }
    }, [userToken])    

    const checkUserLogin = () => {
        useEffect(()=> {
            if(!userLogin) {
                navigate("/")
            }
        })
    }    
    
    return (
        <AuthContext.Provider value={{userLogin, setUserLogin, 
                                    response, setResponse, 
                                    checkUserLogin}}>
            {children}
        </AuthContext.Provider>
    );
}

export { useAuth, AuthProvider };