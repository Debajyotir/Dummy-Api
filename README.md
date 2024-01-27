# Stock Price View Application

## Using Node.js, Express.js, and MongoDB

### 1. Setup and Run Instructions

To run the project, first, install Node.js if it is not already existing in the system. Then, execute the following commands:

```
npm install
npm start
```
Alternatively, you can use:
```
npm install
node index.js
```
The application will run on port 5000.

### 2. How to Use the API, with Examples
All operations consider the current date as 25/01/2024. Historic data for the last 50 working days from 25/01/2024 (inclusive) are stored, covering the period from 15/11/2023 to 25/01/2024.

#### Task 1: GET Route for the Top 10 Stocks
```
http://localhost:5000/find/top/:limit
```
```or```
```
baseUrl/find/top/:limit
```
Replace :limit with a valid integer (e.g., 10 or 20) to retrieve the top 10 or 20 stocks of the current day. If :limit is greater than 4223, it will show only 4223 results, as this is the total number of stocks available on the current date.

Example URL:
```
http://localhost:5000/find/top/10
or
baseUrl/find/top/10
```

#### Task 2: GET Route to Find Stocks by Name
```
http://localhost:5000/find/name/:name
or
baseUrl/find/name/:name
```
Replace :name with the case-sensitive name of the stock needed to find. If there is no match, an empty array will be returned. The name must be present on the current date.

Example URL:
```
http://localhost:5000/find/name/LLOYDSENT
or
baseUrl/find/name/LLOYDSENT
```

Task 3: GET Route to Get Stock Price History for UI Graph
GET http://localhost:5000/find/history/:code/:limit
or
GET baseUrl/find/history/:code/:limit

Replace :code with a valid code from the BSE CSV file, and :limit with the number of days of history data required (maximum 50). If the code does not exist, an empty array will be returned.

Example URL:
http://localhost:5000/find/history/512565/10
or
baseUrl/find/history/512565/10


Task 4: POST Route to Add a Stock to Favorites
POST http://localhost:5000/favourite/add
or
POST baseUrl/favourite/add
In the req.body, provide the following JSON object:
{
    "userId": "Enter a random id to uniquely identify the user.",
    "favoriteStock": "Enter a valid code from the BSE CSV file."
}
If the user already exists, it will update the user's list. If the stock is also present in the existing user list, it will return a response with status(400) bad request. If the user does not exist, it will create a new user with the specified favorite stock.

Example JSON:
{
    "userId": "a15",
    "favoriteStock": "500041"
}


Task 5: GET Route to See Favorite Stocks
GET http://localhost:5000/favourite/see/:userId
or
GET baseUrl/favourite/see/:userId
Replace :userId with the unique ID given in the adding process. If the ID is not found, it will return a bad request. If the userID matches, it will provide all the details of the stock codes stored in the favorite list.

Example URL:
http://localhost:5000/favourite/see/a3
or
baseUrl/favourite/see/a3


Task 6: DELETE Route to Remove a Stock from Favorites
DELETE http://localhost:5000/favourite/remove
or
DELETE baseUrl/favourite/remove
In the req.body, provide the following JSON object:
{
    "userId": "Enter the unique ID given in the adding process. If the user doesn’t exist, it will respond with status(400).",
    "favoriteStock": "Enter a code that exists in the list for this particular userID. If found, it will delete it; otherwise, it will respond with status(400)."
}
Example JSON:
{
    "userId": "a1",
    "favoriteStock": "500049"
}
