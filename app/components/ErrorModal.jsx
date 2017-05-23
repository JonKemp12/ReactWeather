// For webpack - import the React libs:
var React = require('react');

// Create a general error modal using Foundation Containers Reveal class
// This can be used for various projects

var ErrorModal = React.createClass({
  // Set default props:
  getDefaultProps: function () {
    return {
      title: 'Error:'
    };
  },

  // Define propTypes to make this robust.
  // If not called correctly, react will still try to render the component
  // but the debugger will show the bug.
  propTypes: {
    // message is required
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },

  // implement the life cycle method when it is run:
  componentDidMount: function () {
    // Reveal the component using jQuery and its ID:
    var modal = new Foundation.Reveal($('#error-modal'));
    // Now open it up:
    modal.open();
  },

  // Implement the render method:
  render: function () {
    var {title, message} = this.props;
    return (
      // Put meesages in and a button to close the modal
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            OK
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
