const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// const validEmail = function(value) {
//     return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
// };

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'User email required'],
        // validate: {
        //     validator: validEmail,
        // },
        // message: props => `${props.value} is not a valid email address!`
     },
     password: {
        type: String,
        required: [true, 'Password required'],
     },
     favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
     }]
},
{
    id: false,
    toJSON: {
        virtuals: true,
        getters: true,
    },
});

usersSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

usersSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password)
}

const Users =  mongoose.model('User', usersSchema);
module.exports = Users;