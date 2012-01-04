var TPL_SCHEDULE_DETAILS = new Ext.XTemplate(
  '<div class="lecture-details">',
    '<div class="speaker">',
      '<span class="name">',
        '{speaker.firstname} {speaker.surname}', 
      '</span>',
      '<span class="affiliation">', 
        '{speaker.affiliation}', 
      '</span>',
      '<span class="url">',
        '{speaker.url}',
      '</span>',
      '<div class="description">',
        '{speaker.description}', 
      '</div>',
    '</div>',
  '<span class="title">{title}</span>',
  '<span class="time">{time}</span>',
  '<div class="description">{description}</div>',
  '</div>',
  {}
);

var TPL_EVENTS_DETAILS = new Ext.XTemplate(
  '<div class="event-details">',
     '<span class="title">{title}</span>',
     '<span class="date">{date}</span>',
     '<div class="description">{description}</div>',
     '<div class="url"><a href="{url}">{url}</a></div>',
     '<div class="host">',
       '<span class="name">',
         '{host.name}', 
       '</span>',
       '<span class="url">', 
         '<a href="{host.url}">{host.url}</a>', 
       '</span>',
       '<span class="email">', 
         '<a href="mailto:{host.email}">{host.email}</a>', 
       '</span>',
       '<div class="description">',
         '{host.description}', 
       '</div>',
     '</div>',
  '</div>'
);

var TPL_SPONSOR_DETAILS = new Ext.XTemplate(
  '<div class="sponsor-details">',
     '<span class="name">{name}</span>',
     '<div class="description">{description}</div>',
     '<span class="url"><a href="{url}">{url}</a></span>',
     '<span class="email">', 
       '<a href="mailto:{email}">{email}</a>', 
     '</span>',
  '</div>'
);
