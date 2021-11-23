const socket = require('socket.io');
const dotenv = require('dotenv');

dotenv.config({
  path: './config.env' // Must be before requiring 'app' file in here
});


process.on('uncaughtException', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});
const app = require('./app');


const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

const io = socket(server, {
  cors:{
    origin:"https://fridge-sigma.vercel.app"
  }
})


// Listen for the connection

io.on('connection', function(socket) {
  console.log('made socket connection')
  console.log(socket.id)
})

process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! 💥 Shutting down...')
  server.close(() => {
    process.exit(1)
  });
});
