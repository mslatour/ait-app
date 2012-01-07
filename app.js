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
          layout: 'card',
          title: 'Vacancies',
          iconCls: 'team',
          items: [
            {
              html: 'Job and internship opportunities.'
            },
            {
              layout: 'hbox',
              items: [
                {
                  flex: 1,
                  xtype: 'list',
                  store: 'lectureStore',
                  itemTpl: '{title}'
                },
                {
                  flex: 4,
                  html: 'Sub 1'
                }
              ]
            }
          ]
        }
      ]
    });

    COMP_MAIN_MENU.items[0].getLayout().setActiveItem(1);

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
