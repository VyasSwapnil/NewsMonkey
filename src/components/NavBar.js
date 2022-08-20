const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">News Monkey</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" onClick={props.changeFilter} value="all">
                  All
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={props.changeFilter} value="business">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={props.changeFilter} value="national">
                  National
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={props.changeFilter} value="sports">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={props.changeFilter} value="world">
                  World
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={props.changeFilter} value="politics">
                  Politics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={props.changeFilter} value="technology">
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={props.changeFilter} value="startup">
                  Startup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={props.changeFilter} value="entertainment">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={props.changeFilter} value="miscellaneous">
                  Miscellaneous
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={props.changeFilter} value="hatke">
                  Hatke
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={props.changeFilter} value="science">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={props.changeFilter} value="automobile">
                  Automobile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
