$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();
        var taskName = $('#new-task').val();
        if (taskName !== '') {
            $('.task-list').append('<li>' + taskName + '</li>');
            $('#new-task').val('');
        }
    });
    
    $('.task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});  