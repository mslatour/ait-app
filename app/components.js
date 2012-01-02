var COMP_MAIN_MENU, COMP_TAB_SCHEDULE, COMP_SCHEDULE_LIST, 
    COMP_SCHEDULE_DETAILS, COMP_SCHEDULE_DETAILS_CONTENT;

function init_components(){
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
    tpl: '<div class="details">' +
           '<span class="title">{title}</span>' +
           '<span class="time">{time}</span>' +
           '<div class="description">{description}</div>'+
           '<div class="speaker">' +
             '<span class="name">' +
               '{speaker.firstname} {speaker.surname}' + 
             '</span>' +
             '<span class="affiliation">' + 
               '{speaker.affiliation}' + 
             '</span>' +
             '<div class="description">' +
               '{speaker.description}' + 
             '</div>' +
           '</div>' +
        '</div>'
  });

  COMP_SCHEDULE_DETAILS = Ext.create('Ext.Panel', {
    disabled: true,
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

  COMP_TAB_SCHEDULE = Ext.create('Ext.Panel', {
    title: 'Schedule',
    iconCls: 'time',
    layout: {
      type: 'card',
      animation: {
          type: 'slide',
          direction: 'left'
      }
    },
    items: [
      COMP_SCHEDULE_LIST,
      COMP_SCHEDULE_DETAILS
    ]
  });
}
