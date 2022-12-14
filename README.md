# [Vampire: The Masquerade Stat Sheet Generator]('https://vtmgenerator.herokuapp.com/')

### URL [https://vtmgenerator.herokuapp.com/](https://vtmgenerator.herokuapp.com/)

#### NEST API created for students purpose

![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Pre requisites

-   **Node** with version greater than or equal to 16.15.0 - [Node Download](https://nodejs.org/pt-br/download/)
-   **Yarn** with version greater than or equal to 2.5.7 - [Yarn Download](https://www.yarn.com/package/download)
-   **Nest.js** with version greater than or equal to 8.5.5 - [Nest Download](https://docs.nestjs.com/)

## Available scripts

In the project root folder, the following commands can be executed:

## Installing the dependencies:

```
$ yarn
```

## Running the project

### Mounting

```
yarn build
```

### Production

```
yarn production
```

### Development

```
yarn dev
```

To be able to work with the database you must create an .env file and add a connection url string with the DATABASE_URL key.
Example:

```
DATABASE_URL="mongodb+srv://user:<pass>@database.alwism3.mongodb.net/test"
```

Go to [http://localhost:3333](http://localhost:3333) to view it in your browser locally

## Functionalities

> > ## Autor
> >
> > -   [Alexandre dos Santos Pereira Neto](https://www.linkedin.com/in/alexandrespneto/)

## License

-   MIT License (MIT)

## Execution

> > #### Generate new resources route
> >
> > -   nest g resource {nome} --no-spec
>
> > #### Generate file.d.ts in PRISMA
> >
> > -   prisma generate
>
> > #### Push database
> >
> > -   prisma db push
>
> ---
