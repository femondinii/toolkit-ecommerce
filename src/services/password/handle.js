import { webcrypto } from 'crypto';
import permittedCharacters from './utils/permitted-characters.js';

async function handle() {
    const passwordLength = parseInt(process.env.PASSWORD_LENGTH, 10);

    if (!passwordLength || passwordLength <= 0) {
        throw new Error("PASSWORD_LENGTH inválido ou não definido no .env");
    }

    const characters = permittedCharacters();
    const randomValues = new Uint32Array(passwordLength);
    webcrypto.getRandomValues(randomValues);

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += characters[randomValues[i] % characters.length];
    }

    return password;
}

export default handle;
