var gulp = require('gulp'); 					//récupère le module gulp
var autoprefixer = require('gulp-autoprefixer'); //autopréfixe les propriétés css
var cssnano = require('gulp-cssnano'); 			//minifie le css
var rename = require("gulp-rename"); 			//renomme les fichiers (notamment extension .min.)
var sass = require('gulp-sass');				//sass
var plumber = require('gulp-plumber');

//à exécuter avec "gulp css"
gulp.task('css', function(){ //ici, on donne à la task, le nom "css", attention, ce n'est pas un nom de format
	return gulp.src('src/scss/*.scss') //ATTENTION, dossier Scss !
			.pipe(sass({ outputStyle: 'expanded' }))
			.pipe(autoprefixer())
			.pipe(gulp.dest('./css'))		//sauvegarde dans css/ le fichier non minifié
			.pipe(rename({suffix: '.min'}))
			.pipe(cssnano())
			.pipe(gulp.dest('./css'))		//sauvegarde css/ le fichier minifié
});

//à exécuter avec "gulp watch"
//les changements aux fichiers sources seront détectés automatiquement
gulp.task('watch', function(){ //même chose ici, watch est le nom de la tâche
	gulp.watch('src/scss/*.scss', ['css']); //veut dire en français que l'on met sous écoute le dossier scss et que s'il y a un changement (.watch) on exécute la tâche css
});

//à exécuter avec "gulp" tout court
//les changements aux fichiers sources seront détectés automatiquement
gulp.task('default', ['css']);