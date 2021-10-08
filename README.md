<div id="top"></div>


<!-- [![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url] -->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="docs/images/GameCenter.png" alt="Logo"  height="50">
  </a>

  <h3 align="center">Your games in control</h3>

  <p align="center">
    Se preferir, leia a documentação em Português
    <br />
    <a href="docs/README.PTBR.MD">Portugues</a>
  </p>
  <div>
    <img src="docs/images/Home1.png" alt="Home of the app showing all games the user is playing" width="33%">
    <img src="docs/images/GameDetails1.png" alt="Game Details Screenshot showing Pokemon Unite" width="33%">
    <img src="docs/images/CreateGame.png" alt="Create Game Screen" width="33%">
  </div>
</div>

<div height="200">
</div>

&nbsp;

<!-- TABLE OF CONTENTS -->


<div>
  <h1><summary>Table of Contents</summary></h1>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#installation">Installing</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#file-structure">File Structure</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#additional-tools">Additional Tools</a></li>
  </ol>
</div>


<!-- ABOUT THE PROJECT -->
<div id="about-the-project"> </div>

## 📝 About The Project

GameCenter is a mobile App (android & iOS) and an API to you manage all your games info in all yours platforms, so you can track the games you're playing, willing to play and finished. The goal of the application was to give users an easy way to manage all the games they have in their own mobile device.
It was developed for the Integrated Project Classes, which is a course computer science students take at UFES - Universidade Federal do Espírito Santo, in Brazil.

Some of the things you can do:
* Login with your Twitch account
* Search for games to add to your library
* Change games that you already added status
* Set which date you started and finished playing a game, so you can track how long you took to finish it

<p align="right">(<a href="#top">back to top</a>)</p>


<div id="built-with"> </div>

### 🔨 Built With

Here are some of the languages, frameworks, tools and libraries used in development of this application:

* [Java](https://www.java.com/)
* [Spring Boot](https://spring.io/projects/spring-boot)
* [Maven](https://maven.apache.org/)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* [Typescript](https://www.typescriptlang.org/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)

<p align="right">(<a href="#top">back to top</a>)</p>


<div id="getting-started"> </div>

<!-- GETTING STARTED -->
## ⌨️ Getting Started

This is the instructions on setting up your project locally. To get a local copy up and running follow these simple example steps:


<div id="prerequisites"> </div>

### Prerequisites

This is all the tools you need installed to run the project and the versions that are preferred
* nodejs - v16.9.1
* java - openjdk 16.0.2
* mvn - 3.8.3
* expo - 4.12.0

In this project we used yarn, but you can run it with npm if you prefer
* npm - 7.21.1
* yarn - 1.22.11


If you are planning to run this project locally, you need to seach how to install all these tools for your Operational System, and you can find that in their official websites. Also, if you want to test the mobile application, you need to configure an Android Simulator or an iOS Simulator if you're using MacOS. You can use Expo web to run an web version of the app, but it's not working with the libraries we used

<div id="installation"> </div>

## 💻 Installation

Clone the repo
```sh
git clone https://github.com/matheuslenke/GameCenter.git
```


To configure the MongoDB URI, go to `backend/src/main/resources/application.yml` and change the parameters. You also need to change in `backend/src/test/resources/application.yml` to change the parameters to the test database

### ⚙️Initializing Back-end
```bash
  # Enter back-end directory:
  $ cd backend
  # Install the dependencies:
  $ mvn install
  # Run tests:
  $ mvn test
  # Run Application:
  $ mvn spring-boot:run
```


First, you need to create a `.env` file at the frontend folder, copy the contents from `.env.example` and fill the needed environment variables.


### 📱Initializing Front-end
```bash
  # Enter front-end directory:
  $ cd frontend
  # Install the dependencies:
  $ yarn
  # Run the aplication on development mode:
  $ expo start
```

<p align="right">(<a href="#top">back to top</a>)</p>


<div id="usage"> </div>

<!-- USAGE EXAMPLES -->
## 📲 Usage
<!-- TODO -->

Here you can see some Gifs of how someone would use this app. Some of the features are:
* Log in with a Twitch.tv account, and it will link every game they add to their library
* See all their games by status, learn more about the game in game details
* Add new games to their library
* Change the status of the games in their library
* See what info we got from their Twitch.tv account, and log out

<div align="center">
  <img src="docs/images/Video1.gif" alt="Gif showing how to use the app" height="700">
  <img src="docs/images/Video2.gif" alt="Gif showing how to use the app" height="700">
  <img src="docs/images/Video3.gif" alt="Gif showing how to use the app" height="700">
  <img src="docs/images/Video4.gif" alt="Gif showing how to use the app" height="700">
</div>


<p align="right">(<a href="#top">back to top</a>)</p>

<div id="file-structure"> </div>

## 📁 File structure

Here, we can see the file structure explained

```
Project root
│   README.md
│   
└───backend
│   │    Here we can see all the Java classes from our app
│   └───src/main/java/br/ufes/gamecenter/apirest
│      └───ApirestApplication.java - Backend Main class
│      └───config - Some error classes
│      └───controller - Where the requests are mapped
│      └───model - Entities of the application
│      └───repository - Interface that connects with database
│      └───service - The logic between the controller and the repository
│      └───security - Spring Security classes
│
└───frontend
│   │   index.js - Entry file
│   │   App.tsx - First Component file
|   |
│   └───src
│       │
│       └───assets - Images, SVGs, etc used in application
│       └───components - Components used in Screens
|       └───config - Configuration files
│       └───global - Theme configurations
|       └───hooks - All custom hooks and contexts
|       └───routes - Application routes
|       └───screens - All the app screens
|       └───services - Connections to APIs with Axios
|       └───utils - Some utilities functions
|
└───database
    │   #Deprecated, this dockerfile isn't properly configured
    │    to connect with backend
    └───docker-compose.yml

```

<div id="contributing"> </div>

<!-- CONTRIBUTING -->
## 🤝 Contributing

If you have a suggestion that would make this app better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". If you are having any problem, open an issue with the tag "error"

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<p align="right">(<a href="#top">back to top</a>)</p>

<div id="license"> </div>

<!-- LICENSE -->
## 🔐 License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<div id="contact"> </div>

<!-- CONTACT -->
## ✉️ Contact


Matheus Lenke Coutinho - matheus.l.coutinho@edu.ufes.br - [Linkedin](https://www.linkedin.com/in/matheus-lenke-coutinho-492a4b15a/) - [Github](https://github.com/matheuslenke)

Igor Wandermurem Dummer - igor.dummer@edu.ufes.br - [Github](https://github.com/IgorDummer)

Project Link: [https://github.com/matheuslenke/GameCenter](https://github.com/matheuslenke/GameCenter)

<p align="right">(<a href="#top">back to top</a>)</p>

<div id="additional-tools"> </div>

<!-- ACKNOWLEDGMENTS -->
## 🔧 Additional tools

Additional tools that we recommend to develop

* [Android Studio](https://developer.android.com/studio)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Insomnia](https://insomnia.rest/)
* [IntelliJ IDEA](https://www.jetbrains.com/pt-br/idea/)

<p align="right">(<a href="#top">back to top</a>)</p>

