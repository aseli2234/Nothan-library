function openAuth() {
    document.getElementById("authModal").style.display = "flex";
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }

  function copyPassword(id) {
    const pw = document.getElementById(id).textContent;
    navigator.clipboard.writeText(pw).then(() => {
      const notif = document.getElementById("notif");
      notif.style.display = "block";
      notif.textContent = "Password berhasil disalin: " + pw;
      notif.style.animation = "none";
      void notif.offsetWidth;
      notif.style.animation = "fadeInOut 3s ease-in-out forwards";
      setTimeout(() => {
        notif.style.display = "none";
      }, 3000);
    });
  }

  const namespace = "ets2byhan-library";
  const totalKey = "visitor-total";
  const todayKey = "visitor-" + new Date().toISOString().slice(0, 10);

  fetch(`https://api.countapi.xyz/hit/${namespace}/${totalKey}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("totalVisitors").textContent = data.value;
    });

  fetch(`https://api.countapi.xyz/hit/${namespace}/${todayKey}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("dailyVisitors").textContent = data.value;
    });

    function showContact() {
        document.getElementById("contactModal").style.display = "flex";
      }
      
      function closeModal(id) {
        document.getElementById(id).style.display = "none";
      }
      
      function filterFiles() {
        const input = document.getElementById("searchInput").value.toLowerCase();
        const cards = document.querySelectorAll(".file-card");
      
        cards.forEach(card => {
          const title = card.querySelector("h3").textContent.toLowerCase();
          const group = card.querySelector("p").textContent.toLowerCase();
          const description = card.textContent.toLowerCase();
      
          if (title.includes(input) || group.includes(input) || description.includes(input)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      }

      function toggleSidebar() {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("closed");
      }

      function toggleSidebar() {
        const sidebar = document.getElementById("sidebar");
        const main = document.getElementById("mainArea");
      
        sidebar.classList.toggle("closed");
      
        if (sidebar.classList.contains("closed")) {
          main.classList.add("full");
        } else {
          main.classList.remove("full");
        }
      }

      document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      
      document.querySelector('a[href="#filelist"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("filelist").scrollIntoView({ behavior: 'smooth' });
      });

