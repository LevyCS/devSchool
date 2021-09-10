import {Container} from './styled'

export default function Barra () {
    return (
        <Container>
            <div className="Titulo"> 
                <img src="/assets/images/book.png" alt="" />
                <div className="Titulo-texto"> <span> Dev </span> School </div>
            </div>
            <div className="Background"> </div>
            <div className="Gerenciamento"> 
                <div className="Gerenciamento-titulo"> Gerenciamento </div>
                <img src="/assets/images/Seta.png" alt="" /> 
            </div>
            <div className="Alunos"> 
                <div className="Alunos-barra"> </div>
                <div className="Alunos-texto"> Alunos </div>
            </div>
        </Container>
    )
}