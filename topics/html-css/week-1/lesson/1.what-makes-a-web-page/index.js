var paragraph = document.getElementById('paragraph')

paragraph.addEventListener('click', {
  handleEvent: function (event) {
    alert("Don't click on me. Please!");
  }
})