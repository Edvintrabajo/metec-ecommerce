import owners from '../../config/owners.js';
import { auth } from '../../config/firebase.js';

export const isAdmin = (email) => {
    if (email == undefined) {
        return false
    }
    if (owners.includes(email)) {
        return true
    } else {
        return false
    }
}

export const verifyUserStatus = (setIsAuthtorized) => {
    if (auth.currentUser) {
        setIsAuthtorized(isAdmin(auth.currentUser.email));
    } 
    else {
        setIsAuthtorized(false);
    }
}