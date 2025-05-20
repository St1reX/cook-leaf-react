import ProfileInfo from "../components/ProfilePage/ProfileInfo/ProfileInfo";
import ProfileRecipesPanel from "../components/ProfilePage/ProfileRecipesPanel/ProfileRecipesPanel";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function Profile() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return (
    <>
      <div className="w-full flex gap-8 justify-between">
        <ProfileInfo></ProfileInfo>
        <ProfileRecipesPanel></ProfileRecipesPanel>
      </div>
    </>
  );
}
