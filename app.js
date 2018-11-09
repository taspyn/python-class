 const express = require ('express'); 
 const mailer = require('express-mailer');
 const bodyParser = require('body-parser')
const app = express();
const port = 3000

app.set('views',__dirname + '/views');
app.set('view engine', 'pug')

app.use(bodyParser.json())


const auth = {
    user: '9a5aa58c282641',
    pass: 'c701f199ad4edd'
}

const options = {
    from: "wambui.ngwiri@gmail.com",
    host: "smtp.mailtrap.io",
    port: 25,
    auth: auth,
    transportMethod: 'SMTP'

}

app.use((req, res, next)  => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

    mailer.extend(app, options);

 app.post('/contacts', (req, res)=>{
     const to = {
         to: "c81848add8-cf12f2@inbox.mailtrap.io",
         subject: req.body.subject,
         name: req.body.name,
         message: req.body.message
     }

     app.mailer.send('email', to, (error) =>{
         console.log(error)
     } );

    res.send('node js application!')
 })

 app.listen(port, () => console.log(`Example app listening on port ${port}!`))