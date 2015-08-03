var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var pkg  = require('./package.json');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

var sources = {
    url: '{%= development_url %}'
};

// browserSync
gulp.task('browserSync', function() {
    browserSync({
        proxy: sources.url + '/'
    });
    gulp.watch(['stylus/{,*/}{,*/}*.styl', './stylus/**/*.styl'], ['stylus-browserSync']);
});

// stylus-browserSync
gulp.task('stylus-browserSync', function () {
    return gulp.src(['./stylus/**/*.styl', '!./stylus/_*.styl', '!./stylus/**/_*.styl', '!./stylus/**/**/_*.styl'])
        .pipe($.plumber())
        .pipe($.stylus())
        .pipe($.pleeease({
            minifier: false,
            autoprefixer: "last 2 versions"
        }))
        .pipe($.replace(/<%= pkg.version %>/g, pkg.version))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('./'))
        .on('end', reload);
});

// stylus
gulp.task('stylus', function () {
    return gulp.src(['./stylus/**/*.styl', '!./stylus/_*.styl', '!./stylus/**/_*.styl', '!./stylus/**/**/_*.styl'])
        .pipe($.plumber())
        .pipe($.stylus())
        .pipe($.pleeease({
            minifier: false,
            autoprefixer: "last 2 versions"
        }))
        .pipe($.replace(/<%= pkg.version %>/g, pkg.version))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('./'));
});

// javascript
gulp.task('js', function() {
    return gulp.src('js/{%= file_name %}.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('default'))
        .pipe($.notify(function (file) {
            if (file.jshint.success) {
                return false;
            }
            var errors = file.jshint.results.map(function (data) {
                if (data.error) {
                    return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
                }
            }).join("\n");
            return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
        }))
        .pipe(gulp.dest('js'))
});

// watch
gulp.task('watch', function () {
    gulp.watch('js/{%= file_name %}.js', ['js']);
    gulp.watch('stylus/{,*/}{,*/}*.styl', ['stylus']);
});

// default task
gulp.task('default',['js','stylus']);
