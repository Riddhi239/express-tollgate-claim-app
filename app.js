const express = require('express')
const mongoose = require('mongoose')
//const url = 'mongodb://localhost/AlienDBex'

const app = express()

// mongoose.connect(url, {useNewUrlParser:true})
// const con = mongoose.connection

// con.on('open', () => {
//     console.log('connected...')
// })
mongoose
  .connect(
    `mongodb+srv://riddhi239:riddhi239@cluster0.y5jdn.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected to db");
  });
app.use(express.json())

const alienRouter = require('./routes/claim')
app.use('/api',alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})