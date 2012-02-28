Ext.log = console.log;

var SPLASH;
Ext.application({
	name: 'AIT',
	appFolder: 'app',
	models: ['Lecture','Speaker', 'Event', 'Company', 'Vacancy'],
  phoneStartupScreen: "splash-phone.png ",
	launch: function(){ 
    SPLASH = Ext.create('Ext.Panel', {
      floating: true,
      model: true,
      width: "100%",
      height: "100%",
      border: 0,
      centered: true,
      items: [
        {
          centered: true,
          height: 200,
          width: 250,
          html: "<img src='splash-phone.png' style='max-height: 70%; max-width: 70%;' />"
        }
      ]
    });
    SPLASH.show('pop');
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
    COMP_MAIN_MENU.body.on(
      'tap', 
      function(e, t) {
        document.location.href = t.href;
      }, 
      null, 
      {
        delegate: 'a'
      }
    );
    setTimeout("SPLASH.hide()", 1000);
	}
});
