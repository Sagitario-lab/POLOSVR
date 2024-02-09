const express = require('express')
const cors = require('cors')
const {MongoClient} = require('mongodb');
const {ObjectId} = require('mongodb');

const app = express()
app.use(express.json());
app.use(cors())
const PORT = 3000

const url = 'mongodb+srv://libreriapolosur:bunjGqu6GZmXaO2O@libreria.jfxt9wt.mongodb.net/'; // Cambia esto según tu configuración
const client = new MongoClient(url)
const database = client.db('Libreria')

app.get('/', (req, res) => {
    res.send('What are you doing here!?')
})

app.get('/allbooks', async (req, res) => {
    try {
        await client.connect()

        const collection = database.collection('libros')

        const libros = await collection.find({}).toArray()

        res.json(libros)
    } catch (e) {
        console.log(e)
    }
})

app.post('/allbooks', async (req, res) => {
    try {
        await client.connect()
        const collection = database.collection('libros')
        await collection.insertOne(req.body)
    } catch (e) {
        console.log(e)
    }
})

app.delete('/allbooks', async (req, res) => {
    try {
        const booksForDelete = req.body.map(libro => new ObjectId(libro._id))
        await client.connect()
        const collection = database.collection('libros')
        await collection.deleteMany({'_id': {$in: booksForDelete}})
    } catch (e) {
        console.log(e)
    }
})


app.get('/bestsellers', async (req, res) => {

    try {
        await client.connect()

        const collection = database.collection('bestsellers')

        const libros = await collection.find({}).toArray()

        res.json(libros)
    } catch (e) {
        console.log(e)
    }
})

app.post('/bestsellers', async (req, res) => {
    try {
        await client.connect()
        const collection = database.collection('bestsellers')
        await collection.insertOne(req.body)
    } catch (e) {
        console.log(e)
    }
})

app.delete('/bestsellers', async (req, res) => {
    try {
        const booksForDelete = req.body.map(libro => new ObjectId(libro._id))
        await client.connect()
        const collection = database.collection('bestsellers')
        await collection.deleteMany({'_id': {$in: booksForDelete}})
    } catch (e) {
        console.log(e)
    }
})


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})