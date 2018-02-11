//import { android , ios} from "tns-core-modules/application";
//import { android , ios  } from "tns-core-modules/application";
 
import * as app from "tns-core-modules/application";
import * as platform from "tns-core-modules/platform";
import * as connectivity from "tns-core-modules/connectivity";
import * as permissions from "nativescript-permissions";
/*
permissions.requestPermission(android.Manifest.permission.READ_CONTACTS, "I need these permissions because I'm cool")
 .then(function() {
    console.log("Woo Hoo, I have the power!");
 })
 .catch(function() {
    console.log("Uh oh, no permissions - plan B time!");
 });
 */
export function hasPermission(KEY) {
    permissions.hasPermission(KEY);
}


export function getWifiInfos(callback : Function, failed : Function) {
    let has = this.hasPermission(app.android.context.permissions.ACCESS_NETWORK_STATE);
    alert("getWifiInfos has : "+has);
    if (has)
    callback(this.getWifiInfos_impl());
     //   return this.getWifiInfos_impl();
    else
        permissions.requestPermission(app.android.context.permissions.ACCESS_NETWORK_STATE, "I need these permissions because I'm cool")
            .then(function () {
                alert("Woo Hoo, I have the power!");
                callback(this.getWifiInfos_impl());
            })
            .catch(function () {
                failed( );
                alert("Uh oh, no permissions - plan B time!");
            });
}

function getWifiInfos_impl() {
    var context = app.android.context;
    var wifiManager = app.android.context.getSystemService(context.WIFI_SERVICE);
    var wInfo = wifiManager.getConnectionInfo();
    var ip = wInfo.getIpAddress();
    console.dir(wInfo);
    console.log("ip : " + ip);
    console.log("ip : ", ip);
    alert(JSON.stringify(wInfo));
    return wInfo;
} 
/*
var connectionType = connectivity.getConnectionType();
switch (connectionType) {
    case connectivity.connectionType.none:
        console.log("No connection");
        break;
    case connectivity.connectionType.wifi:
        console.log("WiFi connection");
        break;
    case connectivity.connectionType.mobile:
        console.log("Mobile connection");
        break;
}

connectivity.startMonitoring(function onConnectionTypeChanged(newConnectionType: number) {
    switch (newConnectionType) {
        case connectivity.connectionType.none:
            console.log("Connection type changed to none.");
            break;
        case connectivity.connectionType.wifi:
            console.log("Connection type changed to WiFi.");
            break;
        case connectivity.connectionType.mobile:
            console.log("Connection type changed to mobile.");
            break;
    }
});*/
//connectivity.stopMonitoring();

/*
An uncaught Exception occurred on "main" thread.
java.lang.RuntimeException: Unable to create application com.tns.NativeScriptApplication: com.tns.NativeScriptException: 

Error calling module function 

Error calling module function 

Error calling module function 

Error calling module function 

Error calling module function 

Error calling module function 

Error: java.lang.SecurityException: ConnectivityService: Neither user 10055 nor current process has android.permission.ACCESS_NETWORK_STATE.
    android.os.Parcel.readException(Parcel.java:1431)
    android.os.Parcel.readException(Parcel.java:1385)
    android.net.IConnectivityManager$Stub$Proxy.getActiveNetworkInfo(IConnectivityManager.java:720)
    android.net.ConnectivityManager.getActiveNetworkInfo(ConnectivityManager.java:522)
    com.tns.Runtime.runModule(Native Method)
    com.tns.Runtime.runModule(Runtime.java:530)
    com.tns.Runtime.run(Runtime.java:522)
    com.tns.NativeScriptApplication.onCreate(NativeScriptApplication.java:19)
    androi
*/