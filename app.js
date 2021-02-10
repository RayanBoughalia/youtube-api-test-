var callBackGetSuccess = function (data) {
//  console.log("donnée api :", data); <== les donnée de l'API
  document.getElementsByClassName('title')[0].innerHTML = `Titre : ${data.title}`;
  document.getElementsByClassName('Youtuber')[0].innerHTML = `Youtubeur : ${data.author_name}`
  document.getElementsByClassName('thumbnail_url')[0].src = data.thumbnail_url
};

function getData() {
  var url =
    `https://www.youtube.com/oembed?format=json&url=${document.getElementsByClassName('input')[0].value}`;
  
  $.get(url, callBackGetSuccess).done(function() {
    // alert('second success');    
  })
  .fail(function() {
    alert('the url is not correct')
    console.error('the url is not correct')
  })
  .always(function() {
    // alert('finished');
  })
}