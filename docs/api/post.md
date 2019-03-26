GET /posts
_Grabs all posts_

```json
[
  {
    "_id": "5c8bfd1fbd5a6e5aacde0e6e",
    "text": "Hello, I am new here, I am a Python Developer",
    "name": "Bob",
    "avatar": "//www.gravatar.com/avatar/0ca52abaa9fce14c44a351fccd1b9fc5?s=200&r=pg&d=mm",
    "user": "5c8abf5a1ad12d18d0f43366",
    "likes": [],
    "comments": [],
    "date": "2019-03-15T19:29:35.294Z",
    "__v": 2
  },
  {
    "_id": "5c8be6992f384c36f05ada9e",
    "text": "what is your favorite programming language?\n",
    "name": "Brad Traversy",
    "avatar": "//www.gravatar.com/avatar/db3dfd181580347568db62b054b3f5c6?s=200&r=pg&d=mm",
    "user": "5c86b7f10cc77f58e428d511",
    "likes": [
      {
        "_id": "5c8f1b4040302a46a87ed446",
        "user": "5c8abf5a1ad12d18d0f43366"
      },
      {
        "_id": "5c8c5c236c70cf2d58dc2eea",
        "user": "5c86b7f10cc77f58e428d511"
      }
    ],
    "comments": [
      {
        "date": "2019-03-18T04:14:47.344Z",
        "_id": "5c8f1b3740302a46a87ed445",
        "text": "My Favorite Langauge is JS",
        "name": "Bob",
        "avatar": "//www.gravatar.com/avatar/0ca52abaa9fce14c44a351fccd1b9fc5?s=200&r=pg&d=mm",
        "user": "5c8abf5a1ad12d18d0f43366"
      },
      {
        "date": "2019-03-18T03:53:01.537Z",
        "_id": "5c8f161d00df131f7c648a38",
        "text": "esdfsdfsdfgsdfg",
        "name": "Bob",
        "avatar": "//www.gravatar.com/avatar/0ca52abaa9fce14c44a351fccd1b9fc5?s=200&r=pg&d=mm",
        "user": "5c8abf5a1ad12d18d0f43366"
      },
      {
        "date": "2019-03-18T03:40:42.529Z",
        "_id": "5c8f133a00df131f7c648a37",
        "text": "My favorite language is JavaScript",
        "name": "Bob",
        "avatar": "//www.gravatar.com/avatar/0ca52abaa9fce14c44a351fccd1b9fc5?s=200&r=pg&d=mm",
        "user": "5c8abf5a1ad12d18d0f43366"
      }
    ],
    "date": "2019-03-15T17:53:29.899Z",
    "__v": 9
  },
  {
    "_id": "5c8be6362f384c36f05ada9d",
    "text": "What is your favorite JS framework",
    "name": "Brad Traversy",
    "avatar": "//www.gravatar.com/avatar/db3dfd181580347568db62b054b3f5c6?s=200&r=pg&d=mm",
    "user": "5c86b7f10cc77f58e428d511",
    "likes": [
      {
        "_id": "5c8f1b4b40302a46a87ed447",
        "user": "5c8abf5a1ad12d18d0f43366"
      }
    ],
    "comments": [
      {
        "date": "2019-03-18T04:20:01.478Z",
        "_id": "5c8f1c719eed4818fc260741",
        "text": "Hello World",
        "name": "Bob",
        "avatar": "//www.gravatar.com/avatar/0ca52abaa9fce14c44a351fccd1b9fc5?s=200&r=pg&d=mm",
        "user": "5c8abf5a1ad12d18d0f43366"
      },
      {
        "date": "2019-03-18T04:19:34.759Z",
        "_id": "5c8f1c561da50d399096a3a7",
        "text": "afdgadfhdafhadfhadfhadfh",
        "name": "Bob",
        "avatar": "//www.gravatar.com/avatar/0ca52abaa9fce14c44a351fccd1b9fc5?s=200&r=pg&d=mm",
        "user": "5c8abf5a1ad12d18d0f43366"
      },
      {
        "date": "2019-03-18T04:15:17.671Z",
        "_id": "5c8f1b5540302a46a87ed448",
        "text": "My favorite framework is react",
        "name": "Bob",
        "avatar": "//www.gravatar.com/avatar/0ca52abaa9fce14c44a351fccd1b9fc5?s=200&r=pg&d=mm",
        "user": "5c8abf5a1ad12d18d0f43366"
      }
    ],
    "date": "2019-03-15T17:51:50.823Z",
    "__v": 6
  }
]
```

GET /posts/:postID

```JSON
{
    "_id": "5c8be6992f384c36f05ada9e",
    "text": "what is your favorite programming language?\n",
    "name": "Brad Traversy",
    "avatar": "//www.gravatar.com/avatar/db3dfd181580347568db62b054b3f5c6?s=200&r=pg&d=mm",
    "user": "5c86b7f10cc77f58e428d511",
    "likes": [
        {
            "_id": "5c8f1b4040302a46a87ed446",
            "user": "5c8abf5a1ad12d18d0f43366"
        },
        {
            "_id": "5c8c5c236c70cf2d58dc2eea",
            "user": "5c86b7f10cc77f58e428d511"
        }
    ],
    "comments": [
        {
            "date": "2019-03-18T04:14:47.344Z",
            "_id": "5c8f1b3740302a46a87ed445",
            "text": "My Favorite Langauge is JS",
            "name": "Bob",
            "avatar": "//www.gravatar.com/avatar/0ca52abaa9fce14c44a351fccd1b9fc5?s=200&r=pg&d=mm",
            "user": "5c8abf5a1ad12d18d0f43366"
        },
        {
            "date": "2019-03-18T03:53:01.537Z",
            "_id": "5c8f161d00df131f7c648a38",
            "text": "esdfsdfsdfgsdfg",
            "name": "Bob",
            "avatar": "//www.gravatar.com/avatar/0ca52abaa9fce14c44a351fccd1b9fc5?s=200&r=pg&d=mm",
            "user": "5c8abf5a1ad12d18d0f43366"
        },
        {
            "date": "2019-03-18T03:40:42.529Z",
            "_id": "5c8f133a00df131f7c648a37",
            "text": "My favorite language is JavaScript",
            "name": "Bob",
            "avatar": "//www.gravatar.com/avatar/0ca52abaa9fce14c44a351fccd1b9fc5?s=200&r=pg&d=mm",
            "user": "5c8abf5a1ad12d18d0f43366"
        }
    ],
    "date": "2019-03-15T17:53:29.899Z",
    "__v": 9
}
```
