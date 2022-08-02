import { auth, db } from "./firebaseauth.utils";
import { collection, getDocs, addDoc, doc } from "firebase/firestore";

export const getUsers = async () => {
  if (!auth) return;
  const userRef = collection(db, "users");
  const userSnapshot = await getDocs(userRef);
  return userSnapshot.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
};

export const addCategory = async (category) => {
  if (!auth) return;
  const categoryCollectionRef = collection(db, "categories");
  const docRef = await addDoc(categoryCollectionRef, {
    name: category.categoryName,
  });
  if (docRef.id) {
    return true;
  }
  return false;
};

export const addProduct = async (product) => {
  if (!auth) return;
  const productsCollectionRef = collection(db, "products");
  const docRef = await addDoc(productsCollectionRef, {
    name: product.productName,
    category: product.category,
    description: product.description,
    price: product.price,
    quantity: product.quantity,
  });
  if (docRef.id) {
    return true;
  }
  return false;
};

export const addBlogPosts = async (post) => {
  if (!auth) return;
  const postsCollectionRef = collection(db, "posts");
  const docRef = await addDoc(postsCollectionRef, {
    title: post.postName,
    author: post.author,
    date: post.date,
    content: post.content,
  });
  if (docRef.id) {
    return true;
  }
  return false;
};

export const getCategories = async () => {
  if (!auth) return;
  const catRef = collection(db, "categories");
  const catSnapshot = await getDocs(catRef);
  return catSnapshot.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
};

export const getBlogPosts = async () => {
  if (!auth) return;
  const blogRef = collection(db, "posts");
  const blogSnapshot = await getDocs(blogRef);
  return blogSnapshot.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
};

export const getProducts = async () => {
  if (!auth) return;
  const prodRef = collection(db, "products");
  const prodSnapshot = await getDocs(prodRef);
  return prodSnapshot.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
};
