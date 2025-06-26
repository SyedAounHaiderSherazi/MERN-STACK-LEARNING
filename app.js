const cookieParser = require('cookie-parser');
const express = require('express')
const bcrypt = require('bcrypt');
const app = express();
const jwt = require('jsonwebtoken');

app.use(cookieParser())

//1)Cookie kese set karte hain and read karte hain
/*{................. app.get('/', (req, res) => {
   res.cookie('name','aoun has')
  res.send('Cookie has been set');
 });

 app.get('/read', (req, res) => {
    console.log(req.cookies)
    res.send('new page');
 });*/


app.get('/',(req,res)=>{
//2)Bycrypt ka use kese karte hain
    //1)Password ko hash karna(ENCRYPTION PROCESS)
    /*bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash('mypassword',salt,(err,hash)=>{
            if(err) throw err;
            console.log(hash);
            res.send('Password hashed successfully');
        })
    })*/
    
    //2)Password ko compare karna(DECRYPTION PROCESS)
    /*bcrypt.compare('mypassword','$2b$10$XXUR4FTD1dODbHGUC3gJSeCD7wkJIyeFW3l9dpLPlTnbCbTYnQA3e',(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Password comparison done successfully');
}))*/

//3)JWT Token ka use kese karte hain
    //1)JWT Token create karna
    let token = jwt.sign({email: 'aoun@gmail.com'},'secretkey')
    res.cookie('token',token)
    res.send('JWT token has been created and set as a cookie');
    
})

//2)JWT Token ko read karna
//JWT Token ko read karne ke liye cookie-parser ka use karte hain
//JWT Token ko verify karne ke liye jwt.verify() function ka use karte hain
//JWT Token ko verify karne ke liye secret key ka use karte hain
         //BAHAR NIKALNA TOKEN KO
app.get('/read',(req,res)=>{
    //res.send(req.cookies.token)
    let data = jwt.verify(req.cookies.token,'secretkey')
    console.log(data);
})

app.listen(3000)