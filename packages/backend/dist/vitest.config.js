"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unplugin_swc_1 = require("unplugin-swc");
const config_1 = require("vitest/config");
exports.default = (0, config_1.defineConfig)({
    test: {
        globals: true,
        root: './',
    },
    plugins: [
        unplugin_swc_1.default.vite({
            module: { type: 'es6' },
        }),
    ],
});
//# sourceMappingURL=vitest.config.js.map