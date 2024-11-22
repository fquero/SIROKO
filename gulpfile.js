import gulp from "gulp";
import sass from "gulp-sass";
import sassModule from "sass";
import plumber from "gulp-plumber";

import svgmin from "gulp-svgmin";
import svgSprite from "gulp-svg-sprite";

import resize from "gulp-image-resize";
import imagemin from "gulp-imagemin";
import webp from "gulp-webp";

import ts from "gulp-typescript";
import uglify from "gulp-uglify";

//Rutas
const paths = {
  style: {
    sass: "./src/sass/**/*.scss",
    css: "./dist/css",
  },
  svg: {
    src: "./src/img/svg/**/*.svg",
    dest: "./dist/img/svg",
  },
  img: {
    src: "./src/img/**/*.{png,jpg,jpeg,gif,webp}",
    dest: "./dist/img",
  },
  fonts: {
    src: "./src/fonts/**/*",
    dest: "./dist/fonts",
  },
  ts: {
    src: "./src/**/*.ts",
    dest: "./dist",
  },
};
//////////////////////////////////////    INDEX      /////////////////////////////////////////////////
function copyIndexFile() {
  return gulp.src(paths.index.src).pipe(gulp.dest(paths.index.dest));
}
export const copyIndex = copyIndexFile;

//////////////////////////////////////    ESTILO //////////////////////////////////////////////////
//Compilar Sass
function sassCompileFiles() {
  return gulp
    .src(paths.style.sass)
    .pipe(
      plumber({
        errorHandler: (err) => {
          console.log(err.message);
          this.emit("end");
        },
      })
    )
    .pipe(sass(sassModule).sync())
    .pipe(gulp.dest(paths.style.css));
}

//Observar Sass
function watchSassFiles() {
  gulp.watch(paths.style.sass, sassCompile);
}

//Tareas Sass
export const watchSass = gulp.series(
  //copyIndexFile,
  sassCompileFiles,
  watchSassFiles
);
export const sassCompile = sassCompileFiles;

//////////////////////////////////////    SVG      //////////////////////////////////////////////////
function svgOptimizarFiles() {
  return gulp
    .src(paths.svg.src)
    .pipe(
      svgmin({
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                // Mantener el viewBox
                removeViewBox: false,
                // Eliminar width y height
                removeDimensions: true,
              },
            },
          },
        ],
      })
    )
    .pipe(gulp.dest(paths.svg.dest));
}

function svgCreaSpriteFiles() {
  return gulp
    .src(paths.svg.src)
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: "../logo_sprite.svg",
          },
        },
      })
    )
    .pipe(gulp.dest(paths.svg.dest));
}

//Tareas SVG
export const svgOptimizar = svgOptimizarFiles;
export const svgCreaSprite = svgCreaSpriteFiles;

//////////////////////////////////////    IMÁGENES //////////////////////////////////////////////////
async function imgResizeFiles() {
  return gulp
    .src(paths.img.src)
    .pipe(
      resize({
        width: 1920,
        upscale: false,
        suffix: "-desktop-lg",
      })
    )
    .pipe(imagemin())
    .pipe(webp())
    .pipe(gulp.dest(paths.img.dest))

    .pipe(
      resize({
        width: 1280,
        upscale: false,
        suffix: "-desktop",
      })
    )
    .pipe(imagemin())
    .pipe(webp())
    .pipe(gulp.dest(paths.img.dest))

    .pipe(
      resize({
        width: 1024,
        upscale: false,
        suffix: "-tablet",
      })
    )
    .pipe(imagemin())
    .pipe(webp())
    .pipe(gulp.dest(paths.img.dest))

    .pipe(
      resize({
        width: 750,
        upscale: false,
        suffix: "-mobile",
      })
    )
    .pipe(imagemin())
    .pipe(webp())
    .pipe(gulp.dest(paths.img.dest))

    .pipe(
      resize({
        width: 1920,
        upscale: false,
        suffix: "-desktop-lg-2x",
      })
    )
    .pipe(imagemin())
    .pipe(webp())
    .pipe(gulp.dest(paths.img.dest))

    .pipe(
      resize({
        width: 1280,
        upscale: false,
        suffix: "-desktop-2x",
      })
    )
    .pipe(imagemin())
    .pipe(webp())
    .pipe(gulp.dest(paths.img.dest))

    .pipe(
      resize({
        width: 1024,
        upscale: false,
        suffix: "-tablet-2x",
      })
    )
    .pipe(imagemin())
    .pipe(webp())
    .pipe(gulp.dest(paths.img.dest))

    .pipe(
      resize({
        width: 750,
        upscale: false,
        suffix: "-mobile-2x",
      })
    )
    .pipe(imagemin())
    .pipe(webp())
    .pipe(gulp.dest(paths.img.dest));
}

export const imgResize = imgResizeFiles;

//////////////////////////////////////    FONT      /////////////////////////////////////////////////
function copyFontsFiles() {
  return gulp
    .src(paths.fonts.src) // Todos los archivos dentro de src/fonts
    .pipe(gulp.dest(paths.fonts.dest)); // Los copia a dist/fonts
}
export const copyFonts = copyFontsFiles;

//////////////////////////////////////    TYPESCRIPT      /////////////////////////////////////////////////
const tsProject = ts.createProject("tsconfig.json");

function compilaTsFiles() {
  return gulp
    .src(paths.ts.src)
    .pipe(tsProject())
    .pipe(
      uglify({
        compress: {
          drop_console: true,
          drop_debugger: true,
          passes: 3,
        },
        mangle: {
          toplevel: true,
        },
        output: {
          beautify: false,
          comments: false,
        },
      })
    )
    .pipe(gulp.dest(paths.ts.dest));
}

export const compilaTs = compilaTsFiles;

//Observar Typescript
function watchTsFiles() {
  gulp.watch(paths.ts.src, compilaTs);
}
export const watchTs = watchTsFiles;

//////////////////////////////////////    BUILD      /////////////////////////////////////////////////
function build() {}
