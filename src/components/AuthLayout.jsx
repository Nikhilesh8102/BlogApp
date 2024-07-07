/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Protected({ children, authentication = true }) {
    const authStatus = useSelector(state => state.auth.status);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        }
        else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoading(false);

    }, [navigate, authStatus, authentication])

    return loading ? <h1 className='text-3xl font-bold text-center mx-auto'>Loading...</h1> : <>{children}</>

}

export default Protected