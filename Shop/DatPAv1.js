var month_format = [, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    no_image = "http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
$("#related-ready").each(function () {
    var e = $(this).text();
    $.ajax({
        url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=4",
        type: "get",
        dataType: "jsonp",
        success: function (e) {
            for (var t = "", a = '<div class="related-posts">', s = 0; s < e.feed.entry.length; s++) {
                for (var r = 0; r < e.feed.entry[s].link.length; r++)
                    if ("alternate" == e.feed.entry[s].link[r].rel) {
                        t = e.feed.entry[s].link[r].href;
                        break
                    } var i = e.feed.entry[s].title.$t,
                    n = e.feed.entry[s].category[0].term,
                    d = e.feed.entry[s].published.$t,
                    l = d.substring(0, 4),
                    c = d.substring(5, 7),
                    o = d.substring(8, 10),
                    f = month_format[parseInt(c, 10)] + " " + o + ", " + l,
                    u = e.feed.entry[s].content.$t,
                    p = $("<div>").html(u);
                if (u.indexOf("//www.youtube.com/embed/") > -1) var h = e.feed.entry[s].media$thumbnail.url.replace("/default.jpg", "/mqdefault.jpg"),
                    v = h;
                else if (u.indexOf("<img") > -1) var m = p.find("img:first").attr("src").replace("s72-c", "s1600"),
                    v = m;
                else var v = no_image;
                a += '<li class="related-item"><div class="related-thumb"><a class="related-img" href="' + t + '" title="' + i + '" style="background:url(' + v + ') no-repeat center center;background-size: cover"><span class="related-overlay"/></a></div><div class="related-content"><a class="related-tag" href="/search/label/' + n + '">' + n + '</a><h3><a href="' + t + '" title="' + i + '">' + i + '</a></h3><span class="recent-date">' + f + "</span></div></li>"
            }
            a += '</div><div class="clear"/>', $("#related-ready").html(a), $(".related-img").each(function () {
                $(this).attr("style", function (e, t) {
                    return t.replace("/default.jpg", "/hqdefault.jpg")
                }).attr("style", function (e, t) {
                    return t.replace("s72-c", "s1600")
                })
            })
        }
    })
});
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));