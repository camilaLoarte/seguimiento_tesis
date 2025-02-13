import '../styles/Layout.css';

function Layout(content) {
    return `
    <div class="layout">
        <!-- Encabezado -->
        <header class="layout-header">
            <h1>Sistema de Gestión de Tesis</h1>
        </header>

        <!-- Contenido principal -->
        <main class="layout-content">
            ${content}
        </main>

        <!-- Pie de página -->
        <footer class="layout-footer">
            <p>&copy; 2025 Universidad Internacional del Ecuador</p>
        </footer>
    </div>
    `;
}

export default Layout;
