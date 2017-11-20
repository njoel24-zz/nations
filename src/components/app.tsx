import * as React from "react";
import { connect } from "react-redux";

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<{}> {
    render() {
        return <h1>Hello from Cris!</h1>;
    }
}

const mapStateToProps = function(store: any) {
    return {
      isStart: store.isStart
    };
  }
  const mapDispatchToProps = function(dispatch: any, ownProps: any) {
    return {
      initMatch: () => {
        // dispatch(initMatch());
      }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(App);