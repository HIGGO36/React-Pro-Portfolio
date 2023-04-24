# Project Name

React Web App Portfolio

# Primary Tech

   React App: Web application
   Uses the Functional Programming Approach
   Firebase User Auth & Firestore Cloud-based database
   FirebaseUI's StyledFirebaseAuthg
   User Registration w/ Account Creation
   User Profile Management
   
   Dependencies: 
   
    "colorthief": "^2.2.0",
    "enzyme": "^3.11.0",
    "enzyme-adapter-react-16": "^1.15.6",
    "firebase": "^9.19.1",
    "gh-pages": "^2.1.1",
    "jest": "^27.5.1",
    "jest-canvas-mock": "^2.3.1",
    "react": "^16.10.2",
    "react-dom": "^16.10.2",
    "react-easy-emoji": "^1.8.1",
    "react-firebaseui": "^6.0.0",
    "react-headroom": "^3.0.0",
    "react-icons": "^4.8.0",
    "react-lottie": "^1.2.3",
    "react-reveal": "^1.2.2",
    "react-scripts": "^5.0.1",
    "react-test-renderer": "^16.10.2",
    "react-twitter-embed": "3.0.3",
    "sass": "^1.32.8",
    "three": "^0.151.3"
    
  For Testing Environment - using DOCKER to best mimic deployment environment for reproducibility to help diagnose and fix issues that may be specific to a particular environment.
  

# Brief Summary

In addition to acting as a personal web developer portfolio, I want to do much more with this and will continue building on it over time.

 Most Recently - I've built a user registration system for my React app using Firebase User Auth, which allows users to create and manage their own profiles using the Firestore database. To create an efficient and scalable codebase, I used functional programming methods in my modular design approach


# Usage Steps

 - Set your Environment Variables using the .env file in root ( check out : env.example file first )


# Installation

Note: If you are new to dev on your local machine, you might be required to install more than initial tools listed below, so follow your system's prompts as may be required.
 
 - First, make sure you have: 
 
     * Git - ( see helpful site: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git )
     
     * Node.js intalled at root of your computer, which will include NPM, which u will need for package management.
        ( https://nodejs.org/en/download )
        
     * Docker - this is not required install but very helpful if you want to build enterprise level apps
 
 - Clone this Repo into your testing/build environment

 - Open your Command Line tool (GitBash, Shell etc..)
   
     - cd <to the root of your projects folder>
 
 
      1.    npm install 
      2.    npm run build
      3.    serve -s build   (note: this is if your not using Docker)
 
          Extra Dev Note: you will probably need to change the URL in these files listed below to " / " instead so your local testing works at your Local Host.
 
              Update --> from "https://higgo36.github.io/React-Pro-Portfolio/" to " / " , in the files below :

                    App.js

                    Project.js

                    Profile.js

                    Package.json

 
 
   # for DOCKER users, do these after step 2 above,
          
        3. docker build -t <name of test> .
 
                 example for what i use mostly:   docker build -t 36 .


              Here's what each part of the command means:

                 docker build: This is the command to build a Docker image.
                 -t: This option is used to specify a name and optional tag for the image. In this case, the name is 36.
                .: This specifies the build context, which is the location of the Dockerfile and any files or directories referenced in the Dockerfile.
 
             In this case, the .    indicates that the build context is the current directory.
 

        4. docker run -t -p 3000:3000 <name of test>
 
                 example, docker run -t -p 3000:3000 36
 
 
 
  # Firebase Usage Steps and Infos
 
 
        5. Create a free Firebase Account and get Config Info to input into the src/component/myFirebase/myFirebase.js 
          
            Here are the steps to create a new Firebase account, 
 
               - start a new project, 
               - add Firebase Auth and Firestore database services
               - find the config information to connect with this app
 

               - Go to the Firebase website and sign up for a new account.

               - Once you are logged in, click on the "Go to Console" button to access the Firebase console.

               - Click on the "Add project" button to create a new project.

               - Enter a name for your project and click "Create Project".

               - Once your project is created, click on "Develop" in the sidebar, then select "Authentication".

               - Click on the "Set up sign-in method" button and enable any sign-in methods you want to use (e.g., email/password, Google, etc.).

               - Next, click on "Firestore" in the sidebar, then click "Create Database".

               - Choose "Start in test mode" and click "Next".

               - Choose a region for your database and click "Done".

 
            You should now see your new Firestore database. 
 
                - Click on "Rules" to set the security rules for your database.

                - Replace the default rules with the following rules:
 

                                     rules_version = '2';
                         service cloud.firestore {
                           match /databases/{database}/documents {
                             match /{document=**} {
                               allow read, write: if request.auth != null;
                             }
                           }
                         }
 

               - Click "Publish" to save the new rules.
 

            Now, you need to get the Firebase configuration information for your project. To do this,
 
               - Click on the gear icon in the upper left corner of the console to access your project settings.

               - From the project settings page, scroll down to the "Your apps" section and click on the "Add app" button.

               - Choose the platform for your app (web), and enter a nickname for your app.

               - Follow the instructions to register your app with Firebase (you will need to provide a name for your app and your app's URL).
 

            Once you have registered your app, you will be taken to the app's settings page. From here, 
 
               - scroll down to the "Firebase SDK snippet" section and select "Config" from the dropdown menu.

               - You should now see the configuration object for your app, which includes values for apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, and measurementId. Copy this information to use in your React web app.
 

                - In your React web app, create a new file called .env.local in the root of your project.

            
                - Add the following lines to the .env.local file, replacing the placeholders with the Firebase configuration information you copied:

              
                       REACT_APP_FIREBASE_API_KEY=your_api_key_here
                       REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
                       REACT_APP_FIREBASE_PROJECT_ID=your_project_id_here
                       REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
                       REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
                       REACT_APP_FIREBASE_APP_ID=your_app_id_here
                       REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
 
 
                  - Save the .env.local file.

            Your React web app should now be able to connect to your Firebase project using the configuration information in the .env.local



 **Extra Note about the firebaseConfig {} - you can find the file that holds this at - **src/components/myFirebase/myFirebase.js**
 
             -  i am abstracting my firebase sensitive info by creating ENV VARIABLEs for each, all steps on how below: 

 
    *** Here are the steps to abstract Firebase config information from public eyes using the .env file and local environment variables:


                    + Create a file named .env at the root of your project if one does not exist.

                    + Add the sensitive information for your Firebase project (API key, auth domain, project ID, messaging sender ID, app ID, and VAPID key) as environment variables in the .env file. For example:

                              REACT_APP_FIREBASE_API_KEY=your_api_key_here
                              REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
                              REACT_APP_FIREBASE_PROJECT_ID=your_project_id_here
                              REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
                              REACT_APP_FIREBASE_APP_ID=your_app_id_here
                              REACT_APP_FIREBASE_VAPID_KEY=your_vapid_key_here
 
                    + In your React web app, import the dotenv package at the top of your file.  If you already installed the project in your repo you should then now have dotenv , but if not to all next steps:
 
                              npm install dotenv
 
                              import dotenv from 'dotenv';

                              dotenv.config();
 
 You are pretty much done with everything needed at beginning, that is if you have arleady Cloned this repo and installed package.json.
 
           Now, you can see where the current Firebase Config Variable is located and update as needed later, it is,
 
 
                              /src/components/myFirebase/myFirebase.js
 
   
                 And you should see this code:

                          import firebase from 'firebase/compat/app';
                          import 'firebase/compat/firestore'; 

                          // loading the environment variables from the .env file into the process.env object.
 
                          const firebaseConfig = {
                            apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
                            authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
                            projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
                            messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
                            appId: process.env.REACT_APP_FIREBASE_APP_ID,
                            vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY,
                          };


                          //  check if there are no Firebase apps initialized yet
 
                          if (!firebase.apps.length) {

                          //  initialize Firebase with the configuration object.
 
                            firebase.initializeApp(firebaseConfig);
                          }

                          // export myFirebase as the initialized Firebase instance
 
                          const myFirebase = firebase;

                          // adding firestore firebase realtime database
 
                          const db = firebase.firestore(); 

                          // exporting both myFirebase and the db objects
 
                          export { myFirebase, db };
 
 
** IMPORTANT NOTE**:  There is a **UserManual.md** file i added gives detailed info on exactly how this app works using all the current Firebase tools.
 

 # Conclusion,
 
   I did not start from complete scratch, but have to Thank with much appreciation to the original developers behind this React Framework which I cloned from https://github.com/saadpasta/developerFolio , 
 
       And from which i did many of customizes and add-ons:
 
                - added a User Authentication and Profile management system using Firebase tools.
                - edited majority of main content with my own personal details
                - changed out lottie animations and customized one of my own being used now
                - rearranged, added, removed different components to fit my needs
                - using many new images and icons
 
  
 
 The rest is up to you to customize and build to your requirements, have fun and code on fellow devs!
