<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Кабинет искусствоведа</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Yeseva+One&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet">
<style>
  :root{
    --plaster:#EFE2BE;
    --paper:#FBF4E2;
    --ink:#2A1810;
    --ink-soft:#4C2E1C;
    --muted:#8C7148;
    --sevres:#1B4B8C;
    --sevres-dark:#0D2C57;
    --verdigris:#1F4B39;
    --gold:#B4842C;
    --gold-bright:#DDB35A;
    --line:#C7A45C;
    --line-soft:#E3D19C;
    --shadow-none:none;
  }
  *{box-sizing:border-box;}
  html,body{margin:0;padding:0;}
  body{
    background:var(--plaster);
    background-image:
      repeating-linear-gradient(45deg, rgba(180,132,44,0.07) 0 1.5px, transparent 1.5px 46px),
      repeating-linear-gradient(-45deg, rgba(180,132,44,0.07) 0 1.5px, transparent 1.5px 46px),
      radial-gradient(circle at 50% 0%, rgba(27,75,140,0.06) 0, transparent 55%);
    color:var(--ink);
    font-family:'PT Serif', serif;
    font-size:16px;
    line-height:1.6;
    -webkit-font-smoothing:antialiased;
  }
  h1,h2,h3,.serif{font-family:'PT Serif', serif;}
  .display{font-family:'Yeseva One', 'PT Serif', serif; font-weight:400;}
  .mono{font-family:'PT Serif', serif; letter-spacing:.04em;}
  a{color:inherit;text-decoration:none;}
  button{font-family:inherit;cursor:pointer;}
  img{display:block;max-width:100%;}

  /* ---------- layout shell ---------- */
  .wrap{max-width:980px;margin:0 auto;padding:0 28px;}

  header.site-header{
    border-top:5px solid var(--sevres-dark);
    border-bottom:3px double var(--gold);
    background:linear-gradient(180deg, var(--sevres-dark) 0%, var(--sevres) 55%, var(--sevres) 100%);
    box-shadow:0 4px 14px rgba(42,24,16,.28);
    position:sticky; top:0; z-index:40;
  }
  .header-inner{
    display:flex; align-items:flex-end; justify-content:space-between;
    padding:24px 0 18px;
    gap:20px; flex-wrap:wrap;
  }
  .brand{cursor:pointer;}
  .brand .eyebrow{
    font-size:11px; letter-spacing:.24em; text-transform:uppercase; color:var(--gold-bright);
    margin-bottom:8px;
  }
  .brand h1{
    font-family:'Yeseva One', 'PT Serif', serif; font-weight:400;
    font-size:30px; margin:0; letter-spacing:.01em; color:var(--paper);
    text-shadow:0 1px 0 rgba(0,0,0,.25);
  }
  .brand .tagline{
    font-size:13px; color:var(--line-soft); margin-top:6px; font-style:italic;
  }
  .flourish{width:150px; height:13px; display:block; margin-top:10px; color:var(--gold);}
  nav.tabs{display:flex; gap:2px; align-items:center;}
  .tab-btn{
    background:none; border:none; padding:10px 18px;
    font-family:'PT Serif', serif; font-size:12px; letter-spacing:.16em; text-transform:uppercase;
    color:var(--line-soft); border-bottom:2px solid transparent;
    transition:color .18s ease, border-color .18s ease;
  }
  .tab-btn:hover{color:var(--paper);}
  .tab-btn.active{color:var(--gold-bright); border-bottom-color:var(--gold-bright);}
  .gear-btn{
    background:none;border:1px solid var(--gold);padding:8px 12px;
    font-family:'PT Serif',serif;font-size:11px;letter-spacing:.12em;color:var(--gold-bright);
    text-transform:uppercase;
  }
  .gear-btn:hover{border-color:var(--gold-bright); background:rgba(221,179,90,.1);}

  main{padding:48px 0 90px;}
  .view{animation:fadein .35s ease;}
  @keyframes fadein{from{opacity:0; transform:translateY(6px);} to{opacity:1; transform:translateY(0);}}

  .section-divider{display:flex; justify-content:center; color:var(--gold); margin:0 0 34px;}
  .section-divider .flourish{margin-top:0;}

  .section-head{
    display:flex; align-items:center; justify-content:space-between;
    margin-bottom:34px; gap:16px; flex-wrap:wrap;
  }
  .section-head h2{font-size:24px; font-weight:400; margin:0; color:var(--sevres-dark);}
  .section-head .count{font-size:12px; color:var(--muted); font-family:'PT Serif',serif;}

  .btn{
    background:var(--sevres); color:var(--gold-bright); border:2px solid var(--gold);
    padding:10px 22px; font-size:13px; letter-spacing:.09em; text-transform:uppercase;
    font-family:'PT Serif',serif;
    box-shadow:inset 0 0 0 1px rgba(221,179,90,.35);
    transition:background .18s ease, transform .1s ease, color .18s ease;
  }
  .btn:hover{background:var(--sevres-dark); color:var(--paper);}
  .btn:active{transform:translateY(1px);}
  .btn.ghost{background:none; color:var(--ink-soft); border-color:var(--line); box-shadow:none;}
  .btn.ghost:hover{border-color:var(--sevres); color:var(--sevres);}
  .btn.small{padding:7px 14px; font-size:11px;}
  .btn.danger{background:none;color:var(--sevres);border-color:var(--sevres); box-shadow:none;}
  .btn.danger:hover{background:var(--sevres); color:var(--paper);}

  /* ---------- catalogue / article list ---------- */
  .entry-list{border-top:1px solid var(--line);}
  .entry{
    display:flex; gap:22px; align-items:flex-start;
    padding:26px 0; border-bottom:1px solid var(--line);
    cursor:pointer;
  }
  .entry:hover .entry-title{color:var(--sevres);}
  .entry .meta{width:118px; flex:none; font-family:'PT Serif',serif; font-size:11px; color:var(--muted); letter-spacing:.05em; line-height:1.8;}
  .entry .entry-thumb{width:86px; height:86px; object-fit:cover; flex:none; border:3px double var(--gold); padding:2px; background:var(--paper);}
  .entry .entry-body{flex:1; min-width:0;}
  .entry .entry-title{font-size:21px; font-weight:700; margin:0 0 8px; transition:color .15s ease;}
  .entry .excerpt{color:var(--ink-soft); font-size:14.5px; margin:0;}
  .empty-state{
    padding:60px 20px; text-align:center; color:var(--muted);
    border:1px dashed var(--gold);
  }
  .empty-state .big{font-family:'PT Serif',serif; font-style:italic; font-size:19px; color:var(--ink-soft); margin-bottom:8px;}

  /* ---------- article full view ---------- */
  .article-tools{display:flex; gap:10px; margin-bottom:28px;}
  .article-full{max-width:680px;}
  .plate{
    display:inline-block; border:1px solid var(--gold); background:var(--paper);
    box-shadow:inset 0 0 0 2px var(--paper), inset 0 0 0 3px var(--line-soft);
    padding:9px 16px; font-family:'PT Serif',serif; font-size:11px; letter-spacing:.12em;
    color:var(--sevres-dark); text-transform:uppercase; margin-bottom:18px;
  }
  .article-full h1{font-family:'Yeseva One','PT Serif',serif; font-weight:400; font-size:38px; line-height:1.2; margin:0 0 12px; color:var(--sevres-dark);}
  .article-full .subtitle{font-size:17px; font-style:italic; color:var(--ink-soft); margin:0 0 30px; font-family:'PT Serif',serif;}
  .article-full .body p{margin:0 0 20px; font-size:16.5px; color:var(--ink-soft);}
  .article-full .body p:first-of-type::first-letter{
    font-family:'Yeseva One','PT Serif',serif; font-size:54px; float:left; line-height:.78; padding:6px 8px 0 0; color:var(--sevres);
  }
  .cover-figure{margin:0 0 28px; background:var(--paper); border:3px double var(--gold); padding:12px; box-shadow:0 8px 22px rgba(42,24,16,.22);}
  .cover-figure img{width:100%; max-height:440px; object-fit:cover; display:block;}
  .cover-figure .plate{margin:12px 0 0;}
  .inline-figure{margin:10px 0 26px; background:var(--paper); border:3px double var(--gold); padding:10px; box-shadow:0 6px 16px rgba(42,24,16,.18);}
  .inline-figure img{width:100%; display:block;}
  .inline-figure .plate{margin-top:10px; display:block; border:none; box-shadow:none; padding:6px 2px 0;}

  /* ---------- image pickers inside write form ---------- */
  .cover-picker{margin-bottom:8px;}
  .cover-preview{position:relative; margin-bottom:10px; background:var(--paper); border:3px double var(--gold); padding:10px;}
  .cover-preview img{width:100%; max-height:260px; object-fit:cover; display:block;}
  .cover-preview .remove-cover{
    position:absolute; top:20px; right:20px; background:rgba(42,24,16,.8); color:var(--paper);
    border:1px solid var(--gold); font-family:'PT Serif',serif; font-size:11px; padding:6px 10px;
  }
  .inline-img-list{display:flex; flex-wrap:wrap; gap:12px; margin:12px 0 4px;}
  .inline-img-item{position:relative; width:78px;}
  .inline-img-item img{width:78px; height:78px; object-fit:cover; border:2px solid var(--gold); padding:2px; background:var(--paper);}
  .inline-img-item .rm{
    position:absolute; top:-8px; right:-8px; width:20px; height:20px; border-radius:0;
    background:var(--sevres); color:var(--gold-bright); border:1px solid var(--gold); font-size:11px; line-height:1;
    display:flex; align-items:center; justify-content:center;
  }
  .field-hint{font-size:12px; color:var(--muted); margin-top:6px; font-style:italic;}
  .file-btn-row{display:flex; align-items:center; gap:12px; flex-wrap:wrap;}

  /* ---------- write form ---------- */
  .form-card{max-width:680px;}
  .field{margin-bottom:20px;}
  .field label{
    display:block; font-family:'PT Serif',serif; font-size:11px; letter-spacing:.12em;
    text-transform:uppercase; color:var(--muted); margin-bottom:8px;
  }
  .field input[type=text], .field textarea, .field input[type=email]{
    width:100%; border:1px solid var(--line); background:var(--paper); color:var(--ink);
    padding:12px 14px; font-family:'PT Serif',serif; font-size:15px;
  }
  .field input[type=text]:focus, .field textarea:focus{outline:2px solid var(--sevres); outline-offset:1px; border-color:var(--gold);}
  .field.title-field input{font-family:'Yeseva One','PT Serif',serif; font-size:23px; font-weight:400;}
  .field textarea{resize:vertical; min-height:280px; line-height:1.6;}
  .form-actions{display:flex; gap:10px; margin-top:26px;}

  /* ---------- albums grid ---------- */
  .album-grid{display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:30px;}
  .album-card{cursor:pointer;}
  .album-cover{
    width:100%; aspect-ratio:4/3; background:var(--paper) center/cover no-repeat;
    border:3px double var(--gold); box-shadow:0 6px 16px rgba(42,24,16,.2);
    display:flex; align-items:center; justify-content:center;
    color:var(--muted); font-family:'PT Serif',serif; font-size:11px; text-transform:uppercase; font-style:italic;
    transition:box-shadow .15s ease;
  }
  .album-card:hover .album-cover{box-shadow:0 8px 22px rgba(42,24,16,.32);}
  .album-card .plate{margin-top:14px; width:100%; display:block; box-sizing:border-box;}
  .album-card .a-title{font-family:'PT Serif',serif; font-weight:700; font-size:15px; display:block; margin-bottom:4px; color:var(--sevres-dark);}
  .album-card .a-count{color:var(--muted); font-size:10.5px;}

  /* ---------- album detail / photo grid ---------- */
  .album-head{margin-bottom:30px;}
  .album-head h1{font-size:34px; margin:0 0 10px; color:var(--sevres-dark);}
  .album-head p{color:var(--ink-soft); max-width:620px; margin:0 0 20px; font-style:italic;}
  .photo-grid{display:grid; grid-template-columns:repeat(auto-fill,minmax(230px,1fr)); gap:34px; margin-top:24px;}
  .photo-frame{border:3px double var(--gold); background:var(--paper); padding:10px; cursor:pointer; box-shadow:0 6px 16px rgba(42,24,16,.18); transition:box-shadow .15s ease;}
  .photo-frame:hover{box-shadow:0 8px 22px rgba(42,24,16,.3);}
  .photo-frame img{width:100%; aspect-ratio:1/1; object-fit:cover;}
  .photo-frame .plate{margin-top:10px; width:100%; box-sizing:border-box; display:flex; justify-content:space-between; gap:8px; border:none; box-shadow:none; padding:6px 2px 0;}
  .upload-drop{
    border:2px dashed var(--gold); padding:36px 20px; text-align:center; color:var(--muted);
    margin-bottom:10px; cursor:pointer; font-style:italic; transition:border-color .15s ease, color .15s ease;
  }
  .upload-drop:hover{border-color:var(--sevres); color:var(--sevres);}
  .upload-drop input{display:none;}

  /* ---------- lightbox ---------- */
  .lightbox{
    position:fixed; inset:0; background:rgba(20,10,8,.94); z-index:100;
    display:flex; align-items:center; justify-content:center; flex-direction:column;
    padding:30px; animation:fadein .2s ease;
  }
  .lightbox img{max-height:70vh; max-width:88vw; border:8px solid var(--paper); box-shadow:0 0 0 3px var(--gold), 0 20px 50px rgba(0,0,0,.5);}
  .lightbox .plate{margin-top:20px; background:var(--paper);}
  .lightbox-close, .lightbox-nav{
    position:absolute; background:none; border:1px solid var(--gold); color:var(--gold-bright);
    font-family:'PT Serif',serif; font-size:13px; padding:10px 14px;
  }
  .lightbox-close:hover, .lightbox-nav:hover{background:rgba(221,179,90,.12); border-color:var(--gold-bright);}
  .lightbox-close{top:24px; right:24px;}
  .lightbox-nav.prev{left:24px; top:50%; transform:translateY(-50%);}
  .lightbox-nav.next{right:24px; top:50%; transform:translateY(-50%);}

  /* ---------- modal (new album / settings) ---------- */
  .modal-scrim{position:fixed; inset:0; background:rgba(20,10,8,.62); z-index:90; display:flex; align-items:center; justify-content:center; padding:20px;}
  .modal{background:var(--plaster); border:3px double var(--gold); box-shadow:0 20px 50px rgba(0,0,0,.35); padding:34px; width:100%; max-width:460px; animation:fadein .2s ease;}
  .modal h3{margin:0 0 22px; font-size:22px; font-family:'Yeseva One','PT Serif',serif; font-weight:400; color:var(--sevres-dark);}
  .modal .form-actions{margin-top:24px;}

  .toast{
    position:fixed; bottom:26px; left:50%; transform:translateX(-50%);
    background:var(--sevres-dark); color:var(--gold-bright); border:1px solid var(--gold); padding:12px 22px; font-family:'PT Serif',serif;
    font-size:12px; letter-spacing:.05em; z-index:200; opacity:0; pointer-events:none;
    transition:opacity .25s ease, transform .25s ease;
  }
  .toast.show{opacity:1; transform:translateX(-50%) translateY(-6px);}

  .loading-line{color:var(--muted); font-family:'PT Serif',serif; font-style:italic; font-size:13px; padding:60px 0; text-align:center;}

  footer{border-top:3px double var(--gold); padding:26px 0; text-align:center; color:var(--muted); font-size:11px; font-family:'PT Serif',serif; letter-spacing:.05em; background:rgba(180,132,44,.05);}
  footer a{text-decoration:underline; text-underline-offset:3px; color:var(--sevres-dark);}
  .footer-inner{display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap; text-align:left;}
  .telegram-link{
    display:inline-flex; align-items:center; gap:8px; color:var(--gold-bright); background:var(--sevres);
    border:1px solid var(--gold); padding:8px 16px; font-family:'PT Serif',serif; font-size:11px;
    letter-spacing:.1em; text-transform:uppercase; transition:background .18s ease, color .18s ease;
  }
  .telegram-link:hover{background:var(--sevres-dark); color:var(--paper);}
  .telegram-link svg{width:15px; height:15px; flex:none;}
  .telegram-add-hint{color:var(--muted); font-size:11px; font-style:italic; cursor:pointer; letter-spacing:.02em;}
  .telegram-add-hint:hover{color:var(--sevres);}
  .telegram-frame{border:3px double var(--gold); background:var(--paper); padding:12px; box-shadow:0 8px 22px rgba(42,24,16,.22);}
  .telegram-frame iframe{width:100%; height:660px; border:none; display:block; background:var(--paper);}
  .telegram-open{margin-top:18px; display:inline-flex;}
  .telegram-note{color:var(--ink-soft); font-style:italic; max-width:560px; margin:0 0 22px;}

  @media(max-width:640px){
    .entry{grid-template-columns:1fr; gap:8px;}
    .header-inner{flex-direction:column; align-items:flex-start;}
    .article-full h1{font-size:28px;}
    .article-full .body p:first-of-type::first-letter{font-size:40px;}
  }
</style>
</head>
<body>

<header class="site-header">
  <div class="wrap header-inner">
    <div class="brand" id="brandBtn">
      <div class="eyebrow">Кабинет искусствоведа</div>
      <h1 id="siteName">Имя Фамилия</h1>
      <div class="tagline" id="siteTagline">заметки об искусстве, выставках и живописи</div>
      <svg class="flourish" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <line x1="0" y1="10" x2="82" y2="10" stroke="currentColor" stroke-width="1"/>
        <path d="M100 3 L108 10 L100 17 L92 10 Z" fill="currentColor"/>
        <circle cx="100" cy="10" r="2.4" fill="var(--sevres-dark)"/>
        <line x1="118" y1="10" x2="200" y2="10" stroke="currentColor" stroke-width="1"/>
      </svg>
    </div>
    <div style="display:flex; align-items:center; gap:14px;">
      <nav class="tabs">
        <button class="tab-btn" data-tab="blog">Дневник</button>
        <button class="tab-btn" data-tab="albums">Альбомы</button>
        <button class="tab-btn" data-tab="telegram">Telegram</button>
      </nav>
      <button class="gear-btn" id="settingsBtn">Настройки</button>
    </div>
  </div>
</header>

<main class="wrap" id="main">
  <div class="loading-line">Открываем каталог…</div>
</main>

<footer>
  <div class="wrap footer-inner">
    <div class="footer-text">личный архив · записи хранятся в общем хранилище артефакта · <a href="#" id="resetLink">очистить всё</a></div>
    <div id="telegramSlot"></div>
  </div>
</footer>

<div id="overlayRoot"></div>
<div class="toast" id="toast"></div>

<script>
(function(){
  "use strict";

  /* ---------------- state ---------------- */
  let settings = { name:"Имя Фамилия", tagline:"заметки об искусстве, выставках и живописи", bio:"", telegramUrl:"" };
  let articles = [];      // {id, catNo, title, subtitle, body, date}
  let albumsIndex = [];   // {id, title, description, date, coverThumb, count}
  let albumCache = {};    // id -> full album {id,title,description,date,photos:[{id,caption,dataUrl}]}

  let currentTab = 'blog';
  let currentView = { name:'list' }; // various: {name:'list'} {name:'article',id} {name:'write',editId} {name:'album',id}
  let lightboxState = null; // {albumId, index}

  const main = document.getElementById('main');
  const overlayRoot = document.getElementById('overlayRoot');

  /* ---------------- storage helpers ---------------- */
  async function storageGet(key){
    try{
      const r = await window.storage.get(key, true);
      return r ? JSON.parse(r.value) : null;
    }catch(e){ return null; }
  }
  async function storageSet(key, value){
    try{
      const r = await window.storage.set(key, JSON.stringify(value), true);
      if(!r) throw new Error('no result');
      return true;
    }catch(e){
      showToast('Не удалось сохранить: возможно, альбом стал слишком большим');
      return false;
    }
  }
  async function storageDelete(key){
    try{ await window.storage.delete(key, true); }catch(e){ /* ignore */ }
  }

  function showToast(msg){
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(()=>t.classList.remove('show'), 2600);
  }

  function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,8); }
  function flourishSvg(){
    return `<svg class="flourish" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="0" y1="10" x2="82" y2="10" stroke="currentColor" stroke-width="1"/>
      <path d="M100 3 L108 10 L100 17 L92 10 Z" fill="currentColor"/>
      <circle cx="100" cy="10" r="2.4" fill="var(--paper)"/>
      <line x1="118" y1="10" x2="200" y2="10" stroke="currentColor" stroke-width="1"/>
    </svg>`;
  }
  function fmtDate(iso){
    const d = new Date(iso);
    const months = ['янв','фев','мар','апр','мая','июн','июл','авг','сен','окт','ноя','дек'];
    return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
  }
  function escapeHtml(s){
    return (s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  /* ---------------- init / load ---------------- */
  async function init(){
    const [s, a, ai] = await Promise.all([
      storageGet('site-settings'),
      storageGet('articles'),
      storageGet('albums-index')
    ]);
    if(s) settings = s;
    if(a) articles = a;
    if(ai) albumsIndex = ai;
    applySettingsToHeader();
    setTab('blog');
  }

  function applySettingsToHeader(){
    document.getElementById('siteName').textContent = settings.name || 'Имя Фамилия';
    document.getElementById('siteTagline').textContent = settings.tagline || '';
    renderTelegramSlot();
  }

  function telegramSvg(){
    return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12.5L21.5 3.5L14.8 20.5L11 13.2L2 12.5Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/><line x1="21.5" y1="3.5" x2="11" y2="13.2" stroke="currentColor" stroke-width="1.5"/></svg>`;
  }

  function renderTelegramSlot(){
    const slot = document.getElementById('telegramSlot');
    if(!slot) return;
    if(settings.telegramUrl){
      let href = settings.telegramUrl.trim();
      if(!/^https?:\/\//i.test(href)) href = 'https://' + href.replace(/^\/+/, '');
      slot.innerHTML = `<a class="telegram-link" href="${escapeHtml(href)}" target="_blank" rel="noopener">${telegramSvg()} Telegram</a>`;
    } else {
      slot.innerHTML = `<span class="telegram-add-hint" id="addTelegramHint">+ добавить ссылку на Telegram</span>`;
      document.getElementById('addTelegramHint').onclick = openSettingsModal;
    }
  }

  /* ---------------- tabs ---------------- */
  function setTab(tab){
    currentTab = tab;
    currentView = { name:'list' };
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
    render();
  }

  /* ---------------- render dispatcher ---------------- */
  function render(){
    if(currentTab==='blog'){
      if(currentView.name==='article') renderArticleView(currentView.id);
      else if(currentView.name==='write') renderWriteForm(currentView.editId);
      else renderBlogList();
    } else if(currentTab==='albums'){
      if(currentView.name==='album') renderAlbumView(currentView.id);
      else renderAlbumsList();
    } else if(currentTab==='telegram'){
      renderTelegramView();
    }
  }

  /* ---------------- BLOG: list ---------------- */
  function renderBlogList(){
    const sorted = [...articles].sort((x,y)=> new Date(y.date)-new Date(x.date));
    let listHtml;
    if(sorted.length===0){
      listHtml = `<div class="empty-state">
        <div class="big">Пока ни одной записи</div>
        <div>Первая запись в дневнике — как первая экспликация в новом зале.</div>
      </div>`;
    } else {
      listHtml = `<div class="entry-list">` + sorted.map(a=>`
        <div class="entry" data-open-article="${a.id}">
          <div class="meta">КАТ. № ${String(a.catNo).padStart(3,'0')}<br>${fmtDate(a.date)}</div>
          ${a.cover ? `<img class="entry-thumb" src="${a.cover}" alt="">` : ''}
          <div class="entry-body">
            <h3 class="entry-title">${escapeHtml(a.title)}</h3>
            <p class="excerpt">${escapeHtml(excerptOf(a.body))}</p>
          </div>
        </div>`).join('') + `</div>`;
    }
    main.innerHTML = `
      <div class="view">
        <div class="section-head">
          <h2 class="display">Дневник наблюдений</h2>
          <button class="btn" id="newArticleBtn">Новая запись</button>
        </div>
        <div class="section-divider">${flourishSvg()}</div>
        ${listHtml}
      </div>`;
    document.getElementById('newArticleBtn').onclick = ()=>{ currentView={name:'write', editId:null}; render(); };
    main.querySelectorAll('[data-open-article]').forEach(el=>{
      el.onclick = ()=>{ currentView={name:'article', id:el.dataset.openArticle}; render(); };
    });
  }

  function excerptOf(body){
    const clean = (body||'').replace(/\s+/g,' ').trim();
    return clean.length>170 ? clean.slice(0,170)+'…' : clean;
  }

  /* ---------------- BLOG: article view ---------------- */
  function renderArticleView(id){
    const a = articles.find(x=>x.id===id);
    if(!a){ currentView={name:'list'}; return render(); }
    const images = a.images || [];
    let illustrationNo = 0;
    const blocks = (a.body||'').split(/\n\s*\n/).map(b=>b.trim()).filter(Boolean);
    const bodyHtml = blocks.map(block=>{
      const m = block.match(/^\{\{image:(.+)\}\}$/);
      if(m){
        const img = images.find(im=>im.id===m[1]);
        if(!img) return '';
        illustrationNo++;
        return `<figure class="inline-figure">
          <img src="${img.dataUrl}" alt="">
          <span class="plate">Илл. ${illustrationNo}${img.caption ? ' · '+escapeHtml(img.caption) : ''}</span>
        </figure>`;
      }
      return `<p>${escapeHtml(block)}</p>`;
    }).join('');
    main.innerHTML = `
      <div class="view article-full">
        <div class="article-tools">
          <button class="btn ghost small" id="backBtn">← К дневнику</button>
          <button class="btn ghost small" id="editBtn">Редактировать</button>
          <button class="btn danger small" id="delBtn">Удалить</button>
        </div>
        ${a.cover ? `<figure class="cover-figure"><img src="${a.cover}" alt=""><span class="plate">Кат. № ${String(a.catNo).padStart(3,'0')} · ${fmtDate(a.date)}</span></figure>` : `<div class="plate">Кат. № ${String(a.catNo).padStart(3,'0')} · ${fmtDate(a.date)}</div>`}
        <h1 class="display">${escapeHtml(a.title)}</h1>
        ${a.subtitle ? `<p class="subtitle">${escapeHtml(a.subtitle)}</p>` : ''}
        <div class="body">${bodyHtml}</div>
      </div>`;
    document.getElementById('backBtn').onclick = ()=>{ currentView={name:'list'}; render(); };
    document.getElementById('editBtn').onclick = ()=>{ currentView={name:'write', editId:a.id}; render(); };
    document.getElementById('delBtn').onclick = async ()=>{
      if(!confirm('Удалить эту запись безвозвратно?')) return;
      articles = articles.filter(x=>x.id!==a.id);
      await storageSet('articles', articles);
      currentView={name:'list'}; render();
      showToast('Запись удалена');
    };
  }

  /* ---------------- BLOG: write / edit form ---------------- */
  function renderWriteForm(editId){
    const editing = editId ? articles.find(x=>x.id===editId) : null;
    // local working copies, only committed to the article on save
    let formCover = editing ? (editing.cover || null) : null;
    let formImages = editing && editing.images ? JSON.parse(JSON.stringify(editing.images)) : [];

    main.innerHTML = `
      <div class="view form-card">
        <div class="section-head"><h2>${editing?'Редактировать запись':'Новая запись'}</h2></div>

        <div class="field">
          <label>Заглавное фото (необязательно)</label>
          <div id="coverArea"></div>
        </div>

        <div class="field title-field">
          <label>Заголовок</label>
          <input type="text" id="fTitle" placeholder="Название записи" value="${editing?escapeHtml(editing.title):''}">
        </div>
        <div class="field">
          <label>Подзаголовок (необязательно)</label>
          <input type="text" id="fSubtitle" placeholder="Короткий подзаголовок" value="${editing?escapeHtml(editing.subtitle||''):''}">
        </div>
        <div class="field">
          <label>Текст записи</label>
          <textarea id="fBody" placeholder="Пишите здесь. Пустая строка между абзацами разделяет их.">${editing?escapeHtml(editing.body):''}</textarea>
          <div class="field-hint">Чтобы вставить фото внутрь текста, поставьте курсор в нужное место и нажмите «Вставить фото в текст».</div>
          <div class="file-btn-row" style="margin-top:10px;">
            <label class="btn ghost small" style="display:inline-block;">
              Вставить фото в текст
              <input type="file" id="inlineImgInput" accept="image/*" multiple style="display:none;">
            </label>
            <span id="inlineImgStatus" class="mono" style="font-size:12px; color:var(--muted);"></span>
          </div>
          <div class="inline-img-list" id="inlineImgList"></div>
        </div>
        <div class="form-actions">
          <button class="btn" id="saveBtn">${editing?'Сохранить изменения':'Опубликовать'}</button>
          <button class="btn ghost" id="cancelBtn">Отмена</button>
        </div>
      </div>`;

    function renderCoverArea(){
      const area = document.getElementById('coverArea');
      if(formCover){
        area.innerHTML = `<div class="cover-preview"><img src="${formCover}" alt=""><button type="button" class="remove-cover" id="removeCoverBtn">✕ убрать</button></div>`;
        document.getElementById('removeCoverBtn').onclick = ()=>{ formCover=null; renderCoverArea(); };
      } else {
        area.innerHTML = `<label class="upload-drop cover-picker" style="display:block;">
          + Загрузить заглавное фото
          <input type="file" id="coverInput" accept="image/*" style="display:none;">
        </label>`;
        document.getElementById('coverInput').onchange = async (e)=>{
          const file = e.target.files[0];
          if(!file) return;
          formCover = await fileToCompressedDataUrl(file, 1400, 0.8);
          renderCoverArea();
        };
      }
    }
    function renderInlineImgList(){
      const list = document.getElementById('inlineImgList');
      list.innerHTML = formImages.map(im=>`
        <div class="inline-img-item">
          <img src="${im.dataUrl}" alt="">
          <button type="button" class="rm" data-rm-inline="${im.id}">✕</button>
        </div>`).join('');
      list.querySelectorAll('[data-rm-inline]').forEach(btn=>{
        btn.onclick = ()=>{
          const imgId = btn.dataset.rmInline;
          formImages = formImages.filter(im=>im.id!==imgId);
          const ta = document.getElementById('fBody');
          ta.value = ta.value.replace(new RegExp('[\\s]*\\{\\{image:'+imgId+'\\}\\}[\\s]*','g'), '\n\n');
          renderInlineImgList();
        };
      });
    }

    renderCoverArea();
    renderInlineImgList();

    document.getElementById('inlineImgInput').onchange = async (e)=>{
      const files = Array.from(e.target.files||[]);
      if(!files.length) return;
      const statusEl = document.getElementById('inlineImgStatus');
      const ta = document.getElementById('fBody');
      for(const file of files){
        statusEl.textContent = 'Обрабатываем фото…';
        try{
          const dataUrl = await fileToCompressedDataUrl(file, 1000, 0.78);
          const id = uid();
          formImages.push({ id, dataUrl, caption:'' });
          const marker = `\n\n{{image:${id}}}\n\n`;
          const start = ta.selectionStart ?? ta.value.length;
          const end = ta.selectionEnd ?? ta.value.length;
          ta.value = ta.value.slice(0,start) + marker + ta.value.slice(end);
        }catch(err){ /* skip failed file */ }
      }
      statusEl.textContent = '';
      e.target.value = '';
      renderInlineImgList();
    };

    document.getElementById('cancelBtn').onclick = ()=>{
      currentView = editing ? {name:'article', id:editing.id} : {name:'list'};
      render();
    };
    document.getElementById('saveBtn').onclick = async ()=>{
      const title = document.getElementById('fTitle').value.trim();
      const subtitle = document.getElementById('fSubtitle').value.trim();
      const body = document.getElementById('fBody').value.trim();
      if(!title || !body){ showToast('Нужен хотя бы заголовок и текст'); return; }
      if(editing){
        editing.title=title; editing.subtitle=subtitle; editing.body=body;
        editing.cover=formCover; editing.images=formImages;
      } else {
        const catNo = articles.length ? Math.max(...articles.map(a=>a.catNo))+1 : 1;
        articles.push({ id:uid(), catNo, title, subtitle, body, date:new Date().toISOString(), cover:formCover, images:formImages });
      }
      const ok = await storageSet('articles', articles);
      if(ok){
        showToast(editing?'Изменения сохранены':'Запись опубликована');
        currentView = {name:'article', id: editing?editing.id:articles[articles.length-1].id};
        render();
      }
    };
  }

  /* ---------------- ALBUMS: list ---------------- */
  function renderAlbumsList(){
    let gridHtml;
    if(albumsIndex.length===0){
      gridHtml = `<div class="empty-state">
        <div class="big">Альбомов пока нет</div>
        <div>Создайте первый альбом, чтобы собрать фотографии работ или выставок.</div>
      </div>`;
    } else {
      gridHtml = `<div class="album-grid">` + albumsIndex.map(al=>`
        <div class="album-card" data-open-album="${al.id}">
          <div class="album-cover" style="${al.coverThumb ? `background-image:url('${al.coverThumb}')` : ''}">
            ${al.coverThumb ? '' : 'нет фото'}
          </div>
          <div class="plate">
            <span class="a-title">${escapeHtml(al.title)}</span>
            <span class="a-count">${al.count} фото · ${fmtDate(al.date)}</span>
          </div>
        </div>`).join('') + `</div>`;
    }
    main.innerHTML = `
      <div class="view">
        <div class="section-head">
          <h2 class="display">Альбомы</h2>
          <button class="btn" id="newAlbumBtn">Создать альбом</button>
        </div>
        <div class="section-divider">${flourishSvg()}</div>
        ${gridHtml}
      </div>`;
    document.getElementById('newAlbumBtn').onclick = openNewAlbumModal;
    main.querySelectorAll('[data-open-album]').forEach(el=>{
      el.onclick = async ()=>{
        currentView = {name:'album', id: el.dataset.openAlbum};
        render();
      };
    });
  }

  function openNewAlbumModal(){
    overlayRoot.innerHTML = `
      <div class="modal-scrim" id="scrim">
        <div class="modal">
          <h3>Новый альбом</h3>
          <div class="field">
            <label>Название</label>
            <input type="text" id="mTitle" placeholder="Например, «Венецианская биеннале, 2026»">
          </div>
          <div class="field">
            <label>Описание (необязательно)</label>
            <input type="text" id="mDesc" placeholder="Пара слов об альбоме">
          </div>
          <div class="form-actions">
            <button class="btn" id="mCreate">Создать</button>
            <button class="btn ghost" id="mCancel">Отмена</button>
          </div>
        </div>
      </div>`;
    document.getElementById('scrim').onclick = (e)=>{ if(e.target.id==='scrim') closeModal(); };
    document.getElementById('mCancel').onclick = closeModal;
    document.getElementById('mCreate').onclick = async ()=>{
      const title = document.getElementById('mTitle').value.trim();
      const description = document.getElementById('mDesc').value.trim();
      if(!title){ showToast('Дайте альбому название'); return; }
      const id = uid();
      const date = new Date().toISOString();
      albumsIndex.push({ id, title, description, date, coverThumb:null, count:0 });
      albumCache[id] = { id, title, description, date, photos:[] };
      const ok1 = await storageSet('albums-index', albumsIndex);
      const ok2 = await storageSet('album:'+id, albumCache[id]);
      if(ok1 && ok2){
        closeModal();
        currentView = {name:'album', id};
        render();
      }
    };
  }
  function closeModal(){ overlayRoot.innerHTML=''; }

  /* ---------------- ALBUMS: detail / photo grid ---------------- */
  async function renderAlbumView(id){
    if(!albumCache[id]){
      main.innerHTML = `<div class="loading-line">Открываем альбом…</div>`;
      const full = await storageGet('album:'+id);
      albumCache[id] = full || { id, title:'Альбом', description:'', date:new Date().toISOString(), photos:[] };
    }
    const album = albumCache[id];
    let gridHtml;
    if(album.photos.length===0){
      gridHtml = `<div class="empty-state"><div class="big">В альбоме пока нет фотографий</div><div>Загрузите первые снимки ниже.</div></div>`;
    } else {
      gridHtml = `<div class="photo-grid">` + album.photos.map((p,i)=>`
        <div class="photo-frame" data-photo-index="${i}">
          <img src="${p.dataUrl}" alt="${escapeHtml(p.caption||'')}">
          <div class="plate">
            <span>${escapeHtml(p.caption) || ('снимок № '+String(i+1).padStart(2,'0'))}</span>
            <span data-del-photo="${p.id}" style="color:var(--sevres); cursor:pointer;">✕</span>
          </div>
        </div>`).join('') + `</div>`;
    }
    main.innerHTML = `
      <div class="view">
        <div class="article-tools">
          <button class="btn ghost small" id="backAlbumsBtn">← К альбомам</button>
          <button class="btn danger small" id="delAlbumBtn">Удалить альбом</button>
        </div>
        <div class="album-head">
          <h1 class="display">${escapeHtml(album.title)}</h1>
          ${album.description ? `<p>${escapeHtml(album.description)}</p>` : ''}
        </div>
        <label class="upload-drop" id="uploadDrop">
          + Добавить фотографии (можно выбрать сразу несколько)
          <input type="file" id="fileInput" accept="image/*" multiple>
        </label>
        <div id="uploadStatus" class="mono" style="font-size:12px; color:var(--muted); min-height:16px;"></div>
        ${gridHtml}
      </div>`;

    document.getElementById('backAlbumsBtn').onclick = ()=>{ currentView={name:'list'}; render(); };
    document.getElementById('delAlbumBtn').onclick = async ()=>{
      if(!confirm('Удалить альбом и все фотографии в нём?')) return;
      albumsIndex = albumsIndex.filter(a=>a.id!==id);
      delete albumCache[id];
      await storageSet('albums-index', albumsIndex);
      await storageDelete('album:'+id);
      currentView={name:'list'}; render();
      showToast('Альбом удалён');
    };
    document.getElementById('fileInput').onchange = (e)=> handleUpload(id, e.target.files);
    main.querySelectorAll('[data-photo-index]').forEach(el=>{
      el.addEventListener('click', (e)=>{
        if(e.target.hasAttribute('data-del-photo')) return;
        openLightbox(id, parseInt(el.dataset.photoIndex,10));
      });
    });
    main.querySelectorAll('[data-del-photo]').forEach(el=>{
      el.onclick = async (e)=>{
        e.stopPropagation();
        const pid = el.dataset.delPhoto;
        album.photos = album.photos.filter(p=>p.id!==pid);
        const idxEntry = albumsIndex.find(a=>a.id===id);
        if(idxEntry){
          idxEntry.count = album.photos.length;
          idxEntry.coverThumb = album.photos.length ? await makeThumb(album.photos[0].dataUrl) : null;
        }
        await storageSet('album:'+id, album);
        await storageSet('albums-index', albumsIndex);
        render();
      };
    });
  }

  async function makeThumb(fullDataUrl){
    // downsizes an already-compressed dataUrl further for the index cover
    return new Promise((resolve)=>{
      const img = new Image();
      img.onload = ()=>{
        const maxDim = 320;
        let {width,height} = img;
        if(width>height){ if(width>maxDim){height*=maxDim/width; width=maxDim;} }
        else { if(height>maxDim){width*=maxDim/height; height=maxDim;} }
        const c = document.createElement('canvas'); c.width=width; c.height=height;
        c.getContext('2d').drawImage(img,0,0,width,height);
        resolve(c.toDataURL('image/jpeg',0.6));
      };
      img.onerror = ()=>resolve(fullDataUrl);
      img.src = fullDataUrl;
    });
  }

  function fileToCompressedDataUrl(file, maxDim, quality){
    return new Promise((resolve,reject)=>{
      const reader = new FileReader();
      reader.onload = (e)=>{
        const img = new Image();
        img.onload = ()=>{
          let {width,height} = img;
          if(width>height){ if(width>maxDim){height*=maxDim/width; width=maxDim;} }
          else { if(height>maxDim){width*=maxDim/height; height=maxDim;} }
          const canvas = document.createElement('canvas');
          canvas.width=width; canvas.height=height;
          canvas.getContext('2d').drawImage(img,0,0,width,height);
          resolve(canvas.toDataURL('image/jpeg', quality));
        };
        img.onerror = reject;
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function handleUpload(albumId, fileList){
    const files = Array.from(fileList||[]).filter(f=>f.type.startsWith('image/'));
    if(!files.length) return;
    const statusEl = document.getElementById('uploadStatus');
    const album = albumCache[albumId];
    let done = 0;
    for(const file of files){
      if(statusEl) statusEl.textContent = `Обрабатываем фото ${++done} из ${files.length}…`;
      try{
        const dataUrl = await fileToCompressedDataUrl(file, 1100, 0.8);
        album.photos.push({ id:uid(), caption:'', dataUrl });
      }catch(err){ /* skip failed file */ }
    }
    const idxEntry = albumsIndex.find(a=>a.id===albumId);
    if(idxEntry){
      idxEntry.count = album.photos.length;
      if(!idxEntry.coverThumb && album.photos.length){
        idxEntry.coverThumb = await makeThumb(album.photos[0].dataUrl);
      }
    }
    if(statusEl) statusEl.textContent = 'Сохраняем…';
    const ok1 = await storageSet('album:'+albumId, album);
    const ok2 = await storageSet('albums-index', albumsIndex);
    if(ok1 && ok2){ showToast('Фотографии добавлены'); }
    render();
  }

  /* ---------------- TELEGRAM: channel embed ---------------- */
  function extractTelegramUsername(raw){
    if(!raw) return null;
    let s = raw.trim();
    s = s.replace(/^https?:\/\//i,'');
    s = s.replace(/^t\.me\//i,'');
    s = s.replace(/^telegram\.me\//i,'');
    s = s.replace(/^@/,'');
    s = s.split(/[/?#]/)[0];
    return s || null;
  }

  function renderTelegramView(){
    const username = extractTelegramUsername(settings.telegramUrl);
    if(!username){
      main.innerHTML = `
        <div class="view">
          <div class="section-head"><h2 class="display">Telegram</h2></div>
          <div class="section-divider">${flourishSvg()}</div>
          <div class="empty-state">
            <div class="big">Канал ещё не привязан</div>
            <div style="margin-bottom:18px;">Укажите ссылку на канал в настройках — и его последние записи появятся здесь.</div>
            <button class="btn" id="goSetTelegram">Указать канал</button>
          </div>
        </div>`;
      document.getElementById('goSetTelegram').onclick = openSettingsModal;
      return;
    }
    main.innerHTML = `
      <div class="view">
        <div class="section-head"><h2 class="display">Telegram-канал</h2></div>
        <div class="section-divider">${flourishSvg()}</div>
        <p class="telegram-note">Здесь показана лента канала <strong>@${escapeHtml(username)}</strong> — она подгружается напрямую из Telegram и обновляется сама.</p>
        <div class="telegram-frame">
          <iframe src="https://t.me/s/${encodeURIComponent(username)}" loading="lazy"></iframe>
        </div>
        <a class="btn ghost telegram-open" href="https://t.me/${encodeURIComponent(username)}" target="_blank" rel="noopener">Открыть канал в Telegram →</a>
      </div>`;
  }

  /* ---------------- lightbox ---------------- */
  function openLightbox(albumId, index){
    lightboxState = { albumId, index };
    renderLightbox();
  }
  function renderLightbox(){
    if(!lightboxState){ overlayRoot.innerHTML=''; return; }
    const album = albumCache[lightboxState.albumId];
    const p = album.photos[lightboxState.index];
    if(!p){ lightboxState=null; overlayRoot.innerHTML=''; return; }
    overlayRoot.innerHTML = `
      <div class="lightbox" id="lb">
        <button class="lightbox-close" id="lbClose">✕ закрыть</button>
        ${album.photos.length>1 ? `<button class="lightbox-nav prev" id="lbPrev">←</button><button class="lightbox-nav next" id="lbNext">→</button>` : ''}
        <img src="${p.dataUrl}" alt="">
        <div class="plate">
          <input type="text" id="capInput" value="${escapeHtml(p.caption)}" placeholder="Добавить подпись…"
            style="border:none; background:none; font-family:'PT Serif',serif; font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-soft); width:280px;">
        </div>
      </div>`;
    document.getElementById('lbClose').onclick = ()=>{ lightboxState=null; overlayRoot.innerHTML=''; render(); };
    document.getElementById('lb').addEventListener('click',(e)=>{ if(e.target.id==='lb'){ lightboxState=null; overlayRoot.innerHTML=''; render(); } });
    const prevBtn = document.getElementById('lbPrev');
    const nextBtn = document.getElementById('lbNext');
    if(prevBtn) prevBtn.onclick = ()=>{ lightboxState.index = (lightboxState.index-1+album.photos.length)%album.photos.length; renderLightbox(); };
    if(nextBtn) nextBtn.onclick = ()=>{ lightboxState.index = (lightboxState.index+1)%album.photos.length; renderLightbox(); };
    document.getElementById('capInput').onchange = async (e)=>{
      p.caption = e.target.value.trim();
      await storageSet('album:'+lightboxState.albumId, album);
    };
  }
  document.addEventListener('keydown', (e)=>{
    if(!lightboxState) return;
    if(e.key==='Escape'){ lightboxState=null; overlayRoot.innerHTML=''; render(); }
    if(e.key==='ArrowLeft') document.getElementById('lbPrev')?.click();
    if(e.key==='ArrowRight') document.getElementById('lbNext')?.click();
  });

  /* ---------------- settings modal ---------------- */
  function openSettingsModal(){
    overlayRoot.innerHTML = `
      <div class="modal-scrim" id="scrim">
        <div class="modal">
          <h3>Настройки страницы</h3>
          <div class="field">
            <label>Имя</label>
            <input type="text" id="sName" value="${escapeHtml(settings.name)}">
          </div>
          <div class="field">
            <label>Подзаголовок</label>
            <input type="text" id="sTag" value="${escapeHtml(settings.tagline)}">
          </div>
          <div class="field">
            <label>Ссылка на Telegram (необязательно)</label>
            <input type="text" id="sTelegram" placeholder="https://t.me/имя_канала" value="${escapeHtml(settings.telegramUrl||'')}">
          </div>
          <div class="form-actions">
            <button class="btn" id="sSave">Сохранить</button>
            <button class="btn ghost" id="sCancel">Отмена</button>
          </div>
        </div>
      </div>`;
    document.getElementById('scrim').onclick = (e)=>{ if(e.target.id==='scrim') closeModal(); };
    document.getElementById('sCancel').onclick = closeModal;
    document.getElementById('sSave').onclick = async ()=>{
      settings.name = document.getElementById('sName').value.trim() || 'Имя Фамилия';
      settings.tagline = document.getElementById('sTag').value.trim();
      settings.telegramUrl = document.getElementById('sTelegram').value.trim();
      await storageSet('site-settings', settings);
      applySettingsToHeader();
      closeModal();
      showToast('Настройки сохранены');
    };
  }

  /* ---------------- global bindings ---------------- */
  document.querySelectorAll('.tab-btn').forEach(b=> b.onclick = ()=> setTab(b.dataset.tab));
  document.getElementById('settingsBtn').onclick = openSettingsModal;
  document.getElementById('brandBtn').onclick = ()=> setTab('blog');
  document.getElementById('resetLink').onclick = async (e)=>{
    e.preventDefault();
    if(!confirm('Это удалит все записи и альбомы безвозвратно. Продолжить?')) return;
    for(const al of albumsIndex){ await storageDelete('album:'+al.id); }
    articles = []; albumsIndex = []; albumCache = {};
    await storageSet('articles', articles);
    await storageSet('albums-index', albumsIndex);
    currentView = {name:'list'};
    render();
    showToast('Данные очищены');
  };

  init();
})();
</script>
</body>
</html>
