import ProfileInfo from "../components/ProfilePage/ProfileInfo/ProfileInfo";
import ProfileRecipesPanel from "../components/ProfilePage/ProfileRecipesPanel/ProfileRecipesPanel";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import useProfileDetailsQuery from "../queries/useProfileDetailsQuery";
import { useEffect } from "react";

export default function Profile() {
  const { user, setUser } = useAuth();
  const { data: userData, isLoading } = useProfileDetailsQuery(user?._id);

  if (!isLoading) {
    setUser(userData);
  }

  return (
    <>
      <div className="w-full flex gap-8 justify-between">
        <ProfileInfo></ProfileInfo>
        <ProfileRecipesPanel></ProfileRecipesPanel>
      </div>
    </>
  );
}
