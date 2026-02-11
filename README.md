# 📚 ree-docs Framework

A comprehensive JavaScript/TypeScript documentation framework that automatically generates beautiful, interactive documentation from your source code.

## Features

✨ **Automatic Parsing** - Extract functions, classes, interfaces from JavaScript/TypeScript files
📊 **Code Analysis** - Generate metrics and insights about your codebase
📝 **Multiple Formats** - Generate documentation in HTML, Markdown, and JSON
🎨 **Beautiful Output** - Modern, responsive HTML documentation with clean styling
🔍 **Smart Detection** - Extracts JSDoc comments and type information
📈 **Coverage Reports** - Shows documentation coverage metrics
⚡ **Fast & Lightweight** - Minimal dependencies, optimized for performance

## Installation

```bash
npm install ree-docs
```

## Quick Start

### Using CLI

```bash
# Generate documentation from your src directory
npx ree-docs generate ./src ./docs

# Generate specific format
npx ree-docs generate ./src ./docs --format markdown

# Analyze code quality
npx ree-docs analyze ./src
```

### Using as a Module

```javascript
const CodeDocFramework = require('ree-docs');

const framework = new CodeDocFramework({
  sourceDir: './src',
  outputDir: './docs',
  formats: ['html', 'markdown', 'json'],
  title: 'My Project Docs'
});

// Generate documentation
await framework.run('./src', './docs');
```

## Configuration Options

```javascript
{
  sourceDir: './src',           // Source code directory
  outputDir: './docs',          // Output directory
  formats: ['html', 'markdown', 'json'],  // Output formats
  title: 'Documentation',       // Documentation title
  theme: 'default',             // Theme (default or custom)
  includePrivate: false,        // Include private members
  excludeDirs: ['node_modules', '.git', 'dist']  // Exclude directories
}
```

## Example

### Input: sample.js

```javascript
/**
 * Calculates the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * User management class
 */
class UserManager {
  /**
   * Create a new user
   * @param {string} name - User name
   * @param {string} email - User email
   */
  createUser(name, email) {
    // implementation
  }
}
```

### Generated Output

#### HTML
Beautiful interactive documentation with:
- Project overview with statistics
- Function reference with parameters
- Class documentation with methods
- Module overview
- Navigation and search

#### Markdown
- Clear markdown format
- Table of contents
- Function signatures
- Parameter documentation
- Export information

#### JSON
Complete structured data for integrations:
```json
{
  "modules": {...},
  "functions": [...],
  "classes": [...],
  "interfaces": [...]
}
```

## API Reference

### CodeDocFramework

Main class for documentation generation.

#### Methods

- `parseSource(sourceDir)` - Parse source files
- `analyze()` - Analyze code structure
- `generate(outputDir)` - Generate documentation
- `run(sourceDir, outputDir)` - Complete pipeline

## Architecture

```
┌─────────────────┐
│   Source Code   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│    Parser       │ ← Extracts functions, classes, JSDoc
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Analyzer      │ ← Generates metrics and insights
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Generator     │ ← Creates HTML/Markdown/JSON docs
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Documentation  │
└─────────────────┘
```

## Supported Languages

- JavaScript (ES6+)
- TypeScript
- JSX
- TSX

## Development

### Setup

```bash
git clone https://github.com/reegan-crypto/ree-docs.git
cd ree-docs
npm install
```

### Running Tests

```bash
npm test
```

### Building Examples

```bash
npm run example
```

## Best Practices

1. **Write JSDoc Comments** - Document your functions and classes with JSDoc
   ```javascript
   /**
    * Description
    * @param {type} name - Parameter description
    * @returns {type} Return description
    */
   ```

2. **Use Type Annotations** - TypeScript types help generate better docs
   ```typescript
   function add(a: number, b: number): number {
     return a + b;
   }
   ```

3. **Organize Code** - Keep related functions and classes together

4. **Consistent Naming** - Use descriptive names for functions and classes

## Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Submit a Pull Request

## License

MIT © CodeDoc Team

## Support

- 📖 [Documentation](https://github.com/reegan-crypto/ree-docs)
- 🐛 [Report Issues](https://github.com/reegan-crypto/ree-docs/issues)
- 💬 [Discussions](https://github.com/reegan-crypto/ree-docs/discussions)

---

**Made with ❤️ by reegan-crypto**