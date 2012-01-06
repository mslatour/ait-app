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
        COMP_SPONSORS_DETAILS_CONTENT.setData(
          record.items[0].data
        );
        COMP_TAB_SPONSORS.setActiveItem(1);
      },
      scope: COMP_SPONSORS_LIST
    }
  });

  COMP_SPONSORS_DETAILS_CONTENT = Ext.create('Ext.Panel', {
    flex: 3,
    tpl: TPL_SPONSOR_DETAILS
  });

  COMP_SPONSORS_DETAILS_CONTENT2 = Ext.create('Ext.Panel', {
    layout: "hbox",
    items: [
      {
        flex: 1,
        xtype: "list",
        itemTpl: "Item: {item}",
        data: [
          { item: "Info" },
          { item: "Events" },
          { item: "Vacancies" },
          { item: "Contact" }
        ]
      },
      COMP_SPONSORS_DETAILS_CONTENT
    ]
  });

  COMP_SPONSORS_DETAILS = Ext.create('Ext.Panel', {
    disabled: false,
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
      COMP_SPONSORS_DETAILS_CONTENT2
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
      //COMP_SPONSORS_DETAILS
      COMP_SPONSORS_DETAILS_CONTENT2
    ]
  });
}
