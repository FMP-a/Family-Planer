const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let loggedInUser = null;

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Dummy-Überprüfung - Hier müsstest du eine sichere Authentifizierung implementieren
    if (username === 'demo' && password === 'pass') {
        loggedInUser = username;
        res.json({ success: true, message: 'Anmeldung erfolgreich' });
    } else {
        res.status(401).json({ success: false, message: 'Anmeldung fehlgeschlagen' });
    }
});

app.get('/logout', (req, res) => {
    loggedInUser = null;
    res.json({ success: true, message: 'Abmeldung erfolgreich' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
