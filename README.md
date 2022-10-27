<a name="readme-top"></a>

[![MIT License][license-shield]][license-url] [![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="https://drive.google.com/uc?id=10sQ1VZYdwZ30gkp73-O1L8HszvUT23IQ" alt="Logo" width="200">
  </a>

  <h3 align="center">NLW ESports API</h3>
  <h4 align="center">Status: DONE ✅ </h4>
  <div align="center">
  <a href="https://nlw-esports-api.vercel.app" target="_blank">
	   🚀 Access the API on vercel
  </a>
  </div>
</div>

<br>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running">Running the application</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<a name="about-the-project"></a>

API server for [NLW ESports Web](https://github.com/LeAmSa/nlw-esports-web) project.

The objective was to develop a small social network of duos for games. The user can create your own ad or access a particular game page and find other users that published ads with information like nickname, game time, weekdays/time disponibility, and if they accept voice channel. By the end, the users can connect by copying the [discord](https://discord.com/) nickname.

_Project developed during the Next Level Week event from [Rockeatseat](https://www.rocketseat.com.br/)._

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<a name="built-with"></a>

This project was built with the following main frameworks/libraries.

- [![Vite][nodejs-badge]][nodejs-url]
- [![Typescript][typescript-badge]][typescript-url]
- [![Express][express-badge]][express-url]
- [![Prisma][prisma-badge]][prisma-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

<a name="getting-started"></a>

### Prerequisites

<a name="prerequisites"></a>

- Resources needed
  - [Git][git-url]
  - [Node.js][nodejs-url]
  - A code editor (ex: [Visual Studio Code][vscode-url])

### Installation

<a name="installation"></a>

1. Clone the repo
   ```sh
   git clone https://github.com/LeAmSa/nlw-esports-api.git
   ```
2. Enter the project folder
   ```sh
   cd nlw-esports-api
   ```
3. Install NPM packages

   ```sh
   npm install
   ```

4. Create a `.env` file and enter your `DATABASE_URL` key like in `.env.example`
   ```js
   DATABASE_URL = "ENTER YOUR DATABASE URL";
   ```

### Running the application

<a name="running"></a>

- Run the application in dev mode
  ```sh
   npm run dev
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Features -->

## Features

<a name="features"></a>

- [x] GET games list
- [x] GET ads for each game
- [x] GET discord nickname by ad
- [x] POST game ad

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

<a name="license"></a>

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[logo]: https://drive.google.com/uc?id=10sQ1VZYdwZ30gkp73-O1L8HszvUT23IQ
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/LeAmSa/nlw-esports-api/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/leandroamorimsalles1994
[git-url]: https://git-scm.com/
[nodejs-url]: https://nodejs.org/en/
[vscode-url]: https://code.visualstudio.com/
[nodejs-badge]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[typescript-badge]: https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[express-url]: https://expressjs.com/
[express-badge]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white
[prisma-url]: https://www.prisma.io/
[prisma-badge]: https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white
