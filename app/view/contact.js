function init_contact_components(){
  /***********************************
   * Components for the tab Contact  *
   ***********************************/
  COMP_TAB_CONTACT = Ext.create('Ext.Panel',{
    title: 'Contact',
    iconCls: 'info',
    scrollable: {
      direction: 'vertical'
    },
    html: "<div class='host'>"+
          /*"<div class='members'>"+
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
          "</div>"+*/
          "<div class='contact'>"+
          "<address>"+
          "<span class='name'>AWESOME IT</span><br />"+
          "<span class='email'>"+
          "<a href='mailto:congres@svia.nl'>"+
          "congres@svia.nl"+
          "</a>"+
          "</span><br />"+
          "<label>Office:</label><br />"+
          "Kamer A0.10<br z>"+
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
          "</div>"
  });
}
