/**
 * @author Gnanasuriyan
 */

Ext.define('MyApp.controller.UserList',{
	extend : 'Ext.app.Controller',
	models : ['User'],
	stores : ['User'],
	views : ['UserList'],
	
	init : function() {
		this.getStore('User').load();
		this.callParent();
	}
});
