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
} from 'firebase/firestore';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(private firebaseService: FirebaseService) {}

  async create(createProductDto: CreateProductDto) {
    // try {
    //   const userCredential: UserCredential =
    //     await createUserWithEmailAndPassword(
    //       this.firebaseService.auth,
    //       ...createProductDto,
    //     );

    //   if (userCredential) {
    //     const id: string = userCredential.user.uid;
    //     const docRef: DocumentReference = doc(
    //       this.firebaseService.usersCollection,
    //       id,
    //     );
    //     await setDoc(docRef, body);
    //   }
    // } catch (error: unknown) {
    //   const firebaseAuthError = error as AuthError;

    //   console.log(`[FIREBASE AUTH ERROR CODE]: ${firebaseAuthError.code}`);

    //   if (firebaseAuthError.code === 'auth/email-already-in-use') {
    //     throw new HttpException('Email already exists.', HttpStatus.CONFLICT);
    //   }
    // }
    return this.products;
  }

  async findAll() {
    const productsCol = collection(this.firebaseService.fireStore, 'products');

    const productsSnapshot = await getDocs(productsCol);
    const productsList = productsSnapshot.docs.map((doc) => doc.data());

    return productsList;
  }

  async findOne(id: number) {
    const productsCol = collection(this.firebaseService.fireStore, 'products');
    const productsSnapshot = await getDocs(productsCol);
    const docRef: DocumentReference = doc(productsCol);
    console.log(
      '🚀 ~ file: products.service.ts:61 ~ ProductsService ~ findOne ~ docRef:',
      docRef.parent,
    );

    // productsSnapshot
    //   .where('email', '==', 'Coletes')
    //   .get()
    //   .then((querySnapshot) => {
    //     if (!querySnapshot.empty) {
    //       const user = querySnapshot.docs[0].data();
    //       // rest of your code
    //     }
    //   });
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

  remove(id: number) {
    const findIndex = this.products.findIndex((product) => product.id === id);
    this.products.splice(findIndex, 1);
    return;
  }
}
