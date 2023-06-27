const mongoose = require('mongoose');
const bcrypt = require('bcrypt');





// const SocioSchema = mongoose.Schema({
    
//     nombre: {
//         type: String,
//         require: true
//     },
//     direccion: {
//         type: String,
//         require: true
//     },
//     telefono: {
//         type: Number,
//         require: true
//     },
//     fechaCreacion: {
//         type: Date,
//         default: Date.now()
//     },
//     peliculas: [{
//         id: { type: mongoose.Schema.ObjectId, ref: 'Prestamo' } 
//     }]

// });

const SocioSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    direccion: {
      type: String,
      required: true
    },
    telefono: {
      type: Number,
      required: true
    },
    fechaCreacion: {
      type: Date,
      default: Date.now()
    },
    directorFavorito:{
        type: String,
        required: true
    },
    actorFavorito:{
        type: String,
        required: true
    },
    generoPreferido: {
        type: String,
        required: true
    },
    prestamo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prestamo',
        default: []
    }]
  });


SocioSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt)
};


SocioSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('Socio',SocioSchema)