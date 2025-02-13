import '../styles/Footer.css'
function Footer() {
    return `
        <footer className="footer">
            <!-- Logo y nombre de la organización -->
            <div className="footer-logo">
                <img src="Logo.png" alt="Logo de la organización" />
                <p>Universidad Internacional del Ecuador</p>
            </div>
            
            <!-- Enlaces a redes sociales -->
            <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
        </footer>
    `;
}
export default Footer