// Main container component

var React = require('react');

var Nav = require('Nav');

// create a class witch a render that returns a single component
// which renders its children.
// var Main = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <Nav/>
//         <h2>Main container component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });

// Instead create stateless functional component
var Main = (props) => {
  return (
    <div>
      <Nav/>
      <h2>Main container component</h2>
      {props.children}
    </div>
  );
}

module.exports = Main;
