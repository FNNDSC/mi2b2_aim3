$(function() {

  r0 = new X.renderer3D();
  r0.config.INTERMEDIATE_RENDERING = true;
  r0.init();

  scene = new X.mesh();
  vtkMRMLModelHierarchyNode1 = new X.mesh();
  scene.children.push(vtkMRMLModelHierarchyNode1);

  vtkMRMLModelHierarchyNode25 = new X.mesh();
  vtkMRMLModelHierarchyNode1.children.push(vtkMRMLModelHierarchyNode25);

  vtkMRMLModelNode4 = new X.mesh();
  vtkMRMLModelNode4.file = "liver/IVC.vtk";
  vtkMRMLModelNode4.color = [ 0.20000000000000001, 0.50196099999999999,
      0.80000000000000004 ];
  vtkMRMLModelNode4.opacity = 1.0;
  vtkMRMLModelNode4.visible = true;
  vtkMRMLModelNode4.caption = "IVC";
  vtkMRMLModelHierarchyNode25.children.push(vtkMRMLModelNode4);

  vtkMRMLModelNode6 = new X.mesh();
  vtkMRMLModelNode6.file = "liver/MainPortalVein.vtk";
  vtkMRMLModelNode6.color = [ 1.0, 1.0, 1.0 ];
  vtkMRMLModelNode6.opacity = 1.0;
  vtkMRMLModelNode6.visible = true;
  vtkMRMLModelNode6.caption = "MainPortalVein";
  vtkMRMLModelHierarchyNode25.children.push(vtkMRMLModelNode6);

  vtkMRMLModelNode7 = new X.mesh();
  vtkMRMLModelNode7.file = "liver/LeftHepaticVein_and_Branches.vtk";
  vtkMRMLModelNode7.color = [ 0.40000000000000002, 0.70196099999999995, 1.0 ];
  vtkMRMLModelNode7.opacity = 1.0;
  vtkMRMLModelNode7.visible = true;
  vtkMRMLModelNode7.caption = "LeftHepaticVein_and_Branches";
  vtkMRMLModelHierarchyNode25.children.push(vtkMRMLModelNode7);

  vtkMRMLModelNode8 = new X.mesh();
  vtkMRMLModelNode8.file = "liver/MiddleHepaticVein_and_branches.vtk";
  vtkMRMLModelNode8.color = [ 0.90196100000000001, 0.50196099999999999,
      0.50196099999999999 ];
  vtkMRMLModelNode8.opacity = 1.0;
  vtkMRMLModelNode8.visible = true;
  vtkMRMLModelNode8.caption = "MiddleHepaticVein_and_Branches";
  vtkMRMLModelHierarchyNode25.children.push(vtkMRMLModelNode8);

  vtkMRMLModelNode9 = new X.mesh();
  vtkMRMLModelNode9.file = "liver/RightHepaticVein_and_Branches.vtk";
  vtkMRMLModelNode9.color = [ 0.50196099999999999, 0.90196100000000001,
      0.50196099999999999 ];
  vtkMRMLModelNode9.opacity = 1.0;
  vtkMRMLModelNode9.visible = true;
  vtkMRMLModelNode9.caption = "RightHepaticVein_and_Branches";
  vtkMRMLModelHierarchyNode25.children.push(vtkMRMLModelNode9);

  vtkMRMLModelNode10 = new X.mesh();
  vtkMRMLModelNode10.file = "liver/LeftPortalVein_and_Branches.vtk";
  vtkMRMLModelNode10.color = [ 0.50196099999999999, 0.90196100000000001,
      0.90196100000000001 ];
  vtkMRMLModelNode10.opacity = 1.0;
  vtkMRMLModelNode10.visible = true;
  vtkMRMLModelNode10.caption = "LeftPortalVein_and_Branches";
  vtkMRMLModelHierarchyNode25.children.push(vtkMRMLModelNode10);

  vtkMRMLModelNode11 = new X.mesh();
  vtkMRMLModelNode11.file = "liver/RightPortalVein_and_Branches.vtk";
  vtkMRMLModelNode11.color = [ 0.90196100000000001, 0.90196100000000001,
      0.50196099999999999 ];
  vtkMRMLModelNode11.opacity = 1.0;
  vtkMRMLModelNode11.visible = true;
  vtkMRMLModelNode11.caption = "RightPortalVein_and_Branches";
  vtkMRMLModelHierarchyNode25.children.push(vtkMRMLModelNode11);

  vtkMRMLModelNode20 = new X.mesh();
  vtkMRMLModelNode20.file = "liver/CaudateVeins.vtk";
  vtkMRMLModelNode20.color = [ 1.0, 0.80000000000000004, 0.70196099999999995 ];
  vtkMRMLModelNode20.opacity = 1.0;
  vtkMRMLModelNode20.visible = true;
  vtkMRMLModelNode20.caption = "CaudateVeins";
  vtkMRMLModelHierarchyNode25.children.push(vtkMRMLModelNode20);

  vtkMRMLModelHierarchyNode26 = new X.mesh();
  vtkMRMLModelHierarchyNode1.children.push(vtkMRMLModelHierarchyNode26);

  vtkMRMLModelNode17 = new X.mesh();
  vtkMRMLModelNode17.file = "liver/LiverSegment_I.vtk";
  vtkMRMLModelNode17.color = [ 0.80000000000000004, 0.80000000000000004,
      0.20000000000000001 ];
  vtkMRMLModelNode17.opacity = 1.0;
  vtkMRMLModelNode17.visible = true;
  vtkMRMLModelNode17.caption = "LiverSegment_I";
  vtkMRMLModelHierarchyNode26.children.push(vtkMRMLModelNode17);

  vtkMRMLModelNode12 = new X.mesh();
  vtkMRMLModelNode12.file = "liver/LiverSegment_II.vtk";
  vtkMRMLModelNode12.color = [ 0.90196100000000001, 0.70196099999999995,
      0.90196100000000001 ];
  vtkMRMLModelNode12.opacity = 1.0;
  vtkMRMLModelNode12.visible = true;
  vtkMRMLModelNode12.caption = "LiverSegment_II";
  vtkMRMLModelHierarchyNode26.children.push(vtkMRMLModelNode12);

  vtkMRMLModelNode13 = new X.mesh();
  vtkMRMLModelNode13.file = "liver/LiverSegment_III.vtk";
  vtkMRMLModelNode13.color = [ 0.90196100000000001, 0.90196100000000001,
      0.50196099999999999 ];
  vtkMRMLModelNode13.opacity = 1.0;
  vtkMRMLModelNode13.visible = true;
  vtkMRMLModelNode13.caption = "LiverSegment_III";
  vtkMRMLModelHierarchyNode26.children.push(vtkMRMLModelNode13);

  vtkMRMLModelNode14 = new X.mesh();
  vtkMRMLModelNode14.file = "liver/LiverSegment_IVa.vtk";
  vtkMRMLModelNode14.color = [ 0.50196099999999999, 0.20000000000000001,
      0.80000000000000004 ];
  vtkMRMLModelNode14.opacity = 1.0;
  vtkMRMLModelNode14.visible = true;
  vtkMRMLModelNode14.caption = "LiverSegment_IVa";
  vtkMRMLModelHierarchyNode26.children.push(vtkMRMLModelNode14);

  vtkMRMLModelNode16 = new X.mesh();
  vtkMRMLModelNode16.file = "liver/LiverSegment_IVb.vtk";
  vtkMRMLModelNode16.color = [ 0.20000000000000001, 0.20000000000000001,
      0.80000000000000004 ];
  vtkMRMLModelNode16.opacity = 1.0;
  vtkMRMLModelNode16.visible = true;
  vtkMRMLModelNode16.caption = "LiverSegment_IVb";
  vtkMRMLModelHierarchyNode26.children.push(vtkMRMLModelNode16);

  vtkMRMLModelNode18 = new X.mesh();
  vtkMRMLModelNode18.file = "liver/LiverSegmentV.vtk";
  vtkMRMLModelNode18.color = [ 0.80000000000000004, 0.20000000000000001,
      0.50196099999999999 ];
  vtkMRMLModelNode18.opacity = 1.0;
  vtkMRMLModelNode18.visible = true;
  vtkMRMLModelNode18.caption = "LiverSegment_V";
  vtkMRMLModelHierarchyNode26.children.push(vtkMRMLModelNode18);

  vtkMRMLModelNode19 = new X.mesh();
  vtkMRMLModelNode19.file = "liver/LiverSegmentVI.vtk";
  vtkMRMLModelNode19.color = [ 0.20000000000000001, 0.80000000000000004,
      0.50196099999999999 ];
  vtkMRMLModelNode19.opacity = 1.0;
  vtkMRMLModelNode19.visible = true;
  vtkMRMLModelNode19.caption = "LiverSegment_VI";
  vtkMRMLModelHierarchyNode26.children.push(vtkMRMLModelNode19);

  vtkMRMLModelNode5 = new X.mesh();
  vtkMRMLModelNode5.file = "liver/LiverSegmentVII.vtk";
  vtkMRMLModelNode5.color = [ 0.50196099999999999, 0.80000000000000004,
      0.20000000000000001 ];
  vtkMRMLModelNode5.opacity = 1.0;
  vtkMRMLModelNode5.visible = true;
  vtkMRMLModelNode5.caption = "LiverSegment_VII";
  vtkMRMLModelHierarchyNode26.children.push(vtkMRMLModelNode5);

  vtkMRMLModelNode23 = new X.mesh();
  vtkMRMLModelNode23.file = "liver/LiverSegment_VIII.vtk";
  vtkMRMLModelNode23.color = [ 0.80000000000000004, 0.50196099999999999,
      0.20000000000000001 ];
  vtkMRMLModelNode23.opacity = 1.0;
  vtkMRMLModelNode23.visible = true;
  vtkMRMLModelNode23.caption = "LiverSegment_VIII";
  vtkMRMLModelHierarchyNode26.children.push(vtkMRMLModelNode23);

  volume = new X.volume();
  volume.file = 'liver/volume.nii.gz';

  // transform to correct space
  for (c in scene.children[0].children[0].children) {
    var _t = scene.children[0].children[0].children[c].transform;
    _t.flipX();
    _t.flipY();
  }
  for (c in scene.children[0].children[1].children) {
    var _t = scene.children[0].children[1].children[c].transform;
    _t.flipX();
    _t.flipY();
  }

  r0.add(scene);

  r0.add(volume);

  r0.camera.position = [ 0, 400, 0 ];
  r0.render();

  r0.onShowtime = function() {

    // run the loading_completed function to create the UI (ui.utils.js)
    loading_completed();

    // adjust window/level
    volume.windowLow = 230;
  };

});

function create_tree_data() {

  tree_data = [
      {
        label : '<button id="vessels" onClick="toggle_visibility(this, vtkMRMLModelHierarchyNode25)"><img src="gfx/show.png"></button> Vessels',
        children : []
      },
      {
        label : '<button id="segments" onClick="toggle_visibility(this, vtkMRMLModelHierarchyNode26)"><img src="gfx/show.png"></button> Segments',
        children : []
      },
      {
        label : '<button><img src="gfx/show.png"></button> CT Volume',
        children : []
      } ];

  // add the vessels and the segments
  for ( var k = 0; k < 2; k++) {
    for (c in scene.children[0].children[k].children) {
      c = scene.children[0].children[k].children[c];
      var _color = c.color.slice();
      _color[0] = parseInt(_color[0] * 255, 10);
      _color[1] = parseInt(_color[1] * 255, 10);
      _color[2] = parseInt(_color[2] * 255, 10);

      tree_data[k].children.push('<button id="' + c.caption
          + '" onClick="toggle_visibility(this, r0.get(' + c.id
          + '))"><img src="gfx/show.png"></button> '
          + '<span style="color:rgb(' + _color + ')">' + c.caption + '</span>');
    }
  }
  
  // add the volume
  tree_data[2].children
      .push('<div id="slider_red" class="slider" style="width:160px"></div>');
  tree_data[2].children
      .push('<div id="slider_green" class="slider" style="width:160px"></div>');
  tree_data[2].children
      .push('<div id="slider_yellow" class="slider" style="width:160px"></div>');
  

}
