/*
based on https://github.com/nestjs/nest/issues/986#issuecomment-509295864
to fix tsconfig-paths for nodejs critical issue https://github.com/dividab/tsconfig-paths/issues/231
 */

const tsConfig = require('./tsconfig.json');
const tsConfigPaths = require('tsconfig-paths');

const paths = tsConfig.compilerOptions.paths;

tsConfigPaths.register({
    baseUrl: tsConfig.compilerOptions.outDir,
    paths: Object.keys(paths).reduce(
        (agg, key) => ({
            ...agg,
            [key]: paths[key].map(p =>
                p.replace(tsConfig.compilerOptions.baseUrl, tsConfig.compilerOptions.outDir),
            ),
        }),
        {},
    ),
});
