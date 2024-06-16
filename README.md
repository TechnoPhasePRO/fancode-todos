# FanCode Todos Check

This project is a NestJS application that checks if all users from the city "FanCode" have completed more than half of their todo tasks. The city "FanCode" is identified by specific latitude and longitude ranges.

## Setting Up the Project

1. Clone the repository:
```json
   git clone https://github.com/TechnoPhasePRO/fancode-todos
   cd fancode-todos
```

2. Install dependencies:
```json
   npm install
```

3. Start the NestJS application:
```json
  npm run start
```
  This will start the application on http://localhost:3000.

## API Endpoint

Check Todos Completion
- URL: `/fancode/check-todos`
- Method: GET
- Description: This endpoint fetches all users and todos from the JSONPlaceholder API, filters users based on the city "FanCode" criteria (latitude between -40 to 5 and longitude between 5 to 100), and calculates the percentage of completed todos for each user. It returns a list of users with their completion percentage and whether they meet the criteria of having more than 50% todos completed.
```json
Response Body:
[
    {
        "userId": 1,
        "name": "Leanne Graham",
        "completedPercentage": 55.00000000000001,
        "meetsCriteria": true
    },
    {
        "userId": 5,
        "name": "Chelsey Dietrich",
        "completedPercentage": 60,
        "meetsCriteria": true
    },
    {
        "userId": 10,
        "name": "Clementina DuBuque",
        "completedPercentage": 60,
        "meetsCriteria": true
    }
]
```

## Additional Information
This project uses the JSONPlaceholder API for fetching users and todos data:

- Users API: http://jsonplaceholder.typicode.com/users
- Todos API: http://jsonplaceholder.typicode.com/todos

For more information about NestJS, visit the [NestJS Documentation](https://docs.nestjs.com/).

## License

Nest is [MIT licensed](LICENSE).