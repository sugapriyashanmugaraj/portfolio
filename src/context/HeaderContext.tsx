import React, { createContext, useContext, useState } from "react";

interface HeaderContextType {
  toggleMenu: boolean;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  handleToggle: any;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

interface HeaderProviderProps {
  children: React.ReactNode;
}

// Create the context provider component
export const HeaderProvider: React.FC<HeaderProviderProps> = ({ children }) => {
  // You can add state or other logic here if needed
  // For example: const [user, setUser] = useState<User | null>(null);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const handleToggle = (toggle: boolean) => {
    setToggleMenu((prevToggleMenu) =>
      typeof toggle === "boolean" ? toggle : !toggleMenu
    );
  };
  const contextValue: HeaderContextType = {
    toggleMenu,
    setToggleMenu,
    handleToggle,
  };
  return (
    <HeaderContext.Provider value={contextValue}>
      {children}
    </HeaderContext.Provider>
  );
};
export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
};
