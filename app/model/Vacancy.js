/**********************************
 *          Lecture:              *
 * -------------------------------*
 * Model for lectures containing  *
 * information about the lecture  *
 * and a reference to the speaker *
 **********************************/
Ext.define('AIT.model.Vacancy', {
	extend: 'Ext.data.Model',
	
	/**********************************************
	 * Config:
	 * The config object specifies the data items
	 * of this model. This automatically enables
	 * the usage of getters and setters for each
	 * key. The values in the config object can 
	 * be set using this.initConfig({...}).
	 *********************************************/
	config: {
		title: null,		    // Title of the vacancy (String)
	  company: null,      // Reference to the company (String)
		description: null,	// Short description of the vacancy (String)
    url: null,          // Url to more information (String)
    email: null,        // Contact information (String)
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
      { name: 'company', type: 'string' },
      { name: 'description', type: 'string' },
      { name: 'email', type: 'string' },
      { name: 'url', type: 'string' }
    ],
    proxy: {
      type: "ajax",
      url: "static/content/vacancies.json",
      reader: {
        type: "json",
        rootProperty: "vacancies"
      }
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
