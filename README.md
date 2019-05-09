# Task Manager API

This is a REST API made with nodejs . It is a simple Todo API that performs basic CRUD operations i.e Create, Read, Update and Delete helping users to keep track of daily tasks . It has features like user authentication through JWT , storing profile image for the user with Multer and sending email to a new or leaving user using SendGrid.

## Prerequisites

- NodeJS
- Npm
- Postman - [Installing Postman](https://www.getpostman.com/)
- MongoDB - [Installing MongoDB](https://www.mongodb.com/download-center/community)

## Local Installation

Clone the project

```sh
git clone https://github.com/creyente1897/taskManagerAPI.git
cd taskManagerAPI
```

Installing node modules (dependencies)

```sh
npm install
```
Making environment file

**Make an environment file in the config directory named as dev.env similar to example.dev.env**

Running the project (development)

```sh
npm run dev
```

Now you can open the project on `localhost:3000`