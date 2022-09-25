
import { GlobalStyle } from '../src/styles/global'
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./routes";
import { ProductContextProvider } from './contexts/ProductContext';

function App() {
  return (
    <ProductContextProvider>
      <BrowserRouter>
        <GlobalStyle/>
        <Routers/>
      </BrowserRouter>
    </ProductContextProvider>
  );
}

export default App;
