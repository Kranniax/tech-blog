# Tech Blog

## Description

I created a CMS-style blog site where users can publish their blog posts and comment on other users' posts. I built this site completely from scratch and deployed it to Heroku. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Deployed Website](#deployed-website)
- [Technologies Used](#technologies-used)
- [Contributions](#contributions)
- [Project Status](#project-status)
- [Contact](#contact)

## Features

- User authentication (signup, login, logout)
- Create, read, update, and delete blog posts
- Comment on posts
- Dashboard for managing your own posts
- Responsive design for desktop and mobile devices

## Requirements

For development, you will only need Node.js and MySQL installed.

## Installation

### Node installation on Windows

Please visit [Official Node.js Website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

### Installation Steps

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies: `npm install`
4. Set up your MySQL database and update the connection configuration
5. Run the schema: `npm run schema`
6. Seed the database (optional): `npm run seed`
7. Start the server: `npm start`

## Usage

![Tech Blog Screenshot](./assets/images/profile-pic.jpg)

The Tech Blog allows developers to publish their thoughts, articles, and opinions about technical concepts, recent advancements, and new technologies. Users can create an account, create their own posts, and comment on other users' posts.

## Deployed Website

### [Deployed Link](https://tech-blog-project-9e3a1ade4be8.herokuapp.com/)

## Technologies Used

- JavaScript
- Node.js
- Express.js
- MySQL
- Sequelize ORM
- Handlebars.js
- Express Session
- bcrypt
- dotenv

## Contributions

Created by Shane Bramble-Wade

## Project Status

Project is: _completed_

## Contact

Created by [@kranniax](https://twitter.com/kranniax) - feel free to contact
