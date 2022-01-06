// ========== navbar responsive =============

function responsive() {
  var nav = document.getElementById("topnav");
  var icon = document.getElementById("icon");
  if (nav.className === "navbar") {
    icon.classList.remove("fa-bars")
    icon.classList.add("fa-times")
    icon.style.transition = '.5s';
    nav.className += " responsive";

  } else {
    nav.className = "navbar";
    icon.classList.add("fa-bars")
    icon.style.transition = '.5s';
  }
}

// ========== hidden section =============

function hiddenSection(){ 
  let line1 = document.getElementById('section-1')
  let line2 = document.getElementById('section-1-2')
  let arrow = document.querySelector(".btn")
  let sectionContainer = document.querySelector(".container-1")
  let select = document.getElementById("unidade")
  if (
    line1.style.display === "none" && line2.style.display === "none" &&
    icon.style.display != 'none'
   ) {
     line1.style.display = "grid";
     line1.style.gap = "0px";
     line2.style.display = "grid";
     line2.style.gap = "0px";

    arrow.style.transform = "rotate(-180deg)";
  
  } else {
    sectionContainer.style.height = "10%";
    line1.style.display = "none";
    line2.style.display = "none";

    arrow.style.transition = ".3s";
    arrow.style.transform = "rotate(0deg)";
  } 
}

function hiddenSection2(){
  var line = document.getElementById('section2')
  var arrow2 = document.querySelector(".arrow-2")
  var sectionContainer2 = document.querySelector(".container-2")

  if (line.style.display === "none") {
    sectionContainer2.style.height = "10%";

    line.style.display = "grid";

    line.style.transition = ".5s";
    
    arrow2.style.transform = "rotate(-180deg)";
  
  }else {
    sectionContainer2.style.height = "10%";
  
    line.style.display = "none";

    arrow2.style.transition = ".3s";
    arrow2.style.transform = "rotate(0deg)";
  } 
}

// ========== table order =============

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {

      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

  // ========= select image =============

  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image-select')
                .attr('src', e.target.result)
                .width(150)
                .height(150);
        };

        reader.readAsDataURL(input.files[0]);
    }
}