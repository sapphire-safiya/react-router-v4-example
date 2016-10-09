import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
//import { match, RouterContext } from 'react-router'
//import routes from './src/routes'

//import reducer
//import { reducer } from './src/reducers'

function handleRender(req,res) {
	
	res.status(200).send(`<!doctype html>
<html>
<head>
    <title>React Router v4</title>
</head>
<body>
  <div id="main">
  </div>
  <script src="dist/bundle.js"></script>
</body>
</html>`)
	//Define routes on the server
	/*match(routesMap, function(error, redirectLocation, routeContext) {
		if (error) {
		 res.status(500).send("Could not fulfill this request. Please try again later.")
		} else if (redirectLocation) {
		  res.redirect(302, redirectLocation.pathname + redirectLocation.search)
		} else if (routeContext) {
		   const html = renderToString(
		      <Provider store={store}>
		        <RouterContext {...routeContext} />
		      </Provider>)
		   res.status(200).send(renderFullPage(html,initialState))
		} else {
		  res.status(404).send('Not found')
		}
	})*/
}

// Step 4: Prepare DOM on server side
function renderFullPage(component,initialState){
  return `<!doctype html>
		<html>
			<head>
			 <title>My Application</title>
			 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
			 <link rel="stylesheet" href="/dist/main.css">
			</head>
		<body>
			<div id="main">${component}</div>
			<script>
	     window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
	    </script>
			<script src="/dist/bundle.js"></script>
		</body>
		</html>
    `
}

module.exports = handleRender