# Phonebook Backend

Backend for the Phonebook application built with Node.js and Express as part of [Full Stack Open](https://fullstackopen.com/) — Part 3.

## Live application

[https://fullstackopen-pat3.onrender.com](https://fullstackopen-pat3.onrender.com)

## API endpoints

| Method | Endpoint            | Description              |
| ------ | ------------------- | ------------------------ |
| GET    | `/api/persons`      | List all persons         |
| GET    | `/api/persons/:id`  | Get a person by id       |
| POST   | `/api/persons`      | Add a new person         |
| DELETE | `/api/persons/:id`  | Delete a person by id    |
| GET    | `/info`             | Phonebook info page      |

## Run locally

```bash
npm install
npm run dev
```

Server runs on `http://localhost:3000`.
