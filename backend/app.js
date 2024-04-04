const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoute');
const PORT = 3000;
const dbUrl = 'mongodb://localhost:27017/mern-jwt-auth';

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server up on port ${PORT}`);
});

mongoose.connect(dbUrl)
    .then(() => console.log('DB connected!'))
    .catch((err) => console.error(err));

app.use('/users', userRoutes);


