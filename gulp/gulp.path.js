export const path = {
    build: './build/',
    pug: {
        src: './src/pages/**/*.pug',
        dest: './build',
        watch: [
            './src/pages/**/*.pug',
            './src/pages/*.pug',
            './src/sections/**/*.pug',
            './src/mixins/**/*.pug',
            './src/layouts/*.pug',
        ],
    },
    scss: {
        src: './src/assets/scss/style.scss',
        dest: './build/assets/css/',
        watch: [
            './src/assets/scss/**/*.scss',
            './src/sections/**/*.scss',
        ],
    }
};