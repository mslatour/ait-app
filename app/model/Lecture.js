/**********************************
 *          Lecture:              *
 * -------------------------------*
 * Model for lectures containing  *
 * information about the lecture  *
 * and a reference to the speaker *
 **********************************/
Ext.define('AIT.model.Lecture', {
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
		title: null,		// Title of the lecture (String)
		slot: null,			// Slot number (0-7)
		time: null,			// Time slot
		description: null,	// Short description of the lecture (String)
		speaker: null,	// Reference to the speaker (Speaker)
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
    { name: 'slot',  type: 'int' },
    { name: 'time',  type: 'string' },
		{ name: 'description', type: 'string' },
		{ name: 'speaker', type: 'AIT.model.Speaker'}
	],

	/**********************************************
	 * function applySpeaker(speaker):
	 * Called just before setting the value for the 
	 * speaker entry. It converts the object
	 * containing speaker information, retrieved 
	 * from the proxy, to a Speaker object. 
	 
	 * It indirectly uses the initConfig function 
	 * of Speaker.
	 *
	 * @arg {Object} speaker Config for speaker
	 *********************************************/
	applySpeaker: function(speaker){
		return Ext.create('AIT.model.Speaker', speaker);
	},
		
	proxy: {
		type: "ajax",
		url: "static/content/lectures.json",
		reader: {
			type: "json",
			root: "lectures"
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
