var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?instagram\.com/;

function downloadImage(imageUrl) {
  if(imageUrl){
    let ext = imageUrl.split('.').pop();
    let date = +new Date();
    let filename = `InstagramPhoto.${date}.${ext}`;
    chrome.downloads.download({ url: imageUrl, filename: filename, saveAs: true });
  }else{
    alert('Imagem não encontrada :/');
  }
}

chrome.browserAction.onClicked.addListener(function (tab) {
  if (urlRegex.test(tab.url)) {
    chrome.tabs.executeScript({
        code: '(' + function(){
          return document.querySelector('._icyx7').src
        } + ')()'
    }, res => downloadImage(res[0]));
  }
});
