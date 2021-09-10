import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;

    .novoAluno {
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);

        margin: 57px 52px 46px 42px;
        padding: 33px 40px;

    }

    .novoAluno-titulo {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 2rem;
    }

    .novoAluno-titulo-barra {
        margin-right: 1rem;
        height: 2rem;
        width: 5px;
        border-radius: 25px;
        background-color: #986CDF;
    }

    .novoAluno-titulo-texto {
        margin: 0px;
    }

    .novoAluno-formulario {
        display: flex;
        flex-direction: row;

        align-items: flex-end;
    }   

    .novoAluno-formulario-agp {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .novoAluno-formulario-agp:first-child {
        margin-right: 4rem;
    }

    .novoAluno-formulario-campo {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }

    .novoAluno-formulario-campo:first-child {
        margin-bottom: 1rem;
    }

    .novoAluno-formulario-texto {
        font-size: 1.125em;
    }

    .novoAluno-cadastrar {
        color: white;
        border: 1px solid transparent;
        outline: none;
        background-color: #E911C6;
        height: 36px;
        padding: 0px 1.5rem;
        border-radius: 25px;
        margin-left: 2rem;
        align-items: center;

        cursor: pointer;
    }

    .alunosMatriculados {
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);

        margin: 57px 52px 46px 42px;
        padding: 33px 40px;
    }

    .alunosMatriculados-titulo {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-bottom: 29px;
    }

    .alunosMatriculados-titulo-texto {
        margin: 0px;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    thead {
        height: 70px;
        background-color: #986CDF;
        color: #FFFFFF;
        font-size: 1rem;
    }

    th {
        font-weight: normal;
        text-align: left;
    }

    th, td {
        padding: 1em;
    }

    td {
        height: 62px;
    }

    td button {
        background-color: transparent;
        border: none;
    }

    .img > button {
        visibility: hidden;
    }

    tr:hover {
        .img > button {
            visibility: visible;
        }
    }

    .img:nth-last-child(2) {
        width: 1rem;
    }

    .img img{
        cursor: pointer
    }

    .linha-alternada {
        background-color: #F5F5F5;
    }

`

export { Container }