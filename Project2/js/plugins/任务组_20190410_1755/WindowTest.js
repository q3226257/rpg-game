//=============================================================================
 /*:
 * @plugindesc Test
 * @author Yanfly
 */
//=============================================================================

SceneManager._screenWidth       = 1280;
SceneManager._screenHeight      = 720;
SceneManager._boxWidth          = 1280;
SceneManager._boxHeight         = 720;

var _create_ = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function() {
  _create_.call(this);
  this.rearrange();
};

Scene_Menu.prototype.rearrange = function() {
  this._statusWindow.x = 0;
  this._commandWindow.x = this._statusWindow.width;
  this._goldWindow.x = this._statusWindow.width;
};

//=============================================================================
// End of File
//=============================================================================

