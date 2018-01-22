const appReducer = (state: any = [], action: any) => {

  
  switch (action.type) {

    case 'allcountries':
      return action.payload.countries.data.allCountries
    default:
      return state
  }
}


export default appReducer