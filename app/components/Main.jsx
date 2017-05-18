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
      <div className="row">
      {/* create a grid for all children
        1/2 on medium screen, 1/3 on large, all centered */}
        <div className="row">
          <div className="columns medium-8 large-6 small-centered">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
