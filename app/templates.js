var TPL_SCHEDULE_DETAILS = new Ext.XTemplate(
  '<div class="lecture-details">',
  '<span class="title">{title}</span>',
  '<span class="time">{time}</span>',
  '<div class="description">{description}</div>',
    '<div class="speaker">',
      '<span class="name">',
        '{speaker.firstname} {speaker.surname}', 
      '</span>',
      '<span class="affiliation">', 
        '{speaker.affiliation}', 
      '</span>',
      '<div class="description">',
        '{speaker.description}', 
      '</div>',
    '</div>',
  '</div>',
  {
    notEmpty: function(string){
      return string != undefined && string != "";
    }
  }
);
