import ProfileInfo from "../components/ProfilePage/ProfileInfo/ProfileInfo";
import ProfileRecipesPanel from "../components/ProfilePage/ProfileRecipesPanel/ProfileRecipesPanel";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import useProfileDetailsQuery from "../queries/useProfileDetailsQuery";
import { useEffect } from "react";
import RecipesProvider from "../context/RecipesContext";
export default function Profile() {
  const { user, setUser } = useAuth();
  const { data: userData, isLoading } = useProfileDetailsQuery(user?._id);

  useEffect(() => {
    if (!isLoading) {
      setUser(userData);
    }
  }, [userData]);

  return (
    <>
      <RecipesProvider>
      {!isLoading && (
        <div className="w-full flex gap-8 justify-between mb-8">
          <ProfileInfo></ProfileInfo>
          <ProfileRecipesPanel></ProfileRecipesPanel>
        </div>
      )}
      </RecipesProvider>
    </>
  );
}
