import { Outlet, useLocation,Navigate } from 'react-router-dom';
import {PAGE} from 'Configs/route'
import { useEffect } from 'react';
import { CheckExp } from 'utils/CheckExp';
import {useToast} from '@chakra-ui/react'
import Layout from 'Layouts/Layout';
import Page404 from 'Pages/404/Page404';
export function ProtectedRoute() {
    const isLogin=localStorage.getItem("ACCESS_TOKEN")
    const location = useLocation();
    useEffect(() => {
        CheckExp();
    },[location]);
    const toast = useToast();
    
    // !isLogin&& <Navigate to={<Layout main={<Page404 />} />} />
    return (    
        isLogin?  <Outlet /> : <Navigate to={PAGE.N404}  />
     )
}
