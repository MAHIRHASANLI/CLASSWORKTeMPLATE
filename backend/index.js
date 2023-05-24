const express = require('express')
const mongoose = require('mongoose')
const cors= require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.json())
require('dotenv').config()

const Mahirmodel = mongoose.model("Mahir", new mongoose.Schema({
    name: String,
    title: String,
    about: String,
    image: String
}))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })



app.get('/api/lists', async(req, res)=>{
    const {name} = req.query;
    const GetElement = await Mahirmodel.find()
    if(!name){
        res.status(200).send(GetElement)
    }else{
        const Filteredname = GetElement.filter(m =>m.name.toLowerCase().trim().includes(name.toLowerCase().trim()))
        res.status(200).send(Filteredname)
    }
})

app.get('/api/lists/:id', async(req,res)=>{
    const id = req.params.id;
   const ById= await Mahirmodel.findById(id)
   res.status(200).send(ById)
})


app.post('/api/lists', async(req,res)=>{
    const {name , title, about,image} = req.body;
    const nevObject = new Mahirmodel({
        name:name,
        title: title,
        about:about,
        image:image
    })
    const postObject = await nevObject.save()
    res.status(200).send(postObject)
})

app.put('/api/lists/:id', async(req, res)=>{
    const id = req.params.id;
    const {name, title ,about, image} = req.body;
    const PutObject = {
        name:name,
        title:title,
        about: about,
        image:image
    }
    const objects= await Mahirmodel.findByIdAndUpdate(id, PutObject)
    res.status(200).send(objects)

})

app.delete('/api/lists/:id', async(req,res)=>{
    const id = req.params.id
    const Deleteobject = await Mahirmodel.findByIdAndDelete(id)
    res.status(200).send(Deleteobject)
})
PORT =process.env.PORT
app.listen(PORT,()=>{
    console.log(`HERSEY YAXSIDIR ${PORT}`);
})

mongoose.connect(process.env.MY_CONNECT).then(()=>{
    console.log("HERSEY YAXSIDIR");
})