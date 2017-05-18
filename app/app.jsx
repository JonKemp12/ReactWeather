// For webpack - import the React libs:
var React = require('react');
var ReactDOM = require('react-dom');
// Add the router components:
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Declare the object from its source:
// var Greeter = require('boilerplate');

// Declare the Main component
var Main = require('Main');
// Require the Weather component
var Weather = require('Weather');
// Require Examples component
var Examples = require('Examples');
// Require the About component
// When we render the About we also want to show the Main
var About = require('About');

// Load foundation by using
// style to inject the css from the foundation.min.css
require('style!css!foundation-sites/dist/foundation.min.css');
// And do it by calling the function:
$(document).foundation();

// render a DOM component, passing the DOM and rhe element
// which is this app.

ReactDOM.render(
//  render router components:
// Route renders the Main component and the Navigation from the root (/)
// IndexRoute renders the children
// The Main will always be rendered as it is off root path '/'
// About will be rendered if the route path contains 'about'
// Or: if URL=/about will render About
//  else URL=/ will render Weather

// Router history causes the URL to have /#/[link]
  <Router history={hashHistory}>
    {/* Main is always rendered as URL starts with root path '/' */}
    <Route path="/" component={Main}>
    {/* Inside if URL is /examples then render Examples: */}
      <Route path="examples" component={Examples}/>
      {/* If URL is /about then render About component: */}
      <Route path="about" component={About}/>
      {/*else just render Weather component: */}
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
