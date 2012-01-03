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

  COMP_TAB_CONTACT = Ext.create('Ext.Panel',{
          title: 'Contact',
          iconCls: 'info',
          html: "<div class='host'>"+
                "<div class='description'>"+
                "AWESOME IT is organized by VIA, the student association"+
                " for computer science and AI related bachelor and master"+
                " students of the University of Amsterdam."+
                "</div>"+
                "<div class='members'>"+
                "<label>"+
                "This year, the organization of AWESOME IT is conducted by:"+
                "</label>"+
                "<ul>"+
                  "<li>Camiel Verschoor</li>"+
                  "<li>Judith Borghouts</li>"+
                  "<li>Micheal Cabot</li>"+
                  "<li>Merel de Groot</li>"+
                  "<li>Sander Nugteren</li>"+
                  "<li>Duncan ten Velthuis</li>"+
                  "<li>Tim Doolan</li>"+
                  "<li>Sander Latour</li>"+
                "</ul>"+
                "</div>"+
                "<div class='contact'>"+
                "<address>"+
                "<span class='name'>AWESOME IT</span>"+
                "<span class='email'>congres@svia.nl</span>"+
                "<label>Office:</label><br />"+
                "Kamer A0.10<br z>"+
                "Science Park 904<br />"+
                "1098 XH Amsterdam<br />"+
                "<label>Postal address</label><br />"+
                "\"Studievereniging VIA\"<br />"+
                "Postbus 94216<br />"+
                "1090 GE Amsterdam"+
                "</address>"+
                "</div>"+
                "</div>"
  });
}
