var objectId;
window.onload = function(){
    getParams()
};
function getParams() {
    const urlParams = new URLSearchParams(window.location.search);
    objectId = urlParams.get('objectId')
    fetchData(objectId)    
}

function fetchData(objectId)
 {
    if(objectId) 
    {
        $.ajax({
            url: `https://soundcast.back4app.io/classes/songs_library/${objectId}`,       
            type: "GET",
            dataType: "json",
            beforeSend: function(request) 
            {
              request.setRequestHeader("X-Parse-Application-Id","VSPdpDKRMND382hqIRFIaiVLgbkhM0E1rL32l1SQ");
              request.setRequestHeader("X-Parse-REST-API-Key","E4ZeObhQv3XoHaQ3Q6baHGgbDPOkuO9jPlY9gzgA");
            },
            success: function(response) 
            {
                render(response)
            }
          });
    }
}
function render(obj) {
    $('#thumbnail').append(`<img src=${obj.thumbnail}>`)
    $('audio').append(`<source src=${obj.link} type="audio/mpeg">`)
}

function play(){
    $('audio')[0].play()
}
function pause(){
    $('audio')[0].pause()
}