Package.describe({
	name: "jmoseley:meteor-user-session",
	summary: "Provides a UserSession object that works just like Session does, but on both the client and server.",
	version: "0.2.1"
});

var both = ['client', 'server']

Package.on_use(function (api) {
	api.use('underscore@1.0.1', both);
	api.use('deps@1.0.5', both);
	api.use('session@1.0.4', both);
	api.use('livedata@1.0.11', both);
	api.use('mongo-livedata@1.0.6', both);

	api.add_files('common.js', both);
	api.add_files('server.js', 'server');
	api.add_files('client.js', 'client');

	if (typeof api.export !== 'undefined') {
		api.export(['UserSession', 'UserSessionCollection'], both);
	}
});