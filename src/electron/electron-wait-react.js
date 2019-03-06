import net from 'net';

const client = new net.Socket();
const port = process.env.PORT ? (process.env.PORT - 100) : 3000;
process.env.ELECTRON_START_URL = `http://localhost:${port}`;

let startedElectron = false;

const tryConnection = () => client.connect({ port: port }, () => {
  client.end();
  if (!startedElectron) {
    console.log('starting electron');
    startedElectron = true;
    const exec = require('child_process').exec;
    exec('npm run electron');
  }
});

// Initially try the connection
tryConnection();

// On connection failure, try again in 1 second
client.on('error', (error) => {
  console.log(error.message);
  setTimeout(tryConnection, 1000);
});
