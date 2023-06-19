<p align="center">
  <img src="https://docs.google.com/uc?id=15Ny0a1O1GpMlSPCFlbzqhUyw9Oh8OgHy" width="100%" />
</p>

# Habits - FullStack App

Repositório do projeto construído no NLW Setup 🚀

## Executando o projeto

Abaixo seguem as instruções para você executar o projeto em sua máquina.

Comece clonando o repositório:

```sh
git clone https://github.com/matheushdmoreira/habits

cd habits
```

### Back-end

O back-end desse projeto é construído em Node.js, mais especificamente sua versão LTS.

> Você pode instalar o Node.js seguindo [esse guia](https://efficient-sloth-d85.notion.site/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f).

Após instalar o Node.js, vamos acessar a pasta server do projeto, instalar as dependências e, então, subir o servidor HTTP.

```sh
cd server

# Instalando as dependências
npm install

# Subir o servidor HTTP
npm run dev
```

### Web

Instalando suas dependências:

```sh
cd web

# Instalando as dependências
npm install
```

Após instalar as dependências:

```sh
# Subir o servidor
npm run dev
```

### Mobile

Para executar o app habits utilizamos o Expo, uma ferramenta incrível da comunidade React Native. Além do Expo, é necessário que você utilize algum emulador local ou um dispositivo físico pra visualizar a aplicação.

> Você pode instalar o Expo e os emuladores seguindo [esse guia](https://react-native.rocketseat.dev/).

Instalando suas dependências:

```sh
cd mobile

# Instalando as dependências
npm install
```

Após configurar o ambiente mobile, você pode abrir o emulador e executar o projeto de acordo com a plataforma que estiver utilizando:

```sh
npx expo start
```

## Links rápidos ↗

- [Layout | Figma 🎨](https://www.figma.com/file/ii6NEOTBmUVkiamORKaduz/Habits-(i)-(Community)?type=design&t=bIQa9hCMTu6ZOK42-6)

**🏧 Server:**

- [Fastify](https://fastify.dev) `(REST)`
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Prisma](https://github.com/prisma/prisma)

**🖥️ Web:**

- [Vite](https://vitejs.dev)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Tailwindcss](https://tailwindcss.com)

**📱 Mobile:**

- [Expo](https://github.com/expo/expo)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [NativeWind](https://github.com/marklawlor/nativewind) _(Tailwind para o React Native)_

## License

MIT License © [Matheus Moreira](https://github.com/matheushdmoreira)
