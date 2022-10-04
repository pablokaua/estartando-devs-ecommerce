import { GlobalStyle } from '../src/styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Routers } from './routes';
import { MenuContextProvider } from './contexts/MenuContext';
import React from 'react';
import { ProductContextProvider } from './contexts/ProductContext';

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
