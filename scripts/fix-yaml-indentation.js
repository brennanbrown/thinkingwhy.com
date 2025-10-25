import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentDir = path.join(__dirname, '../src/content');

function fixYamlIndentation(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fixYamlIndentation(filePath);
    } else if (file.endsWith('.md')) {
      let content = fs.readFileSync(filePath, 'utf8');
      // Replace tabs with 2 spaces and ensure consistent indentation
      content = content.replace(/\t/g, '  ');
      // Fix common indentation issues
      content = content.replace(/^([ ]{2,})/gm, match => '  '.repeat(match.length / 2));
      fs.writeFileSync(filePath, content);
      console.log(`Fixed YAML indentation in ${filePath}`);
    }
  });
}

fixYamlIndentation(contentDir);
