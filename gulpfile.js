var gulp=require('gulp'),
    browserSync=require('browser-sync').create();
    reload=browserSync.reload;

gulp.task('default',['serve']);
gulp.task('serve', function () {
    browserSync.init({
        server: "./"
    });
    // gulp.watch("./index.sass", ['sass']);
    gulp.watch("./js/*.js", ['js-watch']);
    gulp.watch("./css/*.css").on('change',reload);
    gulp.watch("./*.html").on('change', reload);
});
// gulp.task('sass', function () {
//     return gulp.src('./index.sass')
//         .pipe(sass())
//         .pipe(gulp.dest('./mysass'))
//         .pipe(reload({
//             stream: true
//         }));
// })
gulp.task('js', function () {
    return gulp.src('./js/*.js')
        .pipe(browserSync())
        // .pipe(gulp.dest('./dist/js'))
})
gulp.task('js-watch', ['js'], browserSync.reload);