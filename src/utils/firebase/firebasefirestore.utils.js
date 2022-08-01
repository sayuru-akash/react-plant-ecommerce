import { auth, db } from "./firebaseauth.utils"
import {collection, getDocs, addDoc} from "firebase/firestore"

export const getUsers = async () => {
    if (!auth) return;
    const userRef = collection(db, "users");
    const userSnapshot = await getDocs(userRef);
    return userSnapshot.docs.map(doc => ({data: doc.data(), id: doc.id}));
}

export const addProduct = async (product) => {
    if (!auth) return;
    const productsCollectionRef = collection(db, "products");
    const docRef = await addDoc(productsCollectionRef, {name: product.productName, category: product.category, description: product.description, price: product.price, quantity: product.quantity});
    if (docRef.id) {
        return true;
    }
    return false;
}