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

// declare a link object to use:
var {Link} = require('react-router');

// Instead use stateless component
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few examples to try out:</p>

      {/*Ordered list of links to home page with a city to query */}
      <ol>
        <li>
          <Link to='/?city=Winchester,GB'>Winchester, GB</Link>
        </li>
        <li>
          <Link to='/?city=London,GB'>London, GB</Link>
        </li>
        <li>
          <Link to='/?city=Venice'>Venice</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
