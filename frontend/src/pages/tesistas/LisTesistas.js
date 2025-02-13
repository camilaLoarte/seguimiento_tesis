import './LisTesistas.css';
import { tesistasService } from '../../services/api';

let tesistaListInstance = null;

export default class LisTesistas {
    constructor() {
        if (tesistaListInstance) {
            return tesistaListInstance;
        }
        this.tesistas = [];
        this.handleRowClick = this.handleRowClick.bind(this);
        tesistaListInstance = this;
    }

    async render() {
        const container = document.createElement('section');
        container.className = 'tesistas-section';
        container.innerHTML = `
            <section>
                <h1>Lista de Tesistas</h1>
                <a href="/registrar-tesista">Registrar</a>
                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="tesistas-table-body">
                        </tbody>
                    </table>
                </section>
            </section>
        `;

        await this.loadTesistas(container);
        const tbody = container.querySelector('#tesistas-table-body');
        tbody.addEventListener('click', this.handleRowClick);

        console.log('Contenedor de tesistas', container.innerHTML);
        return container;
    }

    handleRowClick(event) {
        const row = event.target.closest('tr');
        if (row && row.dataset.index !== undefined) {
            const tesistaIndex = parseInt(row.dataset.index, 10);
            if (!isNaN(tesistaIndex)) {
                const tesista = this.tesistas[tesistaIndex];
                console.log('Tesista seleccionado:', tesista);
            }
        }
    }

    async loadTesistas(container) {
        const tbody = container.querySelector('#tesistas-table-body');
        try {
            console.log('Inicializando la carga de tesistas');
            tbody.innerHTML = `
                <tr>
                    <td colspan="4">Cargando tesistas...</td>
                </tr>
            `;

            const response = await tesistasService.getAllTesistas();
            if (!response || !response.data) {
                throw new Error('Error al obtener los tesistas');
            }
            this.tesistas = response.data.data;
            console.log('Tesistas obtenidos:', this.tesistas);

            if (this.tesistas.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="4">No se encontraron tesistas</td>
                    </tr>
                `;
                return;
            }

            tbody.innerHTML = '';
            this.tesistas.forEach((tesista, index) => {
                const tr = document.createElement('tr');
                tr.dataset.index = index;
                tr.innerHTML = `
                    <td>${tesista.name}</td>
                    <td>${tesista.lastName}</td>
                    <td>${tesista.email}</td>
                    <td>
                        <a href="#" data-action="edit" data-index="${index}">Editar</a>
                        <a href="#" data-action="delete" data-index="${index}">Eliminar</a>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        } catch (error) {
            console.error(error);
            tbody.innerHTML = `
                <tr>
                    <td colspan="4">Error al cargar los tesistas</td>
                </tr>
            `;
        }
    }
}
