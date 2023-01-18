# Make N' Eat

## Live Web Application
https://makeneat.netlify.app/

## Overview
A web application to view meal recipes, meal ingredients and meal prep instructions. Non-registered users have basic features to search and view meals.
Registered users will be able to favorite their meal meal recipes as well as writing and deleting their meal reviews.

## Tech Stack
React, Express, PostgreSQL

## API
https://www.themealdb.com/api.php?ref=apilist.fun

## Get Started
* Clone repo to local
```bash
$ createdb capstone2
$ psql capstone2 < capstone2.sql
$ npm start
```

## Tests
Tests are located in folder __ tests __
```bash
$ createdb capstone2_test
$ psql capstone2_test < capstone2.sql
$ npm test --runInBand
```

## DB Schema
![Screenshot_20221226_050016](https://user-images.githubusercontent.com/92338813/209587571-27699149-dcea-4444-8c7b-f63c515d1690.png)


## Sensitive Information
Passwords are secured using Node Bcrypt. Non-registered users will not be able to access a favorite page and to add a meal review. However, they are able to access basic features such as searching, viewing meals and reviews.

## Long Term Goals for Additional Features
* Implementation of adding a new meal. Authenticated users only. 
