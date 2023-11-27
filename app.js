const express = require('express');
const app = express();
const mainRouter = require('./routers/mainRouter')
const aboutRouter = require('./routers/aboutRouter')


app.listen(3000, () =>{
    console.log('servidor corriendo en el puerto 3000')
});


app.use('/', mainRouter);
app.use('/about', aboutRouter)

app.use(express.static('public'))