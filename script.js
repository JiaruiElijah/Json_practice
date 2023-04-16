let content = document.getElementById('contentGrid');

let instrumentData = [
  {
    "name" : "American Professional II ",
    "picture_url" : "https://media.guitarcenter.com/is/image/MMGS7/L78115000006000-02-720x720.jpg",
    "theme_color" : "#241E91",
    "choose_font" : "Sans-Serif",
    "features" : ["Gloss urethane-finished solid alder body", "rolled-edge maple fingerboard", "Fender V-Mod II single-coil pickups"]
  },
  {
    "name" : "Areodyne Jazz",
    "picture_url" : "https://media.guitarcenter.com/is/image/MMGS7/511988000001069-02-720x720.jpg",
    "theme_color" : "#212233",
    "choose_font" : "Monospace",
    "features" : ["Rosewood fingerboard (stained with side dots only)", "Basswood body with unique radius and carved top", "1 single-coil Jazz pickup (bridge)"]
  },
  {
    "name" : "FANTOM 8",
    "picture_url" : "https://static.roland.com/products/fantom_series/assets/images/fantom8.jpg",
    "theme_color" : "#C15EFA",
    "choose_font" : "Fantasy",
    "features" : ["88 Keys (PHA-50 Wood and Plastic Hybrid Structure, with Escapement and Ebony/Ivory Feel, channel aftertouch)", "ZEN-Core", "Multi-Effects: 16 systems, 90 types"]
  },
  {
    "name" : "JC 120",
    "picture_url" : "https://static.roland.com/assets/images/products/gallery/jc_120_front_gal.jpg?_ga=2.75320529.298243525.1681597757-1328340507.1681597757",
    "theme_color" : "#171B24",
    "choose_font" : "Monospace",
    "features" : ["Versatile Connectivity", "The Original Stereo Chorus Effect", "Great with Pedals, Multi-Effects, and Amp Modelers"]
  },

  {
    "name" : "Les Paul",
    "picture_url" : "https://media.guitarcenter.com/is/image/MMGS7/L54489000004000-00-720x720.jpg",
    "theme_color" : "#E5CC55",
    "choose_font" : "Monospace",
    "features" : ["Nashville-style tune-o-matic bridge, Grover tuners", "Dual Gibson BurstBucker 61 pickups, coil tap, phase and bypass on push/pull pots", "Gloss-finished maple top on weight-relieved mahogany body"]
  }

];

for (var i = 0; i < instrumentData.length; i++) {
  createElement(instrumentData[i]);
}


function createElement(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['theme_color'];
  newContentElement.style.fontFamily = incomingJSON['choose_font'];
  newContentElement.classList.add('instrumentContent');

  let newContentHeading = document.createElement("h3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['name']; 

  newContentElement.appendChild(newContentHeading);


  let newContentName = document.createElement("h4");
  newContentName.innerText = "Features:";
  newContentElement.appendChild(newContentName);

  let featureList = document.createElement("UL");
  newContentElement.appendChild(featureList);

  for (var i = 0; i < incomingJSON['features'].length; i++) {
    var currentFeatureString = incomingJSON['features'][i];
    var newFeatureItem = document.createElement("LI");
    newFeatureItem.innerText = currentFeatureString;
    featureList.appendChild(newFeatureItem);
  }

  let newPic = document.createElement("IMG");
  newPic.classList.add("footerImage");
  newPic.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newPic);

  content.appendChild(newContentElement);

}

var rellax;
rellax = new Rellax('.rellax');
