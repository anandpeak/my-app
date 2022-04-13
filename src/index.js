import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Haha from "./pages/games/Haha";
import Test from "./pages/games/Test";



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/game/:id/test"  element={<Test />} />
      <Route exact path="/game/:id/haha" element={<Haha/>}/>
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>,
  rootElement
);