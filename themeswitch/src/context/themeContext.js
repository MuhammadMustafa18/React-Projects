import { createContext } from "react";
import { useContext } from "react";

export const themeContext = createContext({
    themeMode: "light",
    lighttheme: () => {},
    darktheme: () => {},

})

export const themeContextProvider = themeContext.Provider
// in what we learned this guy had all the common variables

// custom hook - why to return the themeContext, we're going to be using useContext(themeContext) again and again so why not have a hook just for that
export default function useTheme(){
    return useContext(themeContext)
}
