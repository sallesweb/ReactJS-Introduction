function Saudacao({ name }) {

    function gerarSaudacao(anyName) {
        return `Olá ${anyName}, tudo bem?`;
    };

    return (
        <>
            { name && <p>{ gerarSaudacao(name) }</p> }
        </>
    );
};

export default Saudacao;