// ===== FREIGHT COASTALS DEMO - MAIN JS =====

// --- Demo Data ---
const demoShipments = [
  {
    id: 'FC-2026-00142',
    customer: 'Apex Electronics',
    origin: 'Shanghai, CN',
    destination: 'Los Angeles, US',
    type: 'Sea Freight',
    status: 'in-transit',
    statusLabel: 'In Transit',
    progress: 65,
    eta: 'Mar 18, 2026',
    weight: '12,400 kg',
    containers: 2,
    lat: 32.5,
    lng: -155.2,
    milestones: [
      { title: 'Order Placed', desc: 'Shipment booked by Apex Electronics', time: 'Feb 28, 2026 09:00 AM', completed: true },
      { title: 'Picked Up', desc: 'Cargo collected from warehouse, Shanghai', time: 'Mar 02, 2026 02:30 PM', completed: true },
      { title: 'Customs Cleared (Origin)', desc: 'Export customs clearance completed', time: 'Mar 03, 2026 11:00 AM', completed: true },
      { title: 'Departed Port', desc: 'Vessel MSC Aurora departed Shanghai Port', time: 'Mar 05, 2026 06:00 AM', completed: true },
      { title: 'In Transit - Pacific Ocean', desc: 'Currently crossing Pacific Ocean', time: 'Mar 11, 2026 08:00 AM', completed: false, active: true },
      { title: 'Arrive Destination Port', desc: 'Expected arrival at Port of Los Angeles', time: 'Mar 16, 2026 (Est.)', completed: false },
      { title: 'Customs Cleared (Dest)', desc: 'Import customs clearance', time: 'Mar 17, 2026 (Est.)', completed: false },
      { title: 'Delivered', desc: 'Final delivery to consignee', time: 'Mar 18, 2026 (Est.)', completed: false }
    ]
  },
  {
    id: 'FC-2026-00139',
    customer: 'NovaPharma Inc',
    origin: 'Frankfurt, DE',
    destination: 'New York, US',
    type: 'Air Freight',
    status: 'customs',
    statusLabel: 'In Customs',
    progress: 80,
    eta: 'Mar 12, 2026',
    weight: '850 kg',
    containers: 0,
    lat: 40.6413,
    lng: -73.7781,
    milestones: [
      { title: 'Order Placed', desc: 'Shipment booked', time: 'Mar 08, 2026 10:00 AM', completed: true },
      { title: 'Picked Up', desc: 'Cargo collected from Frankfurt warehouse', time: 'Mar 09, 2026 08:00 AM', completed: true },
      { title: 'Departed Airport', desc: 'Flight LH404 departed Frankfurt', time: 'Mar 10, 2026 02:00 PM', completed: true },
      { title: 'Arrived JFK Airport', desc: 'Landed at JFK International', time: 'Mar 10, 2026 05:30 PM', completed: true },
      { title: 'Customs Processing', desc: 'Currently in customs clearance', time: 'Mar 11, 2026 09:00 AM', completed: false, active: true },
      { title: 'Out for Delivery', desc: 'Final mile delivery', time: 'Mar 12, 2026 (Est.)', completed: false }
    ]
  },
  {
    id: 'FC-2026-00135',
    customer: 'GreenLeaf Foods',
    origin: 'São Paulo, BR',
    destination: 'Rotterdam, NL',
    type: 'Sea Freight',
    status: 'delivered',
    statusLabel: 'Delivered',
    progress: 100,
    eta: 'Mar 08, 2026',
    weight: '28,000 kg',
    containers: 4,
    lat: 51.9225,
    lng: 4.4792,
    milestones: [
      { title: 'Order Placed', desc: 'Shipment booked', time: 'Feb 15, 2026', completed: true },
      { title: 'Picked Up', desc: 'Cargo collected', time: 'Feb 17, 2026', completed: true },
      { title: 'Departed Port', desc: 'Vessel departed Santos Port', time: 'Feb 20, 2026', completed: true },
      { title: 'Arrived Rotterdam', desc: 'Vessel arrived at port', time: 'Mar 06, 2026', completed: true },
      { title: 'Customs Cleared', desc: 'Import clearance completed', time: 'Mar 07, 2026', completed: true },
      { title: 'Delivered', desc: 'Delivered to warehouse', time: 'Mar 08, 2026 03:00 PM', completed: true }
    ]
  },
  {
    id: 'FC-2026-00148',
    customer: 'TechVault Ltd',
    origin: 'Tokyo, JP',
    destination: 'Dubai, AE',
    type: 'Air Freight',
    status: 'pending',
    statusLabel: 'Pending Pickup',
    progress: 10,
    eta: 'Mar 15, 2026',
    weight: '2,100 kg',
    containers: 0,
    lat: 35.5494,
    lng: 139.7798,
    milestones: [
      { title: 'Order Placed', desc: 'Shipment booked by TechVault Ltd', time: 'Mar 11, 2026 07:00 AM', completed: true },
      { title: 'Awaiting Pickup', desc: 'Scheduled for pickup from Tokyo warehouse', time: 'Mar 12, 2026 (Est.)', completed: false, active: true },
      { title: 'Depart Airport', desc: 'Flight scheduled', time: 'Mar 13, 2026 (Est.)', completed: false },
      { title: 'Arrive Dubai', desc: 'Expected arrival DXB', time: 'Mar 14, 2026 (Est.)', completed: false },
      { title: 'Delivered', desc: 'Final delivery', time: 'Mar 15, 2026 (Est.)', completed: false }
    ]
  },
  {
    id: 'FC-2026-00145',
    customer: 'AutoParts Global',
    origin: 'Detroit, US',
    destination: 'Munich, DE',
    type: 'Land + Sea',
    status: 'in-transit',
    statusLabel: 'In Transit',
    progress: 45,
    eta: 'Mar 22, 2026',
    weight: '8,600 kg',
    containers: 1,
    lat: 45.0,
    lng: -30.0,
    milestones: [
      { title: 'Order Placed', desc: 'Shipment booked', time: 'Mar 03, 2026', completed: true },
      { title: 'Picked Up', desc: 'Cargo collected from Detroit', time: 'Mar 05, 2026', completed: true },
      { title: 'Trucked to Port', desc: 'Land transport to Newark Port', time: 'Mar 06, 2026', completed: true },
      { title: 'Departed Newark', desc: 'Vessel departed', time: 'Mar 08, 2026', completed: true },
      { title: 'Atlantic Crossing', desc: 'In transit across Atlantic', time: 'Mar 11, 2026', completed: false, active: true },
      { title: 'Arrive Hamburg', desc: 'Expected port arrival', time: 'Mar 19, 2026 (Est.)', completed: false },
      { title: 'Trucked to Munich', desc: 'Land transport to destination', time: 'Mar 21, 2026 (Est.)', completed: false },
      { title: 'Delivered', desc: 'Final delivery', time: 'Mar 22, 2026 (Est.)', completed: false }
    ]
  }
];

const demoNotifications = [
  { id: 1, type: 'success', icon: '✓', title: 'Shipment Delivered', desc: 'FC-2026-00135 (GreenLeaf Foods) has been delivered to Rotterdam.', time: '2 hours ago', unread: true },
  { id: 2, type: 'warning', icon: '⚠', title: 'Customs Hold', desc: 'FC-2026-00139 (NovaPharma) requires additional documentation for customs.', time: '4 hours ago', unread: true },
  { id: 3, type: 'info', icon: 'ℹ', title: 'ETA Updated', desc: 'FC-2026-00142 (Apex Electronics) ETA revised to Mar 18.', time: '6 hours ago', unread: true },
  { id: 4, type: 'success', icon: '✓', title: 'Pickup Confirmed', desc: 'FC-2026-00148 (TechVault) pickup scheduled for Mar 12.', time: '8 hours ago', unread: false },
  { id: 5, type: 'info', icon: '🚢', title: 'Vessel Departed', desc: 'FC-2026-00145 (AutoParts) vessel departed Newark port.', time: '3 days ago', unread: false },
  { id: 6, type: 'success', icon: '✓', title: 'Customs Cleared', desc: 'FC-2026-00142 origin customs clearance completed.', time: '5 days ago', unread: false }
];

// --- Utility Functions ---
function getStatusBadge(status) {
  const map = {
    'in-transit': 'badge-info',
    'customs': 'badge-warning',
    'delivered': 'badge-success',
    'pending': 'badge-purple',
    'delayed': 'badge-danger'
  };
  return map[status] || 'badge-info';
}

// --- Hero Slider ---
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dots .dot');
  if (!slides.length) return;

  let current = 0;
  function goToSlide(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = n;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));
  setInterval(() => goToSlide((current + 1) % slides.length), 5000);
}

// --- Stat Counter Animation ---
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        let count = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          count += step;
          if (count >= target) { count = target; clearInterval(timer); }
          el.textContent = count.toLocaleString() + (el.dataset.suffix || '');
        }, 30);
        observer.unobserve(el);
      }
    });
  });

  counters.forEach(c => observer.observe(c));
}

// --- Mobile Menu Toggle ---
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
}

// --- Login Page ---
function initLoginPage() {
  const tabs = document.querySelectorAll('.login-tabs button');
  const loginForm = document.getElementById('loginFormFields');
  const adminForm = document.getElementById('adminFormFields');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.tab;
      if (target === 'customer') {
        loginForm.style.display = 'block';
        adminForm.style.display = 'none';
      } else {
        loginForm.style.display = 'none';
        adminForm.style.display = 'block';
      }
    });
  });

  // Demo login
  document.querySelectorAll('.login-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const isAdmin = form.closest('#adminFormFields');
      showToast('Login successful! Redirecting...', 'success');
      setTimeout(() => {
        window.location.href = isAdmin ? 'admin.html' : 'dashboard.html';
      }, 1000);
    });
  });
}

// --- Dashboard ---
function initDashboard() {
  renderShipmentTable();
  renderNotifications();
  initNotificationPanel();
  simulateLiveUpdates();
}

function renderShipmentTable() {
  const tbody = document.getElementById('shipmentTableBody');
  if (!tbody) return;

  tbody.innerHTML = demoShipments.map(s => `
    <tr onclick="openShipmentDetail('${s.id}')" style="cursor:pointer">
      <td><strong>${s.id}</strong></td>
      <td>${s.customer}</td>
      <td>${s.origin}</td>
      <td>${s.destination}</td>
      <td>${s.type}</td>
      <td><span class="badge ${getStatusBadge(s.status)}">${s.statusLabel}</span></td>
      <td>${s.eta}</td>
      <td>
        <div class="progress-bar" style="width:100px">
          <div class="fill ${s.progress === 100 ? 'green' : 'blue'}" style="width:${s.progress}%"></div>
        </div>
      </td>
    </tr>
  `).join('');
}

function openShipmentDetail(id) {
  const s = demoShipments.find(x => x.id === id);
  if (!s) return;

  const modal = document.getElementById('shipmentModal');
  const body = document.getElementById('shipmentModalBody');

  body.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:2rem">
      <div>
        <p style="font-size:0.8rem;color:var(--slate-500);text-transform:uppercase">Tracking ID</p>
        <p style="font-weight:700;font-size:1.1rem">${s.id}</p>
      </div>
      <div>
        <p style="font-size:0.8rem;color:var(--slate-500);text-transform:uppercase">Customer</p>
        <p style="font-weight:600">${s.customer}</p>
      </div>
      <div>
        <p style="font-size:0.8rem;color:var(--slate-500);text-transform:uppercase">Route</p>
        <p style="font-weight:600">${s.origin} → ${s.destination}</p>
      </div>
      <div>
        <p style="font-size:0.8rem;color:var(--slate-500);text-transform:uppercase">Type / Weight</p>
        <p style="font-weight:600">${s.type} • ${s.weight}</p>
      </div>
      <div>
        <p style="font-size:0.8rem;color:var(--slate-500);text-transform:uppercase">Status</p>
        <p><span class="badge ${getStatusBadge(s.status)}">${s.statusLabel}</span></p>
      </div>
      <div>
        <p style="font-size:0.8rem;color:var(--slate-500);text-transform:uppercase">ETA</p>
        <p style="font-weight:700;color:var(--primary)">${s.eta}</p>
      </div>
    </div>

    <div style="margin-bottom:1.5rem">
      <h4 style="font-family:'Montserrat',sans-serif;font-size:0.9rem;margin-bottom:0.5rem">Progress</h4>
      <div class="progress-bar" style="height:12px">
        <div class="fill ${s.progress === 100 ? 'green' : 'blue'}" style="width:${s.progress}%"></div>
      </div>
      <p style="font-size:0.8rem;color:var(--slate-500);margin-top:0.3rem">${s.progress}% complete</p>
    </div>

    <h4 style="font-family:'Montserrat',sans-serif;font-size:0.9rem;margin-bottom:1rem">Shipment Timeline</h4>
    <div class="timeline">
      ${s.milestones.map(m => `
        <div class="timeline-item ${m.completed ? 'completed' : ''} ${m.active ? 'active' : ''}">
          <div class="dot"></div>
          <div class="time">${m.time}</div>
          <div class="title">${m.title}</div>
          <div class="desc">${m.desc}</div>
        </div>
      `).join('')}
    </div>
  `;

  modal.classList.add('active');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}

// --- Map ---
function initMap() {
  const mapEl = document.getElementById('trackingMap');
  if (!mapEl) return;

  const map = L.map('trackingMap', {
    scrollWheelZoom: false,
    zoomControl: true
  }).setView([30, 0], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18
  }).addTo(map);

  // Fix Leaflet rendering in hidden/dynamic containers
  setTimeout(() => { map.invalidateSize(); }, 300);

  const shipIcon = L.divIcon({
    html: '<div style="background:#1a5a40;color:#fff;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;border:3px solid #fff;box-shadow:0 2px 10px rgba(0,0,0,0.35)">🚢</div>',
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });

  const planeIcon = L.divIcon({
    html: '<div style="background:#3b82f6;color:#fff;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;border:3px solid #fff;box-shadow:0 2px 10px rgba(0,0,0,0.35)">✈</div>',
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });

  demoShipments.forEach(s => {
    if (s.status === 'delivered') return;
    const icon = s.type.includes('Air') ? planeIcon : shipIcon;
    L.marker([s.lat, s.lng], { icon })
      .addTo(map)
      .bindPopup(`
        <strong>${s.id}</strong><br>
        ${s.customer}<br>
        ${s.origin} → ${s.destination}<br>
        <span class="badge ${getStatusBadge(s.status)}" style="margin-top:4px;display:inline-block">${s.statusLabel}</span><br>
        <strong>ETA: ${s.eta}</strong>
      `);
  });
}

// --- Notifications ---
function renderNotifications() {
  const list = document.getElementById('notificationList');
  if (!list) return;

  list.innerHTML = demoNotifications.map(n => `
    <div class="notification-item ${n.unread ? 'unread' : ''}">
      <div class="notif-icon" style="background:${n.type === 'success' ? '#dcfce7' : n.type === 'warning' ? '#fef3c7' : '#dbeafe'};color:${n.type === 'success' ? '#16a34a' : n.type === 'warning' ? '#d97706' : '#2563eb'}">${n.icon}</div>
      <div class="notif-content">
        <div class="title">${n.title}</div>
        <div class="desc">${n.desc}</div>
        <div class="time">${n.time}</div>
      </div>
    </div>
  `).join('');
}

function initNotificationPanel() {
  const btn = document.getElementById('notifToggle');
  const panel = document.getElementById('notificationPanel');
  const close = document.getElementById('closeNotifPanel');
  if (!btn || !panel) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    panel.classList.toggle('open');
  });

  if (close) {
    close.addEventListener('click', () => panel.classList.remove('open'));
  }

  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && !btn.contains(e.target)) {
      panel.classList.remove('open');
    }
  });
}

// --- Toast Notifications ---
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-message">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">×</button>
  `;
  container.appendChild(toast);

  setTimeout(() => toast.remove(), 5000);
}

// --- Simulate Live Updates ---
function simulateLiveUpdates() {
  const messages = [
    { msg: 'GPS position updated for FC-2026-00142', type: 'info' },
    { msg: 'Customs document received for FC-2026-00139', type: 'success' },
    { msg: 'Weather advisory: Slight delay possible on Atlantic route', type: 'warning' },
    { msg: 'FC-2026-00148 pickup confirmed for tomorrow', type: 'success' }
  ];

  let index = 0;
  setInterval(() => {
    if (document.hidden) return;
    const { msg, type } = messages[index % messages.length];
    showToast(msg, type);
    index++;
  }, 15000);
}

// --- Cost Calculator ---
function initCalculator() {
  const form = document.getElementById('calcForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const weight = parseFloat(document.getElementById('calcWeight').value) || 0;
    const type = document.getElementById('calcType').value;

    const rates = { air: 4.5, sea: 1.2, land: 2.0 };
    const base = weight * (rates[type] || 2);
    const customs = base * 0.08;
    const insurance = base * 0.03;
    const total = base + customs + insurance;

    document.getElementById('calcResult').innerHTML = `
      <div style="background:var(--slate-50);padding:1.5rem;border-radius:8px;margin-top:1.5rem">
        <h4 style="font-family:'Montserrat',sans-serif;margin-bottom:1rem;color:var(--primary)">Estimated Cost</h4>
        <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem">
          <span>Base Freight</span><strong>$${base.toFixed(2)}</strong>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem">
          <span>Customs & Duties</span><strong>$${customs.toFixed(2)}</strong>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem">
          <span>Insurance</span><strong>$${insurance.toFixed(2)}</strong>
        </div>
        <hr style="margin:0.8rem 0;border:none;border-top:1px solid var(--slate-300)">
        <div style="display:flex;justify-content:space-between;font-size:1.2rem">
          <strong>Total</strong><strong style="color:var(--primary)">$${total.toFixed(2)}</strong>
        </div>
      </div>
    `;
  });
}

// --- Admin Charts (Simple CSS-based) ---
function initAdminCharts() {
  const barChart = document.getElementById('barChart');
  if (!barChart) {
    return;
  }

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const values = [45, 72, 63, 89, 95, 78];
  const max = Math.max(...values);

  barChart.innerHTML = `
    <div style="display:flex;align-items:flex-end;gap:12px;height:200px;padding:0 1rem">
      ${months.map((m, i) => `
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px">
          <div style="background:${i === 4 ? 'var(--accent)' : 'var(--primary)'};width:100%;border-radius:4px 4px 0 0;height:${(values[i]/max)*170}px;transition:height 1s ease;min-height:20px"></div>
          <span style="font-size:0.75rem;color:var(--slate-500)">${m}</span>
        </div>
      `).join('')}
    </div>
  `;

  const donutChart = document.getElementById('donutChart');
  if (donutChart) {
    donutChart.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;gap:2rem;padding:1rem">
        <div style="width:150px;height:150px;border-radius:50%;background:conic-gradient(var(--primary) 0% 40%, var(--accent) 40% 65%, var(--info) 65% 85%, var(--slate-300) 85% 100%);display:flex;align-items:center;justify-content:center">
          <div style="width:80px;height:80px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.2rem">342</div>
        </div>
        <div style="font-size:0.85rem">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><span style="width:12px;height:12px;border-radius:2px;background:var(--primary)"></span> Sea (40%)</div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><span style="width:12px;height:12px;border-radius:2px;background:var(--accent)"></span> Air (25%)</div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><span style="width:12px;height:12px;border-radius:2px;background:var(--info)"></span> Land (20%)</div>
          <div style="display:flex;align-items:center;gap:8px"><span style="width:12px;height:12px;border-radius:2px;background:var(--slate-300)"></span> Multi (15%)</div>
        </div>
      </div>
    `;
  }
}

// --- Admin Table ---
function initAdminTable() {
  const tbody = document.getElementById('adminShipmentTable');
  if (!tbody) return;

  tbody.innerHTML = demoShipments.map(s => `
    <tr>
      <td><strong>${s.id}</strong></td>
      <td>${s.customer}</td>
      <td>${s.origin} → ${s.destination}</td>
      <td>${s.type}</td>
      <td><span class="badge ${getStatusBadge(s.status)}">${s.statusLabel}</span></td>
      <td>${s.eta}</td>
      <td>
        <button class="btn btn-green" style="padding:6px 12px;font-size:0.75rem" onclick="showToast('Shipment ${s.id} updated','success')">Edit</button>
        <button class="btn btn-primary" style="padding:6px 12px;font-size:0.75rem" onclick="openShipmentDetail('${s.id}')">View</button>
      </td>
    </tr>
  `).join('');
}

// --- Init on DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initCounters();
  initMobileMenu();
  initLoginPage();
  initCalculator();
  initMap();
  initDashboard();
  initAdminCharts();
  initAdminTable();
});
