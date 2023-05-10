import owners from '../../config/owners.js';
import { auth } from '../../config/firebase.js';

// Comprobar si el usuario actual es admin
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

// Cambiar el estado "setIsAuthtorized" a true si es admin, si no, a false
export const verifyUserStatus = (setIsAuthtorized) => {
    if (auth.currentUser) {
        setIsAuthtorized(isAdmin(auth.currentUser.email));
    } 
    else {
        setIsAuthtorized(false);
    }
}