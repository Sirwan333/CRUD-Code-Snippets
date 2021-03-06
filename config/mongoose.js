var mongoose = require('mongoose')

const CONNICTION_DB = *******

/**
 *
 */
module.exports.connect = async () => {
  mongoose.connection.on('connected', () => console.log('Mongoose is connected'))
  mongoose.connection.on('error', err => console.log('Mongoose Error'))
  mongoose.connection.on('disconnected', () => console.log('Mongoose is disconnected'))

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Connection is disconnected due to termination of the application')
      process.exit(0)
    })
  })

  return mongoose.connect(CONNICTION_DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}
