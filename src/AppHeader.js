import './AppHeader.scss';

function AppHeader() {
  return (
    <div class="navbar navbar-expand-lg bg-light navbar-light">
      <div class="container-fluid">
        <a href="index.html" class="navbar-brand">Pranjali Joshi</a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div class="navbar-nav ml-auto">
            <a href="#aboutMe" class="nav-item nav-link">About Me</a>
            <a href="#portfolio" class="nav-item nav-link">Portfolio</a>
            <a href="#contact" class="nav-item nav-link">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
