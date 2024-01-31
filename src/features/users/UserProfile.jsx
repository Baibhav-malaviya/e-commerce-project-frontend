import { User } from "lucide-react";
import { useEffect, useState } from "react";
import { getUser } from "../../Services/apiUser";

function UserProfile({ onClick }) {
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    (async function () {
      const detail = await getUser();
      setUserDetail(detail.data);
    })();
  }, []);

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
