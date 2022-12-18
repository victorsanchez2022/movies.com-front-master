import Swal from "sweetalert2";

export const getToken = () => {
  let token = "";
  if (localStorage.getItem("authData")) {
    const authDataObj = JSON.parse(localStorage.getItem("authData"));
    token = "Basic " + authDataObj.token;
  }

  return token;
};

export const isAuth = () => {
  if (localStorage.getItem("authData")) {
    return true;
  }
};

export const showMessage = (title = "", message, icon, confirmButtonText) => {
  Swal.fire({
    title,
    text: message,
    icon,
    confirmButtonText,
  });
};

export const API_URL = "http://localhost:8080/api/";//process.env.REACT_APP_BACK_URL;
