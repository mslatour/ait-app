Ext.create('Ext.data.Store', {
  storeId: 'lectureStore',
  model: 'Lecture',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slot',  type: 'int' },
    { name: 'time',  type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'url', type: 'string' },
    { name: 'speaker', type: 'app.model.Speaker'}
  ],
  getGroupString: function(record){
    return record.get('time');
  },
  proxy: {
    type: "ajax",
    url: "static/content/lectures.json",
    reader: {
      type: "json",
      root: "lectures"
    }
  },
  autoLoad: true
});
