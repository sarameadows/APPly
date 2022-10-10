const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/apply-local', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;