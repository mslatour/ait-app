function init_events_components(){
  /*********************************
   * Components for the tab Events *
   *********************************/
  COMP_EVENTS_LIST = Ext.create('Ext.List',{
    xtype: 'list',
    store: 'eventStore',
    itemTpl: '{title}',
    grouped: true,
    listeners: {
      select: function(){
        var record = this.selected
        COMP_EVENTS_DETAILS_CONTENT.setData(
          record.items[0].data
        );
        COMP_TAB_EVENTS.setActiveItem(1)
      },
      scope: COMP_EVENTS_LIST
    }
  });

  COMP_EVENTS_DETAILS_CONTENT = Ext.create('Ext.Panel', {
    tpl: TPL_EVENTS_DETAILS
  });

  COMP_EVENTS_DETAILS = Ext.create('Ext.Panel', {
    disabled: true,
    scrollable: {
      direction: 'vertical'
    },
    items: [
      {
        docked : 'top',
        xtype: 'toolbar',
        title: 'Event details',
        items: [
          {
            text: 'Back',
            handler: function(b,e){
              COMP_EVENTS_LIST.deselect(
                COMP_EVENTS_LIST.getLastSelected()
              );
              COMP_TAB_EVENTS.getLayout().getAnimation().setReverse(
                true
              );
              COMP_TAB_EVENTS.setActiveItem(0)
              COMP_TAB_EVENTS.getLayout().getAnimation().setReverse(
                false
              );
            }
          }
        ]
      },
      COMP_EVENTS_DETAILS_CONTENT
    ]
  });

  COMP_TAB_EVENTS = Ext.create('Ext.Panel', {
    title: 'Events',
    iconCls: 'bookmarks',
    layout: {
      type: 'card',
      animation: {
          type: 'slide',
          direction: 'left'
      }
    },
    items: [
      COMP_EVENTS_LIST,
      COMP_EVENTS_DETAILS
    ]
  });
}
