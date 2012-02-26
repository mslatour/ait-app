function init_vacancies_components(){
  /*********************************
   * Components for the tab VACANCIES *
   *********************************/
  COMP_VACANCIES_LIST = Ext.create('Ext.List',{
    xtype: 'list',
    store: 'vacancyStore',
    itemTpl: '{title}',
    listeners: {
      select: function(){
        var record = this.selected
        COMP_VACANCIES_DETAILS_CONTENT.setData(
          record.items[0].data
        );
        COMP_TAB_VACANCIES.setActiveItem(1)
      },
      scope: COMP_VACANCIES_LIST
    }
  });

  COMP_VACANCIES_DETAILS_CONTENT = Ext.create('Ext.Panel', {
    tpl: TPL_VACANCIES_DETAILS
  });

  COMP_VACANCIES_DETAILS = Ext.create('Ext.Panel', {
    disabled: true,
    scrollable: {
      direction: 'vertical'
    },
    items: [
      {
        docked : 'top',
        xtype: 'toolbar',
        title: 'Vacancy details',
        items: [
          {
            text: 'Back',
            handler: function(b,e){
              COMP_VACANCIES_LIST.deselect(
                COMP_VACANCIES_LIST.getLastSelected()
              );
              COMP_TAB_VACANCIES.getLayout().getAnimation().setReverse(
                true
              );
              COMP_TAB_VACANCIES.setActiveItem(0)
              COMP_TAB_VACANCIES.getLayout().getAnimation().setReverse(
                false
              );
            }
          }
        ]
      },
      COMP_VACANCIES_DETAILS_CONTENT
    ]
  });

  COMP_TAB_VACANCIES = Ext.create('Ext.Panel', {
    title: 'Vacancies',
    iconCls: 'team',
    layout: {
      type: 'card',
      animation: {
          type: 'slide',
          direction: 'left'
      }
    },
    items: [
      COMP_VACANCIES_LIST,
      COMP_VACANCIES_DETAILS
    ]
  });
}
