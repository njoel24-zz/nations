import * as React from "react";
import { connect } from "react-redux";

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.


export class App extends React.Component {
  private  allCountries: any;

    render() {
        return <div className="container"> 
          <div>
            <select></select>
          </div>
          <div>
        	<select>

			</select>
          </div>
        </div>;
    }
}

const mapStateToProps = function(store: any) {
  this.allCountries = store.allCountries 
    return {};
  }
  
  export default connect(mapStateToProps)(App);