import express from 'express';
import { 
  createProduct, 
  getAllProducts, 
  getProductById, 
  updateProductById, 
  deleteProductById 
} from '../Controller/productController.js'; 

const router = express.Router();

router.post('/', createProduct);

router.get('/', getAllProducts);

router.get('/:id', getProductById);

router.put('/:id', updateProductById);

router.delete('/:id', deleteProductById);

export default router;
