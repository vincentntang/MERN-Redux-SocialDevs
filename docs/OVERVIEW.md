A run through usercase story of how data gets pipelined

e.g.

## I want to submit a post article

These are all the steps involved, where FE = Frontend, BE = Backend

1. FE: Clicking a form, which sends onSubmit
2. FE: Sending a POST request to `/api/post` to backend
3. FE: Through an action creator
4. BE: This generates a uniqueID from nodeJS's passport middleware
5. BE: NodeJS stores the data in MongoDB for future reference
6. FE: We receive back the data, it gets dispatched to the reducer(s)
7. FE: PostForm receives back data
8. FE: Through a lifecycle method, it checks for those props passed down
9. FE: Those props get passed down to `TextAreaFieldGroup` which renders any errors
10. FE: Because we use the `connect` function, that `state` is exposed to redux tools hence that's what we see
