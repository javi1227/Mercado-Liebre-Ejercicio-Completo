const express=require('express');
const app= express();
const PORT= 3031;
const path=require('path')
app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/login.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/register.html'))
});

app.post('/registerform', (req, res) => {
    res.redirect("/home")
});




app.listen(PORT);
