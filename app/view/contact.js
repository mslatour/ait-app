function init_contact_components(){
  /***********************************
   * Components for the tab Contact  *
   ***********************************/
  COMP_TAB_CONTACT = Ext.create('Ext.Panel',{
    title: 'Location',
    iconCls: 'info',
    scrollable: {
      direction: 'vertical'
    },
    html: "<div class='location-details'>"+ 
          "<label>Hotel Casa 400</label>"+
          "<address>"+
          "<ul>"+
          "<li>Eerste Ringdijkstraat 4</li>"+
          "<li>1097 BC Amsterdam</li>"+
          "<li>Nederland</li>"+
          "</ul>"+
          "</address>"+
          "<img src='map2.png' /><br />"+
          "<a href='http://maps.google.nl/maps?f=q&source=s_q&hl=nl&geocode=&q=Hotel+Casa+400,+Eerste+Ringdijkstraat,+Oost+en+Watergraafsmeer,+Amsterdam&aq=0&oq=Casa+4&sll=52.350533,4.9193&sspn=0.006449,0.01929&vpsrc=6&g=Eerste+Ringdijkstraat,+Frankendael,+Amsterdam&ie=UTF8&hq=Hotel+Casa+400,+Eerste+Ringdijkstraat,+Oost+en+Watergraafsmeer,+Amsterdam&t=m&ll=52.352853,4.918184&spn=0.025164,0.054932&z=14&iwloc=A&output=embed'>Click here to open in Google maps</a>"+
          /*"</div>"+
          "<div class='contact-details'>"+
          "<div class='host'>"+
          "<div class='members'>"+
          "<label>"+
          "This year, the organization of AWESOME IT is conducted by:"+
          "</label>"+
          "<ul>"+
            "<li>Camiel Verschoor</li>"+
            "<li>Judith Borghouts</li>"+
            "<li>Micheal Cabot</li>"+
            "<li>Merel de Groot</li>"+
            "<li>Sander Nugteren</li>"+
            "<li>Duncan ten Velthuis</li>"+
            "<li>Tim Doolan</li>"+
            "<li>Sander Latour</li>"+
          "</ul>"+
          "</div>"+
          "<div class='contact'>"+
          "<address>"+
          "<span class='name'>AWESOME IT</span><br />"+
          "<span class='email'>"+
          "<a href='mailto:congres@svia.nl'>"+
          "congres@svia.nl"+
          "</a>"+
          "</span><br />"+
          "<label>Office:</label><br />"+
          "Kamer A0.10<br />"+
          "Science Park 904<br />"+
          "1098 XH Amsterdam<br />"+
          "<label>Postal address</label><br />"+
          "\"Studievereniging VIA\"<br />"+
          "Postbus 94216<br />"+
          "1090 GE Amsterdam"+
          "</address>"+
          "</div>"+
          "<div class='description'>"+
          "AWESOME IT is organized by VIA, the student association"+
          " for computer science and AI related bachelor and master"+
          " students of the University of Amsterdam."+
          "</div>"+
          "</div>"+*/
          "</div>"
  });
}
