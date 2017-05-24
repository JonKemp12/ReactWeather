// For webpack - import the React libs:
var React = require('react');

// Create a sub-component for our message area:
// Presentational component does not maintain state.
// var WeatherMessage = React.createClass({
//   // Define render method:
//   render: function () {
//     // Pull out the name & message props in vars:
//     var {city, temp} = this.props;
//
//     var message = '';
//
//     console.log('Rendering WeatherMessage');
//
//     // Set message if city is given:
//     if (city.length > 0) {
//       message = 'Temperature in ' + city + ' is ' + temp + '*C';
//     }
//     return (
//       <div>
//         <h3>{message}</h3>
//       </div>
//     );
//   }
// });

// Instead create stateless functional component
// and shortform to pull props into vars with de-structuring
var WeatherMessage = ({city, temp}) => {
  // Pull out the name & message props in vars:
  // var {city, temp} = props;

  return (
    <div>
      <h3 className="text-center">
        Temperature in {city} is {temp} &deg;C
      </h3>
    </div>
  );
}

// Export the object:
module.exports = WeatherMessage;
