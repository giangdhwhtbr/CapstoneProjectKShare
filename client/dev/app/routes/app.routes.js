/**
 * Created by GiangDH on 7/9/16.
 */
var router_1 = require('@angular/router');
var kshare_routes_ts_1 = require('./kshare.routes.ts');
var admin_routes_ts_1 = require('./admin.routes.ts');
exports.routes = kshare_routes_ts_1.KShareRoutes.concat(admin_routes_ts_1.AdminRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes),
    kshare_routes_ts_1.authProviders
];
//# sourceMappingURL=app.routes.js.map