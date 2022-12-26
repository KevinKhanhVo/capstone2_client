# Make N' Eat

## URL Link
https://makeneat.netlify.app/

## Overview
On landing page, user will be able to view recipes, instructions and ingredients of meals. 
They are able to access basic features as a non-registered user such searching and viewing
reviews. When signing up, users are now able to favorite meals and write/delete their reviews.

## Tech Stack
React, Express, PostgreSQL

## API
https://www.themealdb.com/api.php?ref=apilist.fun

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
