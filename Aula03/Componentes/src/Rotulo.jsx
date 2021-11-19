function Rotulo(props) {
    let estilo = {color: "tomato"}
    return <strong style={estilo}>{props.titulo}</strong>;
}

export default Rotulo;