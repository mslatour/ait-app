Ext.log = console.log;

var SPLASH;
Ext.application({
	name: 'AIT',
	appFolder: 'app',
	models: ['Lecture','Speaker', 'Event', 'Company', 'Vacancy'],
	launch: function(){ 
/*
    Ext.Viewport.add({
      xtype: "panel",
      items: [
        {
          centered: true,
          height: 200,
          width: 250,
          html: "<img src='splash-phone.png' style='max-height: 70%; max-width: 70%;' />"
        }
      ],
      listeners: {
        tap: this.hide(),
        scope: this
      },
      border: 0,
      width: "100%",
      height: "100%",
      model: true,
      centered: true
    });
*/
    SPLASH = Ext.create('Ext.Panel', {
      modal: true,
      hideOnMaskTap: true,
      centered: true,
      width: "50%",
      height: "50%",
      style: 'border: 0',
      items: [{
        xtype: 'img',
        src: 'http://dev.app.awesomeit.nl/splash-phone.png',
        centered: true,
        style: "background-position: center; background-size: contain;",
        border: 0,
        height: "100%",
        width: "100%",
        listeners: {
          tap: function(){ SPLASH.hide() }
        }
      }]
    });
    Ext.Viewport.add(SPLASH);
    init_components();
   
    // Create menu
    COMP_MAIN_MENU = Ext.create('Ext.TabPanel', {
      fullscreen: true,
      indicator: false,
      tabBar:{
        docked:'bottom',
        scrollable:{
          direction: "horizontal"
        }
      },
      items: [
        COMP_TAB_SCHEDULE,
        COMP_TAB_CONTACT,
        COMP_TAB_EVENTS,
        COMP_TAB_SPONSORS,
        COMP_TAB_VACANCIES
      ],
      listeners: {
        activeitemchange : function(t, value, old, options){
          if(value.title == "Vacancies"){
            COMP_SPONSORS_DETAILS_VACANCIES_CONTENT.getStore().clearFilter();
          }else if(value.title == "Events"){
            COMP_SPONSORS_DETAILS_EVENTS_CONTENT.getStore().clearFilter();
          }
        }
      }
    });
   
    // Fix: links were not clickable on mobile phones
/*    COMP_MAIN_MENU.body.on(
      'tap', 
      function(e, t) {
        document.location.href = t.href;
      }, 
      null, 
      {
        delegate: 'a'
      }
    );*/
//    setTimeout("SPLASH.hide()", 1000);
	}
});
