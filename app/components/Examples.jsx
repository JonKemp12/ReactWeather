// Weather component
var React = require('react');

// create a class witch a render that returns a single component
// which renders its children.
// var Examples = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h3>Examples child component</h3>
//       </div>
//     );
//   }
// });

// Instead use stateless component
var Examples = (props) => {
  return (
    <div>
      <h3>Examples child component!</h3>
    </div>
  )
};

module.exports = Examples;
