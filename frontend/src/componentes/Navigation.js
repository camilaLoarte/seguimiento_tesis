import '../styles/Navigation.css'
function Navigation() {
    return `
        <nav class="navbar">
            <!-- Logo -->
            <div class="navbar-logo">
                <a href="#" class="logo-link">Sistema de Gestión de Tesis </a>
            </div>
            <div>
                <ul class="nav-menu">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/tesis">Tesis</a></li>
                    <li><a href="/tesistas">Estudiantes/Tesistas</a></li>
                    <li><a href="#">Docentes</a></li>
                </ul>
            </div>

            <!-- Menú de navegación -->
            <div class="navbar-menu">
                <a href="#" class="nav-link">Inicio</a>
                <a href="#" class="nav-link">Tesis</a>
                <a href="#" class="nav-link">Estudiantes/Tesistas</a>
                <a href="#" class="nav-link">Docentes</a>
            </div>
            
        </nav>
    `;
}

export default Navigation;