var COMP_MAIN_MENU, COMP_TAB_SCHEDULE, COMP_SCHEDULE_LIST, 
    COMP_SCHEDULE_DETAILS, COMP_SCHEDULE_DETAILS_CONTENT,
    COMP_EVENTS_LIST, COMP_EVENTS_DETAILS, COMP_EVENTS_DETAILS_CONTENT; 

function init_components(){
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
    tpl: '<div class="lecture-details">' +
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
        var record = this.getSelected();
        COMP_EVENTS_DETAILS_CONTENT.setData(
          record.items[0].data
        );
        COMP_TAB_EVENTS.setActiveItem(1)
      },
      scope: COMP_EVENTS_LIST
    }
  });

  COMP_EVENTS_DETAILS_CONTENT = Ext.create('Ext.Panel', {
    tpl: '<div class="event-details">' +
           '<span class="title">{title}</span>' +
           '<span class="date">{time}</span>' +
           '<div class="description">{description}</div>'+
           '<div class="url">{description}</div>'+
           '<div class="host">' +
             '<span class="name">' +
               '{host.name}' + 
             '</span>' +
             '<span class="url">' + 
               '{host.url}' + 
             '</span>' +
             '<span class="email">' + 
               '{host.email}' + 
             '</span>' +
             '<div class="description">' +
               '{host.description}' + 
             '</div>' +
           '</div>' +
        '</div>'
  });

  COMP_EVENTS_DETAILS = Ext.create('Ext.Panel', {
    disabled: true,
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
