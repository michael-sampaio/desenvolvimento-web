import Rotulo from "./Rotulo";

function NomeDaMusica(props) {
    let estilo = {
        margin: "20px",
        background: "#def",
        border: "1px solid #000",
        textAlign: "center",
    };

    return (
        <div style={estilo}>
            <Rotulo titulo="artista" />
            {props.artista}
            <br />
            <Rotulo titulo="musica" />
            {props.musica}
        </div>
    );
}

export default NomeDaMusica;