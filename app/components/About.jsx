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
      <h1 className="text-center page-title">About Weather</h1>
      <p>This little app is to practise creating an app in React JS and deploying to Heroku.</p>
      <p>It offers a form to query openWeatherMap.org with a location and will return the temperature there.</p>
      <p>It has been build using the following:</p>

      {/*Ordered list of links to home page with a city to query */}
      <ul>
        <li>
          <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/overview">
          The Complete React Web App Developer Course</a>
        </li>
        <li>
          <a href="https://home.openweathermap.org/">openWeatherMap.org</a>
        </li>
        <li>
          <a href="https://www.heroku.com/">Heroku Cloud platform</a>
        </li>
      </ul>
    </div>
  );
}

module.exports = About;
