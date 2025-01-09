chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.captureVisibleTab(null, { format: 'png' }, function(dataUrl) {
    // Dosya adını oluştur
    const date = new Date();
    const fileName = `screenshot_${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2,'0')}${date.getDate().toString().padStart(2,'0')}_${date.getHours().toString().padStart(2,'0')}${date.getMinutes().toString().padStart(2,'0')}.png`;

    // İndirme işlemini başlat
    chrome.downloads.download({
      url: dataUrl,
      filename: fileName,
      saveAs: true
    });
  });
}); 