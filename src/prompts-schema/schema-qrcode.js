import chalk from 'chalk';

const schemaQrCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR Code"),
        message: chalk.red("O link não pode ser vazio."),
        required: true
    },
    {
        name: "type",
        description: chalk.yellow("Escolha o tipo de QR Code (1 - Padrão, 2 - Terminal)"),
        pattern: /^[1-2]$/,
        message: chalk.red("Escolha uma opção válida (1 ou 2)"),
        required: true
    }
];

export default schemaQrCode;
