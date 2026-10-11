import { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addToFavourite = (student) => {
    const alreadyAdded = favourites.some(
      (item) => item.id === student.id
    );

    if (!alreadyAdded) {
      setFavourites([...favourites, student]);
    }
  };

  const removeFromFavourite = (id) => {
    setFavourites(
      favourites.filter((student) => student.id !== id)
    );
  };

  return (
    <StudentContext.Provider
      value={{
        favourites,
        addToFavourite,
        removeFromFavourite,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  return useContext(StudentContext);
}