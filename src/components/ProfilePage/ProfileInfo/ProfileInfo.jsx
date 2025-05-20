import { useAuth } from "../../../context/AuthContext";

export default function ProfileInfo() {
  const { user } = useAuth();

  return (
    <>
      <div className="card w-full lg:max-w-sm h-fit">
        <div className="card-body gap-4">
          <div className="flex flex-col items-center gap-8">
            <img
              src={user.profile_picture_path}
              alt="User Avatar"
              className="rounded-full shadow-md w-36 h-36"
            />
            <h2 className="text-2xl font-bold">{user.mail}</h2>
          </div>
          <div className="divider"></div>
          <div className="w-full flex justify-end items-center">
            <button className="btn btn-soft font-semibold w-fit">
              <span
                className="icon-[mingcute--edit-2-line]"
                style={{ width: 24, height: 24, color: "#000" }}
              />
              Edit profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
