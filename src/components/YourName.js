function YourName({ setName }) {
    return (
        <div>
            <p>Digite o seu nome:</p>
            <input
                type="text"
                placeholder="Qual é o seu nome?"
                onChange={ (e) => setName(e.target.value) }></input>
        </div>
    );
};

export default YourName;