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
    document.getElementById('valSuccess').style.display='block';
    f.querySelector('button[type=submit]').textContent='Request Sent ✓';
  });
})();
