const app = require('./app');
const connectDatabase = require('./config/database');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 8000;

dotenv.config({ path: './config/credentials.env' });

connectDatabase();

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});