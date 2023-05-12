import checkErrorCodes from "./errorCodes";
import { auth, googleProvider } from "../../config/firebase";
import { 
  createUserWithEmailAndPassword, 
  sendEmailVerification, 
  signInWithEmailAndPassword,
  // google sign in
  signInWithPopup,
} from "firebase/auth";
import { showAlert } from "../general/general.functions";

// Registrarse, se comprueba si el email está verificado
export const signUp = async (userData, setUserData, btns) => {
  const { email, password } = userData;
  disableBtns(btns)

  try {
    await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      const user = auth.currentUser;
      sendEmailVerification(user)
        .then(() => {
            if (user && !user.emailVerified) {
              auth.signOut();
              showMsg("Please verify your email address to complete registration", true, "/login");
            }
            if (!user) {
              showMsg("Something went wrong while registering", false);
            }
        })
        .catch((error) => {
          const errMsg = checkErrorCodes(error.code);
          showMsg(errMsg, false);
        });
    })
    .catch((error) => {
      const errMsg = checkErrorCodes(error.code);
      showMsg(errMsg, false);
    });
  } 
  catch (error) {
    const errMsg = checkErrorCodes("An unespected error occured, please try again later");
    showMsg(errMsg, false);
  } 
  finally {
    setUserData(userData = {});
    enableBtns(btns)
  }

};

// Iniciar sesión, se comprueba si el email está verificado
export const signIn = async (userData, setUserData, btns) => {
  const { email, password } = userData;
  
  disableBtns(btns)
  
  try {
    await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      const user = auth.currentUser;
      user.reload().then(() => {
        if (user.emailVerified) {
          window.location.href = "/";
        }
        else {
          auth.signOut();
          const errMsg = checkErrorCodes("metec/email-not-verified");
          showMsg(errMsg, false);
        }
      });
    })
    .catch((error) => {
      const errMsg = checkErrorCodes(error.code);
      showMsg(errMsg, false);
    });
  } 
  catch(error) {
    const errMsg = checkErrorCodes("An unespected error occured while logging in, please try again later");
    showMsg(errMsg, false);
  }
  finally {
    enableBtns(btns)
    setUserData(userData = {});
  }
};

// Iniciar sesión con Google
export const signInWithGoogle = async () => {
  try{
    await signInWithPopup(auth, googleProvider)
    .then(() => {
      window.location.href = "/";      
    })
  } catch (error) {
    const errMsg = checkErrorCodes(error.code);
    showMsg(errMsg, false);
  }
}

// Cerrar sesión
export const logOut = async () => {
  auth.signOut().then(() => {
    showAlert("Logged out successfully", "success");
  })
  .catch((error) => {
    const errMsg = checkErrorCodes(error.code);
    showAlert(errMsg, "error")
  });
};

// Mostrar mensaje personalizado
const showMsg = (msg, valid, redir = null) => {
  const msgContainer = document.querySelector("#message-container");

  addCheckCards(msgContainer, valid, msg);

  overshadowEffect(msgContainer, redir);
};

// Crear cards
const addCheckCards = (container, valid, msg) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const h2 = document.createElement("h2");

  if (!valid) {
    img.src = "icons/cancel.svg";
    div.style.backgroundColor = "rgb(242, 101, 101)";
  } else {
    img.src = "icons/check.svg";
    div.style.backgroundColor = "rgb(101, 242, 101)";
  }
  div.classList.add("message-body");
  h2.innerHTML = msg;

  div.appendChild(img);
  div.appendChild(h2);
  container.appendChild(div);

  container.style.display = "flex";
  container.style.opacity = 1;
};

// Efecto sombra
const overshadowEffect = (container, redir = null) => {
  const div = container.querySelector(".message-body");
  let timer = 2;
  const interval = setInterval(() => {
    timer -= 0.008;
    if (timer <= 1) {
      timer -= 0.01;
      container.style.opacity = timer;
    }
    if (timer <= 0) {
      container.style.display = "none";
      container.removeChild(div);
      clearInterval(interval);
      if (redir){
        window.location.href = redir;
      }
    }
  }, 10);
};

// Guardar en el estado los datos del usuario
export const setCurUserData = (userData, setUserData, prefix) => {
  try {
    setUserData(userData.email = document.getElementById(`${prefix}-email`).value);
    setUserData(userData.password = document.getElementById(`${prefix}-password`).value);
  } catch (error) {
    console.log(error);
    console.log(userData)
  }
}

// Desactivar botones
const disableBtns = (btns) => {
  btns.forEach((btn) => {
    document.getElementById(btn).disabled = true;
  });
}

// Activar botones
export const enableBtns = (btns) => {
  btns.forEach((btn) => {
    document.getElementById(btn).disabled = false;
  });
}