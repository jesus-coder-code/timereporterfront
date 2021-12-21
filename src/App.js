import ListRoutes from "./routes/routes";
import { BrowserRouter } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <ListRoutes />
    </BrowserRouter>
  );
}

export default App;
