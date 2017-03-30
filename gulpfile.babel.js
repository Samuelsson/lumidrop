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

const taskRunner = (name, srcPath, destPath, endMsg) => {
    return gulp.src(srcPath)
        .pipe(template({
            name: name,
            upperCaseName: toCapitalInitial(name),
            snakeCaseName: toSnakeCase(name)
        }))
        .pipe(rename((path) => {
            path.basename = path.basename.replace('temp', toSnakeCase(name));
        }))
        .pipe(gulp.dest(destPath))
        .on('end', () => gutil.log('\n --- \n ' + endMsg + ' \n ---'));
};

/**
 * Generates all files for a new component and put them in the components folder.
 * The component needs to be added to components.module if to be included the in app.
 *
 * Run command: npm run component -- --name newComponentNameInCamelCase
 */
gulp.task('component', () => {
    const name = yargs.argv.name;
    const srcPath = path.join(paths.templates, 'component/**/*.**');
    const destPath = path.join(paths.components, toSnakeCase(name));
    const msg = 'Now modify components.module if ready to be used in app';

    return taskRunner(name, srcPath, destPath, msg);
});

/**
 * Generates all files for a new section and put them in the sections folder.
 * The component needs to be added to section.module and navigation if to be included the in app.
 *
 * Run command: npm run section -- --name newSectionNameInCamelCase
 */
gulp.task('section', () => {
    const name = yargs.argv.name;
    const srcPath = path.join(paths.templates, 'section/**/*.**');
    const destPath = path.join(paths.sections, toSnakeCase(name));
    const msg = 'Now modify section.module and add to nav if ready to be used in app';

    return taskRunner(name, srcPath, destPath, msg);
});