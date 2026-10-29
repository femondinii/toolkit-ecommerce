# 🛠️ Generator QR Code — Kit de Utilidades para E-commerces

Utilitário CLI interativo com duas ferramentas: **gerador de QR Code** e **gerador de senhas seguras**.

---

## 📋 Sumário

- [Funcionalidades](#-funcionalidades)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Como usar](#-como-usar)
- [Estrutura do projeto](#-estrutura-do-projeto)

---

## ✨ Funcionalidades

### 📷 Gerador de QR Code
- Gera QR Codes a partir de qualquer link/URL
- Dois modos de saída:
  - **Padrão** — exibe o QR Code em tamanho normal no terminal
  - **Terminal (pequeno)** — exibe o QR Code em formato compacto

### 🔐 Gerador de Senhas
- Gera senhas com aleatoriedade criptograficamente segura (`crypto.getRandomValues`)
- Comprimento configurável via `.env`
- Suporte a quatro conjuntos de caracteres (todos configuráveis):
  - Letras maiúsculas (`A-Z`)
  - Letras minúsculas (`a-z`)
  - Números (`0-9`)
  - Caracteres especiais (`!@#$%^&*()-+`)

---

## 📦 Pré-requisitos

- [Node.js](https://nodejs.org/) **v18** ou superior (para suporte nativo a `--env-file` e `webcrypto`)
- [npm](https://www.npmjs.com/)

---

## 🚀 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/generator-qrcode.git
cd generator-qrcode

# Instale as dependências
npm install

# Configure o ambiente
cp .env.example .env
```

---

## ⚙️ Configuração

Edite o arquivo `.env` na raiz do projeto:

```env
# Gerador de Senhas

# Habilita letras maiúsculas (A-Z)
UPPERCASE_LETTERS=true

# Habilita letras minúsculas (a-z)
LOWERCASE_LETTERS=true

# Habilita números (0-9)
NUMBERS=true

# Habilita caracteres especiais (!@#$%^&*()-+)
SPECIAL_CHARACTERS=false

# Comprimento da senha gerada
PASSWORD_LENGTH=12
```

> **Atenção:** ao menos um conjunto de caracteres deve estar habilitado (`true`), caso contrário o gerador de senhas lançará um erro.

---

## ▶️ Como usar

```bash
npm start
```

O CLI apresenta um menu interativo:

```
prompt: Escolha a ferramenta (1 - QR Code, 2 - Gerador de senhas): 
```

### Opção 1 — QR Code

```
prompt: Digite o link para gerar o QR Code: https://exemplo.com
prompt: Escolha o tipo de QR Code (1 - Padrão, 2 - Terminal): 1

QR Code gerado com sucesso!

█████████████████████████
█ ▄▄▄▄▄ █▀▄ ▀▀▀█ ▄▄▄▄▄ █
...
```

### Opção 2 — Gerador de Senhas

```
Senha gerada com sucesso!

aB3#kLmN9pQr
```

---

## 📁 Estrutura do projeto

```
generator-qrcode/
├── src/
│   ├── index.js                             # Ponto de entrada — menu principal
│   ├── prompts-schema/
│   │   ├── schema-main.js                   # Schema do menu principal
│   │   └── schema-qrcode.js                 # Schema dos inputs do QR Code
│   └── services/
│       ├── qr-code/
│       │   ├── create.js                    # Inicializa o fluxo do QR Code
│       │   └── handle.js                    # Lógica de geração do QR Code
│       └── password/
│           ├── create.js                    # Inicializa o fluxo da senha
│           ├── handle.js                    # Lógica de geração da senha
│           └── utils/
│               └── permitted-characters.js  # Monta o conjunto de caracteres
├── .env                                     # Variáveis de ambiente (não versionado)
├── .env.example                             # Modelo de configuração
├── .gitignore
└── package.json
```

---

## 🔧 Dependências

| Pacote | Versão | Uso |
|--------|--------|-----|
| [chalk](https://github.com/chalk/chalk) | ^6.0.1 | Colorização do terminal |
| [prompt](https://github.com/flatiron/prompt) | ^1.3.0 | Input interativo via CLI |
| [qrcode-terminal](https://github.com/gtanner/qrcode-terminal) | ^0.12.0 | Renderização do QR Code no terminal |

