import { Component, PropTypes } from 'react';

export default function makeServerEntry(MyComponent) {
  class ServerComponent extends Component {
    componentWillMount() {
    }

    render() {
      return <MyComponent />;
    }
  }

  ServerComponent.propTypes = {
  };

  return ServerComponent;
}
