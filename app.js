Ext.log = console.log;

Ext.application({
	name: 'AWESOMEIT2012',
	appFolder: 'app',
	models: ['app.model.Lecture','app.model.Speaker'],
	launch: function(){
		Ext.create('Ext.TabPanel', {
			fullscreen: true,
      indicator: false,
      tabBar:{
        docked:'bottom',
        scrollable:{
          direction: "horizontal"
        }
      },
			items: [
				{
					title: 'Schedule',
					iconCls: 'home',
					xtype: "list",
					store: 'lectureStore',
					itemTpl: 'Lecture: {title}'
				},
				{
					title: 'Contact',
					iconCls: 'home',
					html: 'Contact information'
				},
				{
					title: 'Events',
					iconCls: 'home',
					html: 'Upcoming Events'
				},
				{
					title: 'Sponsors',
					iconCls: 'home',
					html: 'Our sponsors'
				},
				{
					title: 'Vacancies',
          iconCls: 'home',
					html: 'Job and internship opportunities.'
				}
			]
		});
	}
});
