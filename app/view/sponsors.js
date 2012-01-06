function init_sponsor_components(){
  /*********************************
   * Components for the tab SPONSORS *
   *********************************/
  COMP_SPONSORS_LIST = Ext.create('Ext.List',{
    xtype: 'list',
    layout: 'fit',
    store: 'sponsorStore',
    itemTpl: '{name}',
    grouped: true,
    listeners: {
      select: function(){
        var record = this.getSelected();
        COMP_SPONSORS_DETAILS_CONTENT.setData(
          record.items[0].data
        );
        COMP_TAB_SPONSORS.setActiveItem(1);
        COMP_SPONSORS_DETAILS_CONTENT2.hide();
        COMP_SPONSORS_DETAILS_CONTENT2.disable();
        COMP_SPONSORS_DETAILS_CONTENT2.enable();
        COMP_SPONSORS_DETAILS_CONTENT2.show();
      },
      scope: COMP_SPONSORS_LIST
    }
  });

  COMP_SPONSORS_DETAILS_CONTENT = Ext.create('Ext.Panel', {
    tpl: TPL_SPONSOR_DETAILS
  });

  var COMP_SPONSORS_DETAILS_CONTENT2 = Ext.create('Ext.TabPanel', {
    tabBarPosition: 'top',
    items: [
      {
        title: 'Slot1',
        html: 'Sponsor details'
      },
      {
        title: 'Slot2',
        html: 'Sponsor details 2'
      }
    ]
  });

  COMP_SPONSORS_DETAILS = Ext.create('Ext.Panel', {
    disabled: true,
    scrollable: {
      direction: 'vertical'
    },
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
      COMP_SPONSORS_DETAILS_CONTENT2,
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
