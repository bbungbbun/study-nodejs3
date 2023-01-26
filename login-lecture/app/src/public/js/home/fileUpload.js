const file = document.querySelector("#file");

function fileUpload(fileUrl) {
  const req = {
    name: file.value,
    url: fileUrl,
  };
  fetch("/fileUpload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        console.log("파일이 업로드 되었습니다.");
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      throw new Error(`파일 업로드 중 에러 발생`);
    });
}
