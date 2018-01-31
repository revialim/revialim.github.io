import React from 'react';
import ReactDOM from 'react-dom';

class TestComponent extends React.Component {
  render() {
    return (
        <div className="settings">
            <h1> asdfasdf </h1>
            <p>
              testtest react:)
            </p>
        </div>
    );
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('react-elem')
);