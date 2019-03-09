const vscode = require('vscode');

function activate(context) {
    return {
        extendMarkdownIt(__md) {
            return __md.use( function(_md) {
                _md.core.ruler.push('charcount', function(md) {
                    const count = md.tokens.reduce((acc, t) => acc + t.content.replace(/\s+/g, '').length, 0);
                    vscode.window.setStatusBarMessage("$(markdown) " + count);
                }, _md);
            }, __md);
        }
    };
}

function deactivate() {}
exports.activate = activate;
exports.deactivate = deactivate;

module.exports = {
    activate,
    deactivate
}
