/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import authService from "../../appwrite/auth"
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";


function LogoutButton({ toggleMenu }) {
    const navigate = useNavigate();


    const dispatch = useDispatch();
    const logoutHandler = () => {
        if (toggleMenu) {
            toggleMenu();
        }

        authService.logout().then(() => {
            dispatch(logout())
            navigate('/')
        })
    }
    return (
        <div onClick={logoutHandler} className="inline-bock on-hover px-6 py-2 ml-[2px] duration-200 hover:text-white hover:cursor-pointer rounded-full">Logout</div>
    )
}

export default LogoutButton