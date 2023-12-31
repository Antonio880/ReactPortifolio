import { createContext, useContext, useState } from 'react';

const ProductsContext = createContext();

export function useProductsContext() {
    return useContext(ProductsContext);
}


export function ProductsProvider({ children }){
    const [ products, setProducts ] = useState([]);
  
    return(
      <ProductsContext.Provider value={{ products, setProducts }}>
        {children}
      </ProductsContext.Provider>
    );
  }
  