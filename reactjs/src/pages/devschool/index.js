import Cabecalho from '../../components/cabecalho/index'
import Menu from '../../components/barra-lateral/index'
import Conteudo from './conteudo'

import { Container} from './styled'

export default function Devschool () {
    return (
        <Container>
            <Menu> </Menu>
            <div className="container2">
                <Cabecalho></Cabecalho>
                <Conteudo></Conteudo>
            </div>
        </Container>
    )
}