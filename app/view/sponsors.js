function init_sponsor_components(){
  /*********************************
   * Components for the tab SPONSORS *
   *********************************/
  COMP_SPONSORS_LIST = Ext.create('Ext.List',{
    xtype: 'list',
    store: 'sponsorStore',
    itemTpl: '{name}',
    grouped: true,
    listeners: {
      select: function(){
        var record = this.getSelected();
        COMP_SPONSORS_DETAILS_CONTENT_INFO.setData(
          record.items[0].data
        );
        COMP_TAB_SPONSORS.setActiveItem(1);
      },
      scope: COMP_SPONSORS_LIST
    }
  });

  COMP_SPONSORS_DETAILS_CONTENT_HEADER = Ext.create('Ext.Panel', {
    html: "Header info"
  });
  
  COMP_SPONSORS_DETAILS_CONTENT_INFO = Ext.create('Ext.Panel', {
    tpl: TPL_SPONSOR_DETAILS
  });

  COMP_SPONSORS_DETAILS_CONTENT_EVENTS = Ext.create('Ext.List', {
    store: 'eventStore',
    itemTpl: '{name}'
  });

  COMP_SPONSORS_DETAILS_CONTENT_VACANCIES = Ext.create('Ext.Panel', {
    html: "No vacancies"
  });
          
  COMP_SPONSORS_DETAILS_CONTENT = Ext.create('Ext.Panel', {
    layout: "card",
    items: [
      COMP_SPONSORS_DETAILS_CONTENT_INFO,
      COMP_SPONSORS_DETAILS_CONTENT_EVENTS,
      COMP_SPONSORS_DETAILS_CONTENT_VACANCIES
    ]
  });

  COMP_SPONSORS_DETAILS = Ext.create('Ext.Panel', {
    layout: "vbox",
    items: [
      {
        docked : 'top',
        xtype: 'toolbar',
        title: 'Sponsor page',
        items: [
          {
            text: 'Back',
            handler: function(b,e){
              COMP_SPONSORS_LIST.deselect(
                COMP_SPONSORS_LIST.getLastSelected()
              );
              COMP_TAB_SPONSORS.getLayout().getAnimation().setReverse(
                true
              );
              COMP_TAB_SPONSORS.setActiveItem(0)
              COMP_TAB_SPONSORS.getLayout().getAnimation().setReverse(
                false
              );
            }
          }
        ]
      },
      COMP_SPONSORS_DETAILS_CONTENT_HEADER,
      {
        layout: "hbox",
        items: [
          {
            layout: "vbox",
            items: [
              {
                xtype: "button",
                text: "Info",
                handler: function(){
                  COMP_SPONSORS_DETAILS_CONTENT.setActiveItem(0);
                }
              },
              {
                xtype: "button",
                text: "Events",
                handler: function(){
                  COMP_SPONSORS_DETAILS_CONTENT.setActiveItem(1);
                }
              },
              {
                xtype: "button",
                text: "Vacancies",
                handler: function(){
                  COMP_SPONSORS_DETAILS_CONTENT.setActiveItem(2);
                }
              }
            ]
          },
          COMP_SPONSORS_DETAILS_CONTENT_CONTAINER
        ]
      }
    ]

  });

  COMP_TAB_SPONSORS = Ext.create('Ext.Panel', {
    title: 'Sponsors',
    iconCls: 'favorites',
    layout: {
      type: 'card',
      animation: {
          type: 'slide',
          direction: 'left'
      }
    },
    items: [
      COMP_SPONSORS_LIST,
      COMP_SPONSORS_DETAILS
    ]
  });
}
