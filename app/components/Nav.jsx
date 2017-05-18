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

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    alert('TBC');
  },

  render: function() {
    return (
      // Create a top bar with menu on left and search on right
      <div className="top-bar">
        <div className="top-bar-left">
          {/* This is the menu as a list:*/}
          <ul className="menu">
            <li className="menu-text">Jon's React Weather App</li>
            <li>
              {/*Use IndexLink when linking to root component to avoid always
                matching and, therefore, keeping wrong style.
                That is, it stops multipl pages being marked as 'active' :*/}
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                  Get Weather  </IndexLink>
            </li>
            <li>
              <Link to="/examples"activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                  Examples</Link>
            </li>
            <li>
              <Link to="/about"activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                  About</Link>
            </li>
          </ul>

        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search city"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
})

module.exports = Nav;

{/*
  <div>
    <h2>Nav child component</h2>
    {/*Use IndexLink when linking to root component to avoid always
      matching and, therefore, keeping wrong style.
      That is, it stops multipl pages being marked as 'active' :
    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
        Get Weather  </IndexLink>
    <Link to="/examples"activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
        Examples</Link>
    <Link to="/about"activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
        About</Link>
  </div>
*/}
