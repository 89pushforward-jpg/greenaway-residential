/* Greenaway Residential — shared scripts */

/* Live open/closed status — office hours (UK time).
   NOTE: hours are an estimate — confirm with the client. 0=Sun..6=Sat, [open,close] in decimal hours, null = closed */
(function(){
  var HOURS = {0:null, 1:[9,18], 2:[9,18], 3:[9,18], 4:[9,18], 5:[9,18], 6:[9,16]};
  var DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var el = document.getElementById('liveStatus');
  if(!el) return;
  function fmt(h){
    var hh = Math.floor(h), mm = Math.round((h-hh)*60);
    var ap = hh>=12 ? 'pm':'am';
    var h12 = hh%12===0 ? 12 : hh%12;
    return h12 + (mm? ':'+(mm<10?'0':'')+mm : '') + ap;
  }
  function update(){
    var p = new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',weekday:'short',hour:'numeric',minute:'numeric',hour12:false}).formatToParts(new Date());
    var map={}; p.forEach(function(x){map[x.type]=x.value;});
    var wd = {Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6}[map.weekday];
    var now = parseInt(map.hour,10) + parseInt(map.minute,10)/60;
    var t = HOURS[wd];
    var txt = el.querySelector('.txt'), hrs = el.querySelector('.hrs');
    if(t && now>=t[0] && now<t[1]){
      el.classList.remove('closed');
      txt.textContent = 'Open now';
      hrs.textContent = '· until '+fmt(t[1])+' today';
    } else {
      el.classList.add('closed');
      txt.textContent = 'Closed';
      var d = wd, add = 0, opens = null;
      for(var i=0;i<7;i++){
        var cand = HOURS[d];
        if(cand && (i>0 || now<cand[0])){ opens = cand; break; }
        d=(d+1)%7; add++;
      }
      if(opens){
        var when = add===0 ? 'today' : (add===1 ? 'tomorrow' : DAYS[d]);
        hrs.textContent = '· opens '+when+' at '+fmt(opens[0]);
      }
    }
  }
  update();
  setInterval(update, 60000);
})();

/* burger menu */
(function(){
  var burger=document.getElementById('burger'), nav=document.getElementById('navLinks');
  if(!burger||!nav) return;
  burger.addEventListener('click',function(){nav.classList.toggle('open');});
  nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');});});
})();

/* reveal on scroll */
(function(){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.1});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
})();

/* property search bar (demo) */
(function(){
  var form=document.getElementById('searchForm');
  if(!form) return;
  var seg=document.getElementById('segToggle'), price=document.getElementById('sPrice'), note=document.getElementById('searchNote');
  var BUY=['Any max price','£200,000','£300,000','£400,000','£500,000','£600,000','£700,000','£800,000','£900,000','£1,000,000','£1,500,000','£2,000,000+'];
  var RENT=['Any max price','£750 pcm','£1,000 pcm','£1,250 pcm','£1,500 pcm','£1,750 pcm','£2,000 pcm','£2,500 pcm','£3,000 pcm+'];
  var mode='buy';
  function fill(){
    var list = mode==='buy' ? BUY : RENT;
    price.innerHTML = list.map(function(o){return '<option>'+o+'</option>';}).join('');
  }
  seg.querySelectorAll('button').forEach(function(b){
    b.addEventListener('click',function(){
      mode=b.dataset.mode;
      seg.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===b);});
      fill();
    });
  });
  fill();
  form.addEventListener('submit',function(e){
    e.preventDefault();
    note.classList.add('show');
    document.getElementById('properties').scrollIntoView({behavior:'smooth'});
  });
})();

/* valuation form (demo — live site emails the team) */
(function(){
  var f=document.getElementById('valForm');
  if(!f) return;
  f.addEventListener('submit',function(e){
    e.preventDefault();
    if(window.GRProps) window.GRProps.addEnquiry({
      kind:'valuation',
      name:document.getElementById('vName').value,
      phone:document.getElementById('vPhone').value,
      email:document.getElementById('vEmail').value,
      msg:document.getElementById('vAddr').value+' — '+document.getElementById('vType').value
    });
    document.getElementById('valSuccess').style.display='block';
    f.querySelector('button[type=submit]').textContent='Request Sent ✓';
  });
})();

/* featured properties — rendered from shared data so admin changes show everywhere */
(function(){
  var grid=document.getElementById('propsGrid');
  if(!grid || !window.GRProps) return;
  function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  grid.innerHTML = window.GRProps.getAll().map(function(p){
    var agreed = /agreed|sold stc|sold/i.test(p.status) ? ' agreed' : '';
    var cover = (p.photos && p.photos[0]) || 'assets/East-Grinstead-2200x1237.jpg';
    return '<article class="prop reveal in" data-mode="'+esc(p.mode)+'">'+
      '<a href="property.html?id='+encodeURIComponent(p.id)+'">'+
      '<div class="ph"><img src="'+esc(cover)+'" alt="'+esc(p.address)+'" loading="lazy"><span class="stag'+agreed+'">'+esc(p.status)+'</span></div>'+
      '<div class="body"><div class="price">'+window.GRProps.priceLabel(p)+'</div>'+
      '<div class="addr">'+esc(p.address)+'</div>'+
      '<div class="meta"><span>'+esc(p.beds)+' bed</span><span>'+esc(p.baths)+' bath</span><span>'+esc(p.receptions)+' reception</span></div></div></a></article>';
  }).join('');
})();

/* instant online valuation (demo estimate) */
(function(){
  var modal=document.getElementById('ivModal');
  if(!modal) return;
  function open(e){ if(e)e.preventDefault(); modal.classList.add('open'); document.getElementById('ivStep1').style.display='block'; document.getElementById('ivResult').classList.remove('show'); }
  function close(){ modal.classList.remove('open'); }
  document.querySelectorAll('[data-iv-open]').forEach(function(b){ b.addEventListener('click', open); });
  modal.querySelectorAll('[data-iv-close]').forEach(function(b){ b.addEventListener('click', close); });
  modal.addEventListener('click', function(e){ if(e.target===modal) close(); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') close(); });

  var SALE_BASE={flat:265000,terraced:360000,semi:440000,detached:640000};
  var RENT_BASE={flat:1150,terraced:1400,semi:1550,detached:1900};
  var TYPE_LABEL={flat:'flat',terraced:'terraced house',semi:'semi-detached house',detached:'detached house'};
  function area(pc){
    pc=(pc||'').toUpperCase().replace(/\s/g,'');
    if(pc.indexOf('RH19')===0) return {f:1.02,label:'East Grinstead (RH19)'};
    if(pc.indexOf('RH10')===0) return {f:0.95,label:'Crawley (RH10)'};
    return {f:0.98,label:'your area'};
  }
  function fmt(n){ return '£'+Math.round(n).toLocaleString('en-GB'); }
  document.getElementById('ivForm').addEventListener('submit', function(e){
    e.preventDefault();
    var type=document.getElementById('ivType').value;
    var beds=Number(document.getElementById('ivBeds').value);
    var mode=document.getElementById('ivMode').value;
    var a=area(document.getElementById('ivPostcode').value);
    var mid, lo, hi, label;
    if(mode==='sale'){
      mid = SALE_BASE[type]*(1+(beds-2)*0.14)*a.f;
      lo=Math.round(mid*0.93/5000)*5000; hi=Math.round(mid*1.07/5000)*5000;
      label=fmt(lo)+' – '+fmt(hi);
    } else {
      mid = RENT_BASE[type]+(beds-1)*350; mid*=a.f;
      lo=Math.round(mid*0.93/25)*25; hi=Math.round(mid*1.07/25)*25;
      label=fmt(lo)+' – '+fmt(hi)+' pcm';
    }
    document.getElementById('ivRange').textContent=label;
    document.getElementById('ivBasis').textContent='Based on a '+beds+'-bed '+TYPE_LABEL[type]+' in '+a.label;
    document.getElementById('ivStep1').style.display='none';
    document.getElementById('ivResult').classList.add('show');
    if(window.GRProps) window.GRProps.addEnquiry({
      kind:'instant-valuation',
      name:'(instant tool)',
      msg:document.getElementById('ivPostcode').value+' · '+beds+'-bed '+TYPE_LABEL[type]+' · '+(mode==='sale'?'sale':'rental')+' · shown '+label
    });
  });
})();
