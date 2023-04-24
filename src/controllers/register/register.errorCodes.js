const checkErrorCodes = (error) => {
  let errMsg = ""

    switch (error) {
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
        // default:
        //   errMsg = 'Something went wrong'
        //   break;
      }
      return errMsg
}

export default checkErrorCodes