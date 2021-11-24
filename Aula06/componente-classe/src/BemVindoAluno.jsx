import React from "react";

class BemVindo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nome: "Marilia", contador: 0 };
    }

    aumentar = () => {
        let novo = { contador: this.state.contador + 1, };
        this.setState(novo);
    };

    mudarNome = () => {
        let nome = prompt("Qual o novo nome?");
        this.setState({ nome } );
    };

    render() {
        return (
            <div>
                <h2>Ola visitante {this.state.nome}</h2>
                <h3>Voce ja acessou {this.state.contador} vezes</h3>
                <button onClick={this.aumentar}>Aumentar</button>
                <button onClick={this.mudarNome}>Mudar o nome</button>
            </div>
        );
    }
}

export default BemVindo;