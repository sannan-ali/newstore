$(document).ready(function() {
    $('.fade-in').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $('body').fadeOut(1000, function() {
            window.location.href = href;
        });
    });
});
