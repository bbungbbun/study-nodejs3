function fileUpload(id, name, size, url) {
  const req = {
    id: id,
    name: name,
    size:size,
    url: url,
  };
  fetch("/fileUpload2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        console.log('req',req);
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      throw new Error(`파일 업로드 중 에러 발생`);
    });
}

