const appReducer = (state: any = [], action: any) => {

  switch (action.type) {

    case 'INIT':
      return state;

    default:
      return state
  }
}


export default appReducer