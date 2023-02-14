import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList/>}/>
          <Route path="add" element={<AddUser/>}/>
          <Route path="edit/:id" element={<EditUser/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
