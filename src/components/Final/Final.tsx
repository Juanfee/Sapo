import './Final.css';
import photo01 from '../../assets/photo02.jpg';

function Final() {
  return (
    <section className="final-message">
      <div className="final-message-content">
        <p>Después de tantos años...</p>

        <h2>Gracias por estar siempre ahí.</h2>

        <p>
          Gracias por cada enseñanza, cada consejo, cada momento y cada
          recuerdo.
        </p>

        <h3>Feliz cumpleaños, Sapito</h3>
        <img src={photo01} alt={'sapo'} className="timeline-image" />
      </div>
    </section>
  );
}

export default Final;
