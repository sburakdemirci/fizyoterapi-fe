import {LOGIN} from "./types"
export const login = a => {
  //parametre olarak libraryId aldı
  return {
    type: LOGIN,
    payload: a
  };
};

export const logina = a => {
  //parametre olarak libraryId aldı
  return {
    type: "login",
    payload: a
  };
};


