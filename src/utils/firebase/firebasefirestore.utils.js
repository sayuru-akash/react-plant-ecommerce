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
  startAt,
  endAt,
  where,
  orderBy,
} from "firebase/firestore";

export const sendMessage = async (formData) => {
  const { name, email, subject, message } = formData;
  const newMessage = {
    name,
    email,
    subject,
    message,
    createdAt: new Date(),
  };
  const messageCollectionRef = collection(db, "messages");
  const response = await addDoc(messageCollectionRef, newMessage);
  if (response) {
    alert(
      "Message sent! One of our team members will get back to you shortly."
    );
  } else {
    alert("Message not sent. Please try again.");
  }
};

export const getMessages = async (searchKey) => {
  if (!auth) return;
  if (searchKey === "") {
    const first = query(collection(db, "messages"), limit(10));
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    console.log("last", lastVisible);

    return {
      data: documentSnapshots.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      })),
      lastVisible,
    };
  } else {
    const first = query(
      collection(db, "messages"),
      orderBy("email", "asc"),
      startAt(searchKey),
      endAt(searchKey + "\uf8ff"),
      limit(10)
    );
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    // console.log("last", lastVisible);

    return {
      data: documentSnapshots.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      })),
      lastVisible,
    };
  }
};

export const getNextMessages = async (lastItem) => {
  if (!auth) return;
  const next = query(
    collection(db, "messages"),
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

export const getUsers = async (searchKey) => {
  if (searchKey === "") {
    const first = query(collection(db, "users"), limit(10));
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    console.log("last", lastVisible);

    return {
      data: documentSnapshots.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      })),
      lastVisible,
    };
  } else {
    const search_array = ["username", "email"];
    const first = query(
      collection(db, "users"),
      orderBy("email", "asc"),
      startAt(searchKey),
      endAt(searchKey + "\uf8ff"),
      limit(10)
    );
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    // console.log("last", lastVisible);

    return {
      data: documentSnapshots.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      })),
      lastVisible,
    };
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

//modify to delete user via auth as well
export const deleteUser = async (userId) => {
  if (!auth) return;
  await deleteDoc(doc(db, "users", userId));
  if (deleteDoc) {
    alert("User deleted");
  } else {
    alert("User not deleted");
  }
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
  } else {
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
  } else {
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
  } else {
    alert("Post not deleted");
  }
};

export const getCatagories = async (searchKey) => {
  if (!auth) return;
  if (searchKey === "") {
    const first = query(collection(db, "categories"), limit(10));
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    console.log("last", lastVisible);

    return {
      data: documentSnapshots.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      })),
      lastVisible,
    };
  } else {
    const first = query(
      collection(db, "categories"),
      orderBy("name", "asc"),
      startAt(searchKey),
      endAt(searchKey + "\uf8ff"),
      limit(10)
    );
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    // console.log("last", lastVisible);

    return {
      data: documentSnapshots.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      })),
      lastVisible,
    };
  }
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
  const first = query(collection(db, "categories"), limit(6));
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
export const getNextCatagoriesToLoop = async (lastItem) => {
  const next = query(
    collection(db, "categories"),
    startAfter(lastItem),
    limit(6)
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

export const getPosts = async (searchKey) => {
  if (!auth) return;
  if (searchKey === "") {
    const first = query(collection(db, "posts"), limit(10));
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    console.log("last", lastVisible);

    return {
      data: documentSnapshots.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      })),
      lastVisible,
    };
  } else {
    const first = query(
      collection(db, "posts"),
      orderBy("title", "asc"),
      startAt(searchKey),
      endAt(searchKey + "\uf8ff"),
      limit(10)
    );
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    // console.log("last", lastVisible);

    return {
      data: documentSnapshots.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      })),
      lastVisible,
    };
  }
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
  const first = query(collection(db, "posts"), limit(4));
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

export const getNextPostsToLoop = async (lastItem) => {
  const next = query(collection(db, "posts"), startAfter(lastItem), limit(4));
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

export const getProducts = async (searchKey) => {
  if (searchKey === "") {
    const first = query(collection(db, "products"), limit(10));
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    console.log("last", lastVisible);

    return {
      data: documentSnapshots.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      })),
      lastVisible,
    };
  } else {
    const first = query(
      collection(db, "products"),
      orderBy("name", "asc"),
      startAt(searchKey),
      endAt(searchKey + "\uf8ff"),
      limit(10)
    );
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    // console.log("last", lastVisible);

    return {
      data: documentSnapshots.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      })),
      lastVisible,
    };
  }
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
  const first = query(collection(db, "products"), limit(4));
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

export const getNextProductsToLoop = async (lastItem) => {
  const next = query(
    collection(db, "products"),
    startAfter(lastItem),
    limit(4)
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

export const addProductToCart = async (product) => {
  if (!auth) return;
  const userId = auth.currentUser.uid;
  const cartCollectionRef = collection(db, "cart");
  const docRef = await addDoc(cartCollectionRef, {
    user: userId,
    ...product,
    qty: 1,
  });
  if (docRef.id) {
    alert("Item added to cart");
  } else {
    alert("Item not added to cart");
  }
};

export const getCartData = async (uid) => {
  if (!auth) return;
  const cartCollectionRef = await collection(db, "cart");
  const querySnapshot = await getDocs(
    query(cartCollectionRef, where("user", "==", uid))
  );
  return querySnapshot.docs.map((doc) => ({
    data: doc.data(),
    id: doc.id,
  }));
};

export const getSearchProductsToLoop = async (searchKey) => {
  const first = query(
    collection(db, "products"),
    orderBy("name", "asc"),
    startAt(searchKey),
    endAt(searchKey + "\uf8ff"),
    limit(4)
  );
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
