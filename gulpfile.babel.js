import { parallel, series } from 'gulp';
import { Serve } from './gulp/tasks/server';
import { Pug } from './gulp/tasks/pug';
import { Style, StyleLint } from './gulp/tasks/style';
import { WatchFiles } from './gulp/tasks/watch';


const RunServer = parallel(
  WatchFiles,
  Serve
);

const Build = series(
  series (
    Pug,
    Style
  ),
  RunServer
)
const BuildProd = series(
    Pug,
    Style
)

const Linter = series(
  StyleLint
)

exports.default = Build;
exports.production = BuildProd;
exports.linter = Linter;