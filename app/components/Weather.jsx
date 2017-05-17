// Weather component
var React = require('react');

// Declare the form object:
var WeatherForm = require('WeatherForm');
// Declare the message object:
var WeatherMessage = require('WeatherMessage');
// Declare openweathermap object:
var openWeatherMap = require('openWeatherMap');


// create a class witch a render that returns a single component
// which renders its children.
var Weather = React.createClass({
  // // define default method property:
  // getDefaultProps: function() {
  //   return {
  //     cityProp: '',
  //     tempProp: 0
  //   };
  // },
  // Define initial state variables
  // NOTE: components cannot maintain props as they a passed in
  //    but it can maintain states
  getInitialState: function () {
    // Return the state(s):
    // City name state and current temperature
    return {
      // city: '',
      // temp: 0
      // Now maintain a isLoading bool:
      isLoading: false
    }
  },

  // Add handler to set the state called by WeatherForm:
  handleSearch: function(city) {
    console.log('In handleSearch: '+ city);

    // Save this in var for use in function:
    var that = this;

    // Update state:
    this.setState({isLoading: true});

    // get the temp:
    openWeatherMap.getTemp(city).then(function(temp) {
      that.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, function(errorMesaage) {
      alert(errorMesaage);
      // console.log(errorMesaage);
      that.setState({
        isLoading: false
      });
    });
      // this.setState({
      //   city: city,
      //   temp: 21
      // });
  },


  render: function() {
    // Declare the states:
    var {isLoading, city, temp} = this.state;

    function renderMessage () {
      // if loading then don't display message
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && city){ // if we have temp and city then render them
        return <WeatherMessage city={city} temp={temp}/>;
      }
    }

    return (
      <div>
        {/* This is the container which holds the state variables city and temp
          It renders 2 children:
          weather form - prompt for city, and submit button
          weather message - show the temp*/}
          <h1>Get the Weather</h1>
          {/* Render form area giving handler prop for event from child */}
          <WeatherForm onSearch={this.handleSearch}/>
          {/* Render message area passing props*/}
          {/* <WeatherMessage city={city} temp={temp}/> */}
          {renderMessage()}

        </div>
    );
  }
});

module.exports = Weather;
