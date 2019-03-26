POST /profile
_Make a profile page_

```json
{
  "skills": ["HTML", " CSS", " JS"],
  "_id": "5c9998899d0bba00177e0a5d",
  "user": "5c9965e0ff219f00176b0651",
  "handle": "jack",
  "website": "http://google.com",
  "location": "his location",
  "bio": "his bio",
  "status": "his status",
  "githubusername": "jacksgithub",
  "social": {
    "youtube": "http://youtube.com//jacksyoutube",
    "twitter": "http://twitter.com/jackstwitter",
    "facebook": "http://facebook.com/jacksfacebook",
    "linkedin": "http://linkedin.com/jackslinkedin",
    "instagram": "http://instagram.com/jacksinstagram"
  },
  "experience": [],
  "education": [],
  "date": "2019-03-26T03:12:09.179Z",
  "__v": 0
}
```

POST /profile/experience
_Make experience for profile_

```JSON
{
    "social": {
        "youtube": "http://youtube.com//jacksyoutube",
        "twitter": "http://twitter.com/jackstwitter",
        "facebook": "http://facebook.com/jacksfacebook",
        "linkedin": "http://linkedin.com/jackslinkedin",
        "instagram": "http://instagram.com/jacksinstagram"
    },
    "skills": [
        "HTML",
        " CSS",
        " JS"
    ],
    "_id": "5c9998899d0bba00177e0a5d",
    "user": "5c9965e0ff219f00176b0651",
    "handle": "jack",
    "website": "http://google.com",
    "location": "his location",
    "bio": "his bio",
    "status": "his status",
    "githubusername": "jacksgithub",
    "experience": [
        {
            "current": false,
            "_id": "5c999bb09d0bba00177e0a5e",
            "title": "Brewer",
            "company": "Jack Daniels",
            "location": "Tennesssee",
            "from": "2015-02-12T00:00:00.000Z",
            "to": "2019-02-12T00:00:00.000Z",
            "description": "I make whiskey"
        }
    ],
    "education": [],
    "date": "2019-03-26T03:12:09.179Z",
    "__v": 1
}
```

POST /profile/education
_Making an education on profile_

```JSON
{
    "social": {
        "youtube": "http://youtube.com//jacksyoutube",
        "twitter": "http://twitter.com/jackstwitter",
        "facebook": "http://facebook.com/jacksfacebook",
        "linkedin": "http://linkedin.com/jackslinkedin",
        "instagram": "http://instagram.com/jacksinstagram"
    },
    "skills": [
        "HTML",
        " CSS",
        " JS"
    ],
    "_id": "5c9998899d0bba00177e0a5d",
    "user": "5c9965e0ff219f00176b0651",
    "handle": "jack",
    "website": "http://google.com",
    "location": "his location",
    "bio": "his bio",
    "status": "his status",
    "githubusername": "jacksgithub",
    "experience": [
        {
            "current": false,
            "_id": "5c999bb09d0bba00177e0a5e",
            "title": "Brewer",
            "company": "Jack Daniels",
            "location": "Tennesssee",
            "from": "2015-02-12T00:00:00.000Z",
            "to": "2019-02-12T00:00:00.000Z",
            "description": "I make whiskey"
        }
    ],
    "education": [
        {
            "current": false,
            "_id": "5c999cd39d0bba00177e0a5f",
            "school": "School of Bartending",
            "degree": "Bartender Elite",
            "fieldofstudy": "Bartending",
            "from": "2015-05-05T00:00:00.000Z",
            "to": "2018-05-05T00:00:00.000Z",
            "description": "This is how I learned to make whiskey"
        }
    ],
    "date": "2019-03-26T03:12:09.179Z",
    "__v": 2
}
```

GET Profile by handle
GET Profile by UserID

```JSON
{
    "social": {
        "twitter": "http://twitter.com/edusoft",
        "facebook": "http://facebook.com/edusoft"
    },
    "skills": [
        "HTML",
        " CSS",
        " Python"
    ],
    "_id": "5c892bc118e2132a0053c180",
    "user": {
        "_id": "5c892b4de3609c42f882a855",
        "name": "Jimmy Smith",
        "avatar": "//www.gravatar.com/avatar/735b04eba3dd7bd4ace5ca28cb781fc1?s=200&r=pg&d=mm"
    },
    "handle": "Test",
    "status": "Developer",
    "experience": [],
    "education": [],
    "date": "2019-03-13T16:11:45.441Z",
    "__v": 0,
    "company": "Edusoft",
    "website": "http://edusoft.com"
}
```
