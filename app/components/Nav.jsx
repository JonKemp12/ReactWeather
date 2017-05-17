// Nav component
var React = require('react');

// require the React Router component link using ES6 de-structuring
var {Link, IndexLink} = require('react-router');

// create a class witch a render that returns a single component
// var Nav = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h2>Nav child component</h2>
//         {/*Use IndexLink when linking to root component to avoid always
//           matching and, therefore, keeping wrong style.
//           That is, it stops multipl pages being marked as 'active' :*/}
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
//             Get Weather  </IndexLink>
//         <Link to="/examples"activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
//             Examples</Link>
//         <Link to="/about"activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
//             About</Link>
//       </div>
//     );
//   }
// });

// Instead create stateless functional component
var Nav = (props) => {
  return (
    <div>
      <h2>Nav child component</h2>
      {/*Use IndexLink when linking to root component to avoid always
        matching and, therefore, keeping wrong style.
        That is, it stops multipl pages being marked as 'active' :*/}
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
          Get Weather  </IndexLink>
      <Link to="/examples"activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
          Examples</Link>
      <Link to="/about"activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
          About</Link>
    </div>
  );
}
module.exports = Nav;
