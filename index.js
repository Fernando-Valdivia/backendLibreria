import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
//1- configurar puerto
const app = express ();

app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), ()=>{
    console.info('Estoy escuchando el puerto '+ app.get('port'))

})


//2- configurar middlewares
app.use(cors()); //permite conexiones remotas
app.use(morgan('dev')); //nos da informacion extra en la terminal
app.use(express.json());// interpretar los datos en formato json de la solicitud
app.use(express.urlencoded({extended:true}))


//3- configurar rutas

// http://localhost:4000/prueba
app.get('/prueba',(req,res)=>{
    console.log ('alguien hizo una solicitud get a la ruta de prueba')
    res.send('Hola mundo desde el backend')
})