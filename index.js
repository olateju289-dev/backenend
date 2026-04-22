const express = require('express');

const app = express();
const port = 8080;

// Middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.send("Server is up and running");
});

// Simulated in-memory database
let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// Helper function to generate new ID
const generateId = () => {
    return users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
};

// GET all users
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

// GET a single user by ID
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(el => el.id === id);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
});

