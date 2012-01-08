var COMP_MAIN_MENU, 
    COMP_TAB_SCHEDULE, COMP_TAB_CONTACT, COMP_TAB_EVENTS, COMP_TAB_SPONSORS,
    COMP_SCHEDULE_LIST, COMP_SCHEDULE_DETAILS, COMP_SCHEDULE_DETAILS_CONTENT,
    COMP_EVENTS_LIST, COMP_EVENTS_DETAILS, COMP_EVENTS_DETAILS_CONTENT,
    COMP_SPONSORS_LIST, COMP_SPONSORS_DETAILS, COMP_SPONSORS_DETAILS_CONTENT;
//debug
var COMP_SPONSOR_DETAILS_CONTAINER;

function init_components(){
  init_schedule_components();
  init_contact_components();
  init_events_components();
  init_sponsor_components();
}
