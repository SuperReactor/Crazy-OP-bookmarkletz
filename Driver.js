javascript:function gcloak() { var link = document.querySelector("link[rel*='icon']") || document.createElement('link');link.type = 'image/x-icon';link.rel = 'shortcut icon';link.href = 'https://www.pngall.com/wp-content/uploads/9/Google-Drive-Logo-Transparent-180x180.png';document.title = 'My Drive - Google Drive';console.log(document.title);document.getElementsByTagName('head')[0].appendChild(link) };gcloak();setInterval(gcloak, 1000);