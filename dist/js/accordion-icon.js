
$(document).ready(function () {
    $("#accordion .card .btn-link").click(function () {
        if ($(this).find("i.fa").hasClass("fa-minus")) {
            $(this).find("i.fa").removeClass("fa-minus");
            $(this).find("i.fa").addClass("fa-plus");
        }
        else if ($(this).find("i.fa").hasClass("fa-plus")) {
            $(this).find("i.fa").removeClass("fa-plus");
            $(this).find("i.fa").addClass("fa-minus");
        }

        $(this).parents(".card").siblings().find(".card-header .btn-link i.fa").removeClass("fa-minus");
        $(this).parents(".card").siblings().find(".card-header .btn-link i.fa").addClass("fa-plus");
    });
});