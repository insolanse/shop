import { src, dest } from 'gulp';
import pug from 'gulp-pug';
import bs from 'browser-sync';
import env from 'gulp-environment';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import { path } from '../gulp.path';

export const Pug = (done) => {
    src(path.pug.src) // От куда берем файлы
        .pipe(env.if.not.production(
            plumber({errorHandler: notify.onError('Ошибка в PUG: <%= error.message %>')}))
        )
        .pipe(pug({
            pretty: '    '
        }))
        .pipe(dest(path.pug.dest)) // Сюда складываем
        .pipe(env.if.not.production(bs.stream()))
        .pipe(bs.reload({stream: true}))
        done();
};
gulp.task('img:prod', function () {
    return gulp.src(path.src.img) 
      .pipe(debug({title: 'building img:', showFiles: true}))
      .pipe(plumber(plumberOptions))
      .pipe(gulp.dest(path.prod.img)) 
      .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imageminJpegRecompress({
          progressive: true,
          max: 80,
          min: 70
        }),
        imageminPngquant({quality: '80'}),
        imagemin.svgo({plugins: [{removeViewBox: true}]})
      ]))
      .pipe(gulp.dest(path.prod.img)); 
  });