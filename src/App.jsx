import { useEffect } from "react";
import { useState } from "react";
import authService from './appwrite/auth';
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";

import { Header, Footer } from './components'
import { Outlet } from "react-router-dom";

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   (async function () {
  //     await authService.getCurrentUser()
  //       .then((userData) => {
  //         if (userData) {
  //           dispatch(login({ userData }))
  //         }
  //         else {
  //           dispatch(logout());
  //         }
  //       })
  //       .finally(() => setLoading(false));
  //   })();
  // }, [])

  useEffect(() => {
    (async function () {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error("Failed to fetch current user:", error);
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    })();
  }, [dispatch]);

  return (
    !loading ? (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-200' style={{ backgroundColor: '#EBE3D5' }}>
        <div className='w-full block'>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    ) : null

  )
}

export default App



