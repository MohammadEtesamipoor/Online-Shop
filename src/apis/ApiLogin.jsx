import { LOGIN } from "Configs/url";
import HTTPService from "Services/HTTP.Service";
import { PAGE } from "Configs/route";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export async function ApiLogin(data) {
  try {
    const res = await HTTPService.post(LOGIN, data, {
      headers: { "Content-Type": "application/json" },
    })
    
    localStorage.setItem("ACCESS_TOKEN", res.data.token);
    return true
  } catch (error) {
    return error
  }

}
