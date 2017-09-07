  $( function() {
    $( "#course_start_time" ).datepicker({
      format: "dd/mm/yyyy"
      });
  } );
  $(document).ready(function(){
    $('#course_end_time').datepicker({
      format: "dd/mm/yyyy"
      });
  });
  $(document).ready(function(){
    var i;
    for (i = 0; i < 100; i++){
    $('#course_courses_subjects_attributes_'+i+'_date').datepicker({
      format: "dd/mm/yyyy"
      });
    }
  });
  