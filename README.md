# Lotto Dash
## :rocket: Introduction
A web-based application for simulation of a lotto game. This application uses web socket to simulate real-time distribution of data such as winnings, bets and drawing date & time.
It uses application programming interface (API) for CRUD operations. It also uses single page application (SPA) structure for front-end developmnent. Lastly, this was coded using Node.js
structure.

## :zap: Update
* Added docker compatibility!
* Added load balancer!

## :bulb: Contributors
* Michael Alexis Ponce - [@Mikeru02](https://github.com/Mikeru02)
* Rodien Jillian llorando - [@RodienJillian](https://github.com/RodienJillian)

## :pencil: Pre-requisites
* Node - `^18.20.4`
* NPM - `10.7.0`
* Browser - `Chromium 134`
* WSL2
* Docker Desktop

## :rocket: Usage
### Local Development
1. Install dpendencies
   ``` bash
   npm install
   ```
2. Create `.env` in the root directory
   ``` env
   # API related variables
   API_PORT=4000
   API_HOST=localhost
   API_KEY=lotto_dash
   API_SECRET_KEY=lotto_dash

   # Database related variables
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=root
   DB_NAME=lotto_dash
   DB_PORT=3306

   # Socket related variables
   SERVER_NAME=localhost
   PORTS=localhost:3001,localhost:3002,localhost:3003
   ```
3. Create `.env` inside the public folder
   ``` env
   # Make sure your input here is same as the API variable
   VITE_API_PORT=4000
   VITE_API_HOST=localhost
   VITE_API_KEY=lotto_dash
   ```
4. Import database schema `schema.sql` to the mysql
   ``` bash
   mysql -u {db_user} -p lotto_dash < schema.sql
   ```
5. Run first the API to the other terminal instance
   ``` bash
   npm run api
   ```
6. Run the application instance
   ``` bash
   npm run start
   ```
7. Access each instance
   ``` bash
   localhost:3001
   localhost:3002
   localhost:3003
   ```
### :whale: Docker Set Up
1. Change environment variables in `docker-compose.yml` if you want to customize the current configuration
2. Run this to build the image of the application and containerize it
   ``` bash
   docker-compose up --build
   ```
3. Access the application in browser
   ``` bash
   localhost
   ```
   To check individual instance of socketserver container
   ``` bash
   localhost:3001
   localhost:3002
   localhost:3003
   ```

### Note
* Clone/download the reository first before starting any development
* Remember to open the repository after cloning/downloading
* Make sure the pre-requisites are met
* Before developing in local, kindly add `../` this on the `src/index.js` on line `25` and `28` in the `"dist"` it should be `"../dist"` and `"../dist/index.html"`
* Before containerizing remove the added `../` on the `src/index.js`
* Preferably use mysql.service on wsl2, here are some [instructions](https://documentation.ubuntu.com/server/how-to/databases/install-mysql/index.html) on installing the mysql on the wsl. If you feel troubled, ask some AI models `how to install mysql on ubuntu`
* If further issues arises kindly open a ticket then the contributors will work on it!


## :lock: License
The `lotto dash` is an open-sourced software under the [MIT License](https://opensource.org/license/mit)
