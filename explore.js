window.onload = () => {
    fetchRequest()
}
function fetchRequest()
 {
    $.ajax({
        type: "GET",
        dataType: "text",
        beforeSend: function(request) {
          request.setRequestHeader("X-Parse-Application-Id","VSPdpDKRMND382hqIRFIaiVLgbkhM0E1rL32l1SQ");
          request.setRequestHeader("X-Parse-REST-API-Key","E4ZeObhQv3XoHaQ3Q6baHGgbDPOkuO9jPlY9gzgA");
        },
        url: "https://soundcast.back4app.io/classes/songs_library",		  
        processData: true,
        success: function(response) {
            render(JSON.parse(response))
        }
      });
}
function render(values) {
 let root = $('#root')
 values.results.forEach((song, index) => {
 $(root).append(
     `<table class="s">
        <tr>
            <td class="style1" 
                style="border: 1px solid black;
                text-align: center;">
                <img src=${song.thumbnail} 
                height=auto
                width=auto
                <span> <a href = "musicplayer.html?objectId=${song.objectId}" id=${index} href=${song.link}>${song.title}</a></span>
            </td>
            
        </tr>
    </table>
    <br>`)
 })
}