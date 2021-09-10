import styled from 'styled-components'

const Container = styled.div `
    display: flex;
    flex-direction: column;

    background-color: #FFFFFF;
    width: 100%;

    color: #615858;

    .borda {
        margin: 0px 1.5rem;
        border-bottom: 1px solid #D9D9D9;
    }
    
    .Container2 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        padding: 1rem 2.5rem;

        position: relative;

        :after {
            position: absolute;
            content: '';
            border-bottom: 1px solid #d2d7da;
            width: 95%;
            transform: translateX(-50%);
            bottom: 0px;
            left: 50%;
        }
    }

    .Comeco {
        display: flex;
        align-items: center;
        flex-direction: row;

    }

    .Comeco-imagem {
        display: flex;
        justify-content: flex-end;
    }

    .Comeco-notificacoes {
        position: absolute;
        display: flex;

        border-radius: 50px;
        border: 2px solid #FFFFFF;

        width: 20px;
        height: 20px;
        background-color: #DB21BD;

        color: white;
        font-size: 0.65em;
        align-items: center;
        justify-content: center;
    }

    .Comeco-texto {
        font-size: 1em;
        margin-left: 15px;
    }

    .Final {
        display: flex;
        align-items: center;
    }

    .Final button {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 44px;
        height: 44px;
        background-color: #986CDF;
        border-radius: 100px;

        outline: none;

        border: none;
    }

    .Final button:first-child {
        margin-right: 5px;
    }

    .Final > button > img {
        cursor: pointer
    }

`

export { Container }