$(document).ready(function() {
  const modal = $('#myModal');
  const images = $(".imgs");
  const modalContent = $(".modalContent");
  const imgElement = $('<img>');
  const leftArrow = $(".arrowLeft");
  const rightArrow = $(".arrowRight");
  $.each(images, function(index, value) {
    const el = images[index];
    $(el).on('click', function(e) {
      imgElement.addClass("imgs");
      imgElement.attr({src: `${this.src}`, value: `${$(this).attr("value")}`});
        $(modalContent).append($(imgElement));
        $(modal).css({display: "block"});
    })
  });
  $(leftArrow).on("click", function(event) {
    let v = parseInt(imgElement.attr("value"));
    if (v === 0) {
      imgElement.attr({src: `${images[images.length - 1].src}`, value: `${(images.length - 1).toString()}`});
    } else if(v > 0 && v <= images.length - 1) {
      imgElement.attr({src: `${images[v - 1].src}`,value: `${(v - 1).toString()}`})
    }
    event.stopPropagation();
  })
  $(rightArrow).on("click", function(event) {
    let v = parseInt(imgElement.attr("value"));
    if (v === images.length - 1) {
      imgElement.attr({src: `${images[0].src}`,value: `${(0).toString()}`})
    } else if ((v >= 0 && v < images.length - 1)) {
      imgElement.attr({src: `${images[v+1].src}`,value: `${(v+1).toString()}`})
    }
    event.stopPropagation();
  })
  $(modal).on("click", function(e) {
    $(modal).css({display: "none"});
    $(modalContent).remove($(imgElement));
  })
});