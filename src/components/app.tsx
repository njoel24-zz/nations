import * as React from "react";
import { connect } from "react-redux";
import * as redux from 'redux';

import { compose } from '../utils'
import * as state from '../reducers/reducer';

// `loadable` is curried to decouple an `isLoading` check from the details of
// component implementation
export function loadable<P>(isLoading: (p: P) => boolean) {
  // Return a higher-order component implementing the "loadable" behavior
  // See: https://goo.gl/TxPPCw
  return (C: React.ComponentClass<P>|React.SFC<P>): React.SFC<P> => {
    const LoadableComponent: React.SFC<P> = (props) => {
      if (isLoading(props)) {
        return <div>Just a moment, please...</div>
      }
      return <C {...props} />
    }

    // Set pretty `displayName` for dev tooling
    LoadableComponent.displayName = `Loadable(${C.name})`
    return LoadableComponent
  }
}



interface ConnectedState {
  allCountries: any
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.


export class MyAppClass extends React.Component<any> {
    state: any = {value1: "", value2: ""};
    allCountries: any;
    change(event: any) {
      if (event.target.name === "nation1") {
        this.setState({value1: event.target.value});
      } else {
        this.setState({value2: event.target.value});
      }
    }
    render() {
       this.allCountries = this.props
        return <div className="container">
        <div> 
        <select name="nation1" onChange={this.change.bind(this)}> 
            {this.allCountries.map( (country: any) =>
              <option value={country.countryCode} key={country.countryCode}>{country.name}</option>
            )}
        </select>
        <span>{this.state.value1}</span>
        </div>
        <div>
        <select name="nation2" onChange={this.change.bind(this)}> 
          {this.allCountries.map( (country: any) =>
            <option value={country.countryCode} key={country.countryCode}>{country.name}</option>
          )}
        </select>
        <span>{this.state.value2}</span>
        </div>
        </div>;
    }
}

  const mapStateToProps = (state: any): ConnectedState => ({
    allCountries: state,
  })


  type LoadingState = {
    isSaving: boolean,
    isLoading: boolean,
  }

  const isLoading = (p: LoadingState) =>
  p.isLoading || p.isSaving

  export const MyApp = compose(
    MyAppClass,
    loadable(isLoading),
    connect(mapStateToProps, null),
  )