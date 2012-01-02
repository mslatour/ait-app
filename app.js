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
        {
          title: 'Contact',
          iconCls: 'info',
          html: 'Contact information'
        },
        COMP_TAB_EVENTS,
        {
          title: 'Sponsors',
          iconCls: 'favorites',
          html: 'Our sponsors'
        },
        {
          title: 'Vacancies',
          iconCls: 'team',
          html: 'Job and internship opportunities.'
        }
      ]
    });
	}
});
