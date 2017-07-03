(function(){
  function onTabClick(event){
    var activeTab = document.querySelectorAll('.selected');

    // deactivate a tab
    for (var i=0; i < activeTab.length; i++){
      activeTab[i].className = activeTab[i].className.replace('selected', '');
    }

    // activate a tab
    event.target.parentElement.className += ' selected';
    document.getElementById(event.target.href.split('#')[1]).className += ' selected';
  }

  var el = document.getElementById('tabs');

  el.addEventListener('click', onTabClick, false);
})();
