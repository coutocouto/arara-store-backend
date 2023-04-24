import { Injectable } from '@nestjs/common';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import {
  CollectionReference,
  Firestore,
  getFirestore,
  collection,
} from 'firebase/firestore';

export class FirebaseService {
  public app: FirebaseApp;
  public auth: Auth;
  public fireStore: Firestore;

  // Collections
  public usersCollection: CollectionReference;

  constructor() {
    this.app = initializeApp({
      apiKey: 'AIzaSyDrdwau85fRycT-fOzrriJk8Ed5iIolwvk',
      authDomain: 'ararasoftware-e8f16.firebaseapp.com',
      projectId: 'ararasoftware-e8f16',
      storageBucket: 'ararasoftware-e8f16.appspot.com',
      messagingSenderId: '194951670102',
      appId: '1:194951670102:web:1875993d97dded2bef8ef7',
    });

    this.auth = getAuth(this.app);
    this.fireStore = getFirestore(this.app);
  }
}
