const countries = [
  {
    "name": "Aruba",
    "code": "AW",
    "flag": "assets/images/src/flags/aw.svg"
  },
  {
    "name": "Afghanistan",
    "code": "AF",
    "flag": "assets/images/src/flags/af.svg"
  },
  {
    "name": "Angola",
    "code": "AO",
    "flag": "assets/images/src/flags/ao.svg"
  },
  {
    "name": "Anguilla",
    "code": "AI",
    "flag": "assets/images/src/flags/ai.svg"
  },
  {
    "name": "\u00c5land Islands",
    "code": "AX",
    "flag": "assets/images/src/flags/ax.svg"
  },
  {
    "name": "Albania",
    "code": "AL",
    "flag": "assets/images/src/flags/al.svg"
  },
  {
    "name": "Andorra",
    "code": "AD",
    "flag": "assets/images/src/flags/ad.svg"
  },
  {
    "name": "United Arab Emirates",
    "code": "AE",
    "flag": "assets/images/src/flags/ae.svg"
  },
  {
    "name": "Argentina",
    "code": "AR",
    "flag": "assets/images/src/flags/ar.svg"
  },
  {
    "name": "Armenia",
    "code": "AM",
    "flag": "assets/images/src/flags/am.svg"
  },
  {
    "name": "American Samoa",
    "code": "AS",
    "flag": "assets/images/src/flags/as.svg"
  },
  {
    "name": "Antarctica",
    "code": "AQ",
    "flag": "assets/images/src/flags/aq.svg"
  },
  {
    "name": "French Southern Territories",
    "code": "TF",
    "flag": "assets/images/src/flags/tf.svg"
  },
  {
    "name": "Antigua and Barbuda",
    "code": "AG",
    "flag": "assets/images/src/flags/ag.svg"
  },
  {
    "name": "Australia",
    "code": "AU",
    "flag": "assets/images/src/flags/au.svg"
  },
  {
    "name": "Austria",
    "code": "AT",
    "flag": "assets/images/src/flags/at.svg"
  },
  {
    "name": "Azerbaijan",
    "code": "AZ",
    "flag": "assets/images/src/flags/az.svg"
  },
  {
    "name": "Burundi",
    "code": "BI",
    "flag": "assets/images/src/flags/bi.svg"
  },
  {
    "name": "Belgium",
    "code": "BE",
    "flag": "assets/images/src/flags/be.svg"
  },
  {
    "name": "Benin",
    "code": "BJ",
    "flag": "assets/images/src/flags/bj.svg"
  },
  {
    "name": "Burkina Faso",
    "code": "BF",
    "flag": "assets/images/src/flags/bf.svg"
  },
  {
    "name": "Bangladesh",
    "code": "BD",
    "flag": "assets/images/src/flags/bd.svg"
  },
  {
    "name": "Bulgaria",
    "code": "BG",
    "flag": "assets/images/src/flags/bg.svg"
  },
  {
    "name": "Bahrain",
    "code": "BH",
    "flag": "assets/images/src/flags/bh.svg"
  },
  {
    "name": "Bahamas",
    "code": "BS",
    "flag": "assets/images/src/flags/bs.svg"
  },
  {
    "name": "Bosnia and Herzegovina",
    "code": "BA",
    "flag": "assets/images/src/flags/ba.svg"
  },
  {
    "name": "Saint Barth\u00e9lemy",
    "code": "BL",
    "flag": "assets/images/src/flags/bl.svg"
  },
  {
    "name": "Belarus",
    "code": "BY",
    "flag": "assets/images/src/flags/by.svg"
  },
  {
    "name": "Belize",
    "code": "BZ",
    "flag": "assets/images/src/flags/bz.svg"
  },
  {
    "name": "Bermuda",
    "code": "BM",
    "flag": "assets/images/src/flags/bm.svg"
  },
  {
    "name": "Bolivia, Plurinational State of",
    "code": "BO",
    "flag": "assets/images/src/flags/bo.svg"
  },
  {
    "name": "Brazil",
    "code": "BR",
    "flag": "assets/images/src/flags/br.svg"
  },
  {
    "name": "Barbados",
    "code": "BB",
    "flag": "assets/images/src/flags/bb.svg"
  },
  {
    "name": "Brunei Darussalam",
    "code": "BN",
    "flag": "assets/images/src/flags/bn.svg"
  },
  {
    "name": "Bhutan",
    "code": "BT",
    "flag": "assets/images/src/flags/bt.svg"
  },
  {
    "name": "Botswana",
    "code": "BW",
    "flag": "assets/images/src/flags/bw.svg"
  },
  {
    "name": "Central African Republic",
    "code": "CF",
    "flag": "assets/images/src/flags/cf.svg"
  },
  {
    "name": "Canada",
    "code": "CA",
    "flag": "assets/images/src/flags/ca.svg"
  },
  {
    "name": "Cocos (Keeling) Islands",
    "code": "CC",
    "flag": "assets/images/src/flags/cc.svg"
  },
  {
    "name": "Switzerland",
    "code": "CH",
    "flag": "assets/images/src/flags/ch.svg"
  },
  {
    "name": "Chile",
    "code": "CL",
    "flag": "assets/images/src/flags/cl.svg"
  },
  {
    "name": "China",
    "code": "CN",
    "flag": "assets/images/src/flags/cn.svg"
  },
  {
    "name": "C\u00f4te d'Ivoire",
    "code": "CI",
    "flag": "assets/images/src/flags/ci.svg"
  },
  {
    "name": "Cameroon",
    "code": "CM",
    "flag": "assets/images/src/flags/cm.svg"
  },
  {
    "name": "Congo, The Democratic Republic of the",
    "code": "CD",
    "flag": "assets/images/src/flags/cd.svg"
  },
  {
    "name": "Congo",
    "code": "CG",
    "flag": "assets/images/src/flags/cg.svg"
  },
  {
    "name": "Cook Islands",
    "code": "CK",
    "flag": "assets/images/src/flags/ck.svg"
  },
  {
    "name": "Colombia",
    "code": "CO",
    "flag": "assets/images/src/flags/co.svg"
  },
  {
    "name": "Comoros",
    "code": "KM",
    "flag": "assets/images/src/flags/km.svg"
  },
  {
    "name": "Cabo Verde",
    "code": "CV",
    "flag": "assets/images/src/flags/cv.svg"
  },
  {
    "name": "Costa Rica",
    "code": "CR",
    "flag": "assets/images/src/flags/cr.svg"
  },
  {
    "name": "Cuba",
    "code": "CU",
    "flag": "assets/images/src/flags/cu.svg"
  },
  {
    "name": "Cura\u00e7ao",
    "code": "CW",
    "flag": "assets/images/src/flags/cw.svg"
  },
  {
    "name": "Christmas Island",
    "code": "CX",
    "flag": "assets/images/src/flags/cx.svg"
  },
  {
    "name": "Cayman Islands",
    "code": "KY",
    "flag": "assets/images/src/flags/ky.svg"
  },
  {
    "name": "Cyprus",
    "code": "CY",
    "flag": "assets/images/src/flags/cy.svg"
  },
  {
    "name": "Czechia",
    "code": "CZ",
    "flag": "assets/images/src/flags/cz.svg"
  },
  {
    "name": "Germany",
    "code": "DE",
    "flag": "assets/images/src/flags/de.svg"
  },
  {
    "name": "Djibouti",
    "code": "DJ",
    "flag": "assets/images/src/flags/dj.svg"
  },
  {
    "name": "Dominica",
    "code": "DM",
    "flag": "assets/images/src/flags/dm.svg"
  },
  {
    "name": "Denmark",
    "code": "DK",
    "flag": "assets/images/src/flags/dk.svg"
  },
  {
    "name": "Dominican Republic",
    "code": "DO",
    "flag": "assets/images/src/flags/do.svg"
  },
  {
    "name": "Algeria",
    "code": "DZ",
    "flag": "assets/images/src/flags/dz.svg"
  },
  {
    "name": "Ecuador",
    "code": "EC",
    "flag": "assets/images/src/flags/ec.svg"
  },
  {
    "name": "Egypt",
    "code": "EG",
    "flag": "assets/images/src/flags/eg.svg"
  },
  {
    "name": "Eritrea",
    "code": "ER",
    "flag": "assets/images/src/flags/er.svg"
  },
  {
    "name": "Western Sahara",
    "code": "EH",
    "flag": "assets/images/src/flags/eh.svg"
  },
  {
    "name": "Spain",
    "code": "ES",
    "flag": "assets/images/src/flags/es.svg"
  },
  {
    "name": "Estonia",
    "code": "EE",
    "flag": "assets/images/src/flags/ee.svg"
  },
  {
    "name": "Ethiopia",
    "code": "ET",
    "flag": "assets/images/src/flags/et.svg"
  },
  {
    "name": "Finland",
    "code": "FI",
    "flag": "assets/images/src/flags/fi.svg"
  },
  {
    "name": "Fiji",
    "code": "FJ",
    "flag": "assets/images/src/flags/fj.svg"
  },
  {
    "name": "Falkland Islands (Malvinas)",
    "code": "FK",
    "flag": "assets/images/src/flags/fk.svg"
  },
  {
    "name": "France",
    "code": "FR",
    "flag": "assets/images/src/flags/fr.svg"
  },
  {
    "name": "Faroe Islands",
    "code": "FO",
    "flag": "assets/images/src/flags/fo.svg"
  },
  {
    "name": "Micronesia, Federated States of",
    "code": "FM",
    "flag": "assets/images/src/flags/fm.svg"
  },
  {
    "name": "Gabon",
    "code": "GA",
    "flag": "assets/images/src/flags/ga.svg"
  },
  {
    "name": "United Kingdom",
    "code": "GB",
    "flag": "assets/images/src/flags/gb.svg"
  },
  {
    "name": "Georgia",
    "code": "GE",
    "flag": "assets/images/src/flags/ge.svg"
  },
  {
    "name": "Guernsey",
    "code": "GG",
    "flag": "assets/images/src/flags/gg.svg"
  },
  {
    "name": "Ghana",
    "code": "GH",
    "flag": "assets/images/src/flags/gh.svg"
  },
  {
    "name": "Gibraltar",
    "code": "GI",
    "flag": "assets/images/src/flags/gi.svg"
  },
  {
    "name": "Guinea",
    "code": "GN",
    "flag": "assets/images/src/flags/gn.svg"
  },
  {
    "name": "Guadeloupe",
    "code": "GP",
    "flag": "assets/images/src/flags/gp.svg"
  },
  {
    "name": "Gambia",
    "code": "GM",
    "flag": "assets/images/src/flags/gm.svg"
  },
  {
    "name": "Guinea-Bissau",
    "code": "GW",
    "flag": "assets/images/src/flags/gw.svg"
  },
  {
    "name": "Equatorial Guinea",
    "code": "GQ",
    "flag": "assets/images/src/flags/gq.svg"
  },
  {
    "name": "Greece",
    "code": "GR",
    "flag": "assets/images/src/flags/gr.svg"
  },
  {
    "name": "Grenada",
    "code": "GD",
    "flag": "assets/images/src/flags/gd.svg"
  },
  {
    "name": "Greenland",
    "code": "GL",
    "flag": "assets/images/src/flags/gl.svg"
  },
  {
    "name": "Guatemala",
    "code": "GT",
    "flag": "assets/images/src/flags/gt.svg"
  },
  {
    "name": "French Guiana",
    "code": "GF",
    "flag": "assets/images/src/flags/gf.svg"
  },
  {
    "name": "Guam",
    "code": "GU",
    "flag": "assets/images/src/flags/gu.svg"
  },
  {
    "name": "Guyana",
    "code": "GY",
    "flag": "assets/images/src/flags/gy.svg"
  },
  {
    "name": "Hong Kong",
    "code": "HK",
    "flag": "assets/images/src/flags/hk.svg"
  },
  {
    "name": "Honduras",
    "code": "HN",
    "flag": "assets/images/src/flags/hn.svg"
  },
  {
    "name": "Croatia",
    "code": "HR",
    "flag": "assets/images/src/flags/hr.svg"
  },
  {
    "name": "Haiti",
    "code": "HT",
    "flag": "assets/images/src/flags/ht.svg"
  },
  {
    "name": "Hungary",
    "code": "HU",
    "flag": "assets/images/src/flags/hu.svg"
  },
  {
    "name": "Indonesia",
    "code": "ID",
    "flag": "assets/images/src/flags/id.svg"
  },
  {
    "name": "Isle of Man",
    "code": "IM",
    "flag": "assets/images/src/flags/im.svg"
  },
  {
    "name": "India",
    "code": "IN",
    "flag": "assets/images/src/flags/in.svg"
  },
  {
    "name": "British Indian Ocean Territory",
    "code": "IO",
    "flag": "assets/images/src/flags/io.svg"
  },
  {
    "name": "Ireland",
    "code": "IE",
    "flag": "assets/images/src/flags/ie.svg"
  },
  {
    "name": "Iran, Islamic Republic of",
    "code": "IR",
    "flag": "assets/images/src/flags/ir.svg"
  },
  {
    "name": "Iraq",
    "code": "IQ",
    "flag": "assets/images/src/flags/iq.svg"
  },
  {
    "name": "Iceland",
    "code": "IS",
    "flag": "assets/images/src/flags/is.svg"
  },
  {
    "name": "Israel",
    "code": "IL",
    "flag": "assets/images/src/flags/il.svg"
  },
  {
    "name": "Italy",
    "code": "IT",
    "flag": "assets/images/src/flags/it.svg"
  },
  {
    "name": "Jamaica",
    "code": "JM",
    "flag": "assets/images/src/flags/jm.svg"
  },
  {
    "name": "Jersey",
    "code": "JE",
    "flag": "assets/images/src/flags/je.svg"
  },
  {
    "name": "Jordan",
    "code": "JO",
    "flag": "assets/images/src/flags/jo.svg"
  },
  {
    "name": "Japan",
    "code": "JP",
    "flag": "assets/images/src/flags/jp.svg"
  },
  {
    "name": "Kazakhstan",
    "code": "KZ",
    "flag": "assets/images/src/flags/kz.svg"
  },
  {
    "name": "Kenya",
    "code": "KE",
    "flag": "assets/images/src/flags/ke.svg"
  },
  {
    "name": "Kyrgyzstan",
    "code": "KG",
    "flag": "assets/images/src/flags/kg.svg"
  },
  {
    "name": "Cambodia",
    "code": "KH",
    "flag": "assets/images/src/flags/kh.svg"
  },
  {
    "name": "Kiribati",
    "code": "KI",
    "flag": "assets/images/src/flags/ki.svg"
  },
  {
    "name": "Saint Kitts and Nevis",
    "code": "KN",
    "flag": "assets/images/src/flags/kn.svg"
  },
  {
    "name": "Korea, Republic of",
    "code": "KR",
    "flag": "assets/images/src/flags/kr.svg"
  },
  {
    "name": "Kuwait",
    "code": "KW",
    "flag": "assets/images/src/flags/kw.svg"
  },
  {
    "name": "Lao People's Democratic Republic",
    "code": "LA",
    "flag": "assets/images/src/flags/la.svg"
  },
  {
    "name": "Lebanon",
    "code": "LB",
    "flag": "assets/images/src/flags/lb.svg"
  },
  {
    "name": "Liberia",
    "code": "LR",
    "flag": "assets/images/src/flags/lr.svg"
  },
  {
    "name": "Libya",
    "code": "LY",
    "flag": "assets/images/src/flags/ly.svg"
  },
  {
    "name": "Saint Lucia",
    "code": "LC",
    "flag": "assets/images/src/flags/lc.svg"
  },
  {
    "name": "Liechtenstein",
    "code": "LI",
    "flag": "assets/images/src/flags/li.svg"
  },
  {
    "name": "Sri Lanka",
    "code": "LK",
    "flag": "assets/images/src/flags/lk.svg"
  },
  {
    "name": "Lesotho",
    "code": "LS",
    "flag": "assets/images/src/flags/ls.svg"
  },
  {
    "name": "Lithuania",
    "code": "LT",
    "flag": "assets/images/src/flags/lt.svg"
  },
  {
    "name": "Luxembourg",
    "code": "LU",
    "flag": "assets/images/src/flags/lu.svg"
  },
  {
    "name": "Latvia",
    "code": "LV",
    "flag": "assets/images/src/flags/lv.svg"
  },
  {
    "name": "Macao",
    "code": "MO",
    "flag": "assets/images/src/flags/mo.svg"
  },
  {
    "name": "Saint Martin (French part)",
    "code": "MF",
    "flag": "assets/images/src/flags/mf.svg"
  },
  {
    "name": "Morocco",
    "code": "MA",
    "flag": "assets/images/src/flags/ma.svg"
  },
  {
    "name": "Monaco",
    "code": "MC",
    "flag": "assets/images/src/flags/mc.svg"
  },
  {
    "name": "Moldova, Republic of",
    "code": "MD",
    "flag": "assets/images/src/flags/md.svg"
  },
  {
    "name": "Madagascar",
    "code": "MG",
    "flag": "assets/images/src/flags/mg.svg"
  },
  {
    "name": "Maldives",
    "code": "MV",
    "flag": "assets/images/src/flags/mv.svg"
  },
  {
    "name": "Mexico",
    "code": "MX",
    "flag": "assets/images/src/flags/mx.svg"
  },
  {
    "name": "Marshall Islands",
    "code": "MH",
    "flag": "assets/images/src/flags/mh.svg"
  },
  {
    "name": "North Macedonia",
    "code": "MK",
    "flag": "assets/images/src/flags/mk.svg"
  },
  {
    "name": "Mali",
    "code": "ML",
    "flag": "assets/images/src/flags/ml.svg"
  },
  {
    "name": "Malta",
    "code": "MT",
    "flag": "assets/images/src/flags/mt.svg"
  },
  {
    "name": "Myanmar",
    "code": "MM",
    "flag": "assets/images/src/flags/mm.svg"
  },
  {
    "name": "Montenegro",
    "code": "ME",
    "flag": "assets/images/src/flags/me.svg"
  },
  {
    "name": "Mongolia",
    "code": "MN",
    "flag": "assets/images/src/flags/mn.svg"
  },
  {
    "name": "Northern Mariana Islands",
    "code": "MP",
    "flag": "assets/images/src/flags/mp.svg"
  },
  {
    "name": "Mozambique",
    "code": "MZ",
    "flag": "assets/images/src/flags/mz.svg"
  },
  {
    "name": "Mauritania",
    "code": "MR",
    "flag": "assets/images/src/flags/mr.svg"
  },
  {
    "name": "Montserrat",
    "code": "MS",
    "flag": "assets/images/src/flags/ms.svg"
  },
  {
    "name": "Martinique",
    "code": "MQ",
    "flag": "assets/images/src/flags/mq.svg"
  },
  {
    "name": "Mauritius",
    "code": "MU",
    "flag": "assets/images/src/flags/mu.svg"
  },
  {
    "name": "Malawi",
    "code": "MW",
    "flag": "assets/images/src/flags/mw.svg"
  },
  {
    "name": "Malaysia",
    "code": "MY",
    "flag": "assets/images/src/flags/my.svg"
  },
  {
    "name": "Mayotte",
    "code": "YT",
    "flag": "assets/images/src/flags/yt.svg"
  },
  {
    "name": "Namibia",
    "code": "NA",
    "flag": "assets/images/src/flags/na.svg"
  },
  {
    "name": "New Caledonia",
    "code": "NC",
    "flag": "assets/images/src/flags/nc.svg"
  },
  {
    "name": "Niger",
    "code": "NE",
    "flag": "assets/images/src/flags/ne.svg"
  },
  {
    "name": "Norfolk Island",
    "code": "NF",
    "flag": "assets/images/src/flags/nf.svg"
  },
  {
    "name": "Nigeria",
    "code": "NG",
    "flag": "assets/images/src/flags/ng.svg"
  },
  {
    "name": "Nicaragua",
    "code": "NI",
    "flag": "assets/images/src/flags/ni.svg"
  },
  {
    "name": "Niue",
    "code": "NU",
    "flag": "assets/images/src/flags/nu.svg"
  },
  {
    "name": "Netherlands",
    "code": "NL",
    "flag": "assets/images/src/flags/nl.svg"
  },
  {
    "name": "Norway",
    "code": "NO",
    "flag": "assets/images/src/flags/no.svg"
  },
  {
    "name": "Nepal",
    "code": "NP",
    "flag": "assets/images/src/flags/np.svg"
  },
  {
    "name": "Nauru",
    "code": "NR",
    "flag": "assets/images/src/flags/nr.svg"
  },
  {
    "name": "New Zealand",
    "code": "NZ",
    "flag": "assets/images/src/flags/nz.svg"
  },
  {
    "name": "Oman",
    "code": "OM",
    "flag": "assets/images/src/flags/om.svg"
  },
  {
    "name": "Pakistan",
    "code": "PK",
    "flag": "assets/images/src/flags/pk.svg"
  },
  {
    "name": "Panama",
    "code": "PA",
    "flag": "assets/images/src/flags/pa.svg"
  },
  {
    "name": "Pitcairn",
    "code": "PN",
    "flag": "assets/images/src/flags/pn.svg"
  },
  {
    "name": "Peru",
    "code": "PE",
    "flag": "assets/images/src/flags/pe.svg"
  },
  {
    "name": "Philippines",
    "code": "PH",
    "flag": "assets/images/src/flags/ph.svg"
  },
  {
    "name": "Palau",
    "code": "PW",
    "flag": "assets/images/src/flags/pw.svg"
  },
  {
    "name": "Papua New Guinea",
    "code": "PG",
    "flag": "assets/images/src/flags/pg.svg"
  },
  {
    "name": "Poland",
    "code": "PL",
    "flag": "assets/images/src/flags/pl.svg"
  },
  {
    "name": "Puerto Rico",
    "code": "PR",
    "flag": "assets/images/src/flags/pr.svg"
  },
  {
    "name": "Korea, Democratic People's Republic of",
    "code": "KP",
    "flag": "assets/images/src/flags/kp.svg"
  },
  {
    "name": "Portugal",
    "code": "PT",
    "flag": "assets/images/src/flags/pt.svg"
  },
  {
    "name": "Paraguay",
    "code": "PY",
    "flag": "assets/images/src/flags/py.svg"
  },
  {
    "name": "Palestine, State of",
    "code": "PS",
    "flag": "assets/images/src/flags/ps.svg"
  },
  {
    "name": "French Polynesia",
    "code": "PF",
    "flag": "assets/images/src/flags/pf.svg"
  },
  {
    "name": "Qatar",
    "code": "QA",
    "flag": "assets/images/src/flags/qa.svg"
  },
  {
    "name": "R\u00e9union",
    "code": "RE",
    "flag": "assets/images/src/flags/re.svg"
  },
  {
    "name": "Romania",
    "code": "RO",
    "flag": "assets/images/src/flags/ro.svg"
  },
  {
    "name": "Russian Federation",
    "code": "RU",
    "flag": "assets/images/src/flags/ru.svg"
  },
  {
    "name": "Rwanda",
    "code": "RW",
    "flag": "assets/images/src/flags/rw.svg"
  },
  {
    "name": "Saudi Arabia",
    "code": "SA",
    "flag": "assets/images/src/flags/sa.svg"
  },
  {
    "name": "Sudan",
    "code": "SD",
    "flag": "assets/images/src/flags/sd.svg"
  },
  {
    "name": "Senegal",
    "code": "SN",
    "flag": "assets/images/src/flags/sn.svg"
  },
  {
    "name": "Singapore",
    "code": "SG",
    "flag": "assets/images/src/flags/sg.svg"
  },
  {
    "name": "South Georgia and the South Sandwich Islands",
    "code": "GS",
    "flag": "assets/images/src/flags/gs.svg"
  },
  {
    "name": "Solomon Islands",
    "code": "SB",
    "flag": "assets/images/src/flags/sb.svg"
  },
  {
    "name": "Sierra Leone",
    "code": "SL",
    "flag": "assets/images/src/flags/sl.svg"
  },
  {
    "name": "El Salvador",
    "code": "SV",
    "flag": "assets/images/src/flags/sv.svg"
  },
  {
    "name": "San Marino",
    "code": "SM",
    "flag": "assets/images/src/flags/sm.svg"
  },
  {
    "name": "Somalia",
    "code": "SO",
    "flag": "assets/images/src/flags/so.svg"
  },
  {
    "name": "Saint Pierre and Miquelon",
    "code": "PM",
    "flag": "assets/images/src/flags/pm.svg"
  },
  {
    "name": "Serbia",
    "code": "RS",
    "flag": "assets/images/src/flags/rs.svg"
  },
  {
    "name": "South Sudan",
    "code": "SS",
    "flag": "assets/images/src/flags/ss.svg"
  },
  {
    "name": "Sao Tome and Principe",
    "code": "ST",
    "flag": "assets/images/src/flags/st.svg"
  },
  {
    "name": "Suriname",
    "code": "SR",
    "flag": "assets/images/src/flags/sr.svg"
  },
  {
    "name": "Slovakia",
    "code": "SK",
    "flag": "assets/images/src/flags/sk.svg"
  },
  {
    "name": "Slovenia",
    "code": "SI",
    "flag": "assets/images/src/flags/si.svg"
  },
  {
    "name": "Sweden",
    "code": "SE",
    "flag": "assets/images/src/flags/se.svg"
  },
  {
    "name": "Eswatini",
    "code": "SZ",
    "flag": "assets/images/src/flags/sz.svg"
  },
  {
    "name": "Sint Maarten (Dutch part)",
    "code": "SX",
    "flag": "assets/images/src/flags/sx.svg"
  },
  {
    "name": "Seychelles",
    "code": "SC",
    "flag": "assets/images/src/flags/sc.svg"
  },
  {
    "name": "Syrian Arab Republic",
    "code": "SY",
    "flag": "assets/images/src/flags/sy.svg"
  },
  {
    "name": "Turks and Caicos Islands",
    "code": "TC",
    "flag": "assets/images/src/flags/tc.svg"
  },
  {
    "name": "Chad",
    "code": "TD",
    "flag": "assets/images/src/flags/td.svg"
  },
  {
    "name": "Togo",
    "code": "TG",
    "flag": "assets/images/src/flags/tg.svg"
  },
  {
    "name": "Thailand",
    "code": "TH",
    "flag": "assets/images/src/flags/th.svg"
  },
  {
    "name": "Tajikistan",
    "code": "TJ",
    "flag": "assets/images/src/flags/tj.svg"
  },
  {
    "name": "Tokelau",
    "code": "TK",
    "flag": "assets/images/src/flags/tk.svg"
  },
  {
    "name": "Turkmenistan",
    "code": "TM",
    "flag": "assets/images/src/flags/tm.svg"
  },
  {
    "name": "Timor-Leste",
    "code": "TL",
    "flag": "assets/images/src/flags/tl.svg"
  },
  {
    "name": "Tonga",
    "code": "TO",
    "flag": "assets/images/src/flags/to.svg"
  },
  {
    "name": "Trinidad and Tobago",
    "code": "TT",
    "flag": "assets/images/src/flags/tt.svg"
  },
  {
    "name": "Tunisia",
    "code": "TN",
    "flag": "assets/images/src/flags/tn.svg"
  },
  {
    "name": "Turkey",
    "code": "TR",
    "flag": "assets/images/src/flags/tr.svg"
  },
  {
    "name": "Tuvalu",
    "code": "TV",
    "flag": "assets/images/src/flags/tv.svg"
  },
  {
    "name": "Taiwan, Province of China",
    "code": "TW",
    "flag": "assets/images/src/flags/tw.svg"
  },
  {
    "name": "Tanzania, United Republic of",
    "code": "TZ",
    "flag": "assets/images/src/flags/tz.svg"
  },
  {
    "name": "Uganda",
    "code": "UG",
    "flag": "assets/images/src/flags/ug.svg"
  },
  {
    "name": "Ukraine",
    "code": "UA",
    "flag": "assets/images/src/flags/ua.svg"
  },
  {
    "name": "Uruguay",
    "code": "UY",
    "flag": "assets/images/src/flags/uy.svg"
  },
  {
    "name": "United States",
    "code": "US",
    "flag": "assets/images/src/flags/us.svg"
  },
  {
    "name": "Uzbekistan",
    "code": "UZ",
    "flag": "assets/images/src/flags/uz.svg"
  },
  {
    "name": "Holy See (Vatican City State)",
    "code": "VA",
    "flag": "assets/images/src/flags/va.svg"
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "code": "VC",
    "flag": "assets/images/src/flags/vc.svg"
  },
  {
    "name": "Venezuela, Bolivarian Republic of",
    "code": "VE",
    "flag": "assets/images/src/flags/ve.svg"
  },
  {
    "name": "Virgin Islands, British",
    "code": "VG",
    "flag": "assets/images/src/flags/vg.svg"
  },
  {
    "name": "Virgin Islands, U.S.",
    "code": "VI",
    "flag": "assets/images/src/flags/vi.svg"
  },
  {
    "name": "Viet Nam",
    "code": "VN",
    "flag": "assets/images/src/flags/vn.svg"
  },
  {
    "name": "Vanuatu",
    "code": "VU",
    "flag": "assets/images/src/flags/vu.svg"
  },
  {
    "name": "Wallis and Futuna",
    "code": "WF",
    "flag": "assets/images/src/flags/wf.svg"
  },
  {
    "name": "Samoa",
    "code": "WS",
    "flag": "assets/images/src/flags/ws.svg"
  },
  {
    "name": "Yemen",
    "code": "YE",
    "flag": "assets/images/src/flags/ye.svg"
  },
  {
    "name": "South Africa",
    "code": "ZA",
    "flag": "assets/images/src/flags/za.svg"
  },
  {
    "name": "Zambia",
    "code": "ZM",
    "flag": "assets/images/src/flags/zm.svg"
  },
  {
    "name": "Zimbabwe",
    "code": "ZW",
    "flag": "assets/images/src/flags/zw.svg"
  }
];