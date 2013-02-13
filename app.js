/**
 * @author Gnanasuriyan
 */

Ext.Loader.setConfig({
	enabled : true
});

Ext.application({
	name : 'MyApp',
	appFolder : 'app',
	controllers : ['UserList'],
	launch : function() {
		Ext.create('MyApp.view.UserList',{
			renderTo : Ext.getBody()
		});
	}
});
