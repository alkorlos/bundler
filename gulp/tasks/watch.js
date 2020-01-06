const gulp = require('gulp');

const html = require('./html');
const css = require('./css');
// Добавляет хэш к именам css файлов и sprite.svg, генерит rev-manifest.json
const revision = require('./revision');
// Заменяет ссылку на sprite.svg в svg-sprite-loader.js на спрайт с хэшом в имени, грузит svg-sprite-loader в build
const svgSpriteLoader = require('./svg-sprite-loader');
// Удаляет старые стили и svg спрайты с хэшом в имени
const revisionClean = require('./revision-clean');
// const js = require('./js'); // Не нужно после добавления webpack-dev-middleware
const images = require('./images');
const videos = require('./videos');
const svg = require('./svg');
const fonts = require('./fonts');
const files = require('./files');

const config = require('../config');

// Watch
const watch = function(done) {
	gulp.watch(config.src.html, gulp.series(html));
	gulp.watch(config.src.css, gulp.series(css));
	// gulp.watch(config.src.js, gulp.series(js)); // Не нужно после добавления webpack-dev-middleware
	gulp.watch(config.src.images, gulp.series(images));
	gulp.watch(config.src.videos, gulp.series(videos));
	gulp.watch(config.src.svg, gulp.series(svg, revision, svgSpriteLoader, revisionClean));
	gulp.watch(config.src.fonts, gulp.series(fonts));
	gulp.watch(config.src.files, gulp.series(files));
	done();
}

module.exports = watch;
