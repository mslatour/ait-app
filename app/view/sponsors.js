function init_sponsor_components(){
  /*********************************
   * Components for the tab SPONSORS *
   *********************************/
  COMP_SPONSORS_LIST = Ext.create('Ext.List',{
    xtype: 'list',
    store: 'sponsorStore',
    itemTpl: TPL_SPONSOR_LIST,
    grouped: true,
    listeners: {
      select: function(){
        var record = this.selected
        COMP_SPONSORS_DETAILS_INFO_CONTENT.setData(
          record.items[0].data
        );
        COMP_TAB_SPONSORS.setActiveItem(1);
      },
      scope: COMP_SPONSORS_LIST
    }
  });

  COMP_SPONSORS_DETAILS_MENU = {
    layout: "vbox",
    xtype: 'toolbar',
    width: "3.5em",
    docked: "left",
    items: [
      {
        text: 'Back',
        margin: "5px 0px 20px 0px",
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
      },
      {
        xtype: "button",
        iconCls: 'info',
        margin: "5px 0px",
        iconMask: true,
        handler: function(){
          COMP_SPONSORS_DETAILS.setActiveItem(0);
        }
      },
      {
        xtype: "button",
        margin: "5px 0px",
        iconCls: "bookmarks",
        iconMask: true,
        handler: function(){
          COMP_SPONSORS_DETAILS.setActiveItem(1);
        }
      },
      {
        xtype: "button",
        margin: "5px 0px",
        iconCls: "team",
        iconMask: true,
        handler: function(){
          COMP_SPONSORS_DETAILS.setActiveItem(2);
        }
      }
    ]
  };

  COMP_SPONSORS_DETAILS_INFO_CONTENT = Ext.create('Ext.Panel', {
    scrollable: {
        direction: "vertical"
    },
    tpl: TPL_SPONSOR_DETAILS
  });
  
  COMP_SPONSORS_DETAILS_EVENTS_CONTENT = Ext.create('Ext.List', {
    store: 'eventStore',
    flex: 1,
    itemTpl: '{title}',
    grouped: true,
    listeners: {
      select: function(){
        var record = this.getSelected();
        COMP_EVENTS_DETAILS_CONTENT.setData(
          record.items[0].data
        );
        COMP_TAB_EVENTS.setActiveItem(1)
      },
      scope: COMP_EVENTS_LIST
    }
  });
  
  COMP_SPONSORS_DETAILS_VACANCIES_CONTENT = Ext.create('Ext.Panel', {
    scrollable: {
        direction: "vertical"
    },
    html: "No vacancies"
  });
  
  COMP_SPONSORS_DETAILS = Ext.create('Ext.Panel', {
    hidden: true,
    layout: "card",
    items: [
      COMP_SPONSORS_DETAILS_MENU,
      COMP_SPONSORS_DETAILS_INFO_CONTENT,
      COMP_SPONSORS_DETAILS_EVENTS_CONTENT,
      COMP_SPONSORS_DETAILS_VACANCIES_CONTENT
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
