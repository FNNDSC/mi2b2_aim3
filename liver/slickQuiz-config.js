// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
  "info" : {
    "name" : "3D Exploration of Liver Segments",
    "main" : "<p>The liver dataset is a contrast-enhanced CT abdominal scan of a healthy 36 year-old male.</p>",
    "results" : "<strong>Credits</strong><p>This training set is based on Sonia Pujol's and Kitt Shaffer's excellent 3D Slicer tutorial \"3D VISUALIZATION OF DICOM IMAGES FOR RADIOLOGICAL APPLICATIONS\".<br><br><a href=\"http://www.slicer.org/slicerWiki/index.php/Documentation/4.2/Training#Slicer4_3D_Visualization_of_DICOM_images_for_Radiology_Applications\" target=_blank>Liver tutorial dataset and slides</a></p>",
    "level1" : "Liver King!",
    "level2" : "Room for improvement..",
    "level3" : "Stay in school, kid...",
    "level4" : "Stay in school, kid...",
    "level5" : "Stay in school, kid..."// no comma here
  },
  "questions" : [
      { // Question 1
        "q" : "What organ abuts the left-most margin of segment II in this patient?",
        "c" : "q1_callback()",
        "a" : [ {
          "option" : "Lung",
          "correct" : false
        }, {
          "option" : "Kidney",
          "correct" : false
        }, {
          "option" : "Stomach",
          "correct" : true
        }, {
          "option" : "Pancreas",
          "correct" : false
        } // no comma here
        ],
        "correct" : "<p><span>That's right!</span> It's the <strong>Stomach</strong>!</p>",
        "incorrect" : "<p><span>Uhh no.</span> This was wrong - it is the <strong>Stomach</strong></p>" // no
      // comma
      // here
      },
      { // Question 2
        "q" : "Which segment would most likely be affected by an aggressive tumor invading locally from the right adrenal gland?",
        "c" : "q2_callback()",
        "a" : [ {
          "option" : "Picking",
          "html" : "<br><span style='color:aqua'><b>Please hover over a segment!</b></span><br><br><span class='scene_picker'></span>",
          "check" : "scene_picking_check()",
          "correct": "LiverSegment_VIII"
        }],
        "correct" : "<p><span>Holy bananas!</span> I didn't actually expect you to know that! LiverSegment_VIII, Correct!</p>",
        "incorrect" : "<p><span>Fail.</span> Sorry. You lose. It actually is <strong>LiverSegment_VIII</strong>.</p>" // no
      // comma
      // here
      },
      { // Question 3
        "q" : "Which vessel separates <strong>Segment IVb</strong> and <strong>Segment V</strong>?",
        "c" : "q3_callback()",        
        "a" : [ {
          "option" : "Picking",
          "html" : "<br><span style='color:aqua'><b>Please hover over a vessel!</b></span><br><br><span class='scene_picker'></span>",
          "check" : "scene_picking_check()",
          "correct": "MiddleHepaticVein_and_Branches"
        } // no comma here
        ],
        "correct" : "<p><span>Nice!</span> It is indeed the <strong>Middle Hepatic Vein</strong>.</p>",
        "incorrect" : "<p><span>No.</span> The answer is the <strong>Middle Hepatic Vein</strong>.</p>" // no
      // comma
      // here
      }
  ]
};


function q1_callback() {

  // the intro animation

  r0.resetViewAndRender();

  var _counter = 221;
  r0.onRender = function() {
    if ( _counter == 280 ) {
      r0.onRender = function() {
      };
    } else if ( _counter == 60 ) {

      // hide the segments, show the vessels
      $('#segments').click();

    } else if ( _counter == 220 ) {

      // show the segments again
      $('#segments').click();

    } else if ( _counter > 240 && _counter < 250 ) {
      r0.camera.zoomOut(true);
    } else if ( _counter > 249 ) {
      r0.camera.rotate([ 0, -10 ]);
    } else {
      r0.camera.rotate([ 10, 0 ]);
    }
    _counter++;

  };

}

function q2_callback() {

  // activate picking
  scene_picking();

}

function q3_callback() {
  
  // hide the segments, show the vessels
  $('#segments').click();  
  $('.scene_picker').html('');
  
}
