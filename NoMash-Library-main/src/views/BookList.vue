<template>
    <div>
      <h2>Book List (ISBN > 1000)</h2>
      <ul v-if="books.length">
        <li v-for="book in books" :key="book.id">
          {{ book.name }} (ISBN: {{ book.isbn }})
        </li>
      </ul>
      <p v-else>No books found with ISBN greater than 1000.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { db } from '../firebase'; // 引入 firebase.js
  import { collection, query, where, getDocs } from 'firebase/firestore';
  
  // 定义 books 数据
  const books = ref([]);
  
  // 异步任务，用于从 Firestore 中查询数据
  const fetchBooks = async () => {
    try {
      // 创建查询条件：查找 ISBN 大于 1000 的书籍
      const q = query(collection(db, 'books'), where('isbn', '>', 1000));
      const querySnapshot = await getDocs(q);
  
      // 遍历查询结果，将数据存储到 books 数组中
      querySnapshot.forEach((doc) => {
        books.value.push({ id: doc.id, ...doc.data() });
      });
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  
  // 使用 Vue 的生命周期钩子 onMounted 在组件挂载时运行 fetchBooks
  onMounted(fetchBooks);
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 10px 0;
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  </style>
  