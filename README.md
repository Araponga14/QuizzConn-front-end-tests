# QuizzConn - front-end

## Sobre o projeto

A parte do front-end do projeto é feita com React e Vite. O Vite é um bundler que permite a criação de projetos React de forma mais rápida e eficiente, enquanto o React é uma biblioteca JavaScript para a criação de interfaces de usuário.

## Configurando o ambiente

Para começar, é necessário ter o Node.js e Git instalados na máquina. Para instalar o Node, acesse o [site oficial](https://nodejs.org/en/), ou execute o comando abaixo no terminal:

```bash
# Linux via nvm (Recomendado)
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
source ~/.bashrc
nvm install --lts
nvm use --lts

# Alternativa para Linux (se nvm não estiver disponível)
sudo apt update && sudo apt install -y nodejs npm

# Usuários de Windows
choco install nodejs
```

Após isso, clone este repositório e acesse a pasta raiz do projeto para instalar as dependências necessárias. Comandos:

```bash
git clone https://github.com/IComp-Projects/QuizzConn-front-end.git
cd QuizzConn-front-end
npm install
```

Por fim, execute o comando abaixo para iniciar o servidor de desenvolvimento:

```bash
npm run dev

Ctrl + o
```
