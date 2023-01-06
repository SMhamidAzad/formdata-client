import { Route, Routes } from "react-router-dom";
import AdminRoute from "./authentication/AdminRoute";
import PrivateRoute from "./authentication/PrivateRoute";
import Navbar from "./components/Navbar";
import AddAdmin from "./pages/dashboard/AddAdmin";
import AddService from "./pages/dashboard/AddService";
import Dashboard from "./pages/dashboard/Dashboard";
import { privateRoutes } from "./routes/privateRoutes";
import { publicRoutes } from "./routes/publicRoutes";

function App() {
 
  return (
    < >
      <Navbar>
        <Routes>
          {
            publicRoutes.map(({path,Component},index)=>(
              <Route key={index} path={path} element={<Component/>}></Route>
            ))
          }
          <Route element={<PrivateRoute/>}>
          {
            privateRoutes.map(({path,Component},index)=>(
              <Route key={index} path={path} element={<Component/>}></Route>
            ))
          }
          </Route>
          <Route element={<AdminRoute/>}>
            <Route path='/dashboard' element={<Dashboard/>}>
              <Route path='add-admin' element={<AddAdmin/>}></Route>
              <Route path='add-service' element={<AddService/>}></Route>
            </Route>
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
