import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    async CarregarAlunos() {
        let r = await api.get('/matricula');
        return r.data;
    }

    async Inserir(nomeAluno, numeroChamada, nomeCurso, nomeTurma) {
        let r = await api.post(`/matricula/`, {nomeAluno, numeroChamada, nomeCurso, nomeTurma})
        return r.data;
    }

    async Alterar(id, nomeAluno, numeroChamada, nomeCurso, nomeTurma) {
        let r = await api.put(`/matricula/${id}`, {nomeAluno, numeroChamada, nomeCurso, nomeTurma})
        return r.data;
    }

    async Excluir(id) {
        let r = await api.delete(`/matricula/${id}`)
        return r.data;
    }
}