document.addEventListener('deviceready', onDeviceReady, false);
document.getElementById("btn").addEventListener("click",onPush);
document.getElementById("inbox").addEventListener("click",onInboxCordova);
document.getElementById("native").addEventListener("click",onNativeCordova);
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    CleverTap.setDebugLevel(3);
    CleverTap.registerPush();

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    CleverTap.onUserLogin ({
                'Name': 'Gaurav wwww',
    //          'Identity': '9766609',
                "Phone no.": +91977994121,
                'Email': 'gaurav@cordova.com'
            });
    CleverTap.createNotificationChannel("abtest", "abtest", "Test Channel", 5, true);
    CleverTap.initializeInbox();
}
function onPush(){
    CleverTap.recordEventWithName("Push Event 2");
}
function onInboxCordova()
{
    CleverTap.recordEventWithName("Inbox Event 2");
    CleverTap.showInbox({});
}


function onNativeCordova()
{
    CleverTap.recordEventWithName("Native Event 2");
    CleverTap.getAllDisplayUnits(function(val) {
    document.getElementById("nativemsg").innerHTML =JSON.stringify(val[0].content[0].message.text).replace(/['"]+/g, '');
    document.getElementById("nativetitle").innerHTML =JSON.stringify(val[0].content[0].title.text).replace(/['"]+/g, '');
    console.log("Native Display units are "+JSON.stringify(val[0].content[0].message.text));
    });
}

