import { watch } from 'gulp';
import { Pug } from './pug';
import { Style } from './style';
import { path } from '../gulp.path';

export const WatchFiles = (done) => {
    watch(path.pug.watch, Pug)
    watch(path.scss.watch, Style)
    done();
};