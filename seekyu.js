// Global SeekYu object for section, sub-section, and popup handling
window.SeekYu = {
  showSection: function (id) {
    // Hide all sections and pages
    document.querySelectorAll('.section, .page').forEach(el => {
      el.classList.remove('active');
    });
    // Show only the selected one
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
  },

  showSubSection: function (id) {
    // Hide all sub-sections
    document.querySelectorAll('.sub-section').forEach(sub => {
      sub.classList.remove('active');
    });
    // Show selected
    const sub = document.getElementById(id);
    if (sub) sub.classList.add('active');
  },

  showPopup: function (type) {
    const popup = document.getElementById(`${type}Popup`);
    if (popup) popup.style.display = 'flex';
  },

  hidePopup: function (type) {
    const popup = document.getElementById(`${type}Popup`);
    if (popup) popup.style.display = 'none';
  }
};

// Make it available as App for other pages
window.App = {
  showSection: SeekYu.showSection,
  showSubSection: SeekYu.showSubSection,
  showPopup: SeekYu.showPopup,
  hidePopup: SeekYu.hidePopup
};

// Close popup if clicking outside the content
window.addEventListener('click', function (e) {
  document.querySelectorAll('.popup').forEach(popup => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
});

// OPTIONAL: Set a default section on page load
document.addEventListener("DOMContentLoaded", function () {
  SeekYu.showSection('dashboard'); // Change to your default section ID
});

// Leave Requests Search Filter
  const leaveSearch = document.getElementById('leaveSearch');
  const leaveTable = document.getElementById('leaveTable').getElementsByTagName('tbody')[0];

  leaveSearch.addEventListener('keyup', function() {
    const filter = leaveSearch.value.toLowerCase();
    const rows = leaveTable.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
      let rowText = rows[i].innerText.toLowerCase();
      rows[i].style.display = rowText.includes(filter) ? '' : 'none';
    }
  });

  // Incident Report Search
document.getElementById("incidentSearch").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  document.querySelectorAll(".incident-table tbody tr").forEach(row => {
    let text = row.textContent.toLowerCase();
    row.style.display = text.includes(filter) ? "" : "none";
  });
});

// Modal Logic
const modal = document.getElementById("incidentModal");
const modalIncident = document.getElementById("modalIncident");
const modalDate = document.getElementById("modalDate");
const modalLocation = document.getElementById("modalLocation");
const modalDetails = document.getElementById("modalDetails");

document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    modalIncident.textContent = this.dataset.incident;
    modalDate.textContent = this.dataset.date;
    modalLocation.textContent = this.dataset.location;
    modalDetails.textContent = this.dataset.details;
    modal.style.display = "block";
  });
});

document.querySelector(".close-btn").addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) modal.style.display = "none";
});

// Recruitment Search Filter
  const recruitSearch = document.getElementById('recruitSearch');
  if (recruitSearch) {
    const recruitTable = document.getElementById('recruitTable').getElementsByTagName('tbody')[0];
    recruitSearch.addEventListener('keyup', function() {
      const filter = recruitSearch.value.toLowerCase();
      const rows = recruitTable.getElementsByTagName('tr');
      for (let i = 0; i < rows.length; i++) {
        let rowText = rows[i].innerText.toLowerCase();
        rows[i].style.display = rowText.includes(filter) ? '' : 'none';
      }
    });
  }

  // Recruitment Accept/Reject Buttons
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('accept-btn')) {
      e.target.closest('tr').querySelector('td:nth-child(7)').innerText = "Accepted";
    }
    if (e.target.classList.contains('reject-btn')) {
      e.target.closest('tr').querySelector('td:nth-child(7)').innerText = "Rejected";
    }
  });