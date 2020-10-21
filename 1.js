window.onload = function() {

  const API_KEY = 'example_api_key'
  const textForTranslateElem = document.querySelector('.js-textForTranslate')
  const selectTranslaetElem = document.querySelector('.js-Language')
  const formTranslaetElem = document.querySelector('.js-translateForm')
  const translateElem = document.querySelector('.js-translatedText')

  function onTranslateSubmit (event){
    event.preventDefault ()
    let url = 'https://translate.yandex.net/api/v1.5/tr.json/translate'
    url += '?key=' + API_KEY

  let language 
  if (selectTranslaetElem.value == 'en') {
    language ='en'
    
  }
  if (selectTranslaetElem.value == 'fr'){
    language ='fr'

  }
  if (selectTranslaetElem.value == 'de') {
    language = 'de'
    
  }
  url += '&lang=ru-'+language
  url += '&text='+ textForTranslateElem.value

window.fetch(url)
 .then (function(response){
   return response.json()
 })
 .then (function(response){
  if (response.code !== 200) {
     translateElem.innerHTML = 'Произошла ошибка при получении ответа от сервера:\n\n' + response.message;
     return;
    }
  if (response.text.length === 0) {
    translateElem.innerHTML = 'К сожалению, перевод для данного слова не найден';
    return;
    }
    translateElem.innerHTML =response.text
 })

  }

  formTranslaetElem.addEventListener('submit',onTranslateSubmit)
  
  
  
  }