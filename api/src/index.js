import db from './db.js'
import express from 'express' 
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json())

app.get('/matricula', async (req, resp) => {
    try {
        let r = await db.tb_matricula.findAll({order: [['id_matricula', 'desc']]})
        resp.send(r);
    } catch (e) { {erro: resp.send(e.toString())} }
})

app.post('/matricula', async (req, resp) => {
    try {
        if(req.body.nomeAluno == '' || req.body.nomeAluno == null || req.body.numeroChamada == '' || req.body.numeroChamada == null || req.body.nomeCruso == '' || req.body.nomeCruso == null || req.body.nomeTurma == '' || req.body.nomeTurma == null) {  
            return resp.send( {erro: 'Um ou mais campos não estão preenchidos'} );
        }

        if(isNaN(req.body.numeroChamada)) {
            return resp.send( { erro: 'Chamada precisa ser um número'})
        }

        if(req.body.numeroChamada < 0) {
            return resp.send ( {erro: 'Chamada precisa ser um número positivo'})
        }

        let condicao = await db.tb_matricula.findOne({where: {nr_chamada: req.body.numeroChamada, nm_turma: req.body.nomeTurma}})
        if (condicao != null) {
            return resp.send( {erro: 'Esta chamada pertence a um aluno'} )
        }

        let pessoa = {
            nm_aluno: req.body.nomeAluno,
            nr_chamada: req.body.numeroChamada,
            nm_curso: req.body.nomeCurso,
            nm_turma: req.body.nomeTurma
        }

        let r = await db.tb_matricula.create(pessoa)
        resp.send(r)

    } catch(e) { {erro: resp.send(e.toString())} }
})

app.put('/matricula/:id', async (req, resp) => {
    try {
        if(req.body.nomeAluno == '' || req.body.nomeAluno == null || req.body.numeroChamada == '' || req.body.numeroChamada == null || req.body.nomeCruso == '' || req.body.nomeCruso == null || req.body.nomeTurma == '' || req.body.nomeTurma == null) {  
            return resp.send( {erro: 'Um ou mais campos não estão preenchidos'} );
        }

        if(isNaN(req.body.numeroChamada)) {
            return resp.send( { erro: 'Chamada precisa ser um número'})
        }

        if(req.body.numeroChamada < 0) {
            return resp.send ( {erro: 'Chamada precisa ser um número positivo'})
        }

        let condicao = await db.tb_matricula.findOne({where: {nr_chamada: req.body.numeroChamada, nm_turma: req.body.nomeTurma}})
        if (condicao != null) { 
            if(req.params.id != condicao.id_matricula) {
                resp.send({erro: 'Esta chamada pertence a um aluno'});
            } 
        }

        let r = await db.tb_matricula.update({ nm_aluno: req.body.nomeAluno, nr_chamada: req.body.numeroChamada, nm_curso: req.body.nomeCurso, nm_turma: req.body.nomeTurma}, {where: {id_matricula: req.params.id}})
        resp.sendStatus(200)
    } catch (e) { {erro: resp.send(e.toString())} }
})

app.delete('/matricula/:id', async (req, resp) => {
    try {
        let r = await db.tb_matricula.destroy({where: {id_matricula: req.params.id}})
        resp.sendStatus(200)
    } catch (e) { {erro: resp.send(e.toString())} }
})

app.listen(process.env.PORT,
    x => console.log(`>> Server up at port ${process.env.PORT}`))