const { connect, connection } = require('mongoose');

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connectionString = 
process.env.MONGODB_URI || 'mongodb://localhost/videosAndResponses';

module.exports = connection;
