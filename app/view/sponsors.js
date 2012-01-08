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
        COMP_SPONSORS_DETAILS_INFO_CONTENT.setData(
          record.items[0].data
        );
        COMP_TAB_SPONSORS.setActiveItem(1);
      },
      scope: COMP_SPONSORS_LIST
    }
  });

  COMP_SPONSORS_DETAILS_MENU = Ext.create('Ext.Panel', {
    layout: "vbox",
    items: [
      {
        xtype: "button",
        text: "Info",
        handler: function(){
          COMP_SPONSORS_DETAILS.setActiveItem(0);
        }
      },
      {
        xtype: "button",
        text: "Events",
        handler: function(){
          COMP_SPONSORS_DETAILS.setActiveItem(1);
        }
      },
      {
        xtype: "button",
        text: "Vacancies",
        handler: function(){
          COMP_SPONSORS_DETAILS.setActiveItem(2);
        }
      }
    ]
  });

  COMP_SPONSORS_DETAILS_HEADER = Ext.create('Ext.Panel', {
    html: "Header info"
  });
  
  COMP_SPONSORS_DETAILS_INFO_CONTENT = Ext.create('Ext.Panel', {
    tpl: TPL_SPONSOR_DETAILS
  });

  COMP_SPONSORS_DETAILS_INFO = Ext.create('Ext.Panel', {
    layout: "vbox",
    items: [
      COMP_SPONSORS_DETAILS_HEADER,
      {
        layout: "hbox",
        items: [
          COMP_SPONSORS_DETAILS_MENU,
          COMP_SPONSORS_DETAILS_INFO_CONTENT
        ]
      }
    ]
  });
  
  COMP_SPONSORS_DETAILS_EVENTS_CONTENT = Ext.create('Ext.List', {
    store: 'eventStore',
    itemTpl: '{name}'
  });
  
  COMP_SPONSORS_DETAILS_EVENTS = Ext.create('Ext.Panel', {
    layout: "vbox",
    items: [
      COMP_SPONSORS_DETAILS_HEADER,
      {
        layout: "hbox",
        items: [
          COMP_SPONSORS_DETAILS_MENU,
          COMP_SPONSORS_DETAILS_EVENTS_CONTENT
        ]
      }
    ]
  });

  COMP_SPONSORS_DETAILS_VACANCIES_CONTENT = Ext.create('Ext.Panel', {
    html: "No vacancies"
  });
  
  COMP_SPONSORS_DETAILS_VACANCIES = Ext.create('Ext.Panel', {
    layout: "vbox",
    items: [
      COMP_SPONSORS_DETAILS_HEADER,
      {
        layout: "hbox",
        items: [
          COMP_SPONSORS_DETAILS_MENU,
          COMP_SPONSORS_DETAILS_VACANCIES_CONTENT
        ]
      }
    ]
  });
          
  COMP_SPONSORS_DETAILS = Ext.create('Ext.Panel', {
    layout: "card",
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
      COMP_SPONSORS_DETAILS_INFO,
      COMP_SPONSORS_DETAILS_EVENTS,
      COMP_SPONSORS_DETAILS_VACANCIES
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
