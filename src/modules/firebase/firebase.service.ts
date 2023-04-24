import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import {
  CollectionReference,
  Firestore,
  getFirestore,
} from 'firebase/firestore';

export class FirebaseService {
  public app: FirebaseApp;
  public auth: Auth;
  public db: Firestore;

  // Collections
  public usersCollection: CollectionReference;

  constructor() {
    this.app = initializeApp({
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    });

    this.auth = getAuth(this.app);
    this.db = getFirestore(this.app);
  }
}
