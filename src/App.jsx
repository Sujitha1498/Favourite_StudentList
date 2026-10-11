import { NavLink, Route, Routes } from "react-router-dom";

import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";
import { useStudent } from "./context/StudentContext";

import "./App.css";

function App() {
  const { favourites } = useStudent();

  return (
    <div className="app-layout">

      {/* Sidebar */}
      <aside className="sidebar">

        {/* Logo */}
        <div className="brand">
          <div className="brand-icon">S</div>

          <div>
            <h2>StudentHub</h2>
            <p>Student Manager</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">

          <p className="nav-title">MAIN MENU</p>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "side-link active" : "side-link"
            }
          >
            <span className="nav-icon">⌂</span>
            <span>Students</span>
          </NavLink>

          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              isActive ? "side-link active" : "side-link"
            }
          >
            <span className="nav-icon">♡</span>
            <span>Favourites</span>

            <strong className="side-count">
              {favourites.length}
            </strong>
          </NavLink>

        </nav>

        {/* Sidebar bottom */}
        <div className="sidebar-bottom">

          <div className="profile-circle">
            S
          </div>

          <div>
            <p>Student Portal</p>
            <span>Manage your students</span>
          </div>

        </div>

      </aside>

      {/* Main section */}
      <main className="main-content">

        {/* Top header */}
        <header className="topbar">

          <div>
            <p className="topbar-label">
              STUDENT DASHBOARD
            </p>

            <h1>
              Manage your students
            </h1>
          </div>

          <div className="favourite-counter">

            <div className="counter-icon">
              ♡
            </div>

            <div>
              <small>Favourite Students</small>
              <strong>{favourites.length}</strong>
            </div>

          </div>

        </header>

        {/* Page content */}
        <Routes>

          <Route
            path="/"
            element={<StudentList />}
          />

          <Route
            path="/favourites"
            element={<FavouriteStudents />}
          />

        </Routes>

      </main>

    </div>
  );
}

export default App;