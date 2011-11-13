Ext.define('Lecture', {
	config: {
		title: null,
		abstract: null,
		full_text: null,
		speaker: null
	}

	constructor: function(config){
		config.speaker = Ext.create('Speaker', config.speaker);
		this.initConfig(config)
	}

});
