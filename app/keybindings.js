var $ = require('jquery');
var Mousetrap = require('br-mousetrap');

module.exports.setup = function(app) {
  Mousetrap.bind(['command+r', 'ctrl+r'], function(e) {
    app.run();
  });

  Mousetrap.bind(['command+o', 'ctrl+o'], function(e) {
    $('#openFile').trigger('click');
  });

  Mousetrap.bind(['command+s', 'ctrl+s'], function(e) {
    app.saveFile();
  });

  Mousetrap.bind(['command+shift+s', 'ctrl+shift+s'], function(e) {
    $('#saveFile').trigger('click');
  });

  Mousetrap.bind(['command+n', 'ctrl+n'], function(e) {
    app.newFile();
  });

  Mousetrap.bind(['command+shift+n', 'ctrl+shift+n'], function(e) {
    app.newWindow(app.windowURL);
  });

  Mousetrap.bind(['command+w', 'ctrl+w'], function(e) {
    //editor.close();
  });

  Mousetrap.bind(['command+e', 'ctrl+e'], function(e) {
    app.export();
  });

  Mousetrap.bind(['command+alt+j', 'ctrl+alt+j'], function(e) {
    gui.Window.get().showDevTools();
  });

  Mousetrap.bind(['command+=', 'ctrl+='], function(e) {
    editor.changeFontSize(1);
  });

  Mousetrap.bind(['command+-', 'ctrl+-'], function(e) {
    editor.changeFontSize(-1);
  });

  Mousetrap.stopCallback = function(e, element, combo) {
    return false;
  }
}
