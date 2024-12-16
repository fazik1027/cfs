document.getElementById("dropdown-button").addEventListener("click", () => {
       if (document.querySelector(".dropdown-content").style.display === "none") {
           document.querySelector(".dropdown-content").style.display = "block";
       } else {
           document.querySelector(".dropdown-content").style.display = "none";
       }
    });
  