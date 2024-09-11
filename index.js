import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes.js'; 


const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/test'; 

app.use(express.json());

app.use('/api/products', productRoutes);

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
