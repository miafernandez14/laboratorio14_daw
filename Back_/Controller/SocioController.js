const Socio = require("../Models/Socio");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../Config/global');



exports.Login = async (req, res) => {
  const { username, password } = req.body;
  try {
   
    const socio = await Socio.findOne({ username });
    if (!socio) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const validPassword = await socio.validatePassword(password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    const token = jwt.sign({id: socio._id}, config.secret, {
      expiresIn: 60 * 60 * 24
  }) 
    res.json({auth: true, token})
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error de inicio de sesión' });
  }


}


exports.crearSocio = async (req, res) => {
  try {
    const { username, email, password, direccion, telefono, directorFavorito, actorFavorito, generoPreferido } = req.body;
    const socio = new Socio({
      username,
      email,
      password,
      direccion,
      telefono,
      directorFavorito,
      actorFavorito,
      generoPreferido
    });

    socio.password = await socio.encryptPassword(socio.password);
    await socio.save();

    res.status(200).json({ message: 'Socio creado exitosamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Hubo un error al crear el socio' });
  }
};

// const token = jwt.sign({id: socio._id}, config.secret, {
  //     expiresIn: 60 * 60 * 24
  // })
  // //res.json({message: 'Received'})
  // res.json({auth: true, token})
// try {
  //   const newSocio = new Socio(req.body);
  //   const socio = await newSocio.save();
  //   res.status(201).json(socio);
  // } catch (error) {
  //   res.status(500).json({ error: 'Error al crear el socio' });
  // }
exports.obtenerSocios = async (req, res) => {
  try {
    const socios = await Socio.find();
    res.status(200).json(socios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los socios' });
  }
};


exports.obtenerSocio = async (req, res) => {
  try {
    const socio = await Socio.findById(req.params.id);
    if (!socio) {
      return res.status(404).json({ error: 'Socio no encontrado' });
    }
    res.status(200).json(socio);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el socio' });
  }
};


exports.actualizarSocio = async (req, res) => {
  try {
    const socio = await Socio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!socio) {
      return res.status(404).json({ error: 'Socio no encontrado' });
    }
    res.status(200).json(socio);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el socio' });
  }
};


exports.eliminarSocio = async (req, res) => {
    try {
      const socioId = req.params.id;
  
      const socio = await Socio.findByIdAndRemove(socioId);
      if (!socio) {
        return res.status(404).json({ message: 'Socio no encontrado' });
      }
      await Prestamo.deleteMany({ socio: socioId });
  
      res.json({ message: 'Socio eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

