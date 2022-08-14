// const mjrA = document.getElementById('major-arcana-sidebar')
// const mnrA = document.getElementById('minor-arcana-sidebar')

$('#major-arcana-sidebar').click(function () {
  $('#major-arcana-sidebar-links').slideToggle('slow', function () {
    // Animation complete.
  })
})

$('#minor-arcana-sidebar').click(function () {
  $('#minor-arcana-sidebar-links').slideToggle(function () {
    // Animation complete.
  })
})

$('#cups-link').click(function () {
  $('#cups-drop-down').slideToggle('slow', function () {
    // Animation complete.
  })
})

$('#wands-link').click(function () {
  $('#wands-drop-down').slideToggle('slow', function () {
    // Animation complete.
  })
})

$('#pentacles-link').click(function () {
  $('#pentacles-drop-down').slideToggle('slow', function () {
    // Animation complete.
  })
})

$('#swords-link').click(function () {
  $('#swords-drop-down').slideToggle('slow', function () {
    // Animation complete.
  })
})

function myFunction(x) {
  x.classList.toggle('change')
  $('#side-bar').slideToggle(function () {
    // Animation complete.
  })
}

// mnrA.addEventListener('click', function () {
//   const arcana = 'minor-arcana-sidebar-links'
//   if (document.getElementById(arcana).style.display == 'none') {
//     document.getElementById(arcana).style.display = 'contents'
//   } else {
//     document.getElementById(arcana).style.display = 'none'
//   }
// })
