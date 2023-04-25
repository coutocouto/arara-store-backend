import { Inject, Injectable } from '@nestjs/common';
import { EntityNotFoundError } from '../../errors/not-found.error';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { FirebaseService } from '../firebase/firebase.service';
import {
  getDocs,
  collection,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(private firebaseService: FirebaseService) {}

  async create(createProductDto: CreateProductDto) {
    const docRef = collection(this.firebaseService.db, 'products');
    const doc = await addDoc(docRef, createProductDto);
    return doc;
  }

  async findAll() {
    const productsCol = collection(this.firebaseService.db, 'products');
    const productsSnapshot = await getDocs(productsCol);
    const productsList = productsSnapshot.docs.map((doc) => doc.data());

    return productsList;
  }

  async findOne(id: string) {
    const productRef = doc(this.firebaseService.db, 'products', id);
    const productSnap = await getDoc(productRef);
    const product = productSnap.data();
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const productRef = doc(this.firebaseService.db, 'products', id);
    await updateDoc(productRef, { ...updateProductDto });
    return; // TODO: return updated producted
  }

  async remove(id: string) {
    const productRef = doc(this.firebaseService.db, 'products', id);
    await deleteDoc(productRef);
    return; // TODO: return deleted producted
  }
}
