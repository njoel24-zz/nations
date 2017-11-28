export const getAllCountries = () => {

  const myHeaders = new Headers();
  myHeaders.set("Content-Type", "application/json");
  const body = JSON.stringify({
    query: "{ allCountries { name continentName currencyCode countryCode population continentCode capital }}" });
  return function (dispatch: any) {
    return fetch('http://localhost:8000/graphql', {
      method: 'POST',
      headers: myHeaders,
      body: body}) 
      .then((res: any) => dispatch(
        { 
          type:"allcountries", 
          payload: { 
            countries: res.json() }
          }
        )) 
  };

}