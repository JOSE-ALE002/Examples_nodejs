const dbConnection = require('../../config/dbConnection');

module.exports = app => {
    const conexion = dbConnection();

    app.get('/', (req, res) => {
        conexion.query('SELECT * FROM news', (err, result) => {
            res.render('news.ejs', {
                news: result                
            });

        });
    });
    
    app.post('/news', (req, res) => {
        const {title, description, fecha} = req.body;  
        
        //ALTERNATIVA1------>GUARDAR DATOS POR ESCAPE DE OBJETO
        conexion.query('INSERT INTO news set?', {
            title, description, fecha
        }, (err, result) => {
            if(err) {
                console.log('Ha ocurrido un error', err);                
            }else{
                res.redirect('/');
            }
        });


        //ALTERNATIVA2------> GUARDAR DATOS POR ESCAPE DE ARREGLO
        /*var datos = [title, description, fecha];
        conexion.query('INSERT INTO news(title, description, fecha) VALUES(?, ?, ?)'            
        ,datos, (err, respuesta) => {
            if(err){
                console.log('Ha ocurrido un error', err);                
            }else{          
                console.log(respuesta);
                                     
                res.redirect('/');
            }
        });*/

        //ALTERNATIVA3-------> GUARDAR DATOS POR OBJETO JSON Y CALLBACK
        /*conexion.query({
            sql: 'INSERT INTO news(title, description, fecha) VALUES(?, ?, ?)',
            timeout: 3000,
            values: [title, description, fecha],                        
        }, (err) => {
            if(err) throw err     
            res.redirect('/');         
        });*/
    });    
};