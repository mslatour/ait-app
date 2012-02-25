Ext.create('Ext.data.Store', {
  storeId: 'vacancyStore',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'company', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'email', type: 'string' },
    { name: 'url', type: 'string' }
  ],
  grouper: {
    groupFn: function(record){
      return record.get('date');
    }
  },
  proxy: {
    type: "ajax",
    url: "static/content/vacancies.json",
    reader: {
      type: "json",
      rootProperty: "vacancies"
    }
  },
  autoLoad: true
});
