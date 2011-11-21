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
					title: 'Home',
					iconCls: 'home',
					html: 'Welcome'
				},
				{
					title: 'home2',
					iconcls: 'home',
					html: 'Welcome2'
				},
				{
					title: 'List',
					iconcls: 'home',
					xtype: "list",
					store: 'lectureStore',
	/*				store: {
					fields: ['firstname','surname'],
						data: [
							{ firstname: "John", surname: "Smith"},
							{ firstname: "Mary", surname: "Wistletoe"},
							{ firstname: "Sam", surname: "Cook"},
							{ firstname: "Paul", surname: "Mayer"}
						]
					},*/
					itemTpl: 'Lecture: {title}'
				}
			]
/*			items: [
				{
					xtype: "list",
					store: {
					fields: ['firstname'],
						data: [
							{ firstname: "John"},
							{ firstname: "Mary"},
							{ firstname: "Sam"},
							{ firstname: "Paul"}
						]
					},
					itemTpl: 'Name: {name}'
				}
			]
		*/
		});
	}
});
