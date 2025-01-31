const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', message: 'Welcome to EJS!' });
});

app.get('/register', (req, res) => {
    res.render('register', { title: 'Register Page' });
});

app.get('/login', (req, res) => {
    res.render('login', {title : 'Login Page'});
});

app.get('/jobs', (req, res) => {
    res.render('jobs', {title : "Browse jobs Page"})
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
