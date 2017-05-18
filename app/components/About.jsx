// Weather component
var React = require('react');

// create a class witch a render that returns a single component
// which renders its children.
// var About = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h3>About child component</h3>
//       </div>
//     );
//   }
// });

// Instead, create a stateless component using ES6 arrow:
// Can do this as this ONLY has render and contains no state.
var About = (props) => {
  return (
    <div>
      <h3>About Weather:</h3>
      <p>This little app is to practise creating an app in React JS and deploying to Heroku.</p>
      <p>It offers a form to query openWeatherMap.org with a location and will return the temperature there.</p>
    </div>
  );
}

module.exports = About;
