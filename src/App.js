import { Route, Routes } from "react-router-dom";
import Formdata from "./pages/Formdata";
import FormStoreData from "./pages/FormStoreData";


function App() {
 
  return (
    < >
      <Routes>
      <Route path='/' element={<Formdata/>}/>
      <Route path='/storedata' element={<FormStoreData/>}/>
    </Routes>
    </>
  );
}

export default App;
