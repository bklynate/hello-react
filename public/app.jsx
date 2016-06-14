var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter')

var firstname = 'Nathaniel Q'
ReactDOM.render(
  <Greeter name={firstname} message='Be safe beloved'/>,
  document.getElementById("app")
);
