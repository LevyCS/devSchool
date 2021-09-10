import { Container } from './styled'

export default function Cabecalho () {
    return (
        <Container>
            <div className="Container2"> 
                <div className="Comeco"> 
                    <div className="Comeco-imagem"> 
                        <img src="/assets/images/icon.png" alt="" />
                        <div className="Comeco-notificacoes"> 3 </div> 
                    </div>
                    <div className="Comeco-texto"> Olá, Bruno de Oliveira </div> 
                </div>
                <div className="Final">
                    <button> <img src="/assets/images/setinha.png" alt="" /> </button>
                    <button> <img src="/assets/images/log-out.png" alt="" /> </button>
                </div>
            </div>
        </Container>
    )
}