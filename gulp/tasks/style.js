import { src, dest } from 'gulp';
import bs from 'browser-sync';
import { path } from '../gulp.path';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import scss from 'gulp-sass';
import env from 'gulp-environment';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import gulpStylelint from 'gulp-stylelint';

const plugins = {
    dev: [
        autoprefixer(),
        cssnano()
    ]
};

export const Style = (done) => {
    src(path.scss.src) // От куда берем файлы
        .pipe(env.if.not.production(
            plumber({errorHandler: notify.onError('Ошибка в SCSS: <%= error.message %>')}))
        )
        .pipe(env.if.not.production(sourcemaps.init()))
        .pipe(scss())
        .pipe(postcss(plugins.dev))
        .pipe(env.if.not.production(sourcemaps.write()))
        .pipe(dest(path.scss.dest)) // Сюда складываем
        .pipe(env.if.not.production(bs.reload({stream: true}))) // Hot-reload
        done();
};

export const StyleLint = (done) => {
    src(path.scss.src)
        .pipe(gulpStylelint({
            reporters: [
              {formatter: 'string', console: true}
            ]
        }))
        done();
};