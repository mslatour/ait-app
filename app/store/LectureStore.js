Ext.create('Ext.data.Store', {
  storeId: 'lectureStore',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slot',  type: 'int' },
    { name: 'time',  type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'speaker', type: 'app.model.Speaker'}
  ],
  grouper : {
    groupFn: function(record){
      return record.get('time');
    }
  },
  proxy: {
    type: "ajax",
    url: "static/content/lectures.json",
    reader: {
      type: "json",
      rootProperty: "lectures"
    }
  },
  autoLoad: true
});
