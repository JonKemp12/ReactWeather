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
      <h3>About child component</h3>
    </div>
  );
}

module.exports = About;
