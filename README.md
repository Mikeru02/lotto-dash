# Lotto Dash
## :rocket: Introduction
A web-based application for simulation of a lotto game. This application uses web socket to simulate real-time distribution of data such as winnings, bets and drawing date & time.
It uses application programming interface (API) for CRUD operations. It also uses single page application (SPA) structure for front-end developmnent. Lastly, this was coded using Node.js
structure.

## :zap: Update
No current update!

## :bulb: Contributors
* Michael Alexis Ponce - [@Mikeru02](https://github.com/Mikeru02)
* Rodien Jillian llorando - [@RodienJillian](https://github.com/RodienJillian)

## :pencil: Pre-requisites
* Node - `^18.20.4`
* NPM - `10.7.0`
* Browser - `Chromium 134`
* WSL2

## :rocket: Usage
### Local Development
1. Install dpendencies
   ``` bash
   npm install
   ```
2. Create `.env` file
   ``` env
   PORT=4000                      # Port of the API
   API_KEY=apikey                 # API Key
   API_SECRET_KEY=apisecretkey    # API Secret Key
   PORTS=3000,3001,3002           # Ports of each instance of the application add more if neccessary

   DB_HOST=127.0.0.1              # Add ip address of the host database if local then use this
   DB_USER=root                   # If you have a custom user, add the username here
   DB_PASS=root                   # Add the password of the usr
   DB_NAME=lotto_dash             # Add the database name here
   DB_PORT=3306                   # Add port of the database
   ```
3. Import database schema `schema.sql` to the mysql
   ``` bash
   mysql -u {db_user} -p lotto_dash < schema.sql
   ```
4. Run first the API to the other terminal instance
   ``` bash
   npm run api
   ```
5. Run the application instance
   ``` bash
   npm run start
   ```
6. Access each instance
   ``` bash
   localhost:3000
   localhosst:3001
   localhost:3002
   ```

### Note
* Clone/download the reository first before starting any development
* Remember to open the repository after cloning/downloading
* Make sure the pre-requisites are met
* Preferably use mysql.service on wsl2, here are some [instructions](https://documentation.ubuntu.com/server/how-to/databases/install-mysql/index.html) on installing the mysql on the wsl. If you feel troubled, ask some AI models `how to install mysql on ubuntu`
* If further issues arises kindly open a ticket then the contributors will work on it!


## :lock: License
The `lotto dash` is an open-sourced software under the [MIT License](https://opensource.org/license/mit)
