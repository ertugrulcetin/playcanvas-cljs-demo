
shadow.cljs.devtools.client.env.module_loaded('app');

try { thirdperson.entity.init(); } catch (e) { console.error("An error occurred when calling (thirdperson.entity/init)"); throw(e); }