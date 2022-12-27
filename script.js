function fileCheck(ev) {
    let files = ev.target.files;
    if (files.length > 3) return alert("max upload is 3");

    for (let i = 0; i < files.length; i++) {
      let file = new FileReader();
      file.readAsDataURL(files[i]);

      file.onloadend = (ev2) => {
        document.body.innerHTML += `
    <img src=${ev2.currentTarget.result} width="200" height="200">
    `;
      };
    }
  }
