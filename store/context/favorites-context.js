import React, { createContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesContextProvider({ children }) {
  const [ids, setIds] = useState([]);

  const value = {
    ids: ids,
    addFovorites: (mealId) => {
      setIds([...ids, mealId]);
    },
    removeFavorites: (mealId) => {
      setIds(ids.filter((id) => id !== mealId));
    },
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
