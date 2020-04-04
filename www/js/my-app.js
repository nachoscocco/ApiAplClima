  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

    var url="https://ws.smn.gob.ar/map_items/forecast/1";
    app.request.json(url, function(jeison){
      for (i=0;i<jeison.length;i++){
          ciudad= jeison[i].name;
          provincia= jeison[i].province;
          $$("#selLoc").append("<option value='"+ ciudad +"'>"+ provincia + ", "+ ciudad +"</option>");
      };

});
});
// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    alert('Hello');
    var url="https://ws.smn.gob.ar/map_items/forecast/1";
    app.request.json(url, function(jeison){
      for (i=0;i<jeison.length;i++){
          ciudad= jeison[i].name;
              if($$("#selLoc").val() == ciudad){
                ciudad=jeison[i].name;
                provincia=jeison[i].province;
                $$("#localidad").append(ciudad + "," + provincia);
                
                var temperaturaM = jeison[i].weather.morning_temp;
                $$("#temp_m").html("<h4>"+temperaturaM + " °C</h4>");
                var descripcionM = jeison[i].weather.morning_desc;
                $$("#desc_m").text(descripcionM);
                //tarde
                var temperaturaT = jeison[i].weather.afternoon_temp;
                $$("#temp_t").html("<h4>"+temperaturaT + " °C</h4>");
                var descripcionT = jeison[i].weather.afternoon_desc;
                $$("#desc_t").text(descripcionT);
                
              
              
              
              }


          provincia= jeison[i].province;
          $$("#selLoc").append("<option value='"+ ciudad +"'>"+ provincia + ", "+ ciudad +"</option>");
      };
    
      //pasamos los datos 
      $$("#selLoc").val
});




});

/** FUNCIONES PROPIAS **/
