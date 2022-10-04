import { GlobalStyle } from '../src/styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Routers } from './routes';
import { MenuContextProvider } from './contexts/MenuContext';
<<<<<<< HEAD
import React from 'react';
=======
import { ProductContextProvider } from './contexts/ProductContext';
>>>>>>> 87f8f15c51803ce5ca50ee42c8f8e1ed15a81412

function App() {
  return (
    <ProductContextProvider>
    <MenuContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routers />
      </BrowserRouter>
    </MenuContextProvider>
    </ProductContextProvider>
  );
}

export default App;
