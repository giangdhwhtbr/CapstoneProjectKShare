/*
 * Angular
 */
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_routes_ts_1 = require('./app/routes/app.routes.ts');
var http_1 = require('@angular/http');
/*
 * components
 */
var app_component_1 = require('./app/app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_ts_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=index.js.map