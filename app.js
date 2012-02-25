Ext.log = console.log;

var SPLASH;
Ext.application({
	name: 'AIT',
	appFolder: 'app',
	models: ['Lecture','Speaker', 'Event', 'Company'],
  phoneStartupScreen: "splash-phone.png ",
	launch: function(){ 
    init_components();
  
    SPLASH = Ext.create('Ext.Panel', {
      floating: true,
      model: true,
      width: "80%",
      height: "80%",
      centered: true,
      html: "<img src='splash-phone.png' style='max-width: 100%'"
    });
    SPLASH.show('pop');
    
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
        {
          title: 'Vacancies',
          iconCls: 'team',
          html: 'Job and internship opportunities.'
        }
      ]
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
	}
});
