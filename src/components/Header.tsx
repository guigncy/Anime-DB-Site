export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home">Anime Finder</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Início</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#top">Top Animes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#search">Buscar</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
