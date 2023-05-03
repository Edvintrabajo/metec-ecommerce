import owners from '../../config/owners.js';

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