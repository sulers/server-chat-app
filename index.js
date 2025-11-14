require('dotenv').config();
const app = require('./app');
const connectDb = require('./config/dbConfig');

// Connect to the database
connectDb();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});