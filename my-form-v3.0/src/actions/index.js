const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_EMAIL = 'CHANGE_EMAIL';
const CHANGE_CPF = 'CHANGE_CPF';
const CHANGE_ADRESS = 'CHANGE_ADRESS';
const CHANGE_CITY = 'CHANGE_CITY';
const CHANGE_STATE = 'CHANGE_STATE';
const CHANGE_TYPE = 'CHANGE_TYPE';

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    name,
  }
}

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email,
  }
}

export function changeCpf(cpf) {
  return {
    type: CHANGE_CPF,
    cpf,
  }
}

export function changeAdress(adress) {
  return {
    type: CHANGE_ADRESS,
    adress,
  }
}

export function changeCity(city) {
  return {
    type: CHANGE_CITY,
    city,
  }
}

export function changeState(district) {
  return {
    type: CHANGE_STATE,
    district,
  }
}

export function changeType(complement) {
  return {
    type: CHANGE_TYPE,
    complement,
  }
}
