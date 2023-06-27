const jwt = require('jsonwebtoken');

const Socio = require("../Models/User");
const config = require('../Config/global');
const User = require('../Models/User');

exports.crearUsuario = async (req, res) => {

    try { 
        const { email, password } = req.body;
        const newUser = newUser(
            {
                email, 
                password
            }
        );
        await newUser.save();
        const token = await jwt.sign({_id: newUser._id}, 'secretkey');
        res.status(200).json({token});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
    //console.log(socioname, email, password)
    //console.log(socio)

    /* try {
        
        const { nombre, direccion, telefono, fechaCreacion, directorFavorito, actorFavorito, generoPreferido, prestamo } = req.body;
        const socio = new Socio(
            {
                nombre, 
                direccion, 
                telefono, 
                fechaCreacion, 
                directorFavorito, 
                actorFavorito, 
                generoPreferido, 
                prestamo
            } 
         );
        await socio.save();

        const token = jwt.sign({id: socio._id}, config.secret, {
            expiresIn: 60 * 60 * 24
        })
        //res.json({message: 'Received'})
        res.json({auth: true, token})

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }*/
}

exports.iniciarUsuario = async (req, res) => {

    //const { nombre } = req.body;
    //console.log( nombre )
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if (!user) return res.status(401).send('El email no existe');
        if (user.password !== password) return res.status(401).send('Contraseña incorrecta');

		const token = jwt.sign({_id: user._id}, 'secretkey');
    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
    /*try {
        const { email, password } = req.body;
        const socio = await Socio.findOne({email: email});
        
        if(!socio){
            return res.status(404).send("The socio doesn't exists");
        }

        const validPassword = await socio.validatePassword(password);

        if(!validPassword){
            return res.status(401).json({auth: false, token: null});
        }

        const token = jwt.sign({id: socio._id}, config.secret, {
            expiresIn: 60 * 60 * 24
        });
        
        res.json({auth: true, token});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }*/

}