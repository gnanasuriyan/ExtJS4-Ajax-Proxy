/**
 * @author Gnanasuriyan
 */

Ext.define('MyApp.store.User',{
	extend : 'Ext.data.Store',
	storeId : 'users',
	//autoLoad : true,
	model : 'MyApp.model.User',
	proxy : {
		type : 'ajax',
		url : 'data/users.json',
		reader : {
			type : 'json',
			root : 'users',
			successProperty : 'success'
		}
	}
});
