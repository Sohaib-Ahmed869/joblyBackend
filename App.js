// server.js (or app.js)
const emailRoutes = require('./Routes/emailRoutes');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({ origin: '*' }));

// Routes
app.use('/api/email', emailRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

