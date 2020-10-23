"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.MongoController = void 0;
var mongoose = require("mongoose");
var common_1 = require("../common");
var faker = require("faker");
var dotenv = require("dotenv");
var allhashtags = ["video", "https", "http", "cars", "this", "poodle", "pitbull", "subscribe", "ferrari", "official", "with", "instagram", "youtube", "dogs", "more", "from", "videos", "here", "like", "about", "music", "please", "watch", "album", "listen", "find", "funny", "play", "will", "download", "smarturl", "sobre", "thanks", "watching", "channel", "kids", "life", "that", "truck", "your", "right", "vlad", "itunes", "mcqueen", "spotify", "toys", "2020", "baby", "challenge", "click", "feat", "follow", "have", "race", "series", "stream", "check", "comment", "cute", "make", "most", "share", "best", "drive", "iqid", "price", "racing", "ride", "some", "their", "they", "time", "carwow", "engine", "facebook", "globalization", "laugh", "lightning", "miniature", "mods", "next", "nikita", "spiderman", "standard", "surprise", "tudo", "vehicles", "amazing", "bitly", "children", "compilation", "exterior", "featured", "first", "friends", "help", "interior", "latest", "love", "pets", "poodles", "review", "thank", "welcome", "wheels", "when", "2019", "babies", "before", "crazy", "dale", "everything", "french", "know", "laferrari", "para", "pbspot", "playing", "produced", "shop", "spider", "sports", "take", "these", "track", "very", "vídeo", "youtu", "animals", "audio", "awesome", "caniche", "cheap", "chris", "como", "competition", "contact", "dealer", "driving", "edge", "enjoy", "fastest", "fire", "floyd", "friend", "gmail", "head", "home", "hulk", "link", "little", "lookout", "made", "media", "nane", "other", "parents", "pink", "police", "popular", "puppies", "ready", "show", "songs", "sound", "speed", "super", "superheroes", "takes", "them", "there", "things", "viralbe", "wild", "2008", "2011", "2012", "2021", "actually", "adalah", "also", "animal", "back", "bar0na", "behind", "bids", "bought", "breed", "canal", "carsandbids", "cats", "collection", "color", "concept", "control", "crazycars", "cuidar", "culo", "cutest", "dalam", "diana", "disney", "down", "drag", "ever", "fail", "fate", "favorite", "filmed", "fireball", "francesco", "full", "funniest", "furious", "gameplay", "gigante", "heroes", "hybrid", "ideal", "instrumental", "international", "join", "kênh", "kính", "lamborghini", "learn", "letrons", "lewis", "lyrics", "mahone", "master", "monster", "month", "mr305", "myself", "namaste", "odin", "over", "owner", "owning", "perros", "pibull_youtube", "pista", "pixar", "planet", "playlist", "plus", "power", "pretend", "primo", "racecars", "races", "raza", "raça", "release", "saber", "season", "small", "supposed", "test", "tracks", "tribute", "version", "visit", "você", "wash", "week", "where", "woman", "world", "worldwide", "yêu", "đăng", "2009", "2017", "2022", "2gxwsyq", "320i", "34carcrash", "abrar", "amazon", "ambulance", "anipetshop", "anjing", "anuelaa", "apple", "aqui", "assetto", "assettocorsa", "attack", "austin", "auto", "available", "away", "baddest", "baran", "batman", "beat", "bebe", "because", "behaviors", "below", "bernoulli", "better", "between", "black", "blake", "bmws", "booking", "bravecto", "breeds", "brown", "bugün", "bull", "cachorro", "cachorros", "características", "catalin", "change", "chesca", "climate", "complete", "completo", "confira", "conheça", "consejos", "cool", "corsa", "coupe", "crashes", "creature", "crufts", "daily", "deals", "design", "dhurata", "different", "discord", "discover", "donate", "dondejong", "dont", "eleanor", "email", "episode", "esse", "esta", "every", "excavator", "expect", "expectations", "expensive", "experience", "explain", "featuring", "filled", "gangstergangmusic", "gear", "georiot", "german", "giant", "girl", "giới", "gliša", "good", "google", "greenlight", "guru", "gustado", "guys", "hands", "harga", "harris", "hello", "heritage", "hey", "high", "himself", "hope", "horse", "house", "huge", "imagine", "impressions", "includes", "incredible", "into", "iron", "italian", "için", "j1m3", "james", "jetzt", "john", "judging", "kadir", "king", "known", "kumar", "köpek", "leading", "list", "listenyd", "live", "location", "looking", "lunchmoney", "luxury", "magic", "mais", "majkati", "mala", "marley", "matters", "meet", "model", "moment", "much", "mueve", "mình", "nayer", "need", "nesse", "người", "niki", "nursery", "officially", "oficial", "one", "opening", "options", "orcd", "orchard", "parking", "parkour", "paying", "payner", "pensamos", "people", "performance", "perro", "pitbulls", "pitbullyoutube", "previous", "puppy", "purchase", "purplerainrecords", "quiero", "qzhcrc", "ramon", "ramp", "randhawa", "real", "reasons", "records", "rhymes", "rida", "road", "roma", "rotaru", "ryan", "scenes", "semana", "seri", "shelton", "should", "side", "simulator", "single", "slowly", "snow", "spanish", "specifications", "stephen", "still", "store", "street", "sub_confirmation", "such", "supercars", "superfast", "suscríbete", "szemétből", "taken", "tamaño", "team", "technology", "tekin", "than", "themselves", "thoughts", "three", "through", "tienda", "todos", "tonic", "took", "town", "transform", "tributo", "trucks", "twitter", "type", "unboxing", "untuk", "updates", "user", "venta", "vision", "want", "well", "what", "wolfoo", "would", "xdrive", "yang", "years", "yeni", "zuko", "®", "автомобиль", "ราคา", "ไมล์", "0533", "0723", "0ywwd", "1000bhp", "100km", "100plus", "116273", "1200", "1299900", "1967", "1997", "20000", "2018", "2110", "228s", "22kkvqq", "29rjpt4", "29vqkgc", "29zfeyz", "2gxxgfu", "2kmk", "2qqqhym", "2tgaeyw", "2wxo4nk", "2zq0du5", "31kr", "320d", "330i", "335i", "3444", "3kag4x5", "42281", "599000", "62811", "6281211459958", "629000", "6496", "679900", "6sskbylpwr0", "720s", "75000", "850i", "919900", "aar0nrlewis", "aaron", "able", "abone", "abonneer", "abonneerdon", "abonneren", "acclaimed", "acompanha", "acompañes", "adamc", "adblocker", "además", "adestramento", "adestrar", "adopting", "adorable", "adventures", "afixados", "africa", "african", "afrojack", "after", "afterglow", "aggressive", "agradece", "aguilera", "ahead", "ahogy", "ailemize", "aithay", "alaatin61", "alade", "alakalı", "alan", "alebo", "alice", "alkatrészek", "allspeeddrive", "allurbancentral", "almanya", "already", "amateur", "america", "amigos", "amritsar", "amzn", "anak", "android", "animalshealthcare", "anlatıyor", "another", "ansiklopedisi", "anthem", "anthony", "antimon", "anuel", "anymore", "anyone", "apart", "aperta", "apoiar", "applemusic", "apps", "aprenda", "april", "aquí", "arkadaşlar", "arriba", "arthur", "artwork", "asking", "assistant", "assistindo", "ataque", "ataupun", "atenção", "ateşi", "ateşin", "atlantic", "atrás", "attacked", "audi", "auta", "autasuper", "authority", "autobahn", "automobile", "autovisie", "aventura", "babybus", "babysitting", "bakımı", "balls", "balvin", "bambino", "band", "banget", "barbie", "based", "beach", "beamng", "beats", "beatz", "beautiful", "beberexha", "becky", "become", "bekas", "belgian", "bell", "benzín", "beraberiz", "berbanding", "bespoke", "bgit", "bgitspotify", "bhushan", "bibo", "bigtruck", "bilgiler", "billo", "binnen", "biting", "bitten", "biết", "biệt", "blindfold", "blood", "blue", "bmw", "bmwid", "bonitaet", "bonität", "bontóból", "boost", "born", "bossy", "bossykennels", "both", "boys", "brand", "bring", "brings", "brody", "broke", "brooklynscorner", "brother", "brushing", "buena", "built", "bukan", "bust", "buy", "buyers", "buying", "bình", "bölüm", "bölümün", "c6inai2ztso", "cabello", "cabrio", "cafe", "cake", "camera", "camila", "camodo", "campaña", "campeonato", "camper", "camping", "canadian", "canil", "capital", "captain", "carly", "carrace", "carreras", "carried", "carrion", "cartoon", "carácter", "caught", "celebrate", "celebrates", "certain", "certified", "cesar", "chacal", "chance", "changers", "chapaxi", "charles", "charlotte", "chatpat", "cheapest", "chennai", "chick", "chloe", "choose", "christina", "christmas", "chuộng", "chào", "cins", "cintura", "city", "ciudad", "cleanup", "clip", "clips", "clique", "clocked", "clothing", "cnbbtisdkmq", "coat", "cocodrilos", "cold", "coleccionistas", "collected", "colored", "colour", "come", "comenta", "comentários", "comercial", "comes", "comments", "community", "comoyoledoy", "compartió", "compete", "competed", "comportamento", "composed", "común", "concerte", "concrete", "condition", "confront", "conhecem", "connect", "consider", "construction", "contenido", "content", "contents", "continuar", "convierte", "convinced", "convoy", "copymafia", "copyright", "cosas", "costs", "countdown", "counting", "course", "cranes", "crash", "create", "created", "creating", "credits", "crime", "critically", "cruftssub", "crunchy", "crunk", "crusoe", "cruz", "csinálunk", "cuddling", "cuenta", "cuento", "cukup", "curbler", "curled", "curso", "cuteness", "càng", "cães", "cómo", "cũng", "cảnh", "dachshunds", "daddy", "dance", "dares", "dari", "david", "davranış", "days", "daytona", "deadpool", "dear", "death", "deberías", "decide", "decides", "decido", "deezer", "dejo", "delhi", "delivers", "demanding", "denk", "dentro", "depends", "depth", "description", "descubra", "desde", "designed", "despierto", "dessa", "detailed", "details", "detalló", "diary", "dias", "dicc", "didnt", "diecast", "diesel", "diferente", "diferentes", "diferenças", "differences", "diketahui", "dios", "dipasarkan", "directed", "director", "direção", "dirigido", "discovery", "discuss", "disguised", "displacement", "disponibles", "disturbing", "diva", "diário", "dknceansjx0", "dlive", "dobre", "dobré", "does", "dogfood", "dogfoodmedia", "doing", "domesticated", "don", "donation", "dong", "donker", "donkermag_amz", "donkermag_it", "doors", "dora", "dose", "downloaden", "drawn", "drift", "driftautót", "drove", "duki", "dukissj", "dump", "días", "dưới", "each", "ears", "easter", "eating", "echa", "edit", "edition", "edição", "effyzzie", "eggs", "either", "eldad", "electric", "elefantes", "elegance", "elegancia", "eles", "elityavru", "ellos", "eléctrico", "előtúrt", "emmanuel", "empreendedor", "enano", "encounter", "ended", "enfermo", "english", "enter", "entertainment", "enthusiastic", "entre", "envio", "environment", "enzo", "epic", "episódio", "escaping", "escúchalo", "esqueça", "essa", "essential", "estamos", "estatura", "estilo", "estos", "etsy", "ettiği", "ev1kva6", "even", "events", "everyone", "evolution", "examples", "excelencia", "excellent", "exciting", "exclusive", "executiva", "exercise", "exhaust", "exist", "existen", "exotics", "experiment", "eğlenceli", "f142m", "f70pov", "facts", "fade", "fails", "fair", "fairly", "falando", "familias", "fast", "fastcars", "faux", "fauxsala", "favorita", "features", "feel", "ferraricollector_davidlee", "ferrariroma", "ferraristores", "film", "final", "finland", "flits", "floor", "flylo", "following", "foot", "ford", "forever", "forget", "founder", "free", "freshman", "fun", "fundación", "funnie4st", "further", "furtherupyd", "future", "físicas", "game", "gameplays", "games", "gaming", "gang", "gangster", "ganteng", "garbage", "geldi", "geldiniz", "generated", "get", "getting", "ghetto", "gilberto", "gittikçe", "give", "giving", "giống", "glisa_madafaka", "glisashop", "globalizationsp", "goku", "golden", "gonegrooming", "gracias", "gran", "great", "green", "greytoneasia", "group", "guard", "guest", "guidedogs", "guinobrecomercial", "gulshan", "guneet", "guns", "göre", "gündem", "güzel", "h8vxge", "haberlere", "habis", "habits", "hair", "halo", "hangi", "happen", "happy", "hard", "hardest", "harpreet_sdc", "havlama", "hazırlıklar", "heart", "heartgard", "heerlijk", "hell", "helping", "herb", "heritageracing", "herkese", "heroics", "hicks", "highest", "highly", "hindi", "hipopótamos", "hispanic", "history", "hits", "hobbies", "hogar", "hola", "hollmann", "homevideolicensing", "hopeforpaws", "horizon", "hotmail", "however", "hublot", "hudson", "husky", "hyper", "iamchinoyoutube", "ibqery_i9ku", "iconic", "idiots", "ikgmsehw1ui", "iletişim", "ilgili", "impaired", "impression", "impressive", "inanılmaz", "include", "inclusive", "incredibly", "incrível", "indonesia", "influential", "info", "information", "informações", "inquiries", "inside", "inspired", "instant", "interesante", "interesting", "intruder", "invest", "invited", "invito", "isetta", "island", "itunespitbull", "izle", "jack", "jackson", "jail", "jayder", "jayderpro", "jennifer", "jesús", "jugnu", "jump", "jumping", "k9nd7t", "kami", "kanaal", "kanalima", "kandology", "kang", "karakteriyle", "karşı", "karşınızda", "katy", "katılacak", "kdjvv3ripny", "keep", "keeps", "keilly", "kennels", "kenneth", "kesha", "không", "kick", "kilmer", "kindly", "kini", "kisaran", "kiss", "komik", "konulmaz", "korea", "kullanacağı", "kövesd", "kızı", "ladies", "langs", "lanuovadolcevita", "large", "last", "laura", "lauria", "lauriaweb", "lead", "leader", "leave", "leclerc", "legend", "legendary", "lenier", "leoa", "leslie", "less", "letra", "licensed", "licensing", "liljon", "lilzayosama", "lilzayosamaofficial", "limited", "lineup", "lirycs", "listed", "liter", "lively", "lives", "loader", "locked", "logo", "long", "look", "loopt", "lopez", "lovely", "loves", "lucu", "lumpens", "luận", "lyelxgiydeq", "lượt", "m440i", "m850i", "macho", "mack", "madden", "madhouserecordssubscribe", "mafra", "magazine", "magical", "mail", "makes", "malaysia", "malinois", "mama", "management", "manejams", "manny", "many", "marc", "market", "mascota", "masked", "mate", "mattel", "maxxmotion", "mayor", "mclaren", "meaning", "mediano", "medicines", "medium", "meer", "meeting", "mega", "megmentett", "mejor", "melahirkan", "meltdown", "memang", "membantu", "member", "meme", "men", "mequedarecontigo", "merhaba", "mero", "meus", "mewah", "micha", "mijn", "mild", "minha", "mini", "miniatura", "minicar", "miranda", "misdewiener", "miss", "mixers", "mixes", "mmm", "mmmyeahitunes", "mobil", "modelo", "mohombi", "mondial", "monthly", "months", "mother", "motocycles", "motorla", "motorrad", "motors", "msrp", "muffin", "mugello", "multiplayer", "multiple", "mundo", "munich", "must", "mustang", "mániás", "mîndru", "música", "mừng", "naam", "namun", "nasıl", "natasha", "natti", "nature", "ncs", "nctk", "nearly", "needs", "negative", "neste", "never", "newborn", "news", "nexgard", "ngày", "nhân", "nhóm", "nhưng", "niet", "nissan", "nolotrates", "nonton", "normal", "nossa", "nosso", "notes", "notification", "notorious", "notorious_dicc", "nova", "nuestros", "nuevoalbum", "nyomon", "oakley", "obstacle", "ochapax", "october", "odinstandardpoodle", "offering", "olan", "oldu", "omaze", "only", "opción", "openings", "opens", "origin", "originalmente", "otro", "output", "overall", "owen", "owners", "pack", "page", "pain", "paksoy", "panda", "panther", "pants", "parece", "paris", "park", "part", "party", "pasaran", "paul", "pays", "pbit", "pengalaman", "pennzoil", "pequeña", "perfect", "performing", "perlu", "pero", "perry", "personalidad", "personalidade", "pertama", "petrol", "pftm", "phải", "pick", "picks", "picnic", "piece", "piloti", "piranhas", "piston", "pistonheads", "pitbullmusic", "pitil", "pitss", "pittim", "pl_3z", "places", "planes", "planeta", "plant", "plastic", "plataforma", "platforms", "played", "player", "players", "playhouses", "pleasure", "plucked", "podcast", "podría", "pogz", "populares", "positive", "post", "powerful", "powerfull", "prank", "precio", "precios", "precisa", "premiere", "premium", "presenta", "presents", "preste", "prod", "producción", "producer", "production", "products", "produção", "profession", "programs", "programımıza", "pros", "proses", "protecting", "protection", "provided", "providing", "proxima", "puddle", "puddles", "puglisi", "pumper", "punjabi", "pureplus", "quais", "quando", "quer", "quienes", "racers", "radi", "radiador", "rain", "rakh", "rallying", "rallyworld", "ramirez", "random", "range", "rango", "rate", "razas", "recommendations", "reconhecer", "redes", "reenactment", "regreso", "reis", "released", "releases", "relive", "remember", "remix", "remote", "renowned", "returns", "reune", "reveal", "revealed", "reviews", "reviving", "revolution", "rexha", "riksfb", "ring", "risk", "rm40k", "roadtrip", "robot", "rocamusic", "rocket", "roldeur", "rory", "rotina", "rottweiler", "rounder", "royale", "rural", "rộng", "sabe", "sabias", "sahiplendim", "saiba", "said", "saja", "sala", "sale", "sampai", "sand", "saske", "save", "scary", "schnauzer", "schnell", "scotty", "scratch", "sean", "seat", "sebastian", "sebelumnya", "second", "seconds", "secret", "seken", "selaaam", "send", "senora", "seoul", "serve", "server", "sets", "sevilen", "sevimliliği", "seyirler", "sezonu", "sf90", "shake", "shares", "shark", "sheer", "shepherd", "shimpy", "shirt", "short", "shot", "showdown", "showing", "shown", "siberian", "sigam", "sinónimos", "size", "sized", "sizlere", "skills", "skyscrapers", "slime", "smid", "snot", "socal", "social", "society", "soft", "sold", "song", "soobin", "sophomore", "sorununu", "souls", "soundcloud", "soyu", "special", "spin", "splash", "sponsored", "sport", "sportcar", "sportscars", "sportsnet", "spoti", "spotifypitbull", "springs", "spycakes", "staan", "start", "static", "staticandbenel", "stay", "sticky", "storm", "story", "stradale", "strangest", "straps", "streamen", "streaming", "streets", "stuck", "studiogale", "stunt", "suave", "subscibe", "subscribesevenhundred", "subscribete", "suda", "sudah", "sudasuda", "sultan", "summer", "sunday", "sure", "surely", "surpreendi", "swimming", "szarból", "sígueme", "sócio", "taazi", "takara", "talents", "talep", "talk", "tamaños", "tankuje", "teach", "teaches", "tease", "technical", "teemill", "teeth", "telah", "tenerla", "tequierobabyid", "tested", "testing", "tham", "the", "then", "thick", "think", "thinks", "thursday", "thích", "tiempo", "tienen", "tienes", "tightly", "timber", "timeless", "times", "tips", "tito", "todas", "today", "todays", "tomoncarpuzzle", "tomy", "topo", "topspeed", "torque", "toto", "tournament", "toycars", "toysreview", "toàn", "tractor", "trae", "training", "transformer", "transported", "transporters", "tras", "trates", "través", "treinar", "trim", "troliass", "trên", "tuned", "turbo", "turn", "turns", "turun", "tvoetoferrari", "twin", "typical", "uc0x8rh155itnrlqoaabnrxq", "uckaiovvojb9tucxorjxc0", "ufscsm", "ultimate", "undermood", "unforgettable", "unfortunate", "unique", "unveiled", "upon", "urbano", "used", "using", "usqgbwlge4e", "utility", "uzmanı", "v8ecca", "varieties", "varios", "vehículo", "veja", "ventas", "verdik", "vergeet", "versi", "versuri", "vertical", "vettel", "vevo", "vevocertified", "viciocurioso", "vida", "videoyla", "village", "violently", "virtua", "vistazo", "visual", "visually", "vlogger", "vocês", "voor", "vorbestellen", "várat", "wait", "walk", "walker", "walks", "wanna", "wanted", "washing", "watson", "wayne", "weather", "weathers", "webshop", "weeks", "westminster", "whether", "which", "while", "whole", "wife", "wilimovich", "wing", "wingo", "wins", "wmrioxnbood6sfktoohlnbvukv", "wolverine", "women", "wonder", "words", "worked", "worthy", "wouldn", "xplore", "yandel", "yankee", "yaptık", "yavru", "yeah", "year", "yemi", "yena", "yepyeni", "yopi", "ytapc", "ytsubscribegbs", "yêulu", "yêumèo", "yıldızı", "zakelijk", "zbytočne", "zbytočné", "zeker", "zero", "ziet", "©", "çıkan", "überall", "được", "ırkı", "ırkının", "ısınıyor", "акции", "бийтс", "благодарность", "бусто", "варить", "видео", "выиграй", "запис", "крутые", "купили", "микс", "музика", "начинаем", "огромная", "оживили", "официален", "помощь", "призы", "прошлой", "рамону", "рублей", "сайт", "сегодня", "серии", "съемке", "текст", "тошо", "тысяч", "участвуя", "ходу", "الدفع", "الرباعي", "بايكور", "سبايدرمان", "وسيارات", "ขายแล้วครับ", "ที่ประเทศเยอรมันครับ", "ผมพาไปขับ", "รถคันนี้เป็นหนึ่งในสุดยอดยานยนต์ที่อัดเอาเทคโนโลยีของ", "รีวิววันนี้", "สุดหรู", "สุดแรง", "ในรุ่น", "☞ﾟ", "♥", "✈", "➡️", "人", "個", "們", "大", "寂", "寞", "我", "概", "每", "都", "강아지처럼", "땅파면십원이나오냐개", "봉구에요", "사랑스러워요", "사월이ㅋㅋ", "아닌가요", "아부지급인", "여유로운", "잔소리가", "절약하라는", "절약하쟈개", "집에서함께애니멀봐", "처음으로", "투모로우바이투게더", "환경에서", "🤣"];
var MongoController = /** @class */ (function () {
    // El constructor se encarga de realizar la conexión a la base de datos (MONGO)
    function MongoController() {
        var _this = this;
        dotenv.config();
        this.log = new common_1.Logger();
        try {
            mongoose.connect(process.env.MONGO_API, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                socketTimeoutMS: 2000
            });
            this.db = mongoose.connection;
            this.db.on('error', function () {
                _this.log.error("No se pudo conectar a mongo");
            });
            this.db.once('open', function () {
                _this.log.info("Conectado a mongo");
            });
        }
        catch (e) {
            this.log.error(e);
        }
    }
    MongoController.prototype.fillArticles = function () {
        var _this = this;
        try {
            var quantity = 100;
            var _loop_1 = function () {
                var aproxHashtags = Math.trunc(Math.random() * 3 + 4) / allhashtags.length;
                var newPost = new common_1.Articles({
                    autor: faker.name.firstName(),
                    titulo: faker.lorem.words(7),
                    subtitulo: faker.lorem.words(3),
                    texto: faker.lorem.paragraphs(2),
                    fecha: faker.date.recent(),
                    data: {
                        images: faker.image.nature(),
                        videos: faker.image.technics()
                    },
                    hashtags: allhashtags.filter(function (element, index, array) {
                        if (Math.random() <= aproxHashtags) {
                            return true;
                        }
                    })
                });
                newPost.save(function (err, post) {
                    if (err) {
                        _this.log.error(err);
                    }
                });
                quantity--;
            };
            while (quantity > 0) {
                _loop_1();
            }
            ;
        }
        catch (e) {
            this.log.error(e);
        }
    };
    MongoController.prototype.getArticlesByHashtags = function (hashtagsArr) {
        return __awaiter(this, void 0, void 0, function () {
            var responseFromMongo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, common_1.Articles.find({ "hashtags": { $in: hashtagsArr } })];
                    case 1:
                        responseFromMongo = _a.sent();
                        // Redis.save(`mongo-${init}-${last}:`, responseFromMongo);
                        return [2 /*return*/, responseFromMongo];
                }
            });
        });
    };
    MongoController.getInstance = function () {
        if (!this.instance) {
            this.instance = new MongoController();
        }
        return this.instance;
    };
    return MongoController;
}());
exports.MongoController = MongoController;
