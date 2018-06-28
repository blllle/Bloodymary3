
    // Pillar of Salt

      LongLat = new google.maps.LatLng(-37.829690400000000000, 144.997327600000060000);
      var marker1 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png',
      title: 'Pillar of Salt'
    });

    var infoWindow1 = new google.maps.InfoWindow({
      content: '<h5>Pillar of Salt</h5><br/><p>Address:</p><p>541 Church Street,</p><p>Richmond VIC</p><p>4/5</p>'
    });

    google.maps.event.addListener(marker1, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow1.open(window.map, marker1);
    window.previousInfoWindow = infoWindow1;


    });


    // test

      LongLat = new google.maps.LatLng(-39.829690400000000000, 144.997327600000060000);
      var marker25 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png',
      title: 'Pillar of Salt'
    });

    var infoWindow1 = new google.maps.InfoWindow({
      content: '<h5>test</h5><br/><p>Address:</p><p>541 Church Street,</p><p>Richmond VIC</p><p>4/5</p>'
    });

    google.maps.event.addListener(marker25, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow25.open(window.map, marker25);
    window.previousInfoWindow = infoWindow25;


    });



    // Barry

    LongLat = new google.maps.LatLng(-37.780202400000000000, 144.996597599999970000);
    var marker3 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'Barry'
    });

   var infoWindow3 = new google.maps.InfoWindow({
      content: '<h5>Barry</h5><br/><p>Address:</p><p>85 High Street,</p><p>Northcote VIC</p><p>4/5</p>' 
    });

    google.maps.event.addListener(marker3, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow3.open(window.map, marker3);
    window.previousInfoWindow = infoWindow3;

    });

   // // Borsch Vodka Tears


     LongLat = new google.maps.LatLng(-37.852122000000000000, 144.993040999999950000);
    var marker4 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png',    
      title: 'Borsch Vodka Tears'
    }); 

   var infoWindow4 = new google.maps.InfoWindow({
      content: '<h5>Borsch Vodka Tears</h5><br/><p>Address:</p><p>173 Chapel Street,</p><p>Windsor VIC</p><p>5/5</p>' 
    });

    google.maps.event.addListener(marker4, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow4.open(window.map, marker4);
    window.previousInfoWindow = infoWindow4;

    });

   //    // Dr Morse  

     LongLat = new google.maps.LatLng(-37.799552, 144.99412699999993);
    var marker5 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'Dr. Morse'
    });

   var infoWindow5 = new google.maps.InfoWindow({
      content: '<h5>Dr. Morse</h5><br/><p>Address:</p><p>274 Johnston Street</p><p>Abbotsford VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker5, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow5.open(window.map, marker5);
    window.previousInfoWindow = infoWindow5;

    });



   //  // Feast of merit


     LongLat = new google.maps.LatLng(-37.825183000000000000, 144.995009999999980000);
    var marker6 = new google.maps.Marker({
      position: LongLat,
      icon: 'images/pinred.png', 
      map: window.map,
      title: 'Feast of Merit'
    });  


    var infoWindow6 = new google.maps.InfoWindow({
      content: '<h5>Feast of Merit</h5><br/><p>Address:</p><p>117 Swan Street</p><p>Richmond VIC</p><p>4/5</p>' 
    });

    google.maps.event.addListener(marker6, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow6.open(window.map, marker6);
    window.previousInfoWindow = infoWindow6;

    });

   //  // Friend of mine

     LongLat = new google.maps.LatLng(-37.827158000000000000, 145.009236999999980000 );
    var marker7 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'Friend of Mine'

    }); 

    var infoWindow7 = new google.maps.InfoWindow({
      content: '<h5>Friend of Mine</h5><br/><p>Address:</p><p>506 Swan Street</p><p>Richmond VIC</p><p>4/5</p>' 
    });

    google.maps.event.addListener(marker7, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow7.open(window.map, marker7);
    window.previousInfoWindow = infoWindow7;

    });



     //  // Mr Scruffs

     LongLat = new google.maps.LatLng(-37.8065573, 144.98307679999994 );
    var marker8 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'Mr Scruffs'

    }); 

    var infoWindow8 = new google.maps.InfoWindow({
      content: '<h5>Mr Scruffs</h5><br/><p>Address:</p><p>60 Smith Street</p><p>Collingwood VIC</p><p>4.5/5</p>' 
    });

    google.maps.event.addListener(marker8, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow8.open(window.map, marker8);
    window.previousInfoWindow = infoWindow8;

    });

     //  // Naked for Satan
     LongLat = new google.maps.LatLng(-37.798727500000000000, 144.978394200000030000 );
    var marker9 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'Naked For Satan'

    }); 

    var infoWindow9 = new google.maps.InfoWindow({
      content: '<h5>Naked For Satan</h5><br/><p>Address:</p><p>285 Brunswick Street</p><p>Fitzroy VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker9, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow9.open(window.map, marker9);
    window.previousInfoWindow = infoWindow9;

    });

     //  // Yellow Bird

     LongLat = new google.maps.LatLng(-37.853889, 144.993143 );
    var marker10 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'Yellow Bird'
    }); 

    var infoWindow10 = new google.maps.InfoWindow({
      content: '<h5>Yellow Bird</h5><br/><p>Address:</p><p>1/122 Chapel Street</p><p>Windsor VIC</p><p>5/5</p>' 
    });

    google.maps.event.addListener(marker10, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow10.open(window.map, marker10);
    window.previousInfoWindow = infoWindow10;

    });


     //  // Carlton Club

     LongLat = new google.maps.LatLng(-37.8129467, 144.96761259999994);
    var marker11 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'Carlton Club'
    }); 

    var infoWindow11 = new google.maps.InfoWindow({
      content: '<h5>Carlton Club</h5><br/><p>Address:</p><p>193 Burke Street</p><p>Melbourne CBD, VIC</p><p>3/5</p>' 
    });

    google.maps.event.addListener(marker11, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow11.open(window.map, marker11);
    window.previousInfoWindow = infoWindow11;

    });

     //  // Sunmoth

     LongLat = new google.maps.LatLng(-37.8131325, 144.96148370000003);
    var marker12 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'Sunmoth Canteen'
    }); 

    var infoWindow12 = new google.maps.InfoWindow({
      content: '<h5>Sunmoth Canteen</h5><br/><p>Address:</p><p>28 Niagara Lane</p><p>Melbourne CBD, VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker12, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow12.open(window.map, marker12);
    window.previousInfoWindow = infoWindow12;

    });

     //  // Mamasita

     LongLat = new google.maps.LatLng(-37.813784, 144.97346600000003);
    var marker13 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png',     
      title: 'Mamasita'
    }); 

    var infoWindow13 = new google.maps.InfoWindow({
      content: '<h5>Mamasita</h5><br/><p>Address:</p><p>11 Collins Street</p><p>Melbourne CBD, VIC</p><p>3/5</p>' 
    });

    google.maps.event.addListener(marker13, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow13.open(window.map, marker13);
    window.previousInfoWindow = infoWindow13;

    });

     //  // Botherambo

     LongLat = new google.maps.LatLng(-37.824957, 144.993017);
    var marker14 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'Botherambo'
    }); 

    var infoWindow14 = new google.maps.InfoWindow({
      content: '<h5>Botherambo</h5><br/><p>Address:</p><p>65 Swan St,</p><p>Richmond, VIC</p><p>3/5</p>' 
    });

    google.maps.event.addListener(marker14, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow14.open(window.map, marker14);
    window.previousInfoWindow = infoWindow14;

    });

   //  // Top Paddock

     LongLat = new google.maps.LatLng(-37.832482, 144.996733);
    var marker15 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'Top Paddock'
    }); 

    var infoWindow15 = new google.maps.InfoWindow({
      content: '<h5>Top Paddock</h5><br/><p>Address:</p><p>658 Church street</p><p>Richmond, VIC</p><p>3/5</p>' 
    });

    google.maps.event.addListener(marker15, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow15.open(window.map, marker15);
    window.previousInfoWindow = infoWindow15;

    });

   //  // Sweetwater Inn

     LongLat = new google.maps.LatLng(-37.843325, 144.995676);
    var marker16 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'Sweetwater Inn'
    }); 

    var infoWindow16 = new google.maps.InfoWindow({
      content: '<h5>Sweetwater Inn</h5><br/><p>Address:</p><p>1/60 Bray Street, </p><p>South Yarra, VIC</p><p>5/5</p>' 
    });

    google.maps.event.addListener(marker16, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow16.open(window.map, marker16);
    window.previousInfoWindow = infoWindow16;

    });

   //  // Drugstore Espresso

     LongLat = new google.maps.LatLng(-37.839361, 144.993502);
    var marker17 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'Drugstore Espresso'
    }); 

    var infoWindow17 = new google.maps.InfoWindow({
      content: '<h5>Drugstore Espresso</h5><br/><p>Address:</p><p>194 Toorak Rd,</p><p>South Yarra, VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker17, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow17.open(window.map, marker17);
    window.previousInfoWindow = infoWindow17;

    });


   //  // Green Park Dining

     LongLat = new google.maps.LatLng(-37.780111, 144.977775);
    var marker18 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'Green Park Dinging'
    }); 

    var infoWindow18 = new google.maps.InfoWindow({
      content: '<h5>Green Park Dining</h5><br/><p>Address:</p><p>815 Nicholson Street,</p><p>Carlton North, VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker18, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow18.open(window.map, marker18);
    window.previousInfoWindow = infoWindow18;

    });


    //  // Stagger Lees

     LongLat = new google.maps.LatLng(-37.798983, 144.978764);
    var marker19 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'stagger lees'
    }); 

    var infoWindow19 = new google.maps.InfoWindow({
      content: '<h5>Stagger Lees</h5><br/><p>Address:</p><p>276 Brunswick Street,</p><p>Fitzroy, VIC</p><p>4/5</p>' 
    });

    google.maps.event.addListener(marker19, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow19.open(window.map, marker19);
    window.previousInfoWindow = infoWindow19;

    });


    //  // Magic Mountain

     LongLat = new google.maps.LatLng(-37.812810, 144.971442);
    var marker20 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'Magic Mountain'
    }); 

    var infoWindow20 = new google.maps.InfoWindow({
      content: '<h5>Magic Mountain</h5><br/><p>Address:</p><p>62 Little Collins Street,</p><p>Melbourne, VIC</p><p>5/5</p>' 
    });

    google.maps.event.addListener(marker20, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow20.open(window.map, marker20);
    window.previousInfoWindow = infoWindow20;

    });


        //  // Slowpoke

     LongLat = new google.maps.LatLng(-37.802795, 144.977416);
    var marker21 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'Slowpoke Espresso'
    }); 

    var infoWindow21 = new google.maps.InfoWindow({
      content: '<h5>Slowpoke Espresso</h5><br/><p>Address:</p><p>157 Brunswick St,</p><p>Fitzroy, VIC</p><p>4/5</p>' 
    });

    google.maps.event.addListener(marker21, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow21.open(window.map, marker21);
    window.previousInfoWindow = infoWindow21;

    });

        //  // Georges

     LongLat = new google.maps.LatLng(-37.798557, 144.97894);
    var marker22 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'Georges Bar'
    }); 

    var infoWindow22 = new google.maps.InfoWindow({
      content: '<h5>Georges Bar</h5><p>Address:</p><p>120 Johnson St,</p><p>Fitzroy, VIC</p><p>4.5/5</p>' 
    });

    google.maps.event.addListener(marker22, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow22.open(window.map, marker22);
    window.previousInfoWindow = infoWindow22;

    });

            //  // Young Bloods

     LongLat = new google.maps.LatLng(-37.795919, 144.977457);
    var marker23 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'Young Bloods Diner'
    }); 

    var infoWindow23 = new google.maps.InfoWindow({
      content: '<h5>Young Bloods Diner</h5><p>Address:</p><p>60 Rose St,</p><p>Fitzroy, VIC</p><p>3.5/5</p>' 
    });

    google.maps.event.addListener(marker23, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow23.open(window.map, marker23);
    window.previousInfoWindow = infoWindow23;

    });

                //  // Auction Rooms

     LongLat = new google.maps.LatLng(-37.802490, 144.94944);
    var marker24 = new google.maps.Marker({
      position: LongLat,
      map: window.map,
      icon: 'images/pinred.png', 
      title: 'Auction Rooms'
    }); 

    var infoWindow24 = new google.maps.InfoWindow({
      content: '<h5>Auction Rooms</h5><p>Address:</p><p>103 Eroll St,</p><p>North Melbourne, VIC</p><p>4/5</p>' 
    });

    google.maps.event.addListener(marker24, 'click', function (event) {
      if (window.previousInfoWindow) {
      window.previousInfoWindow.close();
    };
    infoWindow24.open(window.map, marker24);
    window.previousInfoWindow = infoWindow24;

    });