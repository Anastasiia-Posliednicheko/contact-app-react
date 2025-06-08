import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors"; 
import { Component } from "react";

export default function PrivateRoute() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return isLoggedIn ? Component : <Navigate to={redirectTo}/>;
}