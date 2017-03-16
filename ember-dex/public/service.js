var cache_name='10';self.addEventListener('install',function(event){var files_to_cache=['/','app.html','app.css','app.js','team.html','team.css','font-awesome.ttf','optimus-princeps.ttf','nathan-mcmillan-photo.jpg','default-profile.jpg','eygon-of-carim.jpg','horace-the-hushed.jpg','sir-vilhelm.jpg','solaire-of-astora.jpg','lonesome-galvan.jpg','knight-lautrec.jpg','fire-keeper.jpg','blacksmith-andre.jpg','giant-blacksmith.jpg','sif-the-great-grey-wolf.jpg','crestfallen-saulden.jpg','emerald-herald.jpg','siegward-of-catarina.jpg','bell-keeper.jpg','ingward.jpg','paladin-leeroy.jpg','yoel-of-londor.jpg','ludleth-of-courland.jpg','karla.jpg','holy-knight-hodrick.jpg','velka-the-goddess-of-sin.jpg',];event.waitUntil(caches.open(cache_name).then(function(cache){console.log(cache_name+' install: opened cache');return cache.addAll(files_to_cache);}).then(function(){return self.skipWaiting();}));});self.addEventListener('activate',function(event){console.log(cache_name+' activate');event.waitUntil(caches.keys().then(function(keyList){return Promise.all(keyList.map(function(key){if(key!==cache_name){console.log(cache_name+' removing old cache',key);return caches.delete(key);}}));}));return self.clients.claim();});self.addEventListener('fetch',function(event){event.respondWith(caches.match(event.request).then(function(response){return response||fetch(event.request);}.bind(this)).catch(function(error){console.log(error);}));});