import { auth, db } from "./firebaseauth.utils";
import {
    doc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
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

//modify to delete user via auth as well
export const deleteUser = async (userId) => {
    if (!auth) return;
    await deleteDoc(doc(db, "users", userId));
    if (deleteDoc) {
      alert("User deleted");
    }else{
      alert("User not deleted");
    }
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

export const deleteCategory = async (categoryId) => {
  if (!auth) return;
  await deleteDoc(doc(db, "categories", categoryId));
  if (deleteDoc) {
    alert("Category deleted");
  }else{
    alert("Category not deleted");
  }
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

export const deleteProduct = async (productId) => {
    if (!auth) return;
    await deleteDoc(doc(db, "products", productId));
    if (deleteDoc) {
      alert("Product deleted");
    }else{
      alert("Product not deleted");
    }
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

export const deleteBlogPosts = async (postId) => {
    if (!auth) return;
    await deleteDoc(doc(db, "posts", postId));
    if (deleteDoc) {
      alert("Post deleted");
    }else{
      alert("Post not deleted");
    }
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

export const getCatagoriesToLoop = async () => {
  const catRef = query(collection(db, "categories"), limit(6));
  const catSnapshot = await getDocs(catRef);
  return catSnapshot.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
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

export const getPostsToLoop = async () => {
  const postsRef = query(collection(db, "posts"), limit(12));
  const postsSnapshot = await getDocs(postsRef);
  return postsSnapshot.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
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

export const getProductsToLoop = async () => {
  const prodRef = query(collection(db, "products"), limit(12));
  const prodSnapshot = await getDocs(prodRef);
  return prodSnapshot.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
};
