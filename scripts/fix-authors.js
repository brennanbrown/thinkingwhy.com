import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentDir = path.join(__dirname, '../src/content');

function fixAuthors(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fixAuthors(filePath);
    } else if (file.endsWith('.md')) {
      let content = fs.readFileSync(filePath, 'utf8');
      // Match any author object and capture the name
      const regex = /author:\s*(\n\s*[^\n:]+:\s*[^\n]+\n)+\s*/g;
      const nameRegex = /name:\s*"([^"]+)"/;
      if (regex.test(content)) {
        const match = content.match(regex);
        if (match) {
          const authorBlock = match[0];
          const nameMatch = authorBlock.match(nameRegex);
          if (nameMatch) {
            const authorName = nameMatch[1];
            content = content.replace(authorBlock, `author: "${authorName}"`);
            fs.writeFileSync(filePath, content);
            console.log(`Fixed author in ${filePath}`);
          }
        }
      }
    }
  });
}

fixAuthors(contentDir);
