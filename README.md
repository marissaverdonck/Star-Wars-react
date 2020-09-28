# React assignment - Star Wars API

Live demo: https://wonderful-booth-59df80.netlify.app/



The following assignment is based using the [Star Wars API](https://swapi.dev/).
There will be an attachment with the design which is expected look similar and keep the same colors, format, etc.



<img width="505" alt="Schermafbeelding 2020-09-04 om 10 51 49" src="https://user-images.githubusercontent.com/43657951/94433805-24906900-0199-11eb-98a6-f23e8ca01c40.png">
<img width="506" alt="Schermafbeelding 2020-09-04 om 10 54 01" src="https://user-images.githubusercontent.com/43657951/94433814-265a2c80-0199-11eb-8e86-00b50e7fedec.png">



## Requirements

- Use React
- There should two routes
- - Main route or home page
- - Character page which consistst of '/characterType/id' -> '/person/34'
- There should be unit test for utilities
- There should be component tests
- There should be error handling
- There should a loading state when fetching an API request

## Page description:

### Home Page

- There should be a select element with the following options 
- - Planets
- - Films
- - Species
- - Vehicles
- - People

The app should start with a default option
Every time a new option is selected, the app needs to get the correct information by
calling the correct endpoint and load the "cards"
Every time there is a waiting moment, a loading should be shown within the page
When there is an error, this should also be handled by displaying an error message

- The card element should display the name and the first character/letter of the name
- The card should be clickable and should take you to the character page, mentioned earlier

### Character Page

- It should make an API call to the correct endpoint, to get the information of the selected entity
- It should show the title/name of the selected entity in the left side
- It should show the list of attributes that are found within the API
- In a case where an attribute value is a URL, an API call should be done to fetch the title 
or name of the attribute

The second half of the Character Page should display a list of entities that start with the first letter
of the previous selected entity
If a character type person named luke, we should call an API to search the first entities that start with L
Every card should be clicable and update the current page with the new information

### Attributes

- birth_year
- gender
- hair_color
- eye_color
- mass
- height
- skin_color
- homeworld
- species
- vehicles
- climate
- diameter
- gravity
- orbital_period
- population
- rotation_period
- surface_water
- terrain
- director
- producer
- release_date
- opening_crawl
- average_height
- average_lifespan
- classification
- designation
- language
- model
- vehicle_class
- manufacturer
- length
- cost_in_credits
- crew
- passengers
- max_atmosphering_speed
- cargo_capacity
- consumables
