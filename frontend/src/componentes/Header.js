import '../styles/Header.css';

function Header() {
    return `
        <header class="main-header">
            <div class="header-container">
                <figure class="header-logo">
                    <img src="./images/logo.jpg" alt="Logo de la UIDE">
                </figure>
                <div class="header-text">
                    <h1>Seguimiento Gestión de Tesis</h1>
                    <h2>UIDE - Campus Loja</h2>
                </div>
            </div>
        </header>
    `;
}

export default Header;
