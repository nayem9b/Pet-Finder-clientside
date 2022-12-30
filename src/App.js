import { RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { router } from "./Components/Routes/Route";

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
