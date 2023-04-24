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
  DocumentReference,
  getDoc,
  onSnapshot,
  setDoc,
} from 'firebase/firestore';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(private firebaseService: FirebaseService) {}

  async create(createProductDto: CreateProductDto) {
    const docRef = collection(this.firebaseService.db, 'products');
    console.log(
      '🚀 ~ file: products.service.ts:25 ~ ProductsService ~ create ~ docRef:',
      docRef,
    );
    // setDoc(docRef, createProductDto);

    return this.products;
  }

  async findAll() {
    const productsCol = collection(this.firebaseService.db, 'products');

    const productsSnapshot = await getDocs(productsCol);
    const productsList = productsSnapshot.docs.map((doc) => doc.data());

    return productsList;
  }

  async findOne(id: number) {
    const productsCol = collection(this.firebaseService.db, 'products');

    const productsSnapshot = (await getDocs(productsCol)).query;
    console.log(
      '🚀 ~ file: products.service.ts:47 ~ ProductsService ~ findOne ~ productsSnapshot:',
      productsSnapshot,
    );
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    // const product = this.findOne(id);
    // const newProduct: Product = {
    //   ...product,
    //   ...updateProductDto,
    // };
    // const findIndex = this.products.findIndex((product) => product.id === id);
    // this.products[findIndex] = newProduct;
    // return newProduct;
  }

  async remove(id: number) {
    const productsCol = collection(this.firebaseService.db, 'products');

    const productsSnapshot = await getDocs(productsCol);
    return;
  }
}
