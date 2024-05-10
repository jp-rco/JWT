// server.js

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    // Aquí iría tu lógica de autenticación
    if (email === 'admin@admin.com' && password === 'admin') {
        res.cookie('sessionCookie', 'your_session_token_here', { httpOnly: true });
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }
});

app.listen(5173, () => {
    console.log('Server is running on port 5173');
});
