import {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

function Logout() {
const {logout, token} = useAuthContext();
const location = useLocation()

useEffect(() => {
if ( token) {
    console.log("me ejecute")
    logout();
}
}, [location.pathname, token, logout]);
return null;
}

export default Logout;