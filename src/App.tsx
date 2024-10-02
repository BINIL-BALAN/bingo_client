import "./styles/App.css";
import { RouterProvider } from "react-router-dom";
import mainRoute from "./route/mainRouter";
function App() {
  return <RouterProvider router={mainRoute} />;
}

export default App;
