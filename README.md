# Pantry Pal

## Table of Contents

- [Pantry Pal](#pantry-pal)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Overview](#overview)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
  - [Setup](#setup)
  - [Contact](#contact)
  - [Acknowledgements](#acknowledgements)
  - [License](#license)

## Description

   This project was built as part of the Co.Lab 19 Cohort in 2023. The main goal of our group - which included George Ceja, Robert Adkins, Joel Yap and Adam Robson - when we started out, was to create an application that would make an impact in some way, on communities that were underserved. After some group brainstorming, we decided to focus on first-generation college students.  In the end, we created an application that can serve any person who is in need of food assistance.

## Overview

  The project consists of a MongoDB database, complete with a scraping engine built in Python that is used to source data regarding 2500 food pantries across the United States.  The information is fed to MongoDB and then sent to the Python backend, which is hosted on Fly.io.  The React client, hosted on Heroku, calls the backend in its fetch calls, when a user location is provided, giving the platform a city to map the food-pantries from. As a user, on load you consent to your location being shared and then your location appears on the map surrounded by the food pantries in your area. Each pantry is clickable leading to a detail page with information specific to that pantry, which is also provided by that pantry. You can visit the pantry's social media if it is provided, and you can look up a route to get to the pantry as well.

## Tech Stack

```html
<p><ins>Frameworks:</ins> React, Flask</p>
<p><ins>Languages:</ins> JavaScript, Python</p>
<p><ins>Database:</ins> MongoDB</p>
<p><ins>Other:</ins> Tailwind, Google Maps,  Geolocation API, GeoCoding API</p>

<ins>Deployments hosted on:</ins>
```

[Fly](https://fly.io/),
[Heorku](https://www.heroku.com/), and
[MongoAtlas](https://www.mongodb.com/atlas/database)

## Features

```html
<details>
  <summary>Find pantries near you</summary>
  <p>When visiting the page the application will locate you and find pantries in your area.</p>
</details>

<details>
  <summary>Search for Pantries outside of your premise</summary>
  <p>As a user you are able to search for pantries in places outside of your area.</p>
</details>

<details>
  <summary>Directions to Pantries</summary>
  <p>As a user you are able to get directions to a pantry within the application.</p>
</details>

<details>
  <summary>Tutorial</summary>
  <p>As a new user you are able to view a tutorial that explains what the application can do.</p>
</details>

<details>
  <summary>Details Page</summary>
  <p>You can also view more details of a pantry such as hours of operation, description, social media links, and more!</p>
</details>

<details>
  <summary>Navbar</summary>
  <p>Our navbar consists of pages such as About Us, Resources, and Tutorial.</p>
</details>
```

## Setup

To run this project locally, first, clone the repository:

In the root folder add an `.env`

```js
#.env
REACT_APP_GOOGLE_MAPS_API_KEY=<your_google_api_key>
REACT_APP_FLY_API_URL=<your_api_url>
```

Now run:

```js
npm install
npm start
```

Now visit:
<http://localhost:3000>

## Contact

Adam Robson
[![linkedin](./src/assets/images/linked.png 'linked in icon')](https://www.linkedin.com/in/adamrayrobson) [![github](./src/assets/images/github.png 'github icon')](https://github.com/Adam-Robson )
George Ceja
[![linkedin](./src/assets/images/linked.png 'linked in icon')](https://www.linkedin.com/in/george-ceja) [![github](./src/assets/images/github.png 'github icon')](https://github.com/GeorgeCloud )

## Acknowledgements

The data used in this project was sourced [here](https://www.foodpantries.org).

## License

[MIT](./license.md)
