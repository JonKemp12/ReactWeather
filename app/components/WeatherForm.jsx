// For webpack - import the React libs:
var React = require('react');

// Create a sub-component for our form:
// User interaction component
// Takes parent handler prop
var WeatherForm = React.createClass({
  // Submit func:
  onFormSubmit: function (e) {
    e.preventDefault();

    var city = this.refs.city.value;

    // Clear form and add to updates var
    if (city.length > 0){
      this.refs.city.value = '';
      //this.state.cityState = city;
      this.props.onSearch(city);
    }
  },
  // Render func:
  render: function () {
    return (
      <div>
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="city" placeholder="Enter a city name"/>
        <button className="button expanded hollow" >Get the Weather</button>
      </form>
    </div>
    )
  }
});

// Export the object:
module.exports = WeatherForm;
