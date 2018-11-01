let id;

! function () {
  let duration = 5;

  function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code');
    let styleTag = document.querySelector('#styleTag');

    let n = 0;

    id = setTimeout(function run() {
      n += 1;
      container.innerHTML = code.substring(0, n);
      styleTag.innerHTML = code.substring(0, n);

      container.scrollTop = container.scrollHeight;

      if (n < code.length) {
        id = setTimeout(run, duration);
      } else {
        fn && fn.call();
      }
    }, duration);
  }

  $('.actions').on('click', 'button', function (event) {
    let container = $('#code');
    let styleTag = $('#styleTag');

    let $button = $(event.currentTarget); // Button
    let speed = $button.attr('data-speed');

    $button.addClass('active')
      .siblings('.active').removeClass('active');

    switch (speed) {
      case 'slow':
        duration = 50;
        break;
      case 'medium':
        duratoin = 10;
        break;
      case 'fast':
        duration = 5;
        break;
      case 'skip':
        // Stop typing
        window.clearTimeout(id);
        // Set codes to tag
        container.html(code);
        styleTag.html(code);
        break;
      default:
        break;
    }
  })

let code = `
/*
 * Prepare Pikachu
 */
.preview {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FEE433;
}

.wrapper {
  width: 100%;
  height: 165px;
  position: relative;
}

.wrapper > *:not(:last-child) {
  z-index: 1;
}

/*
 * Then, draw Pikchu's nose
 */
.nose {
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 12px;
  border-color: black transparent transparent;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 28px;
  margin-left: -12px;
}

.nose:hover {
  animation: wave .5s;
}

/*
 * Then, draw Pikchu's eyes
 */
.eye {
  width: 49px;
  height: 49px;
  background: #2E2E2E;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #000;
}

.eye::before {
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background: white;
  position: absolute;
  border-radius: 50%;
  left: 6px;
  top: -1px;
  border: 2px solid #000;
}

/*
 * Left eye is on the left
 */
.eye.left {
  right: 50%;
  margin-right: 90px;
}

/*
 * Right eye is on the right
 */
.eye.right {
  left: 50%;
  margin-left: 90px;
}

/*
 * Draw cheeks for Pikachu
 */
.face {
  width: 68px;
  height: 68px;
  background: #FC0D1C;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 85px;
}

/*
 * Left cheek is on the left
 */
.face.left {
  right: 50%;
  margin-right: 116px;
}

/*
 * Right cheek is on the right
 */
.face.right {
  left: 50%;
  margin-left: 116px;
}

/*
 * Move upper lip on the top
 */
.upperLip {
  height: 25px;
  width: 80px;
  border: 2px solid black;
  border-top: none;
  position: absolute;
  top:48px;
  background: #FEE433;
}

.upperLip.left {
  right: 50%;
  border-bottom-left-radius: 40px 25px;
  border-right: none;
  transform: rotate(-20deg);
}

.upperLip.right {
  left: 50%;
  border-bottom-right-radius: 40px 25px;
  border-left: none;
  transform: rotate(20deg);
}

/*
 * Move lower lip on the bottom
 */
.lowerLip-wrapper {
  margin-left: -150px;
  bottom: -20px;
  left: 50%;
  position: absolute;
  height: 130px;
  width: 300px;
  overflow: hidden;
}

.lowerLip {
  position: absolute;
  bottom: 0;
  width: 300px;
  height: 3500px;
  background: #990513;
  border-radius: 200px/2000px;
  border: 2px solid black;
  overflow: hidden;
}

/*
 * Draw a tongue
 */
.lowerLip::after {
  content: '';
  position: absolute;
  bottom: -10px;
  width: 100px;
  height: 100px;
  background: #FC4A62;
  left: 50%;
  margin-left: -50px;
  border-radius: 50px;
}

/*
 * Pikachu is done.
 */
`

  writeCode('', code)
}.call();