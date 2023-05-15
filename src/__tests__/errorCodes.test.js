import checkErrorCodes from "../../src/controllers/register-login/errorCodes";

describe('checkErrorCodes', () => {
    test('if you pass an invalid email, it should return the message: Email is not valid', () => {
        const error = 'auth/invalid-email';
        const result = checkErrorCodes(error);
        expect(result).toBe('Email is not valid');
    });
    test('if you pass an email already in use, it should return the message: Email is already in use', () => {
        const error = 'auth/email-already-in-use';
        const result = checkErrorCodes(error);
        expect(result).toBe('Email is already in use');
    });
    test('if you pass a weak password, it should return the message: Password is weak', () => {
        const error = 'auth/weak-password';
        const result = checkErrorCodes(error);
        expect(result).toBe('Password is weak');
    });
    test('if you pass a missing email, it should return the message: Email is missing', () => {
        const error = 'auth/missing-email';
        const result = checkErrorCodes(error);
        expect(result).toBe('Email is missing');
    });
    test('if you pass a missing password, it should return the message: Password is missing', () => {
        const error = 'auth/missing-password';
        const result = checkErrorCodes(error);
        expect(result).toBe('Password is missing');
    });
    test('if you exceed the quota, it should return the message: Exceeded daily quota for email sign-in', () => {
        const error = 'auth/quota-exceeded';
        const result = checkErrorCodes(error);
        expect(result).toBe('Exceeded daily quota for email sign-in');
    });
    test('if your email verification has expired, it should return the message: The email verification has expired', () => {
        const error = 'auth/expired-action-code';
        const result = checkErrorCodes(error);
        expect(result).toBe('The email verification has expired');
    });
    test('if you pass an user not found, it should return the message: User not found', () => {
        const error = 'auth/user-not-found';
        const result = checkErrorCodes(error);
        expect(result).toBe('User not found');
    });
    test('if you pass too many requests, it should return the message: Too many failed attempts, please try again later', () => {
        const error = 'auth/too-many-requests';
        const result = checkErrorCodes(error);
        expect(result).toBe('Too many failed attempts, please try again later');
    });
    test('if you pass an email not verified, it should return the message: Email not verified, please check your inbox', () => {
        const error = 'metec/email-not-verified';
        const result = checkErrorCodes(error);
        expect(result).toBe('Email not verified, please check your inbox');
    });
    test('if you pass an wrong password, it should return the message: Wrong password', () => {
        const error = 'auth/wrong-password';
        const result = checkErrorCodes(error);
        expect(result).toBe('Wrong password');
    });
    test('if you pass an unknown error code, it should return the message: Something went wrong, we will fix it as soon as possible', () => {
        const error = 'unknown-error-code';
        const result = checkErrorCodes(error);
        expect(result).toBe('Something went wrong, we will fix it as soon as possible');
    });
});