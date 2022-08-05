import { auth, db } from "./firebaseauth.utils";
import {
  collection,
  getDocs,
  addDoc,
  query,
  limit,
  startAfter,
} from "firebase/firestore";

export const getUsers = async () => {
  if (!auth) return;
  const first = query(collection(db, "users"), limit(10));
  const documentSnapshots = await getDocs(first);
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  console.log("last", lastVisible);

  return {
    data: documentSnapshots.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    })),
    lastVisible,
  };
};

export const getNextUsers = async (lastItem) => {
  if (!auth) return;
  const next = query(collection(db, "users"), startAfter(lastItem), limit(10));
  const documentSnapshots = await getDocs(next);
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

  return {
    data: documentSnapshots.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    })),
    lastVisible,
  };
};

export const addCategory = async (category) => {
  if (!auth) return;
  const categoryCollectionRef = collection(db, "categories");
  const docRef = await addDoc(categoryCollectionRef, {
    name: category.categoryName,
    image: category.categoryImage,
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
    image: product.productImage,
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
    image: post.postImage,
  });
  if (docRef.id) {
    return true;
  }
  return false;
};

export const getCatagories = async () => {
  if (!auth) return;
  const first = query(collection(db, "categories"), limit(10));
  const documentSnapshots = await getDocs(first);
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  console.log("last", lastVisible);

  return {
    data: documentSnapshots.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    })),
    lastVisible,
  };
};

export const getNextCatagories = async (lastItem) => {
  if (!auth) return;
  const next = query(
    collection(db, "categories"),
    startAfter(lastItem),
    limit(10)
  );
  const documentSnapshots = await getDocs(next);
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

  return {
    data: documentSnapshots.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    })),
    lastVisible,
  };
};

export const getPosts = async () => {
  if (!auth) return;
  const first = query(collection(db, "posts"), limit(10));
  const documentSnapshots = await getDocs(first);
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  console.log("last", lastVisible);

  return {
    data: documentSnapshots.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    })),
    lastVisible,
  };
};

export const getNextPosts = async (lastItem) => {
  if (!auth) return;
  const next = query(collection(db, "posts"), startAfter(lastItem), limit(10));
  const documentSnapshots = await getDocs(next);
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

  return {
    data: documentSnapshots.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    })),
    lastVisible,
  };
};

export const getProducts = async () => {
  if (!auth) return;
  const first = query(collection(db, "products"), limit(10));
  const documentSnapshots = await getDocs(first);
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  console.log("last", lastVisible);

  return {
    data: documentSnapshots.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    })),
    lastVisible,
  };
};

export const getNextProducts = async (lastItem) => {
  if (!auth) return;
  const next = query(
    collection(db, "products"),
    startAfter(lastItem),
    limit(10)
  );
  const documentSnapshots = await getDocs(next);
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

  return {
    data: documentSnapshots.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    })),
    lastVisible,
  };
};
