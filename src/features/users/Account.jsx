import { useLoaderData } from "react-router-dom";
import { getUser } from "../../Services/apiUser";
import { useSelector } from "react-redux";

function Account() {
  const user = useSelector((store) => store.user);
  console.log("user in account.js: ", user);
  const account = useLoaderData();
  console.log("ACCOUNT DATA: ", account);
  return <div>My Account</div>;
}

export default Account;

export const loader = () => {
  return getUser();
};
