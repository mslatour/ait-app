/**********************************
 *          Lecture:              *
 * -------------------------------*
 * Model for lectures containing  *
 * information about the lecture  *
 * and a reference to the speaker *
 **********************************/
Ext.define('app.model.Event', {
	extend: 'Ext.data.Model',
	modelId: 'app.model.Event',
	
	/**********************************************
	 * Config:
	 * The config object specifies the data items
	 * of this model. This automatically enables
	 * the usage of getters and setters for each
	 * key. The values in the config object can 
	 * be set using this.initConfig({...}).
	 *********************************************/
	config: {
		title: null,		    // Title of the event (String)
		date: null,			    // Date of the event (String)
		description: null,	// Short description of the event (String)
    url: null,          // Url to information (String)
		host: null,         // Reference to the hosting company (Company)
	},

	/**********************************************
	 * Fields:
	 * The fields object specifies the data items
	 * that are used during syncing via the proxy.
	 *
	 * Fields are used by the Operation that
	 * creates instances of Lecture out of a JSON 
	 * object retrieved proxy request.	
	 *
	 * @see Ext.data.Model#fields
	 *********************************************/
	fields: [
		{ name: 'title', type: 'string' },
    { name: 'date',  type: 'string' },
		{ name: 'description', type: 'string' },
		{ name: 'url', type: 'string' },
		{ name: 'host', type: 'app.model.Company'}
	],

	/**********************************************
	 * function applyHost(host):
	 * Called just before setting the value for the 
	 * host entry. It converts the object
	 * containing host information, retrieved 
	 * from the proxy, to a Company object. 
	 
	 * It indirectly uses the initConfig function 
	 * of Company.
	 *
	 * @arg {Object} host Config for host
	 *********************************************/
	applyHost: function(host){
		return Ext.create('app.model.Company', host);
	},
		
	proxy: {
		type: "ajax",
		url: "static/content/events.json",
		reader: {
			type: "json",
			root: "events"
		}
	},

	/**********************************************
	 * function constructor(config):
	 * Called when creating a new instance of
	 * Lecture. It applies a given config object
	 * using the initConfig function. If none is 
	 * given it initialises config to {}
	 *
	 * @see Ext.data.Model#initConfig
	 *
	 * @arg {Object} config
	 *********************************************/
	constructor: function(config){
		config = config || {};
		this.initConfig(config);
		return this;
	}
});
