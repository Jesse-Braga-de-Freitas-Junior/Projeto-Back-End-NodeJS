const router = require('express').Router()

const Person = require('../models/Person')

//create - criação de dados
router.post('/',async (req, res)=> {
    //req.budy
    //{name: "veiculo-1",placa : "10f21", chassi:"1232323er342f", renavam: "12e3458rer223c", modelo: "Renegade", marca: "Jeep", ano: "2021", cor: "black"}
    const { name, placa, chassi, renavam, modelo, marca, ano, cor } = req.body

    if(!name) {
        res.status(422).json({error: 'O nome é obrigatório!'})
        return
    }
    
    const person = {
        name,
        placa,
        chassi,
        renavam,
        modelo,
        marca,
        ano,
        cor
    }

    try {
        //criando dados
        await Person.create(person)
        res.status(201).json({message:'Pessoa inserida com sucesso!'})
                
    } catch (error) {
        res.status(500).json({error: error})
    }
})
//Read - leitura de dados
router.get('/', async (req, res)=>{
    try {
        const people = await Person.find()
        res.status(200).json(people)
        
    } catch (error) {
        res.status(500).json({error:error})
    }
})

router.get('/:id', async (req, res)=>{
    console.log(req)
    // extrair o dado da requisição pela url = req.params
    const id = req.params.id

    try {
        const person = await Person.findOne({_id:id})

        if(!person) {
            res.status(422).json({message: 'O usuario solicitado não foi encontrado em nosso cadastro!'})
            return
        }

        res.status(200).json(person)
        
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//update - atualização de dados (PUT, PATCH)
router.patch('/:id', async (req, res)=>{

    const id = req.params.id

    const { name, placa, chassi, renavam, modelo, marca, ano, cor } = req.body

        const person = {
            name,
            placa,
            chassi,
            renavam,
            modelo,
            marca,
            ano,
            cor
        }

    try {
        const updatedPerson = await Person.updateOne({_id:id}, person)
        console.log(updatedPerson)

        if(updatedPerson.matchedCount === 0)
        res.status(422).json({message: 'O usuario solicitado não foi encontrado em nosso cadastro!'})
            return
        
        res.status(200).json(person)        
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

// Delete - deletar dados
router.delete('/id:', async (req, res)=> {
    const id = req.params.id

    const person = await Person.findOne({_id: id} )

    if(!person) {  
    res.status(422).json({message: 'O usuario solicitado não foi encontrado em nosso cadastro!'})
            return
    }

    try {

        await Person.deleteOne({_id: id})

        res.status(200).json({message: 'O usuário solicitado foi removido com sucesso!'})
        
    } catch (error) {
        res.status(500).json({ error: error })
        
    }
})

module.exports = router
