import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="sidenav">
        <ul>
          <li className="home-link" key="home-button">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="create-link" key="create-button">
            <Link to="/create">
            Create a Crewmate!
            </Link>
          </li>
          <li className="gallery-link" key="gallery-button">
            <Link to="/gallery">
            Crewmate Gallery
            </Link>
          </li>
        </ul>
            
       
        <img src="src/assets/peeking.7c0ab599.png" className="single-crewmate" height="150px" width="auto" style={{position: "absolute", bottom: 10 + "px"}} />

        </div>
        
      <Outlet />
    </div>
    
  );
};

export default Layout;


