// For webpack - import the React libs:
var React = require('react');
// and ReactDOM:
var ReactDOM = require('react-dom');
// and ReactDOMServer
var ReactDOMServer = require('react-dom/server');

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
    var {title, message} = this.props;

    var modalMarkup = (
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

    // jQuery variable to hold the HTML as a string:
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    // Now find the node:
    $(ReactDOM.findDOMNode(this)).html($modal);

    // Reveal the component using jQuery and its ID:
    var modal = new Foundation.Reveal($('#error-modal'));
    // Now open it up:
    modal.open();
  },

  // Implement the render method:
  // To fix the problem with Foundation altering the DOM when this is called
  // we need to move the code out to componentDidMount
  // As Foundation messes with the DOM, we will render an empty doc.
  render: function () {
    return (
      <div>

      </div>
    );

  }
});

module.exports = ErrorModal;
