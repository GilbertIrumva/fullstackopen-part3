
// const mongoose = require('mongoose')

// if (process.argv.length < 3) {
//   console.log('give password as argument')
//   process.exit(1)
// }
// const password = process.argv[2]

// const url =
//   `mongodb+srv://Gilbert_db_user:${password}@cluster1.2arnqyw.mongodb.net/PhonebookApp?retryWrites=true&w=majority`

// mongoose.set('strictQuery', false)

// mongoose.connect(url, { family: 4 })

// // schema
// const personSchema = new mongoose.Schema({
//   name: String,
//   number: String,
// })

// // model
// const Person = mongoose.model('Person', personSchema)

// // LIST ALL PERSONS
// if (process.argv.length === 3) {

//   Person.find({}).then(persons => {
//     console.log('PhonebookApp:')

//     persons.forEach(person => {
//       console.log(`${person.name} ${person.number}`)
//     })

//     mongoose.connection.close()
//   })

// }

// // ADD NEW PERSON
// else if (process.argv.length === 5) {

//   const name = process.argv[3]
//   const number = process.argv[4]

//   const person = new Person({
//     name: name,
//     number: number,
//   })

//   person.save().then(() => {
//     console.log(`added ${name} number ${number} to PhonebookApp`)

//     mongoose.connection.close()
//   })

// }