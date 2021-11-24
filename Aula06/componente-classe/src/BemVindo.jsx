import React from "react";
import axios from "axios";

class BemVindo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alunos: [],
        };

        this.api = axios.create({
            baseURL: "https://20e4-2804-d41-c706-8c00-412c-6a1d-5604-54f5.ngrok.io"
        })
    }

    //Evento de ciclo de vida ed um componente - Lifecycle Methods
    //did mount - montagem
    //did update - atualização / renderização
    //will unmount - desmontagem
    componentDidMount() {
        console.log("Passou no mount");
        this.consultar();
        document.title = "Meus alunos";
    }

    consultar = () => {
        const processar = (response) => {
            let novo = { alunos: response.data };
            this.setState(novo);
        }
        this.api.get("/alunos").then(processar);
    };

    render() {
        return (
            <div>
                <h3>Alunos</h3>
                <button onClick={this.consultar}>Consultar</button>
                <table>
                    <thead>
                        <tr>
                            <th>Nome do Aluno</th>
                            <th>Curso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.alunos.map((aluno) => (
                            <tr key={aluno.id}>
                                <td>{aluno.nome}</td>
                                <td>{aluno.curso}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BemVindo;