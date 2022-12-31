import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

$(document).ready(function(){

    $('#showemprecord').DataTable({

        "pagingType": "simple"
    });
    $('.dataTables_length').addClass('bs-select');
})