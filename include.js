

//  ! This will be used to include the page content.html
fetch("./content.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("geebrain").innerHTML = data;
  });