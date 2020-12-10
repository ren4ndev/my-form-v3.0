const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  adress: '',
  city: '',
  district: '',
  complement: '',
}

const changeReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return {...state, name: action.name, }
    case 'CHANGE_EMAIL':
      return {...state, email: action.email, }
    case 'CHANGE_CPF':
      return {...state, cpf: action.cpf, }
    case 'CHANGE_ADRESS':
      return {...state, adress: action.adress, }
    case 'CHANGE_CITY':
      return {...state, city: action.city, } 
    case 'CHANGE_STATE':
      return {...state, district: action.district, }
    case 'CHANGE_TYPE':
      return {...state, complement: action.complement, }  
    default:
      return state;
  }
}

export default changeReducer;
