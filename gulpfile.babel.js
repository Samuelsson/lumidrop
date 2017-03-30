'use strict';

import gulp     from 'gulp';
import gutil    from 'gulp-util';
import path     from 'path';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import yargs    from 'yargs';

const paths = {
    components: path.join(__dirname, 'src/app/components'),
    sections: path.join(__dirname, 'src/app/sections'),
    templates: path.join(__dirname, 'generator')
};

const toCapitalInitial = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
};

const toSnakeCase = (val) => {
    return val.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
};

const gulpTaskRunner = (srcName, destPath, logMsg) => {
    const name = yargs.argv.name;
    const srcPath = path.join(paths.templates, ('' + srcName + '/**/*.**'));
    const destination = path.join(destPath, toSnakeCase(name));

    return gulp.src(srcPath)
        .pipe(template({
            name: name,
            upperCaseName: toCapitalInitial(name),
            snakeCaseName: toSnakeCase(name)
        }))
        .pipe(rename((path) => {
            path.basename = path.basename.replace('temp', toSnakeCase(name));
        }))
        .pipe(gulp.dest(destination))
        .on('end', () => gutil.log('\n --- \n ' + logMsg + ' \n ---'));
};

/**
 * Generates all files for a new component and put them in the components folder.
 * The component needs to be added to components.module if to be included the in app.
 *
 * Run command: npm run component -- --name newComponentNameInCamelCase
 */
gulp.task('component', () => {
    const srcName = 'component';
    const destPath = paths.components;
    const msg = 'Now add the new component to components.module if ready to be used in app';

    return gulpTaskRunner(srcName, destPath, msg);
});

/**
 * Generates all files for a new section and put them in the sections folder.
 * The component needs to be added to section.module and navigation if to be included the in app.
 *
 * Run command: npm run section -- --name newSectionNameInCamelCase
 */
gulp.task('section', () => {
    const srcName = 'section';
    const destPath = paths.sections;
    const msg = 'Now add the new section to section.module and to navigation menu if ready to be used in app';

    return gulpTaskRunner(srcName, destPath, msg);
});