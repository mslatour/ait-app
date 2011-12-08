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
					iconCls: 'time',
					xtype: "list",
					store: 'lectureStore',
					itemTpl: '{title}',
          grouped: true,
          listeners: {
            select: function(){
              alert("Select!");
            }
          }
				},
				{
					title: 'Contact',
					iconCls: 'info',
					html: 'Contact information'
				},
				{
					title: 'Events',
					iconCls: 'bookmarks',
					html: 'Upcoming Events'
				},
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
