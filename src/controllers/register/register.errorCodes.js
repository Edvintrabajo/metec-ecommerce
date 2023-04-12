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
        
      }
      return errMsg
}

export default checkErrorCodes