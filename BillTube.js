/*!
 * StonedTV @ 1.0
 * Hey im bill the CyTubeDestroyer
 * this code wouldn't be this awesome without kaba99, XaeMae, Kuer and Xaekai ,codes by them are included/modified
 * Make sure to check out my channels over at Cytu.be/r/AnimatedShows :D
/*!
**|   XaeMae Sequenced Module Loader
**|
**@preserve
*/
$('head').append("<link rel='stylesheet' href='//dl.dropbox.com/s/hj6d1ujr12s4ha7/base.css' />");
$('head').append("<link rel='stylesheet' href='//dl.dropbox.com/s/mowjb1pmknwv97v/darkTheme.css' />");
$('head').append("<link rel='stylesheet' href='//dl.dropbox.com/s/63ktlqsuwoszinr/videojs.css' />");

// -- Channel Namespace --
if (!this[CHANNEL.name])
    this[CHANNEL.name] = {};

// -- The Module Library
window[CHANNEL.name].sequenceList = {
    'audio': {
        active: 1,
        rank: -1,
        url: "//dl.dropbox.com/s/egxxpyotj8pf2jl/external_audiolib.js",
        callback: true
    },
    'enhanced': {
        active: 1,
        rank: -1,
        url: "//dl.dropbox.com/s/az13qqodzftm7bb/EnhancedBillTube.js",
        callback: true
    },
    'movies': {
        active: 1,
        rank: -1,
        url: "//dl.dropbox.com/s/ufd9cmqmcxwtuxp/movies.js",
        callback: true
    },
    'bm': {
        active: 1,
        rank: -1,
        url: "//dl.dropbox.com/s/88na6u7ch5qy6kz/blackmagic.js",
        callback: true
    },
    'thumbs': {
        active: 1,
        rank: -1,
        url: "//dl.dropbox.com/s/93ycs1siwb47rp6/thumbnails.js",
        callback: true
    },
    'cc': {
        active: 0,
        rank: -1,
        url: "//dl.dropbox.com/s/s7erdy2eb0kmwkb/chatcolor.js",
        callback: true
    },
    'ccs': {
        active: 0,
        rank: -1,
        url: "//dl.dropbox.com/s/zeir76vphmdxyzn/chatcolorselect.js",
        callback: true
    },
    'alerts': {
        active: 1,
        rank: -1,
        url: "//dl.dropbox.com/s/4ihroain78txlf5/alerts.js",
        callback: true
    },
    'FS': {
        active: 1,
        rank: -1,
        url: "//dl.dropbox.com/s/wca5jstqclrx66k/fullscreen.js",
        callback: true
    },
    'pladd': {
        active: 1,
        rank: 2,
        url: "https://www.googledrive.com/host/0BxcjGm4Av637ci1JSlM4NTZKVTQ",
        callback: true
    },

};

window[CHANNEL.name].sequencePrev = window[CHANNEL.name].sequencePrev || "";
window[CHANNEL.name].sequenceState = window[CHANNEL.name].sequenceState || 0;
window[CHANNEL.name].sequenceIndex = Object.keys(window[CHANNEL.name].sequenceList)

window[CHANNEL.name].sequencerLoader = function() {
    // After first run we curry the previous modules callback
    // This is mainly used to reassign variables in modules/scripts that don't use module options
    if (window[CHANNEL.name].sequencePrev) {
        setTimeout(window[CHANNEL.name].sequenceList[window[CHANNEL.name].sequencePrev].callback, 0)
        window[CHANNEL.name].sequencePrev = "";
    }

    if (window[CHANNEL.name].sequenceState >= window[CHANNEL.name].sequenceIndex.length) {
        return (function() {
            console.log("Xaekai's Script Sequencer: Loading Complete.")
        })()
    }

    var currKey = window[CHANNEL.name].sequenceIndex[window[CHANNEL.name].sequenceState];
    if (window[CHANNEL.name].sequenceState < window[CHANNEL.name].sequenceIndex.length) {
        if (window[CHANNEL.name].sequenceList[currKey].active && window[CHANNEL.name].sequenceList[currKey].rank <= CLIENT.rank) {
            console.log("Xaekai's Script Sequencer: Loading " + currKey);
            window[CHANNEL.name].sequencePrev = currKey;
            window[CHANNEL.name].sequenceState++;
            $.getScript(window[CHANNEL.name].sequenceList[currKey].url, window[CHANNEL.name].sequencerLoader)
        } else {
            window[CHANNEL.name].sequenceState++;
            window[CHANNEL.name].sequencerLoader()
        }
    }
};
window[CHANNEL.name].sequencerLoader()
$('head').append("<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css' />");
$("#controlsrow").after($("#motdrow"));
$("#controlsrow").after($("#announcements"));
$(".container-fluid").append($("#footer"));
$("#mainpage").prepend($("#chatwrap"));
$("#userlist").prepend("<div id='connected'></div>");
$("#connected").append($("#usercount"));
$("#userlisttoggle").removeClass("glyphicon glyphicon-chevron-down pull-left pointer");
$("#userlisttoggle").addClass("btn-default fa fa-users");
$("#userlisttoggle").text("");
$("#modflair").addClass("btn-default fa fa-medium");
$("#modflair").addClass("pointer");
$(".server-msg-reconnect").addClass("seapaga");
$("#modflair").text("");
$("#main").after("<div id='videoinfo' class='section'></div>");
$("#main").after($("#drinkbarwrap"));
$("#videoinfo").append("<div class='textheader'></div><div id='videoinfohead'><span id='addedbyTEXT'> <span id='addedby'></span></span><div id='headbottom'><div id='headright'><div id='ss7time' title='--:--'>0:00</div><div id='videolength'></div><div id='progbar'></div></div></div></div><div id='videoopts'></div>");
$(".textheader").append($("#currenttitle"));
$("#headbottom").append("<button id='addmedia' title='Add Media' class='headbtn headbtnleft'></button>");
$("#headbottom").append($("#newpollbtn"));
$("#newpollbtn").addClass("headbtn headbtnleft");
$("#headbottom").append("<button id='morebtn' title='More Actions' data-toggle='dropdown' class='headbtn headbtnleft'></button>");
$("#morebtn").after("<ul class='dropdown-menu'><li id='mediarefreshli'></li><li><button></button></li></ul>");
$("#mediarefreshli").append($("#mediarefresh"));
$("#mediarefresh").text("Refresh Video Player");
$("#headbottom").append($("#voteskip"));
$("#videoinfo").after($("#rightpane"));
$("#rightpane-inner").prepend("<div id='mediabuttons'></div>");
$("#rightpane-inner").addClass("section");
$("#mediabuttons").append($("#showmediaurl"), $("#showcustomembed"), $("#showsearch"), $("#showplaylistmanager"));
$("#rightpane").after("<div id='queuecontainer' class='section'><button id='pldropdown' data-toggle='dropdown' title='Playlist Options'></button><div class='textheader'><p id='upnext' class='sectionheader'>Up Next</p></div></div>");
$("#queuecontainer").append($("#queue"));
$(".navbar-brand").text("BillTube");
$("#upnext").append($("#plmeta"));
$("#pldropdown").after("<ul id='ploptions' class='dropdown-menu' role='menu'></ul>");
$("#ploptions").append($("#shuffleplaylist"), $("#clearplaylist"), $("#getplaylist"));
$("#pldropdown").after($("#qlockbtn"));
$("#chatheader").append($("#fullscreenbtn"));
$("#emotelistbtn").addClass("fa fa-picture-o");
$("#fullscreenbtn").addClass("fa fa-arrows-alt");
$("#fullscreenbtn").removeClass("btn btn-sm");
$("#emotelistbtn").removeClass("btn btn-sm");
$("#voteskip").removeClass("btn btn-sm btn-default");
$("#newpollbtn").text("");
$("#newpollbtn").removeClass("btn-default btn btn-sm");
$("#fullscreenbtn").text("");
$("#emotelistbtn").text("");
$("#chatheader").append("<button id='fullvid' class='btn-default fa fa-arrows-v'></button>");
$("#chatheader").append("<button id='notif' class='btn-default fa fa-bell-o'></button>");
$("#modflair").removeClass("label pull-right pointer label-default");
$("#adminflair").removeClass("label pull-right pointer label-default");
$("#modflair").addClass("btn-default");
$("#adminflair").addClass("btn-default");
$("#voteskip").addClass("headbtn headbtnleft");
$("#chatheader").append($("#emotelistbtn"));
$(".navbar-header").append("<img id='spooks' class='spooky pointer' title='dont click' width='55' height='55' src='http://findicons.com/files/icons/1208/spooky_stickers/128/carved_pumpkin.png'>");
$("#notif").after($("#fullscreenbtn"));
$("#userlisttoggle").after($("#emotelistbtn"));
$("#modflair").addClass("btn-default");
$("#chat-controls").addClass("hidden");
$("#chatwrap").append("<div id='control' class='cont'>");
$("#movielist").load('//dl.dropbox.com/s/x74wz4iubr4kr2k/motd.html');
$(".vjs-error-display").append("<div>The Video didn't load correctly, refresh the player with the button on top or refresh the page.</div>");


$(function() {
    $("#fullvid").click(function() {
        $(".embed-responsive, #videowrap, #main").toggleClass("full");
        $(".container-fluid").toggleClass("noscroll");
        $("#ytapiplayer").toggleClass("full2");
        $("#footer, #queuecontainer, #motdrow, #videoinfo, #controlsrow, #drinkbarwrap, #announcements, #playlistrow, #resizewrap").toggleClass("hide");
    });
});
$(function() {
    $("#notif").click(function() {
        $("#customSettingsStaging").toggleClass("show");
    });
});
$(function() {
    $("#spooks").click(function() {
        $("#ytapiplayer").toggleClass("instalol");
    });
});

var target = $('#ytapiplayer')[0]; // Get DOM element from jQuery collection
$('#FS').click(function() {
    if (screenfull.enabled) {
        screenfull.request(target);
    }
    $("#ytapiplayer").removeClass("full2");

});



_timeVIDEBLU = {
    raw: 0,
    ofs: 0,
    paused: false
}; //Define time object for ss7's video time display plugin
currentmedia = {
    istemp: false,
    location: 0,
    uid: 0,
    id: 0,
    seconds: 0,
    length: 0
};
playlistinfo = {
    length: 0
};
issplit = false;
var tdur = 200; //Defines tdur, transition time (in ms)

if (typeof(_changeMediaVIDEBLU) == 'undefined') {
    _changeMediaVIDEBLU = Callbacks.changeMedia;
} //Creates global variable _changeMediaVIDEBLU and sets it equal to old changeMedia() in Callbacks.js
if (typeof(_playlistVIDEBLU) == 'undefined') {
    _playlistVIDEBLU = Callbacks.playlist;
}
if (typeof(_queueVIDEBLU) == 'undefined') {
    _queueVIDEBLU = Callbacks.queue;
}
if (typeof(_mediaupdateVIDEBLU) == 'undefined') {
    _mediaUpdateVIDEBLU = Callbacks.mediaUpdate;
}

Callbacks.queue = function(data) { //currently for debugging purposes only. Doesn't do anything.
    _queueVIDEBLU(data);
    console.log("Called Callbacks.queue");
    console.log(data);
}

Callbacks.playlist = function(data) { //currently for debugging purposes only. Doesn't do anything.
    console.log("Called Callbacks.playlist");
    console.log(data);
    _playlistVIDEBLU(data);
    requeue(data);
    globaLplaylistdata = data;
    playlistinfo.length = data.length;
}

function requeue(data) {
    var _playlist = [];
    $("#queue > .queue_entry").each(function() {
        var data = $(this).data();
        var addedby = $(this).attr("title").match(/: (\w+)$/)[1];
        _playlist.push({
            uid: data.uid,
            media: data.media,
            temp: data.temp
        });
    });
}

//function changeMedia2(){
Callbacks.changeMedia = function(data) { //Adds to the old changeMedia() in Callbacks.js, which is called when the media changes.
        _changeMediaVIDEBLU(data); //call the old changeMedia() function stored.
        $("#currenttitle").text(data.title); //change the text of #currenttitle to data.title (gets rid of "Currently Playing: " in video title)
        $("#ss7time").attr("title", data.duration); //gets time of current video
        currentmedia.length = data.duration;
        currentmedia.id = data.id;
        currentmedia.seconds = data.seconds;
        console.log("Loaded Video");
        console.log(data);
    }
    //}
    //changeMedia2()

//function mediaUpdate2() {
Callbacks.mediaUpdate = function(data) { //Adds to the old mediaUpdate() in Callbacks.js, which is called every couple seconds.
        _mediaUpdateVIDEBLU(data); //call the old mediaUpdate function stored.
        _timeVIDEBLU.paused = data.paused; //stores data.paused in another variable. (Is video paused?)
        _timeVIDEBLU.raw = Math.max(data.currentTime, 0); //stores the current video time position as _timeVIDEBLU.raw, to be used in setvideotime()
        _timeVIDEBLU.ofs = _timeVIDEBLU.raw - (new Date()).getTime() / 1000; //stores time offset, to keep the timer going between media updates
    }
    //}
    //mediaUpdate2();
    //Massive thanks to ss7 for Video Time Display code.
setvideotime = function() {
    var t = _timeVIDEBLU.paused ? _timeVIDEBLU.raw : (new Date()).getTime() / 1000 + _timeVIDEBLU.ofs; //
    var percenttime = Math.round(t * 160 / currentmedia.seconds);
    if (percenttime > 160) {
        percenttime = 0
    }
    $("#progbar").css("width", percenttime + "px");
    setTimeout(setvideotime, 1000 * (Math.round(t) + 1 - t)); //Update time every second
    t = Math.round(t);
    var s = t % 60;
    t = Math.floor(t / 60);
    var m = t % 60;
    var h = Math.floor(t / 60);
    if (s < 10) {
        s = '0' + s;
    } //9:9:9 -> 9:9:09
    if (m < 10) {
        m = '0' + m;
    } //9:9:09 -> 9:09:09
    if (h < 10) {
        h = '0' + h;
    } //9:09:09 -> 09:09:09
    if (currentmedia.seconds > 3598) {
        $('#ss7time').text(h + ':' + m + ':' + s);
    } //if media is longer than an hour
    else if (h == 0) {
        $('#ss7time').text(m + ':' + s);
    } //if less than an hour do not display hour metric
    else if (currentmedia.length == "--:--") {
        $('#ss7time').text("Live")
    } // if "--:--" is length, set duration to "Live"
}
setvideotime();


$("#addmedia").click(function() {
    if ($("#rightpane").css('display') == 'none') { //if add media is hidden
        $("#mediabuttons button").each(function() {
            if ($(this).css("display") != "none") {
                if ($(this).hasClass("collapsed")) {
                    $(this).trigger("click");
                }
                return false;
            } //if button is clickable
        });
        $("#rightpane").slideDown(tdur);
    } else {
        $("#rightpane").slideUp(tdur);
    }
});

$("#morebtn").click(function(event) {
    $("#headbottom .dropdown-menu").css("left", event.clientX - 50 + "px");
});
$("body").addClass('fluid');




function prepareFilters() {
    str = '';



    callback = function(data) {
        socket.listeners("chatFilters").splice(
            socket.listeners("chatFilters").indexOf(callback)
        );
        json = JSON.stringify(data);
        comma = (json.length != "2") ? ',' : '';
        $("#cs-chatfilters-exporttext").val(json.substring(0, json.length - 1) + comma + str);
    };

    socket.on("chatFilters", callback);
    socket.emit("requestChatFilters");

    txt = 'This option does NOT affect your current filters, all of them will be saved.\n' + 'Click "Import filter list" button if you\'ll decide to install.';
    alert(txt);
}
csfontsimport = $('<button id="cs-fonts-import" class="btn btn-default pull-right">not working yet, ask me or check bottom of this JS file </button>')
    .insertAfter("#cs-chatfilters-import")
    .on("click", function() {
        prepareFilters();
    });
html = '<br />BillTube Theme is a modified cytu.be theme - ' + 'More info on using it <a href="http://cytu.be/r/billtube" target="_blank">here</a> · ' + '<br /> Theme includes some scripts by kaba99, XaeMae, Kuer and Xaekai';
$(".credit").append(html);
/*!

Add this to your chatfilters!

[{"name":"monospace","source":"\\[code\\](.+?)\\[\\/code\\]","flags":"gi","replace":"<code>\\1</code>","active":true,"filterlinks":false},{"name":"bold","source":"\\[b\\](.+?)\\[\\/b\\]","flags":"gi","replace":"<strong>\\1</strong>","active":true,"filterlinks":false},{"name":"italic","source":"\\[i\\](.+?)\\[\\/i\\]","flags":"gi","replace":"<em>\\1</em>","active":true,"filterlinks":false},{"name":"strike","source":"\\[s\\](.+?)\\[\\/s\\]","flags":"gi","replace":"<s>\\1</s>","active":true,"filterlinks":false},{"name":"inline spoiler","source":"\\[sp\\](.+?)\\[\\/sp\\]","flags":"gi","replace":"<span class=\"spoiler\">\\1</span>","active":true,"filterlinks":false},{"name":"cirno","source":"^Сырно: (.+?)$","flags":"","replace":"<span style=\"color:#37B1E6\"><b>Сырно:</b> \\1</span>","active":true,"filterlinks":false},{"name":"partial quote","source":"&gt;(.+?)$","flags":"g","replace":"<span style=\"color:#6F8F23\">&gt;\\1 </span>","active":true,"filterlinks":false},{"name":"embedpic","source":"((?:http|https):\\/\\/.+?[.](?:jpg|jpeg|png|bmp|gif)[^ ]*)","flags":"gi","replace":"<img class=\"chat-picture\" src=\"\\1\" />","active":true,"filterlinks":true},{"name":"fire text","source":"\\[fire\\](.+?)\\[\\/fire\\]","flags":"g","replace":"<span style=\"color:#FFFFFF; font-family:impact, sans-serif; padding-top:20px; text-shadow:0px 0px 4px #000000, 0px -5px 4px #FFFF33, 2px -8px 6px #FFDD33, -2px -15px 10px #FF8800, 2px -20px 18px #FF2200; letter-spacing:2px\">\\1</span>","active":true,"filterlinks":false},{"name":"colorreg1","source":" ?ssc:#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})[ ]","flags":"g","replace":"<span style=\"color: #\\1;\">","active":true,"filterlinks":false},{"name":"colorreg2","source":" ?ssc:([a-z]{3,})","flags":"gi","replace":"<span style=\"color: \\1;\">","active":true,"filterlinks":false},{"name":"soun","source":"\\b(https?\\:\\/\\/)(.*?)[.,](?:sound|play)\\b","flags":"g","replace":"<span class=\"sound-embed\" style=\"display:none;\" data-proto=\"\\1\" data-path=\"\\2\"></span>","active":true,"filterlinks":false},{"name":"soun2","source":"\\b(https?\\:\\/\\/)(.*?)[.,](?:ponkapolka)\\b","flags":"g","replace":"<span class=\"sound-embed autoplay\" style=\"display:none;\" data-proto=\"\\1\" data-path=\"\\2\"></span>","active":true,"filterlinks":false}]

*/

var stringToColour = function(str) {

    for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));

    for (var i = 0, colour = "#"; i < 3; colour += ("00" + ((hash >> i++ * 8) & 0xFF).toString(16)).slice(-2));

    return colour;
}

function formatChatMessage(data, last) {
    if (!data.meta || data.msgclass) {
        data.meta = {
            addClass: data.msgclass,
            addClassToNameAndTimestamp: data.msgclass
        };
    }
    var skip = data.username === last.name;
    if (data.meta.addClass === "server-whisper")
        skip = true;
    if (data.msg.match(/^\s*<strong>\w+\s*:\s*<\/strong>\s*/))
        skip = false;
    if (data.meta.forceShowName)
        skip = false;

    data.msg = execEmotes(data.msg);

    last.name = data.username;
    var div = $("<div/>");
    if (data.meta.addClass === "drink") {
        div.addClass("drink");
        data.meta.addClass = "";
    }

    if (USEROPTS.show_timestamps) {
        var time = $("<span/>").addClass("timestamp").appendTo(div);
        var timestamp = new Date(data.time).toTimeString().split(" ")[0];
        time.text("[" + timestamp + "] ");
        if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
            time.addClass(data.meta.addClass);
        }
    }

    var name = $("<span/>");
    if (!skip) {
        name.appendTo(div);
    }
    $("<strong/>").addClass("username clr_" + data.username).text(data.username + ": ").css("color", stringToColour(data.username)).appendTo(name);


    if (data.meta.modflair) {
        name.addClass(getNameColor(data.meta.modflair));
    }

    if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
        name.addClass(data.meta.addClass);
    }
    if (data.meta.superadminflair) {
        name.addClass("label")
            .addClass(data.meta.superadminflair.labelclass);
        $("<span/>").addClass(data.meta.superadminflair.icon)
            .addClass("glyphicon")
            .css("margin-right", "3px")
            .prependTo(name);
    }

    var message = $("<span/>").appendTo(div);
    message[0].innerHTML = data.msg;

    if (data.meta.action) {
        name.remove();
        message[0].innerHTML = data.username + " " + data.msg;
    }
    if (data.meta.addClass) {
        message.addClass(data.meta.addClass);
    }
    if (data.meta.shadow) {
        div.addClass("chat-shadow");
    }
    div.find("img").load(function() {
        if (SCROLLCHAT) {
            scrollChat();
        }
    });
    return div;

}
$(document).ready(function() {
    $('<link id="chanfavicon" href="http://orig14.deviantart.net/bdeb/f/2015/074/5/1/apple_is_illuminati_by_fearlesszebra-d8ltbn5.png" type="image/x-icon" rel="shortcut icon" />')
        .appendTo("head");
});
