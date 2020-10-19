$('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

function hideHeader(){
    $("#head1").fadeOut(1000);
    $("#head2").fadeIn(1000, function(){
        $("#head2").fadeOut(1000);
        $("#head3").fadeIn(1000 , function(){
            $("#head2").fadeOut(1000);
            $("#head3").fadeOut(1000);
            $("#head1").fadeIn(1000);
        });
    });
}
setInterval("hideHeader()", 4000);

$(".projects #projects").click(function(){
    $(".projects #projects").css({backgroundColor:"#FAB703" , color:"#222"});
    $(".projects #residential").css({backgroundColor: "white", color:"#6c757d"});
    $(".projects #hospitaly").css({backgroundColor: "white", color:"#6c757d"});
    $(".projects #office").css({backgroundColor: "white", color:"#6c757d"});
    $(".projects #commercial").css({backgroundColor: "white", color:"#6c757d"});
})
$(".projects #residential").click(function(){
    $(".projects #residential").css({backgroundColor:"#FAB703" , color:"#222"});
    $(".projects #projects").css({backgroundColor:"white", color:"#6c757d"});
    $(".projects #hospitaly").css({backgroundColor:"white", color:"#6c757d"});
    $(".projects #office").css({backgroundColor:"white", color:"#6c757d"});
    $(".projects #commercial").css({backgroundColor:"white", color:"#6c757d"});   
})
$(".projects #hospitaly").click(function(){
    $(".projects #hospitaly").css({backgroundColor:"#FAB703" , color:"#222"});
    $(".projects #residential").css({backgroundColor: "white", color:"#6c757d"});
    $(".projects #projects").css({backgroundColor: "white", color:"#6c757d"});
    $(".projects #office").css({backgroundColor: "white", color:"#6c757d"});
    $(".projects #commercial").css({backgroundColor: "white", color:"#6c757d"});
})
$(".projects #office").click(function(){
    $(".projects #office").css({backgroundColor:"#FAB703" , color:"#222"});
    $(".projects #residential").css({backgroundColor: "white", color:"#6c757d"});
    $(".projects #projects").css({backgroundColor: "white", color:"#6c757d"});
    $(".projects #hospitaly").css({backgroundColor: "white", color:"#6c757d"});
    $(".projects #commercial").css({backgroundColor: "white", color:"#6c757d"});
})
$(".projects #commercial").click(function(){
    $(".projects #commercial").css({backgroundColor:"#FAB703" , color:"#222"});
    $(".projects #residential").css({backgroundColor: "white", color:"#6c757d"});
    $(".projects #projects").css({backgroundColor: "white", color:"#6c757d"});
    $(".projects #hospitaly").css({backgroundColor: "white", color:"#6c757d"});
    $(".projects #office").css({backgroundColor: "white", color:"#6c757d"});
})

var $grid = $('.grid').isotope({
    itemSelector:'.grid .col-md-4',
    percentPosition:true,
});
$('.filter-button-group').on('click', 'button', function(){
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({filter: filterValue});
});




