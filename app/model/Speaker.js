Ext.define('Speaker', {
	extend: 'Ext.data.Model',
	modelId: 'Speaker',

	/**********************************************
	 * Config:
	 * The config object specifies the data items
	 * of this model. This automatically enables
	 * the usage of getters and setters for each
	 * key. The values in the config object can 
	 * be set using this.initConfig({...}).
	 *********************************************/
	config: {
		firstname: null,	// First name of the speaker (String)
		surname: null,		// Surname of the speaker (String)
		affiliation: null,// Affiliation of the speaker (String)
		url: null,	      // URL of the website of the speaker (String)
		description: null	// Short description about the speaker (String)
	},

	/**********************************************
	 * function constructor(config):
	 * Called when creating a new instance of
	 * Speaker. It applies a given config object
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
