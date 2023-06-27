const express = require('express');
const conectarDB = require('./Config/db')
const config = require('./Config/global');
const cors = require('cors');

const app = express();

//Conectar BD
conectarDB();

app.use(cors())

app.use(express.json());


app.use('/api/peliculas', verifyToken, require('./routes/pelicula'));
app.use('/api/socios', verifyToken, require('./routes/socio'));
app.use('/api/prestamos',verifyToken,  require('./routes/prestamo'));
app.use('/api/copias', verifyToken, require('./routes/copia'));
app.use('/api/user', require('./routes/user'));
app.use('/api/pdf', verifyToken, require('./routes/pdf'));



app.listen(config.port, () => {
    console.log('El servidor por el puerto 4000')
})

async function verifyToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}

		const payload = await jwt.verify(token, 'secretkey');
		if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		//console.log(e)
		return res.status(401).send('Unauhtorized Request');
	}
}
