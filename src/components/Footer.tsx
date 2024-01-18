import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Footer() {
  return (
    <footer className="text-center text-lg-start fixed-bottom bg-body-tertiary bg-white  text-muted">

   
      <div className="text-center p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.09)' }}>
      <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>

        © 2024 Copyright: 
        <a className="text-reset fw-bold" href="">Store.com</a>
      </div>
    </footer>
  
  );
}
