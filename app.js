const express = require('express');
const app = express();
const mainRouter = require('./routers/mainRouter')



app.listen(3000, () =>{
    console.log('servidor corriendo en el puerto 3000')
});


app.use('/', mainRouter);

app.use(express.static('public'))