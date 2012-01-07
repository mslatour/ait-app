Ext.log = console.log;

Ext.application({
	name: 'AWESOMEIT2012',
	appFolder: 'app',
	models: ['app.model.Lecture','app.model.Speaker'],
	launch: function(){ 
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
        {
          xtype: 'carousel',
          title: 'Vacancies',
          iconCls: 'team',
          items: [
            {
              html: 'Job and internship opportunities.'
            },
            {
              xtype: 'carousel',
              direction: 'vertical',
              items: [
                {
                  html: 'Sub 1'
                },
                {
                  xtype: 'list',
                  itemTpl: '{txt}',
                  data: [
                    { txt: 'text 1' },
                    { txt: 'text 2' },
                    { txt: 'text 3' }
                  ]
                }
              ]
            }
          ]
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
