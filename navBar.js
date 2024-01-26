// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
  
  // Select and cache the topMenuEl element
  var topMenuEl = document.getElementById('top-menu');
  
  // Iterate over the menuLinks array
  menuLinks.forEach(function(link) {
    // Create a new <a> element
    var linkElement = document.createElement('a');
  
    // Set the href attribute
    linkElement.setAttribute('href', link.href);
  
    // Set the content of the <a> element
    linkElement.textContent = link.text;
  
    // Append the <a> element to the topMenuEl
    topMenuEl.appendChild(linkElement);
  });