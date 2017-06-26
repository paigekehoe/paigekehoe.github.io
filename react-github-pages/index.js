import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import ExampleComponent from './components/ExampleComponent';
import ExampleTwoDeepComponent from './components/ExampleTwoDeepComponent';


///////////////////////////////////////////////////////////////////////////////
// React for GitHub Pages - https://github.com/rafrex/react-github-pages
// ----------------------------------------------------------------------------
// Checks to see if a redirect is required. There are two types of redirects:
// 1) specified in the query string generated by the 404 page
// 2) when the site is accessed at /my-repo-name
// This function checks for both types and calls the appropriate function
// to handle the redirect.
function checkForRedirect(nextState, replace) {
  const location = nextState.location;
  if (location.query.redirect === 'true') {
    parseRedirectQuery(location.query, replace);
  } else if (location.pathname.split('/')[1] === gitHubRepoName) {
    redirectToDomain();
  }
}
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// React for GitHub Pages - https://github.com/rafrex/react-github-pages
// ----------------------------------------------------------------------------
// Takes the redirect query string created in 404.html, converts it back into
// the correct url, then uses react-router to redirect to the correct url which
// loads the respective routes and components. When there is a fresh page
// load for a path that is defined with frontend routes, GitHub Pages will
// return the custom 404.html page, which then redirects back to just the
// base domain with a query string representing the attempted url, to which
// GitHub Pages returns index.html. The single page react app is loaded,
// this function is run, and the correct route is entered.
function parseRedirectQuery(query, replace) {
  let redirectTo = {}

  if (typeof query.pathname === 'string' && query.pathname !== '') {
    redirectTo.pathname = query.pathname;
  }

  if (typeof query.query === 'string' && query.query !== '') {
    let queryObject = {};
    query.query.split('&').map(q => q.split('=')).forEach(arr => {
      queryObject[arr[0]] = arr.slice(1).join('=');
    })
    redirectTo.query = queryObject;
  }

  if (typeof query.hash === 'string' && query.hash !== '') {
    redirectTo.hash = `#${query.hash}`
  }

  replace(redirectTo)
}
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// React for GitHub Pages - https://github.com/rafrex/react-github-pages
// ----------------------------------------------------------------------------
// Redirect for GitHub Pages from /my-repo-name to just the domain
// because GitHub Pages are always available at /my-repo-name even when a
// custom domain is in use. Accessing the site at /my-repo-name will
// cause the routing to break, so when the site is accessed at /my-repo-name,
// a redirect to the domain with no path is required.
// https://help.github.com/articles/custom-domain-redirects-for-github-pages-sites/
// SET THIS: e.g. my-repo-name
const gitHubRepoName = 'react-github-pages';
// The domain for your site
// SET THIS: e.g. http://subdomain.example.tld, or http://www.example.tld
const domain = 'http://react-github-pages.rafrex.com';
function redirectToDomain() {
  window.location.replace(domain);
}
///////////////////////////////////////////////////////////////////////////////


const routes = (
  // onEnter hook checks if a redirect is needed before App component is loaded
  <Route path="/" mapMenuTitle="Home" component={App} onEnter={checkForRedirect}>
    <IndexRoute component={Home} />

    <Route path="example" mapMenuTitle="Example" component={ExampleComponent}>
      <Route path="two-deep" mapMenuTitle="Two Deep" component={ExampleTwoDeepComponent} />
    </Route>

    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
)