/*
var ControllerFactoryPool = new WebDesktop.core.ControllerFactoryPool('NET');

Ext.override(WebDesktop.core.modules.ExtJSModule, {
	prepareForDecode: function(response) {
        // For .net application server
        var dateRegEx = new RegExp('(^|[^\\\\])\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})?\\)\\\\/\\"', 'g');
        if (response.responseText)
            response.responseText = response.responseText.replace(dateRegEx, "$1new Date($2)");
	}
});

Ext.override(WebDesktop.core.modules.GINAModule.UserProxy, {
	initialize: function(config) {
		//this.avatar = "JavaScripts/WebDesktop/deploy/resources/images/default/startmenu/default-user-icon.png";
        this.name = config.name;
		this.canChangePassword = config.canChangePassword;
		this.creationDate = config.creationDate;
		this.description = config.description;
		this.email = config.email;
		this.id = config.id;
		this.isApproved = config.isApproved;
		this.isLockedOut = config.isLockedOut;
		this.isOnline = config.isOnline;
		this.lastActivityDate = config.lastActivityDate;
		this.lastLockoutDate = config.lastLockoutDate;
		this.lastLoginDate = config.latLoginDate;
		this.lastPasswordChangeDate = config.lastPasswordChangeDate;
        this.fullName = '';
        if (config.lastName)
            this.fullName = config.lastName + ' ';
        if (config.lastName)
            this.fullName = config.firstName + ' ';
        if (config.middleName)
            this.fullName = config.middleName;

        if (this.fullName == '')
            this.fullName = config.name;

        this.avatar = 'JavaScripts/WebDesktop/deploy/resources/images/default/startmenu/default-user-icon.png';
	}
});*/
