// Quill initialization
var quill = new Quill('#editor', {
    theme: 'snow' // Snow theme for a cleaner interface
});

// Form submission handling
document.querySelector('form').addEventListener('submit', function(e) {
    var content = document.querySelector('.ql-editor').innerHTML;
    document.getElementById('content').value = content;
});