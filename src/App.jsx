import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Insert from "./Insert";
import Display from "./Display";
import Upadte from "./Update";
import Search from "./Search";
import Edit from "./Edit";

const App = () => {
return (
    <>
    <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path="home" element={<Home/>}/>
                  <Route path="insert" element={<Insert/>}/>
                  <Route path="display" element={<Display/>}/>
                  <Route path="update" element={<Upadte/>}/>
                  <Route path="search" element={<Search/>}/>
                  <Route path="edit/:id" element={<Edit/>} />
                  <Route path="edit/:Price" element={<Edit/>} />
                  
                  
                  
                  </Route>
              </Routes>
           </BrowserRouter>
      
    </>

  )
}
export default App;