import fs from 'fs';
import util from 'util';

// Shows the usage of Promisify

async function example() {
  const open = util.promisify(fs.open);
  const fd = await open('./example5.ts', 'r');
}
example();
