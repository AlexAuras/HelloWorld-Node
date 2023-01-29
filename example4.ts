import fs from 'fs/promises';

// Shows the usage of the async/await pattern

async function example() {
  try {
    const stats = await fs.stat('./example4.ts');
    stats.isFile(); // true
    stats.isDirectory(); // false
    stats.isSymbolicLink(); // false
    stats.size; // 1024000 //= 1MB
  } catch (err) {
    console.log(err);
  }
}
example();
