import { Link } from "react-router-dom"
import Container from "../container/Container"
import Logo from "../Logo"
import LogoutButton from "./LogoutButton"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import './Header.css'
import { useState } from "react"


function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    console.log(authStatus);
    const navigate = useNavigate()

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]




    return (
        <header className='py-3 shadow fixed top-0 left-0 right-0 z-10 header' >
            <Container>
                <nav className='flex justify-between items-center sm:justify-start'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width='70px' />

                        </Link>
                    </div>
                    <ul className='hidden sm:flex ml-auto '>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className='inline-bock on-hover px-6 py-2 duration-200  hover:text-white rounded-full'
                                    >{item.name}</button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutButton />
                            </li>
                        )}
                    </ul>
                    <div className="sm:hidden ">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            {/* Hamburger menu icon */}
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    {menuOpen && (
                        <ul className="absolute top-16 left-0 w-full bg-white shadow-lg sm:hidden">
                            {navItems.map((item) =>
                                item.active ? (
                                    <li key={item.name} className="border-b">
                                        <button
                                            onClick={() => {
                                                navigate(item.slug);
                                                toggleMenu(); // Close menu on navigate
                                            }}
                                            className='block w-full px-6 py-2 text-left hover:bg-gray-200 duration-200'
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                ) : null
                            )}
                            {authStatus && (
                                <li className="border-b">
                                    <LogoutButton toggleMenu={toggleMenu} />
                                </li>
                            )}
                        </ul>
                    )
                    }



                </nav>
            </Container>
        </header>
    )
}

export default Header