import server from "gulp-server-livereload";

const serverOptions = {
  livereload: true,
  open: true,
};

const serv = () => {
  return app.gulp.src(app.path.buildFolder).pipe(server(serverOptions));
};

export { serv };
