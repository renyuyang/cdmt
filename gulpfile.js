var gulp = require('gulp');
var minify = require('gulp-minify-html');
var mincss = require('gulp-clean-css');
var minjs = require('gulp-uglify');
var concat = require('gulp-concat');
var spritesmith = require('gulp.spritesmith');
gulp.task('htmltask',function(){
	gulp.src('*.html')
	.pipe(minify())
	.pipe(gulp.dest('dist'))
});

gulp.task('csstask',function(){
	gulp.src('./css/*.css')
	.pipe(mincss())
	.pipe(gulp.dest('dist/css'))
})

gulp.task('jstask',function(){
	gulp.src('./js/*.js')
	.pipe(minjs())
	.pipe(concat('all.js'))
	.pipe(gulp.dest('dist/js'))
})

gulp.task('sprittask',function(){
	gulp.src(['./img/*.png','./img/*.jpg'])
	.pipe(spritesmith({
		imgName:'sprite.png',
		cssName:'sprite.css'
	}))
	.pipe(gulp.dest('dist/sprites'))
})

gulp.task('watch',function(){
	gulp.watch('*.html',['htmltask']);
	gulp.watch('css/*.css',['csstask']);
	gulp.watch('js/*.js',['jstask']);
})
