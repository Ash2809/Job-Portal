// require('dotenv').config();
// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log('MongoDB Connected'))
//   .catch(err => console.error(err));

require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("❌ MongoDB URI is missing in .env file!");
    process.exit(1);
}

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected Successfully!'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));
