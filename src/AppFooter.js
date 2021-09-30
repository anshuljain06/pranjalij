import './AppFooter.scss';

function AppFooter() {
  return (
    <div class="footer">
      <div class="container-fluid">
        <div class="container">
          <div class="footer-info">
            <h2>Pranjali Joshi</h2>
            <h3>College Park, MD, USA</h3>
            <div class="footer-menu">
              <p>pranjali@pranjalij.net</p>
            </div>
            <div class="footer-social">
              <a href=""><i class="fab fa-twitter"></i></a>
              <a href=""><i class="fab fa-facebook-f"></i></a>
              <a href=""><i class="fab fa-youtube"></i></a>
              <a href=""><i class="fab fa-instagram"></i></a>
              <a href=""><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div class="container copyright">
          <p>&copy; <a href="#">Pranjali Joshi 2021</a>, All Right Reserved | Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
        </div>
      </div>
    </div>
  );
}

export default AppFooter;
