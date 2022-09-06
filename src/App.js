
import { GlobalStyle } from '../src/styles/global'
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routers/>
    </BrowserRouter>
  );
}

export default App;
