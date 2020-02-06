var INSPIRO = {},
    $ = jQuery.noConflict();
    $(function(){
        $('#new-project').ebcaptcha();
      });
      
      (function($){
      
          jQuery.fn.ebcaptcha = function(options){
      
              var element = this; 
              var input = this.find('#ebcaptchainput');
              var label = this.find('#ebcaptchatext');
                      $(element).find('button[type=submit]').attr('disabled','disabled'); 
      
              var randomNr1 = 0; 
              var randomNr2 = 0;
              var totalNr = 0;
      
      
              randomNr1 = Math.floor(Math.random()*10);
              randomNr2 = Math.floor(Math.random()*10);
              totalNr = randomNr1 + randomNr2;
              var texti = "What is "+randomNr1+" + "+randomNr2 + "?";
              $(label).text(texti);
              
          
              $(input).keyup(function(){
      
                  var nr = $(this).val();;
                  if(nr==totalNr)
                  {
                      $(element).find('button[type=submit]').removeAttr('disabled');				
                  }
                  else{
                      $(element).find('button[type=submit]').attr('disabled','disabled');
                  }
                  
              });
      
              $(document).keypress(function(e)
              {
                  if(e.which==13)
                  {
                      if((element).find('button[type=submit]').is(':disabled')==true)
                      {
                          e.preventDefault();
                          return false;
                      }
                  }
      
              });
      
          };
      
      })(jQuery);
      $(function(){
        $('#new-chapter').ebcaptcha();
      });
      
      (function($){
      
         jQuery.fn.ebcaptcha = function(options){
      
            var element = this; 
              var input = this.find('#ebcaptchainput');
            var label = this.find('#ebcaptchatext');
                  $(element).find('button[type=submit]').attr('disabled','disabled'); 
      
            var randomNr1 = 0; 
            var randomNr2 = 0;
            var totalNr = 0;
      
      
            randomNr1 = Math.floor(Math.random()*10);
            randomNr2 = Math.floor(Math.random()*10);
            totalNr = randomNr1 + randomNr2;
            var texti = "What is "+randomNr1+" + "+randomNr2 + "?";
            $(label).text(texti);
            
         
            $(input).keyup(function(){
      
                  var nr = $(this).val();;
               if(nr==totalNr)
               {
                  $(element).find('button[type=submit]').removeAttr('disabled');				
               }
               else{
                  $(element).find('button[type=submit]').attr('disabled','disabled');
               }
               
            });
      
            $(document).keypress(function(e)
            {
               if(e.which==13)
               {
                  if((element).find('button[type=submit]').is(':disabled')==true)
                  {
                     e.preventDefault();
                     return false;
                  }
               }
      
            });
      
         };
      
      })(jQuery);
! function(t) {
    "use strict";
    var i = t(window),
        e = t("body"),
        a = (t(".body-inner"), t("section")),
        s = t("#topbar"),
        o = t("#header"),
        n = o.attr("class"),
        r = t("#logo"),
        l = t("#mainMenu"),
        d = t(".page-menu"),
        c = (t("#slider"), t(".inspiro-slider")),
        u = t(".carousel"),
        p = t(".grid-layout"),
        M = t(".grid-filter"),
        m = i.width();
    if (M = M.length > 0 ? M : t(".page-grid-filter"), o.length > 0) var g = o.offset().top;
    var f = {
        isMobile: {
            browser: {
                isMobile: function() {
                    return !!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)
                }
            }
        }.browser.isMobile,
        submenuLight: 1 == o.hasClass("submenu-light"),
        menuIsOpen: !1,
        menuOverlayOpened: !1
    };
    t(window).breakpoints({
        breakpoints: [{
            name: "xs",
            width: 0
        }, {
            name: "sm",
            width: 576
        }, {
            name: "md",
            width: 768
        }, {
            name: "lg",
            width: 992
        }, {
            name: "xl",
            width: 1200
        }]
    });
    var L = t(window).breakpoints("getBreakpoint");
    e.addClass("breakpoint-" + L), t(window).bind("breakpoint-change", function(t) {
        e.removeClass("breakpoint-" + t.from), e.addClass("breakpoint-" + t.to)
    }), t(window).breakpoints("greaterEqualTo", "lg", function() {
        e.addClass("b--desktop"), e.removeClass("b--responsive")
    }), t(window).breakpoints("lessThan", "lg", function() {
        e.removeClass("b--desktop"), e.addClass("b--responsive")
    }), INSPIRO.core = {
        functions: function() {
            INSPIRO.core.scrollTop(), INSPIRO.core.rtlStatus(), INSPIRO.core.rtlStatusActivate(), INSPIRO.core.equalize(), INSPIRO.core.customHeight()
        },
        scrollTop: function() {
            var a = t("#scrollTop");
            if (a.length > 0) {
                var s = e.attr("data-offset") || 400;
                i.scrollTop() > s ? e.hasClass("frame") ? a.css({
                    bottom: "46px",
                    opacity: 1,
                    "z-index": 199
                }) : a.css({
                    bottom: "26px",
                    opacity: 1,
                    "z-index": 199
                }) : a.css({
                    bottom: "16px",
                    opacity: 0
                }), a.off("click").on("click", function() {
                    return t("body,html").stop(!0).animate({
                        scrollTop: 0
                    }, 1e3, "easeInOutExpo"), !1
                })
            }
        },
        rtlStatus: function() {
            return "rtl" == t("html").attr("dir")
        },
        rtlStatusActivate: function() {
            1 == INSPIRO.core.rtlStatus() && t("head").append('<link rel="stylesheet" type="text/css" href="/css/rtl.css">')
        },
        equalize: function() {
            var i = t(".equalize");
            i.length > 0 && i.each(function() {
                var i = t(this),
                    e = i.find(i.attr("data-equalize-item")) || "> div",
                    a = 0;
                e.each(function() {
                    t(this).outerHeight(!0) > a && (a = t(this).outerHeight(!0))
                }), e.height(a)
            })
        },
        customHeight: function(i) {
            var e = t(".custom-height");
            e.length > 0 && e.each(function() {
                var e = t(this),
                    a = e.attr("data-height") || 400,
                    s = e.attr("data-height-lg") || a,
                    o = e.attr("data-height-md") || s,
                    n = e.attr("data-height-sm") || o,
                    r = e.attr("data-height-xs") || n;

                function l(i) {
                    switch (i && (e = i), t(window).breakpoints("getBreakpoint")) {
                        case "xs":
                            e.height(r);
                            break;
                        case "sm":
                            e.height(n);
                            break;
                        case "md":
                            e.height(o);
                            break;
                        case "lg":
                            e.height(s);
                            break;
                        case "xl":
                            e.height(a)
                    }
                }
                l(i), t(window).resize(function() {
                    setTimeout(function() {
                        l(i)
                    }, 100)
                })
            })
        }
    }, INSPIRO.header = {
        functions: function() {
            INSPIRO.header.logoStatus(), INSPIRO.header.stickyHeader(), INSPIRO.header.topBar(), INSPIRO.header.search(), INSPIRO.header.mainMenu(), INSPIRO.header.mainMenuOverlay(), INSPIRO.header.pageMenu(), INSPIRO.header.sidebarOverlay(), INSPIRO.header.dotsMenu(), INSPIRO.header.onepageMenu()
        },
        logoStatus: function(i) {
            var e = r.find(t(".logo-default")),
                a = r.find(t(".logo-dark")),
                s = r.find(".logo-fixed"),
                n = r.find(".logo-responsive");
            o.hasClass("header-sticky") && s.length > 0 ? (e.css("display", "none"), a.css("display", "none"), n.css("display", "none"), s.css("display", "block")) : (e.removeAttr("style"), a.removeAttr("style"), n.removeAttr("style"), s.removeAttr("style")), t(window).breakpoints("lessThan", "lg", function() {
                n.length > 0 && (e.css("display", "none"), a.css("display", "none"), s.css("display", "none"), n.css("display", "block"))
            })
        },
        stickyHeader: function() {
            var e = t(this),
                a = e.attr("data-shrink") || 0,
                s = e.attr("data-sticky-active") || 200,
                r = i.scrollTop();
            o.hasClass("header-modern") && (a = 300), t(window).breakpoints("greaterEqualTo", "lg", function() {
                o.is(".header-disable-fixed") || (r > g + a ? (o.addClass("header-sticky"), r > g + s && (o.addClass("sticky-active"), f.submenuLight && (o.removeClass("dark"), !0), INSPIRO.header.logoStatus())) : (o.removeClass().addClass(n), INSPIRO.header.logoStatus()))
            }), t(window).breakpoints("lessThan", "lg", function() {
                "true" == o.attr("data-responsive-fixed") && (r > g + a ? (o.addClass("header-sticky"), r > g + s && (o.addClass("sticky-active"), f.submenuLight && (o.removeClass("dark"), !0), INSPIRO.header.logoStatus())) : (o.removeClass().addClass(n), INSPIRO.header.logoStatus()))
            })
        },
        topBar: function() {
            s.length > 0 && t("#topbar .topbar-dropdown .topbar-form").each(function(e, a) {
                i.width() - (t(a).width() + t(a).offset().left) < 0 && t(a).addClass("dropdown-invert")
            })
        },
        search: function() {
            var i = t("#search");
            if (i.length > 0) {
                var a = t("#btn-search"),
                    s = t("#btn-search-close"),
                    o = i.find(".form-control");

                function n() {
                    e.removeClass("search-open"), o.value = ""
                }
                a.on("click", function() {
                    return e.addClass("search-open"), o.focus(), !1
                }), s.on("click", function() {
                    return n(), !1
                }), document.addEventListener("keyup", function(t) {
                    27 == t.keyCode && n()
                })
            }
        },
        mainMenu: function() {
            if (l.length > 0) {
                var a, s = t("#mainMenu nav > ul > li.dropdown > a, .dropdown-submenu > a, .dropdown-submenu > span, .page-menu nav > ul > li.dropdown > a"),
                    n = t("#mainMenu-trigger a, #mainMenu-trigger button"),
                    r = !1;
                n.on("click", function(s) {
                    var n = t(this);
                    s.preventDefault(), t(window).breakpoints("lessThan", "lg", function() {
                        f.menuIsOpen ? void(r || (r = !0, f.menuIsOpen = !1, INSPIRO.header.logoStatus(), l.animate({
                            "min-height": 0
                        }, {
                            start: function() {
                                l.removeClass("menu-animate")
                            },
                            done: function() {
                                e.removeClass("mainMenu-open"), n.removeClass("toggle-active"), f.submenuLight && a && o.addClass("dark")
                            },
                            duration: 500,
                            easing: "easeInOutQuart",
                            complete: function() {
                                r = !1
                            }
                        }))) : void(r || (r = !0, f.menuIsOpen = !0, f.submenuLight && (o.removeClass("dark"), a = !0), n.addClass("toggle-active"), e.addClass("mainMenu-open"), INSPIRO.header.logoStatus(), l.animate({
                            "min-height": i.height()
                        }, {
                            duration: 500,
                            easing: "easeInOutQuart",
                            start: function() {
                                setTimeout(function() {
                                    l.addClass("menu-animate")
                                }, 300)
                            },
                            complete: function() {
                                r = !1
                            }
                        })))
                    })
                }), s.on("click", function(i) {
                    t(this).parent("li").siblings().removeClass("hover-active"), t(this).parent("li").toggleClass("hover-active"), i.stopPropagation(), i.preventDefault()
                }), e.on("click", function(t) {
                    l.find(".hover-active").removeClass("hover-active")
                }), t(window).breakpoints("greaterEqualTo", "lg", function() {
                    var e = t("nav > ul > li:last-child"),
                        a = t("nav > ul > li:last-child > ul"),
                        s = (a.width(), e.width(), t("nav > ul > li").find(".dropdown-menu"));
                    s.css("display", "block"), t(".dropdown:not(.mega-menu-item) ul ul").each(function(e, a) {
                        i.width() - (t(a).width() + t(a).offset().left) < 0 && t(a).addClass("menu-invert")
                    }), i.width() - (a.width() + e.offset().left) < 0 && a.addClass("menu-last"), s.css("display", "")
                })
            }
        },
        mainMenuOverlay: function() {},
        pageMenu: function() {
            d.length > 0 && d.each(function() {
                t(this).find("#pageMenu-trigger").on("click", function() {
                    d.toggleClass("page-menu-active"), d.toggleClass("items-visible")
                })
            })
        },
        sidebarOverlay: function() {
            var i = t("#side-panel");
            if (i.length > 0) {
                i.css("opacity", 1), t("#close-panel").on("click", function() {
                    e.removeClass("side-panel-active"), t("#side-panel-trigger").removeClass("toggle-active")
                });
                setTimeout(function() {
                    INSPIRO.elements.gridLayoutRefresh()
                }, 1e3)
            }
        },
        dotsMenu: function() {
            var i = t("#dotsMenu"),
                e = i.find("ul > li > a");
            i.length > 0 && (e.on("click", function() {
                return e.parent("li").removeClass("current"), t(this).parent("li").addClass("current"), !1
            }), e.parents("li").removeClass("current"), i.find('a[href="#' + INSPIRO.header.currentSection() + '"]').parent("li").addClass("current"))
        },
        onepageMenu: function() {
            if (l.hasClass("menu-one-page")) {
                t(window).on("scroll", function() {
                    var t = INSPIRO.header.currentSection();
                    l.find("nav > ul > li > a").parents("li").removeClass("current"), l.find('nav > ul > li > a[href="#' + t + '"]').parent("li").addClass("current")
                })
            }
        },
        currentSection: function() {
            var e = "body";
            return a.each(function() {
                var a = t(this),
                    s = a.attr("id");
                a.offset().top - i.height() / 3 < i.scrollTop() && a.offset().top + a.height() - i.height() / 3 > i.scrollTop() && (e = s)
            }), e
        }
    }, INSPIRO.slider = {
        functions: function() {
            INSPIRO.slider.inspiroSlider(), INSPIRO.slider.carousel()
        },
        inspiroSlider: function() {
            if (c.length > 0) {
                if (void 0 === t.fn.flickity) return INSPIRO.elements.notification("Warning", "jQuery flickity slider plugin is missing in plugins.js file.", "danger"), !0;
                var e = "fadeInUp";

                function a(i) {
                    var a = i;
                    a.each(function() {
                        var i = t(this),
                            e = "600ms";
                        t(this).attr("data-animate-duration") && (e = t(this).attr("data-animate-duration") + "ms"), i.css({
                            opacity: 0
                        }), t(this).css("animation-duration", e)
                    }), a.each(function(i) {
                        var a = t(this),
                            s = a.attr("data-caption-delay") || 350 * i + 1e3,
                            o = a.attr("data-caption-animate") || e;
                        setTimeout(function() {
                            a.css({
                                opacity: 1
                            }), a.addClass(o)
                        }, s)
                    })
                }

                function n(t) {
                    var i = t.find(".slide.is-selected");
                    i.hasClass("kenburns") && setTimeout(function() {
                        i.find(".kenburns-bg").addClass("kenburns-bg-animate")
                    }, 1500)
                }

                function r(e, a) {
                    o.outerHeight(), s.outerHeight();
                    var n = i.height(),
                        r = (e.height(), e.find(".slide")),
                        l = (e.hasClass("slider-fullscreen"), e.hasClass("slider-halfscreen"), o.attr("data-transparent"), e.attr("data-height")),
                        d = (e.attr("data-height-xs"), e.find(".container").first().outerHeight());
                    if (d >= n) {
                        !0;
                        var c = d;
                        e.css("min-height", c + 100), r.css("min-height", c + 100), e.find(".flickity-viewport").css("min-height", c + 100)
                    }

                    function u(t) {
                        "null" == t ? (e.css("height", ""), r.css("height", ""), e.find(".flickity-viewport").css("height", "")) : (e.css("height", t), r.css("height", t), e.find(".flickity-viewport").css("height", t))
                    }
                    u("null"), l && t(window).breakpoints("greaterEqualTo", "lg", function() {
                        u(l + "px")
                    })
                }
                c.each(function() {
                    var i = t(this);
                    i.options = {
                        cellSelector: i.attr("data-item") || !1,
                        prevNextButtons: 0 != i.data("arrows"),
                        pageDots: 0 != i.data("dots"),
                        fade: 1 == i.data("fade"),
                        draggable: 1 == i.data("drag"),
                        freeScroll: 1 == i.data("free-scroll"),
                        wrapAround: 0 != i.data("loop"),
                        groupCells: 1 == i.data("group-cells"),
                        autoPlay: i.attr("data-autoplay") || 8e3,
                        pauseAutoPlayOnHover: 0 != i.data("hoverpause"),
                        adaptiveHeight: (i.data("adaptive-height"), !1),
                        asNavFor: i.attr("data-navigation") || !1,
                        selectedAttraction: i.attr("data-attraction") || .07,
                        friction: i.attr("data-friction") || .9,
                        initialIndex: i.attr("data-initial-index") || 0,
                        accessibility: 1 == i.data("accessibility"),
                        setGallerySize: (i.data("gallery-size"), !1),
                        resize: (i.data("resize"), !1),
                        cellAlign: i.attr("data-align") || "left"
                    }, i.find(".slide").each(function() {
                        if (t(this).hasClass("kenburns")) {
                            var i = t(this),
                                e = i.css("background-image").replace(/.*\s?url\([\'\"]?/, "").replace(/[\'\"]?\).*/, "");
                            i.attr("data-bg-image") && (e = i.attr("data-bg-image")), i.prepend('<div class="kenburns-bg" style="background-image:url(' + e + ')"></div>')
                        }
                    }), i.find(".slide video").each(function() {
                        this.pause()
                    }), i.find(".slide").length <= 1 && (i.options.prevNextButtons = !1, i.options.pageDots = !1), INSPIRO.elements.backgroundImage(), i.flickity({
                        cellSelector: i.options.cellSelector,
                        prevNextButtons: i.options.prevNextButtons,
                        pageDots: i.options.pageDots,
                        fade: i.options.fade,
                        draggable: i.options.draggable,
                        freeScroll: i.options.freeScroll,
                        wrapAround: i.options.wrapAround,
                        groupCells: i.options.groupCells,
                        autoPlay: i.options.autoPlay,
                        pauseAutoPlayOnHover: i.options.pauseAutoPlayOnHover,
                        adaptiveHeight: i.options.adaptiveHeight,
                        asNavFor: i.options.asNavFor,
                        selectedAttraction: Number(i.options.selectedAttraction),
                        friction: i.options.friction,
                        initialIndex: i.options.initialIndex,
                        accessibility: i.options.accessibility,
                        setGallerySize: i.options.setGallerySize,
                        resize: i.options.resize,
                        cellAlign: i.options.cellAlign,
                        rightToLeft: INSPIRO.core.rtlStatus(),
                        on: {
                            ready: function() {
                                var t = i.find(".slide.is-selected .slide-captions > *");
                                r(i), n(i), a(t)
                            },
                            change: function(s) {
                                var r = i.find(".slide.is-selected .slide-captions > *");
                                r.each(function(i) {
                                        var a = (i = t(this)).attr("data-caption-animate") || e;
                                        i.removeClass(a), i.removeAttr("style")
                                    }), setTimeout(function() {
                                        ! function(t) {
                                            t.find(".slide:not(.is-selected)").find(".kenburns-bg").removeClass("kenburns-bg-animate")
                                        }(i)
                                    }, 500), i.find(".slide:not(.is-selected) video").each(function() {
                                        this.pause(), this.currentTime = 0
                                    }),
                                    function(t) {
                                        t.find(".slide.is-selected").hasClass("slide-dark") ? o.removeClass("dark").addClass("dark-removed") : !o.hasClass("sticky-active") && o.hasClass("dark-removed") && o.addClass("dark").removeClass("dark-removed")
                                    }(i), n(i), a(r)
                            },
                            select: function(e) {
                                t(this.selectedElement).find("video") && t(this.selectedElement).find("video").each(function(t, e) {
                                    e.play(), i.flickity("pausePlayer"), setTimeout(function() {
                                        i.flickity("next")
                                    }, 1e3 * Number(Math.round(e.duration) - 1))
                                })
                            }
                        }
                    }), t(window).resize(function() {
                        r(i), i.flickity("reposition")
                    })
                })
            }
        },
        carouselAjax: function() {
            if (void 0 === t.fn.flickity) return INSPIRO.elements.notification("Warning", "jQuery flickity plugin is missing in plugins.js file.", "danger"), !0;
            var i = t(".carousel");
            i.flickity({
                adaptiveHeight: !1,
                wrapAround: !0,
                cellAlign: "left",
                resize: !1,
                on: {
                    ready: function() {
                        i.addClass("carousel-loaded")
                    }
                }
            })
        },
        carousel: function(i) {
            if (i && (u = i), u.length > 0) {
                if (void 0 === t.fn.flickity) return INSPIRO.elements.notification("Warning", "jQuery flickity plugin is missing in plugins.js file.", "danger"), !0;
                u.each(function() {
                    var i, e, a = t(this);

                    function s() {
                        switch (t(window).breakpoints("getBreakpoint")) {
                            case "xs":
                                i = Number(a.options.itemsXs);
                                break;
                            case "sm":
                                i = Number(a.options.itemsSm);
                                break;
                            case "md":
                                i = Number(a.options.itemsMd);
                                break;
                            case "lg":
                                i = Number(a.options.itemsLg);
                                break;
                            case "xl":
                                i = Number(a.options.items)
                        }
                    }
                    if (a.options = {
                            containerWidth: a.width(),
                            items: a.attr("data-items") || 4,
                            itemsLg: a.attr("data-items-lg"),
                            itemsMd: a.attr("data-items-md"),
                            itemsSm: a.attr("data-items-sm"),
                            itemsXs: a.attr("data-items-xs"),
                            margin: a.attr("data-margin") || 10,
                            cellSelector: a.attr("data-item") || !1,
                            prevNextButtons: 0 != a.data("arrows"),
                            pageDots: 0 != a.data("dots"),
                            fade: 1 == a.data("fade"),
                            draggable: 0 != a.data("drag"),
                            freeScroll: 1 == a.data("free-scroll"),
                            wrapAround: 0 != a.data("loop"),
                            groupCells: 1 == a.data("group-cells"),
                            autoPlay: a.attr("data-autoplay") || 5e3,
                            pauseAutoPlayOnHover: 0 != a.data("hoverpause"),
                            asNavFor: a.attr("data-navigation") || !1,
                            lazyLoad: 1 == a.data("lazy-load"),
                            initialIndex: a.attr("data-initial-index") || 0,
                            accessibility: 1 == a.data("accessibility"),
                            adaptiveHeight: 1 == a.data("adaptive-height"),
                            autoWidth: 1 == a.data("auto-width"),
                            setGallerySize: 0 != a.data("gallery-size"),
                            resize: 0 != a.data("resize"),
                            cellAlign: a.attr("data-align") || "left",
                            rightToLeft: INSPIRO.core.rtlStatus()
                        }, a.options.itemsLg = a.options.itemsLg || Math.min(Number(a.options.items), Number(4)), a.options.itemsMd = a.options.itemsMd || Math.min(Number(a.options.itemsLg), Number(3)), a.options.itemsSm = a.options.itemsSm || Math.min(Number(a.options.itemsMd), Number(2)), a.options.itemsXs = a.options.itemsXs || Math.min(Number(a.options.itemsSm), Number(1)), s(), a.find("> *").wrap('<div class="polo-carousel-item">'), a.hasClass("custom-height")) {
                        a.options.setGallerySize = !1, INSPIRO.core.customHeight(a), INSPIRO.core.customHeight(a.find(".polo-carousel-item"));
                        var o = !0
                    }
                    1 !== Number(a.options.items) ? a.options.autoWidth || o ? a.find(".polo-carousel-item").css({
                        "padding-right": a.options.margin + "px"
                    }) : (e = (a.options.containerWidth + Number(a.options.margin)) / i, a.find(".polo-carousel-item").css({
                        width: e,
                        "padding-right": a.options.margin + "px"
                    })) : a.find(".polo-carousel-item").css({
                        width: "100%",
                        "padding-right": "0 !important;"
                    }), (a.options.autoWidth || o) && (a.options.cellAlign = "center"), "false" == a.options.autoPlay && (a.options.autoPlay = !1), a.flickity({
                        cellSelector: a.options.cellSelector,
                        prevNextButtons: a.options.prevNextButtons,
                        pageDots: a.options.pageDots,
                        fade: a.options.fade,
                        draggable: a.options.draggable,
                        freeScroll: a.options.freeScroll,
                        wrapAround: a.options.wrapAround,
                        groupCells: a.options.groupCells,
                        autoPlay: a.options.autoPlay,
                        pauseAutoPlayOnHover: a.options.pauseAutoPlayOnHover,
                        adaptiveHeight: a.options.adaptiveHeight,
                        asNavFor: a.options.asNavFor,
                        initialIndex: a.options.initialIndex,
                        accessibility: a.options.accessibility,
                        setGallerySize: a.options.setGallerySize,
                        resize: a.options.resize,
                        cellAlign: a.options.cellAlign,
                        rightToLeft: a.options.rightToLeft,
                        contain: !0,
                        on: {
                            ready: function() {
                                a.addClass("carousel-loaded")
                            }
                        }
                    }), a.hasClass("custom-height") && INSPIRO.core.customHeight(a), 1 !== Number(a.options.items) && t(window).on("resize", function() {
                        setTimeout(function() {
                            s(), e = (a.width() + Number(a.options.margin)) / i, a.options.autoWidth || o ? a.find(".polo-carousel-item").css({
                                "padding-right": a.options.margin + "px"
                            }) : a.hasClass("custom-height") ? (INSPIRO.core.customHeight(a.find(".polo-carousel-item")), a.find(".polo-carousel-item").css({
                                width: e,
                                "padding-right": a.options.margin + "px"
                            })) : a.find(".polo-carousel-item").css({
                                width: e,
                                "padding-right": a.options.margin + "px"
                            }), a.find(".flickity-slider").css({
                                "margin-right": -a.options.margin / i + "px"
                            }), a.flickity("reposition")
                        }, 100)
                    })
                })
            }
        }
    }, INSPIRO.elements = {
        functions: function() {
            INSPIRO.elements.naTo(), INSPIRO.elements.morphext(), INSPIRO.elements.buttons(), INSPIRO.elements.accordion(), INSPIRO.elements.animations(), INSPIRO.elements.parallax(), INSPIRO.elements.backgroundImage(), INSPIRO.elements.shapeDivider(), INSPIRO.elements.responsiveVideos(), INSPIRO.elements.counters(), INSPIRO.elements.countdownTimer(), INSPIRO.elements.progressBar(), INSPIRO.elements.pieChart(), INSPIRO.elements.maps(), INSPIRO.elements.gridLayout(), INSPIRO.elements.tooltip(), INSPIRO.elements.popover(), INSPIRO.elements.magnificPopup(), INSPIRO.elements.yTPlayer(), INSPIRO.elements.vimeoPlayer(), INSPIRO.elements.modal(), INSPIRO.elements.sidebarFixed(), INSPIRO.elements.clipboard(), INSPIRO.elements.bootstrapSwitch(), INSPIRO.elements.countdown(), INSPIRO.elements.other(), INSPIRO.elements.videoBackground(), INSPIRO.elements.forms(), INSPIRO.elements.formValidation(), INSPIRO.elements.formAjaxProcessing(), INSPIRO.elements.wizard()
        },
        forms: function() {
            var i = t(".show-hide-password");
            i.length > 0 && i.each(function() {
                var i = t(this),
                    e = i.find(".input-group-append i"),
                    a = i.children("input");
                i.find(".input-group-append i").css({
                    cursor: "pointer"
                }), e.on("click", function(t) {
                    t.preventDefault(), "text" == i.children("input").attr("type") ? (a.attr("type", "password"), e.removeClass("icon-eye11"), e.addClass("icon-eye-off")) : "password" == i.children("input").attr("type") && (a.attr("type", "text"), e.addClass("icon-eye11"), e.removeClass("icon-eye-off"))
                })
            })
        },
        formValidation: function() {
            var t = document.getElementsByClassName("needs-validation");
            Array.prototype.filter.call(t, function(t) {
                t.addEventListener("submit", function(i) {
                    !1 === t.checkValidity() && (i.preventDefault(), i.stopPropagation()), t.classList.add("was-validated")
                }, !1)
            })
        },
        formAjaxProcessing: function() {
            var i = t(".widget-contact-form, .ajax-form");
            i.length > 0 && i.each(function() {
                var i = t(this),
                    e = i.attr("data-success-message") || "We have <strong>successfully</strong> received your Message and will get Back to you as soon as possible.",
                    a = i.attr("data-success-page"),
                    s = i.find("button#form-submit"),
                    o = s.html();
                Array.prototype.filter.call(i, function(t) {
                    t.addEventListener("submit", function(i) {
                        return !1 === t[0].checkValidity() && (i.preventDefault(), i.stopPropagation()), t.classList.add("was-validated"), !1
                    }, !1)
                });
                i.submit(function(n) {
                    n.preventDefault();
                    var r = t(this).attr("action"),
                        l = t(this).attr("method"),
                        d = t(this).serialize();
                    !1 === i[0].checkValidity() ? (n.stopPropagation(), i.addClass("was-validated")) : (t(i).removeClass("was-validated"), s.html('<i class="icon-loader fa-spin"> </i> Sending...'), t.ajax({
                        url: r,
                        type: l,
                        data: d,
                        success: function(n) {
                            if ("success" == n.response) i.find(".g-recaptcha").children("div").length > 0 && grecaptcha.reset(), t(i)[0].reset(), s.html(o), a ? window.location.href = a : t.notify({
                                message: e
                            }, {
                                type: "success"
                            });
                            else {
                                t.notify({
                                    message: i.attr("data-error-message") || n.message
                                }, {
                                    type: "danger"
                                });
                                setTimeout(function() {
                                    s.html(o)
                                }, 1e3)
                            }
                        }
                    }))
                })
            })
        },
        wizard: function() {},
        other: function(e) {
            t(function() {
                t(".lazy").Lazy({
                    afterLoad: function(t) {
                        t.addClass("img-loaded")
                    }
                })
            }), t(".toggle-item").length > 0 && t(".toggle-item").each(function() {
                var i = t(this),
                    e = i.attr("data-class"),
                    a = i.attr("data-target");
                i.on("click", function() {
                    return e && (a ? t(a).toggleClass(e) : i.toggleClass(e)), i.toggleClass("toggle-active"), !1
                })
            });
            var a = t(".p-dropdown");
            a.length > 0 && a.each(function() {
                var e = t(this);
                i.width() / 2 > e.offset().left && e.addClass("p-dropdown-invert")
            })
        },
        naTo: function() {
            t("a.scroll-to, #dotsMenu > ul > li > a, .menu-one-page nav > ul > li > a").on("click", function() {
                var i = 0,
                    a = 0;
                m <= 991 ? (o.find("#mainMenu").css("max-height", 0), e.toggleClass("mainMenu-open"), t("#mainMenu-trigger button").toggleClass("toggle-active"), !0 === o.attr("data-responsive-fixed") && (a = o.height())) : o.length > 0 && (a = o.height()), t(".dashboard").length > 0 && (i = 30);
                var s = t(this);
                return t("html, body").stop(!0, !1).animate({
                    scrollTop: t(s.attr("href")).offset().top - (a + i)
                }, 1500, "easeInOutExpo"), !1
            })
        },
        morphext: function() {
            var i = t(".text-rotator");
            if (i.length > 0) {
                if (void 0 === t.fn.Morphext) return INSPIRO.elements.notification("Warning", "jQuery Morphext plugin is missing in plugins.js file.", "danger"), !0;
                i.each(function() {
                    var i = t(this);
                    i.options = {
                        animation: i.attr("data-animation") || "fadeIn",
                        separator: i.attr("data-separator") || ",",
                        speed: i.attr("data-speed") || 2e3,
                        height: i.height()
                    }, i.css({
                        "min-height": i.options.height
                    }), i.Morphext({
                        animation: i.options.animation,
                        separator: i.options.separator,
                        speed: Number(i.options.speed)
                    })
                })
            }
        },
        buttons: function() {
            t(".btn-slide[data-width]") && t(".btn.btn-slide[data-width]").each(function() {
                var i, e = t(this),
                    a = e.attr("data-width");
                switch (!0) {
                    case e.hasClass("btn-lg"):
                        i = "60";
                        break;
                    case e.hasClass("btn-sm"):
                        i = "36";
                        break;
                    case e.hasClass("btn-xs"):
                        i = "28";
                        break;
                    default:
                        i = "48"
                }
                e.hover(function() {
                    t(this).css("width", a + "px")
                }, function() {
                    t(this).css("width", i + "px")
                })
            })
        },
        accordion: function() {
            var i = t(".ac-item");
            i.length && (i.each(function() {
                var i = t(this);
                i.hasClass("ac-active") ? i.addClass("ac-active") : i.find(".ac-content").hide()
            }), t(".ac-title").on("click", function(i) {
                var e = t(this),
                    a = e.parents(".ac-item"),
                    s = a.parents(".accordion");
                return a.hasClass("ac-active") ? s.hasClass("toggle") ? (a.removeClass("ac-active"), e.next(".ac-content").slideUp()) : (s.find(".ac-item").removeClass("ac-active"), s.find(".ac-content").slideUp()) : (s.hasClass("toggle") || (s.find(".ac-item").removeClass("ac-active"), s.find(".ac-content").slideUp("fast")), a.addClass("ac-active"), e.next(".ac-content").slideToggle("fast")), i.preventDefault(), !1
            }))
        },
        animations: function() {
            var i = t("[data-animate]");
            if (i.length > 0) {
                if ("undefined" == typeof Waypoint) return INSPIRO.elements.notification("Warning", "jQuery Waypoint plugin is missing in plugins.js file.", "danger"), !0;
                i.each(function() {
                    var i = t(this);
                    i.addClass("animated"), i.options = {
                        animation: i.attr("data-animate") || "fadeIn",
                        delay: i.attr("data-animate-delay") || 200,
                        direction: ~i.attr("data-animate").indexOf("Out") ? "back" : "forward",
                        offsetX: i.attr("data-animate-offsetX") || 0,
                        offsetY: i.attr("data-animate-offsetY") || -100
                    }, "forward" == i.options.direction ? new Waypoint({
                        element: i,
                        handler: function() {
                            setTimeout(function() {
                                i.addClass(i.options.animation + " visible")
                            }, i.options.delay);
                            this.destroy()
                        },
                        offset: "100%"
                    }) : (i.addClass("visible"), i.on("click", function() {
                        return i.addClass(i.options.animation), !1
                    })), i.parents(".demo-play-animations").length && i.on("click", function() {
                        i.removeClass(i.options.animation);
                        setTimeout(function() {
                            i.addClass(i.options.animation)
                        }, 50);
                        return !1
                    })
                })
            }
        },
        parallax: function() {
            var i = t("[data-bg-parallax]");
            if (i.length > 0) {
                if (void 0 === t.fn.scrolly) return INSPIRO.elements.notification("Warning", "jQuery scrolly plugin is missing in plugins.js file.", "danger"), !0;
                i.each(function() {
                    var i = t(this),
                        a = i.attr("data-bg-parallax"),
                        s = i.attr("data-velocity") || "-.140";
                    i.prepend('<div class="parallax-container" data-lazy-background="' + a + '"  data-velocity="' + s + '" style="background: url(' + a + ')"></div>'), t(".parallax-container").lazy({
                        attribute: "data-lazy-background",
                        afterLoad: function(t) {
                            i.find(".parallax-container").addClass("img-loaded")
                        }
                    }), e.hasClass("breakpoint-lg") || e.hasClass("breakpoint-xl") ? i.find(".parallax-container").scrolly({
                        bgParallax: !0
                    }) : i.find(".parallax-container").addClass("parallax-responsive")
                })
            }
        },
        backgroundImage: function() {
            var i = t("[data-bg-image]");
            i.length > 0 && i.each(function() {
                var i = t(this),
                    e = i.attr("data-bg-image");
                i.attr("data-lazy-background", e), i.lazy({
                    attribute: "data-lazy-background",
                    afterLoad: function(t) {
                        i.addClass("bg-loaded")
                    }
                })
            })
        },
        shapeDivider: function() {
            t(".shape-divider").each(function() {
                var i = t(this);
                switch (i.options = {
                    style: i.attr("data-style") || 1,
                    color: i.attr("data-color") || "#ffffff",
                    opacity: i.attr("data-opacity") || "1",
                    zIndex: i.attr("data-zIndex") || "0",
                    height: i.attr("data-height") || 210,
                    prefix: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MzAg"
                }, i.options.style) {
                    case "1":
                        i.options.style = i.options.prefix + "MTI1LjcyIj48dGl0bGU+QXNzZXQgMTc0PC90aXRsZT48cGF0aCBkPSJNMzk1LDk5LjM3Yy01Ny40MywxMC4xNy0xMjQuMjctOC4wNi0xNzYuOC0xMS43MnEzLjkzLjY0LDgsMS40MWM1MC44MSw2LDExMy4zLDI0LjA4LDE2OC43NiwxNC4yNkM0NjgsOTAuNDIsNTE5LjYsMTEuODgsNjMwLDguOVYwQzUwNS40Miw0LDQ2OCw4Ni40NywzOTUsOTkuMzdaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC4zMDAwMDAwMDAwMDAwMDAwNCIvPjxwYXRoIGQ9Ik0yMjYuMjUsODlDMjczLjg4LDk4LDMzOC4xNCwxMTkuMjksMzk1LDEwOS4yM2M3Mi45My0xMi45MSwxMjYuNjEtNzcuNDYsMjM1LTczLjQ4VjguODZjLTExMC40LDMtMTYyLDgxLjUxLTIzNSw5NC40MkMzMzkuNTUsMTEzLjEsMjc3LjA2LDk1LjA3LDIyNi4yNSw4OVoiIHN0eWxlPSJmaWxsOiNmZmY7b3BhY2l0eTowLjYzIi8+PHBhdGggZD0iTTYwLjgyLDEyMi44OCw2MiwxMjNhMzEuNDksMzEuNDksMCwwLDAsOS4zNC0uNjRBMTAxLjI2LDEwMS4yNiwwLDAsMSw2MC44MiwxMjIuODhaIiBzdHlsZT0iZmlsbDojZmZmIi8+PHBhdGggZD0iTTYwLjgyLDEyMi44OCw2MiwxMjNhMzEuNDksMzEuNDksMCwwLDAsOS4zNC0uNjRBMTAxLjI2LDEwMS4yNiwwLDAsMSw2MC44MiwxMjIuODhaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC4zNTAwMDAwMDAwMDAwMDAwMyIvPjxwYXRoIGQ9Ik0zOTgsMTA3Ljg0Yy01Ni4xNSwxMC4wNy0xMTkuNTktMTEuMjYtMTY2LjYyLTIwLjItMi43MS0uNTItNS4zNS0xLTcuOTQtMS40MUExNTkuNTQsMTU5LjU0LDAsMCwwLDIwMiw4NHEtMy4wOS0uMDktNiwwYy0uNzEsMC0xLjM5LjA4LTIuMDkuMTItNTIuOCwyLjkzLTgwLjM0LDI4Ljc4LTExMi45MSwzNi42MmE3Mi42Myw3Mi42MywwLDAsMS05LjY2LDEuNjJBMzEuNDksMzEuNDksMCwwLDEsNjIsMTIzbC0xLjE4LS4xM0MzMS4zNywxMjIuODUsMCwxMTEuODIsMCwxMTEuODJ2MTMuOUg2MzBWMzQuMzZDNTIzLDMwLjM5LDQ3MCw5NC45NCwzOTgsMTA3Ljg0WiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjxwYXRoIGQ9Ik0wLDEwMi4xNHYxMGM4MywzNCwxMjYuODMtMTQsMTkwLTI0bDEtNGMtNDQuNCw2LjI2LTQ1LDIyLTkzLDMxQzU0Ljc4LDEyMy4yNSwzMCwxMTMuMTQsMCwxMDIuMTRaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC4zMDAwMDAwMDAwMDAwMDAwNCIvPjxwYXRoIGQ9Ik0wLDEwNC4xNHYxMGMyMiw5LDQxLjIzLDEwLjI2LDU4LjgsMTAsNDguNzgtLjc2LDg0Ljc2LTI2LjY1LDEzMS4yLTM0bDEtNGMtNDQuNCw2LjI2LTQ1LDIyLTkzLDMxQzU0Ljc4LDEyNS4yNSwzMCwxMTUuMTQsMCwxMDQuMTRaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC4zMDAwMDAwMDAwMDAwMDAwNCIvPjwvc3ZnPg==";
                        break;
                    case "2":
                        i.options.style = i.options.prefix + "MTIwIj48dGl0bGU+QXNzZXQgMTY0PC90aXRsZT48cGF0aCBkPSJNNTY3LjY3LDMxLjE0Yy0yNi4yMiwxNy4zNi01MCwzNi41NS04MS44LDUwQzQzNy41MiwxMDEuNDgsMzc1LjUyLDEwNi4yMSwzMTcsMTAzLjIzcy0xMTUuNDItMTMtMTczLjE1LTE5LjU2Qzk2LjQ3LDc4LjI1LDQ3LjE4LDc1LjE4LDAsODAuMDd2MzIuNDFINjMwVjBDNjA2LjQ0LDcuNTIsNTg1Ljg5LDE5LjA5LDU2Ny42NywzMS4xNFoiIHN0eWxlPSJmaWxsOiNmZmY7b3BhY2l0eTowLjY0Ii8+PHBhdGggZD0iTTU2Ny42NywzOC42N2MtMjYuMjIsMTcuMzUtNTAsMzYuNTUtODEuOCw1MEM0MzcuNTIsMTA5LDM3NS41MiwxMTMuNzMsMzE3LDExMC43NXMtMTE1LjQyLTEzLTE3My4xNS0xOS41NkM5Ni40Nyw4NS43Nyw0Ny4xOCw4Mi43LDAsODcuNTlWMTIwSDYzMFY3LjUyQzYwNi40NCwxNSw1ODUuODksMjYuNjEsNTY3LjY3LDM4LjY3WiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==";
                        break;
                    case "3":
                        i.options.style = i.options.prefix + "NjAiPjx0aXRsZT5Bc3NldCAxNzI8L3RpdGxlPjxwYXRoIGQ9Ik0wLDAsNDAwLDUzLjIzLDYzMCwwVjYwSDBaIiBzdHlsZT0iZmlsbDojZmZmIi8+PC9zdmc+";
                        break;
                    case "4":
                        i.options.style = i.options.prefix + "ODAiPjx0aXRsZT40PC90aXRsZT48cGF0aCBkPSJNMjYxLjIsNjQuOUMzNjcuNiw1NC43LDQ5OS42LDM5LjcsNjMwLDE4LjVWMEM0OTcuOCwzMS40LDM2My43LDUyLDI2MS4yLDY0LjlaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC4zMDAwMDAwMDAwMDAwMDAwNCIvPjxwYXRoIGQ9Ik0yNjEuMiw2NC45Yy00MSwzLjktNzguMiw3LjEtMTEwLDkuNiwxMy4yLS40LDI3LS45LDQxLjUtMS42QzMxNSw2Ny43LDQ3OC40LDU5LjQsNjMwLDM0LjhWMTguNUM0OTkuMSwzOS44LDM2Ny4zLDU0LjgsMjYxLjIsNjQuOVoiIHN0eWxlPSJmaWxsOiNmZmY7b3BhY2l0eTowLjYwMDAwMDAwMDAwMDAwMDEiLz48cGF0aCBkPSJNMTkyLjcsNzIuOWMtMTQuNS43LTI4LjMsMS4yLTQxLjUsMS42QzU5LjksNzcuNywwLDc3LjQsMCw3Ny40VjgwSDYzMFYzMy44QzQ3OC40LDU4LjQsMzE1LDY3LjcsMTkyLjcsNzIuOVoiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=";
                        break;
                    case "5":
                        i.options.style = i.options.prefix + "MTAwIj48dGl0bGU+QXNzZXQgMTczPC90aXRsZT48cGF0aCBkPSJNMCw1Ni44NGwxMDgsMzlMNDY4LDAsNjMwLDY4LjQyVjEwMEgwWiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==";
                        break;
                    case "6":
                        i.options.style = i.options.prefix + "MTIwIj48dGl0bGU+NjwvdGl0bGU+PHBhdGggZD0iTTYxNS41LDIuNWMtNDEuMyw1LjgtNzcuNCwxMi43LTExNiwxMy43LTIyLjIuNi00NC44LTMuMy02Ny4yLjQtNDguOCw4LjEtMTA3LjgsNDMuNS0xNTcuNyw2Mi42LTQyLjQsMTYuMi02OS45LDE2LTk4LjcsMy44LTIxLjEtOS00Mi4xLTIyLjktNjUuMi0zMy4xLTI5LjQtMTMtNjIuNC0yNC4yLTk4LjktMTIuM2wtMS4xLjNMMCw0MS42VjUzLjhsMTAuNy0zLjYsMS4xLS40YzQyLjEtMTMuNyw2My4xLTUuNiw5OC45LDUuNiwyMi43LDcsNDQuMSwyMCw2NS4yLDI4LjksMzAuOSwxMy4xLDU1LjgsMTMsOTguNy0xLDQ5LjktMTYuNCwxMDguOS01MS44LDE1Ny43LTU5LjksMjIuNC0zLjcsNDUuMi00LjUsNjcuMi0uNCwzNy44LDcuMiw3NC43LDcuMSwxMTYsMS4zLDUtLjcsOS44LTEuNSwxNC41LTIuNVYwQzYyNS4zLDEsNjIwLjUsMS45LDYxNS41LDIuNVoiIHN0eWxlPSJmaWxsOiNmZmY7b3BhY2l0eTowLjM1MDAwMDAwMDAwMDAwMDAzIi8+PHBhdGggZD0iTTQ5OS41LDIzYy0yMi00LjEtNDQuOC0zLjMtNjcuMi40LTQ4LjgsOC4xLTEwNy44LDQzLjUtMTU3LjcsNTkuOS00Mi45LDE0LTY3LjgsMTQuMS05OC43LDEtMjEuMS04LjktNDIuNS0yMS45LTY1LjItMjguOUM3NC45LDQ0LjIsNTMuOSwzNi4xLDExLjgsNDkuOGwtMS4xLjRMMCw1My44VjYybDEwLjctMy42LDEuMS0uNGMzNi41LTExLjksNjguOC04LDk4LjksMS40LDIyLjcsNy4xLDQ0LjEsMTcuMyw2NS4yLDI2LjMsMjguOCwxMi4yLDU1LjcsMTIuOSw5OS4xLDIuOSw1Mi41LTEyLjEsMTA3LjEtNTEuNywxNTUuOS01OS44LDIyLjMtMy44LDQ2LjYtMS44LDY4LjYsMi40LDM3LjgsNy4xLDc0LjcsMjIsMTE2LDE2LjMsNS0uNyw5LjgtMS42LDE0LjUtMi42VjIxLjhjLTQuNywxLTkuNSwxLjgtMTQuNSwyLjVDNTc0LjIsMzAuMSw1MzcuMywzMC4yLDQ5OS41LDIzWiIgc3R5bGU9ImZpbGw6I2ZmZjtvcGFjaXR5OjAuNSIvPjxwYXRoIGQ9Ik00OTkuNSwzMS4yYy0yMi00LjItNDYuMy02LjItNjguNi0yLjRDMzgyLjEsMzYuOSwzMjcuNSw3Ni41LDI3NSw4OC42Yy00My40LDEwLTcwLjMsOS4zLTk5LjEtMi45LTIxLjEtOS00Mi41LTE5LjItNjUuMi0yNi4zQzgwLjYsNTAsNDguMyw0Ni4xLDExLjgsNThsLTEuMS40TDAsNjJ2NThINjMwVjQ0LjljLTQuNywxLTkuNSwxLjktMTQuNSwyLjZDNTc0LjIsNTMuMiw1MzcuMywzOC4zLDQ5OS41LDMxLjJaIiBzdHlsZT0iZmlsbDojZmZmIi8+PC9zdmc+";
                        break;
                    case "7":
                        i.options.style = i.options.prefix + "MTIwIj48dGl0bGU+QXNzZXQgMTc0PC90aXRsZT48cGF0aCBkPSJNMCwwLDYzMCwxMjBIMFoiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=";
                        break;
                    case "8":
                        i.options.style = i.options.prefix + "MTIwIj48dGl0bGU+ODwvdGl0bGU+PHBhdGggZD0iTTQ1Ni43LDUzLjZDNDM5LjgsNDIuOSwzOTYuOSwxLjgsMzQzLjIsMzAuMWMtMzUuNywxOC43LTg0LDcxLjUtMTI3LjgsNzEuOS0zNi4xLjMtNTcuOC0yMC4yLTgxLjQtMzUuMS0xNy4zLTExLTM1LTIzLjUtNTMuNi0zMi4yQzU1LjYsMjMuMiwzMCwxMS44LjEsMjYuNGMtLjMuMSwwLDkzLjYsMCw5My42SDYzMFYzMS44Yy0zLjksMS4zLTEzLDE3LjMtNjUuMiwzMi44QzUzMy4zLDc2LjQsNDkyLjQsNzYuNCw0NTYuNyw1My42WiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjxnIHN0eWxlPSJvcGFjaXR5OjAuMzgiPjxwYXRoIGQ9Ik02MTEsNjMuNmwtMiw0Mi44LTUyNy45LDUtODEtMS4xVjYxLjhhMTk0LjcsMTk0LjcsMCwwLDAsMjQuNyw5LjQsMTQ2LjgsMTQ2LjgsMCwwLDAsNDMuOSw2LjJDOTQuNiw3Ny4zLDEyMC41LDY1LDE0Niw1MC41YzE4LjctMTAuNiwzNy4xLTIyLjMsNTUuMi0zMS4zQzIxMy43LDEyLjksMjI2LDgsMjM4LjEsNS43YzI0LjMtNC42LDUxLjQtMy4yLDcyLjUsNy45bDM2LjcsMTkuNmMzNy4zLDE5LjksNzMuMSwzOC45LDEwNC4yLDUxLjdDNDY1LjQsOTAuNiw0NzguMyw5NS4yLDQ5MCw5OGMxMy4zLDMuMywyNS4xLDQuNSwzNSwyLjlhNzUuNSw3NS41LDAsMCwwLDkuMy0zLjdsNy40LTMuM2MxNS40LTcuMSwzOC44LTE5LjEsNTkuNi0zMy4yLDUuNS0zLjcuNi40LDUuNy0zLjRDNjE5LDQ4LjIsNjA4LjcsNjQuMiw2MTEsNjMuNloiIHN0eWxlPSJmaWxsOiNmZmYiLz48L2c+PHBhdGggZD0iTTU4MS44LDExLjRDNTUyLC4yLDUzMS41LDMuOSw1MDcuMiw4LjQsNDcyLjEsMTUsNDM0LjcsNDQuMSwzOTYuNiw2My4yYy0xNi4zLDguMS0zMi44LDE0LjQtNDkuMiwxNi4zLTE1LjgtNS40LTMyLTEyLjItNDcuNi0xOS4yLTM3LjktMTcuMS03Mi42LTM1LjctOTEuOS0zOS44bC02LjctMS4zYy0yMi4yLTQuMi00NS45LTUuOC02Ny45LTEuNy0xMC40LDItMjEsNS45LTMxLjgsMTFDNzYuNiw0MC4yLDUwLjksNTcuOSwyNC44LDcxLjJBMjEzLjYsMjEzLjYsMCwwLDEsLjEsODIuMXYzMC44bDgxLTEuNSwzMTIuMy01LjcsMS40LjNMNjMwLDExMS44di04MEM2MTMsMjYuNCw2MTkuMywyNS41LDU4MS44LDExLjRaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC40OSIvPjxnIHN0eWxlPSJvcGFjaXR5OjAuMzgiPjxwYXRoIGQ9Ik01NDUuNCw5N2wtMTEuMS4yTDQ5MCw5OCwuMSwxMDcuMVYwQzIxLjMtLjQsNDEuMyw0LjEsNjAuNCwxMC44YTQwMy43LDQwMy43LDAsMCwxLDQxLjEsMTcuN2MxMCw0LjksMTkuOSw5LjksMjkuNywxNC42LDUsMi4zLDkuOSw0LjksMTQuOCw3LjQsMjYuMSwxMy41LDUyLjcsMjgsOTIuOSwyNy44LDIwLjMtLjEsNDAuNy03LjcsNjAuOS0xOCwxNi04LjIsMzEuOS0xOCw0Ny41LTI3LjEsMjAuOS0xMi4xLDQxLjMtMjIuOSw2MC45LTI2LjZDNDMyLjUsMiw0ODEuMSw4LjYsNTA0LDE4czQ5LjYsMjMuNiw5Ny4zLDQyLjdDNjIwLjIsNjguNCw1NDUuNCw5Nyw1NDUuNCw5N1oiIHN0eWxlPSJmaWxsOiNmZmYiLz48L2c+PC9zdmc+";
                        break;
                    case "9":
                        i.options.style = i.options.prefix + "MTAwIj48dGl0bGU+QXNzZXQgMTgyPC90aXRsZT48cGF0aCBkPSJNMCw0NS42NVMxNTksMCwzMjIsMCw2MzAsNDUuNjUsNjMwLDQ1LjY1VjEwMEgwWiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==";
                        break;
                    case "10":
                        i.options.style = i.options.prefix + "MTIwIj48dGl0bGU+MTA8L3RpdGxlPjxwYXRoIGQ9Ik0wLDEwOC4xSDYzMFYwUzQ3NSwxMDQuNiwzMTQsMTA0LjYsMCwwLDAsMFoiIHN0eWxlPSJmaWxsOiNmZmY7b3BhY2l0eTowLjIyIi8+PHBhdGggZD0iTTAsMTA2LjlINjMwVjE3LjhzLTE1NSw4Ny45LTMxNiw4Ny45UzAsMTksMCwxOVoiIHN0eWxlPSJmaWxsOiNmZmY7b3BhY2l0eTowLjM2Ii8+PHBhdGggZD0iTTAsMTIwSDYzMFY0NS4xcy0xNTUsNjEuOC0zMTYsNjEuOFMwLDQ1LjEsMCw0NS4xWiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==";
                        break;
                    case "11":
                        i.options.style = i.options.prefix + "MTIwIj48dGl0bGU+MTE8L3RpdGxlPjxwYXRoIGQ9Ik01MTAuNywyLjljLTk4LjksMjEuOS0yMjIuMyw4NS41LTMyMiw4NS41QzgwLjEsODguNCwyNC4xLDU2LjEsMCwzNi40VjEyMEg2MzBWMTUuMkM2MDIuNCw2LjksNTUwLjEtNS44LDUxMC43LDIuOVoiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=";
                        break;
                    case "12":
                        i.options.style = i.options.prefix + "MTIwIj48dGl0bGU+MTI8L3RpdGxlPjxwYXRoIGQ9Ik02MzAsMzQuNWE1NCw1NCwwLDAsMS05LDIuM0M1NzguMyw0Ni4xLDU1Ni4xLDI0LDUxNy4yLDEyLjVjLTIyLjktNi43LTQ3LjktOS44LTcxLTMuOUMzOTUuOCwyMS43LDM0MC4zLDEwMiwyODUuMSwxMDIuNGMtNDUuNC4zLTcyLjYtMjYuNS0xMDIuMy00Ni4xLTIxLjgtMTQuNC00NC0zMC44LTY3LjQtNDIuMUM4NC4yLS45LDUwLjktNy4yLDEzLjIsMTEuOGwtMS4yLjZjLTMuNSwxLjktOC4yLDMuOS0xMiw1LjlWMTIwSDYzMFoiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=";
                        break;
                    case "13":
                        i.options.style = i.options.prefix + "OTAiPjx0aXRsZT4xMzwvdGl0bGU+PHBhdGggZD0iTTYzMCw5MEgxTDAsMFMxMzEsNzYuNiwzNjYsMzQuMmMxMjAtMjEuNywyNjQsNC41LDI2NCw0LjVaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC4xNiIvPjxwYXRoIGQ9Ik0xLDkwSDYzMFYwUzQ4OSw3NC4zLDI1NCwzMS45QzEzNCwxMC4zLDAsMzMsMCwzM1oiIHN0eWxlPSJmaWxsOiNmZmY7b3BhY2l0eTowLjIiLz48cGF0aCBkPSJNMCw5MEg2MzBWMTguMlM0NzUsNzcuNSwzMTQsNzcuNSwwLDE4LjIsMCwxOC4yWiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==";
                        break;
                    case "14":
                        i.options.style = i.options.prefix + "NjAiPjx0aXRsZT5Bc3NldCAxNzg8L3RpdGxlPjxwYXRoIGQ9Ik0wLDAsMTEzLDE5LDU4MiwyOS40Nyw2MzAsMFY2MEgwWiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg==";
                        break;
                    case "15":
                        i.options.style = i.options.prefix + "ODAiPjx0aXRsZT5Bc3NldCAxNzc8L3RpdGxlPjxwYXRoIGQ9Ik0zMTUsMCw2MzAsODBIMFoiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=";
                        break;
                    case "16":
                        i.options.style = i.options.prefix + "ODAiPjx0aXRsZT4xNjwvdGl0bGU+PHBhdGggZD0iTTAsODBTMjA4LDAsMzE1LDAsNjMwLDgwLDYzMCw4MFoiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=";
                        break;
                    case "17":
                        i.options.style = i.options.prefix + "MTIwIj48dGl0bGU+MTc8L3RpdGxlPjxwYXRoIGQ9Ik0zMjAsMTZjODguNCwyLDMxMCwxMDQsMzEwLDEwNFM1NjkuNiw4Ny4zLDQ5OS41LDU2Yy0xOS43LTguOC00MC4xLTE3LjUtNjAuMi0yNS4zQzM5NS4yLDEzLjYsMzUyLjcuNywzMjQsMCwyMzUtMiwwLDEyMCwwLDEyMGwxNC4xLTUuNUM2Mi41LDkyLjgsMjQzLjMsMTQuMywzMjAsMTZaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC4zMSIvPjxwYXRoIGQ9Ik0xNC4xLDExNC41QzY0LjksOTUsMjM5LjQsMzAuMywzMTUsMzJjODguNCwyLDMxNSw4OCwzMTUsODhTNDA4LjQsMTgsMzIwLDE2QzI0My4zLDE0LjMsNjIuNSw5Mi44LDE0LjEsMTE0LjVaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC40MyIvPjxwYXRoIGQ9Ik0xNC4xLDExNC41QzY0LjksOTUsMjM5LjQsMzAuMywzMTUsMzJjODguNCwyLDMxNSw4OCwzMTUsODhTNDA4LjQsMTgsMzIwLDE2QzI0My4zLDE0LjMsNjIuNSw5Mi44LDE0LjEsMTE0LjVaIiBzdHlsZT0iZmlsbDojZmZmO29wYWNpdHk6MC4zMSIvPjxwYXRoIGQ9Ik0zMTUsMzJDMjM5LjQsMzAuMyw2NC45LDk1LDE0LjEsMTE0LjVMMiwxMjBINjMwUzQwMy40LDM0LDMxNSwzMloiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=";
                        break;
                    case "18":
                        i.options.style = i.options.prefix + "NDAiPjx0aXRsZT5Bc3NldCAxNzk8L3RpdGxlPjxwYXRoIGQ9Ik0wLDE4LjEsNTMsMS45LDEwMywyMGw1OS05LjUyLDU2LDE1LjIzLDcyLTcuNjEsNDYsNC43NiwzNC00Ljc2LDM2LDguNTcsNzYtMTksODUsMTUuMjRMNjMwLDBWMzcuMTRIMFoiIHN0eWxlPSJmaWxsOiNmZmY7b3BhY2l0eTowLjQ3MDAwMDAwMDAwMDAwMDAzIi8+PHBhdGggZD0iTTAsMjAsNTMsMy44MSwxMDMsMjEuOWw1OS05LjUyLDU2LDE1LjI0TDI5MCwyMGw0Niw0Ljc2TDM3MCwyMGwzNiw5LjUyLDc2LTE3LjE0LDg1LDE2LjE5LDYzLTE2LjE5VjQwSDBaIiBzdHlsZT0iZmlsbDojZmZmIi8+PC9zdmc+";
                        break;
                    case "19":
                        i.options.style = i.options.prefix + "ODAiPjx0aXRsZT4xOTwvdGl0bGU+PHBhdGggZD0iTTYzMCwzNi45YTM0LjYsMzQuNiwwLDAsMC0xNi41LTQuMmMtMTcuMiwwLTMxLjgsMTIuNy0zNi43LDMwLjNhMjEuMiwyMS4yLDAsMCwwLTkuMy0yLjIsMjEuOCwyMS44LDAsMCwwLTEzLjksNS4xLDM4LjcsMzguNywwLDAsMC00MC40LTQuOGMtNS4yLTcuNy0xMy40LTEyLjYtMjIuNy0xMi42YTI1LjcsMjUuNywwLDAsMC04LjcsMS41QzQ3Mi45LDI3LjgsNDUzLDEyLjQsNDMwLDEyLjRzLTQyLjcsMTUuMy01MS43LDM3LjJjLTcuMi0xMC45LTE4LjgtMTguMS0zMS44LTE4LjFhMzcsMzcsMCwwLDAtMjQsOS4yYy02LTEwLjMtMTYuMy0xNy0yOC0xNy0xMy44LDAtMjUuNiw5LjMtMzAuNywyMi43QTI2LjUsMjYuNSwwLDAsMCwyNDQsMzcuMmEyMiwyMiwwLDAsMC01LjguN2MtNC0xMS42LTE0LTE5LjktMjUuNy0xOS45YTI0LjcsMjQuNywwLDAsMC05LjQsMS45QzE4OS4yLDcuNCwxNzEuNiwwLDE1Mi41LDAsMTI0LjYsMCwxMDAsMTUuOCw4NS4zLDM5LjlBMjcuNiwyNy42LDAsMCwwLDYzLDI4LjJhMjMuOSwyMy45LDAsMCwwLTcuMSwxQzQ3LjIsMTMsMzEuNSwyLjMsMTMuNSwyLjNBNDMuMyw0My4zLDAsMCwwLDAsNC40VjgwSDYzMFoiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=";
                        break;
                    case "20":
                        i.options.style = i.options.prefix + "MTAwIj48dGl0bGU+QXNzZXQgMTgwPC90aXRsZT48cGF0aCBkPSJNNjMwLDYwLjgyVjEwMEgwVjk1Ljg4bDExLjkxLTYuNDlMODQsNDMuMzRsMzYuNDksMjQuNDVMMTYwLDQ2LDIzMi4wNSwwbDQ5LjA3LDMyLjg5LDM0LjA3LDI5LjU5LDY4LjI5LDI3Ljc1TDQyMyw2NWw0Mi4yLDI4LjI5LDE4LjM5LTE2LDQ5LjA3LTMyLjg5TDU5NCw4My42MSw2MjgsNjEuOVoiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4="
                }
                var a = atob(i.options.style),
                    s = document.createElement("div");
                s.innerHTML = a;
                var o = s.firstChild,
                    n = o.getElementsByTagName("path");
                [].forEach.call(n, function(t) {
                    t.style.fill = i.options.color
                }), e.hasClass("b--desktop") ? (o.setAttribute("preserveAspectRatio", "none"), i.options.height ? o.setAttribute("style", "height:" + i.options.height + "px") : o.setAttribute("style", "height:" + o.height.baseVal.value + "px")) : o.setAttribute("preserveAspectRatio", "xMidYMid meet"), t(".shape-divider svg title").remove(), i.css({
                    "z-index": i.options.zIndex,
                    opacity: i.options.opacity
                }), i.append(o)
            })
        },
        responsiveVideos: function() {
            var i = t("section, .content, .post-content, .video-js, .post-video, .video-wrap, .ajax-quick-view,#slider:not(.revslider-wrap)").find(['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"].join(","));
            i && i.each(function() {
                t(this).wrap('<div class="embed-responsive embed-responsive-16by9"></div>')
            })
        },
        counters: function() {
            var i = t(".counter");
            if (i.length > 0) {
                if (void 0 === t.fn.countTo) return INSPIRO.elements.notification("Warning", "jQuery countTo plugin is missing in plugins.js file.", "danger"), !0;
                i.each(function() {
                    var i = t(this),
                        e = i.find("span").attr("data-prefix") || "",
                        a = i.find("span").attr("data-suffix") || "";
                    new Waypoint({
                        element: i,
                        handler: function() {
                            i.find("span").countTo({
                                refreshInterval: 2,
                                formatter: function(t, i) {
                                    return String(e) + t.toFixed(i.decimals) + String(a)
                                }
                            }), this.destroy()
                        },
                        offset: "104%"
                    })
                })
            }
        },
        countdownTimer: function() {
            if (t(".countdown").length > 0) {
                if (void 0 === t.fn.countdown) return INSPIRO.elements.notification("Warning", "jQuery countdown plugin is missing in plugins.js file.", "danger"), !0;
                t("[data-countdown]").each(function() {
                    var i = t(this),
                        e = t(this).attr("data-countdown");
                    i.countdown(e, function(t) {
                        i.html(t.strftime('<div class="countdown-container"><div class="countdown-box"><div class="number">%-D</div><span>Day%!d</span></div><div class="countdown-box"><div class="number">%H</div><span>Hours</span></div><div class="countdown-box"><div class="number">%M</div><span>Minutes</span></div><div class="countdown-box"><div class="number">%S</div><span>Seconds</span></div></div>'))
                    })
                })
            }
        },
        progressBar: function() {
            var i = t(".p-progress-bar") || t(".progress-bar");
            i.length > 0 && i.each(function(i, a) {
                var s = t(this),
                    o = s.attr("data-percent") || "100",
                    n = s.attr("data-delay") || "60",
                    r = s.attr("data-type") || "%";
                s.hasClass("progress-animated") || s.css({
                    width: "0%"
                });
                var l = function() {
                    s.animate({
                        width: o + "%"
                    }, "easeInOutCirc").addClass("progress-animated"), s.delay(n).append('<span class="progress-type">' + r + '</span><span class="progress-number animated fadeIn">' + o + "</span>")
                };
                e.hasClass("breakpoint-lg") || e.hasClass("breakpoint-xl") ? new Waypoint({
                    element: t(a),
                    handler: function() {
                        setTimeout(function() {
                            l()
                        }, n);
                        this.destroy()
                    },
                    offset: "100%"
                }) : l()
            })
        },
        pieChart: function() {
            var i = t(".pie-chart");
            if (i.length > 0) {
                if (void 0 === t.fn.easyPieChart) return INSPIRO.elements.notification("Warning", "jQuery easyPieChart plugin is missing in plugins.js file.", "danger"), !0;
                i.each(function() {
                    var i = t(this);
                    i.options = {
                        barColor: i.attr("data-color") || "#2250fc",
                        trackColor: i.attr("data-trackcolor") || "rgba(0,0,0,0.10)",
                        scaleColor: i.attr("data-scaleColor") || !1,
                        scaleLength: i.attr("data-scaleLength") || 5,
                        lineCap: i.attr("data-lineCap") || "square",
                        lineWidth: i.attr("data-lineWidth") || 6,
                        size: i.attr("data-size") || 160,
                        rotate: i.attr("data-rotate") || 0,
                        animate: i.attr("data-animate") || 2600,
                        elemEasing: i.attr("data-easing") || "easeInOutExpo"
                    }, i.find("span, i").css({
                        width: i.options.size + "px",
                        height: i.options.size + "px",
                        "line-height": i.options.size + "px"
                    }), new Waypoint({
                        element: i,
                        handler: function() {
                            i.easyPieChart({
                                barColor: i.options.barColor,
                                trackColor: i.options.trackColor,
                                scaleColor: i.options.scaleColor,
                                scaleLength: i.options.scaleLength,
                                lineCap: i.options.lineCap,
                                lineWidth: Number(i.options.lineWidth),
                                size: Number(i.options.size),
                                rotate: Number(i.options.rotate),
                                animate: Number(i.options.animate),
                                elemEasing: i.options.elemEasing,
                                onStep: function(t, e, a) {
                                    i.find("span.percent").text(Math.round(a))
                                }
                            }), this.destroy()
                        },
                        offset: "100%"
                    })
                })
            }
        },
        maps: function() {
            var i = t(".map");
            if (i.length > 0) {
                if (void 0 === t.fn.gmap3) return INSPIRO.elements.notification("Warning", "jQuery gmap3 plugin is missing, please go to this <a href='//support.inspirothemes.com/help-center/articles/8/14/65/google-maps'>help article</a> and follow instructions on how to configure google maps.", "danger"), !0;
                i.each(function() {
                    var i, e = t(this);
                    e.options = {
                        latitude: e.attr("data-latitude") || "-37.817240",
                        longitude: e.attr("data-longitude") || "144.955820",
                        info: e.attr("data-info"),
                        maptype: e.attr("data-type") || "ROADMAP",
                        zoom: e.attr("data-zoom") || 14,
                        icon: e.attr("data-icon"),
                        mapColor: e.attr("data-style") || null
                    }, window.MAPS && (i = e.options.mapColor ? MAPS[e.options.mapColor] : null), e.gmap3({
                        center: [Number(e.options.latitude), Number(e.options.longitude)],
                        zoom: Number(e.options.zoom),
                        mapTypeId: google.maps.MapTypeId[e.options.maptype],
                        scrollwheel: !1,
                        zoomControl: !0,
                        mapTypeControl: !1,
                        streetViewControl: !0,
                        fullscreenControl: !0,
                        styles: i
                    }), e.options.icon ? e.gmap3().marker({
                        position: [Number(e.options.latitude), Number(e.options.longitude)],
                        icon: e.options.icon
                    }) : e.gmap3().marker({
                        position: [Number(e.options.latitude), Number(e.options.longitude)],
                        icon: " "
                    }).overlay({
                        position: [Number(e.options.latitude), Number(e.options.longitude)],
                        content: '<div class="animated-dot"></div>'
                    }), e.options.info && e.gmap3().infowindow({
                        position: [Number(e.options.latitude), Number(e.options.longitude)],
                        content: e.options.info,
                        pixelOffset: new google.maps.Size(0, -10)
                    }).then(function(t) {
                        var i = this.get(0);
                        this.get(1).addListener("click", function() {
                            t.open(i)
                        })
                    })
                })
            }
        },
        gridLayout: function() {
            if (p.length > 0) {
                if (void 0 === t.fn.isotope) return INSPIRO.elements.notification("Warning", "jQuery isotope plugin is missing in plugins.js file.", "danger"), !0;
                var e;
                e = !INSPIRO.core.rtlStatus(), p.each(function() {
                    var a = t(this);
                    if (a.options = {
                            itemSelector: a.attr("data-item") || "portfolio-item",
                            layoutMode: a.attr("data-layout") || "masonry",
                            filter: a.attr("data-default-filter") || "*",
                            stagger: a.attr("data-stagger") || 0,
                            autoHeight: 0 != a.data("auto-height"),
                            gridMargin: a.attr("data-margin") || 20,
                            gridMarginXs: a.attr("data-margin-xs"),
                            transitionDuration: a.attr("data-transition") || "0.45s",
                            isOriginLeft: e
                        }, t(window).breakpoints("lessThan", "lg", function() {
                            a.options.gridMargin = a.options.gridMarginXs || a.options.gridMargin
                        }), a.css("margin", "0 -" + a.options.gridMargin + "px -" + a.options.gridMargin + "px 0"), a.find("." + a.options.itemSelector).css("padding", "0 " + a.options.gridMargin + "px " + a.options.gridMargin + "px 0"), a.attr("data-default-filter")) {
                        var s = a.options.filter;
                        a.options.filter = "." + a.options.filter
                    }
                    a.append('<div class="grid-loader"></div>'), a.imagesLoaded().always(function() {
                        a.isotope({
                            layoutMode: a.options.layoutMode,
                            transitionDuration: a.options.transitionDuration,
                            stagger: Number(a.options.stagger),
                            itemSelector: "." + a.options.itemSelector + ":not(.grid-loader)",
                            isOriginLeft: a.options.isOriginLeft,
                            autoHeight: a.options.autoHeight,
                            masonry: {
                                columnWidth: a.find("." + a.options.itemSelector + ":not(.large-width)")[0]
                            },
                            filter: a.options.filter
                        }).isotope("layout"), a.on("layoutComplete", function(t, i) {
                            a.remove(".grid-loader").addClass("grid-loaded")
                        })
                    }), t(window).on("resize", function() {
                        setTimeout(function() {
                            INSPIRO.elements.gridLayoutRefresh()
                        }, 200)
                    }), a.next().hasClass("infinite-scroll") && INSPIRO.elements.gridLayoutInfinite(a, a.options.itemSelector, a.options.gridMargin), M.length > 0 && M.each(function() {
                        var e = t(this),
                            o = e.find("a"),
                            n = e.attr("data-layout");
                        if (o.on("click", function() {
                                e.find("li").removeClass("active"), t(this).parent("li").addClass("active");
                                var a = t(this).attr("data-category");
                                return t(n).isotope({
                                    filter: a
                                }).on("layoutComplete", function() {
                                    i.trigger("scroll")
                                }), t(".grid-active-title").length > 0 && t(".grid-active-title").empty().append(t(this).text()), !1
                            }), s) {
                            var r = e.find(t('[data-category="' + a.options.filter + '"]'));
                            e.find("li").removeClass("active"), r.parent("li").addClass("active")
                        } else {
                            (r = e.find(t('[data-category="*"]'))).parent("li").addClass("active")
                        }
                    })
                })
            }
        },
        gridLayoutRefresh: function(i) {
            i || (i = p), i.length > 0 && i.each(function() {
                var i = t(this);
                setTimeout(function() {
                    i.isotope("layout")
                }, 300)
            })
        },
        gridLayoutInfinite: function(i, e, a) {
            if (void 0 === t.fn.infiniteScroll) return INSPIRO.elements.notification("Warning", "jQuery infiniteScroll plugin is missing, please add this code line <b> &lt;script src=&quot;plugins/metafizzy/infinite-scroll.min.js&quot;&gt;&lt;/script&gt;</b>, before <b>plugins.js</b>", "danger"), !0;
            var s = i,
                o = e,
                n = a,
                r = !0,
                l = 500,
                d = !0,
                c = t("#showMore"),
                u = t("#showMore a.btn"),
                p = t("#showMore a.btn").html(),
                M = t('<div class="infinite-scroll-message"><p class="animated visible fadeIn">No more posts to show</p></div>');
            if ((m = t(".infinite-scroll > a").attr("href")).indexOf(".html") > -1) var m = m.replace(/(-\d+)/g, "-{{#}}");
            c.length > 0 && (r = !1, l = !1, d = !1), s.infiniteScroll({
                path: m,
                append: "." + o,
                history: !1,
                button: "#showMore a",
                scrollThreshold: l,
                loadOnScroll: r,
                prefill: d
            }), s.on("load.infiniteScroll", function(i, e, a, n) {
                var r = t(e).find("." + o);
                r.imagesLoaded(function() {
                    s.append(r), s.isotope("insert", r)
                })
            }), s.on("error.infiniteScroll", function(i, e, a) {
                c.addClass("animated visible fadeOut");
                setTimeout(function() {
                    c.hide(), s.after(M)
                }, 500), setTimeout(function() {
                    t(".infinite-scroll-message").addClass("animated visible fadeOut")
                }, 3e3)
            }), s.on("append.infiniteScroll", function(e, a, s, r) {
                INSPIRO.slider.carousel(t(r).find(".carousel")), u.html(p), i.css("margin", "0 -" + n + "px -" + n + "px 0"), i.find("." + o).css("padding", "0 " + n + "px " + n + "px 0")
            })
        },
        tooltip: function() {
            var i = t('[data-toggle="tooltip"]');
            if (i.length > 0) {
                if (void 0 === t.fn.tooltip) return INSPIRO.elements.notification("Warning: jQuery tooltip plugin is missing in plugins.js file.", "warning"), !0;
                i.tooltip()
            }
        },
        popover: function() {
            var i = t('[data-toggle="popover"]');
            if (i.length > 0) {
                if (void 0 === t.fn.popover) return INSPIRO.elements.notification("Warning: jQuery popover plugin is missing in plugins.js file.", "warning"), !0;
                i.popover({
                    container: "body",
                    html: !0
                })
            }
        },
        magnificPopup: function() {
            var i = t("[data-lightbox]");
            if (i.length > 0) {
                if (void 0 === t.fn.magnificPopup) return INSPIRO.elements.notification("Warning", "jQuery magnificPopup plugin is missing in plugins.js file.", "danger"), !0;
                var e = {
                    image: {
                        type: "image",
                        closeOnContentClick: !0,
                        removalDelay: 500,
                        image: {
                            verticalFit: !0
                        },
                        callbacks: {
                            beforeOpen: function() {
                                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = "mfp-zoom-out"
                            }
                        }
                    },
                    gallery: {
                        delegate: 'a[data-lightbox="gallery-image"], a[data-lightbox="image"]',
                        type: "image",
                        image: {
                            verticalFit: !0
                        },
                        gallery: {
                            enabled: !0,
                            navigateByImgClick: !0,
                            preload: [0, 1]
                        },
                        removalDelay: 500,
                        callbacks: {
                            beforeOpen: function() {
                                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = "mfp-zoom-out"
                            }
                        }
                    },
                    iframe: {
                        type: "iframe",
                        removalDelay: 500,
                        callbacks: {
                            beforeOpen: function() {
                                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = "mfp-zoom-out"
                            }
                        }
                    },
                    ajax: {
                        type: "ajax",
                        removalDelay: 500,
                        callbacks: {
                            ajaxContentAdded: function(t) {
                                INSPIRO.slider.carouselAjax(), INSPIRO.elements.responsiveVideos(), INSPIRO.elements.buttons()
                            }
                        }
                    },
                    inline: {
                        type: "inline",
                        removalDelay: 500,
                        callbacks: {
                            beforeOpen: function() {
                                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = "mfp-zoom-out"
                            }
                        },
                        closeBtnInside: !1,
                        fixedContentPos: !0,
                        overflowY: "scroll"
                    }
                };
                i.each(function() {
                    var i = t(this);
                    switch (i.attr("data-lightbox")) {
                        case "image":
                            i.magnificPopup(e.image);
                            break;
                        case "gallery":
                            i.magnificPopup(e.gallery);
                            break;
                        case "iframe":
                            i.magnificPopup(e.iframe);
                            break;
                        case "ajax":
                            i.magnificPopup(e.ajax);
                            break;
                        case "inline":
                            i.magnificPopup(e.inline)
                    }
                })
            }
        },
        yTPlayer: function() {
            var i = t(".youtube-background");
            if (i.length > 0) {
                if (void 0 === t.fn.YTPlayer) return INSPIRO.elements.notification("Warning", "jQuery YTPlayer plugin is missing, please add this code line <b> &lt;script src=&quot;plugins/youtube-player/jquery.mb.YTPlayer.min.js&quot;&gt;&lt;/script&gt;</b>, before <b><--Template functions--\x3e</b>", "danger", 1e4), !0;
                i.each(function() {
                    var i = t(this);
                    i.options = {
                        videoURL: i.attr("data-youtube-url"),
                        autoPlay: 0 == i.data("youtube-autoplay") ? 0 : 1,
                        mute: 0 != i.data("youtube-mute"),
                        pauseOnScroll: 0 != i.data("youtube-pauseOnScroll"),
                        loop: 0 != i.data("youtube-loop"),
                        vol: i.attr("data-youtube-volume") || 50,
                        startAt: i.attr("data-youtube-start") || 0,
                        stopAt: i.attr("data-youtube-stop") || 0,
                        controls: 1 == i.data("youtube-controls") ? 1 : 0
                    };
                    var e = i.options.videoURL.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
                    e && 11 == e[2].length ? i.options.videoURL = e[2] : i.options.videoURL = i.options.videoURL, i.YTPlayer({
                        fitToBackground: !0,
                        videoId: i.options.videoURL,
                        repeat: i.options.loop,
                        playerVars: {
                            start: i.options.start,
                            end: i.options.end,
                            autoplay: i.options.autoPlay,
                            modestbranding: i.options.logo,
                            controls: i.options.controls,
                            origin: window.location.origin,
                            branding: 0,
                            rel: 0,
                            showinfo: 0
                        },
                        events: {
                            onReady: function(t) {
                                i.options.vol && t.target.setVolume(i.options.vol);
                                i.options.mute && t.target.mute();
                                if (i.options.pauseOnScroll) new Waypoint({
                                    element: i,
                                    handler: function(e) {
                                        t.target.pauseVideo(), 1 == i.options.autoPlay && "up" == e && t.target.playVideo()
                                    }
                                })
                            }
                        }
                    })
                })
            }
        },
        vimeoPlayer: function() {
            var i = t(".vimeo-background");
            if (i.length > 0) {
                if (void 0 === t.fn.vimeo_player) return INSPIRO.elements.notification("Warning", "jQuery vimeo_player plugin is missing, please add this code line <b> &lt;script src=&quot;plugins/vimeo-player/jquery.mb.vimeo_player.min.js&quot;&gt;&lt;/script&gt;</b>, before <b><--Template functions--\x3e</b>", "danger", 1e4), !0;
                i.each(function() {
                    var i = t(this),
                        e = i.attr("data-vimeo-url") || null,
                        a = i.attr("data-vimeo-mute") || !1,
                        s = i.attr("data-vimeo-ratio") || "16/9",
                        o = i.attr("data-vimeo-quality") || "hd720",
                        n = i.attr("data-vimeo-opacity") || 1,
                        r = i.attr("data-vimeo-container") || "self",
                        l = i.attr("data-vimeo-optimize") || !0,
                        d = i.attr("data-vimeo-loop") || !0,
                        c = i.attr("data-vimeo-volume") || 70,
                        u = i.attr("data-vimeo-start") || 0,
                        p = i.attr("data-vimeo-stop") || 0,
                        M = i.attr("data-vimeo-autoplay") || !0,
                        m = i.attr("data-vimeo-fullscreen") || !0,
                        g = i.attr("data-vimeo-controls") || !1,
                        f = i.attr("data-vimeo-logo") || !1;
                    i.attr("data-vimeo-autopause");
                    i.vimeo_player({
                        videoURL: e,
                        mute: a,
                        ratio: s,
                        quality: o,
                        opacity: n,
                        containment: r,
                        optimizeDisplay: l,
                        loop: d,
                        vol: c,
                        startAt: u,
                        stopAt: p,
                        autoPlay: M,
                        realfullscreen: m,
                        showvmLogo: f,
                        showControls: g
                    })
                })
            }
        },
        modal: function() {
            if (void 0 === t.fn.magnificPopup) return INSPIRO.elements.notification("Warning", "jQuery magnificPopup plugin is missing in plugins.js file.", "danger"), !0;
            var i = t(".modal"),
                e = t(".modal-strip"),
                a = t(".btn-modal"),
                s = t(".modal-close"),
                o = t(".cookie-notify"),
                n = o.find(".modal-confirm, .mfp-close");
            i.length > 0 && i.each(function() {
                var i = t(this),
                    e = i.attr("data-delay") || 3e3,
                    a = i.attr("data-cookie-expire") || 365,
                    o = i.attr("data-cookie-name") || "cookieModalName2020_3",
                    n = 1 == i.data("cookie-enabled");
                i.attr("data-delay-dismiss");
                if (i.hasClass("modal-auto-open")) {
                    var r = t(this);
                    setTimeout(function() {
                        r.addClass("modal-active")
                    }, e)
                }
                if (i.find(s).click(function() {
                        return i.removeClass("modal-active"), !1
                    }), i.hasClass("modal-auto-open"))
                    if (1 != n) setTimeout(function() {
                        t.magnificPopup.open({
                            items: {
                                src: i
                            },
                            type: "inline",
                            closeBtnInside: !0,
                            callbacks: {
                                beforeOpen: function() {
                                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = "mfp-zoom-out"
                                },
                                open: function() {
                                    i.find("video").length > 0 && i.find("video").get(0).play()
                                }
                            }
                        }, 0)
                    }, e);
                    else if (void 0 === Cookies.get(o)) setTimeout(function() {
                    t.magnificPopup.open({
                        items: {
                            src: i
                        },
                        type: "inline",
                        closeBtnInside: !0,
                        callbacks: {
                            beforeOpen: function() {
                                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = "mfp-zoom-out"
                            },
                            open: function() {
                                i.find("video").length > 0 && i.find("video").get(0).play()
                            },
                            close: function() {
                                Cookies.set(o, !0, {
                                    expires: Number(a)
                                })
                            }
                        }
                    }, 0)
                }, e);
                i.find(s).click(function() {
                    return t.magnificPopup.close(), !1
                })
            }), e.length > 0 && e.each(function() {
                var i = t(this),
                    e = i.attr("data-delay") || 3e3,
                    a = i.attr("data-cookie-expire") || 365,
                    r = i.attr("data-cookie-name") || "cookieName2013",
                    l = 1 == i.data("cookie-enabled"),
                    d = i.attr("data-delay-dismiss");
                if (i.hasClass("modal-auto-open")) {
                    var c = t(this);
                    setTimeout(function() {
                        if (c.addClass("modal-active"), d) setTimeout(function() {
                            i.removeClass("modal-active")
                        }, d)
                    }, e)
                }
                if (i.find(s).click(function() {
                        return i.removeClass("modal-active"), !1
                    }), i.hasClass("cookie-notify")) {
                    setTimeout(function() {
                        1 != l ? o.addClass("modal-active") : void 0 === Cookies.get(r) && o.addClass("modal-active")
                    }, e);
                    n.click(function() {
                        return Cookies.set(r, !0, {
                            expires: Number(a)
                        }), t.magnificPopup.close(), o.removeClass("modal-active"), !1
                    })
                }
            }), a.length > 0 && a.each(function() {
                var i = t(this),
                    e = i.attr("data-modal");
                i.click(function() {
                    return t(e).toggleClass("modal-active", 1e3), !1
                })
            })
        },
        notification: function(i, e, a, s, o, n, r, l, d, c) {
            var u, p;
            r = r || "fadeInDown", l = l || "fadeOutDown";
            n = n || "top", s ? (u = "element-container", r = "fadeIn", l = "fadeOut") : u = "col-11 col-md-4", d && (p = 'style="background-image:url(' + d + '); background-repeat: no-repeat; background-position: 50% 20%; height:120px !important; width:430px !important; border:0px;" '), e || (e = ""), s = "body";
            var M = function() {
                t.notify({
                    title: i,
                    message: e
                }, {
                    element: s,
                    type: a || "warning",
                    delay: o || 1e4,
                    template: '<div data-notify="container" ' + p + ' class="bootstrap-notify ' + u + ' alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span></div>',
                    mouse_over: !0,
                    allow_dismiss: !0,
                    placement: {
                        from: n
                    },
                    animate: {
                        enter: "animated " + r,
                        exit: "animated " + l
                    }
                })
            };
            c ? setTimeout(function() {
                M()
            }, 2e3) : M()
        },
        sidebarFixed: function() {
            if (INSPIRO.core.rtlStatus()) return !0;
            var i = t(".sticky-sidebar");
            if (i.length > 0) {
                if (void 0 === t.fn.theiaStickySidebar) return INSPIRO.elements.notification("Warning", "jQuery theiaStickySidebar plugin is missing in plugins.js file.", "danger"), !0;
                i.each(function() {
                    var i = t(this);
                    i.options = {
                        additionalMarginTop: i.attr("data-margin-top") || 120,
                        additionalMarginBottom: i.attr("data-margin-bottom") || 50
                    }, i.theiaStickySidebar({
                        additionalMarginTop: Number(i.options.additionalMarginTop),
                        additionalMarginBottom: Number(i.options.additionalMarginBottom),
                        disableOnResponsiveLayouts: !0
                    })
                })
            }
        },
        bootstrapSwitch: function() {
            var i = t("[data-switch=true]");
            if (i.length > 0) {
                if (void 0 === t.fn.bootstrapSwitch) return INSPIRO.elements.notification("Warning", "jQuery bootstrapSwitch plugin is missing in plugins.js file.", "danger"), !0;
                i.bootstrapSwitch()
            }
        },
        clipboard: function() {
            var i = t("[data-clipboard-target]"),
                e = t("[data-clipboard-text]");
            if (i.length > 0) {
                if ("undefined" == typeof ClipboardJS) return INSPIRO.elements.notification("Warning", "jQuery ClipboardJS plugin is missing in plugins.js file.", "danger"), !0;

                function a(i) {
                    i.each(function() {
                        var i = t(this),
                            e = i.attr("data-original-title") || "Copy to clipboard",
                            a = i.attr("data-original-title-success") || "Copied!";
                        i.tooltip({
                            placement: "top",
                            title: e
                        }), i.on("click", function() {
                            i.attr("data-original-title", a).tooltip("show")
                        }).on("mouseleave", function() {
                            return i.tooltip("hide").attr("data-original-title", e), !1
                        })
                    })
                }
                i && (new ClipboardJS("[data-clipboard-target]"), a(i)), e && (new ClipboardJS("[data-clipboard-text]"), a(e))
            }
        },
        countdown: function() {
            var i = t(".p-countdown");
            i.length > 0 && i.each(function() {
                var i = t(this),
                    e = i.find(".p-countdown-count"),
                    a = i.find(".p-countdown-show"),
                    s = i.attr("data-delay") || 5;
                e.find(".count-number").html(s), new Waypoint({
                    element: i,
                    handler: function() {
                        var t = setInterval(function() {
                            0 == --s ? (clearInterval(t), e.fadeOut("slow"), setTimeout(function() {
                                a.fadeIn("show")
                            }, 1e3)) : e.find(".count-number").html(s)
                        }, 1e3);
                        this.destroy()
                    },
                    offset: "100%"
                })
            })
        },
        videoBackground: function() {
            var i = t("[data-bg-video], [data-vide-bg]");
            i.length > 0 && i.each(function() {
                var i = t(this);
                i.options = {
                    autoplay: i.attr("data-video-autoplay") || !0,
                    controls: i.attr("data-video-controls"),
                    loop: i.attr("data-video-loop") || !0,
                    muted: i.attr("data-video-muted") || !0,
                    poster: i.attr("data-video-poster") || "",
                    preload: i.attr("data-video-preload") || "auto",
                    src: i.attr("data-bg-video"),
                    randomId: Math.random().toString(36).substr(2, 5)
                }, i.options.controls ? i.options.controls = ' controls="' + i.options.controls + '" ' : i.options.controls = "", i.prepend('<div class="html5vid" id="video-' + i.options.randomId + '"><video playsinline ' + i.options.controls + ' loop="' + i.options.loop + '" muted="' + i.options.muted + '" poster="' + i.options.poster + '" preload="' + i.options.preload + '"><source src="' + i.options.src + '" type="video/mp4"></video></div>'), i.options.autoplay && setTimeout(function() {
                    t("#video-" + i.options.randomId).find("video").get(0).play()
                }, 100), setTimeout(function() {
                    t("#video-" + i.options.randomId).addClass("video-loaded")
                }, 300)
            })
        }
    }, INSPIRO.widgets = {
        functions: function() {
            INSPIRO.widgets.twitter(), INSPIRO.widgets.flickr(), INSPIRO.widgets.instagram(), INSPIRO.widgets.instagramComplete(), INSPIRO.widgets.subscribeForm()
        },
        twitter: function() {
            var i = t(".widget-tweeter") || t(".widget-twitter");
            if (i.length > 0) {
                if (void 0 === t.fn.twittie) return INSPIRO.elements.notification("Warning", "jQuery twittie plugin is missing in plugins.js file.", "danger"), !0;
                setTimeout(function() {
                    i.each(function() {
                        var i = t(this),
                            e = i.attr("data-username") || "ardianmusliu",
                            a = i.attr("data-limit") || 2,
                            s = i.attr("data-format") || "%b/%d/%Y",
                            o = i.attr("data-loading-text") || "Loading...",
                            n = i.attr("data-loader") || "include/twitter/tweet.php",
                            r = i.attr("data-avatar") || !1;
                        r = "true" == r ? "{{avatar}}" : "", i.append('<div id="twitter-cnt"></div>'), i.find("#twitter-cnt").twittie({
                            username: e,
                            count: a,
                            dateFormat: s,
                            template: r + "{{tweet}}<small>{{date}}</small>",
                            apiPath: n,
                            loadingText: o
                        }), i.closest(".grid-item").length && INSPIRO.elements.gridLayoutRefresh()
                    })
                }, 2e3)
            }
        },
        flickr: function() {
            var i = t(".flickr-widget");
            if (i.length > 0) {
                if (void 0 === t.fn.jflickrfeed) return INSPIRO.elements.notification("Warning", "jQuery jflickrfeed plugin is missing in plugins.js file.", "danger"), !0;
                i.each(function() {
                    var e = t(this);
                    e.options = {
                        id: e.attr("data-flickr-id") || "52617155@N08",
                        limit: e.attr("data-flickr-images") || "9",
                        itemTemplate: '<a href="{{image}}" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" /></a>'
                    }, i.jflickrfeed({
                        limit: e.options.limit,
                        qstrings: {
                            id: e.options.id
                        },
                        itemTemplate: e.options.itemTemplate
                    }, function() {
                        setTimeout(function() {
                            e.addClass("flickr-widget-loaded")
                        }, 1e3);
                        e.magnificPopup({
                            delegate: "a",
                            type: "image",
                            gallery: {
                                enabled: !0
                            }
                        })
                    })
                })
            }
        },
        instagram: function() {
            var i = t(".widget-instagram");
            if (i.length > 0) {
                if (void 0 === t.fn.spectragram) return INSPIRO.elements.notification("Warning", "jQuery spectragram plugin is missing in plugins.js file.", "danger"), !0;
                i.each(function() {
                    var i = t(this),
                        e = i.attr("data-limit") || 12,
                        a = i.attr("data-col") || 3,
                        s = i.attr("data-token") || "5783726529.226c7d2.68a168eec1264759b9f91c1fc2c6ce56",
                        o = i.attr("data-size") || "small",
                        n = "grid-" + a;
                    i.append('<div id="instagram-cnt" class="' + n + '"></div>'), jQuery.fn.spectragram.accessData = {
                        accessToken: s
                    }, i.find(t("#instagram-cnt")).spectragram("getUserFeed", {
                        size: o,
                        max: e,
                        wrapEachWith: "",
                        complete: r
                    });
                    setTimeout(function() {
                        i.addClass("widget-instagram-loaded")
                    }, 300);
                    var r = function() {
                        if (p) setTimeout(function() {
                            INSPIRO.elements.gridLayoutRefresh()
                        }, 300)
                    }
                })
            }
        },
        instagramComplete: function() {
            if (p) setTimeout(function() {
                INSPIRO.elements.gridLayoutRefresh()
            }, 300)
        },
        subscribeForm: function() {
            var i = t(".widget-subscribe-form");
            i.length > 0 && i.each(function() {
                var i = t(this),
                    e = i.attr("success-message") || "You have successfully subscribed to our mailing list.",
                    a = i.find("#widget-subscribe-submit-button"),
                    s = a.html();
                i.submit(function(o) {
                    o.preventDefault();
                    var n = t(this).attr("action"),
                        r = t(this).attr("method"),
                        l = t(this).serialize();
                    !1 === i[0].checkValidity() ? (o.stopPropagation(), i.addClass("was-validated")) : (t(i).removeClass("was-validated"), a.html('<i class="icon-loader fa-spin"></i>'), t.ajax({
                        url: n,
                        type: r,
                        data: l,
                        dataType: "json",
                        success: function(o) {
                            "success" == o.response ? (t.notify({
                                message: e
                            }, {
                                type: "success"
                            }), t(i)[0].reset(), t(i).removeClass("was-validated"), a.html(s)) : (t.notify({
                                message: o.message
                            }, {
                                type: "warning"
                            }), t(i)[0].reset(), t(i).removeClass("was-validated"), a.html(s))
                        },
                        done: function() {
                            a.html(s)
                        }
                    }))
                })
            })
        }
    }, t(document).ready(function() {
        INSPIRO.core.functions(), INSPIRO.header.functions(), INSPIRO.slider.functions(), INSPIRO.widgets.functions(), INSPIRO.elements.functions()
    }), i.on("scroll", function() {
        INSPIRO.header.stickyHeader(), INSPIRO.core.scrollTop(), INSPIRO.header.dotsMenu()
    }), i.on("resize", function() {
        INSPIRO.header.logoStatus(), INSPIRO.header.stickyHeader()
    })
}(jQuery);