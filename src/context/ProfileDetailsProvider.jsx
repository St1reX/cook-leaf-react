import { createContext, useContext } from "react";

ProfileContext = createContext();

export default function ProfileDetailsProvider({ children }) {
  return (
    <>
      <ProfileContext.Provider>{children}</ProfileContext.Provider>
    </>
  );
}

export const useProfile = () => useContext(ProfileContext);
