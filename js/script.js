var app = new Vue({
  el: "#app",
  data: {
    navbarLinks:[
        {link:"link", navitem:"Home", new:false},
        {link:"link", navitem:"Culinary History", new:false}, {link:"link", navitem:"Our Menu", new:false},
        {link:"link", navitem:"Takeout", new:true},
        {link:"link", navitem:"Bulletin", new:false},
        {link:"link", navitem:"reservations", new:false},
    ],
    footerSocial:[
      {link:"facebook", social:"fab fa-facebook-f"},
      {link:"twitter", social:"fab fa-twitter"},
      {link:"youtube", social:"fab fa-youtube"},
      {link:"instagram", social:"fab fa-instagram"},
      {link:"linkedin", social:"fab fa-linkedin"}
    ],
    footerCopyright:[
      "All Rights Reserved |",
      "Powered by WordPress |",
      "ThemeFusion"
    ]
  },
  methods: {

  },
  created: function () {
    var years = new Date().getFullYear();
    var copyright = "Copyright 2012 -"+ years+"  Avada |"
    this.footerCopyright.unshift(copyright);
  }
})
