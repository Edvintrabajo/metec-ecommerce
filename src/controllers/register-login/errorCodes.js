// Mensajes de error
const checkErrorCodes = (error) => {
  let errMsg = ""

    switch (error) {
        // REGISTER
        case 'auth/invalid-email':
          errMsg = 'Email is not valid'
          break;
        case 'auth/email-already-in-use':
          errMsg = 'Email is already in use'
          break;
        case 'auth/weak-password':
          errMsg = 'Password is weak'
          break;
        case 'auth/missing-email':
          errMsg = 'Email is missing'
          break;
        case 'auth/missing-password':
          errMsg = 'Password is missing'
          break;
        case 'auth/quota-exceeded':
          errMsg = 'Exceeded daily quota for email sign-in'
          break;
        case 'auth/expired-action-code':
          errMsg = 'The email verification has expired'
          break;
        // LOGIN
        case 'auth/user-not-found':
          errMsg = 'User not found'
          break;
        case 'auth/too-many-requests':
          errMsg = 'Too many failed attempts, please try again later'
          break;
        // Custom error codes
        case "metec/email-not-verified":
          errMsg = "Email not verified, please check your inbox"
          break;
        case 'auth/wrong-password':
          errMsg = 'Wrong password'
          break;
        default:
          errMsg = 'Something went wrong, we will fix it as soon as possible'
          break;
      }
      return errMsg
}

export default checkErrorCodes