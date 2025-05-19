import ProfileInfo from "../components/ProfilePage/ProfileInfo/ProfileInfo";
import ProfileRecipesPanel from "../components/ProfilePage/ProfileRecipesPanel/ProfileRecipesPanel";

export default function Profile() {
  return (
    <>
      <div className="w-full flex gap-8 justify-between">
        <ProfileInfo></ProfileInfo>
        <ProfileRecipesPanel></ProfileRecipesPanel>
      </div>
    </>
  );
}
