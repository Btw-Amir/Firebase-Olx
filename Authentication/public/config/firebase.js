import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getAuth,
  signInWithPopup, FacebookAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  query, where,
  getDocs,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";
const firebaseConfig = {
  apiKey: "AIzaSyAdIAViR-QQ8ezfktjU0zdIlahhDrKZOfA",
  authDomain: "fire-base-e703c.firebaseapp.com",
  projectId: "fire-base-e703c",
  storageBucket: "fire-base-e703c.appspot.com",
  messagingSenderId: "648516897593",
  appId: "1:648516897593:web:da8fbd86673a1e612a36e8",
  measurementId: "G-NK0VFMXF07",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function signsup(user) {
  const { email, password } = user;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      var encodedData = encodeURIComponent(email);
      window.location.href = "../index.html?data=" + encodedData;
      alert("sign-up successfully");
      window.location.href = "../index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function navigate() {
  window.location.href = "../login/index.html";
}

function login(user) {
  const { email, password } = user;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      var encodedData = encodeURIComponent(email);
      window.location.href = "../index.html?data=" + encodedData;
      alert("login-successfully");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.log(errorMessage);
    });
}

async function postAds(obj) {
  try {
    const docRef = await addDoc(collection(db, "Ads"), obj);
    console.log("Document written with ID: ", docRef.id);
    console.log(obj);
    return obj;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const storage = getStorage();

async function postFile(nams, img) {
  const storageRef = ref(storage, "Images/" + nams);
  uploadBytes(storageRef, img).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
  const url = await getDownloadURL(storageRef);
  console.log(storageRef)
  return url;
}

async function getAds() {
  const querySnapshot = await getDocs(collection(db, "Ads"));
  const allAds = [];
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    const ad = doc.data();
    ad.id = doc.id;
    allAds.push(ad);
  });
  // console.log(allAds)
  return allAds;
}

async function details(productsID) {
  const docRef = doc(db, "Ads", productsID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
  return docSnap.data();
}
;
async function myAds(){
  const userAllads =[]
  onAuthStateChanged(auth,async (user)  => {
    if (user) {
       const uid =await user.email;
        const q = query(collection(db, "Ads"), where("uid", "==",uid));
        // console.log(uid) 
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          userAllads.push(doc.data())
        
        })
        // console.log(userAllads)
        ;
    }else{
      alert("User Not LoginIn")
    }
  })
  return userAllads
}
// const fb = document.getElementById('fb-auth')
// fb.addEventListener('click',async function(){
//   try{
//     const provider = new FacebookAuthProvider();
//     await signInWithPopup(auth, provider)
//   }
//   catch(e){
// alert(e)
//   }
// })


export {myAds, postAds, details, postFile, signsup, login, getAds, navigate };
// 24th nov firday:
// varaiables
// Increment / Decrement
// string (splice, slice ,split,replace,concatenation,())
