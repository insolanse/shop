import bs from 'browser-sync';
import { path } from '../gulp.path';

export const Serve = (done) => {
    bs.init({
        server: {
            baseDir: path.build,
            index: '/index.html'
        },
        notify: false,
    });
    done();
};