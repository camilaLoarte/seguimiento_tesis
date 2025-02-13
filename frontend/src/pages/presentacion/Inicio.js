import "./inicio.css";
import TesisService from '../services/tesis';

function Inicio() {

    console.log(TesisService)
    return (
        `


         <div className="inicio-container">
            <div className="inicio-section">
                <h1>Bienvenidos al Sistema</h1>
            </div>
            <div className="inicio-section">
                <h2>Plataforma Integral de Seguimiento de Tesis</h2>
            </div>
            <div className="inicio-section">
                <h3>Gestiona el proceso de tu tesis</h3>
            </div>
            <div className="inicio-section">
                <h4>Registra tu tesis</h4>
                
            </div>
                <div id="tesis-grid" class="tesis-grid">
            </div>
        </div>
       `
    );
}

export default Inicio;
