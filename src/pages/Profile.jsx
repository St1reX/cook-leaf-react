import ProfileInfo from "../components/ProfilePage/ProfileInfo/ProfileInfo";
import ProfileRecipesPanel from "../components/ProfilePage/ProfileRecipesPanel/ProfileRecipesPanel";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import useProfileDetailsQuery from "../queries/useProfileDetailsQuery";
import { useEffect } from "react";

export default function Profile() {
  const { user, setUser } = useAuth();
  const { data: userData, isLoading } = useProfileDetailsQuery(user?._id);

  //Refresh user data on page load
  useEffect(() => {
    if (!isLoading && userData) {
      setUser(userData);
    }
  }, [isLoading, userData]);

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
