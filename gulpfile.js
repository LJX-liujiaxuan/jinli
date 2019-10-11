const gulp=require("gulp");

gulp.task("watchall",async()=>{
	//监听html,进行复制
	gulp.watch("*.html",async()=>{
		gulp.src("*.html")
		.pipe(gulp.dest("D:\\phpStudy2016\\phpStudy\\WWW\\test"))
	});
})
