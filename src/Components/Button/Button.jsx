import { BrowserRouter as Router, Route, Link, Routes,Outlet,useNavigate } from "react-router-dom";

export const Button=(props)=> {
    const navigate = useNavigate()
    return ( 
        <>
        {/* <button onClick={()=>navigate(props.path)} >
          {props.name}
        </button> */}

        <Link to={props.path}>
         {props.name}
        </Link>

        </>
     );
}
