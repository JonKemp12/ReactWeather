var axios = require('axios');

// Declare a constant for the base weather URL using my ID:
//abe4881a048ca35410ad8650b96308e6
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=abe4881a048ca35410ad8650b96308e6';

// Export a function to return the temp.
// This will be a promise.
module.exports = {
  getTemp: function (city) {
    // Made sure city is correct URI encoded:
    var encodededCity = encodeURIComponent(city);
    // Use React query strings:
    var requestURL = `${OPEN_WEATHER_MAP_URL}&units=metric&q=${encodededCity}`;

    // Use axios to make the call and RETURN as a promise:
    return axios.get(requestURL).then(function(res) {
      // Check if success returned an error:
      if (res.data.cod && res.data.message) {
        console.log('OK, but cod & message?');
        throw new Error(res.data.message);
      } else {
        // Good so return temp value:
        return res.data.main.temp;
      }
    },
    function(res) {
      // Throw failure back up:
      // console.log('BAD: ??');
      //console.log(requestURL);
      //console.log(res);
      console.log(res.data.message);
      //throw new Error('City not Found');
      throw new Error(res.response.data.message);
    });
  }
}
