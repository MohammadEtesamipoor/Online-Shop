import { Outlet, useLocation,Navigate } from 'react-router-dom';
import {PAGE} from 'Configs/route'
import { useEffect } from 'react';
import { CheckExp } from 'utils/CheckExp';
export function PrivateRoute() {
    const isLogin=localStorage.getItem("ACCESS_TOKEN")
    const location = useLocation();
    useEffect(() => {
        CheckExp()
    },[location]);

    return (    
        isLogin? <Navigate to={PAGE.Admin_Order}  /> : <Outlet />
     )
}
