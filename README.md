# Project Name

React Portfolio Web App

# Primary Tech

This project is built using the React framework. Specifically, it is using React version 16.10.2 and several React-related dependencies such as `react-dom`, `react-scripts`, `react-test-renderer`, and others. 

Additionally, this project includes other non-React dependencies such as `colorthief`, `dotenv`, `enzyme`, `gh-pages`, `jest`, `prettier`, and `sass`.

# Setup default environment variables

 cp env.example .env 

    - then within the .env file, setup your GitHub Token & GitHub Username
    - also make sure the GitHub Data is set to "true"
    - double check no syntax errors in this file lastly

## Installation

To install this project, simply clone this repository and run the following commands in your terminal:

# Build & Run Docker Image

docker build -t higsdevfolio:latest .

npm install

docker run -t -p 3000:3000 higsdevfolio:latest

 # Serve
npm run predeploy

serve -s build



## License

This project is licensed under the MIT License. See the LICENSE file for details.
