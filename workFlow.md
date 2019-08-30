login olduktan sonra helper functiona yönlenip verileri redux'u çağırıp çekecek
componentlerde herhangi bir logic kesinlikle dönmeyecek.
Redux'da da logic dönmemeli hepsi kendi işini yapmalı
...state yapısını mesela proplara verirken kullan. aynı isimden yap buttonText:buttonText kullanmamaya çalış
tabi reusable yaparsan redux'tan gelen değişken isimlerin farklı olacağı için bunu yapamayabilirsin.
Token'ı nasıl sakladığını iyi ayarla
videoları nasıl memory'de saklayacağına bak
static json dosyalarını ayrı dosyada sakla
mesela email için validasyonu anlık yap. emaili düzeltiniz diye input border kırmızı okeyse yeşil. ilk siyah normal
componentShouldUpdate kullanılmalı. performans iyileştirmesi için sürekli render olmamalı

child(reusable component)'den parent(screens)'e onclick yada bir state geçireceksen, parentte bunu karşılarken direk helper functiona gönder. State geliyorsa yine ilgili redux actiona gönder.

## Örn

Button childComponent

\_handleOnClick=()=>{

this.props.passClickToParent()
}

## <Button text={this.props.btnText} onClick={this._handleOnClick}>

TextInput child reusable component
\_handleChange=(text)=>{
this.setState=({
inputValue:Text
},()=>this.props.passValueToParent(text))
  
}
Buralarda this.props.children kullanabilirsin. Max reusability için
<TextInput onChange={(text)=>{\_handleChange(text)}>

---

parent component

\_getNameFromTextInputChild(text){

    burada direk child'den aldığın değeri önce helper'a validation için , sonra redux'a gönderebilirsin

}
\_getOnBtnClick=()=>{
mesela helper'da login yaptırırsın
}

<TextInputChild passValueToParent={this._getNameFromTextInputChild.bind(this)}>
<ButtonChild passClickToParent={this._getOnBtnClick.bind(this)}>
bu şekilde componentlerde state tutmadan herşeyini halledebilirsin. ve max reusability sağlarsın
Uygulama açılırken token kontrol edilebilir. Bunu App.js'den çağırdığın tokenControl Helper'ı ile kontrol etmelisin.eğer true ise app'in içeriğini döndür, false ise logine at. Conditional rendering
Bütün helperların istisna olmadan single responsibility olacak. solid'i uygulayabildiğin kadar uygula js'e
Her state update'i redux'a yollamak mı yoksa component seviyesinde state'leri tutup setleyip sonra mı göndermek daha iyi bir yaklaşım bunu araştır.
deneme

secret Key'lerini gitignore yap. github'a açacaksan