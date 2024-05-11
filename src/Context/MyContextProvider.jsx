import React from "react";

export const MyContext = React.createContext();

export const MyProvider = ({ children }) => {
  const [find, setFind] = React.useState();
  const [click, setClick] = React.useState(false);
  return (
    <MyContext.Provider value={{ find, setFind, click, setClick }}>
      {children}
    </MyContext.Provider>
  );
};
