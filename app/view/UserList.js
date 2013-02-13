/**
 * @author Gnanasuriyan
 */

Ext.define('MyApp.view.UserList',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.userlist',
	title : 'Users Information',
	width : 400,
	height : 300,
	items : [{
		xtype : 'gridpanel',
		store : 'User',
		columns : [{
			text : 'User Identity', dataIndex : 'id', flex : 1
		}, {
			text : 'User Name', dataIndex : 'userName' , flex : 1
		}, {
			text : 'Email', dataIndex : 'email', flex : 1
		}]
	}]
});