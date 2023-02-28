// import required modules and components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import EditUser from "./components/EditUser";

function App() {
  return (
    // set up the router using BrowserRouter and define the route hierarchy
    <BrowserRouter> 
      <div className="container">
        <Routes>
          {/* Define the route for UserList component / representing homepage*/}
          <Route path="/" element={<UserList/>}/>
          {/* Define the route for AddUser component */}
          <Route path="add" element={<AddUser/>}/>
          {/* Define the route for EditUser component with a dynamic URL parameter */}
          <Route path="edit/:id" element={<EditUser/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// export the App component as the default export
export default App;
