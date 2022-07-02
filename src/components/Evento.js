import Button from './events/Button';

function Evento({numero}) {
    function primeiroEvento() {
        console.log(`Ativando primeiro evento via props! ${numero}`);
    };

    function segundoEvento() {
        console.log("Ativando o segundo evento!");
    };

    return (
        <div>
            <p>Clique para disparar um evento!</p>
            <Button event={primeiroEvento} text="Primeiro evento" />
            <Button event={segundoEvento} text="Segundo evento" />
        </div>
    );
};

export default Evento;