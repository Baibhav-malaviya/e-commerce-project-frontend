import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="w-full px-0 py-10 sm:px-12 sm:w-1/2">
      <div className="w-full mb-10">
        <h1 className="text-3xl font-bold text-center ">Lorem ipsum dolor, sit amet sit. </h1>
        <p className="my-5 text-center">
          Already a user?{" "}
          <Link to={"/signIn"} className="px-3 hover:underline text-cyan-500">
            SignIn
          </Link>
        </p>
      </div>
      <form className="flex flex-col w-full space-y-3 ">
        <Input placeholder="Enter your name " type={"text"} label="Full Name: " />
        <Input placeholder="Enter your email " type={"email"} label="Email: " />
        <Input type={"password"} label="Password: " placeholder="Enter your password" />
        <Button>Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUp;
