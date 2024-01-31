import { useLoaderData } from "react-router-dom";
import { getUser } from "../../Services/apiUser";

function Account() {
  const account = useLoaderData();
  console.log("ACCOUNT DATA: ", account);
  return <div>My Account</div>;
}

export default Account;
export const loader = () => {
  return getUser();
};
