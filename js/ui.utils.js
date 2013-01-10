
// gets called when the xtk scene is setup
function loading_completed() {
  
  // create tree data for this testing scenario
  create_tree_data();
  
  $('#tree').tree({
    data : tree_data,
    autoOpen : true,
    autoEscape : false
  });

  $('#model_tree').dialog({
    draggable : true,
    height : 595,
    width : 270,
    resizable : false,
    position : {
      my : "left top",
      at : "left top",
      of : window
    }
  });

  $('#quiz').dialog({
    draggable : true,
    position : {
      my : "right top",
      at : "right top",
      of : window
    }
  });  

  var dim = volume.dimensions;

  $('#slider_red').slider();
  $("#slider_red").slider("option", "min", 0);
  $("#slider_red").slider("option", "max", dim[0] - 1);
  $("#slider_red").slider("option", "value", volume.indexX);

  $('#slider_yellow').slider();
  $("#slider_yellow").slider("option", "min", 0);
  $("#slider_yellow").slider("option", "max", dim[1] - 1);
  $("#slider_yellow").slider("option", "value", volume.indexY);

  $('#slider_green').slider();
  $("#slider_green").slider("option", "min", 0);
  $("#slider_green").slider("option", "max", dim[2] - 1);
  $("#slider_green").slider("option", "value", volume.indexZ);

  // callbacks
  jQuery("#slider_yellow").slider({
    slide : volumeslicingX
  });
  jQuery("#slider_yellow .ui-slider-handle").unbind('keydown');

  jQuery("#slider_red").slider({
    slide : volumeslicingY
  });
  jQuery("#slider_red .ui-slider-handle").unbind('keydown');

  jQuery("#slider_green").slider({
    slide : volumeslicingZ
  });
  jQuery("#slider_green .ui-slider-handle").unbind('keydown');

  function volumeslicingX(event, ui) {

    if ( !volume ) {
      return;
    }

    volume.indexX = Math.floor($('#slider_yellow').slider("option", "value"));

  }

  function volumeslicingY(event, ui) {

    if ( !volume ) {
      return;
    }

    volume.indexY = Math.floor($('#slider_red').slider("option", "value"));

  }

  function volumeslicingZ(event, ui) {

    if ( !volume ) {
      return;
    }

    volume.indexZ = Math.floor($('#slider_green').slider("option", "value"));

  }  
  
  $('#slickQuiz').slickQuiz();
  
}

