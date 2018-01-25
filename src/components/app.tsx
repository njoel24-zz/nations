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
    state: any = {value1: [], value2: []};
    allCountries: any;

    change(event: any) {
      const value = event.target.value;
      const name = event.target.name
      if (name === "nation1") {
        this.setState({value1: this.getCountryByCountryCode(value)});
      } else {
        this.setState({value2: this.getCountryByCountryCode(value)});
      }
    }

    getCountryByCountryCode(countryCode: string): any {
      return this.allCountries.filter((country: any) => {
        return country.countryCode === countryCode ? country: null
      });
    }

    getCountryData(country: any) {
      if (country) {
        return <div className="details">
           <span>Country Code:</span><span>{country["countryCode"]}</span>
           <span>Currency Code:</span><span>{country["currencyCode"]}</span>
           <span>Population:</span><span>{country["population"]}</span>
           <span>Capital:</span><span>{country["capital"]}</span>
           <span>Continent Name:</span><span>{country["continentName"]}</span>
        </div>
      }
    }

    componentDidUpdate(){
      this.getCountryData(this.state.value1[0]);
      this.getCountryData(this.state.value2[0]);
    }

    getSelect(nation: string) {
      return <select name={nation} onChange={this.change.bind(this)}> 
      <option value="default">Choose</option>
      {this.allCountries.map( (country: any) =>
        <option value={country.countryCode} key={country.countryCode}>{country.name}</option>
      )}
      </select>
    }
    
    render() {
       this.allCountries = this.props.allCountries;
       if (!this.allCountries) {
         return null;
       }
        return <div className="container">
          <div className="firstSelect"> 
            {this.getSelect("nation1")}
            {this.getCountryData(this.state.value1[0])}
          </div>
          <div className="secondSelect">
            {this.getSelect("nation2")}
            {this.getCountryData(this.state.value2[0])}
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