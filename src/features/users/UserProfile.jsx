import { User } from "lucide-react";
import { useSelector } from "react-redux";

function UserProfile({ onClick }) {
  const userDetail = useSelector((state) => state.user);

  return (
    <div
      className="flex items-center justify-center w-10 h-10 p-px rounded-full cursor-pointer bg-cyan-300"
      onClick={onClick}
    >
      {!userDetail ? <User /> : <img src={`${userDetail.profileImage}`} className="w-full h-full rounded-full" />}
    </div>
  );
}

export default UserProfile;
