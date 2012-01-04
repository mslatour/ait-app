Ext.create('Ext.data.Store', {
  storeId: 'sponsorStore',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'group', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'url', type: 'string' },
    { name: 'email', type: 'string' }
  ],
  getGroupString: function(record){
    return record.get('group');
  },
  proxy: {
    type: "ajax",
    url: "static/content/sponsors.json",
    reader: {
      type: "json",
      root: "sponsors"
    }
  },
  autoLoad: true
});
