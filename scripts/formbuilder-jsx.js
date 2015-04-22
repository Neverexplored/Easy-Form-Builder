// Generated by CoffeeScript 1.9.2
(function() {
  var FormEditor, PreviewPane, SelectFieldType, TextField;

  TextField = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": "field"
      }, React.createElement("label", null, value), React.createElement("input", {
        "type": "text",
        "placeholder": value,
        "disabled": true
      }));
    }
  });

  SelectFieldType = React.createClass({
    componentDidMount: function() {
      $(".ui.dropdown").dropdown();
      return null;
    },
    render: function() {
      return React.createElement("div", {
        "className": "inline field"
      }, React.createElement("label", null, "Field type:"), React.createElement("select", {
        "className": "ui dropdown"
      }, React.createElement("option", {
        "value": ""
      }, "Select"), React.createElement("option", {
        "value": "1"
      }, "Text"), React.createElement("option", {
        "value": "0"
      }, "Boolean")));
    }
  });

  PreviewPane = React.createClass({
    getInitialState: function() {
      return {
        value: 'Hello!',
        checkboxDisplay: 'block'
      };
    },
    render: function() {
      var checkboxDisplay, value;
      value = this.state.value;
      return checkboxDisplay = this.state.checkboxDisplay;
    }
  }, React.createElement("div", {
    "className": "nine wide column preview"
  }, React.createElement("h2", {
    "className": "ui header medium"
  }, "Form Preview"), React.createElement("div", {
    "className": "ui secondary segment"
  }, React.createElement("div", {
    "className": "ui form"
  }, React.createElement(TextField, null)))));

  FormEditor = React.createClass({
    getInitialState: function() {
      return {
        value: 'Hello!',
        checkboxDisplay: 'block'
      };
    },
    handleChange: function(event) {
      this.setState({
        value: event.target.value
      });
    },
    handleCheckbox: function(event) {
      this.setState({
        checkboxDisplay: event.target.checked ? 'block' : 'none'
      });
    },
    render: function() {
      var checkboxDisplay, value;
      value = this.state.value;
      checkboxDisplay = this.state.checkboxDisplay;
      return React.createElement("div", {
        "className": "ui segment grid"
      }, React.createElement("div", {
        "className": "seven wide column"
      }, React.createElement("div", {
        "className": "ui form"
      }, React.createElement("label", {
        "className": "ui medium header"
      }, "Field settings"), React.createElement("br", null), React.createElement("br", null), React.createElement("div", {
        "className": "inline field"
      }, React.createElement("label", null, "Field title:"), React.createElement("input", {
        "className": "ui input",
        "type": "text",
        "placeholder": "Title",
        "onChange": this.handleChange
      }), React.createElement("br", null)), React.createElement("div", {
        "className": "inline field"
      }, React.createElement("label", {
        "className": "six wide"
      }, "Field description:"), React.createElement("input", {
        "className": "ui input",
        "type": "text",
        "placeholder": "Description",
        "onChange": this.handleChange
      }), React.createElement("br", null)), React.createElement(SelectFieldType, null), React.createElement("a", {
        "className": "ui primary button"
      }, "\t\t\t\t\t\t\t\tAdd field"))), React.createElement(PreviewPane, null));
    }
  });

  React.render(React.createElement(FormEditor, null), document.getElementById('example'));

}).call(this);