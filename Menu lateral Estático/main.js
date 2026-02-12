// Funcion para subir archivos desde mi pc

  function uploadFiles() {
    var fileInput = document.getElementById('file-input');
    var files = fileInput.files;
    var imagePreview = document.getElementById('image-preview');
    var videoPreview = document.getElementById('video-preview');

    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var fileReader = new FileReader();
      fileReader.onload = function(event) {
        var fileURL = event.target.result;
      var filePreviewItem = document.createElement('div');
        filePreviewItem.className = 'file-preview-item';

        if (file.type.startsWith('image/')) {
          var image = document.createElement('img');
          image.src = fileURL;
          image.className = 'preview-image';
          filePreviewItem.appendChild(image);
          imagePreview.appendChild(filePreviewItem);

        } else if (file.type.startsWith('video/')) {
          var video = document.createElement('video');
          video.src = fileURL;
          video.className = 'preview-video';
          video.controls = true;
          filePreviewItem.appendChild(video);
          videoPreview.appendChild(filePreviewItem);
        }
      }
      fileReader.readAsDataURL(file);
    }
  }

// para lista de emojis
$(function() {
  window.emojiPicker = new EmojiPicker({
  emojiable_selector: '[data-emojiable=true]',
  assetsPath: 'emoji-picker-1.1.5/lib/img/',
  popupButtonClasses: 'fa fa-smile-o'
  });
  window.emojiPicker.discover();
});