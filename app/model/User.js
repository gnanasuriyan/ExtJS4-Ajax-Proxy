/**
 * @author Gnanasuriyan
 */

Ext.define('MyApp.model.User',{
	extend : 'Ext.data.Model',
	
	fields : [{
		name : 'id', type : 'int'
	}, {
		name : 'userName', type : 'String'
	}, {
		name : 'email', type : 'String'
	}]
	
});
