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
  getDoc,
  updateDoc,
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
    //console.log("last", lastVisible);

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
    //console.log("last", lastVisible);

    return {
      data: documentSnapshots.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      })),
      lastVisible,
    };
  } else {
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
  let newDate = new Date()
  let m = await newDate.getMonth() + 1
  if ((m = 1)) {
    m = "January";
  } else if ((m = 2)) {
    m = "February";
  } else if ((m = 3)) {
    m = "March";
  } else if ((m = 4)) {
    m = "April";
  } else if ((m = 5)) {
    m = "May";
  } else if ((m = 6)) {
    m = "June";
  } else if ((m = 7)) {
    m = "July";
  } else if ((m = 8)) {
    m = "August";
  } else if ((m = 9)) {
    m = "September";
  } else if ((m = 10)) {
    m = "October";
  } else if ((m = 11)) {
    m = "November";
  } else if ((m = 12)) {
    m = "December";
  }

  const productsCollectionRef = collection(db, "products");
  const docRef = await addDoc(productsCollectionRef, {
    name: product.productName,
    category: product.category,
    description: product.description,
    price: product.price,
    quantity: product.quantity,
    image: product.productImage,
    createdAt: m,
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
  let newDate = new Date()
  let m = await newDate.getMonth() + 1
  if ((m == 1)) {
    m = "January";
  } else if ((m == 2)) {
    m = "February";
  } else if ((m == 3)) {
    m = "March";
  } else if ((m == 4)) {
    m = "April";
  } else if ((m == 5)) {
    m = "May";
  } else if ((m == 6)) {
    m = "June";
  } else if ((m == 7)) {
    m = "July";
  } else if ((m == 8)) {
    m = "August";
  } else if ((m == 9)) {
    m = "September";
  } else if ((m == 10)) {
    m = "October";
  } else if ((m == 11)) {
    m = "November";
  } else if ((m == 12)) {
    m = "December";
  }

  const postsCollectionRef = collection(db, "posts");
  const docRef = await addDoc(postsCollectionRef, {
    title: post.postName,
    author: post.author,
    date: post.date,
    content: post.content,
    image: post.postImage,
    createdAt: m,
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

export const getCategoryList = async () => {
  if (!auth) return;
  const categoryCollectionRef = collection(db, "categories");
  const documentSnapshots = await getDocs(categoryCollectionRef);
  return documentSnapshots.docs.map((doc) => ({
    data: doc.data(),
    id: doc.id,
  }));
};

export const getCatagories = async (searchKey) => {
  if (!auth) return;
  if (searchKey === "") {
    const first = query(collection(db, "categories"), limit(10));
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    //console.log("last", lastVisible);

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
  //console.log("last", lastVisible);

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
    //console.log("last", lastVisible);

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
  //console.log("last", lastVisible);

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
    //console.log("last", lastVisible);

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

export const getOrders = async (uid, searchKey) => {
  if (!auth) return;
  if (searchKey === "") {
    const ordersCollectionRef = await collection(db, "orders");
    const documentSnapshots = await getDocs(
      query(ordersCollectionRef, where("user", "==", uid), limit(10))
    );
    const userInfo = await getUser(uid);
    //  userInfo.name;
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    //console.log("last", lastVisible);

    return {
      data: documentSnapshots.docs.map((doc) => ({
        customer: userInfo,
        data: doc.data(),
        id: doc.id,
      })),
      lastVisible,
    };
  } else {
    const first = query(
      collection(db, "orders"),
      where("user", "==", uid),
      orderBy("name", "asc"),
      startAt(searchKey),
      endAt(searchKey + "\uf8ff"),
      limit(10)
    );
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    const userInfo = await getUser(uid);
    // console.log("last", lastVisible);

    return {
      data: documentSnapshots.docs.map((doc) => ({
        customer: userInfo,
        data: doc.data(),
        id: doc.id,
      })),
      lastVisible,
    };
  }
};

export const getNextOrders = async (uid, lastItem) => {
  if (!auth) return;
  const next = query(
    collection(db, "orders"),
    where("user", "==", uid),
    startAfter(lastItem),
    limit(10)
  );
  const documentSnapshots = await getDocs(next);
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  const userInfo = await getUser(uid);

  return {
    data: documentSnapshots.docs.map((doc) => ({
      customer: userInfo,
      data: doc.data(),
      id: doc.id,
    })),
    lastVisible,
  };
};

export const getAdminOrders = async (searchKey) => {
  if (searchKey === "") {
    const first = query(collection(db, "orders"), limit(10));
    const documentSnapshots = await getDocs(first);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    //console.log("last", lastVisible);

    return {
      data: documentSnapshots.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      })),
      lastVisible,
    };
  } else {
    const first = query(
      collection(db, "orders"),
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

export const getNextAdminOrders = async (lastItem) => {
  if (!auth) return;
  const next = query(collection(db, "orders"), startAfter(lastItem), limit(10));
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

export const deleteOrder = async (orderId) => {
  if (!auth) return;
  await deleteDoc(doc(db, "orders", orderId));
  if (deleteDoc) {
    alert("Order deleted");
  } else {
    alert("Order not deleted");
  }
};

export const getProductsToLoop = async () => {
  const first = query(collection(db, "products"), limit(4));
  const documentSnapshots = await getDocs(first);
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  //console.log("last", lastVisible);

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

export const deleteCartItem = async (cartItemId) => {
  if (!auth) return;
  await deleteDoc(doc(db, "cart", cartItemId));
  if (deleteDoc) {
    alert("Item removed from cart");
  } else {
    alert("Item not removed from cart");
  }
};

export const clearCart = async (cartItems) => {
  if (!auth) return;
  cartItems.forEach((item) => {
    deleteDoc(doc(db, "cart", item.id));
  });
};

export const increaseQty = async (id) => {
  if (!auth) return;
  const cartCollectionRef = await collection(db, "cart");
  const data = getDoc(doc(cartCollectionRef, id));
  const qty = (await data).data().qty + 1;
  const quantity = (await data).data().data.quantity;
  if (qty <= quantity) {
    await updateDoc(doc(cartCollectionRef, id), { qty: qty });
  } else {
    alert("Quantity exceeds stock");
  }
  return qty;
};

export const decreaseQty = async (id) => {
  if (!auth) return;
  const cartCollectionRef = await collection(db, "cart");
  const data = getDoc(doc(cartCollectionRef, id));
  const qty = (await data).data().qty - 1;
  if(qty > 0) {
  await updateDoc(doc(cartCollectionRef, id), { qty: qty });
  } else {
    await deleteDoc(doc(cartCollectionRef, id));
  }
  return qty;
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
  //console.log("last", lastVisible);

  return {
    data: documentSnapshots.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    })),
    lastVisible,
  };
};

export const getCategoryProductsToLoop = async (categoryKey) => {
  const first = query(
    collection(db, "products"),
    orderBy("category", "asc"),
    startAt(categoryKey),
    endAt(categoryKey + "\uf8ff"),
    limit(4)
  );
  const documentSnapshots = await getDocs(first);
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  //console.log("last", lastVisible);

  return {
    data: documentSnapshots.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    })),
    lastVisible,
  };
};

export const getProductData = async (id) => {
  const productsCollectionRef = await collection(db, "products");
  const data = getDoc(doc(productsCollectionRef, id));
  return (await data).data();
};

export const getPostData = async (id) => {
  const postCollectionRef = await collection(db, "posts");
  const data = getDoc(doc(postCollectionRef, id));
  return (await data).data();
};

export const addUserAddress = async (address) => {
  if (!auth) return;
  const userId = auth.currentUser.uid;
  const addressCollectionRef = collection(db, "addresses");
  const docRef = await addDoc(addressCollectionRef, {
    user: userId,
    ...address,
  });
  if (docRef.id) {
    alert("Address Added");
  } else {
    alert("Address not added");
  }
};

export const editUserAddress = async (address) => {
  if (!auth) return;
  const addressCollectionRef = collection(db, "addresses");
  const docRef = await updateDoc(doc(addressCollectionRef, address.id), {
    ...address,
  });
  alert("Address updated");
};

export const getUserAddresses = async (uid) => {
  const addressesCollectionRef = await collection(db, "addresses");
  const querySnapshot = await getDocs(
    query(addressesCollectionRef, where("user", "==", uid))
  );
  return querySnapshot.docs.map((doc) => ({
    data: doc.data(),
    id: doc.id,
  }));
};

export const deleteUserAddress = async (addressId) => {
  if (!auth) return;
  await deleteDoc(doc(db, "addresses", addressId));
  if (deleteDoc) {
    alert("Address removed");
  } else {
    alert("Address not removed");
  }
};

export const updateUser = async (uid, firstName, lastName) => {
  if (!auth) return;
  const userCollectionRef = collection(db, "users");
  await updateDoc(doc(userCollectionRef, uid), { firstName, lastName });
  if (updateDoc) {
    alert("User updated");
  } else {
    alert("User not updated");
  }
};

export const getUser = async (uid) => {
  const userCollectionRef = collection(db, "users");
  const data = await getDoc(doc(userCollectionRef, uid));
  return (await data).data();
};

export const getAddress = async (aid) => {
  const addCollectionRef = collection(db, "addresses");
  const data = await getDoc(doc(addCollectionRef, aid));
  return (await data).data();
};

export const placeCODOrder = async (
  uid,
  cartItems,
  deliveryDate,
  address,
  total
) => {
  if (!auth) return;
  if (!address) {
    alert("Please select an address");
    return;
  }
  if (!deliveryDate) {
    alert("Please select a delivery date");
    return;
  }
  if (!cartItems.length) {
    alert("Cart is empty");
    return;
  }
  const orderCollectionRef = collection(db, "orders");
  const userName = (await getUser(uid)).firstName;
  if(userName === "") {
    alert("Please update your profile");
    return;
  }
  const docRef = await addDoc(orderCollectionRef, {
    user: uid,
    userName,
    cartItems,
    deliveryDate,
    address,
    total,
    paymentMethod: "COD",
    status: "pending",
  });
  if (docRef.id) {
    await clearCart(cartItems);
    alert("Order placed");
  } else {
    alert("Order not placed");
  }
};

export const placePPOrder = async (cartItems, deliveryDate, address, total) => {
  const uid = await auth.currentUser.uid;
  const orderCollectionRef = collection(db, "orders");
  const userName = (await getUser(uid)).firstName;
  const docRef = await addDoc(orderCollectionRef, {
    user: uid,
    userName,
    cartItems,
    deliveryDate,
    address,
    total,
    paymentMethod: "PayPal",
    status: "confirmed",
  });
  if (docRef.id) {
    // await clearCart(cartItems);
    alert("Order placed");
  } else {
    alert("Order not placed");
  }
};

export const editProduct = async (product) => {
  if (!auth) return;
  const productsCollectionRef = collection(db, "products");
  const docRef = await updateDoc(doc(productsCollectionRef, product.id), {
    ...product,
  });
  alert("Product updated");
};

export const editBlogPost = async (post) => {
  if (!auth) return;
  const postCollectionRef = collection(db, "posts");
  const docRef = await updateDoc(doc(postCollectionRef, post.id), {
    ...post,
  });
  alert("Blog updated");
};

export const editCategory = async (category) => {
  console.log(category);
  if (!auth) return;
  const categoryCollectionRef = collection(db, "categories");
  const docRef = await updateDoc(doc(categoryCollectionRef, category.id), {
    ...category,
  });
  alert("Category updated");
};

export const getProductsbyMonth = async (month) => {
  const productsCollectionRef = collection(db, "products");
  const querySnapshot = await getDocs(
    query(productsCollectionRef, where("createdAt", "==", month))
  );
  const length = await querySnapshot.docs.length;
  return length;
};

export const getPostsbyMonth = async (month) => {
  const postCollectionRef = collection(db, "posts");
  const querySnapshot = await getDocs(
    query(postCollectionRef, where("createdAt", "==", month))
  );
  const length = await querySnapshot.docs.length;
  return length;
};
