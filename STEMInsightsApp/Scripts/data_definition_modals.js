$(document).ready(function () {
    $(document).on('click', '.glyphicon', function (event) {
        console.log("hearing click", event.target.id);
      //  if (event.target.id === "job-category") {
          //  $('#soc-modal').modal('show');
      //  } else
        if (event.target.id === "job-title") {
            console.log(event.target.id);
            $('#soc-modal').modal('show');
            } else if (event.target.id === "ams") {
                $('#ams-modal').modal('show');
            } else if (event.target.id === "mhw") {
                $('#mhw-modal').modal('show');
            } else if (event.target.id === "eel") {
                $('#eel-modal').modal('show');
            } else if (event.target.id === "aajo") {
                $('#dd-modal').modal('show');
            } else if (event.target.id === "estimated-employment") {
                $('#estimated-employment-modal').modal('show');
            }
    })
     //  $('#job-category').click(function () {
       //    console.log("hearing click");
       // })


})