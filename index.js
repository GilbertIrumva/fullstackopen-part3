const express = require('express');
const morgan = require('morgan');
const app = express()

app.use(express.json())
app.use(morgan('tiny'))

let persons = [
  { 
    id: "1",
    name: "Arto Hellas", 
    number: "040-123456"
  },
  { 
    id: "2",
    name: "Ada Lovelace", 
    number: "39-44-5323523"
  },
  { 
    id: "3",
    name: "Dan Abramov", 
    number: "12-43-234345"
  },
  { 
    id: "4",
    name: "Mary Poppendieck", 
    number: "39-23-6423122"
  },
  { 
    id: "4",
    name: "Mary Poppendieck", 
    number: "39-23-6423122"
  }
];


app.get('/',(req, res)=>{
    res.send('<h1>Hello people</h1>')
})

app.get('/api/persons', (req, res)=>{
    res.json(persons)
})

app.get('/info', (req, res)=>{
  const count = persons.length
  const date = new Date()
  res.send(`<p>phoneBook has info for ${count} people</p> <p>${date}</p>`)
})

app.get('/api/persons/:id',(req, res)=>{
const id = req.params.id
const person = persons.find(person => person.id === id)

if (person){
    res.json(person)
} else {
    res.status(404).end()
}
})

app.delete('/api/persons/:id',(req, res)=>{
 const id = req.params.id
 persons = persons.filter(person => person.id  !== id)
 res.status(204).end()
})


app.post('/api/persons', (req, res) => {
  const body = req.body


  if (!body.name || !body.number) {
    return res.status(400).json({ error: 'name or number missing' })
  }


    const exists = persons.some(p => p.name === body.name)
  if (exists) {
    return res.status(400).json({ error: 'name must be unique' })
  }
 
  const generateId = () => {
    const maxId = persons.length > 0
      ? Math.max(...persons.map(p => Number(p.id)))
      : 0
    return String(maxId + 1)
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person)

  res.status(201).json(person)
})




const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})