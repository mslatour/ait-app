Ext.define('app.model.Company', {
	extend: 'Ext.data.Model',
	modelId: 'app.model.Company',

	/**********************************************
	 * Config:
	 * The config object specifies the data items
	 * of this model. This automatically enables
	 * the usage of getters and setters for each
	 * key. The values in the config object can 
	 * be set using this.initConfig({...}).
	 *********************************************/
	config: {
		name: null,	      // Name of the company (String)
		description: null,	// Short description about the company (String)
		url: null,		    // URL to the website of the company (String)
		email: null,	    // Email of the company (String)
	},

	/**********************************************
	 * function constructor(config):
	 * Called when creating a new instance of
	 * Company. It applies a given config object
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
