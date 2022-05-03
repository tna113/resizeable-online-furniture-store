$(function() {
    $(".r").resizable({
        containment: '.card'
    });
});

//array of furniture items
furnitureCaption = ['chair', 'plant', 'table'];

//dynamically create furniture cards on load
function init() {

    //get the element we are appending to
    var container = document.querySelector('.container');

    furnitureCaption.forEach((cap, i) => {
        //create the element we are appending
        var card = document.createElement('div');
        card.className = "ui-widget-content card";

        var cardDetail = document.createElement('div');
        cardDetail.className = "ui-state-active r";

        //set the background image based on picture url  array
        cardDetail.style.backgroundImage = "URL(./img/" + cap + ".png)";
        cardDetail.style.backgroundSize = "100% 100%";

        //make the span caption based on caption array
        var spanTag = document.createElement('span');
        spanTag.innerHTML = furnitureCaption[i];

        //append and put on page
        cardDetail.append(spanTag);
        card.append(cardDetail);
        container.append(card);
    });
}