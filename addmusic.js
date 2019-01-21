function upload(){
    var value1=$("title").val();
    var value2=$("thumbnail").val();
    var value3=$("music").val();
    $.ajax({
      type: "POST",
      timeout: 50000,
      beforeSend: function(request) {
        request.setRequestHeader("X-Parse-Application-Id","VSPdpDKRMND382hqIRFIaiVLgbkhM0E1rL32l1SQ");
        request.setRequestHeader("X-Parse-REST-API-Key","E4ZeObhQv3XoHaQ3Q6baHGgbDPOkuO9jPlY9gzgA");
      },
      url: "https://soundcast.back4app.io/classes/songs_library",
      data:{
              music_file: value3,
              thumbnail: value2,
              title: value1
            },
      success: function (data) {
          alert('success');
          return false;
      }
    });
  }