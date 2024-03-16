import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  //As soon as the component renders we'll attact a eventListener for popstate on the window object
  useEffect(()=>{
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    }
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  }

  return <NavigationContext.Provider value={{currentPath, navigate}}>
    {children}
  </NavigationContext.Provider>
}

export default NavigationContext;
export {NavigationProvider};
