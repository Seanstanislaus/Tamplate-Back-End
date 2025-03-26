const express = require('express'); // Import express
const app = express();

// Middleware untuk parsing JSON
app.use(express.json()); 

// Simulasi database (gunakan database nyata seperti MongoDB/MySQL dalam produksi)
const database = [
    { email: 'user@example.com', password: 'password123' }, 
    { email: 'admin@example.com', password: 'admin123' }
];

// Endpoint login
app.post('/api/authentication/login', (req, res) => {
    const { email, password } = req.body;

    // Cek apakah email ada di "database"
    const foundUser = database.find(user => user.email === email);

    if (foundUser && foundUser.password === password) {
        return res.status(200).json({ message: 'Login successful' });
    } else {
        return res.status(403).json({ message: 'INVALID_PASSWORD' });
    }
});
