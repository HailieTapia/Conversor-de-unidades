export default function Volumen() {
  return (
    <div>
      <h2>Historia de Usuario: Conversión de Volumen</h2>
      <p>
        Como <strong>usuario</strong>, quiero poder convertir diferentes unidades de volumen 
        (litros, mililitros, galones, onzas, metros cúbicos, etc.) para facilitar mis 
        cálculos en actividades académicas, profesionales o cotidianas.
      </p>
      <p>
        <strong>Criterios de aceptación:</strong>
      </p>
      <ul>
        <li>El sistema debe permitir ingresar un valor numérico en una unidad de volumen.</li>
        <li>Debe ofrecer un menú desplegable con las unidades disponibles.</li>
        <li>Al seleccionar la unidad de destino, debe mostrar el resultado de la conversión de manera clara.</li>
        <li>El sistema debe validar que el dato ingresado sea un número válido.</li>
        <li>El usuario debe poder realizar múltiples conversiones sin necesidad de recargar la página.</li>
      </ul>
      <p>
        <strong>Beneficio esperado:</strong> Mejorar la experiencia del usuario al contar 
        con una herramienta rápida, confiable y accesible para la conversión de medidas de volumen.
      </p>
    </div>
  );
}
