const gulp = require('gulp');
const through2 = require('through2');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-cleaner-css');

function compilerScss() {
  // theme 下的 css 变量最终会导出到 style/index.scss 中，因此不编译，否则会造成重复样式
  return gulp
    .src(['./src/**/*.scss', '!src/**/theme/*.scss'])
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./es'))
    .pipe(gulp.dest('./lib'))
    .pipe(concat('index.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(cleanCSS())
    .pipe(concat('index.min.css'))
    .pipe(gulp.dest('./dist'));
}

// 补充构建产物的 reset.css
function compilerResetScss() {
  return gulp
    .src('./src/style/reset.scss')
    .pipe(
      through2.obj(function (file, encoding, next) {
        file.path = file.path.replace(/\.scss/g, '.css');
        this.push(file);
        next();
      }),
    )
    .pipe(gulp.dest('./dist')) // copy reset css
    .pipe(gulp.dest('./es/style'))
    .pipe(gulp.dest('./lib/style'));
}

function generateCssJs(dest) {
  return gulp
    .src([`./${dest}/**/style/index.js`])
    .pipe(
      through2.obj(function (file, encoding, next) {
        const cssFile = file.clone();
        const content = cssFile.contents.toString(encoding);
        cssFile.contents = Buffer.from(cssInjection(content)); // 文件内容处理

        cssFile.path = cssFile.path.replace(/index\.js/, 'css.js'); // 文件重命名
        this.push(cssFile); // 新增该文件
        next();
      }),
    )
    .pipe(gulp.dest(`./${dest}`));
}

function genEsmCssJs() {
  return generateCssJs('es');
}

function genCjsCssJs() {
  return generateCssJs('lib');
}

function cssInjection(content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.scss/g, '.css');
}

function copyScss() {
  return gulp.src('./src/**/*.scss').pipe(gulp.dest('./lib')).pipe(gulp.dest('./es'));
}

function copyRenameStyleIndex() {
  return gulp
    .src('./src/**/style/index.ts')
    .pipe(
      through2.obj(function (file, encoding, next) {
        file.path = file.path.replace(/index\.ts$/, 'index.js');
        this.push(file);
        next();
      }),
    )
    .pipe(gulp.dest('./es'))
    .pipe(
      through2.obj(function (file, encoding, next) {
        const libFile = file.clone();
        libFile.path = libFile.path.replace(/index\.ts$/, 'index.js');
        const content = libFile.contents.toString(encoding);
        libFile.contents = Buffer.from(content.replace(/import\s+(['"])(\.\.?\/[^'"]+)\1/g, 'require($1$2$1)'));
        this.push(libFile);
        next();
      }),
    )
    .pipe(gulp.dest('./lib'));
}

/**
 * 整体流程
 * 1. 将 style/index.ts 拷贝到 构建目录中并重命名 index.js
 *  1.1 由于需要支持 es 和 lib 两种构建，而 index.ts 中的为 esm，则需要对内容进行转换
 *  1.2 esm 内容直接拷贝并重命名，lib 需将 import 转为 require 重命名
 * 2. 实现按需加载，需再生成 css.js
 *  2.1 直接将构建好的 index.js 内容进行处理，即 `scss` -> `css` 并新建 css.js
 * 3. 编译 sass 并输出到构建目录，由于 index.js  和 css.js 都已经对内容做处理，所以仅编译即可
 *
 * 其中 2 和 3 是依赖关系，串行执行
 *
 * 4. 将源 scss 文件拷贝到构建目录
 */
const build = gulp.parallel(
  gulp.series(copyRenameStyleIndex, gulp.parallel(genEsmCssJs, genCjsCssJs)),
  compilerScss,
  compilerResetScss,
  copyScss,
);

function watchFiles() {
  gulp.watch(['src/**/*.scss', '!src/**/demos/**'], build);
}

exports.watch = watchFiles;
exports.build = build;
exports.default = build;
