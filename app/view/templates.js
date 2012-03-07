var TPL_SCHEDULE_DETAILS, TPL_EVENTS_DETAILS, TPL_SPONSOR_LIST, TPL_SPONSOR_DETAILS, TPL_VACANCIES_DETAILS;
Ext.require("Ext.XTemplate", function(){
  TPL_SCHEDULE_DETAILS = new Ext.XTemplate(
    '<div class="lecture-details">',
      '<tpl if="speaker">',
      '<div class="speaker">',
        '<span class="name">',
          '{speaker.firstname} {speaker.surname}', 
        '</span>',

        '<span class="affiliation">', 
          '{speaker.affiliation}', 
        '</span>',
        '<span class="url">',
          '<a href="{speaker.url}">{speaker.url}</a>',
        '</span>',
        '<div class="description">',
          '{speaker.description}', 
        '</div>',
      '</div>',
    '</tpl>',
    '<span class="title">{title}</span>',
    '<span class="time">{time}</span>',
    '<div class="description">{description}</div>',
    '</div>',
    {}
  );
  
  TPL_VACANCIES_DETAILS = new Ext.XTemplate(
    '<div class="vacancy-details">',
       '<span class="title">{title}</span>',
       '<div class="email">Contact: <a href="mailto:{email}">{email}</a></div>',
       '<div class="description">{description}</div>',
       '<div class="url"><a href="{url}">Click here for more information</a></div>',
       '<hr />',
       '<div class="employer">',
         '<span class="name">',
           '{employer.name}', 
         '</span>',
         '<span class="url">', 
           'WWW: <a href="{employer.url}">{employer.url}</a>', 
         '</span>',
         '<span class="email">', 
           'Email: <a href="mailto:{employer.email}">{employer.email}</a>', 
         '</span>',
         '<div class="description">',
           '{employer.description}', 
         '</div>',
       '</div>',
    '</div>'
  );

  TPL_EVENTS_DETAILS = new Ext.XTemplate(
    '<div class="event-details">',
       '<span class="title">{title}</span>',
       '<span class="date">{date}</span>',
       '<div class="description">{description}</div>',
       '<div class="url"><a href="{url}">{url}</a></div>',
       '<hr />',
       '<div class="host">',
         '<span class="name">',
           '{host.name}', 
         '</span>',
         '<span class="url">', 
           'WWW: <a href="{host.url}">{host.url}</a>', 
         '</span>',
         '<span class="email">', 
           'Email: <a href="mailto:{host.email}">{host.email}</a>', 
         '</span>',
         '<div class="description">',
           '{host.description}', 
         '</div>',
       '</div>',
    '</div>'
  );
  
  TPL_SPONSOR_LIST = new Ext.XTemplate(
    '<tpl switch="group">',
      '<tpl case="Premium Sponsors">',
        '<img height="62" src="{logo}" />',
      '<tpl default>',
        '{name}',
    '</tpl>'
  );

  TPL_SPONSOR_DETAILS = new Ext.XTemplate(
    '<div class="sponsor-details">',
       '<img src="{logo}" />',
       '<span class="name">{name}</span>',
       '<span class="url">WWW: <a href="{url}">{url}</a></span>',
       '<tpl if="email">',
       '<span class="email">Email: ', 
         '<a href="mailto:{email}">{email}</a>', 
       '</span>',
       '</tpl>',
       '<div class="description">{description}</div>',
    '</div>'
  );
});
