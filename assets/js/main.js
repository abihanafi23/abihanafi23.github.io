$(document).ready(() => {
    const pictureBox = $('button1');
    const messageBox = $('footer');

    pictureBox.click(function() {
        $('html, body').animate({
            scrollTop: messageBox.offset().top
            }, 2000);
        })
    })