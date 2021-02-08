var pics = ["blob.svg",
    "blob1.svg",
    "blob2.svg",
    "blob3.svg",
  ];

var url = ["room.html",
    "room1.html",
    "room2.html",
    "room3.html",
  ];

var ahref = '';

var img = '';

for(ii=0; ii<pics.length; ii++) {
  positiontop = Math.random()*500;
  positionright = Math.random()*0;
  zindex = ii;

  img += '<img src="'+pics[ii]+'" style="top: '+positiontop+'px;'+'right: '+positionright+'px;'+'z-index: '+zindex+';">';
  ahref += '<a href="'+url[ii]+'"'+img+'</a>'
}

document.getElementById('area').innerHTML = ahref;
