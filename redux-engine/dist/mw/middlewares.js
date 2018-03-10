"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crashReporter = function (store) { return function (next) { return function (action) {
    try {
        return next(action);
    }
    catch (err) {
        console.error('Caught an exception!', err);
        throw err;
    }
}; }; };
//# sourceMappingURL=middlewares.js.map