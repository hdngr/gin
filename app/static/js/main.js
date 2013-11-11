function reload() {
    var form = document.getElementsByTagName('form')[0];
    var name = document.getElementById('text').value;
    var url = document.URL.replace('?','') + name;
    window.location = url;
}

