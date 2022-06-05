import fs from 'fs';
import crypto from 'crypto';
const fd = fs.createReadStream('src/hash/files/fileToCalculateHashFor.txt');
const hash = crypto.createHash('md5');
hash.setEncoding('hex');

export const calculateHash = async () => {
  fd.on('end', function() {
    hash.end();
    console.log(hash.read());
  });
    
  fd.pipe(hash);
};

calculateHash();
