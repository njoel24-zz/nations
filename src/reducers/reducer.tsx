const appReducer = (state: any = [], action: any) => {

  switch (action.type) {

    case 'allcountries':
      action.payload.countries.then((res: any)=> {
        return res.data
      }); 

    default:
      return state
  }
}


export default appReducer