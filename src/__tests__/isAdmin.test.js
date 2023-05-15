import { isAdmin } from '../controllers/admins/admins.functions.js';

describe('isAdmin', () => {
    test('should return true if the user is admin', () => {
        const email = 'edvintrabajo@gmail.com';
        const result = isAdmin(email);
        expect(result).toBe(true);
    });
    test('should return false if the user is not admin', () => {
        const email = 'noadmin@metec.com';
        const result = isAdmin(email);
        expect(result).toBe(false);
    });
    test('should return false if the user is undefined', () => {
        const email = undefined;
        const result = isAdmin(email);
        expect(result).toBe(false);
    });
});