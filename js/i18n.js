(function() {

  var browser = browser || chrome;
  var i18nAttributeName = "data-i18n";

  function localizePage() {
    //Localize by replacing data-i18n attributed elements
    var objects = document.querySelectorAll('[' + i18nAttributeName + ']');
    objects.forEach((object) => {
      var message = browser.i18n.getMessage(object.getAttribute(i18nAttributeName));
      object.innerHTML = message;
      object.removeAttribute(i18nAttributeName);
    });
  }

  localizePage();

})();
