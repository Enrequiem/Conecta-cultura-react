import { Col, Container, Row } from "react-bootstrap";
import TarjetaActividad from "../components/TarjetaActividad";
import { actividades } from "../data/actividades";

function Actividades() {
  function inscribir(actividad) {
    console.log("Actividad seleccionada:", actividad.nombre);
  }

  return (
    <main>
      <Container className="py-4">
        <h1 className="mb-4">Actividades</h1>
        <Row className="g-4">
          {actividades.map((actividad) => (
            <Col xs={12} md={6} lg={4} key={actividad.id}>
              <TarjetaActividad
                actividad={actividad}
                onInscribir={inscribir}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}

export default Actividades;