Ext.log = console.log;

Ext.application({
	name: 'AWESOMEIT2012',
	appFolder: 'app',
	models: ['app.model.Lecture','app.model.Speaker'],
	launch: function(){
		Ext.create('Ext.TabPanel', {
			fullscreen: true,
			items: [
				{
					title: 'Schedule',
					iconcls: 'home',
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
					iconcls: 'home',
					html: 'Upcoming Events'
				},
				{
					title: 'Sponsors',
					iconcls: 'home',
					html: 'Our sponsors'
				},
				{
					title: 'Vacancies',
					iconcls: 'home',
					html: 'Job and internship opportunities.'
				}
			]
		});
	}
});
