/**
 * Created by GiangDH on 7/9/16.
 */
var router_1 = require('@angular/router');
var kshare_routes_1 = require('./routes/kshare.routes');
var admin_routes_1 = require('./routes/admin.routes');
exports.routes = kshare_routes_1.KShareRoutes.concat(admin_routes_1.AdminRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map