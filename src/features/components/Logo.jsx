import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to={"/signin"} className="text-3xl font-bold">
      Logo
      {/* <Link to="/">LOGO</Link> */}
    </Link>
  );
}

export default Logo;
