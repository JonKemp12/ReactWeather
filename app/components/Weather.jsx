// Weather component
var React = require('react');

// Declare the form object:
var WeatherForm = require('WeatherForm');
// Declare the message object:
var WeatherMessage = require('WeatherMessage');
// Declare openweathermap object:
var openWeatherMap = require('openWeatherMap');
// declare the ErrorModal
var ErrorModal = require('ErrorModal');


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
    this.setState({
      isLoading: true,
      // State to hold ErrorMessage for modal - clear to start
      errorMessage: undefined,
      // reset states (always a good idea):
      city: undefined,
      temp: undefined
    });

    // get the temp:
    openWeatherMap.getTemp(city).then(function(temp) {
      that.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, function(e) { // Returns JS error object
      // alert(errorMessage);
      // console.log(errorMesaage);
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
      // this.setState({
      //   city: city,
      //   temp: 21
      // });
  },

  // Add fuunction that is called when the component is opened
  // to handle query params in the URL eg:
  // http://localhost:3000/#/?city=Winchester,GB
  componentDidMount: function () {
    // Get query param:
    var city = this.props.location.query.city;

    // Check if we have something to search:
    if (city && city.length > 0) {
      this.handleSearch(city);
      // Reset the query string:
      window.location.hash = '#/';
    }
  },

// Add function to listen for updates to props
// This is needed to send query URLs to the child
// Same code as above!!
  componentWillReceiveProps: function (newProps) {
    // Get query param:
    var city = newProps.location.query.city;

    // Check if we have something to search:
    if (city && city.length > 0) {
      this.handleSearch(city);
      // Reset the query string:
      window.location.hash = '#/';
    }

  },


  render: function() {
    // Declare the states:
    var {isLoading, city, temp, errorMessage} = this.state;

    function renderMessage () {
      // if loading then don't display message
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && city){ // if we have temp and city then render them
        return <WeatherMessage city={city} temp={temp}/>;
      }
    }

    // function to render error modal if there is an error string
    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          // JSX to create the modal
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        {/* This is the container which holds the state variables city and temp
          It renders 2 children:
          weather form - prompt for city, and submit button
          weather message - show the temp*/}
          <h1 className="text-center page-title">Get the Weather</h1>
          {/* Render form area giving handler prop for event from child */}
          <WeatherForm onSearch={this.handleSearch}/>
          {/* Render message area passing props*/}
          {/* <WeatherMessage city={city} temp={temp}/> */}
          {renderMessage()}
          {/* render the error  child is there is one*/}
          {renderError()}
        </div>
    );
  }
});

module.exports = Weather;
