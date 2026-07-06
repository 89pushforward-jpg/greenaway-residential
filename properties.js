/* Greenaway Residential — property data + admin merge layer.
   Default listings are the agency's real current listings (July 2026).
   The demo admin (admin.html) stores overrides & new properties in localStorage;
   GRProps.getAll() merges them so every page shows the same data. */

window.GR_DEFAULT_PROPS = [
  {
    id: "eag260121-london-road",
    ref: "EAG260121",
    mode: "rent",
    status: "To Let",
    price: 1125,
    address: "London Road, East Grinstead",
    type: "Apartment",
    beds: 1, baths: 1, receptions: 1,
    available: "Now",
    furnished: "Unfurnished",
    summary: "Bright one bedroom first-floor apartment with open-plan lounge/kitchen, available immediately.",
    description: [
      "Greenaway Residential Letting Agents are delighted to welcome this one bedroom, first floor apartment to the rental market. Available immediately and unfurnished, the property benefits from double glazed windows, gas central heating, and bright, neutral decor throughout.",
      "Entering the property into the entrance area, this opens up into an open-plan lounge and kitchen featuring laminate flooring and windows facing the front of the property. The kitchen area comprises a range of matching base and eye level units with workspace over, an integrated oven and electric hob with extractor fan over, a washing machine, and fridge/freezer. A breakfast bar provides a natural divide to the spacious living area. A central inner hallway leads through to the large double bedroom, which features a wide window offering plenty of natural light. The bathroom is fitted with a contemporary white suite comprising a panelled bathtub with a glass shower screen and shower over, a pedestal handwash basin, a low level WC, and a heated towel rail.",
      "A viewing of this property is highly recommended to appreciate the size, layout, and condition. Please call one of our lettings team on 01342 777977 to book an appointment."
    ],
    features: [
      "Available immediately",
      "First floor apartment",
      "Open-plan lounge & kitchen with breakfast bar",
      "Double glazed windows",
      "Gas central heating",
      "Large double bedroom",
      "Contemporary white bathroom suite",
      "Bright, neutral decor throughout"
    ],
    photos: [
      "assets/props/EAG260121_08.jpg",
      "assets/props/EAG260121_01.jpg",
      "assets/props/EAG260121_02.jpg",
      "assets/props/EAG260121_03.jpg",
      "assets/props/EAG260121_04.jpg",
      "assets/props/EAG260121_05.jpg",
      "assets/props/EAG260121_06.jpg",
      "assets/props/EAG260121_07.jpg"
    ],
    mapQ: "London Road, East Grinstead RH19"
  },
  {
    id: "eag260117-wood-street",
    ref: "EAG260117",
    mode: "rent",
    status: "Let Agreed",
    price: 1260,
    address: "Wood Street, East Grinstead",
    type: "Apartment",
    beds: 1, baths: 1, receptions: 1,
    available: "Mid August",
    furnished: "Furnished",
    summary: "Modern furnished one bedroom first-floor apartment with allocated parking behind electric gates.",
    description: [
      "Greenaway Residential Lettings Agents are delighted to welcome this one bedroom modern apartment to the lettings market. Available mid August, this property comes furnished and is located on the first floor. The apartment boasts many modern features throughout and has been finished to a high standard. The property also comes with an allocated parking space behind the electric fob operated gates.",
      "Entering the property into the reception area, the hardwood effect flooring extends throughout the layout. This space opens into the lounge, which features windows with fitted blinds, accommodating both a dining table and a seating area. The kitchen consists of a range of base and eye-level units, an integrated fridge/freezer, a built-in oven, an electric 4-ring hob, an integrated microwave, and a stainless steel sink with mixer taps. Double doors adjacent to the kitchen open to a utility storage cupboard. Separate doors lead to the bedroom and the bathroom. The bedroom includes a window and a built-in wardrobe with mirrored doors. The bathroom features a bathtub with an overhead shower and a glass screen, a floating vanity sink with under-sink storage, a low-level WC, and a circular backlit mirror.",
      "A viewing of this apartment is highly recommended to appreciate the size, standard, location and specification. Please call one of our knowledgeable lettings team on 01342 777977 to arrange an appointment."
    ],
    features: [
      "Available mid August",
      "Furnished to a high standard",
      "Allocated parking behind electric gates",
      "Hardwood effect flooring throughout",
      "Built-in wardrobe with mirrored doors",
      "Integrated kitchen appliances",
      "Utility storage cupboard",
      "Fitted blinds"
    ],
    photos: [
      "assets/props/EAG260117_02.jpg",
      "assets/props/EAG260117_01.jpg",
      "assets/props/EAG260117_03.jpg",
      "assets/props/EAG260117_04.jpg",
      "assets/props/EAG260117_05.jpg",
      "assets/props/EAG260117_06.jpg",
      "assets/props/EAG260117_10.jpg"
    ],
    mapQ: "Wood Street, East Grinstead RH19"
  },
  {
    id: "eag260116-wood-street",
    ref: "EAG260116",
    mode: "rent",
    status: "To Let",
    price: 1300,
    address: "Wood Street, East Grinstead",
    type: "Apartment",
    beds: 1, baths: 1, receptions: 1,
    available: "Early August",
    furnished: "Furnished",
    summary: "Modern fourth-floor apartment in New Acre House with camera entry and allocated parking.",
    description: [
      "Greenaway Residential Letting Agents are delighted to welcome this modern apartment to the lettings market. Available early August and furnished, the apartment is located on the fourth floor of New Acre House. The property has been finished to a high standard and boasts many modern features throughout. All of the communal areas are very modern with photography of East Grinstead lining the halls and several new elevators in use to reach the higher floors. The property also comes with an allocated parking space behind the electric fob operated gates.",
      "Entering the property into the reception area you will notice the hardwood effect flooring which is a feature throughout the property and a high-tech camera entry system. Opening up into the lounge with windows dressed with fitted blinds. The kitchenette has a range of base and eye level units with integrated fridge/freezer, oven, electric 4-ring hob, extractor fan and microwave as well as a stainless steel sink unit with mixer taps. Also off the lounge is a small utility cupboard/pantry. Further doors lead to the bedroom and bathroom. The bedroom is filled with natural light owing to the large windows and offers a built-in wardrobe with mirrored frontage and built-in drawer unit. The bathroom is very modern in appearance, comprising a shower over bathtub, vanity handwash sink with storage below, low level WC, heated towel rail and halogen lit mirror.",
      "A viewing of this apartment is highly recommended to appreciate the size, standard, location and specification. Please call one of our knowledgeable lettings team on 01342 777977 to arrange an appointment."
    ],
    features: [
      "Available early August",
      "Furnished, fourth floor of New Acre House",
      "Allocated parking behind electric gates",
      "High-tech camera entry system",
      "Modern communal areas with lifts",
      "Built-in wardrobe with mirrored frontage",
      "Integrated kitchen appliances",
      "Heated towel rail & halogen lit mirror"
    ],
    photos: [
      "assets/props/EAG260116_06.jpg",
      "assets/props/EAG260116_04.jpg",
      "assets/props/EAG260116_05.jpg",
      "assets/props/EAG260116_07.jpg",
      "assets/props/EAG260116_08.jpg",
      "assets/props/EAG260116_09.jpg"
    ],
    mapQ: "Wood Street, East Grinstead RH19"
  }
];

window.GRProps = (function(){
  var OVR_KEY = 'gr-props-overrides';   // {id: {field: value, hidden: true}}
  var CUSTOM_KEY = 'gr-props-custom';   // [property, ...] added in admin
  function read(key, fallback){
    try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch(e){ return fallback; }
  }
  function getAll(includeHidden){
    var ovr = read(OVR_KEY, {});
    var merged = window.GR_DEFAULT_PROPS.map(function(p){
      var o = ovr[p.id];
      if(!o) return Object.assign({_default:true}, p);
      return Object.assign({_default:true}, p, o);
    });
    var custom = read(CUSTOM_KEY, []).map(function(p){ return Object.assign({_default:false}, p); });
    var all = merged.concat(custom);
    if(!includeHidden) all = all.filter(function(p){ return !p.hidden; });
    return all;
  }
  function get(id){
    return getAll(false).filter(function(p){ return p.id===id; })[0] || null;
  }
  function priceLabel(p){
    var n = Number(p.price)||0;
    var s = '£' + n.toLocaleString('en-GB');
    return p.mode==='rent' ? s+' <small>monthly</small>' : s;
  }
  function saveOverride(id, patch){
    var ovr = read(OVR_KEY, {});
    ovr[id] = Object.assign(ovr[id]||{}, patch);
    localStorage.setItem(OVR_KEY, JSON.stringify(ovr));
  }
  function resetOverride(id){
    var ovr = read(OVR_KEY, {});
    delete ovr[id];
    localStorage.setItem(OVR_KEY, JSON.stringify(ovr));
  }
  function saveCustom(list){ localStorage.setItem(CUSTOM_KEY, JSON.stringify(list)); }
  function getCustom(){ return read(CUSTOM_KEY, []); }
  function addEnquiry(e){
    var list = read('gr-enquiries', []);
    e.ts = new Date().toISOString();
    list.unshift(e);
    localStorage.setItem('gr-enquiries', JSON.stringify(list));
  }
  function getEnquiries(){ return read('gr-enquiries', []); }
  function setEnquiries(l){ localStorage.setItem('gr-enquiries', JSON.stringify(l)); }
  return {getAll:getAll, get:get, priceLabel:priceLabel, saveOverride:saveOverride, resetOverride:resetOverride, saveCustom:saveCustom, getCustom:getCustom, addEnquiry:addEnquiry, getEnquiries:getEnquiries, setEnquiries:setEnquiries};
})();
