Ext.log = console.log;

Ext.application({
	name: 'AWESOMEIT2012',
	appFolder: 'app',
	models: ['app.model.Lecture','app.model.Speaker'],
	launch: function(){ 
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
