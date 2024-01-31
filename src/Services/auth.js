import Cookies from "js-cookie";

export const isLoggedIn = () => {
  // Read the cookie (replace 'yourCookieName' with the actual name of your cookie)
  const userCookie = Cookies.get("accessToken");

  // Check if the cookie exists and is not expired
  return !!userCookie;
};
