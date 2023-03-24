Java.perform(function () {
    var HttpURLConnectionImpl = Java.use('com.android.okhttp.internal.huc.HttpURLConnectionImpl');

    var connect_http = HttpURLConnectionImpl.connect;
    connect_http.overload().implementation = function () {
        console.log('Hooked HttpURLConnectionImpl->connect()');
        connect_http.call(this);
    }

    var getInputStream_http = HttpURLConnectionImpl.getInputStream;
    getInputStream_http.overload().implementation = function () {
        console.log('Hooked HttpURLConnectionImpl->getInputStream()');
        return getInputStream_http.call(this);
    }

    var getOutputStream_http = HttpURLConnectionImpl.getOutputStream;
    getOutputStream_http.overload().implementation = function () {
        console.log('Hooked HttpURLConnectionImpl->getOutputStream()');
        return getOutputStream_http.call(this);
    }
});

Java.perform(function () {
    var HttpsURLConnectionImpl = Java.use('com.android.okhttp.internal.huc.HttpsURLConnectionImpl');

    var getURL = HttpsURLConnectionImpl.getURL;
    getURL.overload().implementation = function(){
	    var x=this.getURL();
	    console.log("URL VISITED:",x);
	    return x;
    }

    var connect_https = HttpsURLConnectionImpl.connect;
    connect_https.overload().implementation = function () {
        console.log('Hooked HttpsURLConnectionImpl->connect()');
    }

    var getInputStream_https = HttpsURLConnectionImpl.getInputStream;
    getInputStream_https.overload().implementation = function () {
        //console.log('Hooked HttpsURLConnectionImpl->getInputStream()');
        return getInputStream_https.call(this);
    }

    var getOutputStream_https = HttpsURLConnectionImpl.getOutputStream;
    getOutputStream_https.overload().implementation = function () {
        //console.log('Hooked HttpsURLConnectionImpl->getOutputStream()');
        return getOutputStream_https.call(this);
    }
});
