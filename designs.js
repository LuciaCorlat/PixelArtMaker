var submit = $('#submit');
const table = $('#table');

function makeGrid(height, width) {
    var height = $('#input_height').val(); //rows
    var width = $('#input_width').val(); //cols
    $('#table').html(''); //reset table
    for(var h = 0; h < height; h++) {
        $('#table').append('<tr></tr>');
        console.log("Rows have been created");
    }
    $('tr').each(function() {
        for(var w = 0; w < width; w++) {
            $(this).append('<td></td>');
            console.log("Columns")
        }
    });
};

$(document).ready(function() {
    $('#sizePicker').on('submit', function(evt){
        makeGrid();
        evt.preventDefault();
        console.log('Table is created');
    });
});

// add color on single click
$(document).ready(function() {
    $('#table').on('click', 'td', function() {
    var color = $('#colorPicker').val();
    $(this).css('background-color', color);
    console.log("Color was applied");
    });
}); 

// remove color in double click
$(document).ready(function() {
    $('#table').on('dblclick','td', function() {
        $(this).css('background-color', '');
        console.log("Color was removed");
    });
});

