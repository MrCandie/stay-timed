"use strict";
const germany = document.querySelector(".germany");
const italy = document.querySelector(".italy");
const france = document.querySelector(".france");
const uk = document.querySelector(".uk");
const ukraine = document.querySelector(".ukraine");
const netherlands = document.querySelector(".netherlands");
const switzerland = document.querySelector(".switzerland");
const poland = document.querySelector(".poland");
const greece = document.querySelector(".greece");
const belgium = document.querySelector(".belgium");
const croatia = document.querySelector(".croatia");
const norway = document.querySelector(".norway");
const denmark = document.querySelector(".denmark");
const serbia = document.querySelector(".serbia");
const ireland = document.querySelector(".ireland");
const austria = document.querySelector(".austria");
const sweden = document.querySelector(".sweden");
const belarus = document.querySelector(".czechia");
const malta = document.querySelector(".malta");
const finland = document.querySelector(".finland");
const iceland = document.querySelector(".iceland");
const romania = document.querySelector(".romania");
const hungary = document.querySelector(".hungary");
const bulgaria = document.querySelector(".bulgaria");
const luxembourg = document.querySelector(".luxembourg");
const albania = document.querySelector(".albania");
const monaco = document.querySelector(".monaco");
const slovenia = document.querySelector(".slovenia");
const czechia = document.querySelector(".czechia");
const cyprus = document.querySelector(".cyprus");
const lithuania = document.querySelector(".lithuania");
const slovakia = document.querySelector(".slovakia");
const liechtenstein = document.querySelector(".liechtenstein");
const moldova = document.querySelector(".moldova");
const montenegro = document.querySelector(".montenegro");
const estonia = document.querySelector(".estonia");
const kosovo = document.querySelector(".kosovo");
const vaticanCity = document.querySelector(".vatican-city");
const gibraltar = document.querySelector(".gibraltar");
const svalbardAndJanMayan = document.querySelector(".svalbard-and-janMayan");
const andorra = document.querySelector(".andorra");
const bosniaAndHerzegovina = document.querySelector(".bosnia-and-herzegovina");
const northMacedonia = document.querySelector(".north-macedonia");
const latvia = document.querySelector(".latvia");
const sanMarino = document.querySelector(".san-marino");
const isleOfMan = document.querySelector(".isle-of-man");
const faroeIsland = document.querySelector(".faroe-island");

const jersey = document.querySelector(".jersey");

const europeTime = function () {
  // LONDON
  uk.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/london",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // GERMANY
  germany.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/berlin",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // FRANCE
  france.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/paris",
    timeStyle: "medium",
    hourCycle: "h24",
  });
  // ITALY
  italy.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/rome",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // UKRAINE
  ukraine.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/kiev",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // NETHERLANDS
  netherlands.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/amsterdam",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // SWITZERLAND
  switzerland.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/zurich",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // POLAND
  poland.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/warsaw",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // GREECE
  greece.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/athens",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // BELGIUM
  belgium.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/brussels",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // CROATIA
  croatia.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/zagreb",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // NORWAY
  norway.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/oslo",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // DENMARK
  denmark.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/copenhagen",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // SERBIA
  serbia.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/belgrade",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // IRELAND
  ireland.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/dublin",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // AUSTRIA
  austria.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/vienna",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // SWEDEN
  sweden.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/stockholm",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  //CZECHIA
  czechia.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/prague",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // MALTA
  malta.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/malta",
    timeStyle: "medium",
    hourCycle: "h12",
  });

  // FINLAND
  finland.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/helsinki",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // ICELAND
  romania.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/bucharest",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // bulgaria
  bulgaria.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/sofia",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // hungary
  hungary.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/budapest",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // LUXEMBOURG
  luxembourg.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/luxembourg",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // ALBANIA
  albania.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/tirane",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  //MONACO
  monaco.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/monaco",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  //SLOVENIA
  slovenia.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/ljubljana",
    timeStyle: "medium",
    hourCycle: "h12",
  });

  // CYPRUS
  cyprus.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/nicosia",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // LITHUANIA
  lithuania.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/vilnius",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  //SLOVAKIA
  slovakia.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/bratislava",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  //LIECHTENSTEIN
  liechtenstein.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/vaduz",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // MOLDOVA
  moldova.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/chisinau",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  //MONTENEGRO
  montenegro.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/podgorica",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // ESTONIA
  estonia.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/tallinn",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  //BELARUS
  belarus.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/minsk",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  //KOSOVO
  //   kosovo.textContent = new Date().toLocaleString("en-US", {
  //     timeZone: "europe/pristina",
  //     timeStyle: "medium",
  //     hourCycle: "h12",
  //   });
  // VATICAN CITY
  vaticanCity.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/vatican",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  //gibraltar
  gibraltar.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/gibraltar",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // andorra
  andorra.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/andorra",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // bonia
  bosniaAndHerzegovina.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/sarajevo",
    timeStyle: "medium",
    hourCycle: "h12",
  });

  //macedonia
  northMacedonia.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/skopje",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // latvia
  latvia.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/riga",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // san marino
  sanMarino.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/san_marino",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // isle
  isleOfMan.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/isle_of_man",
    timeStyle: "medium",
    hourCycle: "h12",
  });
  // faroe
  jersey.textContent = new Date().toLocaleString("en-US", {
    timeZone: "europe/jersey",
    timeStyle: "medium",
    hourCycle: "h12",
  });
};
europeTime();
setInterval(europeTime, 1000);

const americaTime = function () {
  // mexico
  document.querySelector(".mexico").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/mexico_city", timeStyle: "medium", hourCycle: "h24" }
  );
  // brazil
  document.querySelector(".argentina").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/buenos_aires", timeStyle: "medium", hourCycle: "h24" }
  );
  // colombia
  document.querySelector(".colombia").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/bogota", timeStyle: "medium", hourCycle: "h24" }
  );
  // costarica
  document.querySelector(".costa-rica").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/costa_rica", timeStyle: "medium", hourCycle: "h24" }
  );
  // peru
  document.querySelector(".peru").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/lima", timeStyle: "medium", hourCycle: "h24" }
  );
  // cuba
  document.querySelector(".cuba").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/havana", timeStyle: "medium", hourCycle: "h24" }
  );
  // chile
  document.querySelector(".chile").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/santiago", timeStyle: "medium", hourCycle: "h24" }
  );
  // dominican
  document.querySelector(".dominican-republic").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "america/santo_domingo",
      timeStyle: "medium",
      hourCycle: "h24",
    });
  // honduras
  document.querySelector(".honduras").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/tegucigalpa", timeStyle: "medium", hourCycle: "h24" }
  );

  // puerto rico
  document.querySelector(".puerto-rico").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "america/puerto_rico",
      timeStyle: "medium",
      hourCycle: "h24",
    });
  // venezuela
  document.querySelector(".venezuela").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/caracas", timeStyle: "medium", hourCycle: "h24" }
  );
  // guatemala
  document.querySelector(".guatemala").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/guatemala", timeStyle: "medium", hourCycle: "h24" }
  );
  // panama
  document.querySelector(".panama").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/panama", timeStyle: "medium", hourCycle: "h24" }
  );
  // nicaragua
  document.querySelector(".nicaragua").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/managua", timeStyle: "medium", hourCycle: "h24" }
  );
  //bolivia
  document.querySelector(".bolivia").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/la_paz", timeStyle: "medium", hourCycle: "h24" }
  );
  //haiti
  document.querySelector(".haiti").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "america/port-au-prince",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // el savador
  document.querySelector(".el-savador").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/el_salvador", timeStyle: "medium", hourCycle: "h24" }
  );
  // uruguay
  document.querySelector(".uruguay").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/montevideo", timeStyle: "medium", hourCycle: "h24" }
  );
  // belize
  document.querySelector(".belize").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/belize", timeStyle: "medium", hourCycle: "h24" }
  );
  // jamaica
  document.querySelector(".jamaica").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/jamaica", timeStyle: "medium", hourCycle: "h24" }
  );
  //paraguay
  document.querySelector(".paraguay").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/asuncion", timeStyle: "medium", hourCycle: "h24" }
  );
  //guyana
  document.querySelector(".guyana").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/guyana", timeStyle: "medium", hourCycle: "h24" }
  );

  //aruba
  document.querySelector(".aruba").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/aruba", timeStyle: "medium", hourCycle: "h24" }
  );
  // trinidad
  document.querySelector(".trinidad").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/port_of_spain", timeStyle: "medium", hourCycle: "h24" }
  );
  // bahamas
  document.querySelector(".bahamas").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/nassau", timeStyle: "medium", hourCycle: "h24" }
  );
  // suriname
  document.querySelector(".suriname").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/paramaribo", timeStyle: "medium", hourCycle: "h24" }
  );
  // barbados
  document.querySelector(".barbados").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/barbados", timeStyle: "medium", hourCycle: "h24" }
  );
  // saint lucia
  document.querySelector(".saint-lucia").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "america/st_lucia",
      timeStyle: "medium",
      hourCycle: "h24",
    });
  // curacao
  document.querySelector(".curacao").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/curacao", timeStyle: "medium", hourCycle: "h24" }
  );
  // grenada
  document.querySelector(".grenada").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/grenada", timeStyle: "medium", hourCycle: "h24" }
  );
  // french guiana
  document.querySelector(".french-guiana").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "america/cayenne",
      timeStyle: "medium",
      hourCycle: "h24",
    });
  // cayman island
  document.querySelector(".cayman-island").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "america/cayman",
      timeStyle: "medium",
      hourCycle: "h24",
    });

  // saint vincent
  document.querySelector(".saint-vincent").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "america/st_vincent",
      timeStyle: "medium",
      hourCycle: "h24",
    });

  // dominica
  document.querySelector(".dominica").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/dominica", timeStyle: "medium", hourCycle: "h24" }
  );
  // anguilla
  document.querySelector(".anguilla").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "america/anguilla", timeStyle: "medium", hourCycle: "h24" }
  );
  // antigua and barbuda
  document.querySelector(".antigua-and-barbuda").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "america/st_johns",
      timeStyle: "medium",
      hourCycle: "h24",
    });
  // saint kitts nevis
  document.querySelector(".saint-kitts-nevis").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "america/st_kitts",
      timeStyle: "medium",
      hourCycle: "h24",
    });

  // martinique
  document.querySelector(".martinique").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "america/martinique",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // guadeloupe
  document.querySelector(".guadeloupe").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "america/guadeloupe",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
};
americaTime();
setInterval(americaTime, 1000);

const africanTime = function () {
  // south africa
  document.querySelector(".south-africa").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "africa/johannesburg",
      timeStyle: "medium",
      hourCycle: "h24",
    });
  // nigeria
  document.querySelector(".nigeria").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/lagos",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // kenya
  document.querySelector(".kenya").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/nairobi",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // congo
  document.querySelector(".congo").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/kinshasa",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // ghana
  document.querySelector(".ghana").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/accra",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );

  // senegal
  document.querySelector(".senegal").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/dakar",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );

  //ethopia
  document.querySelector(".ethopia").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/addis_ababa",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // mali
  document.querySelector(".mali").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/bamako",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // uganda
  document.querySelector(".uganda").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/kampala",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // angola
  document.querySelector(".angola").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/luanda",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // sudan
  document.querySelector(".sudan").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/khartoum",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  //cameroon
  document.querySelector(".cameroon").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/douala",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // zimbabwe
  document.querySelector(".zimbabwe").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/harare",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // rwanda
  document.querySelector(".rwanda").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/kigali",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  //somalia
  document.querySelector(".somalia").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/mogadishu",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // algeria
  document.querySelector(".algeria").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/algiers",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // morocco
  document.querySelector(".morocco").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/casablanca",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // tanzania
  document.querySelector(".tanzania").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/dar_es_salaam",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // cote d'voire
  document.querySelector(".cote-dvoire").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "africa/abidjan",
      timeStyle: "medium",
      hourCycle: "h24",
    });
  // tunisia
  document.querySelector(".tunisia").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/tunis",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // botswana
  document.querySelector(".botswana").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/gaborone",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // niger
  document.querySelector(".niger").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/niamey",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // namibia
  document.querySelector(".namibia").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/windhoek",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // central african republic
  document.querySelector(".central-african-republic").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "africa/bangui",
      timeStyle: "medium",
      hourCycle: "h24",
    });
  // zambia
  document.querySelector(".zambia").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/lusaka",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // liberia
  document.querySelector(".liberia").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/monrovia",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // mozambique
  document.querySelector(".mozambique").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/maputo",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // togo
  document.querySelector(".togo").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/lome",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // guinea
  document.querySelector(".guinea").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/conakry",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );

  // libya
  document.querySelector(".libya").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/tripoli",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // malawi
  document.querySelector(".malawi").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/blantyre",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // gabon
  document.querySelector(".gabon").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/libreville",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // burkina faso
  document.querySelector(".burkina-faso").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "africa/ouagadougou",
      timeStyle: "medium",
      hourCycle: "h24",
    });
  // eswatini
  document.querySelector(".eswatini").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/mbabane",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // chad
  document.querySelector(".chad").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/ndjamena",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // sierra leone
  document.querySelector(".sierra-leone").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "africa/freetown",
      timeStyle: "medium",
      hourCycle: "h24",
    });
  // benin
  document.querySelector(".benin").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/porto-novo",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // gambia
  document.querySelector(".gambia").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/banjul",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // djboute
  document.querySelector(".djibouti").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/djibouti",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // mauritania
  document.querySelector(".mauritania").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/nouakchott",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );

  //eritrea
  document.querySelector(".gambia").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/asmara",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
  // burundi
  document.querySelector(".burundi").textContent = new Date().toLocaleString(
    "en-US",
    {
      timeZone: "africa/bujumbura",
      timeStyle: "medium",
      hourCycle: "h24",
    }
  );
};
africanTime();
setInterval(africanTime, 1000);

const asiaTime = function () {
  // japan
  document.querySelector(".japan").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/tokyo", timeStyle: "medium", hourCycle: "h24" }
  );
  // india
  document.querySelector(".india").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/kolkata", timeStyle: "medium", hourCycle: "h24" }
  );
  // indonesia
  document.querySelector(".indonesia").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/jakarta", timeStyle: "medium", hourCycle: "h24" }
  );
  // china
  document.querySelector(".china").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/shanghai", timeStyle: "medium", hourCycle: "h24" }
  );
  // thailand
  document.querySelector(".thailand").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/bangkok", timeStyle: "medium", hourCycle: "h24" }
  );
  // south korea
  document.querySelector(".south-korea").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "asia/seoul",
      timeStyle: "medium",
      hourCycle: "h24",
    });
  // philippines
  document.querySelector(".philippines").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "asia/manila",
      timeStyle: "medium",
      hourCycle: "h24",
    });
  // singapore
  document.querySelector(".singapore").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/singapore", timeStyle: "medium", hourCycle: "h24" }
  );
  // vietnam
  document.querySelector(".vietnam").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/ho_chi_minh", timeStyle: "medium", hourCycle: "h24" }
  );
  // malaysia
  document.querySelector(".malaysia").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/kuala_lumpur", timeStyle: "medium", hourCycle: "h24" }
  );
  // pakistan
  document.querySelector(".pakistan").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/karachi", timeStyle: "medium", hourCycle: "h24" }
  );
  // hongkong
  document.querySelector(".hong-kong").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/hong_kong", timeStyle: "medium", hourCycle: "h24" }
  );
  // taiwan
  document.querySelector(".taiwan").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/taipei", timeStyle: "medium", hourCycle: "h24" }
  );
  // cambodia
  document.querySelector(".cambodia").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/phnom_penh", timeStyle: "medium", hourCycle: "h24" }
  );
  // saudi arabia
  document.querySelector(".saudi-arabia").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "asia/riyadh",
      timeStyle: "medium",
      hourCycle: "h24",
    });
  // laos
  document.querySelector(".laos").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/vientiane", timeStyle: "medium", hourCycle: "h24" }
  );
  // myanmar
  document.querySelector(".myanmar").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/yangon", timeStyle: "medium", hourCycle: "h24" }
  );
  // iran
  document.querySelector(".iran").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/tehran", timeStyle: "medium", hourCycle: "h24" }
  );
  // sri lanka
  document.querySelector(".sri-lanka").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/colombo", timeStyle: "medium", hourCycle: "h24" }
  );
  // afghanistan
  document.querySelector(".afghanistan").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "asia/kabul",
      timeStyle: "medium",
      hourCycle: "h24",
    });
  // israel
  document.querySelector(".israel").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/jerusalem", timeStyle: "medium", hourCycle: "h24" }
  );
  // bangladesh
  document.querySelector(".bangladesh").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/dhaka", timeStyle: "medium", hourCycle: "h24" }
  );
  // brunei
  document.querySelector(".brunei").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/brunei", timeStyle: "medium", hourCycle: "h24" }
  );
  // nepal
  document.querySelector(".nepal").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/kathmandu", timeStyle: "medium", hourCycle: "h24" }
  );

  // mongolia
  document.querySelector(".mongolia").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/ulaanbaatar", timeStyle: "medium", hourCycle: "h24" }
  );
  // qatar
  document.querySelector(".qatar").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/qatar", timeStyle: "medium", hourCycle: "h24" }
  );
  //macao
  document.querySelector(".macao").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/macao", timeStyle: "medium", hourCycle: "h24" }
  );
  // uzbekistan
  document.querySelector(".uzbekistan").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/tashkent", timeStyle: "medium", hourCycle: "h24" }
  );
  // iraq
  document.querySelector(".iraq").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/baghdad", timeStyle: "medium", hourCycle: "h24" }
  );

  // armenia
  document.querySelector(".armenia").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/yerevan", timeStyle: "medium", hourCycle: "h24" }
  );
  // north korea
  document.querySelector(".north-korea").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "asia/pyongyang",
      timeStyle: "medium",
      hourCycle: "h24",
    });
  // lebanon
  document.querySelector(".lebanon").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/beirut", timeStyle: "medium", hourCycle: "h24" }
  );
  // united arab emirates
  document.querySelector(".united-arab-emirates").textContent =
    new Date().toLocaleString("en-US", {
      timeZone: "asia/dubai",
      timeStyle: "medium",
      hourCycle: "h24",
    });
  // syria
  document.querySelector(".syria").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/damascus", timeStyle: "medium", hourCycle: "h24" }
  );
  // kyrgyzstan
  document.querySelector(".kyrgyzstan").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/bishkek", timeStyle: "medium", hourCycle: "h24" }
  );
  // jordan
  document.querySelector(".jordan").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/amman", timeStyle: "medium", hourCycle: "h24" }
  );
  // yemen
  document.querySelector(".yemen").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/aden", timeStyle: "medium", hourCycle: "h24" }
  );
  // bhutan
  document.querySelector(".bhutan").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/thimphu", timeStyle: "medium", hourCycle: "h24" }
  );
  // palestine
  document.querySelector(".palestine").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/gaza", timeStyle: "medium", hourCycle: "h24" }
  );

  // kuwait
  document.querySelector(".kuwait").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/kuwait", timeStyle: "medium", hourCycle: "h24" }
  );
  // bahrain
  document.querySelector(".bahrain").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/bahrain", timeStyle: "medium", hourCycle: "h24" }
  );
  // oman
  document.querySelector(".oman").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/muscat", timeStyle: "medium", hourCycle: "h24" }
  );
  // tajikistan
  document.querySelector(".tajikistan").textContent = new Date().toLocaleString(
    "en-US",
    { timeZone: "asia/dushanbe", timeStyle: "medium", hourCycle: "h24" }
  );
};

asiaTime();
setInterval(asiaTime, 1000);

// starting condition
document.querySelector(".section5").classList.add("hide");
document.querySelector(".section2").classList.add("hide");
document.querySelector(".section3").classList.add("hide");
document.querySelector(".section4").classList.add("hide");

function openEurope() {
  document.querySelector(".section2").classList.toggle("hide");
  document.querySelector(".section3").classList.add("hide");
}
function openAmerica() {
  document.querySelector(".section3").classList.toggle("hide");
  document.querySelector(".section2").classList.add("hide");
}
function openAfrica() {
  document.querySelector(".section4").classList.toggle("hide");
  document.querySelector(".section2").classList.add("hide");
  document.querySelector(".section3").classList.add("hide");
}
function openAsia() {
  document.querySelector(".section5").classList.toggle("hide");
  document.querySelector(".section2").classList.add("hide");
  document.querySelector(".section3").classList.add("hide");
  document.querySelector(".section4").classList.add("hide");
}
const updatedTime = function () {
  document.querySelector(".updated").textContent = new Date().toLocaleString({
    timeZone: navigator.language,
    timeStyle: "full",
    hourCycle: "h12",
  });
};
updatedTime();
setInterval(updatedTime, 1000);
