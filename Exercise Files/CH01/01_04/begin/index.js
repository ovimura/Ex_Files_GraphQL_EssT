// Doc ref: https://github.com/graphql/express-graphql

import express from 'express';
import schema from './schema';

const graphqlHTTP = require('express-graphql');

const app = express();

app.get('/', (req,res) => {
    res.send('Graphql is amazing!');
});

const root = {hello: () => "Hi, I'm Manny"};

app.use('/graphql', graphqlHTTP ({
        schema: schema,
        rootValue: root,
        graphiql: true,
    }),
);

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));
