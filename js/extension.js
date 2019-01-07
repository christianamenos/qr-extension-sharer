(function() {

  var browser = browser || chrome;

  var qrSize = 150;
  var qrElement = document.getElementById("qrcode");
  var qrcode = new QRCode(qrElement, {
    width : qrSize,
    height : qrSize
  });

  function generateCurrentTabQR() {
    /*
    We want onlu current tab information so we ask for the active tab in the
    current window, this way we only get a result in the response array.
    Otherwise, in case  the customer would have more than a window would get an
    additional result for each one.
    */
    var queryObject = {
      active:true,
      currentWindow:true
    };

    browser.tabs.query(queryObject, function(matchingTabs) {
      var currentTabUrl = matchingTabs[0].url;
      generateCode(qrcode, currentTabUrl);
    });
  }

  function generateCode(qrcode, currentTabUrl) {
    qrcode.makeCode(currentTabUrl);
  }

  generateCurrentTabQR();

})();
