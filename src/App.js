import { GlobalStyle } from '../src/styles/global'
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./routes";
import { MenuContextProvider } from './contexts/MenuContext';

function App() {
  return (
    <MenuContextProvider>
      <BrowserRouter>
        <GlobalStyle/>
        <Routers/>
      </BrowserRouter>
    </MenuContextProvider>
  );
}

export default App;
