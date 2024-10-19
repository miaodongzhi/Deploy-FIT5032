// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase 配置
const firebaseConfig = {
  apiKey: "AIzaSyDNh6rdpXqFYVVEry8G3jfSYjY4txdjLbU",
  authDomain: "myfirebase-week7.firebaseapp.com",
  projectId: "myfirebase-week7",
  storageBucket: "myfirebase-week7.appspot.com",
  messagingSenderId: "75801442970",
  appId: "1:75801442970:web:18dc55a6d60d6b3f65fd23"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 初始化 Firestore 数据库
const db = getFirestore(app);

export { db };
