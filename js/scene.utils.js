function toggle_visibility(b, o) {

  console.log(o.classname);
  
  if ( o.classname != 'volume' ) {
    for (c in o.children) {
      
      c = o.children[c];
      c.visible = !c.visible;
    }
  }

  o.visible = !o.visible;

  var _img_path = 'gfx/show.png';

  if ( !o.visible ) {
    _img_path = 'gfx/hide.png';
  }

  // and also toggle all child icons
  $(b).children()[0].src = _img_path;
  $(b).closest('li').children().find('li').find('button').find('img').each(
      function(i, v) {
        v.src = _img_path;
      });
}

function scene_picking() {

  r0.interactor.onMouseMove = function() {

    if ( typeof hoverTimer != 'undefined' ) {
      clearTimeout(hoverTimer);
    }

    hoverTimer = setTimeout(function() {

      // grab the current mouse position
      var _pos = r0.interactor.mousePosition;

      // pick the current object
      var _id = r0.pick(_pos[0], _pos[1]);

      if ( _id != 0 ) {

        var _object = r0.get(_id);

        if ( _object.classname == 'mesh' ) {

          // grab the object's caption
          var _caption = _object.caption;

          // .. and its color
          var _color = _object.color.slice();
          _color[0] = parseInt(_color[0] * 255, 10);
          _color[1] = parseInt(_color[1] * 255, 10);
          _color[2] = parseInt(_color[2] * 255, 10);

          // .. and display it
          $('.scene_picker').html(_caption);
          $('.scene_picker').css('color', 'rgb(' + _color + ')');
          $('.scene_picker').css('font-size', '14px');

        }

      }

    }, 1000);

  };

}

function scene_picking_check() {

  // return the currently picked model
  return $('.scene_picker').filter(':visible').html();

}