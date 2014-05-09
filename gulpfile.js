var gulp = require('gulp');
var concat = require('gulp-concat');

var paths = {
    scripts: ['app/js/app.js', 'app/js/controllers/*.js', 'app/js/directives/*.js', 'app/js/filters/*.js', 'app/js/services/*.js']
};

gulp.task('scripts', function() {
    // concat and copy all JavaScript
    return gulp.src(paths.scripts)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app/dist'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts']); 
