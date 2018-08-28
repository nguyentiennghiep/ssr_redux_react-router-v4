import express from "express"
import cors from "cors"
import { renderToString } from "react-dom/server"
import StaticRouter from 'react-router-dom/StaticRouter';
import React from 'react'
import routes from '../shared/routes'
import { renderRoutes, matchRoutes } from 'react-router-config';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import reducers from '../shared/reducers/index';
import { Provider } from 'react-redux';

const app = express()

app.use(cors())

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static("public"))
const store = createStore(reducers, applyMiddleware(thunk));

app.get("*", (req, res, next) => {
    const branch = matchRoutes(routes, req.url);
    const promises = branch.map(({ route }) => {
        let fetchData = route.component.fetchData;
        return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
    });
    return Promise.all(promises).then((data) => {
        let context = {};
        const markup = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    {renderRoutes(routes)}
                </StaticRouter>
            </Provider>
        );


        res.send(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>SSR with RR</title>
                </head>

                <body>
                    <div id="app">${markup}</div>
                    <script> window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}</script>
                    <script src="/bundle.js"></script>
                </body>
                </html>
            `)
    }).catch(err => err);

})

app.listen(3000, () => {
    console.log(`Server is listening on port: 3000`)
})