const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//Rutas
const paths = {
    sass: './src/sass/**/*.scss',
    css: './dist/css'
};

//Compilar Sass
function sassCompile() {
    return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.css));
}

//Observar Sass
function watchSass() {
    gulp.watch(paths.sass, sassCompile);
}

//Tareas
//exports.watchSass = gulp.series(sassCompile, watchSass); 
exports.sassCompile = sassCompile;
