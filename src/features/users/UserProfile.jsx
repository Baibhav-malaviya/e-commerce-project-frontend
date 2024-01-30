import { User } from "lucide-react";

function UserProfile({ onClick }) {
  return (
    <div className="p-px rounded-full cursor-pointer bg-cyan-300" onClick={onClick}>
      <User />
    </div>
  );
}

export default UserProfile;
