function init_schedule_components(){
  /***********************************
   * Components for the tab Schedule *
   ***********************************/
  COMP_SCHEDULE_LIST = Ext.create('Ext.List',{
    xtype: 'list',
    store: 'lectureStore',
    itemTpl: '{title}',
    grouped: true,
    listeners: {
      select: function(){
        var record = this.getSelected();
        COMP_SCHEDULE_DETAILS_CONTENT.setData(
          record.items[0].data
        );
        COMP_TAB_SCHEDULE.setActiveItem(1)
      },
      scope: COMP_SCHEDULE_LIST
    }
  });

  COMP_SCHEDULE_DETAILS_CONTENT = Ext.create('Ext.Panel', {
    tpl: TPL_SCHEDULE_DETAILS
  });

  COMP_SCHEDULE_DETAILS = Ext.create('Ext.Panel', {
    disabled: true,
    scrollable: {
      direction: 'vertical'
    },
    items: [
      {
        docked : 'top',
        xtype: 'toolbar',
        title: 'Lecture details',
        items: [
          {
            text: 'Back',
            handler: function(b,e){
              COMP_SCHEDULE_LIST.deselect(
                COMP_SCHEDULE_LIST.getLastSelected()
              );
              COMP_TAB_SCHEDULE.getLayout().getAnimation().setReverse(
                true
              );
              COMP_TAB_SCHEDULE.setActiveItem(0)
              COMP_TAB_SCHEDULE.getLayout().getAnimation().setReverse(
                false
              );
            }
          }
        ]
      },
      COMP_SCHEDULE_DETAILS_CONTENT
    ]
  });
}
