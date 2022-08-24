import { Outlet, useLocation,Navigate } from 'react-router-dom';
import {PAGE} from 'Configs/route'
import { useEffect } from 'react';
import { CheckExp } from 'utils/CheckExp';
import {useToast} from '@chakra-ui/react'
export function ProtectedRoute() {
    const isLogin=localStorage.getItem("ACCESS_TOKEN")
    const location = useLocation();
    useEffect(() => {
        CheckExp();
    },[location]);
    const toast = useToast();
    
    !isLogin&&toast({
      containerStyle: {
        display: "flex",
        flexDirection: "row-reverse",
      },
      description: " اشتباه است",
      status: "error",
      duration: 1000,
    });
    return (    
        isLogin?  <Outlet /> : <Navigate to={PAGE.Main}  />
     )
}
