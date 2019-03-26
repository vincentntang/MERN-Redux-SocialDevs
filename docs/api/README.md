# React Redux Dev Connector

To test your files locally, you can download the Postman sample starter here

## Running API tests locally

To locally run the provided Postman collection against your backend, execute:

```
APIURL=http://localhost:5000/api/
```

### Authentication Header:

`Authorization: Token jwt.token.here`

## JSON Objects returned by API:

Make sure the right content type like `Content-Type: application/json; charset=utf-8` is correctly returned.

Password encrypted via JWT, avatar if username match pulled from gravatar

_Data is pulled from MongoDB instance, and scrubbed of auto-generated values_

See the associated folders for responses

- [post](/post.md)
- [user](/user.md)
- [profile](/profile.md)

## JSON Data stored on MongoDB instance

_Data is defined in models/schema_

_\_\_v_ are autoassigned keys from MongoDB instance (needs cleanup)

Users

```JSON
{
    "_id": {
        "$oid": "5bbad4e7b0a79846f01d2c5f"
    },
    "name": "John Doe",
    "email": "john@gmail.com",
    "avatar": "//www.gravatar.com/avatar/1f9d9a9efc2f523b2f09629444632b5c?s=200&r=pg&d=mm",
    "password": "$2a$10$XSo4C.IwDHNaqq9chHieMOjHej5FMf09kDKSLMSWNEIViKR6wlLWK",
    "date": {
        "$date": "2018-10-08T03:54:15.645Z"
    },
    "__v": 0
}
```

Profiles

```JSON
{
    "_id": {
        "$oid": "5c892bc118e2132a0053c180"
    },
    "skills": [
        "HTML",
        " CSS",
        " Python"
    ],
    "user": {
        "$oid": "5c892b4de3609c42f882a855"
    },
    "handle": "Test",
    "status": "Developer",
    "experience": [],
    "education": [],
    "date": {
        "$date": "2019-03-13T16:11:45.441Z"
    },
    "__v": 0,
    "social": {
        "twitter": "http://twitter.com/edusoft",
        "facebook": "http://facebook.com/edusoft"
    },
    "company": "Edusoft",
    "website": "http://edusoft.com"
}
```

Posts

```JSON
{
    "_id": {
        "$oid": "5c8bfd1fbd5a6e5aacde0e6e"
    },
    "text": "Hello, I am new here, I am a Python Developer",
    "name": "Bob",
    "avatar": "//www.gravatar.com/avatar/0ca52abaa9fce14c44a351fccd1b9fc5?s=200&r=pg&d=mm",
    "user": {
        "$oid": "5c8abf5a1ad12d18d0f43366"
    },
    "likes": [],
    "comments": [],
    "date": {
        "$date": "2019-03-15T19:29:35.294Z"
    },
    "__v": 2
}
```

## QUICKSTART

Import the [SocialDevs_V1.0.0.json](SocialDevs_V1.0.0.json) file into postman to get up and running quickly

## TODOS

- [] Reduce documentation size
- [] Clean up the data, why are there so many ID's everywhere?
