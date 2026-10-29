import chalk from "chalk";

const schemaMain = [
    {
        name: "select",
        description: chalk.yellow("Escolha a ferramenta (1 - QR Code, 2 - Gerador de senhas)"),
        pattern: /^[1-2]$/,
        message: chalk.red("Escolha uma opção válida (1 ou 2)"),
        required: true
    }
]

export default schemaMain;