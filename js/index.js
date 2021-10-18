// let totalSlots=prompt("Enter total number of sots:");
swal("Enter total number of slots:", {
  content: "input"
}).then((value) => {
  let totalSlots;
  if (value == null || value === undefined) {
    totalSlots = 0;
  } else {
    totalSlots = value;
  }
  localStorage.setItem('totalSlots',totalSlots);
  console.log(totalSlots);
  document.getElementById("totalSlots").innerHTML = totalSlots;
  let bookedSlots = 0;
  document.getElementById("bookedSlots").innerHTML = bookedSlots;
  let remSlots = totalSlots - bookedSlots;
  document.getElementById("emptySlots").innerHTML = remSlots;
  if (remSlots == 0) {
    swal({
      title: "Parking is full!",
      icon: "warning",
      button: "Okay"
    });
  }

  $("#sub").on("click", function () {
    if (remSlots > 0) {
      bookedSlots = bookedSlots + 1;
      document.getElementById("bookedSlots").innerHTML = bookedSlots;
      remSlots = totalSlots - bookedSlots;
      document.getElementById("emptySlots").innerHTML = remSlots;
      if (remSlots == 0) {
        swal({
          title: "Parking is full!",
          icon: "warning",
          button: "Okay"
        });
      }
    } else {
      swal({
        title: "Parking is full!",
        icon: "warning",
        button: "Okay"
      });
    }
  });
  $(".exit").click(function vehicle() {
    if (bookedSlots > 0) {
      swal("Enter vehicle number: ", {
        content: "input"
      }).then((value) => {
        if (value) {
          swal({
            title: `Successfully Check Out 
                Vehicle Number ${value}
                Leaving Time: ${h}`,
            icon: "success",
            button: "Okay"
          }).then(function () {
            bookedSlots -= 1;
            remSlots += 1;
            document.getElementById("bookedSlots").innerHTML = bookedSlots;
            document.getElementById("emptySlots").innerHTML = remSlots;
          });
        } else {
          alert("Enter vehicle number");
          vehicle();
        }
      });
    } else {
      swal({
        title: "No vehicle in parking!",
        icon: "info",
        button: "Okay!"
      });
    }
  });
});

let d = new Date();
let p = d.toLocaleDateString();
$("#park_date").val(p);
if (d.getMonth() < 10) {
  $("#park_date").val(`0${p}`);
}
let h = d.toLocaleTimeString();
$("#park_time").val(h);
$(document).ready(function () {
  $(".entry").click(function () {
    $("#entryForm").show("slow");
  });
});
$(document).ready(function () {
  $(".hide").click(function () {
    $("#entryForm").hide("slow");
    $("#exitForm").hide("slow");
  });
});
