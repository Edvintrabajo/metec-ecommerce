import checkErrorCodes from "./register.errorCodes";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      showMsg("Account created successfully", true);
    })
    .catch((error) => {
      const errMsg = checkErrorCodes(error.code);
      showMsg(errMsg, false);
    });
};

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      showMsg("Logged in successfully", true);
    })
    .catch((error) => {
      const errMsg = checkErrorCodes(error.code);
      showMsg(errMsg, false);
    });
};

export const logOut = async () => {
  await signOut(auth)
    .then(() => {
      showMsg("Logged out successfully", true);
    })
    .catch((error) => {
      const errMsg = checkErrorCodes(error.code);
      showMsg(errMsg, false);
    });
};

const showMsg = (msg, valid) => {
  const msgContainer = document.querySelector("#register-message-container");

  addCheckCards(msgContainer, valid, msg);

  overshadowEffect(msgContainer);
};

const addCheckCards = (container, valid, msg) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const h2 = document.createElement("h2");

  if (!valid) {
    img.src = "./src/icons/cancel.svg";
    div.style.backgroundColor = "rgb(242, 101, 101)";
  } else {
    img.src = "./src/icons/check.svg";
    div.style.backgroundColor = "rgb(101, 242, 101)";
  }
  div.classList.add("register-message");
  h2.innerHTML = msg;

  div.appendChild(img);
  div.appendChild(h2);
  container.appendChild(div);

  container.style.display = "flex";
  container.style.opacity = 1;
};

const overshadowEffect = (container) => {
  const div = container.querySelector(".register-message");
  let timer = 2;
  const interval = setInterval(() => {
    timer -= 0.005;
    if (timer <= 1) {
      timer -= 0.01;
      container.style.opacity = timer;
    }
    if (timer <= 0) {
      container.style.display = "none";
      container.removeChild(div);
      clearInterval(interval);
      // REDIRECT TO LOGIN
    }
  }, 10);
};
