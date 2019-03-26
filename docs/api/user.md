POST /users/register

```JSON
{
  "_id": "5c9965e0ff219f00176b0651",
  "name": "Jack Smith",
  "email": "jack@gmail.com",
  "avatar": "//www.gravatar.com/avatar/77864601526fc73452f5c7f942ac4ff4?s=200&r=pg&d=mm",
  "password": "$2a$10$zjHYf5OTMYODPhjJMpP8m.f.Y/KBkhtgWVER.bMzq7hG.Y3gLpm4e",
  "date": "2019-03-25T23:36:00.344Z",
  "__v": 0
}
```

POST /users/login

```JSON
{
    "success": true,
    "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjODZiN2YxMGNjNzdmNThlNDI4ZDUxMSIsIm5hbWUiOiJCcmFkIFRyYXZlcnN5IiwiYXZhdGFyIjoiLy93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9kYjNkZmQxODE1ODAzNDc1NjhkYjYyYjA1NGIzZjVjNj9zPTIwMCZyPXBnJmQ9bW0iLCJpYXQiOjE1NTM1NTY5MTcsImV4cCI6MTU1MzU2MDUxN30.PFX0Dl5BGOo6zV0shVj5RUBo7THmBep3_a_dBMXKkYI"
}
```

GET /users/current

```JSON
{
    "id": "5c9965e0ff219f00176b0651",
    "name": "Jack Smith",
    "email": "jack@gmail.com"
}
```
