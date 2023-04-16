import History from "Services/HistoryServices";
import { useNavigate } from "react-router-dom";
import { PAGE } from "Configs/route";
import { useToast } from "@chakra-ui/react";
export const parseJwt = (token) => {
  let base64Url = token.split(".")[1];
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  let jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
};
//jwt decode

export function CheckExp() {
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (!token) return;
  const { exp } = parseJwt(token);
  if (exp * 1000 < Date.now()) {
    localStorage.removeItem("ACCESS_TOKEN");
    window.history.pushState({}, null, "/login");
    localStorage.setItem("IS_LOGNIN",true)
    window.location.reload();
  }
}

