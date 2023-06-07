import path from 'path';
import fs from 'fs-extra';

export const copyFiles = (directoryToSearch, directoryToCopyTo, pattern) => {
    fs.readdirSync(directoryToSearch).forEach((file) => {
        const filePath = directoryToSearch + '/' + file;
        const copyPath = directoryToCopyTo + '/' + file;
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            copyFiles(filePath, copyPath, pattern);
        }
        if (stat.isFile() && filePath.endsWith(pattern)) {
            console.log('copy file with pattern', pattern, 'from', directoryToSearch, 'to', directoryToCopyTo);
            fs.copy(filePath, copyPath, (err) => {
                console.log('file', filePath, 'copied to:', copyPath);
            });
        }
    });
};

export const removeFiles = (directoryToSearch, pattern) => {
    fs.readdirSync(directoryToSearch).forEach((file) => {
        const filePath = path.resolve(directoryToSearch, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            removeFiles(filePath, pattern);
        }
        if (stat.isFile() && filePath.endsWith(pattern)) {
            fs.unlink(filePath);
        }
    });
};

// // post process elements
// copySources('libs/elements/src', 'dist/libs/elements/src', '.lib.js');
//
// // post process components
// copySources('libs/components/src', 'dist/libs/components/src', '.lib.js');
//
// // post process sections
// copySources('libs/sections/src', 'dist/libs/sections/src', '.lib.js');
//
// // post process map
// copySources('libs/map/src', 'dist/libs/map/src', '.js');
//
// // post process test-support
// copySources('libs/support/test-support/src', 'dist/libs/support/test-support/src', '.js');
