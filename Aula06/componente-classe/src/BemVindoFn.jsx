import React from "react";
import axios from "axios";

function BemVindoFn() {
    const [alunos, setAlunos] = React.useState([]);
    const api = axios.create({
        baseURL: "https://20e4-2804-d41-c706-8c00-412c-6a1d-5604-54f5.ngrok.io"
    });

    const consultar = () => {
        const processar = (response) => {
            let novo = response.data;
            setAlunos(novo);
        };
        api.get("/alunos").then(processar);
    };

    React.useEffect(consultar, []);

    return (
        <div>
            <h3>Alunos</h3>
            <button onClick={consultar}>Consultar em Função</button>
            <table>
                <thead>
                    <tr>
                        <th>Nome do Aluno</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map((aluno) => (
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

export default BemVindoFn;