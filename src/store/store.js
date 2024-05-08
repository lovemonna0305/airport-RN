import React, { createContext, useState, useContext } from 'react';

const StoreContext = createContext();
export const StoreProvider = ({ children }) => {
  const [store, setStore] = useState({
    isLoggedin: false,
    page: "home",
    showSplashScreen: true,
    role: '',
    isLoading: false,
    currentUser: {
      name: "Lucas Scott",
      id: "@lucasscott3",
      dob: "07/11/1997",
      pob: 1,
      passport: 1,
      image_file: "https://i.pravatar.cc/300",
      height: 175,
      weight: 68,
      club: 1,
      pitch: 1,
    },
    user: {},
    darkMode:false,
  });

  const changeStore = (newStore) => {
    setStore(newStore);
  };

  return (
    <StoreContext.Provider value={{ store, changeStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);