Ext.create('Ext.data.Store', {
  storeId: 'lectureStore',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slot',  type: 'int' },
    { name: 'description', type: 'string' },
    { name: 'speaker', type: 'app.model.Speaker'}
  ],
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
