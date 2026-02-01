import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAZ4CrFAqJ6FbVq-KUtFAOtlqqGfEAggTk",
  authDomain: "appseducativas-aaef5.firebaseapp.com",
  projectId: "appseducativas-aaef5",
  storageBucket: "appseducativas-aaef5.firebasestorage.app",
  messagingSenderId: "384032695350",
  appId: "1:384032695350:web:c9e3fa6ada6103b57da497",
  measurementId: "G-L0409XGGY6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorDiv = document.getElementById("error");

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "accesoConcedido.html";
    })
    .catch(() => {
      errorDiv.textContent = "Email o contraseña incorrectos";
    });
});
