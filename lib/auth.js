import {hash,compare} from 'bcryptjs';

export async function hashPassword(passord) {
    const hashedPassword = hash(passord,12);
    return hashedPassword;
}

export async function verifyPassword(password,hashedPassword){
    const isValid = await compare(password,hashedPassword);
    return isValid;
}