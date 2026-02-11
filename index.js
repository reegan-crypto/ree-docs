/**
 * CodeDoc Framework - A comprehensive JavaScript code documentation system
 * @version 1.0.0
 * @author CodeDoc Team
 */

const Parser = require('./src/parser');
const Generator = require('./src/generator');
const Analyzer = require('./src/analyzer');
const Config = require('./src/config');

class CodeDocFramework {
  constructor(options = {}) {
    this.config = new Config(options);
    this.parser = new Parser(this.config);
    this.analyzer = new Analyzer(this.config);
    this.generator = new Generator(this.config);
    this.documentation = {};
  }

  /**
   * Parse all source files
   * @param {string} sourceDir - Directory containing source files
   * @returns {Promise<Object>} Parsed code structure
   */
  async parseSource(sourceDir) {
    console.log(`📖 Parsing source files from: ${sourceDir}`);
    this.documentation = await this.parser.parse(sourceDir);
    return this.documentation;
  }

  /**
   * Analyze parsed code
   * @returns {Promise<Object>} Analysis results
   */
  async analyze() {
    console.log('🔍 Analyzing code structure...');
    const analysis = await this.analyzer.analyze(this.documentation);
    return analysis;
  }

  /**
   * Generate documentation
   * @param {string} outputDir - Output directory for generated docs
   * @returns {Promise<void>}
   */
  async generate(outputDir) {
    console.log(`📝 Generating documentation to: ${outputDir}`);
    await this.generator.generate(this.documentation, outputDir);
    console.log('✅ Documentation generated successfully!');
  }

  /**
   * Full pipeline: parse, analyze, and generate
   * @param {string} sourceDir - Source directory
   * @param {string} outputDir - Output directory
   * @returns {Promise<void>}
   */
  async run(sourceDir, outputDir) {
    await this.parseSource(sourceDir);
    await this.analyze();
    await this.generate(outputDir);
  }
}

module.exports = CodeDocFramework;