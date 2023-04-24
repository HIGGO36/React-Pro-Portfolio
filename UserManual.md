
# User Manual

  Because this app uses a few Firebase tools, it is probably best to read through this before making any updates or so.
  
  
# Introduction

This user manual provides an overview of the React app that utilizes Firebase's authentication and Firestore database to implement user authentication and profile management.


# App Overview

The app uses functional programming concepts and React Hooks such as useContext, useState, useEffect, useRef, and useCallback to manage the app's state and handle user interactions. The app's Firebase functionality is imported through the Firebase SDK.

The AppContent component is the main component that renders the app's UI, and it is responsible for managing the user's authentication state, displaying the appropriate UI based on the user's authentication status, and handling user interactions.

The app uses FirebaseUI's StyledFirebaseAuth component to display a login form with options for Google and email authentication. When a user logs in or signs up, the app checks if the user is new and adds the user's information to Firestore accordingly.

When a user signs out, the app uses Firebase's auth() method to sign out the user and redirect the user to the app's homepage.

The app also allows users to update their profile information by displaying a form that collects the user's input and updates the user's Firestore document.


# Functional Programming Approach

Overall, the app uses a functional programming approach to manage the app's state, handle user interactions, and ensure the integrity and security of user data objects. This approach helps to reduce complexity and increase maintainability of the codebase.

  Some of the benefits of functional programming in this app include:

  - Improved state management with useState and useContext
  - Better handling of side effects with useEffect and useCallback
  - Enhanced code readability and reusability
  - Increased robustness and testability of the codebase
  
  
  # Conclusion
  
  In summary, this app provides a secure and efficient way for users to manage their authentication and profile information. By using a functional programming approach and leveraging Firebase's authentication and Firestore database, this app is able to provide a reliable and user-friendly experience.
