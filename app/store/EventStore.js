Ext.create('Ext.data.Store', {
  storeId: 'eventStore',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'date',  type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'url', type: 'string' },
    { name: 'host', type: 'app.model.Company'}
  ],
  grouper: {
    groupFn: function(record){
      return record.get('date');
    }
  },
  proxy: {
    type: "ajax",
    url: "static/content/events.json",
    reader: {
      type: "json",
      rootProperty: "events"
    }
  },
  autoLoad: true
});
