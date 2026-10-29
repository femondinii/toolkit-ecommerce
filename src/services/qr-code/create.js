import prompt from 'prompt';
import schemaQrCode from '../../prompts-schema/schema-qrcode.js';
import handle from './handle.js';

async function createQRCode() {
    prompt.start();
    prompt.get(schemaQrCode, handle);
}

export default createQRCode;
