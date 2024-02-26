$(document).ready(function() {
    $('.signup-link').click(function(e) {
        e.preventDefault();
        $('body').fadeOut(1000, function() {
            window.location.href = $(this).attr('href');
        });
    });
});
