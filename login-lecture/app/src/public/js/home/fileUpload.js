const conFile = document.querySelector('.con-input-file')
const img1 = document.querySelector('.img-1')
const img2 = document.querySelector('.img-2')
const img3 = document.querySelector('.img-3')
const imgFile = document.querySelector('.bg')
const input = document.querySelector('.input')
let one = false

function dropHandler(evt) {
  console.log('File(s) dropped');
  conFile.classList.remove('drop')
}

function dragOverHandler(evt) {
  conFile.classList.add('drop')
  evt.preventDefault();
}

function dragLeave(evt) {
  conFile.classList.remove('drop')
}

function dragEnter(evt) {
  conFile.classList.add('drop')
}

function processFile (event) {
  function getBase64 (file) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      imgFile.src = reader.result
      conFile.classList.add('hasFile')
    }
  }

  const file = event.target.files[0]
  getBase64(file)
}

function handleClickRemove() {
  conFile.classList.remove('hasFile')
  setTimeout(() => {
    imgFile.src = ''
  }, 250);
  input.type = 'text'
  input.type = 'file'
}