(() => {
  "use strict";

  const ADMIN_PASSWORD = "iberia2058";
  const STORAGE_KEY_V2 = "iberian-election-simulator-v2";
const STORAGE_KEY_V1 = "iberian-election-simulator-v1";
const PROVINCE_PROFILE_VERSION = 2;

 const SUPABASE_URL = "https://zjtrkngbvxwiipgujqce.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqdHJrbmdidnh3aWlwZ3VqcWNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0MzE5NDMsImV4cCI6MjA5OTAwNzk0M30.KX4mmHhGcl1iu82NnfZTvbM42N2y4N6Qmev1JfpMaaI";
const SUPABASE_CONFIG_ID = "global";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

  const TRANSLATIONS = {
    en: {
      appTitle: "Iberian Election Simulator",
      navSummary: "Summary", navCongress: "Congress", navNations: "Nations", navProvinces: "Provinces", navSenate: "Senate",
      save: "Save", admin: "Admin", calculate: "Calculate", simulatorEyebrow: "ELECTION SIMULATOR",
      heroTitle: "From one Iberia-wide result to every province, parliament and senator.",
      heroText: "Enter the result of each electoral list, then explore its territorial distribution and the internal balance between member parties.",
      congress: "Congress", senate: "Senate", administrativeNations: "Administrative Nations", provinces: "Provinces",
      congressSummary: "200 Iberia-wide · 160 provincial", senateSummary: "47 direct · 8 institutional",
      nationsSummary: "Portugal, Catalonia, Basque Country and Spain", provincesSummary: "Provincial second-vote constituencies",
      mainInput: "MAIN INPUT", electoralLists: "Electoral lists", inputHint: "These percentages fix the final Iberia-wide result of each list.",
      addList: "＋ Add list", enteredTotal: "Entered total", normalise: "Normalise to 100%",
      lowerHouse: "LOWER HOUSE", iberianCongress: "Iberian Congress", congressHint: "Alliance competition is calculated first; member parties then divide the seats won by their list.",
      seats: "seats", slThreshold: "Sainte-Laguë · 5% threshold", dhondtNoThreshold: "Provincial D’Hondt · no threshold",
      absoluteMajority: "absolute majority", view: "View", lists: "Lists", members: "Members", memberParties: "Member parties",
      seatComposition: "Seat composition", majorityLine: "Majority line: 181", territories: "TERRITORIES",
      nationCardsHint: "Open a nation to see its aggregate vote, parliament, Senate and provinces.",
      territorialOrigin: "TERRITORIAL ORIGIN", provincialCongressSeats: "The 160 provincial Congress seats",
      territorialTableHint: "These figures are the sum of the seats already awarded in each province.",
      fullDetail: "FULL DETAIL", allProvinces: "All provinces", provinceHint: "Filter, search and switch between percentages, simulated votes and seats.",
      search: "Search", provincePlaceholder: "Province...", nation: "Nation", allianceFilter: "Alliance", metric: "Metric", level: "Level",
      percentage: "Percentage", votes: "Votes", territorialInstitutions: "TERRITORIAL INSTITUTIONS",
      nationalParliaments: "Administrative Nation parliaments", parliamentHint: "D’Hondt is applied to each nation’s aggregate provincial vote.",
      territorialChamber: "TERRITORIAL CHAMBER", iberianSenate: "Iberian Senate",
      senateHint: "The 47 direct seats come from nation-level Sainte-Laguë; eight institutional seats remain available for roleplay.",
      directSenators: "Directly elected senators", directSenatorBreakdown: "Portugal 12 · Catalonia 11 · Basque Country 10 · Spain 14",
      direct: "direct", roleplay: "ROLEPLAY", institutionalSenators: "Institutional senators",
      institutionalHint: "Two are sent by each Administrative Nation. They are assigned manually in admin mode.",
      assigned: "Assigned", localApp: "Made by Villa", resetSimulation: "Reset simulation",
      newList: "NEW LIST", addElectoralList: "Add electoral list", fullName: "Full name", abbreviation: "Abbreviation",
      colour: "Colour", initialResult: "Initial result", cancel: "Cancel", newMember: "NEW MEMBER",
      addMemberParty: "Add member party", organisationalWeight: "Organisational weight", access: "ACCESS",
      administratorMode: "Administrator mode", passwordHint: "The password is stored in app.js.", password: "Password",
      incorrectPassword: "Incorrect password.", enter: "Enter", configuration: "Election configuration",
      adminRealtime: "Changes recalculate the simulation in real time.", listsAndMembers: "Lists & members",
      listAffinities: "List affinities", memberAffinities: "Member affinities", provinceProfiles: "Province profiles",
      iberiaSplit: "200-seat split", directAdjustments: "Direct adjustments", diagnostics: "Diagnostics",
      settingsBackup: "Settings backup", settingsBackupTitle: "Download or restore the complete simulator configuration",
      settingsBackupHint: "The backup contains every electoral list, member party, name, colour, vote result, affinity, province profile, direct modifier, seat-split setting and institutional Senate assignment.",
      downloadSettings: "Download current settings", uploadSettings: "Upload settings", chooseSettingsFile: "Choose JSON or text file",
      settingsText: "Settings text", applySettings: "Apply uploaded settings", settingsDownloaded: "Complete settings downloaded.",
      settingsImported: "Complete settings imported successfully.", invalidSettings: "The settings file is not valid JSON or does not contain usable electoral lists.",
      confirmImportSettings: "Replace every current simulator setting with the uploaded backup?", backupIncludes: "Included in this backup",
      backupParties: "Lists, member parties, names and colours", backupResults: "Current results and all territorial affinities",
      backupProvinces: "Province traits, turnout weights and direct adjustments", backupInstitutions: "Internal seat rules and institutional senators",
      storedLocally: "Stored locally in this browser.", discard: "Discard", saveChanges: "Save changes",
      all: "All", party: "Party", list: "List", member: "Member", threshold: "Threshold",
      iberiaWide: "Iberia-wide", provincial: "Provincial", total: "Total", eligible: "Eligible", belowThreshold: "Below 5%",
      winner: "Winner", population: "Population", parliament: "Parliament", majority: "Majority",
      provincialDeputies: "Provincial deputies", aggregateResult: "Aggregate result", directSenate: "Direct Senate",
      pending: "Pending", electoralList: "Electoral list", noResults: "No matching provinces.",
      simulatedVotes: "Simulated votes", congressSeats: "Congress seats", memberBreakdown: "Member breakdown",
      listResult: "List result", memberResult: "Member result", openProvince: "Open province",
      coalitionCalculator: "Coalition calculator", coalition: "Coalition", hasMajority: "Majority", noMajority: "No majority",
      listStructure: "LIST STRUCTURE", structureTitle: "Electoral lists and member parties",
      structureHint: "Names and colours are presentation fields. Permanent IDs keep all affinities and seat assignments intact.",
      editList: "Edit list", memberCount: "member parties", addMember: "Add member", deleteList: "Delete list",
      deleteMember: "Delete member", presentsIn: "Contests", eligible200: "Eligible for the 200 Iberia-wide seats",
      listAffinityTitle: "Territorial profile of an electoral list",
      listAffinityHint: "List affinities move the list’s fixed Iberia-wide result between provinces without changing its final aggregate percentage.",
      memberAffinityTitle: "Internal competition between member parties",
      memberAffinityHint: "Member affinities only divide their list’s existing vote. They never change the list total in a province.",
      listStrength: "List territorial strength λ", memberStrength: "Member competition strength λ",
      neutralOne: "1.00 is neutral.", localMultiplier: "Local organisational multiplier", factorScale: "Factor scale: −1 to +1.",
      profileTitle: "Province characteristics", profileHint: "Province traits use a −2 to +2 scale. Turnout changes the province’s electoral weight.",
      turnoutWeight: "Turnout / weight", splitTitle: "Internal distribution of the 200 Iberia-wide seats",
      splitHint: "Choose whether the list’s seats follow general member weights or a dedicated manual percentage.",
      useWeights: "Use general weights", useWeightsHint: "Eligible members divide the seats according to their organisational weight.",
      useManual: "Use custom percentages", useManualHint: "Enter a separate internal percentage used only for the 200-seat tier.",
      manualShare: "Manual share", manualTotal: "Manual total", copyWeights: "Copy weights",
      adjustmentTitle: "Direct province adjustment", adjustmentHint: "1.00 is neutral. Use these values for local candidates, historic strength or exceptional campaigns.",
      scope: "Scope", entity: "Entity", modifier: "Modifier", institutionalTitle: "Assign institutional senators",
      institutionalAdminHint: "Each seat is assigned to a member party and displayed with its electoral list.",
      diagnosticTitle: "Model diagnostics", diagnosticHint: "Every external list total and every internal member total must reconcile exactly.",
      listMean: "List affinity mean", listError: "List aggregate error", internalCheck: "Internal seat check",
      noMembers: "This list has no member parties.", atLeastOneMember: "An electoral list must keep at least one member party.",
      atLeastTwoLists: "The simulation needs at least two electoral lists.", added: "added", deleted: "deleted",
      saved: "Scenario saved in this browser.", recalculated: "Election recalculated.", resetDone: "Simulation reset.",
      normalisedDone: "Results normalised to 100%.", emptyNormalise: "An empty result cannot be normalised.",
      exactHundred: "The result adds up to exactly 100%.", missingPoints: "points are missing. Calculations are provisionally normalised.",
      excessPoints: "points exceed 100%. Calculations are provisionally normalised.", enterPositive: "Enter at least one positive result.",
      unsavedChange: "unsaved change", unsavedChanges: "unsaved changes", changesSaved: "Administrative changes saved.",
      changesDiscarded: "Administrative changes discarded.", wrongPresence: "At least one member must contest every nation in which the list is active.",
      listMustContest: "A list must contest at least one nation.", memberMustContest: "A member party must contest at least one nation.",
      confirmDeleteList: "Delete this electoral list and all its members?", confirmDeleteMember: "Delete this member party?",
      confirmReset: "Reset the entire simulation?", scenarioPrompt: "Scenario name:", language: "Language",
      Portugal: "Portugal", Catalonia: "Catalonia", Basque: "Basque Country", Spain: "Spain",
      urban: "Urbanisation",
      rural: "Rurality",
      industry: "Industrial / blue-collar employment",
      agriculture: "Agriculture / smallholding",
      identity: "Regional identity",
      autonomy: "Autonomism / decentralisation",
      tradition: "Religiosity / traditional social values",
      education: "Education / knowledge-professional population",
      affluence: "Affluence / business ownership",
      migration: "Diversity / migration exposure",
      periphery: "Periphery / remoteness / insularity"
    },
    es: {
      appTitle: "Simulador Electoral de Iberia",
      navSummary: "Resumen", navCongress: "Congreso", navNations: "Naciones", navProvinces: "Provincias", navSenate: "Senado",
      save: "Guardar", admin: "Administración", calculate: "Calcular", simulatorEyebrow: "SIMULACIÓN ELECTORAL",
      heroTitle: "De un resultado ibérico a cada provincia, parlamento y senador.",
      heroText: "Introduce el resultado de cada lista electoral y explora su distribución territorial y el equilibrio interno entre sus partidos miembros.",
      congress: "Congreso", senate: "Senado", administrativeNations: "Naciones Administrativas", provinces: "Provincias",
      congressSummary: "200 ibéricos · 160 provinciales", senateSummary: "47 directos · 8 institucionales",
      nationsSummary: "Portugal, Cataluña, País Vasco y España", provincesSummary: "Circunscripciones provinciales del segundo voto",
      mainInput: "ENTRADA PRINCIPAL", electoralLists: "Listas electorales", inputHint: "Estos porcentajes fijan el resultado ibérico final de cada lista.",
      addList: "＋ Añadir lista", enteredTotal: "Total introducido", normalise: "Normalizar al 100 %",
      lowerHouse: "CÁMARA BAJA", iberianCongress: "Congreso de Iberia", congressHint: "Primero compiten las alianzas; después sus partidos miembros se reparten los escaños obtenidos.",
      seats: "escaños", slThreshold: "Sainte-Laguë · umbral del 5 %", dhondtNoThreshold: "D’Hondt provincial · sin umbral",
      absoluteMajority: "mayoría absoluta", view: "Vista", lists: "Listas", members: "Miembros", memberParties: "Partidos miembros",
      seatComposition: "Composición de escaños", majorityLine: "Línea de mayoría: 181", territories: "TERRITORIOS",
      nationCardsHint: "Abre una nación para consultar su voto agregado, parlamento, Senado y provincias.",
      territorialOrigin: "ORIGEN TERRITORIAL", provincialCongressSeats: "Los 160 escaños provinciales del Congreso",
      territorialTableHint: "Estas cifras suman los escaños ya adjudicados dentro de cada provincia.",
      fullDetail: "DETALLE COMPLETO", allProvinces: "Todas las provincias", provinceHint: "Filtra, busca y alterna entre porcentajes, votos simulados y escaños.",
      search: "Buscar", provincePlaceholder: "Provincia...", nation: "Nación", allianceFilter: "Alianza", metric: "Métrica", level: "Nivel",
      percentage: "Porcentaje", votes: "Votos", territorialInstitutions: "INSTITUCIONES TERRITORIALES",
      nationalParliaments: "Parlamentos de las Naciones Administrativas", parliamentHint: "D’Hondt se aplica al voto provincial agregado de cada nación.",
      territorialChamber: "CÁMARA TERRITORIAL", iberianSenate: "Senado de Iberia",
      senateHint: "Los 47 escaños directos proceden de Sainte-Laguë por nación; ocho institucionales quedan para el roleplay.",
      directSenators: "Senadores directamente elegidos", directSenatorBreakdown: "Portugal 12 · Cataluña 11 · País Vasco 10 · España 14",
      direct: "directos", roleplay: "ROLEPLAY", institutionalSenators: "Senadores institucionales",
      institutionalHint: "Cada Nación Administrativa envía dos. Se asignan manualmente en administración.",
      assigned: "Asignados", localApp: "Aplicación local en HTML, CSS y JavaScript", resetSimulation: "Restaurar simulación",
      newList: "NUEVA LISTA", addElectoralList: "Añadir lista electoral", fullName: "Nombre completo", abbreviation: "Siglas",
      colour: "Color", initialResult: "Resultado inicial", cancel: "Cancelar", newMember: "NUEVO MIEMBRO",
      addMemberParty: "Añadir partido miembro", organisationalWeight: "Peso organizativo", access: "ACCESO",
      administratorMode: "Modo administrador", passwordHint: "La contraseña está guardada en app.js.", password: "Contraseña",
      incorrectPassword: "Contraseña incorrecta.", enter: "Entrar", configuration: "Configuración electoral",
      adminRealtime: "Los cambios recalculan la simulación en tiempo real.", listsAndMembers: "Listas y miembros",
      listAffinities: "Afinidades de listas", memberAffinities: "Afinidades de miembros", provinceProfiles: "Perfiles provinciales",
      iberiaSplit: "Reparto de 200", directAdjustments: "Ajustes directos", diagnostics: "Diagnóstico",
      settingsBackup: "Copia de configuración", settingsBackupTitle: "Descargar o restaurar la configuración completa del simulador",
      settingsBackupHint: "La copia contiene todas las listas electorales, partidos miembros, nombres, colores, resultados, afinidades, perfiles provinciales, ajustes directos, reglas internas de reparto y asignaciones del Senado institucional.",
      downloadSettings: "Descargar configuración actual", uploadSettings: "Subir configuración", chooseSettingsFile: "Elegir archivo JSON o de texto",
      settingsText: "Texto de configuración", applySettings: "Aplicar configuración subida", settingsDownloaded: "Configuración completa descargada.",
      settingsImported: "Configuración completa importada correctamente.", invalidSettings: "El archivo no es JSON válido o no contiene listas electorales utilizables.",
      confirmImportSettings: "¿Sustituir toda la configuración actual por la copia subida?", backupIncludes: "Incluido en esta copia",
      backupParties: "Listas, partidos miembros, nombres y colores", backupResults: "Resultados actuales y todas las afinidades territoriales",
      backupProvinces: "Rasgos provinciales, pesos de participación y ajustes directos", backupInstitutions: "Reglas internas de reparto y senadores institucionales",
      storedLocally: "Guardado localmente en este navegador.", discard: "Descartar", saveChanges: "Guardar cambios",
      all: "Todos", party: "Partido", list: "Lista", member: "Miembro", threshold: "Umbral",
      iberiaWide: "Ibéricos", provincial: "Provinciales", total: "Total", eligible: "Elegible", belowThreshold: "Bajo el 5 %",
      winner: "Ganador", population: "Población", parliament: "Parlamento", majority: "Mayoría",
      provincialDeputies: "Diputados provinciales", aggregateResult: "Resultado agregado", directSenate: "Senado directo",
      pending: "Pendiente", electoralList: "Lista electoral", noResults: "No hay provincias que coincidan.",
      simulatedVotes: "Votos simulados", congressSeats: "Escaños del Congreso", memberBreakdown: "Desglose interno",
      listResult: "Resultado de listas", memberResult: "Resultado de miembros", openProvince: "Abrir provincia",
      coalitionCalculator: "Calculadora de coaliciones", coalition: "Coalición", hasMajority: "Mayoría", noMajority: "Sin mayoría",
      listStructure: "ESTRUCTURA DE LISTAS", structureTitle: "Listas electorales y partidos miembros",
      structureHint: "Los nombres y colores son campos visuales. Los IDs permanentes mantienen intactas las afinidades y asignaciones.",
      editList: "Editar lista", memberCount: "partidos miembros", addMember: "Añadir miembro", deleteList: "Eliminar lista",
      deleteMember: "Eliminar miembro", presentsIn: "Se presenta en", eligible200: "Elegible para los 200 escaños ibéricos",
      listAffinityTitle: "Perfil territorial de una lista electoral",
      listAffinityHint: "Las afinidades de lista mueven su resultado ibérico fijo entre provincias sin alterar su porcentaje agregado final.",
      memberAffinityTitle: "Competencia interna entre partidos miembros",
      memberAffinityHint: "Las afinidades de miembros solo dividen el voto ya existente de su lista. Nunca cambian el total de la lista en una provincia.",
      listStrength: "Fuerza territorial de listas λ", memberStrength: "Fuerza de competición interna λ",
      neutralOne: "1,00 es neutral.", localMultiplier: "Multiplicador organizativo local", factorScale: "Escala de factores: −1 a +1.",
      profileTitle: "Características provinciales", profileHint: "Los rasgos provinciales usan una escala de −2 a +2. La participación cambia el peso electoral.",
      turnoutWeight: "Participación / peso", splitTitle: "Distribución interna de los 200 escaños ibéricos",
      splitHint: "Elige si los escaños siguen los pesos generales o un porcentaje manual exclusivo para este nivel.",
      useWeights: "Usar pesos generales", useWeightsHint: "Los miembros elegibles se reparten los escaños según su peso organizativo.",
      useManual: "Usar porcentajes propios", useManualHint: "Introduce un porcentaje interno separado, utilizado solo para los 200 escaños.",
      manualShare: "Porcentaje manual", manualTotal: "Total manual", copyWeights: "Copiar pesos",
      adjustmentTitle: "Ajuste directo por provincia", adjustmentHint: "1,00 es neutral. Úsalo para candidaturas locales, implantación histórica o campañas excepcionales.",
      scope: "Nivel", entity: "Entidad", modifier: "Modificador", institutionalTitle: "Asignar senadores institucionales",
      institutionalAdminHint: "Cada escaño se asigna a un partido miembro y se muestra junto a su lista electoral.",
      diagnosticTitle: "Diagnóstico del modelo", diagnosticHint: "Todos los totales externos de listas y los internos de miembros deben coincidir exactamente.",
      listMean: "Media de afinidad", listError: "Error agregado", internalCheck: "Control interno",
      noMembers: "Esta lista no tiene partidos miembros.", atLeastOneMember: "Una lista electoral debe conservar al menos un partido miembro.",
      atLeastTwoLists: "La simulación necesita al menos dos listas electorales.", added: "añadido", deleted: "eliminado",
      saved: "Escenario guardado en este navegador.", recalculated: "Elección recalculada.", resetDone: "Simulación restaurada.",
      normalisedDone: "Resultados normalizados al 100 %.", emptyNormalise: "No se puede normalizar un resultado vacío.",
      exactHundred: "El resultado suma exactamente 100 %.", missingPoints: "puntos pendientes. Los cálculos se normalizan provisionalmente.",
      excessPoints: "puntos por encima del 100 %. Los cálculos se normalizan provisionalmente.", enterPositive: "Introduce al menos un resultado positivo.",
      unsavedChange: "cambio sin guardar", unsavedChanges: "cambios sin guardar", changesSaved: "Cambios administrativos guardados.",
      changesDiscarded: "Cambios administrativos descartados.", wrongPresence: "Debe haber al menos un miembro presente en cada nación donde compite la lista.",
      listMustContest: "Una lista debe presentarse en al menos una nación.", memberMustContest: "Un miembro debe presentarse en al menos una nación.",
      confirmDeleteList: "¿Eliminar esta lista electoral y todos sus miembros?", confirmDeleteMember: "¿Eliminar este partido miembro?",
      confirmReset: "¿Restaurar toda la simulación?", scenarioPrompt: "Nombre del escenario:", language: "Idioma",
      Portugal: "Portugal", Catalonia: "Cataluña", Basque: "País Vasco", Spain: "España",
      urban: "Urbanización",
      rural: "Ruralidad",
      industry: "Industria / empleo obrero",
      agriculture: "Agricultura / pequeña propiedad",
      identity: "Identidad regional",
      autonomy: "Autonomismo / descentralización",
      tradition: "Religiosidad / valores sociales tradicionales",
      education: "Educación / población profesional y del conocimiento",
      affluence: "Riqueza / propiedad empresarial",
      migration: "Diversidad / exposición migratoria",
      periphery: "Periferia / lejanía / insularidad"
    }
  };

  const FACTORS = [
  { id: "urban", labelKey: "urban" },
  { id: "rural", labelKey: "rural" },
  { id: "industry", labelKey: "industry" },
  { id: "agriculture", labelKey: "agriculture" },
  { id: "identity", labelKey: "identity" },
  { id: "autonomy", labelKey: "autonomy" },
  { id: "tradition", labelKey: "tradition" },
  { id: "education", labelKey: "education" },
  { id: "affluence", labelKey: "affluence" },
  { id: "migration", labelKey: "migration" },
  { id: "periphery", labelKey: "periphery" }
];

  const NATIONS = [
    { id: "Portugal", colour: "#2E7D32", parliamentSeats: 230, directSenators: 12 },
    { id: "Catalonia", colour: "#C49700", parliamentSeats: 135, directSenators: 11 },
    { id: "Basque", colour: "#00796B", parliamentSeats: 125, directSenators: 10 },
    { id: "Spain", colour: "#A93636", parliamentSeats: 350, directSenators: 14 }
  ];

  const PROVINCES = [
  ["Portugal","Norte",2428125,10,[0,1,2,1,1,0,2,0,0,0,0]],
  ["Portugal","Centro",1365849,6,[-1,2,1,2,1,0,1,1,-1,-1,0]],
  ["Portugal","Lisboa",3098408,13,[2,-1,1,0,0,-1,-1,2,2,2,0]],
  ["Portugal","Alentejo",352794,1,[-2,2,-1,2,1,0,0,-1,-2,0,1]],
  ["Portugal","Algarve",365943,1,[0,0,-2,1,1,0,0,0,1,2,1]],
  ["Portugal","Azores",182568,1,[-1,1,-1,2,2,2,2,-1,-1,0,2]],
  ["Portugal","Madeira",193634,1,[0,1,-1,1,2,2,2,0,0,1,2]],

  ["Catalonia","Barcelona",4965310,20,[2,-2,2,-2,2,2,-1,2,2,2,0]],
  ["Catalonia","Girona",691842,3,[0,1,1,1,2,2,0,1,1,1,0]],
  ["Catalonia","Lleida",381754,2,[-1,2,0,2,2,2,1,0,0,0,1]],
  ["Catalonia","Tarragona",729416,3,[1,0,2,1,2,2,0,1,0,1,0]],
  ["Catalonia","Rosselló",424332,2,[0,1,-1,1,2,2,0,0,-1,1,2]],

  ["Basque","Bizkaia",1102803,5,[1,-1,2,-1,2,2,0,1,1,1,0]],
  ["Basque","Gipuzkoa",692680,3,[0,0,2,0,2,2,0,2,1,0,0]],
  ["Basque","Araba",311809,1,[0,1,2,1,2,2,1,1,1,0,0]],
  ["Basque","Nafarroa",179512,1,[-1,1,0,1,2,2,2,0,0,-1,1]],
  ["Basque","Iparralde",311648,1,[0,1,-1,1,2,2,1,1,1,1,2]],

  ["Spain","Galicia",1475853,6,[-1,2,1,2,2,2,1,0,-1,-1,1]],
  ["Spain","Asturias",551868,2,[0,1,2,0,1,1,0,0,-1,-1,1]],
  ["Spain","Cantabria",322720,1,[0,1,1,1,1,0,1,0,0,0,0]],
  ["Spain","León",512134,2,[-1,2,1,2,2,1,1,-1,-1,-1,1]],
  ["Spain","Castilla",793275,3,[-1,2,0,2,1,0,2,0,0,-1,0]],
  ["Spain","Ebro",452634,2,[0,1,1,2,1,1,1,0,1,0,0]],
  ["Spain","Aragón",741868,3,[0,1,1,2,2,2,1,1,0,0,1]],
  ["Spain","Valencia",2949368,12,[1,0,1,1,2,1,0,1,1,2,0]],
  ["Spain","Baleares",679470,3,[1,0,-1,0,2,1,0,1,2,2,2]],
  ["Spain","Canarias",1228019,5,[1,0,-1,1,2,2,0,0,0,2,2]],
  ["Spain","Granada",2242900,9,[0,1,0,2,1,0,1,1,0,1,0]],
  ["Spain","Sevilla",2474143,10,[1,0,1,1,1,0,1,1,-1,0,0]],
  ["Spain","Extremadura",572645,2,[-2,2,-1,2,1,0,2,-2,-2,-1,1]],
  ["Spain","Madrid",3867421,15,[2,-2,1,-2,-1,-2,-1,2,2,2,-2]],
  ["Spain","Castilla la Nueva",2018750,9,[0,1,1,2,1,0,1,0,0,1,0]],
  ["Spain","Ceuta",45431,1,[2,-2,-2,-2,2,1,2,-1,-1,2,2]],
  ["Spain","Melilla",47333,1,[2,-2,-2,-2,2,1,2,-1,-1,2,2]]
].map(([nation,name,population,congressSeats,values]) => ({
  nation,
  name,
  population,
  congressSeats,
  traits: Object.fromEntries(
    FACTORS.map((factor, index) => [factor.id, values[index]])
  )
}));

  const neutralNationMap = () => Object.fromEntries(NATIONS.map(n => [n.id, 1]));
  const trueNationMap = () => Object.fromEntries(NATIONS.map(n => [n.id, true]));
  const neutralFactorMap = () => Object.fromEntries(FACTORS.map(f => [f.id, 0]));
  const neutralProvinceMap = () => Object.fromEntries(PROVINCES.map(p => [p.name, 1]));

  function createMember({
    id = uid("member"), name, shortName, colour, weight = 100,
    eligibleIberia = true, presentIn, nationAffinity, factorAffinity,
    directModifiers, manualIberiaShare = 100
  }) {
    return {
      id, name, shortName, colour, weight: Number(weight) || 0,
      eligibleIberia: Boolean(eligibleIberia),
      presentIn: { ...trueNationMap(), ...(presentIn || {}) },
      nationAffinity: { ...neutralNationMap(), ...(nationAffinity || {}) },
      factorAffinity: { ...neutralFactorMap(), ...(factorAffinity || {}) },
      directModifiers: { ...neutralProvinceMap(), ...(directModifiers || {}) },
      manualIberiaShare: Number(manualIberiaShare) || 0
    };
  }

  function createList({
    id = uid("list"), name, shortName, colour, vote = 0,
    presentIn, nationAffinity, factorAffinity, directModifiers,
    iberiaSplitMode = "weights", members
  }) {
    const list = {
      id, name, shortName, colour, vote: Number(vote) || 0,
      presentIn: { ...trueNationMap(), ...(presentIn || {}) },
      nationAffinity: { ...neutralNationMap(), ...(nationAffinity || {}) },
      factorAffinity: { ...neutralFactorMap(), ...(factorAffinity || {}) },
      directModifiers: { ...neutralProvinceMap(), ...(directModifiers || {}) },
      iberiaSplitMode,
      members: []
    };
    list.members = (members?.length ? members : [
      createMember({ name, shortName, colour, weight: 100, manualIberiaShare: 100 })
    ]).map(member => createMember(member));
    return list;
  }

  function defaultState() {
    const core = createList({
      id: "list-core", name: "CORE", shortName: "CORE", colour: "#7557D7", vote: 20,
      members: [
        createMember({ id: "member-efep", name: "EfEP", shortName: "EfEP", colour: "#6241C7", weight: 65, manualIberiaShare: 65 }),
        createMember({ id: "member-er", name: "ER", shortName: "ER", colour: "#9B84E6", weight: 35, manualIberiaShare: 35 })
      ]
    });

    const simple = [
      ["ASTRA","#D74D8A",18],["MSN","#E66E32",16],["PEOPLES","#2E86DE",22],
      ["MSA","#159777",14],["ENLM","#D4A017",10]
    ].map(([name, colour, vote]) => createList({
      id: `list-${name.toLowerCase()}`, name, shortName: name, colour, vote,
      members: [createMember({
        id: `member-${name.toLowerCase()}`, name, shortName: name, colour,
        weight: 100, manualIberiaShare: 100
      })]
    }));

    return {
      version: 3,
      provinceProfileVersion: PROVINCE_PROFILE_VERSION,
      language: "en",
      scenarioName: "Iberian election",
      listLambda: 0.75,
      memberLambda: 0.65,
      lists: [core, ...simple],
      provinceSettings: Object.fromEntries(PROVINCES.map(p => [
        p.name, { turnout: 1, traits: { ...p.traits } }
      ])),
      institutionalSenators: Object.fromEntries(NATIONS.map(n => [n.id, [null, null]]))
    };
  }

  function migrateV1(oldState) {
    const idMap = {};
    const lists = (oldState.parties || []).map((party, index) => {
      const listId = `migrated-list-${index + 1}`;
      const memberId = `migrated-member-${index + 1}`;
      idMap[party.id] = memberId;
      return createList({
        id: listId,
        name: party.name || party.shortName || `List ${index + 1}`,
        shortName: party.shortName || party.name || `L${index + 1}`,
        colour: party.color || party.colour || "#28536B",
        vote: party.vote || 0,
        presentIn: party.presentIn,
        nationAffinity: party.nationAffinity,
        factorAffinity: party.factorAffinity,
        directModifiers: party.directModifiers,
        members: [createMember({
          id: memberId,
          name: party.name || party.shortName || `Member ${index + 1}`,
          shortName: party.shortName || party.name || `M${index + 1}`,
          colour: party.color || party.colour || "#28536B",
          weight: 100,
          presentIn: party.presentIn,
          manualIberiaShare: 100
        })]
      });
    });

    return {
      version: 2,
      language: "en",
      scenarioName: oldState.scenarioName || "Iberian election",
      listLambda: oldState.lambda ?? 0.75,
      memberLambda: 0.65,
      lists: lists.length ? lists : defaultState().lists,
      provinceSettings: oldState.provinceSettings || defaultState().provinceSettings,
      institutionalSenators: Object.fromEntries(NATIONS.map(nation => [
        nation.id,
        (oldState.institutionalSenators?.[nation.id] || [null, null])
          .map(oldPartyId => idMap[oldPartyId] || null)
      ]))
    };
  }

  function loadState() {
    try {
      const v2 = localStorage.getItem(STORAGE_KEY_V2);
      if (v2) return JSON.parse(v2);
      const v1 = localStorage.getItem(STORAGE_KEY_V1);
      if (v1) return migrateV1(JSON.parse(v1));
    } catch (error) {
      console.warn("Could not load saved state.", error);
    }
    return defaultState();
  }

  let state = loadState();
  let calculation = null;
  let adminSnapshot = null;
  let adminDirty = 0;

  const ui = {
    congressLevel: "lists",
    territorialLevel: "lists",
    provinceLevel: "lists",
    provinceMetric: "percent",
    provinceNationFilter: "all",
    provinceListFilter: "all",
    provinceSearch: "",
    parliamentLevel: "lists",
    activeParliamentNation: "Portugal",
    senateLevel: "lists",
    openNation: null,
    adminTab: "structure",
    adminListId: null,
    adminMemberId: null,
    adminProvince: PROVINCES[0].name,
    adjustmentScope: "list",
    adjustmentListId: null,
    adjustmentMemberId: null,
    coalitionSelections: Object.fromEntries(NATIONS.map(n => [n.id, new Set()]))
  };

  function ensureStateShape() {
    state.version = 3;
    state.language = ["en","es"].includes(state.language) ? state.language : "en";
    state.listLambda = numberOr(state.listLambda, 0.75);
    state.memberLambda = numberOr(state.memberLambda, 0.65);
    state.lists = (state.lists || []).map(list => createList(list));
    if (state.lists.length < 2) state = defaultState();

    const refreshProvinceProfiles =
  numberOr(state.provinceProfileVersion, 0) < PROVINCE_PROFILE_VERSION;

state.provinceSettings = state.provinceSettings || {};

PROVINCES.forEach(province => {
  const existingSettings = state.provinceSettings[province.name];

  state.provinceSettings[province.name] = {
    turnout: existingSettings?.turnout ?? 1,

    traits: refreshProvinceProfiles
      ? { ...province.traits }
      : {
          ...province.traits,
          ...(existingSettings?.traits || {})
        }
  };
});

state.provinceProfileVersion = PROVINCE_PROFILE_VERSION;

    state.institutionalSenators = {
      ...Object.fromEntries(NATIONS.map(n => [n.id, [null, null]])),
      ...(state.institutionalSenators || {})
    };

    if (!findList(ui.adminListId)) ui.adminListId = state.lists[0]?.id || null;
    const selectedList = findList(ui.adminListId);
    if (!selectedList?.members.some(m => m.id === ui.adminMemberId)) {
      ui.adminMemberId = selectedList?.members[0]?.id || null;
    }
    if (!findList(ui.adjustmentListId)) ui.adjustmentListId = state.lists[0]?.id || null;
    const adjustList = findList(ui.adjustmentListId);
    if (!adjustList?.members.some(m => m.id === ui.adjustmentMemberId)) {
      ui.adjustmentMemberId = adjustList?.members[0]?.id || null;
    }

    const validMemberIds = new Set(flatMembers().map(row => row.member.id));
    NATIONS.forEach(nation => {
      state.institutionalSenators[nation.id] = (state.institutionalSenators[nation.id] || [null, null])
        .slice(0, 2)
        .map(id => validMemberIds.has(id) ? id : null);
      while (state.institutionalSenators[nation.id].length < 2) state.institutionalSenators[nation.id].push(null);
    });
  }

  function calculateElection() {
    const lists = state.lists;
    const listCount = lists.length;
    const listVoteTotal = sum(lists.map(list => Math.max(0, list.vote)));
    const nationalListShares = lists.map(list =>
      listVoteTotal > 0 ? Math.max(0, list.vote) / listVoteTotal : 1 / listCount
    );

    const weights = PROVINCES.map(province =>
      province.population * Math.max(0, numberOr(state.provinceSettings[province.name].turnout, 1))
    );
    const totalWeight = sum(weights);

    const listAvailable = lists.map(list => PROVINCES.map(province =>
      Boolean(list.presentIn[province.nation]) &&
      list.members.some(member => member.presentIn[province.nation])
    ));

    const rawListAffinity = lists.map((list, listIndex) => PROVINCES.map((province, provinceIndex) => {
      if (!listAvailable[listIndex][provinceIndex]) return 0;
      const traits = state.provinceSettings[province.name].traits;
      const score = FACTORS.reduce((total, factor) =>
        total + numberOr(traits[factor.id], 0) * numberOr(list.factorAffinity[factor.id], 0), 0
      ) / FACTORS.length;
      return positiveOr(list.nationAffinity[province.nation], 1) *
        Math.exp(state.listLambda * score) *
        positiveOr(list.directModifiers[province.name], 1);
    }));

    const finalListAffinity = rawListAffinity.map((row, listIndex) => {
      const mean = row.reduce((total, value, provinceIndex) =>
        total + value * weights[provinceIndex], 0
      ) / (totalWeight || 1);
      return row.map(value => mean > 0 ? value / mean : 0);
    });

    let provinceListShares = PROVINCES.map((province, provinceIndex) => {
      const initial = lists.map((list, listIndex) =>
        nationalListShares[listIndex] * finalListAffinity[listIndex][provinceIndex]
      );
      return normaliseRow(initial, listAvailable.map(row => row[provinceIndex]));
    });

    for (let iteration = 0; iteration < 80; iteration += 1) {
      const aggregates = lists.map((list, listIndex) =>
        provinceListShares.reduce((total, row, provinceIndex) =>
          total + row[listIndex] * weights[provinceIndex], 0
        ) / (totalWeight || 1)
      );
      const corrections = lists.map((list, listIndex) =>
        aggregates[listIndex] > 0 ? nationalListShares[listIndex] / aggregates[listIndex] : 1
      );
      provinceListShares = provinceListShares.map((row, provinceIndex) =>
        normaliseRow(
          row.map((value, listIndex) =>
            listAvailable[listIndex][provinceIndex] ? value * corrections[listIndex] : 0
          ),
          listAvailable.map(available => available[provinceIndex])
        )
      );
    }

    const provinceListVotes = provinceListShares.map((row, provinceIndex) =>
      row.map(share => share * weights[provinceIndex])
    );

    const provinceMemberShares = lists.map((list, listIndex) =>
      PROVINCES.map((province, provinceIndex) => {
        const strengths = list.members.map(member => {
          if (!member.presentIn[province.nation] || !listAvailable[listIndex][provinceIndex]) return 0;
          const traits = state.provinceSettings[province.name].traits;
          const score = FACTORS.reduce((total, factor) =>
            total + numberOr(traits[factor.id], 0) * numberOr(member.factorAffinity[factor.id], 0), 0
          ) / FACTORS.length;
          return Math.max(0, numberOr(member.weight, 0)) *
            positiveOr(member.nationAffinity[province.nation], 1) *
            Math.exp(state.memberLambda * score) *
            positiveOr(member.directModifiers[province.name], 1);
        });
        return normaliseRow(strengths, list.members.map(member => member.presentIn[province.nation]));
      })
    );

    const provinceMemberVotes = lists.map((list, listIndex) =>
      PROVINCES.map((province, provinceIndex) =>
        list.members.map((member, memberIndex) =>
          provinceListVotes[provinceIndex][listIndex] *
          provinceMemberShares[listIndex][provinceIndex][memberIndex]
        )
      )
    );

    const provinceListSeats = PROVINCES.map((province, provinceIndex) =>
      allocateSeats(
        provinceListVotes[provinceIndex],
        province.congressSeats,
        seat => seat,
        lists.map((list, listIndex) => listAvailable[listIndex][provinceIndex])
      )
    );

    const provinceMemberSeats = lists.map((list, listIndex) =>
      PROVINCES.map((province, provinceIndex) =>
        allocateSeats(
          provinceMemberVotes[listIndex][provinceIndex],
          provinceListSeats[provinceIndex][listIndex],
          seat => seat,
          list.members.map(member => member.presentIn[province.nation])
        )
      )
    );

    const provincialListTotals = lists.map((list, listIndex) =>
      sum(provinceListSeats.map(row => row[listIndex]))
    );

    const provincialMemberTotals = lists.map((list, listIndex) =>
      list.members.map((member, memberIndex) =>
        sum(PROVINCES.map((province, provinceIndex) =>
          provinceMemberSeats[listIndex][provinceIndex][memberIndex]
        ))
      )
    );

    const territorialListSeats = Object.fromEntries(NATIONS.map(nation => [
      nation.id,
      lists.map((list, listIndex) =>
        sum(PROVINCES.map((province, provinceIndex) =>
          province.nation === nation.id ? provinceListSeats[provinceIndex][listIndex] : 0
        ))
      )
    ]));

    const territorialMemberSeats = Object.fromEntries(NATIONS.map(nation => [
      nation.id,
      lists.map((list, listIndex) =>
        list.members.map((member, memberIndex) =>
          sum(PROVINCES.map((province, provinceIndex) =>
            province.nation === nation.id
              ? provinceMemberSeats[listIndex][provinceIndex][memberIndex]
              : 0
          ))
        )
      )
    ]));

    const nationListVotes = {};
    const nationListShares = {};
    const nationMemberVotes = {};
    const nationListParliamentSeats = {};
    const nationMemberParliamentSeats = {};
    const nationListSenateSeats = {};
    const nationMemberSenateSeats = {};

    NATIONS.forEach(nation => {
      const provinceIndices = PROVINCES.map((province, index) =>
        province.nation === nation.id ? index : -1
      ).filter(index => index >= 0);

      nationListVotes[nation.id] = lists.map((list, listIndex) =>
        sum(provinceIndices.map(provinceIndex => provinceListVotes[provinceIndex][listIndex]))
      );
      const nationTotal = sum(nationListVotes[nation.id]);
      nationListShares[nation.id] = nationListVotes[nation.id].map(value =>
        nationTotal > 0 ? value / nationTotal : 0
      );

      nationMemberVotes[nation.id] = lists.map((list, listIndex) =>
        list.members.map((member, memberIndex) =>
          sum(provinceIndices.map(provinceIndex =>
            provinceMemberVotes[listIndex][provinceIndex][memberIndex]
          ))
        )
      );

      nationListParliamentSeats[nation.id] = allocateSeats(
        nationListVotes[nation.id],
        nation.parliamentSeats,
        seat => seat,
        lists.map((list, listIndex) =>
          list.presentIn[nation.id] && list.members.some(member => member.presentIn[nation.id])
        )
      );

      nationMemberParliamentSeats[nation.id] = lists.map((list, listIndex) =>
        allocateSeats(
          nationMemberVotes[nation.id][listIndex],
          nationListParliamentSeats[nation.id][listIndex],
          seat => seat,
          list.members.map(member => member.presentIn[nation.id])
        )
      );

      nationListSenateSeats[nation.id] = allocateSeats(
        nationListVotes[nation.id],
        nation.directSenators,
        seat => 2 * seat - 1,
        lists.map((list, listIndex) =>
          list.presentIn[nation.id] && list.members.some(member => member.presentIn[nation.id])
        )
      );

      nationMemberSenateSeats[nation.id] = lists.map((list, listIndex) =>
        allocateSeats(
          nationMemberVotes[nation.id][listIndex],
          nationListSenateSeats[nation.id][listIndex],
          seat => 2 * seat - 1,
          list.members.map(member => member.presentIn[nation.id])
        )
      );
    });

    const nationalListSeats = allocateSeats(
      nationalListShares,
      200,
      seat => 2 * seat - 1,
      nationalListShares.map(share => share >= 0.05)
    );

    const nationalMemberSeats = lists.map((list, listIndex) => {
      const eligible = list.members.map(member => member.eligibleIberia);
      const requestedSplitValues = list.iberiaSplitMode === "manual"
        ? list.members.map(member => Math.max(0, numberOr(member.manualIberiaShare, 0)))
        : list.members.map(member => Math.max(0, numberOr(member.weight, 0)));
      const fallbackSplitValues = list.members.map(member => Math.max(0, numberOr(member.weight, 0)));
      const splitValues = sum(requestedSplitValues.filter((value, index) => eligible[index])) > 0
        ? requestedSplitValues
        : fallbackSplitValues;
      return allocateSeats(
        splitValues,
        nationalListSeats[listIndex],
        seat => 2 * seat - 1,
        eligible
      );
    });

    const congressListTotals = lists.map((list, listIndex) =>
      nationalListSeats[listIndex] + provincialListTotals[listIndex]
    );

    const congressMemberTotals = lists.map((list, listIndex) =>
      list.members.map((member, memberIndex) =>
        nationalMemberSeats[listIndex][memberIndex] +
        provincialMemberTotals[listIndex][memberIndex]
      )
    );

    const directSenateListTotals = lists.map((list, listIndex) =>
      sum(NATIONS.map(nation => nationListSenateSeats[nation.id][listIndex]))
    );

    const directSenateMemberTotals = lists.map((list, listIndex) =>
      list.members.map((member, memberIndex) =>
        sum(NATIONS.map(nation =>
          nationMemberSenateSeats[nation.id][listIndex][memberIndex]
        ))
      )
    );

    const nationWinners = Object.fromEntries(NATIONS.map(nation => [
      nation.id, maxIndex(nationListShares[nation.id])
    ]));
    const provinceWinners = provinceListShares.map(maxIndex);

    const diagnostics = lists.map((list, listIndex) => {
      const aggregate = provinceListShares.reduce((total, row, provinceIndex) =>
        total + row[listIndex] * weights[provinceIndex], 0
      ) / (totalWeight || 1);
      const affinityMean = finalListAffinity[listIndex].reduce((total, value, provinceIndex) =>
        total + value * weights[provinceIndex], 0
      ) / (totalWeight || 1);
      return {
        listId: list.id,
        target: nationalListShares[listIndex],
        aggregate,
        error: Math.abs(nationalListShares[listIndex] - aggregate),
        affinityMean,
        congressInternalDifference:
          congressListTotals[listIndex] - sum(congressMemberTotals[listIndex]),
        provincialInternalDifference:
          provincialListTotals[listIndex] - sum(provincialMemberTotals[listIndex]),
        senateInternalDifference:
          directSenateListTotals[listIndex] - sum(directSenateMemberTotals[listIndex])
      };
    });

    return {
      nationalListShares, weights, totalWeight, listAvailable,
      rawListAffinity, finalListAffinity,
      provinceListShares, provinceListVotes,
      provinceMemberShares, provinceMemberVotes,
      provinceListSeats, provinceMemberSeats,
      provincialListTotals, provincialMemberTotals,
      territorialListSeats, territorialMemberSeats,
      nationListVotes, nationListShares, nationMemberVotes,
      nationListParliamentSeats, nationMemberParliamentSeats,
      nationListSenateSeats, nationMemberSenateSeats,
      nationalListSeats, nationalMemberSeats,
      congressListTotals, congressMemberTotals,
      directSenateListTotals, directSenateMemberTotals,
      nationWinners, provinceWinners, diagnostics
    };
  }

  function allocateSeats(values, seatCount, divisorFunction, eligible) {
    const seats = values.map(() => 0);
    if (seatCount <= 0) return seats;
    const quotients = [];
    values.forEach((value, entityIndex) => {
      if (!eligible[entityIndex] || value <= 0) return;
      for (let seatNumber = 1; seatNumber <= seatCount; seatNumber += 1) {
        quotients.push({
          entityIndex,
          seatNumber,
          quotient: value / divisorFunction(seatNumber)
        });
      }
    });
    quotients.sort((a, b) =>
      b.quotient - a.quotient ||
      values[b.entityIndex] - values[a.entityIndex] ||
      a.entityIndex - b.entityIndex ||
      a.seatNumber - b.seatNumber
    );
    quotients.slice(0, seatCount).forEach(item => {
      seats[item.entityIndex] += 1;
    });
    return seats;
  }

  function normaliseRow(values, availability) {
    const cleaned = values.map((value, index) => availability[index] ? Math.max(0, value) : 0);
    const total = sum(cleaned);
    if (total > 0) return cleaned.map(value => value / total);
    const availableCount = availability.filter(Boolean).length;
    return availability.map(isAvailable => isAvailable && availableCount ? 1 / availableCount : 0);
  }


async function init() {
  ensureStateShape();
  await loadGlobalState();
  ensureStateShape();
  bindEvents();
  recalculateAndRender();
}

  function recalculateAndRender({ skipInputs = false } = {}) {
    ensureStateShape();
    calculation = calculateElection();
    applyLanguage();
    if (!skipInputs) renderListInputs();
    renderTotal();
    renderCongress();
    renderNationCards();
    renderTerritorialTable();
    renderProvinceFilters();
    renderProvinceTable();
    renderParliament();
    renderSenate();
    renderInstitutionalSenators();
    if (byId("adminDrawer").classList.contains("is-open")) renderAdminContent();
  }

  function applyLanguage() {
    document.documentElement.lang = state.language;
    document.title = t("appTitle");
    document.querySelectorAll("[data-i18n]").forEach(element => {
      element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
      element.placeholder = t(element.dataset.i18nPlaceholder);
    });
    document.querySelectorAll("[data-language]").forEach(button => {
      button.classList.toggle("is-active", button.dataset.language === state.language);
    });
    byId("scenarioNameLabel").textContent = state.scenarioName;
    updateAdminChangeCount();
  }

  function renderListInputs() {
    byId("listInputContainer").innerHTML = state.lists.map(list => `
      <div class="list-input-row">
        <span class="colour-dot" style="background:${escapeHtml(list.colour)}"></span>
        <div class="list-input-row__identity">
          <strong>${escapeHtml(list.shortName)}</strong>
          <small>${list.members.length} ${t("memberCount")}</small>
        </div>
        <span class="input-with-suffix">
          <input
            type="number"
            min="0"
            max="100"
            step="0.1"
            value="${roundForInput(list.vote)}"
            data-list-vote="${escapeHtml(list.id)}"
            aria-label="${escapeHtml(list.shortName)}"
          />
          <small>%</small>
        </span>
      </div>
    `).join("");
  }

  function renderTotal() {
    const total = sum(state.lists.map(list => Math.max(0, list.vote)));
    const difference = total - 100;
    const exact = Math.abs(difference) < 0.0001;
    byId("enteredTotalValue").textContent = formatPercent(total / 100, 2);

    const bar = byId("enteredTotalBar");
    bar.style.width = `${Math.min(100, Math.max(0, total))}%`;
    const message = byId("enteredTotalMessage");
    message.className = "status-message";

    if (exact) {
      bar.style.background = "var(--success)";
      message.classList.add("status-message--success");
      message.textContent = t("exactHundred");
    } else if (total <= 0) {
      bar.style.background = "var(--danger)";
      message.classList.add("status-message--danger");
      message.textContent = t("enterPositive");
    } else if (difference < 0) {
      bar.style.background = "var(--warning)";
      message.classList.add("status-message--warning");
      message.textContent = `${formatNumber(Math.abs(difference), 2)} ${t("missingPoints")}`;
    } else {
      bar.style.background = "var(--danger)";
      message.classList.add("status-message--danger");
      message.textContent = `${formatNumber(difference, 2)} ${t("excessPoints")}`;
    }
  }

  function renderCongress() {
    const sorted = state.lists.map((list, index) => ({ list, index }))
      .sort((a, b) => calculation.nationalListShares[b.index] - calculation.nationalListShares[a.index]);

    byId("voteBars").innerHTML = sorted.map(({ list, index }) => `
      <div class="vote-bar">
        <div class="vote-bar__label">
          <span class="party-dot" style="background:${list.colour}"></span>
          <span>${escapeHtml(list.shortName)}</span>
        </div>
        <div class="vote-bar__track">
          <div class="vote-bar__fill" style="width:${calculation.nationalListShares[index] * 100}%;background:${list.colour}"></div>
        </div>
        <div class="vote-bar__value">${formatPercent(calculation.nationalListShares[index])}</div>
      </div>
    `).join("");

    if (ui.congressLevel === "lists") {
      byId("congressTableHead").innerHTML = `
        <tr>
          <th>${t("electoralList")}</th>
          <th>${t("percentage")}</th>
          <th>${t("threshold")}</th>
          <th>200</th>
          <th>160</th>
          <th>${t("total")}</th>
        </tr>`;
      byId("congressTableBody").innerHTML = state.lists.map((list, listIndex) => {
        const eligible = calculation.nationalListShares[listIndex] >= 0.05;
        return `
          <tr>
            <td>${entityCell(list)}</td>
            <td>${formatPercent(calculation.nationalListShares[listIndex])}</td>
            <td><span class="badge ${eligible ? "badge--success" : "badge--danger"}">${eligible ? t("eligible") : t("belowThreshold")}</span></td>
            <td>${calculation.nationalListSeats[listIndex]}</td>
            <td>${calculation.provincialListTotals[listIndex]}</td>
            <td><strong>${calculation.congressListTotals[listIndex]}</strong></td>
          </tr>`;
      }).join("");
      byId("congressTableFoot").innerHTML = `
        <tr><td>${t("total")}</td><td>100.00%</td><td>—</td>
        <td>${sum(calculation.nationalListSeats)}</td>
        <td>${sum(calculation.provincialListTotals)}</td>
        <td>${sum(calculation.congressListTotals)}</td></tr>`;
      renderSeatBar(
        state.lists.map((list, index) => ({ name: list.shortName, colour: list.colour, seats: calculation.congressListTotals[index] })),
        360
      );
    } else {
      const memberRows = flatMembers();
      byId("congressTableHead").innerHTML = `
        <tr>
          <th>${t("member")}</th>
          <th>${t("electoralList")}</th>
          <th>200</th>
          <th>160</th>
          <th>${t("total")}</th>
        </tr>`;
      byId("congressTableBody").innerHTML = memberRows.map(({ list, member, listIndex, memberIndex }) => `
        <tr>
          <td>${memberCell(member, list)}</td>
          <td>${entityCell(list)}</td>
          <td>${calculation.nationalMemberSeats[listIndex][memberIndex]}</td>
          <td>${calculation.provincialMemberTotals[listIndex][memberIndex]}</td>
          <td><strong>${calculation.congressMemberTotals[listIndex][memberIndex]}</strong></td>
        </tr>`).join("");
      byId("congressTableFoot").innerHTML = `
        <tr><td>${t("total")}</td><td>—</td>
        <td>${sum(calculation.nationalMemberSeats.flat())}</td>
        <td>${sum(calculation.provincialMemberTotals.flat())}</td>
        <td>${sum(calculation.congressMemberTotals.flat())}</td></tr>`;
      renderSeatBar(
        memberRows.map(({ member, listIndex, memberIndex }) => ({
          name: member.shortName,
          colour: member.colour,
          seats: calculation.congressMemberTotals[listIndex][memberIndex]
        })),
        360
      );
    }
  }

  function renderSeatBar(items, totalSeats) {
    byId("congressSeatBar").innerHTML = items.filter(item => item.seats > 0).map(item => `
      <div
        class="stacked-bar__segment"
        style="width:${item.seats / totalSeats * 100}%;background:${item.colour}"
        data-label="${escapeHtml(item.name)} · ${item.seats}"
      ></div>
    `).join("");
  }

  function renderNationCards() {
  byId("nationCards").innerHTML = NATIONS.map(nation => {
    const provinces = PROVINCES.filter(
      province => province.nation === nation.id
    );

    const population = sum(
      provinces.map(province => province.population)
    );

    const provincialSeats = sum(
      provinces.map(province => province.congressSeats)
    );

    const winnerIndex = calculation.nationWinners[nation.id];
    const winner = state.lists[winnerIndex];
    const open = ui.openNation === nation.id;

    const nationTotalVotes = sum(
      calculation.nationListVotes[nation.id]
    );

    const listRows = state.lists
      .map((list, listIndex) => ({
        list,
        listIndex,
        share: calculation.nationListShares[nation.id][listIndex]
      }))
      .sort((a, b) => b.share - a.share)
      .map(({ list, listIndex, share }) => {
        const listParliamentSeats =
          calculation.nationListParliamentSeats[nation.id][listIndex];

        const listDirectSenateSeats =
          calculation.nationListSenateSeats[nation.id][listIndex];

        return `
          <div class="nation-result-row">
            <span>${entityCell(list)}</span>

            <span class="nation-result-row__track">
              <span
                class="nation-result-row__fill"
                style="width:${share * 100}%;background:${list.colour}"
              ></span>
            </span>

            <strong>${formatPercent(share)}</strong>

            <strong>${listParliamentSeats}</strong>

            <strong>${listDirectSenateSeats}</strong>
          </div>

          ${list.members.length > 1 ? `
            <div class="member-mini-list">
              ${list.members.map((member, memberIndex) => {
                const memberVotes =
                  calculation.nationMemberVotes[nation.id]
                    [listIndex][memberIndex];

                const totalNationShare = nationTotalVotes > 0
                  ? memberVotes / nationTotalVotes
                  : 0;

                const memberParliamentSeats =
                  calculation.nationMemberParliamentSeats[nation.id]
                    [listIndex][memberIndex];

                const memberDirectSenateSeats =
                  calculation.nationMemberSenateSeats[nation.id]
                    [listIndex][memberIndex];

                return `
                  <span>
                    ${memberCell(member, list)}

                    <strong>
                      ${formatPercent(totalNationShare)}
                    </strong>

                    <small>
                      · ${memberParliamentSeats}
                      ${t("parliament").toLowerCase()}

                      · ${memberDirectSenateSeats}
                      ${t("directSenate").toLowerCase()}
                    </small>
                  </span>
                `;
              }).join("")}
            </div>
          ` : ""}
        `;
      })
      .join("");

    const provinceButtons = provinces.map(province => {
      const provinceIndex = PROVINCES.findIndex(
        item => item.name === province.name
      );

      const provinceWinner =
        state.lists[calculation.provinceWinners[provinceIndex]];

      return `
        <button
          class="province-chip"
          data-open-province="${escapeHtml(province.name)}"
        >
          <strong>${escapeHtml(province.name)}</strong>

          <span>
            ${formatInteger(province.population)}
            · ${province.congressSeats} ${t("seats")}
          </span>

          <span>
            ${t("winner")}: ${escapeHtml(provinceWinner.shortName)}
          </span>
        </button>
      `;
    }).join("");

    return `
      <article class="nation-card ${open ? "is-open" : ""}">
        <button
          class="nation-card__button"
          data-toggle-nation="${nation.id}"
        >
          <div class="nation-card__top">
            <div class="nation-card__title">
              <span
                class="nation-card__accent"
                style="background:${nation.colour}"
              ></span>

              <div>
                <h3>${t(nation.id)}</h3>

                <span>
                  ${provinces.length}
                  ${t("provinces").toLowerCase()}
                  · ${formatInteger(population)}
                </span>
              </div>
            </div>

            <span class="nation-card__arrow">›</span>
          </div>

          <div class="nation-card__metrics">
            <div class="nation-metric">
              <span>${t("winner")}</span>
              <strong>${escapeHtml(winner.shortName)}</strong>
            </div>

            <div class="nation-metric">
              <span>${t("percentage")}</span>
              <strong>
                ${formatPercent(
                  calculation.nationListShares[nation.id][winnerIndex]
                )}
              </strong>
            </div>

            <div class="nation-metric">
              <span>${t("parliament")}</span>
              <strong>${nation.parliamentSeats}</strong>
            </div>

            <div class="nation-metric">
              <span>${t("provincialDeputies")}</span>
              <strong>${provincialSeats}</strong>
            </div>
          </div>
        </button>

        <div class="nation-card__detail">
          <div class="nation-card__detail-inner">
            <div class="nation-card__detail-content">
              <div class="nation-detail-grid">

                <div>
                  <h3>${t("aggregateResult")}</h3>

                  <div class="nation-result-header">
                    <span>${t("electoralList")}</span>
                    <span></span>
                    <span>${t("percentage")}</span>
                    <span>${t("parliament")}</span>
                    <span>${t("directSenate")}</span>
                  </div>

                  <div class="nation-result-list">
                    ${listRows}
                  </div>
                </div>

                <div class="nation-institution-grid">
                  <div class="nation-institution-card">
                    <span>${t("parliament")}</span>
                    <strong>${nation.parliamentSeats}</strong>

                    <small>
                      ${t("majority")}:
                      ${Math.floor(nation.parliamentSeats / 2) + 1}
                    </small>
                  </div>

                  <div class="nation-institution-card">
                    <span>${t("senate")}</span>
                    <strong>${nation.directSenators} + 2</strong>

                    <small>
                      ${t("directSenate")}
                      +
                      ${t("institutionalSenators").toLowerCase()}
                    </small>
                  </div>
                </div>

                <div class="nation-provinces">
                  <h4>${t("provinces")}</h4>

                  <div class="province-chip-grid">
                    ${provinceButtons}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}
  function renderTerritorialTable() {
    const level = ui.territorialLevel;
    byId("territorialTableHead").innerHTML = `
      <tr><th>${level === "lists" ? t("electoralList") : t("member")}</th>
      ${NATIONS.map(nation => `<th>${t(nation.id)}</th>`).join("")}
      <th>${t("total")}</th></tr>`;

    if (level === "lists") {
      byId("territorialTableBody").innerHTML = state.lists.map((list, listIndex) => `
        <tr><td>${entityCell(list)}</td>
        ${NATIONS.map(nation => `<td>${calculation.territorialListSeats[nation.id][listIndex]}</td>`).join("")}
        <td><strong>${calculation.provincialListTotals[listIndex]}</strong></td></tr>
      `).join("");
    } else {
      byId("territorialTableBody").innerHTML = flatMembers().map(({ list, member, listIndex, memberIndex }) => `
        <tr><td>${memberCell(member, list)}</td>
        ${NATIONS.map(nation => `<td>${calculation.territorialMemberSeats[nation.id][listIndex][memberIndex]}</td>`).join("")}
        <td><strong>${calculation.provincialMemberTotals[listIndex][memberIndex]}</strong></td></tr>
      `).join("");
    }

    byId("territorialTableFoot").innerHTML = `
      <tr><td>${t("total")}</td>
      ${NATIONS.map(nation => `<td>${level === "lists"
        ? sum(calculation.territorialListSeats[nation.id])
        : sum(calculation.territorialMemberSeats[nation.id].flat())}</td>`).join("")}
      <td>160</td></tr>`;
  }

  function renderProvinceFilters() {
    const currentNation = ui.provinceNationFilter;
    const currentList = ui.provinceListFilter;
    byId("provinceNationFilter").innerHTML = `
      <option value="all">${t("all")}</option>
      ${NATIONS.map(nation => `<option value="${nation.id}" ${currentNation === nation.id ? "selected" : ""}>${t(nation.id)}</option>`).join("")}`;
    byId("provinceListFilter").innerHTML = `
      <option value="all">${t("all")}</option>
      ${state.lists.map(list => `<option value="${list.id}" ${currentList === list.id ? "selected" : ""}>${escapeHtml(list.shortName)}</option>`).join("")}`;
    byId("provinceListFilter").closest(".field").style.display = ui.provinceLevel === "members" ? "grid" : "none";
  }

  function provinceEntities() {
    if (ui.provinceLevel === "lists") {
      return state.lists.map((list, listIndex) => ({ type: "list", list, listIndex, name: list.shortName, colour: list.colour }));
    }
    const rows = flatMembers();
    return rows.filter(row => ui.provinceListFilter === "all" || row.list.id === ui.provinceListFilter)
      .map(row => ({ ...row, type: "member", name: row.member.shortName, colour: row.member.colour }));
  }

  function renderProvinceTable() {
    const entities = provinceEntities();
    byId("provinceTableHead").innerHTML = `
      <tr>
        <th>${t("provinces")}</th><th>${t("nation")}</th><th>${t("population")}</th><th>${t("seats")}</th>
        ${entities.map(entity => `<th>${escapeHtml(entity.name)}</th>`).join("")}
        <th>${t("winner")}</th>
      </tr>`;

    const filtered = PROVINCES.map((province, provinceIndex) => ({ province, provinceIndex }))
      .filter(({ province }) =>
        (ui.provinceNationFilter === "all" || province.nation === ui.provinceNationFilter) &&
        province.name.toLowerCase().includes(ui.provinceSearch)
      );

    byId("provinceTableBody").innerHTML = filtered.length ? filtered.map(({ province, provinceIndex }) => {
      const values = entities.map(entity => {
        if (entity.type === "list") {
          if (ui.provinceMetric === "percent") return calculation.provinceListShares[provinceIndex][entity.listIndex];
          if (ui.provinceMetric === "votes") return calculation.provinceListVotes[provinceIndex][entity.listIndex];
          return calculation.provinceListSeats[provinceIndex][entity.listIndex];
        }
        if (ui.provinceMetric === "percent") {
          return calculation.provinceMemberVotes[entity.listIndex][provinceIndex][entity.memberIndex] /
            (calculation.weights[provinceIndex] || 1);
        }
        if (ui.provinceMetric === "votes") return calculation.provinceMemberVotes[entity.listIndex][provinceIndex][entity.memberIndex];
        return calculation.provinceMemberSeats[entity.listIndex][provinceIndex][entity.memberIndex];
      });
      const winnerEntityIndex = maxIndex(values);
      const winnerEntity = entities[winnerEntityIndex];
      return `
        <tr class="clickable-row" data-open-province="${escapeHtml(province.name)}">
          <td><strong>${escapeHtml(province.name)}</strong></td>
          <td>${t(province.nation)}</td>
          <td>${formatInteger(province.population)}</td>
          <td>${province.congressSeats}</td>
          ${values.map((value, index) => `<td class="${index === winnerEntityIndex ? "winner-value" : ""}">${
            ui.provinceMetric === "percent" ? formatPercent(value) :
            ui.provinceMetric === "votes" ? formatInteger(Math.round(value)) :
            formatInteger(value)
          }</td>`).join("")}
          <td>${winnerEntity ? (winnerEntity.type === "list" ? entityCell(winnerEntity.list) : memberCell(winnerEntity.member, winnerEntity.list)) : "—"}</td>
        </tr>`;
    }).join("") : `<tr><td colspan="${5 + entities.length}">${t("noResults")}</td></tr>`;
  }

  function renderParliament() {
    byId("parliamentTabs").innerHTML = NATIONS.map(nation => `
      <button class="tab-button ${ui.activeParliamentNation === nation.id ? "is-active" : ""}" data-parliament-tab="${nation.id}">
        ${t(nation.id)}
      </button>`).join("");
    renderParliamentDetail();
  }

  function renderParliamentDetail() {
    const nation = NATIONS.find(item => item.id === ui.activeParliamentNation) || NATIONS[0];
    const majority = Math.floor(nation.parliamentSeats / 2) + 1;
    const coalition = ui.coalitionSelections[nation.id];
    const coalitionSeats = state.lists.reduce((total, list, listIndex) =>
      total + (coalition.has(list.id) ? calculation.nationListParliamentSeats[nation.id][listIndex] : 0), 0
    );

    const isLists = ui.parliamentLevel === "lists";
    const rows = isLists
      ? state.lists.map((list, listIndex) => ({
          primary: entityCell(list),
          votes: calculation.nationListVotes[nation.id][listIndex],
          share: calculation.nationListShares[nation.id][listIndex],
          seats: calculation.nationListParliamentSeats[nation.id][listIndex]
        }))
      : flatMembers().map(({ list, member, listIndex, memberIndex }) => ({
          primary: memberCell(member, list),
          votes: calculation.nationMemberVotes[nation.id][listIndex][memberIndex],
          share: calculation.nationMemberVotes[nation.id][listIndex][memberIndex] /
            (sum(calculation.nationListVotes[nation.id]) || 1),
          seats: calculation.nationMemberParliamentSeats[nation.id][listIndex][memberIndex]
        }));

    byId("parliamentDetail").innerHTML = `
      <div class="institution-overview">
        <div class="institution-summary">
          <span>${t(nation.id)}</span>
          <strong>${nation.parliamentSeats}</strong>
          <span>${t("seats")} · ${t("majority")} ${majority}</span>
          <div class="coalition-builder">
            <strong>${t("coalitionCalculator")}</strong>
            <div class="coalition-builder__parties">
              ${state.lists.map(list => `
                <label class="coalition-toggle">
                  <input type="checkbox" data-coalition-list="${list.id}" data-coalition-nation="${nation.id}" ${coalition.has(list.id) ? "checked" : ""}/>
                  <span class="party-dot" style="background:${list.colour}"></span>${escapeHtml(list.shortName)}
                </label>`).join("")}
            </div>
            <div class="coalition-result">${t("coalition")}: <strong>${coalitionSeats} / ${nation.parliamentSeats}</strong>
              <span class="badge ${coalitionSeats >= majority ? "badge--success" : "badge--warning"}">${coalitionSeats >= majority ? t("hasMajority") : t("noMajority")}</span>
            </div>
          </div>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr><th>${isLists ? t("electoralList") : t("member")}</th><th>${t("votes")}</th><th>${t("percentage")}</th><th>${t("seats")}</th></tr></thead>
            <tbody>${rows.map(row => `<tr><td>${row.primary}</td><td>${formatInteger(Math.round(row.votes))}</td><td>${formatPercent(row.share)}</td><td><strong>${row.seats}</strong></td></tr>`).join("")}</tbody>
            <tfoot><tr><td>${t("total")}</td><td>${formatInteger(Math.round(sum(calculation.nationListVotes[nation.id])))}</td><td>100.00%</td><td>${nation.parliamentSeats}</td></tr></tfoot>
          </table>
        </div>
      </div>`;
  }

  function renderSenate() {
    const isLists = ui.senateLevel === "lists";
    byId("senateTableHead").innerHTML = `
      <tr><th>${isLists ? t("electoralList") : t("member")}</th>
      ${NATIONS.map(nation => `<th>${t(nation.id)}</th>`).join("")}<th>${t("total")}</th></tr>`;

    if (isLists) {
      byId("senateTableBody").innerHTML = state.lists.map((list, listIndex) => `
        <tr><td>${entityCell(list)}</td>
        ${NATIONS.map(nation => `<td>${calculation.nationListSenateSeats[nation.id][listIndex]}</td>`).join("")}
        <td><strong>${calculation.directSenateListTotals[listIndex]}</strong></td></tr>`).join("");
    } else {
      byId("senateTableBody").innerHTML = flatMembers().map(({ list, member, listIndex, memberIndex }) => `
        <tr><td>${memberCell(member, list)}</td>
        ${NATIONS.map(nation => `<td>${calculation.nationMemberSenateSeats[nation.id][listIndex][memberIndex]}</td>`).join("")}
        <td><strong>${calculation.directSenateMemberTotals[listIndex][memberIndex]}</strong></td></tr>`).join("");
    }

    byId("senateTableFoot").innerHTML = `
      <tr><td>${t("total")}</td>
      ${NATIONS.map(nation => `<td>${nation.directSenators}</td>`).join("")}<td>47</td></tr>`;
  }

  function renderInstitutionalSenators() {
    let assigned = 0;
    byId("institutionalSenatorsPublic").innerHTML = NATIONS.map(nation => {
      const slots = state.institutionalSenators[nation.id];
      assigned += slots.filter(Boolean).length;
      return `
        <div class="institutional-item">
          <strong>${t(nation.id)}</strong>
          ${slots.map(memberId => {
            const found = findMember(memberId);
            return `<span>${found ? `${escapeHtml(found.member.shortName)} (${escapeHtml(found.list.shortName)})` : t("pending")}</span>`;
          }).join("")}
        </div>`;
    }).join("");
    byId("institutionalAssignedCount").textContent = `${assigned} / 8`;
  }

  function openProvinceModal(provinceName) {
    const provinceIndex = PROVINCES.findIndex(province => province.name === provinceName);
    if (provinceIndex < 0) return;
    const province = PROVINCES[provinceIndex];

    const listRows = state.lists.map((list, listIndex) => ({
      list,
      share: calculation.provinceListShares[provinceIndex][listIndex],
      votes: calculation.provinceListVotes[provinceIndex][listIndex],
      seats: calculation.provinceListSeats[provinceIndex][listIndex]
    })).sort((a, b) => b.share - a.share);

    const memberRows = flatMembers().map(({ list, member, listIndex, memberIndex }) => ({
      list, member,
      votes: calculation.provinceMemberVotes[listIndex][provinceIndex][memberIndex],
      share: calculation.provinceMemberVotes[listIndex][provinceIndex][memberIndex] / (calculation.weights[provinceIndex] || 1),
      seats: calculation.provinceMemberSeats[listIndex][provinceIndex][memberIndex]
    })).filter(row => row.votes > 0 || row.seats > 0).sort((a, b) => b.share - a.share);

    const quotientRows = winningQuotients(
      calculation.provinceListVotes[provinceIndex],
      province.congressSeats,
      seat => seat
    );

    byId("provinceModalContent").innerHTML = `
      <div class="province-modal-header">
        <div>
          <span class="eyebrow">${t(province.nation).toUpperCase()}</span>
          <h2>${escapeHtml(province.name)}</h2>
          <p>${t("winner")}: ${entityCell(state.lists[calculation.provinceWinners[provinceIndex]])}</p>
        </div>
        <div class="province-modal-stats">
          <div class="province-modal-stat"><span>${t("population")}</span><strong>${formatInteger(province.population)}</strong></div>
          <div class="province-modal-stat"><span>${t("simulatedVotes")}</span><strong>${formatInteger(Math.round(calculation.weights[provinceIndex]))}</strong></div>
          <div class="province-modal-stat"><span>${t("congressSeats")}</span><strong>${province.congressSeats}</strong></div>
        </div>
      </div>

      <div class="province-modal-grid">
        <div class="province-chart">
          ${listRows.map(row => `
            <div class="province-chart-row">
              <span>${escapeHtml(row.list.shortName)}</span>
              <div class="province-chart-track"><div class="province-chart-fill" style="width:${row.share * 100}%;background:${row.list.colour}"></div></div>
              <strong>${formatPercent(row.share)}</strong>
            </div>`).join("")}
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr><th>${t("electoralList")}</th><th>${t("votes")}</th><th>${t("percentage")}</th><th>${t("seats")}</th></tr></thead>
            <tbody>${listRows.map(row => `<tr><td>${entityCell(row.list)}</td><td>${formatInteger(Math.round(row.votes))}</td><td>${formatPercent(row.share)}</td><td><strong>${row.seats}</strong></td></tr>`).join("")}</tbody>
          </table>
        </div>
      </div>

      <details class="disclosure" open>
        <summary>${t("memberBreakdown")}</summary>
        <div class="disclosure__content">
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>${t("member")}</th><th>${t("electoralList")}</th><th>${t("votes")}</th><th>${t("percentage")}</th><th>${t("seats")}</th></tr></thead>
              <tbody>${memberRows.map(row => `<tr><td>${memberCell(row.member, row.list)}</td><td>${entityCell(row.list)}</td><td>${formatInteger(Math.round(row.votes))}</td><td>${formatPercent(row.share)}</td><td><strong>${row.seats}</strong></td></tr>`).join("")}</tbody>
            </table>
          </div>
        </div>
      </details>

      <details class="disclosure">
        <summary>D’Hondt</summary>
        <div class="disclosure__content">
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>${t("seats")}</th><th>${t("electoralList")}</th><th>÷</th><th>${t("votes")}</th></tr></thead>
              <tbody>${quotientRows.map((item, index) => `<tr><td>${index + 1}</td><td>${entityCell(state.lists[item.entityIndex])}</td><td>${item.seatNumber}</td><td>${formatNumber(item.quotient, 2)}</td></tr>`).join("")}</tbody>
            </table>
          </div>
        </div>
      </details>`;

    openModal("provinceModal");
  }

  function winningQuotients(values, seatCount, divisorFunction) {
    const rows = [];
    values.forEach((value, entityIndex) => {
      for (let seatNumber = 1; seatNumber <= seatCount; seatNumber += 1) {
        rows.push({ entityIndex, seatNumber, quotient: value / divisorFunction(seatNumber) });
      }
    });
    return rows.sort((a, b) =>
      b.quotient - a.quotient ||
      values[b.entityIndex] - values[a.entityIndex] ||
      a.entityIndex - b.entityIndex
    ).slice(0, seatCount);
  }


  function renderAdminContent() {
    const renderers = {
      structure: renderAdminStructure,
      listAffinities: renderAdminListAffinities,
      memberAffinities: renderAdminMemberAffinities,
      provinceProfiles: renderAdminProvinceProfiles,
      iberiaSplit: renderAdminIberiaSplit,
      directAdjustments: renderAdminDirectAdjustments,
      institutional: renderAdminInstitutional,
      diagnostics: renderAdminDiagnostics,
      settingsBackup: renderAdminSettingsBackup
    };
    byId("adminContent").innerHTML = (renderers[ui.adminTab] || renderAdminStructure)();
  }

  function adminIntro(eyebrow, title, hint) {
    return `<div class="admin-intro"><span class="eyebrow">${eyebrow}</span><h3>${title}</h3><p>${hint}</p></div>`;
  }

  function renderAdminStructure() {
    return `
      ${adminIntro(t("listStructure"), t("structureTitle"), t("structureHint"))}
      ${state.lists.map(list => `
        <section class="admin-block">
          <div class="admin-block__header">
            ${entityCell(list)}
            <div class="admin-block__header-actions">
              <button class="button button--soft button--small" data-add-member="${list.id}">＋ ${t("addMember")}</button>
              <button class="button button--danger button--small" data-delete-list="${list.id}">${t("deleteList")}</button>
            </div>
          </div>

          <div class="admin-form-grid">
            ${adminField(t("fullName"), `<input value="${escapeHtml(list.name)}" data-admin-action="list-name" data-list-id="${list.id}"/>`)}
            ${adminField(t("abbreviation"), `<input value="${escapeHtml(list.shortName)}" maxlength="14" data-admin-action="list-short" data-list-id="${list.id}"/>`)}
            ${adminField(t("colour"), `<input type="color" value="${escapeHtml(list.colour)}" data-admin-action="list-colour" data-list-id="${list.id}"/>`)}
            ${adminField(t("initialResult"), `<span class="input-with-suffix"><input type="number" min="0" max="100" step="0.1" value="${roundForInput(list.vote)}" data-admin-action="list-vote" data-list-id="${list.id}"/><small>%</small></span>`)}
          </div>

          <div class="presence-row">
            <span>${t("presentsIn")}:</span>
            ${NATIONS.map(nation => presencePill({
              label: t(nation.id),
              checked: list.presentIn[nation.id],
              action: "list-presence",
              listId: list.id,
              nationId: nation.id
            })).join("")}
          </div>

          <div class="member-list">
            ${list.members.map(member => `
              <div class="member-editor">
                <div class="member-editor__top">
                  ${memberCell(member, list)}
                  <div class="member-editor__actions">
                    <button class="button button--danger button--small" data-delete-member="${member.id}" data-list-id="${list.id}">${t("deleteMember")}</button>
                  </div>
                </div>

                <div class="admin-form-grid">
                  ${adminField(t("fullName"), `<input value="${escapeHtml(member.name)}" data-admin-action="member-name" data-list-id="${list.id}" data-member-id="${member.id}"/>`)}
                  ${adminField(t("abbreviation"), `<input value="${escapeHtml(member.shortName)}" maxlength="14" data-admin-action="member-short" data-list-id="${list.id}" data-member-id="${member.id}"/>`)}
                  ${adminField(t("colour"), `<input type="color" value="${escapeHtml(member.colour)}" data-admin-action="member-colour" data-list-id="${list.id}" data-member-id="${member.id}"/>`)}
                  ${adminField(t("organisationalWeight"), `<input type="number" min="0.01" step="0.1" value="${roundForInput(member.weight, 2)}" data-admin-action="member-weight" data-list-id="${list.id}" data-member-id="${member.id}"/>`)}
                  ${adminField(t("eligible200"), `<label class="presence-pill"><input type="checkbox" ${member.eligibleIberia ? "checked" : ""} data-admin-action="member-eligible" data-list-id="${list.id}" data-member-id="${member.id}"/> ${t("eligible")}</label>`)}
                </div>

                <div class="presence-row">
                  <span>${t("presentsIn")}:</span>
                  ${NATIONS.map(nation => presencePill({
                    label: t(nation.id),
                    checked: member.presentIn[nation.id],
                    action: "member-presence",
                    listId: list.id,
                    memberId: member.id,
                    nationId: nation.id
                  })).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        </section>
      `).join("")}
    `;
  }

  function renderAdminListAffinities() {
    const list = findList(ui.adminListId) || state.lists[0];
    return `
      ${adminIntro(t("listAffinities").toUpperCase(), t("listAffinityTitle"), t("listAffinityHint"))}
      <div class="admin-selectors">
        ${adminField(t("electoralList"), `<select data-admin-select="admin-list">${listOptions(list.id)}</select>`)}
      </div>

      <section class="admin-block">
        <div class="admin-block__header">${entityCell(list)}<span class="badge badge--neutral">${t("neutralOne")}</span></div>
        ${adminSlider({
          label: t("listStrength"), value: state.listLambda, min: 0, max: 1.5, step: 0.01,
          action: "list-lambda", reset: 0.75
        })}
      </section>

      <section class="admin-block">
        <div class="admin-block__header"><strong>${t("administrativeNations")}</strong></div>
                ${NATIONS.map(nation => adminSlider({
          label: `${t(nation.id)} · ${t("localMultiplier")}`,
          value: list.nationAffinity[nation.id],
          min: 0.01,
          max: 200,
          step: 0.01,
          action: "list-nation-affinity",
          listId: list.id,
          key: nation.id,
          reset: 1
        })).join("")}
      </section>

      <section class="admin-block">
        <div class="admin-block__header"><strong>${t("listAffinities")}</strong><span class="badge badge--neutral">${t("factorScale")}</span></div>
        ${FACTORS.map(factor => adminSlider({
          label: t(factor.labelKey), value: list.factorAffinity[factor.id], min: -1, max: 1, step: 0.05,
          action: "list-factor-affinity", listId: list.id, key: factor.id, reset: 0
        })).join("")}
      </section>
    `;
  }

  function renderAdminMemberAffinities() {
    const list = findList(ui.adminListId) || state.lists[0];
    const member = list.members.find(item => item.id === ui.adminMemberId) || list.members[0];
    ui.adminMemberId = member.id;

    return `
      ${adminIntro(t("memberAffinities").toUpperCase(), t("memberAffinityTitle"), t("memberAffinityHint"))}
      <div class="admin-selectors">
        ${adminField(t("electoralList"), `<select data-admin-select="admin-list">${listOptions(list.id)}</select>`)}
        ${adminField(t("member"), `<select data-admin-select="admin-member">${memberOptions(list, member.id)}</select>`)}
      </div>

      <section class="admin-block">
        <div class="admin-block__header">${memberCell(member, list)}</div>
        ${adminSlider({
          label: t("organisationalWeight"), value: member.weight, min: 0.01, max: 200, step: 0.1,
          action: "member-weight", listId: list.id, memberId: member.id, reset: 100
        })}
        ${adminSlider({
          label: t("memberStrength"), value: state.memberLambda, min: 0, max: 1.5, step: 0.01,
          action: "member-lambda", reset: 0.65
        })}
      </section>

      <section class="admin-block">
        <div class="admin-block__header"><strong>${t("administrativeNations")}</strong></div>
                ${NATIONS.map(nation => adminSlider({
          label: `${t(nation.id)} · ${t("localMultiplier")}`,
          value: member.nationAffinity[nation.id],
          min: 0.01,
          max: 200,
          step: 0.01,
          action: "member-nation-affinity",
          listId: list.id,
          memberId: member.id,
          key: nation.id,
          reset: 1
        })).join("")}
      </section>

      <section class="admin-block">
        <div class="admin-block__header"><strong>${t("memberAffinities")}</strong><span class="badge badge--neutral">${t("factorScale")}</span></div>
        ${FACTORS.map(factor => adminSlider({
          label: t(factor.labelKey), value: member.factorAffinity[factor.id], min: -1, max: 1, step: 0.05,
          action: "member-factor-affinity", listId: list.id, memberId: member.id, key: factor.id, reset: 0
        })).join("")}
      </section>
    `;
  }

  function renderAdminProvinceProfiles() {
    const province = PROVINCES.find(item => item.name === ui.adminProvince) || PROVINCES[0];
    const settings = state.provinceSettings[province.name];

    return `
      ${adminIntro(t("provinceProfiles").toUpperCase(), t("profileTitle"), t("profileHint"))}
      <div class="admin-selectors">
        ${adminField(t("provinces"), `<select data-admin-select="admin-province">${PROVINCES.map(item =>
          `<option value="${escapeHtml(item.name)}" ${item.name === province.name ? "selected" : ""}>${escapeHtml(item.name)} · ${t(item.nation)}</option>`
        ).join("")}</select>`)}
      </div>
      <section class="admin-block">
        <div class="admin-block__header"><strong>${escapeHtml(province.name)}</strong><span>${formatInteger(province.population)} · ${province.congressSeats} ${t("seats")}</span></div>
        ${adminSlider({
          label: t("turnoutWeight"), value: settings.turnout, min: 0.5, max: 1.5, step: 0.01,
          action: "province-turnout", province: province.name, reset: 1
        })}
        ${FACTORS.map(factor => adminSlider({
          label: t(factor.labelKey), value: settings.traits[factor.id], min: -2, max: 2, step: 1,
          action: "province-trait", province: province.name, key: factor.id, reset: province.traits[factor.id]
        })).join("")}
      </section>
    `;
  }

  function renderAdminIberiaSplit() {
    const list = findList(ui.adminListId) || state.lists[0];
    const eligibleMembers = list.members.filter(member => member.eligibleIberia);
    const manualTotal = sum(eligibleMembers.map(member => Math.max(0, member.manualIberiaShare)));

    return `
      ${adminIntro(t("iberiaSplit").toUpperCase(), t("splitTitle"), t("splitHint"))}
      <div class="admin-selectors">
        ${adminField(t("electoralList"), `<select data-admin-select="admin-list">${listOptions(list.id)}</select>`)}
      </div>

      <div class="radio-card-grid">
        <label class="radio-card">
          <input type="radio" name="iberiaSplitMode" value="weights" data-admin-action="split-mode" data-list-id="${list.id}" ${list.iberiaSplitMode === "weights" ? "checked" : ""}/>
          <span><strong>${t("useWeights")}</strong><small>${t("useWeightsHint")}</small></span>
        </label>
        <label class="radio-card">
          <input type="radio" name="iberiaSplitMode" value="manual" data-admin-action="split-mode" data-list-id="${list.id}" ${list.iberiaSplitMode === "manual" ? "checked" : ""}/>
          <span><strong>${t("useManual")}</strong><small>${t("useManualHint")}</small></span>
        </label>
      </div>

      <section class="admin-block">
        <div class="admin-block__header">
          ${entityCell(list)}
          <button class="button button--soft button--small" data-copy-weights="${list.id}">${t("copyWeights")}</button>
        </div>
        <div class="table-wrap">
          <table class="admin-table">
            <thead><tr><th>${t("member")}</th><th>${t("eligible")}</th><th>${t("organisationalWeight")}</th><th>${t("manualShare")}</th><th>200</th></tr></thead>
            <tbody>
              ${list.members.map((member, memberIndex) => `
                <tr>
                  <td>${memberCell(member, list)}</td>
                  <td>${member.eligibleIberia ? `<span class="badge badge--success">${t("eligible")}</span>` : `<span class="badge badge--neutral">—</span>`}</td>
                  <td>${formatNumber(member.weight, 2)}</td>
                  <td><input type="number" min="0" step="0.1" value="${roundForInput(member.manualIberiaShare, 2)}" data-admin-action="manual-iberia-share" data-list-id="${list.id}" data-member-id="${member.id}" ${member.eligibleIberia ? "" : "disabled"}/></td>
                  <td><strong>${calculation.nationalMemberSeats[state.lists.indexOf(list)][memberIndex]}</strong></td>
                </tr>`).join("")}
            </tbody>
            <tfoot><tr><td>${t("manualTotal")}</td><td>—</td><td>${formatNumber(sum(eligibleMembers.map(member => member.weight)), 2)}</td><td>${formatNumber(manualTotal, 2)}%</td><td>${calculation.nationalListSeats[state.lists.indexOf(list)]}</td></tr></tfoot>
          </table>
        </div>
      </section>
    `;
  }

  function renderAdminDirectAdjustments() {
    const list = findList(ui.adjustmentListId) || state.lists[0];
    const member = list.members.find(item => item.id === ui.adjustmentMemberId) || list.members[0];
    ui.adjustmentMemberId = member.id;
    const isList = ui.adjustmentScope === "list";
    const modifiers = isList ? list.directModifiers : member.directModifiers;

    return `
      ${adminIntro(t("directAdjustments").toUpperCase(), t("adjustmentTitle"), t("adjustmentHint"))}
      <div class="admin-selectors">
        ${adminField(t("scope"), `<select data-admin-select="adjustment-scope"><option value="list" ${isList ? "selected" : ""}>${t("lists")}</option><option value="member" ${!isList ? "selected" : ""}>${t("members")}</option></select>`)}
        ${adminField(t("electoralList"), `<select data-admin-select="adjustment-list">${listOptions(list.id)}</select>`)}
        ${!isList ? adminField(t("member"), `<select data-admin-select="adjustment-member">${memberOptions(list, member.id)}</select>`) : ""}
      </div>

      <div class="table-wrap">
        <table class="admin-table">
          <thead><tr><th>${t("provinces")}</th><th>${t("nation")}</th><th>${t("modifier")}</th><th></th></tr></thead>
          <tbody>${PROVINCES.map(province => `
            <tr>
              <td>${escapeHtml(province.name)}</td>
              <td>${t(province.nation)}</td>
              <td><input type="number" min="0.25" max="3" step="0.01" value="${roundForInput(modifiers[province.name], 2)}"
                data-admin-action="${isList ? "list-direct" : "member-direct"}"
                data-list-id="${list.id}" ${!isList ? `data-member-id="${member.id}"` : ""} data-province="${escapeHtml(province.name)}"/></td>
              <td><button class="reset-mini" data-admin-reset="${isList ? "list-direct" : "member-direct"}" data-list-id="${list.id}" ${!isList ? `data-member-id="${member.id}"` : ""} data-province="${escapeHtml(province.name)}" data-reset-value="1">↺</button></td>
            </tr>`).join("")}</tbody>
        </table>
      </div>
    `;
  }

  function renderAdminInstitutional() {
    const memberRows = flatMembers();
    return `
      ${adminIntro(t("roleplay"), t("institutionalTitle"), t("institutionalAdminHint"))}
      <div class="table-wrap">
        <table class="admin-table">
          <thead><tr><th>${t("nation")}</th><th>1</th><th>2</th></tr></thead>
          <tbody>${NATIONS.map(nation => `
            <tr>
              <td><strong>${t(nation.id)}</strong></td>
              ${[0,1].map(slotIndex => `
                <td><select data-admin-action="institutional-senator" data-nation="${nation.id}" data-slot="${slotIndex}">
                  <option value="">${t("pending")}</option>
                  ${state.lists.map(list => `
                    <optgroup label="${escapeHtml(list.shortName)}">
                      ${list.members.map(member => `<option value="${member.id}" ${state.institutionalSenators[nation.id][slotIndex] === member.id ? "selected" : ""}>${escapeHtml(member.shortName)}</option>`).join("")}
                    </optgroup>`).join("")}
                </select></td>`).join("")}
            </tr>`).join("")}</tbody>
        </table>
      </div>
    `;
  }


  function renderAdminSettingsBackup() {
    return `
      ${adminIntro(t("settingsBackup").toUpperCase(), t("settingsBackupTitle"), t("settingsBackupHint"))}
      <section class="admin-block settings-backup-panel">
        <div class="settings-backup-grid">
          <div class="settings-backup-card settings-backup-card--download">
            <span class="settings-backup-icon" aria-hidden="true">↓</span>
            <h4>${t("downloadSettings")}</h4>
            <p>${t("settingsBackupHint")}</p>
            <button type="button" class="button button--primary" data-download-settings>${t("downloadSettings")}</button>
          </div>
          <div class="settings-backup-card">
            <span class="settings-backup-icon" aria-hidden="true">↑</span>
            <h4>${t("uploadSettings")}</h4>
            <label class="field">
              <span>${t("chooseSettingsFile")}</span>
              <input id="settingsFileInput" type="file" accept=".json,.txt,application/json,text/plain" />
            </label>
            <label class="field">
              <span>${t("settingsText")}</span>
              <textarea id="settingsImportText" spellcheck="false" placeholder='{ "format": "mi-iberia-settings-v1", "state": { ... } }'></textarea>
            </label>
            <button type="button" class="button button--primary" data-apply-settings>${t("applySettings")}</button>
          </div>
        </div>
        <div class="backup-includes">
          <strong>${t("backupIncludes")}</strong>
          <div>
            <span>✓ ${t("backupParties")}</span>
            <span>✓ ${t("backupResults")}</span>
            <span>✓ ${t("backupProvinces")}</span>
            <span>✓ ${t("backupInstitutions")}</span>
          </div>
        </div>
      </section>`;
  }

  function settingsExportPayload() {
    return {
      format: "mi-iberia-settings-v1",
      schemaVersion: 1,
      exportedAt: new Date().toISOString(),
      source: "iberian-election-simulator",
      state: structuredClone(state)
    };
  }

  function safeSettingsFilename(value) {
    const base = String(value || "iberian-election-settings")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "iberian-election-settings";
    return `${base}-settings.json`;
  }

  function downloadCurrentSettings() {
    const payload = JSON.stringify(settingsExportPayload(), null, 2);
    const blob = new Blob([payload], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = safeSettingsFilename(state.scenarioName);
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    toast(t("settingsDownloaded"), "success");
  }

  function normaliseImportedSettings(raw) {
    const candidate = raw?.state || raw?.settings || raw?.data || raw;
    if (!candidate || !Array.isArray(candidate.lists) || candidate.lists.length < 2) {
      throw new Error("Invalid settings payload");
    }

    const defaults = defaultState();
    return {
      version: 3,
      provinceProfileVersion: numberOr(candidate.provinceProfileVersion, PROVINCE_PROFILE_VERSION),
      language: ["en", "es"].includes(candidate.language) ? candidate.language : state.language,
      scenarioName: String(candidate.scenarioName || defaults.scenarioName),
      listLambda: numberOr(candidate.listLambda, defaults.listLambda),
      memberLambda: numberOr(candidate.memberLambda, defaults.memberLambda),
      lists: candidate.lists.map(list => createList(list)),
      provinceSettings: structuredClone(candidate.provinceSettings || defaults.provinceSettings),
      institutionalSenators: structuredClone(candidate.institutionalSenators || defaults.institutionalSenators)
    };
  }

  function importSettingsText(text) {
    try {
      const cleaned = String(text || "").trim()
        .replace(/^```(?:json)?\s*/i, "")
        .replace(/\s*```$/, "");
      const parsed = JSON.parse(cleaned);
      if (!window.confirm(t("confirmImportSettings"))) return;

      state = normaliseImportedSettings(parsed);
      ensureStateShape();
      resetUi();
      saveState();
      adminSnapshot = structuredClone(state);
      adminDirty = 0;
      recalculateAndRender();
      ui.adminTab = "settingsBackup";
      document.querySelectorAll(".admin-tab").forEach(button =>
        button.classList.toggle("is-active", button.dataset.adminTab === "settingsBackup")
      );
      renderAdminContent();
      updateAdminChangeCount();
      toast(t("settingsImported"), "success");
    } catch (error) {
      console.warn("Settings import failed", error);
      toast(t("invalidSettings"), "danger");
    }
  }

  function renderAdminDiagnostics() {
    const assigned = sum(NATIONS.map(nation => state.institutionalSenators[nation.id].filter(Boolean).length));
    return `
      ${adminIntro(t("diagnostics").toUpperCase(), t("diagnosticTitle"), t("diagnosticHint"))}
      <div class="diagnostic-grid">
        ${diagnosticCard("200", `${sum(calculation.nationalListSeats)} / 200`, "Sainte-Laguë")}
        ${diagnosticCard("160", `${sum(calculation.provincialListTotals)} / 160`, "D’Hondt")}
        ${diagnosticCard(t("congress"), `${sum(calculation.congressListTotals)} / 360`, t("internalCheck"))}
        ${diagnosticCard(t("directSenate"), `${sum(calculation.directSenateListTotals)} / 47`, t("internalCheck"))}
        ${diagnosticCard(t("institutionalSenators"), `${assigned} / 8`, t("roleplay"))}
      </div>

      <div class="table-wrap" style="margin-top:15px">
        <table class="admin-table">
          <thead><tr><th>${t("electoralList")}</th><th>${t("listMean")}</th><th>${t("listError")}</th><th>360 Δ</th><th>160 Δ</th><th>47 Δ</th></tr></thead>
          <tbody>${calculation.diagnostics.map((diagnostic, listIndex) => `
            <tr>
              <td>${entityCell(state.lists[listIndex])}</td>
              <td>${formatNumber(diagnostic.affinityMean, 5)}</td>
              <td><span class="badge ${diagnostic.error < 0.000001 ? "badge--success" : "badge--danger"}">${formatNumber(diagnostic.error, 8)}</span></td>
              <td>${differenceBadge(diagnostic.congressInternalDifference)}</td>
              <td>${differenceBadge(diagnostic.provincialInternalDifference)}</td>
              <td>${differenceBadge(diagnostic.senateInternalDifference)}</td>
            </tr>`).join("")}</tbody>
        </table>
      </div>
    `;
  }

  function diagnosticCard(label, value, small) {
    return `<div class="diagnostic-card"><span>${label}</span><strong>${value}</strong><small>${small}</small></div>`;
  }

  function differenceBadge(value) {
    return `<span class="badge ${value === 0 ? "badge--success" : "badge--danger"}">${value}</span>`;
  }

  function adminField(label, content) {
    return `<label class="admin-field"><span>${label}</span>${content}</label>`;
  }

  function presencePill({ label, checked, action, listId, memberId = "", nationId }) {
    return `<label class="presence-pill"><input type="checkbox" ${checked ? "checked" : ""}
      data-admin-action="${action}" data-list-id="${listId}" ${memberId ? `data-member-id="${memberId}"` : ""} data-nation="${nationId}"/>${label}</label>`;
  }

  function adminSlider({ label, value, min, max, step, action, listId = "", memberId = "", key = "", province = "", reset }) {
    const pairId = [action, listId, memberId, key, province].filter(Boolean).join("-");
    const attrs = `data-admin-action="${action}" ${listId ? `data-list-id="${listId}"` : ""} ${memberId ? `data-member-id="${memberId}"` : ""} ${key ? `data-key="${key}"` : ""} ${province ? `data-province="${escapeHtml(province)}"` : ""} data-control-pair="${pairId}"`;
    return `
      <div class="admin-slider-row">
        <label>${label}</label>
        <input type="range" min="${min}" max="${max}" step="${step}" value="${value}" ${attrs}/>
        <input type="number" min="${min}" max="${max}" step="${step}" value="${roundForInput(value, 3)}" ${attrs}/>
        <button class="reset-mini" data-admin-reset="${action}" ${listId ? `data-list-id="${listId}"` : ""} ${memberId ? `data-member-id="${memberId}"` : ""} ${key ? `data-key="${key}"` : ""} ${province ? `data-province="${escapeHtml(province)}"` : ""} data-reset-value="${reset}">↺</button>
      </div>`;
  }


  function bindEvents() {
    byId("addListBtn").addEventListener("click", () => openModal("addListModal"));
    byId("addListForm").addEventListener("submit", handleAddList);
    byId("addMemberForm").addEventListener("submit", handleAddMember);
    byId("normaliseBtn").addEventListener("click", normaliseVotes);
    byId("recalculateBtn").addEventListener("click", () => {
      recalculateAndRender();
      toast(t("recalculated"), "success");
    });

    byId("saveScenarioBtn").addEventListener("click", () => {
      const name = window.prompt(t("scenarioPrompt"), state.scenarioName);
      if (name?.trim()) state.scenarioName = name.trim();
      saveState();
      applyLanguage();
      toast(t("saved"), "success");
    });

    byId("resetAllBtn").addEventListener("click", () => {
      if (!window.confirm(t("confirmReset"))) return;
      const language = state.language;
      state = defaultState();
      state.language = language;
      localStorage.removeItem(STORAGE_KEY_V2);
      resetUi();
      recalculateAndRender();
      toast(t("resetDone"), "success");
    });

    byId("provinceSearch").addEventListener("input", event => {
      ui.provinceSearch = event.target.value.trim().toLowerCase();
      renderProvinceTable();
    });

    byId("provinceNationFilter").addEventListener("change", event => {
      ui.provinceNationFilter = event.target.value;
      renderProvinceTable();
    });

    byId("provinceListFilter").addEventListener("change", event => {
      ui.provinceListFilter = event.target.value;
      renderProvinceTable();
    });

    byId("adminOpenBtn").addEventListener("click", () => {
      byId("adminPasswordInput").value = "";
      byId("adminLoginError").hidden = true;
      openModal("adminLoginModal");
      setTimeout(() => byId("adminPasswordInput").focus(), 100);
    });

    byId("adminLoginForm").addEventListener("submit", event => {
      event.preventDefault();
      if (byId("adminPasswordInput").value !== ADMIN_PASSWORD) {
        byId("adminLoginError").hidden = false;
        return;
      }
      closeModal("adminLoginModal");
      openAdminDrawer();
    });

    byId("adminCloseBtn").addEventListener("click", closeAdminDrawer);
    byId("adminOverlay").addEventListener("click", closeAdminDrawer);

    byId("adminSaveBtn").addEventListener("click", () => {
      saveState();
      adminSnapshot = structuredClone(state);
      adminDirty = 0;
      updateAdminChangeCount();
      toast(t("changesSaved"), "success");
    });

    byId("adminDiscardBtn").addEventListener("click", () => {
      if (!adminSnapshot) return;
      state = structuredClone(adminSnapshot);
      ensureStateShape();
      adminDirty = 0;
      recalculateAndRender();
      renderAdminContent();
      updateAdminChangeCount();
      toast(t("changesDiscarded"), "success");
    });

    document.addEventListener("click", handleDelegatedClick);
    document.addEventListener("input", handleDelegatedInput);
    document.addEventListener("change", handleDelegatedChange);

    window.addEventListener("keydown", event => {
      if (event.key !== "Escape") return;
      document.querySelectorAll(".modal.is-open").forEach(modal => closeModal(modal.id));
      closeAdminDrawer();
    });
  }

  function handleDelegatedClick(event) {
    const closeButton = event.target.closest("[data-close-modal]");
    if (closeButton) {
      closeModal(closeButton.dataset.closeModal);
      return;
    }

    const languageButton = event.target.closest("[data-language]");
    if (languageButton) {
      state.language = languageButton.dataset.language;
      saveState();
      recalculateAndRender();
      return;
    }

    const nationButton = event.target.closest("[data-toggle-nation]");
    if (nationButton) {
      ui.openNation = ui.openNation === nationButton.dataset.toggleNation ? null : nationButton.dataset.toggleNation;
      renderNationCards();
      return;
    }

    const provinceButton = event.target.closest("[data-open-province]");
    if (provinceButton) {
      openProvinceModal(provinceButton.dataset.openProvince);
      return;
    }

    const parliamentTab = event.target.closest("[data-parliament-tab]");
    if (parliamentTab) {
      ui.activeParliamentNation = parliamentTab.dataset.parliamentTab;
      renderParliament();
      return;
    }

    const levelButton = event.target.closest(
      "[data-congress-level],[data-territorial-level],[data-province-level],[data-province-metric],[data-parliament-level],[data-senate-level]"
    );
    if (levelButton) {
      const groupAttributes = [
        ["congressLevel", "congress-level"],
        ["territorialLevel", "territorial-level"],
        ["provinceLevel", "province-level"],
        ["provinceMetric", "province-metric"],
        ["parliamentLevel", "parliament-level"],
        ["senateLevel", "senate-level"]
      ];
      const match = groupAttributes.find(([, attr]) => levelButton.dataset[toCamel(attr)] !== undefined);
      if (match) {
        const [uiKey, attr] = match;
        const datasetKey = toCamel(attr);
        ui[uiKey] = levelButton.dataset[datasetKey];
        document.querySelectorAll(`[data-${attr}]`).forEach(button =>
          button.classList.toggle("is-active", button === levelButton)
        );
        if (uiKey === "congressLevel") renderCongress();
        if (uiKey === "territorialLevel") renderTerritorialTable();
        if (uiKey === "provinceLevel" || uiKey === "provinceMetric") {
          renderProvinceFilters();
          renderProvinceTable();
        }
        if (uiKey === "parliamentLevel") renderParliamentDetail();
        if (uiKey === "senateLevel") renderSenate();
      }
      return;
    }

    const coalition = event.target.closest("[data-coalition-list]");
    if (coalition) {
      const set = ui.coalitionSelections[coalition.dataset.coalitionNation];
      coalition.checked ? set.add(coalition.dataset.coalitionList) : set.delete(coalition.dataset.coalitionList);
      renderParliamentDetail();
      return;
    }

    const downloadSettingsButton = event.target.closest("[data-download-settings]");
    if (downloadSettingsButton) {
      downloadCurrentSettings();
      return;
    }

    const applySettingsButton = event.target.closest("[data-apply-settings]");
    if (applySettingsButton) {
      const text = byId("settingsImportText")?.value || "";
      importSettingsText(text);
      return;
    }

    const adminTab = event.target.closest("[data-admin-tab]");
    if (adminTab) {
      ui.adminTab = adminTab.dataset.adminTab;
      document.querySelectorAll(".admin-tab").forEach(button =>
        button.classList.toggle("is-active", button === adminTab)
      );
      renderAdminContent();
      return;
    }

    const addMember = event.target.closest("[data-add-member]");
    if (addMember) {
      const list = findList(addMember.dataset.addMember);
      if (!list) return;
      const form = byId("addMemberForm");
      form.reset();
      form.elements.listId.value = list.id;
      form.elements.color.value = lightenHex(list.colour, 0.18);
      form.elements.weight.value = 10;
      byId("addMemberModalTitle").textContent = `${t("addMemberParty")} · ${list.shortName}`;
      openModal("addMemberModal");
      return;
    }

    const deleteList = event.target.closest("[data-delete-list]");
    if (deleteList) {
      removeList(deleteList.dataset.deleteList);
      return;
    }

    const deleteMember = event.target.closest("[data-delete-member]");
    if (deleteMember) {
      removeMember(deleteMember.dataset.listId, deleteMember.dataset.deleteMember);
      return;
    }

    const resetButton = event.target.closest("[data-admin-reset]");
    if (resetButton) {
      resetAdminValue(resetButton);
      return;
    }

    const copyWeights = event.target.closest("[data-copy-weights]");
    if (copyWeights) {
      const list = findList(copyWeights.dataset.copyWeights);
      if (!list) return;
      list.members.forEach(member => {
        member.manualIberiaShare = member.eligibleIberia ? Math.max(0, member.weight) : 0;
      });
      adminChanged({ rerenderAdmin: true });
    }
  }

  function handleDelegatedInput(event) {
    const listVote = event.target.closest("[data-list-vote]");
    if (listVote) {
      const list = findList(listVote.dataset.listVote);
      if (!list) return;
      list.vote = clamp(numberOr(listVote.value, 0), 0, 100);
      refreshPublic({ skipInputs: true });
      return;
    }

    const adminAction = event.target.closest("[data-admin-action]");
    if (adminAction && !["checkbox", "radio"].includes(adminAction.type) && adminAction.tagName !== "SELECT") {
      applyAdminAction(adminAction);
    }
  }

  function handleDelegatedChange(event) {
    if (event.target.id === "settingsFileInput") {
      const file = event.target.files?.[0];
      if (!file) return;
      file.text().then(text => {
        const textarea = byId("settingsImportText");
        if (textarea) textarea.value = text;
      }).catch(() => toast(t("invalidSettings"), "danger"));
      return;
    }

    const adminSelect = event.target.closest("[data-admin-select]");
    if (adminSelect) {
      applyAdminSelection(adminSelect);
      return;
    }

    const adminAction = event.target.closest("[data-admin-action]");
    if (adminAction && (["checkbox", "radio"].includes(adminAction.type) || adminAction.tagName === "SELECT")) {
      applyAdminAction(adminAction);
    }
  }

  function applyAdminSelection(element) {
    const type = element.dataset.adminSelect;
    if (type === "admin-list") {
      ui.adminListId = element.value;
      const list = findList(ui.adminListId);
      ui.adminMemberId = list?.members[0]?.id || null;
    }
    if (type === "admin-member") ui.adminMemberId = element.value;
    if (type === "admin-province") ui.adminProvince = element.value;
    if (type === "adjustment-scope") ui.adjustmentScope = element.value;
    if (type === "adjustment-list") {
      ui.adjustmentListId = element.value;
      ui.adjustmentMemberId = findList(element.value)?.members[0]?.id || null;
    }
    if (type === "adjustment-member") ui.adjustmentMemberId = element.value;
    renderAdminContent();
  }

  function applyAdminAction(element) {
    const action = element.dataset.adminAction;
    const list = findList(element.dataset.listId);
    const member = list?.members.find(item => item.id === element.dataset.memberId);
    const value = element.type === "checkbox"
      ? element.checked
      : element.tagName === "SELECT" || element.type === "radio"
        ? element.value
        : element.value;

    if (action === "list-name") list.name = value.trim() || list.name;
    if (action === "list-short") list.shortName = value.trim() || list.shortName;
    if (action === "list-colour") list.colour = value;
    if (action === "list-vote") list.vote = clamp(numberOr(value, 0), 0, 100);

    if (action === "member-name") member.name = value.trim() || member.name;
    if (action === "member-short") member.shortName = value.trim() || member.shortName;
    if (action === "member-colour") member.colour = value;
    if (action === "member-weight") member.weight = Math.max(0.01, numberOr(value, 0.01));

    if (action === "list-presence") {
      const nationId = element.dataset.nation;
      const proposed = { ...list.presentIn, [nationId]: Boolean(value) };
      if (!Object.values(proposed).some(Boolean)) {
        element.checked = true;
        toast(t("listMustContest"), "danger");
        return;
      }
      if (!value) {
        const anotherActiveList = state.lists.some(other =>
          other.id !== list.id && other.presentIn[nationId] && other.members.some(item => item.presentIn[nationId])
        );
        if (!anotherActiveList) {
          element.checked = true;
          toast(t("wrongPresence"), "danger");
          return;
        }
      }
      list.presentIn = proposed;
      if (value && !list.members.some(item => item.presentIn[nationId])) {
        list.members[0].presentIn[nationId] = true;
      }
    }

    if (action === "member-presence") {
      const nationId = element.dataset.nation;
      const proposed = { ...member.presentIn, [nationId]: Boolean(value) };
      if (!Object.values(proposed).some(Boolean)) {
        element.checked = true;
        toast(t("memberMustContest"), "danger");
        return;
      }
      if (!value) {
        const anotherMemberInList = list.members.some(item => item.id !== member.id && item.presentIn[nationId]);
        const anotherActiveList = state.lists.some(other =>
          other.id !== list.id && other.presentIn[nationId] && other.members.some(item => item.presentIn[nationId])
        );
        if (!anotherMemberInList && list.presentIn[nationId] && !anotherActiveList) {
          element.checked = true;
          toast(t("wrongPresence"), "danger");
          return;
        }
      }
      member.presentIn = proposed;
      if (value) list.presentIn[nationId] = true;
      if (!value && !list.members.some(item => item.presentIn[nationId])) {
        list.presentIn[nationId] = false;
      }
    }

    if (action === "member-eligible") {
      const proposed = Boolean(value);
      if (!proposed && list.members.filter(item => item.eligibleIberia && item.id !== member.id).length === 0) {
        element.checked = true;
        return;
      }
      member.eligibleIberia = proposed;
    }

    if (action === "list-lambda") state.listLambda = clamp(numberOr(value, 0), 0, 2);
    if (action === "member-lambda") state.memberLambda = clamp(numberOr(value, 0), 0, 2);
    if (action === "list-nation-affinity") {
  list.nationAffinity[element.dataset.key] =
    clamp(numberOr(value, 1), 0.01, 200);
}
    if (action === "list-factor-affinity") list.factorAffinity[element.dataset.key] = clamp(numberOr(value, 0), -1, 1);
    if (action === "member-nation-affinity") {
  member.nationAffinity[element.dataset.key] =
    clamp(numberOr(value, 1), 0.01, 200);
}
    if (action === "member-factor-affinity") member.factorAffinity[element.dataset.key] = clamp(numberOr(value, 0), -1, 1);
    if (action === "province-turnout") state.provinceSettings[element.dataset.province].turnout = clamp(numberOr(value, 1), 0.1, 3);
    if (action === "province-trait") state.provinceSettings[element.dataset.province].traits[element.dataset.key] = clamp(numberOr(value, 0), -2, 2);
    if (action === "split-mode") list.iberiaSplitMode = value;
    if (action === "manual-iberia-share") member.manualIberiaShare = Math.max(0, numberOr(value, 0));
    if (action === "list-direct") list.directModifiers[element.dataset.province] = clamp(numberOr(value, 1), 0.1, 3);
    if (action === "member-direct") member.directModifiers[element.dataset.province] = clamp(numberOr(value, 1), 0.1, 3);
    if (action === "institutional-senator") {
      state.institutionalSenators[element.dataset.nation][Number(element.dataset.slot)] = value || null;
    }

    const pairId = element.dataset.controlPair;
    if (pairId) {
      document.querySelectorAll(`[data-control-pair="${cssEscape(pairId)}"]`).forEach(paired => {
        if (paired !== element) paired.value = element.value;
      });
    }

    const rerenderAdmin = ["list-presence", "member-presence", "member-eligible", "split-mode", "institutional-senator"].includes(action);
    adminChanged({ rerenderAdmin });
  }

  function resetAdminValue(button) {
    const action = button.dataset.adminReset;
    const list = findList(button.dataset.listId);
    const member = list?.members.find(item => item.id === button.dataset.memberId);
    const reset = numberOr(button.dataset.resetValue, 0);

    if (action === "list-lambda") state.listLambda = reset;
    if (action === "member-lambda") state.memberLambda = reset;
    if (action === "list-nation-affinity") list.nationAffinity[button.dataset.key] = reset;
    if (action === "list-factor-affinity") list.factorAffinity[button.dataset.key] = reset;
    if (action === "member-weight") member.weight = reset;
    if (action === "member-nation-affinity") member.nationAffinity[button.dataset.key] = reset;
    if (action === "member-factor-affinity") member.factorAffinity[button.dataset.key] = reset;
    if (action === "province-turnout") state.provinceSettings[button.dataset.province].turnout = reset;
    if (action === "province-trait") state.provinceSettings[button.dataset.province].traits[button.dataset.key] = reset;
    if (action === "list-direct") list.directModifiers[button.dataset.province] = reset;
    if (action === "member-direct") member.directModifiers[button.dataset.province] = reset;
    adminChanged({ rerenderAdmin: true });
  }

  function adminChanged({ rerenderAdmin = false } = {}) {
    adminDirty += 1;
    refreshPublic();
    updateAdminChangeCount();
    if (rerenderAdmin) renderAdminContent();
  }

  function refreshPublic({ skipInputs = false } = {}) {
    ensureStateShape();
    calculation = calculateElection();
    applyLanguage();
    if (!skipInputs) renderListInputs();
    renderTotal();
    renderCongress();
    renderNationCards();
    renderTerritorialTable();
    renderProvinceFilters();
    renderProvinceTable();
    renderParliament();
    renderSenate();
    renderInstitutionalSenators();
  }

  function handleAddList(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const shortName = String(form.get("shortName") || "").trim().toUpperCase();
    if (!name || !shortName) return;
    const colour = String(form.get("color") || "#28536B");
    const list = createList({
      name, shortName, colour,
      vote: clamp(numberOr(form.get("vote"), 0), 0, 100),
      members: [createMember({ name, shortName, colour, weight: 100, manualIberiaShare: 100 })]
    });
    state.lists.push(list);
    event.currentTarget.reset();
    event.currentTarget.elements.color.value = "#28536B";
    closeModal("addListModal");
    recalculateAndRender();
    toast(`${shortName} ${t("added")}.`, "success");
  }

  function handleAddMember(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const list = findList(form.get("listId"));
    if (!list) return;
    const name = String(form.get("name") || "").trim();
    const shortName = String(form.get("shortName") || "").trim();
    if (!name || !shortName) return;
    const member = createMember({
      name, shortName,
      colour: String(form.get("color") || list.colour),
      weight: Math.max(0.01, numberOr(form.get("weight"), 10)),
      manualIberiaShare: Math.max(0.01, numberOr(form.get("weight"), 10)),
      presentIn: { ...list.presentIn }
    });
    list.members.push(member);
    ui.adminListId = list.id;
    ui.adminMemberId = member.id;
    event.currentTarget.reset();
    closeModal("addMemberModal");
    adminDirty += 1;
    recalculateAndRender();
    renderAdminContent();
    toast(`${shortName} ${t("added")}.`, "success");
  }

  function removeList(listId) {
    if (state.lists.length <= 2) {
      toast(t("atLeastTwoLists"), "danger");
      return;
    }
    const list = findList(listId);
    if (!list || !window.confirm(t("confirmDeleteList"))) return;
    const memberIds = new Set(list.members.map(member => member.id));
    state.lists = state.lists.filter(item => item.id !== listId);
    NATIONS.forEach(nation => {
      state.institutionalSenators[nation.id] = state.institutionalSenators[nation.id]
        .map(id => memberIds.has(id) ? null : id);
      ui.coalitionSelections[nation.id].delete(listId);
    });
    ensureStateShape();
    adminDirty += 1;
    recalculateAndRender();
    renderAdminContent();
    toast(`${list.shortName} ${t("deleted")}.`, "success");
  }

  function removeMember(listId, memberId) {
    const list = findList(listId);
    if (!list) return;
    if (list.members.length <= 1) {
      toast(t("atLeastOneMember"), "danger");
      return;
    }
    const member = list.members.find(item => item.id === memberId);
    if (!member || !window.confirm(t("confirmDeleteMember"))) return;
    list.members = list.members.filter(item => item.id !== memberId);
    NATIONS.forEach(nation => {
      state.institutionalSenators[nation.id] = state.institutionalSenators[nation.id]
        .map(id => id === memberId ? null : id);
      if (list.presentIn[nation.id] && !list.members.some(item => item.presentIn[nation.id])) {
        list.members[0].presentIn[nation.id] = true;
      }
    });
    ensureStateShape();
    adminDirty += 1;
    recalculateAndRender();
    renderAdminContent();
    toast(`${member.shortName} ${t("deleted")}.`, "success");
  }

  function normaliseVotes() {
    const total = sum(state.lists.map(list => Math.max(0, list.vote)));
    if (total <= 0) {
      toast(t("emptyNormalise"), "danger");
      return;
    }
    state.lists.forEach(list => {
      list.vote = Math.max(0, list.vote) / total * 100;
    });
    recalculateAndRender();
    toast(t("normalisedDone"), "success");
  }

  function openAdminDrawer() {
    adminSnapshot = structuredClone(state);
    adminDirty = 0;
    byId("adminDrawer").classList.add("is-open");
    byId("adminDrawer").setAttribute("aria-hidden", "false");
    byId("adminOverlay").hidden = false;
    renderAdminContent();
    updateAdminChangeCount();
  }

  function closeAdminDrawer() {
    byId("adminDrawer").classList.remove("is-open");
    byId("adminDrawer").setAttribute("aria-hidden", "true");
    byId("adminOverlay").hidden = true;
  }

  function updateAdminChangeCount() {
    const key = adminDirty === 1 ? "unsavedChange" : "unsavedChanges";
    const element = byId("adminChangeCount");
    if (element) element.textContent = `${adminDirty} ${t(key)}`;
  }

  function openModal(id) {
    const modal = byId(id);
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal(id) {
    const modal = byId(id);
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".modal.is-open")) document.body.style.overflow = "";
  }


async function loadGlobalState() {
  try {
    const { data, error } = await supabaseClient
      .from("simulator_config")
      .select("data")
      .eq("id", SUPABASE_CONFIG_ID)
      .maybeSingle();

    if (error) {
      console.warn("Could not load Supabase config:", error);
      return;
    }

    if (data?.data) {
      state = data.data;
      localStorage.setItem(STORAGE_KEY_V2, JSON.stringify(state));
      return;
    }

    await saveGlobalState();
  } catch (error) {
    console.warn("Supabase load failed:", error);
  }
}

async function saveGlobalState() {
  try {
    const { error } = await supabaseClient
      .from("simulator_config")
      .upsert({
        id: SUPABASE_CONFIG_ID,
        data: state,
        updated_at: new Date().toISOString()
      });

    if (error) {
      console.warn("Could not save Supabase config:", error);
    }
  } catch (error) {
    console.warn("Supabase save failed:", error);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY_V2, JSON.stringify(state));
    saveGlobalState();
  } catch (error) {
    console.warn("Could not save state.", error);
  }
}

  function resetUi() {
    ui.congressLevel = "lists";
    ui.territorialLevel = "lists";
    ui.provinceLevel = "lists";
    ui.provinceMetric = "percent";
    ui.provinceNationFilter = "all";
    ui.provinceListFilter = "all";
    ui.provinceSearch = "";
    ui.parliamentLevel = "lists";
    ui.activeParliamentNation = "Portugal";
    ui.senateLevel = "lists";
    ui.openNation = null;
    ui.adminTab = "structure";
    ui.adminListId = state.lists[0]?.id || null;
    ui.adminMemberId = state.lists[0]?.members[0]?.id || null;
    ui.adjustmentScope = "list";
    ui.adjustmentListId = state.lists[0]?.id || null;
    ui.adjustmentMemberId = state.lists[0]?.members[0]?.id || null;
    ui.coalitionSelections = Object.fromEntries(NATIONS.map(n => [n.id, new Set()]));
  }

  function listOptions(selectedId) {
    return state.lists.map(list =>
      `<option value="${list.id}" ${list.id === selectedId ? "selected" : ""}>${escapeHtml(list.shortName)} · ${escapeHtml(list.name)}</option>`
    ).join("");
  }

  function memberOptions(list, selectedId) {
    return list.members.map(member =>
      `<option value="${member.id}" ${member.id === selectedId ? "selected" : ""}>${escapeHtml(member.shortName)} · ${escapeHtml(member.name)}</option>`
    ).join("");
  }

  function flatMembers() {
    return state.lists.flatMap((list, listIndex) =>
      list.members.map((member, memberIndex) => ({ list, member, listIndex, memberIndex }))
    );
  }

  function findList(id) {
    return state.lists.find(list => list.id === id) || null;
  }

  function findMember(id) {
    return flatMembers().find(row => row.member.id === id) || null;
  }

  function entityCell(entity) {
    if (!entity) return "—";
    return `<span class="entity-cell"><span class="party-dot" style="background:${escapeHtml(entity.colour)}"></span><span>${escapeHtml(entity.shortName)}</span></span>`;
  }

  function memberCell(member, list) {
    if (!member) return "—";
    return `<span class="entity-cell entity-cell--member"><span class="party-dot" style="background:${escapeHtml(member.colour)}"></span><span>${escapeHtml(member.shortName)} <small class="entity-cell__sub">(${escapeHtml(list.shortName)})</small></span></span>`;
  }

  function t(key) {
    return TRANSLATIONS[state.language]?.[key] ?? TRANSLATIONS.en[key] ?? key;
  }

  function formatPercent(value, decimals = 2) {
    return new Intl.NumberFormat(state.language === "es" ? "es-ES" : "en-GB", {
      style: "percent",
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(Number(value || 0));
  }

  function formatInteger(value) {
    return new Intl.NumberFormat(state.language === "es" ? "es-ES" : "en-GB", {
      maximumFractionDigits: 0
    }).format(Number(value || 0));
  }

  function formatNumber(value, decimals = 2) {
    return new Intl.NumberFormat(state.language === "es" ? "es-ES" : "en-GB", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(Number(value || 0));
  }

  function roundForInput(value, decimals = 4) {
    const factor = 10 ** decimals;
    return Math.round(numberOr(value, 0) * factor) / factor;
  }

  function numberOr(value, fallback = 0) {
    const number = Number(value);
    return Number.isFinite(number) ? number : fallback;
  }

  function positiveOr(value, fallback = 1) {
    const number = numberOr(value, fallback);
    return number > 0 ? number : fallback;
  }

  function clamp(value, minimum, maximum) {
    return Math.min(maximum, Math.max(minimum, numberOr(value, minimum)));
  }

  function sum(values) {
    return values.reduce((total, value) => total + Number(value || 0), 0);
  }

  function maxIndex(values) {
    if (!values.length) return -1;
    return values.reduce((best, value, index, array) => value > array[best] ? index : best, 0);
  }

  function uid(prefix) {
    return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  }

  function lightenHex(hex, amount = 0.15) {
    const clean = String(hex).replace("#", "");
    if (!/^[0-9a-fA-F]{6}$/.test(clean)) return "#5A7A8C";
    const values = [0, 2, 4].map(index => parseInt(clean.slice(index, index + 2), 16));
    const adjusted = values.map(value => Math.round(value + (255 - value) * amount));
    return `#${adjusted.map(value => value.toString(16).padStart(2, "0")).join("")}`;
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function cssEscape(value) {
    return window.CSS?.escape ? window.CSS.escape(value) : String(value).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
  }

  function toCamel(value) {
    return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  }

  function toast(message, type = "default") {
    const element = document.createElement("div");
    element.className = `toast ${type !== "default" ? `toast--${type}` : ""}`;
    element.textContent = message;
    byId("toastContainer").appendChild(element);
    setTimeout(() => element.remove(), 3300);
  }

  function byId(id) {
    return document.getElementById(id);
  }

  ensureStateShape();
  document.addEventListener("DOMContentLoaded", init);
})();
