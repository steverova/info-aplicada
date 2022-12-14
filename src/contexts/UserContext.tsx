import React, {createContext, SetStateAction,useContext,useState,} from "react";
import { LoginForm } from "../interfaces/LoginForm";

const UserContext = createContext<
  [LoginForm, React.Dispatch<SetStateAction<LoginForm>>] | null
>(null);

//tener informacion dentro
const useUser = () => {
  const [data, setData] = useContext(UserContext) as any;
  return { data, setData };
};


//pasar la informacion a otro componeNte
const UserProvider = ({ children }: { children: any }) => {
  const authUser = useState<LoginForm>({
    email: children.email,
    password: children.password,
  });

  return (
    <UserContext.Provider value={authUser}>{children}</UserContext.Provider>
  );
};

export { UserProvider, useUser };
