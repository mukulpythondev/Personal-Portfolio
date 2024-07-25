document.querySelector(".btn").addEventListener("click", function () {
  var cvUrl = './Mukul Resume.pdf';
  var link = document.createElement("a");
  link.href = cvUrl;
  link.download = "Mukul-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
