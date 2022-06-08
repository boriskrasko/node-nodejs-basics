import fs from "fs"

const dir = 'src/fs/files';
const newDir = 'src/fs/files_copy';
const files = fs.readdirSync(dir)

export const copy = async () => {
  fs.stat(dir, function (err, stats) {
    if (err) {
      throw err('FS operation failed!');
    } else {
      fs.stat(newDir, function (err, stats) {
        if (err) {
          fs.mkdir(newDir, err => {
            if (err) throw err('FS operation failed!')
            console.log('Done!');
          });
          for (const file of files) {
            fs.copyFile(`${dir}/${file}`, `${newDir}/${file}`, (err) => {
              if (err) throw err('FS operation failed!')
              console.log('Copied!');
            });
          }
        } else {
          throw err('FS operation failed!');
        }
      });
    }
  });
};

copy();