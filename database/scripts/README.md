unfortunately, the master schema.graphql still has to be maintained by hand.

the compileschema.js script works pretty well to compile all .graphql files
however, there are issues with the algorithim that reads the mutations.
One way to solve and make the schema.graphql fully generated is to define the functions in the mutations.js file so we don't have to create rules to parse them.

The compile resolvers function works perfectly I think, and is necessary.

generatemutation reformats a mutation as a .graphql block from a mutation.js (performs well with CRUD naming convention).
