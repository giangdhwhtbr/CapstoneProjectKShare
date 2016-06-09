/**
 * Created by GiangDH on 6/8/16.
 */
require('core-js/es6');
require('reflect-metadata');
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
}
else {
    // Development
    Error['stackTraceLimit'] = Infinity;
}
//# sourceMappingURL=polyfills.js.map