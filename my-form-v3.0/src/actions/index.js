const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_EMAIL = 'CHANGE_EMAIL';
const CHANGE_CPF = 'CHANGE_CPF';
const CHANGE_ADRESS = 'CHANGE_ADRESS';
const CHANGE_CITY = 'CHANGE_CITY';
const CHANGE_DISTRICT = 'CHANGE_DISTRICT';
const CHANGE_COMPLEMENT = 'CHANGE_COMPLEMENT';

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

export function changeDistrict(district) {
  return {
    type: CHANGE_DISTRICT,
    district,
  }
}

export function changeComplement(complement) {
  return {
    type: CHANGE_COMPLEMENT,
    complement,
  }
}
