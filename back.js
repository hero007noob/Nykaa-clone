function sortData(event) {
  let items = document.getElementsByClassName("Bc1-list-items1");
  if (event.target.classList.contains("checked")) {
    event.target.classList.remove("checked");
    return;
  }
  for (const item of items) {
    item.classList.remove("checked");
  }
  event.target.classList.add("checked");
  let query = event.target.querySelector(".Bc1-item-text").textContent;

  if (query == " Popularity") {
    let filterData = faceData.filter(function (item) {
      if (item.Keywords) return item.Keywords.startsWith("BESTSELLER");
      return 0;
    });
    filterData.reverse;
    display(filterData);
    display(faceData, true);
  }
  if (query == " Discount") {
    let filterData = faceData.filter(function (item) {
      if (item.discount_percentage) return item;
      return 0;
    });
    filterData.sort(function (a, b) {
      if (a.discount_percentage && b.discount_percentage) {
        let x = a.discount_percentage.slice(0, 2);
        let y = b.discount_percentage.slice(0, 2);
        return Number(y) - Number(x);
      }
      return 1;
    });
    display(filterData);
    display(faceData, true);
  }
  if (query == " Name") {
    faceData.sort(function (a, b) {
      if (a.name < b.name) return -1;
      return 1;
    });
    display(faceData);
  }
  if (query == " Customer Top Rated") {
    faceData.sort(function (a, b) {
      if (a.reviews && b.reviews) {
        let x = a.reviews;
        let y = b.reviews;
        return Number(y) - Number(x);
      }
      return 1;
    });
    display(faceData);
  }
  if (query == " New Arrival") {
    let filterData = faceData.filter(function (item) {
      if (item.Keywords) return item.Keywords.startsWith("NEW");
      return 0;
    });
    display(filterData);
    display(faceData, true);
  }
  console.log(query);
}

window.addEventListener("scroll", function () {
  console.log(this.window.scroll);
  var top = window.pageYOffset || document.documentElement.scrollTop,
    left = window.pageXOffset || document.documentElement.scrollLeft;
  console.log("top", top);
  console.log("left", left);
  // var nav2 = document.querySelector("#nav2");
  // nav2.classList.toggle("sticky", window.scrollY > 0);
});
