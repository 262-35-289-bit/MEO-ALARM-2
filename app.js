// --- 1. Bilingual Dictionary ---
const MAX_ALARMS = 12;
const MAX_AUDIO_BYTES = 25 * 1024 * 1024; // 25MB safety guard for low-RAM phones

const i18n = {
  en: {
    tabAlarm: "Alarm",
    tabRoutine: "7-Day Routine",
    newAlarmTitle: "Add New Alarm",
    selectTime: "Alarm Time",
    dismissModeLabel: "Alarm Dismiss Method",
    modeStopText: "Normal Stop",
    modePhotoText: "Object Photo",
    objSetupDesc: "Capture or choose any target object photo. This alarm can ONLY be turned off by scanning that object.",
    openCam: "Camera",
    uploadPhoto: "Choose Photo",
    saveObj: "Save Target",
    noObjSaved: "No target photo selected yet",
    objSavedSuccess: "Target object saved",
    volumeLevel: "Alarm Volume (Low – High)",
    setAlarmBtn: "Add Alarm",
    maxLimitReached: "Maximum 12 alarms allowed. Delete an old alarm to add a new one.",
    activeAlarmsTitle: "Scheduled Alarms",
    notifTitle: "Routine Reminder Alerts",
    noSoundBadge: "Kitten Meow Alert",
    notifDesc: "Starting 1 hour before each task, MEO reminds you every 15 minutes (60m, 45m, 30m, 15m prior & on time) with a cute kitten meow & notification.",
    enableNotifBtn: "Enable Notifications",
    testMeowText: "Test Meow",
    notifEnabled: "Notifications active",
    notifBlocked: "Notification permission blocked in browser settings",
    routineFormTitle: "Add Task to 7-Day Routine",
    selectDay: "Select Day (Add multiple tasks per day)",
    daySat: "Saturday", daySun: "Sunday", dayMon: "Monday", dayTue: "Tuesday",
    dayWed: "Wednesday", dayThu: "Thursday", dayFri: "Friday",
    taskTimeLabel: "Task Time",
    taskNameLabel: "Task Title",
    taskNoteLabel: "Short Note (Shown in notification)",
    addRoutineBtn: "Add Task",
    weeklyScheduleTitle: "7-Day Schedule",
    settingsTitle: "Settings",
    permToneTitle: "Permanent Alarm Ringtone",
    permToneDesc: "Applies permanently to all alarms from your phone",
    meowSoundTitle: "Notification Kitten Sound",
    meowSoundDesc: "Play cute cat meow on routine alerts",
    vibrateTitle: "Notification Vibration",
    vibrateDesc: "Vibrate phone when alert arrives",
    timeFormatTitle: "Time Format",
    timeFormatDesc: "12-Hour (AM/PM) or 24-Hour",
    langSettingTitle: "Language",
    langSettingDesc: "English or বাংলা",
    themeSettingTitle: "Theme",
    themeSettingDesc: "Dark or Light appearance",
    doneBtn: "Save & Close",
    alarmRingingTitle: "ALARM RINGING",
    normalStopDesc: "Tap the button below to stop this alarm.",
    stopAlarmBtn: "STOP ALARM",
    targetRefLabel: "Target Object",
    waitingScan: "Point camera at target object",
    scanVerifyBtn: "Scan Object",
    alertNoObj: "Please capture or choose a target object photo first!",
    scanMatched: "Matched",
    scanFailed: "Not Matched — Try Again"
  },
  bn: {
    tabAlarm: "অ্যালার্ম",
    tabRoutine: "৭ দিনের রুটিন",
    newAlarmTitle: "নতুন অ্যালার্ম যোগ করুন",
    selectTime: "অ্যালার্মের সময়",
    dismissModeLabel: "অ্যালার্ম বন্ধ করার মাধ্যম",
    modeStopText: "সাধারণ Stop বাটন",
    modePhotoText: "বস্তুর ছবি (Photo)",
    objSetupDesc: "যেকোনো একটি বস্তুর ছবি তুলুন বা বাছুন। এই অ্যালার্মটি শুধুমাত্র ওই বস্তুটি স্ক্যান করলেই বন্ধ হবে।",
    openCam: "ক্যামেরা",
    uploadPhoto: "ছবি বাছুন",
    saveObj: "ছবি সেভ করুন",
    noObjSaved: "এখনো কোনো বস্তুর ছবি সেভ করা হয়নি",
    objSavedSuccess: "টার্গেট বস্তুর ছবি সেভ হয়েছে",
    volumeLevel: "অ্যালার্ম সাউন্ড (Low – High)",
    setAlarmBtn: "অ্যালার্ম যোগ করুন",
    maxLimitReached: "সর্বোচ্চ ১২টি অ্যালার্ম সেট করা যাবে। নতুন যোগ করতে আগের একটি ডিলিট করুন।",
    activeAlarmsTitle: "সেট করা অ্যালার্মসমূহ",
    notifTitle: "রুটিন রিমাইন্ডার নোটিফিকেশন",
    noSoundBadge: "বিড়ালছানার মিউ সাউন্ড",
    notifDesc: "প্রতিটি কাজের ১ ঘণ্টা আগে থেকে প্রতি ১৫ মিনিট পরপর (৬০, ৪৫, ৩০, ১৫ মিনিট আগে এবং ঠিক সময়ে) মিষ্টি বিড়ালছানার মিউ সাউন্ড ও নোটিফিকেশন পাবেন।",
    enableNotifBtn: "নোটিফিকেশন চালু করুন",
    testMeowText: "মিউ সাউন্ড শুনুন",
    notifEnabled: "নোটিফিকেশন চালু আছে",
    notifBlocked: "ব্রাউজার সেটিংস থেকে নোটিফিকেশন ব্লক করা আছে",
    routineFormTitle: "রুটিনে কাজ যোগ করুন",
    selectDay: "বার নির্বাচন করুন (একই দিনে একাধিক কাজ যোগ করা যাবে)",
    daySat: "শনিবার", daySun: "রবিবার", dayMon: "সোমবার", dayTue: "মঙ্গলবার",
    dayWed: "বুধবার", dayThu: "বৃহস্পতিবার", dayFri: "শুক্রবার",
    taskTimeLabel: "কাজের সময়",
    taskNameLabel: "কাজের নাম",
    taskNoteLabel: "শর্ট নোট (নোটিফিকেশনে দেখাবে)",
    addRoutineBtn: "কাজ যোগ করুন",
    weeklyScheduleTitle: "৭ দিনের রুটিন তালিকা",
    settingsTitle: "সেটিংস",
    permToneTitle: "পার্মানেন্ট অ্যালার্ম রিংটোন",
    permToneDesc: "ফোন থেকে একবার বাছলে সব অ্যালার্মে এটিই বাজবে",
    meowSoundTitle: "নোটিফিকেশন বিড়ালের সাউন্ড",
    meowSoundDesc: "রুটিন নোটিফিকেশনে বিড়ালছানার মিউ সাউন্ড বাজবে",
    vibrateTitle: "নোটিফিকেশন ভাইব্রেশন",
    vibrateDesc: "নোটিফিকেশন এলে ফোন ভাইব্রেট হবে",
    timeFormatTitle: "সময়ের ফরম্যাট",
    timeFormatDesc: "12-Hour (AM/PM) অথবা 24-Hour",
    langSettingTitle: "ভাষা (Language)",
    langSettingDesc: "English বা বাংলা",
    themeSettingTitle: "থিম (Theme)",
    themeSettingDesc: "Dark বা Light মোড",
    doneBtn: "সেভ করুন",
    alarmRingingTitle: "অ্যালার্ম বাজছে!",
    normalStopDesc: "অ্যালার্ম বন্ধ করতে নিচের বাটনে চাপুন।",
    stopAlarmBtn: "STOP ALARM",
    targetRefLabel: "টার্গেট বস্তু",
    waitingScan: "ক্যামেরায় বস্তুটি দেখান",
    scanVerifyBtn: "স্ক্যান করুন",
    alertNoObj: "আগে একটি টার্গেট বস্তুর ছবি সেভ করুন!",
    scanMatched: "Matched",
    scanFailed: "মেলেনি — আবার চেষ্টা করুন"
  }
};

let currentLang = localStorage.getItem('appLang') || 'en';
let currentTheme = localStorage.getItem('appTheme') || 'dark';
let timeFormat = localStorage.getItem('timeFormat') || '12';
let meowSoundEnabled = localStorage.getItem('meowSound') || 'on';
let vibrateEnabled = localStorage.getItem('vibratePref') || 'on';
let permanentRingtoneName = localStorage.getItem('permRingtoneName') || 'Default Chime';
let selectedDismissMode = 'stop';

// Reusable offscreen canvas & typed arrays to eliminate Garbage Collection pauses on budget phones
const sharedWorkCanvas = document.createElement('canvas');
sharedWorkCanvas.width = 64;
sharedWorkCanvas.height = 64;
const sharedWorkCtx = sharedWorkCanvas.getContext('2d', { willReadFrequently: true });
const hist1Buf = new Uint16Array(48);
const hist2Buf = new Uint16Array(48);

// --- 2. Safe System Notification Helper ---
function dispatchSystemNotification(title, body, requireInteraction = false) {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  try {
    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.ready.then((reg) => {
        reg.showNotification(title, { body, silent: true, requireInteraction }).catch(() => {});
      });
    } else {
      new Notification(title, { body, silent: true, requireInteraction });
    }
  } catch (e) {}
}

// --- 3. Global Audio Unlocker & Screen Wake Lock ---
let audioCtx = null;
let wakeLock = null;
let pendingBlockedAudio = false;
let activeAudioPlayer = null;

function unlockAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) audioCtx = new AudioContextClass();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  if (pendingBlockedAudio && activeAudioPlayer) {
    activeAudioPlayer.play().then(() => {
      pendingBlockedAudio = false;
    }).catch(() => {});
  }
}

document.addEventListener('pointerdown', unlockAudioContext, { passive: true });
document.addEventListener('keydown', unlockAudioContext, { passive: true });

async function requestScreenWakeLock() {
  try {
    if ('wakeLock' in navigator && !wakeLock) {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => { wakeLock = null; });
    }
  } catch (e) {}
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    requestScreenWakeLock();
    unlockAudioContext();
    tickScheduler(true);
  }
});

// --- 4. Cute Baby Kitten "Meow" Synthesizer ---
function playCuteKittenMeow() {
  if (meowSoundEnabled !== 'on') return;
  unlockAudioContext();
  if (!audioCtx) return;

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const subOsc = audioCtx.createOscillator();
  const filter = audioCtx.createBiquadFilter();
  const gain = audioCtx.createGain();

  osc.type = 'triangle';
  subOsc.type = 'sine';

  osc.frequency.setValueAtTime(760, now);
  osc.frequency.exponentialRampToValueAtTime(1180, now + 0.18);
  osc.frequency.exponentialRampToValueAtTime(880, now + 0.42);
  osc.frequency.exponentialRampToValueAtTime(620, now + 0.65);

  subOsc.frequency.setValueAtTime(1520, now);
  subOsc.frequency.exponentialRampToValueAtTime(2360, now + 0.18);
  subOsc.frequency.exponentialRampToValueAtTime(1240, now + 0.65);

  filter.type = 'bandpass';
  filter.Q.setValueAtTime(3.5, now);
  filter.frequency.setValueAtTime(1400, now);
  filter.frequency.linearRampToValueAtTime(1950, now + 0.2);
  filter.frequency.linearRampToValueAtTime(1100, now + 0.65);

  gain.gain.setValueAtTime(0.001, now);
  gain.gain.linearRampToValueAtTime(0.45, now + 0.08);
  gain.gain.linearRampToValueAtTime(0.38, now + 0.35);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.68);

  const subGain = audioCtx.createGain();
  subGain.gain.setValueAtTime(0.18, now);

  osc.connect(filter);
  subOsc.connect(subGain);
  subGain.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  subOsc.start(now);
  osc.stop(now + 0.7);
  subOsc.stop(now + 0.7);
}

function triggerPhoneVibration() {
  if (vibrateEnabled === 'on' && 'vibrate' in navigator) {
    try { navigator.vibrate([250, 120, 250]); } catch (e) {}
  }
}

document.getElementById('testMeowBtn').addEventListener('click', () => {
  if (meowSoundEnabled !== 'on') {
    alert(currentLang === 'bn' ? 'সেটিংসে বিড়ালের সাউন্ড Off করা আছে!' : 'Kitten sound is currently OFF in Settings!');
    return;
  }
  playCuteKittenMeow();
  triggerPhoneVibration();
});

// --- 5. In-App Routine Toast Banner ---
const toastEl = document.getElementById('inAppRoutineToast');
let toastTimer = null;
document.getElementById('closeToastBtn').addEventListener('click', () => toastEl.classList.add('hidden'));

function showRoutineAlertBanner(title, body) {
  document.getElementById('toastTitle').textContent = title;
  document.getElementById('toastMsg').textContent = body;
  toastEl.classList.remove('hidden');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.add('hidden'), 14000);
}

// --- 6. Dismiss Mode Switcher ---
window.selectDismissMode = (mode) => {
  selectedDismissMode = mode;
  document.getElementById('modeStopBtn').classList.toggle('active', mode === 'stop');
  document.getElementById('modePhotoBtn').classList.toggle('active', mode === 'photo');
  document.getElementById('photoSetupBox').classList.toggle('hidden', mode !== 'photo');
};

// --- 7. IndexedDB ArrayBuffer Persistence for Permanent Global Ringtone ---
let db = null;
const dbReady = new Promise((resolve) => {
  try {
    const dbReq = indexedDB.open('MeoAlarmGlobalToneDB_V2', 1);
    dbReq.onupgradeneeded = (e) => e.target.result.createObjectStore('ringtones');
    dbReq.onsuccess = (e) => {
      db = e.target.result;
      resolve(db);
    };
    dbReq.onerror = () => resolve(null);
  } catch (e) {
    resolve(null);
  }
});

async function savePermanentRingtoneToDB(file) {
  if (file.size > MAX_AUDIO_BYTES) {
    alert(currentLang === 'bn' ? 'অডিও ফাইলটি ২৫ MB-এর ছোট হতে হবে।' : 'Please choose an audio file smaller than 25 MB.');
    return false;
  }
  const database = await dbReady;
  if (!database) return false;
  try {
    const buffer = await file.arrayBuffer();
    const payload = { buffer, type: file.type || 'audio/mpeg', name: file.name };
    return new Promise((resolve) => {
      const tx = database.transaction('ringtones', 'readwrite');
      tx.objectStore('ringtones').put(payload, 'GLOBAL_RINGTONE');
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    });
  } catch (e) {
    return false;
  }
}

async function clearPermanentRingtoneFromDB() {
  const database = await dbReady;
  if (!database) return false;
  return new Promise((resolve) => {
    const tx = database.transaction('ringtones', 'readwrite');
    tx.objectStore('ringtones').delete('GLOBAL_RINGTONE');
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => resolve(false);
  });
}

async function getPermanentRingtoneBlobFromDB() {
  const database = await dbReady;
  if (!database) return null;
  return new Promise((resolve) => {
    try {
      const tx = database.transaction('ringtones', 'readonly');
      const req = tx.objectStore('ringtones').get('GLOBAL_RINGTONE');
      req.onsuccess = () => {
        const data = req.result;
        if (data && data.buffer) {
          resolve(new Blob([data.buffer], { type: data.type }));
        } else {
          resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    } catch (e) {
      resolve(null);
    }
  });
}

// --- 8. Time Selectors & Formatters ---
function populateTimeSelectors() {
  const builders = [
    { h: document.getElementById('alarmHour'), m: document.getElementById('alarmMinute'), ap: document.getElementById('alarmAmPm'), wrap: document.getElementById('alarmTimeBuilder'), defH: 7, defM: 0 },
    { h: document.getElementById('taskHour'), m: document.getElementById('taskMinute'), ap: document.getElementById('taskAmPm'), wrap: document.getElementById('taskTimeBuilder'), defH: 9, defM: 0 }
  ];

  builders.forEach(b => {
    const hFrag = document.createDocumentFragment();
    const mFrag = document.createDocumentFragment();

    if (timeFormat === '12') {
      b.wrap.classList.remove('mode-24');
      b.ap.hidden = false;
      for (let i = 1; i <= 12; i++) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = String(i).padStart(2, '0');
        if (i === b.defH) opt.selected = true;
        hFrag.appendChild(opt);
      }
    } else {
      b.wrap.classList.add('mode-24');
      b.ap.hidden = true;
      for (let i = 0; i < 24; i++) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = String(i).padStart(2, '0');
        if (i === b.defH) opt.selected = true;
        hFrag.appendChild(opt);
      }
    }
    for (let m = 0; m < 60; m++) {
      const opt = document.createElement('option');
      opt.value = m;
      opt.textContent = String(m).padStart(2, '0');
      if (m === b.defM) opt.selected = true;
      mFrag.appendChild(opt);
    }

    b.h.innerHTML = '';
    b.m.innerHTML = '';
    b.h.appendChild(hFrag);
    b.m.appendChild(mFrag);
  });
}

function getSelected24Time(hourId, minId, ampmId) {
  let h = parseInt(document.getElementById(hourId).value);
  const m = parseInt(document.getElementById(minId).value);
  if (timeFormat === '12') {
    const ap = document.getElementById(ampmId).value;
    if (ap === 'PM' && h < 12) h += 12;
    if (ap === 'AM' && h === 12) h = 0;
  }
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

function formatDisplayTime(hhmm24) {
  const [hStr, mStr] = hhmm24.split(':');
  let h = parseInt(hStr);
  if (timeFormat === '24') return `${String(h).padStart(2, '0')}:${mStr}`;
  const ap = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${String(h).padStart(2, '0')}:${mStr} ${ap}`;
}

// --- 9. Settings, Theme & Language ---
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('appLang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });
  document.getElementById('selectedAudioName').textContent = permanentRingtoneName;
  if (referenceImageData) {
    document.getElementById('refStatus').textContent = i18n[lang].objSavedSuccess;
  }
  lastRenderedDateStr = '';
  renderAlarms();
  renderRoutines();
  tickScheduler(true);
}

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('appTheme', theme);
  document.body.classList.toggle('dark-mode', theme === 'dark');
  document.getElementById('themeSelect').value = theme;
}

const settingsModal = document.getElementById('settingsModal');
document.getElementById('settingsBtn').addEventListener('click', () => {
  document.getElementById('selectedAudioName').textContent = permanentRingtoneName;
  document.getElementById('meowSoundSelect').value = meowSoundEnabled;
  document.getElementById('vibrateSelect').value = vibrateEnabled;
  document.getElementById('timeFormatSelect').value = timeFormat;
  document.getElementById('languageSelect').value = currentLang;
  document.getElementById('themeSelect').value = currentTheme;
  settingsModal.classList.remove('hidden');
});

document.getElementById('closeSettingsBtn').addEventListener('click', () => {
  stopAlarmSound();
  settingsModal.classList.add('hidden');
});
document.getElementById('doneSettingsBtn').addEventListener('click', () => {
  stopAlarmSound();
  settingsModal.classList.add('hidden');
});

document.getElementById('meowSoundSelect').addEventListener('change', (e) => {
  meowSoundEnabled = e.target.value;
  localStorage.setItem('meowSound', meowSoundEnabled);
});
document.getElementById('vibrateSelect').addEventListener('change', (e) => {
  vibrateEnabled = e.target.value;
  localStorage.setItem('vibratePref', vibrateEnabled);
});
document.getElementById('timeFormatSelect').addEventListener('change', (e) => {
  timeFormat = e.target.value;
  localStorage.setItem('timeFormat', timeFormat);
  populateTimeSelectors();
  renderAlarms();
  renderRoutines();
  tickScheduler(true);
});
document.getElementById('languageSelect').addEventListener('change', (e) => applyLanguage(e.target.value));
document.getElementById('themeSelect').addEventListener('change', (e) => applyTheme(e.target.value));
document.getElementById('themeToggle').addEventListener('click', () => applyTheme(currentTheme === 'dark' ? 'light' : 'dark'));

window.switchTab = (tabId, btn) => {
  document.querySelectorAll('.tab-view').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.remove('hidden');
  btn.classList.add('active');
};

// --- 10. Anti-Hang Second-Gated Clock & Web Worker Heartbeat ---
let lastRenderedSecond = -1;
let lastRenderedDateStr = '';
const liveTimeEl = document.getElementById('liveTime');
const liveDateEl = document.getElementById('liveDate');

function tickScheduler(force = false) {
  const now = new Date();
  const currentSec = now.getSeconds();
  if (!force && currentSec === lastRenderedSecond) return;
  lastRenderedSecond = currentSec;

  const h24 = now.getHours();
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(currentSec).padStart(2, '0');

  if (timeFormat === '12') {
    const ap = h24 >= 12 ? 'PM' : 'AM';
    const h12 = String(h24 % 12 || 12).padStart(2, '0');
    liveTimeEl.textContent = `${h12}:${m}:${s} ${ap}`;
  } else {
    liveTimeEl.textContent = `${String(h24).padStart(2, '0')}:${m}:${s}`;
  }

  const todayStamp = now.toDateString();
  if (todayStamp !== lastRenderedDateStr) {
    lastRenderedDateStr = todayStamp;
    triggeredAlarmMinutes = {};
    sentNotifications = {};
    const locale = currentLang === 'bn' ? 'bn-BD' : 'en-US';
    liveDateEl.textContent = now.toLocaleDateString(locale, {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  checkAlarms(now);
  checkRoutineNotifications(now);
}

try {
  const workerBlob = new Blob([`setInterval(() => postMessage(1), 500);`], { type: 'application/javascript' });
  const workerUrl = URL.createObjectURL(workerBlob);
  const clockWorker = new Worker(workerUrl);
  URL.revokeObjectURL(workerUrl);
  clockWorker.onmessage = () => tickScheduler(false);
} catch (e) {
  setInterval(() => tickScheduler(false), 500);
}

// --- 11. Permanent Global Ringtone Audio Engine (Settings Only) ---
let fallbackInterval = null;
let currentAudioObjectUrl = null;
let previewTimeout = null;
let isStartingAudio = false;

const phoneAudioInput = document.getElementById('phoneAudioInput');
document.getElementById('pickPhoneAudioBtn').addEventListener('click', () => phoneAudioInput.click());
phoneAudioInput.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const saved = await savePermanentRingtoneToDB(file);
  if (saved) {
    permanentRingtoneName = file.name;
    localStorage.setItem('permRingtoneName', permanentRingtoneName);
    document.getElementById('selectedAudioName').textContent = permanentRingtoneName;
    renderAlarms();
  }
  e.target.value = '';
});

document.getElementById('resetToneBtn').addEventListener('click', async () => {
  stopAlarmSound();
  await clearPermanentRingtoneFromDB();
  permanentRingtoneName = 'Default Chime';
  localStorage.setItem('permRingtoneName', permanentRingtoneName);
  document.getElementById('selectedAudioName').textContent = permanentRingtoneName;
  renderAlarms();
});

function playDefaultSoftChime(volPercent) {
  unlockAudioContext();
  if (!audioCtx) return;
  const level = Math.max(0.05, Math.min(1, (volPercent || 80) / 100));
  const notes = [523.25, 659.25, 783.99, 1046.50];
  notes.forEach((f, idx) => {
    setTimeout(() => {
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, audioCtx.currentTime);
      g.gain.setValueAtTime(level * 0.7, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.65);
      osc.connect(g); g.connect(audioCtx.destination);
      osc.start(); osc.stop(audioCtx.currentTime + 0.65);
    }, idx * 240);
  });
}

function stopAlarmSound() {
  pendingBlockedAudio = false;
  isStartingAudio = false;
  if (previewTimeout) {
    clearTimeout(previewTimeout);
    previewTimeout = null;
  }
  if (activeAudioPlayer) {
    activeAudioPlayer.pause();
    activeAudioPlayer.currentTime = 0;
    activeAudioPlayer = null;
  }
  if (currentAudioObjectUrl) {
    URL.revokeObjectURL(currentAudioObjectUrl);
    currentAudioObjectUrl = null;
  }
  if (fallbackInterval) {
    clearInterval(fallbackInterval);
    fallbackInterval = null;
  }
}

async function startGlobalAlarmSound(volPercent = 80, loop = true) {
  if (isStartingAudio) return;
  isStartingAudio = true;
  stopAlarmSound();

  const clampedVol = Math.max(0.05, Math.min(1, (volPercent || 80) / 100));
  const storedBlob = await getPermanentRingtoneBlobFromDB();
  isStartingAudio = false;

  if (storedBlob) {
    currentAudioObjectUrl = URL.createObjectURL(storedBlob);
    activeAudioPlayer = new Audio(currentAudioObjectUrl);
    activeAudioPlayer.volume = clampedVol;
    activeAudioPlayer.loop = loop;
    activeAudioPlayer.play().catch(() => {
      pendingBlockedAudio = true;
      playDefaultSoftChime(volPercent);
      if (loop) fallbackInterval = setInterval(() => playDefaultSoftChime(volPercent), 1800);
    });
  } else {
    playDefaultSoftChime(volPercent);
    if (loop) fallbackInterval = setInterval(() => playDefaultSoftChime(volPercent), 1800);
  }
}

document.getElementById('previewToneBtn').addEventListener('click', async () => {
  const vol = parseInt(document.getElementById('volumeSlider').value);
  if (activeAudioPlayer || fallbackInterval) return stopAlarmSound();
  await startGlobalAlarmSound(vol, false);
  previewTimeout = setTimeout(() => stopAlarmSound(), 5000);
});

// --- 12. Target Object Photo Setup (Low-RAM Camera Stream) ---
const setupVideo = document.getElementById('setupVideo');
const savedRefImg = document.getElementById('savedRefImg');
let setupStream = null;
let referenceImageData = localStorage.getItem('refObjectPhoto') || null;

if (referenceImageData) {
  savedRefImg.src = referenceImageData;
  savedRefImg.hidden = false;
}

document.getElementById('openSetupCamBtn').addEventListener('click', async () => {
  try {
    if (setupStream) setupStream.getTracks().forEach(t => t.stop());
    setupStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment', width: { ideal: 480 }, height: { ideal: 360 } }
    });
    setupVideo.srcObject = setupStream;
    await setupVideo.play();
    setupVideo.hidden = false;
    document.getElementById('captureRefBtn').hidden = false;
    savedRefImg.hidden = true;
  } catch (e) {
    alert('Camera permission denied or unavailable. Use "Choose Photo" instead.');
  }
});

document.getElementById('uploadPhotoBtn').addEventListener('click', () => document.getElementById('uploadObjInput').click());
document.getElementById('uploadObjInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = new Image();
    img.onload = () => {
      const s = Math.min(img.width, img.height);
      sharedWorkCtx.drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, 64, 64);
      lockReferenceDataUrl(sharedWorkCanvas.toDataURL('image/jpeg', 0.85));
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
  e.target.value = '';
});

function captureFastSample(videoEl) {
  const vw = videoEl.videoWidth || 320;
  const vh = videoEl.videoHeight || 240;
  const s = Math.min(vw, vh);
  sharedWorkCtx.drawImage(videoEl, (vw - s) / 2, (vh - s) / 2, s, s, 0, 0, 64, 64);
  return sharedWorkCanvas;
}

function lockReferenceDataUrl(dataUrl) {
  referenceImageData = dataUrl;
  localStorage.setItem('refObjectPhoto', referenceImageData);
  savedRefImg.src = referenceImageData;
  savedRefImg.hidden = false;
  setupVideo.hidden = true;
  document.getElementById('captureRefBtn').hidden = true;
  document.getElementById('refStatus').textContent = i18n[currentLang].objSavedSuccess;
  if (setupStream) {
    setupStream.getTracks().forEach(t => t.stop());
    setupStream = null;
  }
}

document.getElementById('captureRefBtn').addEventListener('click', () => {
  if (setupVideo.readyState < 2) return;
  lockReferenceDataUrl(captureFastSample(setupVideo).toDataURL('image/jpeg', 0.85));
});

// --- 13. Alarms CRUD (Max 12 Alarms, Uses Global Permanent Ringtone) ---
let alarms = JSON.parse(localStorage.getItem('alarms')) || [];
let activeAlarmId = null;
let triggeredAlarmMinutes = {};

const volumeSlider = document.getElementById('volumeSlider');
volumeSlider.addEventListener('input', () => {
  const val = parseInt(volumeSlider.value);
  document.getElementById('volLabel').textContent = `${val}%`;
  if (activeAudioPlayer) {
    activeAudioPlayer.volume = Math.max(0.05, Math.min(1, val / 100));
  }
});

function updateAlarmLimitUI() {
  const count = alarms.length;
  const addBtn = document.getElementById('addAlarmBtn');
  const limitNote = document.getElementById('alarmLimitNote');
  const topBadge = document.getElementById('alarmCountBadge');
  const listCounter = document.getElementById('alarmListCounter');

  if (topBadge) topBadge.textContent = `${count} / ${MAX_ALARMS}`;
  if (listCounter) listCounter.textContent = `${count} / ${MAX_ALARMS}`;

  if (count >= MAX_ALARMS) {
    addBtn.disabled = true;
    addBtn.style.opacity = '0.5';
    addBtn.style.cursor = 'not-allowed';
    limitNote.style.display = 'block';
    limitNote.textContent = i18n[currentLang].maxLimitReached;
  } else {
    addBtn.disabled = false;
    addBtn.style.opacity = '1';
    addBtn.style.cursor = 'pointer';
    limitNote.style.display = 'none';
  }
}

document.getElementById('addAlarmBtn').addEventListener('click', () => {
  if (alarms.length >= MAX_ALARMS) {
    return alert(i18n[currentLang].maxLimitReached);
  }
  if (selectedDismissMode === 'photo' && !referenceImageData) {
    return alert(i18n[currentLang].alertNoObj);
  }
  requestScreenWakeLock();
  const time24 = getSelected24Time('alarmHour', 'alarmMinute', 'alarmAmPm');

  alarms.push({
    id: String(Date.now()),
    time: time24,
    mode: selectedDismissMode,
    volume: parseInt(volumeSlider.value),
    active: true
  });
  localStorage.setItem('alarms', JSON.stringify(alarms));
  renderAlarms();
});

function renderAlarms() {
  const list = document.getElementById('alarmList');
  const frag = document.createDocumentFragment();
  alarms.forEach(alarm => {
    const modeBadge = alarm.mode === 'photo'
      ? (currentLang === 'bn' ? '📷 ছবি মিশন' : '📷 Photo Only')
      : (currentLang === 'bn' ? '⏹ Stop বাটন' : '⏹ Stop Button');

    const li = document.createElement('li');
    li.className = 'item-row';
    li.innerHTML = `
      <div>
        <div class="item-time">${formatDisplayTime(alarm.time)} <span class="mode-tag">${modeBadge}</span></div>
        <div class="item-meta">🎵 ${permanentRingtoneName} • ${alarm.volume}%</div>
      </div>
      <div style="display:flex; align-items:center; gap:10px;">
        <button type="button" class="btn btn-soft" style="padding:6px 10px; font-size:0.75rem;" onclick="testAlarm('${alarm.id}')">Test</button>
        <input type="checkbox" ${alarm.active ? 'checked' : ''} onchange="toggleAlarm('${alarm.id}')" />
        <button type="button" class="trash-btn" onclick="deleteAlarm('${alarm.id}')">✕</button>
      </div>
    `;
    frag.appendChild(li);
  });
  list.innerHTML = '';
  list.appendChild(frag);
  updateAlarmLimitUI();
}

window.testAlarm = (id) => {
  const alarm = alarms.find(a => a.id === id);
  if (alarm) triggerAlarm(alarm);
};

window.toggleAlarm = (id) => {
  alarms = alarms.map(a => a.id === id ? { ...a, active: !a.active } : a);
  localStorage.setItem('alarms', JSON.stringify(alarms));
  renderAlarms();
};

window.deleteAlarm = (id) => {
  alarms = alarms.filter(a => a.id !== id);
  localStorage.setItem('alarms', JSON.stringify(alarms));
  renderAlarms();
};

// --- 14. Midnight-Safe Alarm Trigger ---
let missionStream = null;
let ringVibrationInterval = null;

function checkAlarms(now) {
  if (activeAlarmId) return;
  const nowTotalMins = now.getHours() * 60 + now.getMinutes();
  const dateStamp = now.toDateString();

  alarms.forEach(alarm => {
    if (!alarm.active) return;
    const [aH, aM] = alarm.time.split(':').map(Number);
    const alarmTotalMins = aH * 60 + aM;
    const diff = (nowTotalMins - alarmTotalMins + 1440) % 1440;
    const key = `${alarm.id}_${dateStamp}_${alarm.time}`;

    if ((diff === 0 || diff === 1) && !triggeredAlarmMinutes[key]) {
      triggeredAlarmMinutes[key] = true;
      triggerAlarm(alarm);
    }
  });
}

async function triggerAlarm(alarm) {
  activeAlarmId = alarm.id;
  requestScreenWakeLock();

  dispatchSystemNotification(
    '⏰ MEO ALARM RINGING',
    alarm.mode === 'photo'
      ? 'Scan your target object to turn off the alarm!'
      : `Alarm for ${formatDisplayTime(alarm.time)} is ringing!`,
    true
  );

  startGlobalAlarmSound(alarm.volume, true);
  if ('vibrate' in navigator) {
    try {
      navigator.vibrate([500, 300, 500]);
      ringVibrationInterval = setInterval(() => navigator.vibrate([500, 300, 500]), 1500);
    } catch (e) {}
  }

  if (alarm.mode === 'photo' && referenceImageData) {
    document.getElementById('normalRingingModal').classList.add('hidden');
    document.getElementById('photoMissionFullScreen').classList.remove('hidden');
    document.getElementById('targetPreview').src = referenceImageData;
    document.getElementById('photoRingingTime').textContent = formatDisplayTime(alarm.time);

    const feedback = document.getElementById('matchFeedback');
    feedback.className = 'hud-status-pill';
    feedback.textContent = i18n[currentLang].waitingScan;

    try {
      if (missionStream) missionStream.getTracks().forEach(t => t.stop());
      missionStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 480 }, height: { ideal: 360 } }
      });
      const mv = document.getElementById('missionVideo');
      mv.srcObject = missionStream;
      await mv.play();
    } catch (e) {}
  } else {
    document.getElementById('photoMissionFullScreen').classList.add('hidden');
    document.getElementById('normalRingingModal').classList.remove('hidden');
    document.getElementById('normalRingingTime').textContent = formatDisplayTime(alarm.time);
  }
}

function dismissActiveAlarm() {
  stopAlarmSound();
  if (ringVibrationInterval) {
    clearInterval(ringVibrationInterval);
    ringVibrationInterval = null;
  }
  if ('vibrate' in navigator) {
    try { navigator.vibrate(0); } catch (e) {}
  }
  if (missionStream) {
    missionStream.getTracks().forEach(t => t.stop());
    missionStream = null;
  }

  document.getElementById('normalRingingModal').classList.add('hidden');
  document.getElementById('photoMissionFullScreen').classList.add('hidden');
  activeAlarmId = null;
}

document.getElementById('normalStopBtn').addEventListener('click', dismissActiveAlarm);

// Zero-Allocation 64x64 Object Comparison (5ms execution on budget phones)
function compareObjects(pixels1, pixels2) {
  hist1Buf.fill(0);
  hist2Buf.fill(0);
  const totalPixels = pixels1.length >> 2;
  let sum1 = 0, sum2 = 0;

  for (let i = 0; i < pixels1.length; i += 4) {
    const r1 = pixels1[i], g1 = pixels1[i + 1], b1 = pixels1[i + 2];
    const r2 = pixels2[i], g2 = pixels2[i + 1], b2 = pixels2[i + 2];
    const l1 = (r1 + g1 + b1) / 3 || 1;
    const l2 = (r2 + g2 + b2) / 3 || 1;

    hist1Buf[Math.min(15, ((r1 / (l1 * 3)) * 16) | 0)]++;
    hist1Buf[16 + Math.min(15, ((g1 / (l1 * 3)) * 16) | 0)]++;
    hist1Buf[32 + Math.min(15, ((b1 / (l1 * 3)) * 16) | 0)]++;

    hist2Buf[Math.min(15, ((r2 / (l2 * 3)) * 16) | 0)]++;
    hist2Buf[16 + Math.min(15, ((g2 / (l2 * 3)) * 16) | 0)]++;
    hist2Buf[32 + Math.min(15, ((b2 / (l2 * 3)) * 16) | 0)]++;

    sum1 += l1;
    sum2 += l2;
  }

  let histIntersection = 0;
  for (let b = 0; b < 48; b++) {
    histIntersection += hist1Buf[b] < hist2Buf[b] ? hist1Buf[b] : hist2Buf[b];
  }
  const colorScore = (histIntersection / (totalPixels * 3)) * 100;

  const mean1 = sum1 / totalPixels || 1, mean2 = sum2 / totalPixels || 1;
  let structDiff = 0;
  for (let i = 0; i < pixels1.length; i += 4) {
    const b1 = ((pixels1[i] + pixels1[i + 1] + pixels1[i + 2]) / 3) / mean1;
    const b2 = ((pixels2[i] + pixels2[i + 1] + pixels2[i + 2]) / 3) / mean2;
    const d = b1 - b2;
    structDiff += d < 0 ? (-d > 1 ? 1 : -d) : (d > 1 ? 1 : d);
  }
  const structureScore = (1 - structDiff / totalPixels) * 100;
  return Math.round(colorScore * 0.65 + structureScore * 0.35);
}

function evaluateCurrentPixels(currentPixelsCopy) {
  if (!referenceImageData) return;
  const tempImg = new Image();
  tempImg.onload = () => {
    sharedWorkCtx.drawImage(tempImg, 0, 0, 64, 64);
    const refPixels = sharedWorkCtx.getImageData(0, 0, 64, 64).data;

    const matchScore = compareObjects(refPixels, currentPixelsCopy);
    const feedback = document.getElementById('matchFeedback');

    if (matchScore >= 74) {
      feedback.className = 'hud-status-pill matched';
      feedback.textContent = i18n[currentLang].scanMatched;
      setTimeout(() => {
        dismissActiveAlarm();
      }, 950);
    } else {
      feedback.className = 'hud-status-pill failed';
      feedback.textContent = i18n[currentLang].scanFailed;
    }
  };
  tempImg.src = referenceImageData;
}

document.getElementById('verifyPhotoBtn').addEventListener('click', () => {
  const mv = document.getElementById('missionVideo');
  if (!mv.srcObject || mv.readyState < 2) {
    alert(currentLang === 'bn' ? 'ক্যামেরা চালু না থাকলে ডানপাশের গ্যালারি বাটন থেকে ছবি দিন।' : 'Camera stream unavailable — use the gallery icon on the right to verify.');
    return;
  }
  captureFastSample(mv);
  const snapCopy = new Uint8ClampedArray(sharedWorkCtx.getImageData(0, 0, 64, 64).data);
  evaluateCurrentPixels(snapCopy);
});

const verifyUploadInput = document.getElementById('verifyUploadInput');
document.getElementById('verifyUploadBtn').addEventListener('click', () => verifyUploadInput.click());
verifyUploadInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = new Image();
    img.onload = () => {
      const s = Math.min(img.width, img.height);
      sharedWorkCtx.drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, 64, 64);
      const snapCopy = new Uint8ClampedArray(sharedWorkCtx.getImageData(0, 0, 64, 64).data);
      evaluateCurrentPixels(snapCopy);
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
  e.target.value = '';
});

// --- 15. 7-Day Multi-Task Routine ---
const dayOrder = [6, 0, 1, 2, 3, 4, 5];
const dayLabels = {
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  bn: ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার']
};

let routines = JSON.parse(localStorage.getItem('routines')) || [];
let sentNotifications = {};

if ('Notification' in window) {
  if (Notification.permission === 'granted') {
    document.getElementById('notifStatus').textContent = i18n[currentLang].notifEnabled;
  } else if (Notification.permission === 'denied') {
    document.getElementById('notifStatus').style.color = '#ef4444';
    document.getElementById('notifStatus').textContent = i18n[currentLang].notifBlocked;
  }
}

document.getElementById('enableNotifBtn').addEventListener('click', async () => {
  if (!('Notification' in window)) return alert('Notifications not supported in this browser.');
  const perm = await Notification.requestPermission();
  const statusEl = document.getElementById('notifStatus');
  if (perm === 'granted') {
    statusEl.style.color = 'var(--green)';
    statusEl.textContent = i18n[currentLang].notifEnabled;
    playCuteKittenMeow();
    triggerPhoneVibration();
    showRoutineAlertBanner('MEO Routine Ready 🐱', 'Meow! Reminders will arrive 60m, 45m, 30m, 15m before & on time.');
    dispatchSystemNotification('MEO Routine Ready 🐱', 'Meow! I will remind you 60m, 45m, 30m, 15m before & on time for your tasks.', false);
  } else if (perm === 'denied') {
    statusEl.style.color = '#ef4444';
    statusEl.textContent = i18n[currentLang].notifBlocked;
  }
});

document.getElementById('addRoutineBtn').addEventListener('click', () => {
  const day = parseInt(document.getElementById('routineDay').value);
  const name = document.getElementById('taskName').value.trim();
  const note = document.getElementById('taskNote').value.trim();
  const time24 = getSelected24Time('taskHour', 'taskMinute', 'taskAmPm');
  if (!name) return;

  routines.push({ id: Date.now(), day, name, note, time: time24 });
  localStorage.setItem('routines', JSON.stringify(routines));
  document.getElementById('taskName').value = '';
  document.getElementById('taskNote').value = '';
  renderRoutines();
});

function renderRoutines() {
  const container = document.getElementById('routineGroupedList');
  const frag = document.createDocumentFragment();

  dayOrder.forEach(dayIdx => {
    const dayTasks = routines.filter(r => r.day === dayIdx).sort((a, b) => a.time.localeCompare(b.time));
    if (dayTasks.length === 0) return;

    const groupDiv = document.createElement('div');
    groupDiv.className = 'day-group-card';
    groupDiv.innerHTML = `
      <div class="day-group-title">
        <span>${dayLabels[currentLang][dayIdx]}</span>
        <span>${dayTasks.length} Task${dayTasks.length > 1 ? 's' : ''}</span>
      </div>
    `;

    dayTasks.forEach(task => {
      const sub = document.createElement('div');
      sub.className = 'task-subcard';
      sub.innerHTML = `
        <div style="flex:1; padding-right:8px;">
          <div class="item-time" style="font-size:1rem;">${formatDisplayTime(task.time)} — ${task.name}</div>
          ${task.note ? `<div class="task-note-text">${task.note}</div>` : ''}
        </div>
        <button type="button" class="trash-btn" onclick="deleteRoutine(${task.id})">✕</button>
      `;
      groupDiv.appendChild(sub);
    });

    frag.appendChild(groupDiv);
  });

  container.innerHTML = '';
  container.appendChild(frag);
}

window.deleteRoutine = (id) => {
  routines = routines.filter(r => r.id !== id);
  localStorage.setItem('routines', JSON.stringify(routines));
  renderRoutines();
};

function checkRoutineNotifications(now) {
  const todayDay = now.getDay();
  const currentTotalMins = now.getHours() * 60 + now.getMinutes();

  routines.forEach(task => {
    if (task.day !== todayDay) return;
    const [tHour, tMin] = task.time.split(':').map(Number);
    const diffMins = (tHour * 60 + tMin) - currentTotalMins;

    if ([60, 45, 30, 15, 0].includes(diffMins)) {
      const key = `${task.id}_${diffMins}_${now.toDateString()}`;
      if (!sentNotifications[key]) {
        sentNotifications[key] = true;
        playCuteKittenMeow();
        triggerPhoneVibration();

        const titleText = diffMins === 0
          ? `🐱 Meow! Starting now: ${task.name}`
          : `🐱 Meow! ${diffMins}m left: ${task.name}`;
        const bodyText = task.note ? `${task.note} (${formatDisplayTime(task.time)})` : `Scheduled at ${formatDisplayTime(task.time)}`;

        showRoutineAlertBanner(titleText, bodyText);
        dispatchSystemNotification(titleText, bodyText, false);
      }
    }
  });
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

// Initialize
populateTimeSelectors();
applyTheme(currentTheme);
applyLanguage(currentLang);
tickScheduler(true);
requestScreenWakeLock();
