/*
 * Angular
 */
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_routes_1 = require('./app/app.routes');
/*
 * components
 */
var app_component_1 = require('./app/app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, app_routes_1.APP_ROUTER_PROVIDERS).catch(function (err) { return console.error(err); });
// import {DemoPaper} from './demo/demo-paper';
// bootstrap(DemoPaper);
//# sourceMappingURL=index.js.map