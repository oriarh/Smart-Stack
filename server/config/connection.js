const mongoose = require('mongoose');

const uri = "mongodb+srv://SeanBristolLee:Green777@yourClusterName.n9z04.mongodb.net/sample_mflix?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/smartStack_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;