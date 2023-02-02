# Frontend Take-Home Exercise

## Deployed Version

[Go-Links Take Home](https://go-links-amiefoster.vercel.app/)

## Project Summary
This project fetches data from the Github API and displays it to users 
- User can scroll through Netflix's repository information 
- User can click on each reposity to see the commit information
- NOTE: I have included comments for each component and most functions to help explain my thought process and decisions

## Minimum Requirements
- [x] Creates a list of scrollable cards from Netflix's repositories
- [x] Cards are sorted by stars in decending order 
- [x] Cards include a button that, when clicked, will display commit information for each repository
- [x] Hosted on Vercel


## Bonus Features
- [x] User can search for orgs other than netflix by using the search bar
- [x] Implemented Bootstrap styled components

## Technologies used

- React
- Bootstrapp
- CSS
- Vercel

# What next?

Given more time, I would:
- Add more test cases
- Add error handling
- Add functionality so a user could only choose from specific organizaitons and/or add error handling so if the user types in an organization that doesnt exist in the api it would show an error message.
NOTE: I think a dropdown menu would be better for this than a search box. That was the user can see a list of all orgs that will work and choose from that.

# Getting started

## Setup 
In your terminal, clone this repository & navigate to it. 

## Install Dependencies

From the projects root directory run

### `npm install`

## Starting React App

To run this react app on local host make sure you are in the root directry and run

### `npm start`

This will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Running tests

To open the test suite you can run 

### `npm test`
This will launch the test runner in the interactive watch mode.

