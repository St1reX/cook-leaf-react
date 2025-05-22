import { Link } from "react-router-dom";
import useLogoutMutation from "../../../../mutations/useLogoutMutation";

export default function ProfileDataDropdown({ email, role, profilePic }) {
  const logoutMutation = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
    } catch (error) {}
  };

  return (
    <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
      <button
        id="dropdown-scrollable"
        type="button"
        className="dropdown-toggle flex items-center"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Dropdown"
      >
        <div className="avatar">
          <div className="size-9.5 rounded-full">
            <img src={profilePic} alt="User Avatar" />
          </div>
        </div>
      </button>
      <ul
        className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="dropdown-avatar"
      >
        <li className="dropdown-header gap-2">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={profilePic} alt="User Avatar" />
            </div>
          </div>
          <div>
            <h6 className="text-base-content text-base font-semibold">{email}</h6>
            <small className="text-base-content/50">Admin</small>
          </div>
        </li>
        <li>
          <Link to={"/profile"} className="dropdown-item">
            <span className="icon-[tabler--user]" />
            My Profile
          </Link>
        </li>
        <li className="dropdown-footer gap-2">
          <button onClick={handleLogout} className="btn btn-error btn-soft btn-block">
            <span className="icon-[tabler--logout]" />
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
}
