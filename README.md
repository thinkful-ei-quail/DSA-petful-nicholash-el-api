# Petful Server

Created by Nicholas Hemerling and El Moctar.

## Where components live

- The knex instance and server are found in `/server.js`
- The various configurations are found in `/modules/config.js`
- Middleware and error handling function are found in `/modules/app/app.js`
- Pets router and service are found in `/modules/pets`
- People router and service are found in `/modules/people`
- The data on people, dogs, and cats is found in `/store.js`

## Enpoints
All endpoints are open and require no authentication.

## Pet related

- Show all pets in queue: GET /api/pets/
- - Success Response:
  `Status: 200 OK`
  `{[dogs: [{ "age": 3, "breed": "Golden Retriever", "description": "A smiling golden-brown golden retreiver listening to music.", "gender": "Male", "imageURL": "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", "name": "Zim", "story": "Owner Passed away" }], cats: [{"age": 2, "breed": "Bengal", "description": "Orange bengal cat with black stripes lounging on concrete.", "gender": "Female", "imageURL":"https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "name": "Steve French", "story": "Thrown on the street"}]]}`

- Dequeue the pets dogs or cats queue: DELETE /api/pets/
- - Parameters:
  Name: type | Type: string | Description: Required, either 'cats' or 'dogs'

- - Success Response:
  `Status: 204 No Content`

## People related

- Show all people in queue: GET /api/people/
- - Success Response:
  `Status: 200 OK`
  `{['Taylor Johnson', Malcolm Franklin', 'Steve Honeycomb']}`

- Dequeue the people queue: DELETE /api/people/
- - Success Response:
  `Status: 200 OK`
  `successful`

- Enqueue a new person: POST /api/people/
- - Success Response:
  `Status: 201 Created`
  `{'Sam Johnson'}`

## Tech Stack
This app uses Node.js and Express.