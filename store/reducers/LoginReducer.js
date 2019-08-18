export default (state = null, action) => {
  //eğer state undefined ise null'a default olarak eşitle.
  //herhangi bir mapStateToProps fonksiyonu kullanmadığımız için ilk parametreyi null verik. ikinci parametre ise action döndürüyor.
  switch (action.type) {
    case "login": //eğer action selected_library ise bizi selected_library actionuna yönlendirir.reducer'ler actionları çağırır.
    return action.payload;

    default:
      return state; //en son return edilmiş state'i return eder.Bu durum için en başta state undefined olacaktı. ancak ilk satırda state=null diyerek belirledik. buna esx denir.
  } //eğer reducer undefined birşey return ediyorsa error throw edecektir.
};
