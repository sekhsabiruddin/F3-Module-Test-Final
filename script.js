fetch("https://www.googleapis.com/books/v1/volumes?q=percy+jackson")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    console.log(data.length);
    let container = document.getElementById("container");
    for (let i = 0; i < 9; i++) {
      let movieBox = document.createElement("div");
      movieBox.setAttribute("class", "movie-box");
      // let imgBox = document.getElementById("imgBox");
      let imgBox = document.createElement("div");
      let dynamicImg = document.createElement("img");
      dynamicImg.setAttribute(
        "src",
        data.items[i].volumeInfo.imageLinks.smallThumbnail
      );

      imgBox.setAttribute("class", "img-box");

      imgBox.append(dynamicImg);

      let contentBox = document.createElement("div");
      contentBox.setAttribute("class", "title");
      let title = document.createElement("span");
      let price = document.createElement("span");
      title.innerHTML = "Title : ";
      price.innerHTML = data.items[i].volumeInfo.title;
      contentBox.append(title);
      contentBox.append(price);

      let Author = document.createElement("div");
      contentBox.setAttribute("class", "Author");
      let AuthorTitle = document.createElement("span");
      let AuthorName = document.createElement("span");
      AuthorTitle.innerHTML = "Author : ";
      AuthorName.innerHTML = data.items[i].volumeInfo.authors[0];
      Author.append(AuthorTitle);
      Author.append(AuthorName);

      let pagecounter = document.createElement("div");
      pagecounter.setAttribute("class", "page-counter");
      let pagecounterTitle = document.createElement("span");
      let amuntOfPage = document.createElement("span");
      pagecounterTitle.innerHTML = "Page counter : ";
      amuntOfPage.innerHTML = data.items[i].volumeInfo.pageCount;
      pagecounter.append(pagecounterTitle);
      pagecounter.append(amuntOfPage);

      let publisher = document.createElement("div");
      publisher.setAttribute("class", "publisher");
      let publisherTitle = document.createElement("span");
      let publisherName = document.createElement("span");
      publisherTitle.innerHTML = "Publisher : ";
      publisherName.innerHTML = data.items[i].volumeInfo.publisher;
      publisher.append(publisherTitle);
      publisher.append(publisherName);

      let buttonDiv = document.createElement("div");
      buttonDiv.setAttribute("class", "button");
      let button = document.createElement("button");
      button.innerHTML = "Buy Now";
      buttonDiv.append(button);
      movieBox.append(imgBox);
      movieBox.append(contentBox);
      movieBox.append(Author);
      movieBox.append(pagecounter);
      movieBox.append(publisher);
      movieBox.append(buttonDiv);

      container.append(movieBox);
    }
  });
let arr = [];
function searchFunc() {
  let filter = document.getElementById("searchItem").value.toUpperCase();
  let currentDate = new Date().toJSON().slice(0, 10);
  var time = new Date();

  var currTime = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  let obj = {
    searchbkTitle: filter,
    date: currentDate,
    time: currTime,
  };

  let temp = JSON.parse(localStorage.getItem("searchbook"));
  console.log(temp);
  if (temp) {
    arr = [...temp];
  }
  arr.push(obj);
  localStorage.setItem("searchbook", JSON.stringify(arr));

  let authorsLen = document.querySelectorAll(".Author").length;
  console.log("search value is" + filter);
  for (let i = 0; i < authorsLen; i++) {
    let bookTile = document
      .querySelectorAll(".Author")
      [i].firstChild.nextSibling.innerHTML.toUpperCase();
    console.log("Book tile is " + bookTile);
    document.querySelectorAll(".Author")[i].parentNode;
    let AuthorName = "Rick Riordan";
    AuthorName = AuthorName.toLocaleUpperCase();
    if (bookTile.includes(filter)) {
      document.querySelectorAll(".Author")[i].parentNode.style.display =
        "block";
    } else {
      document.querySelectorAll(".Author")[i].parentNode.style.display = "none";
    }
  }
}
