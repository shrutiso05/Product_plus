import { createContext, useState } from "react";
export const Context = createContext();

const AppContext = ({ children })  => {
    const [categories, setCategoires] = useState();
    const [products, setProducts] = useState();
    return (
       <Context.Provider 
         value={{
            categories,
            setCategoires,
            products,
            setProducts,
        }}
    >
        {children}
      </Context.Provider>
    );
};

export default AppContext;