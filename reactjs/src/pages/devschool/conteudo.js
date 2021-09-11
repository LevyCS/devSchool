import { Container } from "./conteudo.styled"
import { InputStyled, BarraRoxa } from '../../components/styled/styled.js'
import Api from '../../service/api'
import { useEffect, useState, useRef } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import LoadingBar from 'react-top-loading-bar'

const api = new Api();

export default function Conteudo () {

    const [alunos, setAlunos] = useState([]);
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [chamada, setChamada] = useState('');
    const [turma, setTurma] = useState('');
    const [idAlterado, setIdAlterado] = useState(0);

    const loading = useRef(null)
    
    const validarResposta = (resp) => {
        if (!resp.erro)
            return true
        toast.error(`${resp.erro}`);
        return false;
    }

    const carregarAlunos = async() => {
        loading.current.continuousStart();
        let r = await api.CarregarAlunos()
        setAlunos(r)

        loading.current.complete()
    }

    const inserirAluno = async() => {
        loading.current.continuousStart();
        if (idAlterado === 0) {
            let r = await api.Inserir(nome, chamada, curso, turma)
            if (!validarResposta(r)) {
                loading.current.complete()
                return;
            } else {
                loading.current.complete()
                toast.dark('Aluno adicionado com sucesso')
            }
        } else {
            let r = await api.Alterar(idAlterado, nome, chamada, curso, turma)
            if (!validarResposta(r)) {
                loading.current.complete()
                return;
            } else {
                loading.current.complete()
                toast.dark('Aluno alterado com sucesso')
            }
        }

        limparCampos();
        carregarAlunos();
    }

    const deletarAluno = async(id) => {
        confirmAlert({
            title: 'Excluir aluno',
            message: 'Você está certo disso?',
            buttons: [
              {
                label: 'Sim',
                onClick: async() => { 
                    await api.Excluir(id)
                    toast.dark('Aluno excluido com sucesso')
                }
              },
              {
                label: 'Não',
              }
            ]
          });

        carregarAlunos()
    }

    const alterarAluno = async(item) => {
        setNome(item.nm_aluno)
        setChamada(item.nr_chamada)
        setCurso(item.nm_curso)
        setTurma(item.nm_turma)
        setIdAlterado(item.id_matricula)
    }

    const limparCampos = () => {
        setNome('')
        setChamada('')
        setCurso('')
        setTurma('')
        setIdAlterado(0)
    }

    useEffect(() => {
        carregarAlunos();
    },[])

    return (
        <Container> 
            <ToastContainer> </ToastContainer>
            <LoadingBar color='#f11946' ref={loading} />
            <div className="novoAluno">
                <div className="novoAluno-titulo"> 
                    <BarraRoxa> </BarraRoxa>
                    <h1 className="novoAluno-titulo-texto"> {idAlterado == 0 ? "Novo Aluno" : `Alterando aluno ${idAlterado}`} </h1>
                </div>
                <div className="novoAluno-formulario"> 
                    <div className="novoAluno-formulario-agp">
                        <div className="novoAluno-formulario-campo">
                            <div className="novoAluno-formulario-texto"> Nome: </div>
                            <InputStyled value={nome} onChange={e => setNome(e.target.value)} />
                        </div>
                        <div className="novoAluno-formulario-campo">
                            <div className="novoAluno-formulario-texto"> Chamada: </div>
                            <InputStyled value={chamada} onChange={e => setChamada(e.target.value)} />
                        </div>
                    </div>
                    <div className="novoAluno-formulario-agp">
                        <div className="novoAluno-formulario-campo">
                            <div className="novoAluno-formulario-texto"> Curso: </div>
                            <InputStyled value={curso} onChange={e => setCurso(e.target.value)} />
                        </div>
                        <div className="novoAluno-formulario-campo">
                            <div className="novoAluno-formulario-texto"> Turma: </div>
                            <InputStyled value={turma} onChange={e => setTurma(e.target.value)} />
                        </div>
                    </div>
                    <button className="novoAluno-cadastrar" onClick={inserirAluno}> {idAlterado == 0 ? "Cadastrar" : "Alterar"} </button>
                </div>
            </div>
            <div className="alunosMatriculados">  
                <div className="alunosMatriculados-titulo"> 
                    <BarraRoxa> </BarraRoxa>
                    <h1 className="alunosMatriculados-titulo-texto"> Alunos Matriculados </h1>
                </div> 
                <div className="alunosMatriculados-tabela"> 
                    <table>
                        <thead>
                            <tr>
                                <th> ID </th>
                                <th> Nome </th>
                                <th> Chamada </th>
                                <th> Turma </th>
                                <th> Curso </th>
                                <th> </th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {alunos.map((item, i) => 
                                <tr className={i % 2 === 0 ? "linha-alternada" : ""}>
                                    <td> {item.id_matricula} </td>
                                    <td title={item.nm_aluno}> {item.nm_aluno != null && item.nm_aluno.length >= 25 
                                        ? item.nm_aluno.substr(0, 25) + '...'
                                        : item.nm_aluno } 
                                    </td>
                                    <td> {item.nr_chamada} </td>
                                    <td> {item.nm_turma} </td>
                                    <td> {item.nm_curso} </td>
                                    <td className="img"> <button> <img src="/assets/images/alterar.png" alt=""
                                        onClick={() => {alterarAluno(item)}}
                                    /> </button> </td>
                                    <td className="img"> <button> <img src="/assets/images/delete.png" alt=""
                                        onClick={() => {deletarAluno(item.id_matricula)}}
                                    /> </button> </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </Container>
    )
}