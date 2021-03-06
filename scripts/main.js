
 /*
  * # Semantic UI - 1.7.3
  * https://github.com/Semantic-Org/Semantic-UI
  * http://www.semantic-ui.com/
  *
  * Copyright 2014 Contributors
  * Released under the MIT license
  * http://opensource.org/licenses/MIT
  *
  */
 ! function(e, t, n, i) {
     e.site = e.fn.site = function(o) {
         var a, r, s = (new Date).getTime(),
             c = [],
             l = arguments[0],
             u = "string" == typeof l,
             d = [].slice.call(arguments, 1),
             m = e.isPlainObject(o) ? e.extend(!0, {}, e.site.settings, o) : e.extend({}, e.site.settings),
             f = m.namespace,
             g = m.error,
             p = "module-" + f,
             h = e(n),
             v = h,
             b = this,
             y = v.data(p);
         return a = {
             initialize: function() {
                 a.instantiate()
             },
             instantiate: function() {
                 a.verbose("Storing instance of site", a), y = a, v.data(p, a)
             },
             normalize: function() {
                 a.fix.console(), a.fix.requestAnimationFrame()
             },
             fix: {
                 console: function() {
                     a.debug("Normalizing window.console"), (console === i || console.log === i) && (a.verbose("Console not available, normalizing events"), a.disable.console()), ("undefined" == typeof console.group || "undefined" == typeof console.groupEnd || "undefined" == typeof console.groupCollapsed) && (a.verbose("Console group not available, normalizing events"), t.console.group = function() {}, t.console.groupEnd = function() {}, t.console.groupCollapsed = function() {}), "undefined" == typeof console.markTimeline && (a.verbose("Mark timeline not available, normalizing events"), t.console.markTimeline = function() {})
                 },
                 consoleClear: function() {
                     a.debug("Disabling programmatic console clearing"), t.console.clear = function() {}
                 },
                 requestAnimationFrame: function() {
                     a.debug("Normalizing requestAnimationFrame"), t.requestAnimationFrame === i && (a.debug("RequestAnimationFrame not available, normailizing event"), t.requestAnimationFrame = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                         setTimeout(e, 0)
                     })
                 }
             },
             moduleExists: function(t) {
                 return e.fn[t] !== i && e.fn[t].settings !== i
             },
             enabled: {
                 modules: function(t) {
                     var n = [];
                     return t = t || m.modules, e.each(t, function(e, t) {
                         a.moduleExists(t) && n.push(t)
                     }), n
                 }
             },
             disabled: {
                 modules: function(t) {
                     var n = [];
                     return t = t || m.modules, e.each(t, function(e, t) {
                         a.moduleExists(t) || n.push(t)
                     }), n
                 }
             },
             change: {
                 setting: function(t, n, o, r) {
                     o = "string" == typeof o ? "all" === o ? m.modules : [o] : o || m.modules, r = r !== i ? r : !0, e.each(o, function(i, o) {
                         var s, c = a.moduleExists(o) ? e.fn[o].settings.namespace || !1 : !0;
                         a.moduleExists(o) && (a.verbose("Changing default setting", t, n, o), e.fn[o].settings[t] = n, r && c && (s = e(":data(module-" + c + ")"), s.length > 0 && (a.verbose("Modifying existing settings", s), s[o]("setting", t, n))))
                     })
                 },
                 settings: function(t, n, o) {
                     n = "string" == typeof n ? [n] : n || m.modules, o = o !== i ? o : !0, e.each(n, function(n, i) {
                         var r;
                         a.moduleExists(i) && (a.verbose("Changing default setting", t, i), e.extend(!0, e.fn[i].settings, t), o && f && (r = e(":data(module-" + f + ")"), r.length > 0 && (a.verbose("Modifying existing settings", r), r[i]("setting", t))))
                     })
                 }
             },
             enable: {
                 console: function() {
                     a.console(!0)
                 },
                 debug: function(e, t) {
                     e = e || m.modules, a.debug("Enabling debug for modules", e), a.change.setting("debug", !0, e, t)
                 },
                 verbose: function(e, t) {
                     e = e || m.modules, a.debug("Enabling verbose debug for modules", e), a.change.setting("verbose", !0, e, t)
                 }
             },
             disable: {
                 console: function() {
                     a.console(!1)
                 },
                 debug: function(e, t) {
                     e = e || m.modules, a.debug("Disabling debug for modules", e), a.change.setting("debug", !1, e, t)
                 },
                 verbose: function(e, t) {
                     e = e || m.modules, a.debug("Disabling verbose debug for modules", e), a.change.setting("verbose", !1, e, t)
                 }
             },
             console: function(e) {
                 if (e) {
                     if (y.cache.console === i) return void a.error(g.console);
                     a.debug("Restoring console function"), t.console = y.cache.console
                 } else a.debug("Disabling console function"), y.cache.console = t.console, t.console = {
                     clear: function() {},
                     error: function() {},
                     group: function() {},
                     groupCollapsed: function() {},
                     groupEnd: function() {},
                     info: function() {},
                     log: function() {},
                     markTimeline: function() {},
                     warn: function() {}
                 }
             },
             destroy: function() {
                 a.verbose("Destroying previous site for", v), v.removeData(p)
             },
             cache: {},
             setting: function(t, n) {
                 if (e.isPlainObject(t)) e.extend(!0, m, t);
                 else {
                     if (n === i) return m[t];
                     m[t] = n
                 }
             },
             internal: function(t, n) {
                 if (e.isPlainObject(t)) e.extend(!0, a, t);
                 else {
                     if (n === i) return a[t];
                     a[t] = n
                 }
             },
             debug: function() {
                 m.debug && (m.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), a.debug.apply(console, arguments)))
             },
             verbose: function() {
                 m.verbose && m.debug && (m.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), a.verbose.apply(console, arguments)))
             },
             error: function() {
                 a.error = Function.prototype.bind.call(console.error, console, m.name + ":"), a.error.apply(console, arguments)
             },
             performance: {
                 log: function(e) {
                     var t, n, i;
                     m.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                         Element: b,
                         Name: e[0],
                         Arguments: [].slice.call(e, 1) || "",
                         "Execution Time": n
                     })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 100)
                 },
                 display: function() {
                     var t = m.name + ":",
                         n = 0;
                     s = !1, clearTimeout(a.performance.timer), e.each(c, function(e, t) {
                         n += t["Execution Time"]
                     }), t += " " + n + "ms", (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                         console.log(t.Name + ": " + t["Execution Time"] + "ms")
                     }), console.groupEnd()), c = []
                 }
             },
             invoke: function(t, n, o) {
                 var s, c, l, u = y;
                 return n = n || d, o = b || o, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function(n, o) {
                     var r = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                     if (e.isPlainObject(u[r]) && n != s) u = u[r];
                     else {
                         if (u[r] !== i) return c = u[r], !1;
                         if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (c = u[o], !1) : (a.error(g.method, t), !1);
                         u = u[o]
                     }
                 })), e.isFunction(c) ? l = c.apply(o, n) : c !== i && (l = c), e.isArray(r) ? r.push(l) : r !== i ? r = [r, l] : l !== i && (r = l), c
             }
         }, u ? (y === i && a.initialize(), a.invoke(l)) : (y !== i && a.destroy(), a.initialize()), r !== i ? r : this
     }, e.site.settings = {
         name: "Site",
         namespace: "site",
         error: {
             console: "Console cannot be restored, most likely it was overwritten outside of module",
             method: "The method you called is not defined."
         },
         debug: !1,
         verbose: !0,
         performance: !0,
         modules: ["accordion", "api", "checkbox", "dimmer", "dropdown", "form", "modal", "nag", "popup", "rating", "shape", "sidebar", "state", "sticky", "tab", "transition", "video", "visit", "visibility"],
         siteNamespace: "site",
         namespaceStub: {
             cache: {},
             config: {},
             sections: {},
             section: {},
             utilities: {}
         }
     }, e.extend(e.expr[":"], {
         data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
             return function(n) {
                 return !!e.data(n, t)
             }
         }) : function(t, n, i) {
             return !!e.data(t, i[3])
         }
     })
 }(jQuery, window, document),
 function(e, t, n, i) {
     e.fn.form = function(t, o) {
         var a, r = e(this),
             s = e.extend(!0, {}, e.fn.form.settings, o),
             c = e.extend({}, e.fn.form.settings.defaults, t),
             l = s.namespace,
             u = s.metadata,
             d = s.selector,
             m = s.className,
             f = (s.error, "." + l),
             g = "module-" + l,
             p = r.selector || "",
             h = (new Date).getTime(),
             v = [],
             b = arguments[0],
             y = "string" == typeof b,
             x = [].slice.call(arguments, 1);
         return r.each(function() {
             var t, o = e(this),
                 l = e(this).find(d.field),
                 w = e(this).find(d.group),
                 C = e(this).find(d.message),
                 T = (e(this).find(d.prompt), e(this).find(d.submit)),
                 k = [],
                 S = this,
                 A = o.data(g);
             t = {
                 initialize: function() {
                     t.verbose("Initializing form validation", o, c, s), t.bindEvents(), t.instantiate()
                 },
                 instantiate: function() {
                     t.verbose("Storing instance of module", t), A = t, o.data(g, t)
                 },
                 destroy: function() {
                     t.verbose("Destroying previous module", A), t.removeEvents(), o.removeData(g)
                 },
                 refresh: function() {
                     t.verbose("Refreshing selector cache"), l = o.find(d.field)
                 },
                 submit: function() {
                     t.verbose("Submitting form", o), o.submit()
                 },
                 attachEvents: function(n, i) {
                     i = i || "submit", e(n).on("click", function(e) {
                         t[i](), e.preventDefault()
                     })
                 },
                 bindEvents: function() {
                     s.keyboardShortcuts && l.on("keydown" + f, t.event.field.keydown), o.on("submit" + f, t.validate.form), l.on("blur" + f, t.event.field.blur), t.attachEvents(T, "submit"), l.each(function() {
                         var n = e(this).prop("type"),
                             i = t.get.changeEvent(n);
                         e(this).on(i + f, t.event.field.change)
                     })
                 },
                 removeEvents: function() {
                     o.off(f), l.off(f), T.off(f), l.off(f)
                 },
                 event: {
                     field: {
                         keydown: function(n) {
                             var i = e(this),
                                 o = n.which,
                                 a = {
                                     enter: 13,
                                     escape: 27
                                 };
                             o == a.escape && (t.verbose("Escape key pressed blurring field"), i.blur()), !n.ctrlKey && o == a.enter && i.is(d.input) && i.not(d.checkbox).length > 0 && (t.debug("Enter key pressed, submitting form"), T.addClass(m.down), i.one("keyup" + f, t.event.field.keyup))
                         },
                         keyup: function() {
                             t.verbose("Doing keyboard shortcut form submit"), T.removeClass(m.down), t.submit()
                         },
                         blur: function() {
                             var n = e(this),
                                 i = n.closest(w);
                             i.hasClass(m.error) ? (t.debug("Revalidating field", n, t.get.validation(n)), t.validate.field(t.get.validation(n))) : ("blur" == s.on || "change" == s.on) && t.validate.field(t.get.validation(n))
                         },
                         change: function() {
                             var n = e(this),
                                 i = n.closest(w);
                             ("change" == s.on || i.hasClass(m.error) && s.revalidate) && (clearTimeout(t.timer), t.timer = setTimeout(function() {
                                 t.debug("Revalidating field", n, t.get.validation(n)), t.validate.field(t.get.validation(n))
                             }, s.delay))
                         }
                     }
                 },
                 get: {
                     changeEvent: function(e) {
                         return "checkbox" == e || "radio" == e || "hidden" == e ? "change" : n.createElement("input").oninput !== i ? "input" : n.createElement("input").onpropertychange !== i ? "propertychange" : "keyup"
                     },
                     field: function(n) {
                         return t.verbose("Finding field with identifier", n), l.filter("#" + n).length > 0 ? l.filter("#" + n) : l.filter('[name="' + n + '"]').length > 0 ? l.filter('[name="' + n + '"]') : l.filter("[data-" + u.validate + '="' + n + '"]').length > 0 ? l.filter("[data-" + u.validate + '="' + n + '"]') : e("<input/>")
                     },
                     validation: function(n) {
                         var i;
                         return e.each(c, function(e, o) {
                             t.get.field(o.identifier).get(0) == n.get(0) && (i = o)
                         }), i || !1
                     }
                 },
                 has: {
                     field: function(e) {
                         return t.verbose("Checking for existence of a field with identifier", e), l.filter("#" + e).length > 0 ? !0 : l.filter('[name="' + e + '"]').length > 0 ? !0 : l.filter("[data-" + u.validate + '="' + e + '"]').length > 0 ? !0 : !1
                     }
                 },
                 add: {
                     prompt: function(n, a) {
                         var r = t.get.field(n),
                             c = r.closest(w),
                             l = c.children(d.prompt),
                             u = 0 !== l.length;
                         a = "string" == typeof a ? [a] : a, t.verbose("Adding field error state", n), c.addClass(m.error), s.inline && (u || (l = s.templates.prompt(a), l.appendTo(c)), l.html(a[0]), u ? t.verbose("Inline errors are disabled, no inline error added", n) : s.transition && e.fn.transition !== i && o.transition("is supported") ? (t.verbose("Displaying error with css transition", s.transition), l.transition(s.transition + " in", s.duration)) : (t.verbose("Displaying error with fallback javascript animation"), l.fadeIn(s.duration)))
                     },
                     errors: function(e) {
                         t.debug("Adding form error messages", e), C.html(s.templates.error(e))
                     }
                 },
                 remove: {
                     prompt: function(n) {
                         var a = t.get.field(n.identifier),
                             r = a.closest(w),
                             c = r.children(d.prompt);
                         r.removeClass(m.error), s.inline && c.is(":visible") && (t.verbose("Removing prompt for field", n), s.transition && e.fn.transition !== i && o.transition("is supported") ? c.transition(s.transition + " out", s.duration, function() {
                             c.remove()
                         }) : c.fadeOut(s.duration, function() {
                             c.remove()
                         }))
                     }
                 },
                 set: {
                     success: function() {
                         o.removeClass(m.error).addClass(m.success)
                     },
                     error: function() {
                         o.removeClass(m.success).addClass(m.error)
                     }
                 },
                 validate: {
                     form: function(n) {
                         var a = !0;
                         return k = [], e.each(c, function(e, n) {
                             t.validate.field(n) || (a = !1)
                         }), a ? (t.debug("Form has no validation errors, submitting"), t.set.success(), s.onSuccess.call(S, n)) : (t.debug("Form has errors"), t.set.error(), s.inline || t.add.errors(k), o.data("moduleApi") !== i && n.stopImmediatePropagation(), s.onFailure.call(S, k))
                     },
                     field: function(n) {
                         var o = t.get.field(n.identifier),
                             a = !0,
                             r = [];
                         return o.prop("disabled") ? (t.debug("Field is disabled. Skipping", n.identifier), a = !0) : n.optional && "" === e.trim(o.val()) ? (t.debug("Field is optional and empty. Skipping", n.identifier), a = !0) : n.rules !== i && e.each(n.rules, function(e, i) {
                             t.has.field(n.identifier) && !t.validate.rule(n, i) && (t.debug("Field is invalid", n.identifier, i.type), r.push(i.prompt), a = !1)
                         }), a ? (t.remove.prompt(n, r), s.onValid.call(o), !0) : (k = k.concat(r), t.add.prompt(n.identifier, r), s.onInvalid.call(o, r), !1)
                     },
                     rule: function(n, o) {
                         var a, r, c = t.get.field(n.identifier),
                             l = o.type,
                             u = e.trim(c.val() + ""),
                             d = /\[(.*)\]/i,
                             m = d.exec(l),
                             f = !0;
                         return m !== i && null !== m ? (a = "" + m[1], r = l.replace(m[0], ""), f = s.rules[r].call(S, u, a)) : f = s.rules[l].call(c, u), f
                     }
                 },
                 setting: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, s, t);
                     else {
                         if (n === i) return s[t];
                         s[t] = n
                     }
                 },
                 internal: function(n, o) {
                     if (e.isPlainObject(n)) e.extend(!0, t, n);
                     else {
                         if (o === i) return t[n];
                         t[n] = o
                     }
                 },
                 debug: function() {
                     s.debug && (s.performance ? t.performance.log(arguments) : (t.debug = Function.prototype.bind.call(console.info, console, s.name + ":"), t.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     s.verbose && s.debug && (s.performance ? t.performance.log(arguments) : (t.verbose = Function.prototype.bind.call(console.info, console, s.name + ":"), t.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     t.error = Function.prototype.bind.call(console.error, console, s.name + ":"), t.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var n, i, o;
                         s.performance && (n = (new Date).getTime(), o = h || n, i = n - o, h = n, v.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: S,
                             "Execution Time": i
                         })), clearTimeout(t.performance.timer), t.performance.timer = setTimeout(t.performance.display, 100)
                     },
                     display: function() {
                         var n = s.name + ":",
                             o = 0;
                         h = !1, clearTimeout(t.performance.timer), e.each(v, function(e, t) {
                             o += t["Execution Time"]
                         }), n += " " + o + "ms", p && (n += " '" + p + "'"), r.length > 1 && (n += " (" + r.length + ")"), (console.group !== i || console.table !== i) && v.length > 0 && (console.groupCollapsed(n), console.table ? console.table(v) : e.each(v, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), v = []
                     }
                 },
                 invoke: function(t, n, o) {
                     var r, s, c, l = A;
                     return n = n || x, o = S || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, y ? (A === i && t.initialize(), t.invoke(b)) : (A !== i && t.destroy(), t.initialize())
         }), a !== i ? a : this
     }, e.fn.form.settings = {
         name: "Form",
         namespace: "form",
         debug: !1,
         verbose: !0,
         performance: !0,
         keyboardShortcuts: !0,
         on: "submit",
         inline: !1,
         delay: 200,
         revalidate: !0,
         transition: "scale",
         duration: 200,
         onValid: function() {},
         onInvalid: function() {},
         onSuccess: function() {
             return !0
         },
         onFailure: function() {
             return !1
         },
         metadata: {
             validate: "validate"
         },
         selector: {
             message: ".error.message",
             field: "input, textarea, select",
             group: ".field",
             checkbox: 'input[type="checkbox"], input[type="radio"]',
             input: "input",
             prompt: ".prompt.label",
             submit: ".submit"
         },
         className: {
             error: "error",
             success: "success",
             down: "down",
             label: "ui prompt label"
         },
         error: {
             method: "The method you called is not defined."
         },
         templates: {
             error: function(t) {
                 var n = '<ul class="list">';
                 return e.each(t, function(e, t) {
                     n += "<li>" + t + "</li>"
                 }), n += "</ul>", e(n)
             },
             prompt: function(t) {
                 return e("<div/>").addClass("ui red pointing prompt label").html(t[0])
             }
         },
         rules: {
             checked: function() {
                 return e(this).filter(":checked").length > 0
             },
             contains: function(e, t) {
                 return t = t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), -1 !== e.search(t)
             },
             email: function(e) {
                 var t = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "i");
                 return t.test(e)
             },
             empty: function(e) {
                 return !(e === i || "" === e)
             },
             integer: function(e, t) {
                 var n, o, a, r = /^\-?\d+$/;
                 return t === i || "" === t || ".." === t || (-1 == t.indexOf("..") ? r.test(t) && (n = o = t - 0) : (a = t.split("..", 2), r.test(a[0]) && (n = a[0] - 0), r.test(a[1]) && (o = a[1] - 0))), r.test(e) && (n === i || e >= n) && (o === i || o >= e)
             },
             is: function(e, t) {
                 return e == t
             },
             length: function(e, t) {
                 return e !== i ? e.length >= t : !1
             },
             match: function(t, n) {
                 var o, a = e(this);
                 return a.find("#" + n).length > 0 ? o = a.find("#" + n).val() : a.find('[name="' + n + '"]').length > 0 ? o = a.find('[name="' + n + '"]').val() : a.find('[data-validate="' + n + '"]').length > 0 && (o = a.find('[data-validate="' + n + '"]').val()), o !== i ? t.toString() == o.toString() : !1
             },
             maxLength: function(e, t) {
                 return e !== i ? e.length <= t : !1
             },
             not: function(e, t) {
                 return e != t
             },
             url: function(e) {
                 var t = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                 return t.test(e)
             }
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.accordion = function(n) {
         {
             var o, a = e(this),
                 r = (new Date).getTime(),
                 s = [],
                 c = arguments[0],
                 l = "string" == typeof c,
                 u = [].slice.call(arguments, 1);
             t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                 setTimeout(e, 0)
             }
         }
         return a.each(function() {
             var d, m, f = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.accordion.settings, n) : e.extend({}, e.fn.accordion.settings),
                 g = f.className,
                 p = f.namespace,
                 h = f.selector,
                 v = f.error,
                 b = "." + p,
                 y = "module-" + p,
                 x = a.selector || "",
                 w = e(this),
                 C = w.find(h.title),
                 T = w.find(h.content),
                 k = this,
                 S = w.data(y);
             m = {
                 initialize: function() {
                     m.debug("Initializing accordion with bound events", w), w.on("click" + b, h.title, m.event.click), m.observeChanges(), m.instantiate()
                 },
                 instantiate: function() {
                     S = m, w.data(y, m)
                 },
                 destroy: function() {
                     m.debug("Destroying previous accordion for", w), w.removeData(y), C.off(b)
                 },
                 refresh: function() {
                     C = w.find(h.title), T = w.find(h.content)
                 },
                 observeChanges: function() {
                     "MutationObserver" in t && (d = new MutationObserver(function() {
                         m.debug("DOM tree modified, updating selector cache"), m.refresh()
                     }), d.observe(k, {
                         childList: !0,
                         subtree: !0
                     }), m.debug("Setting up mutation observer", d))
                 },
                 event: {
                     click: function() {
                         m.toggle.call(this)
                     }
                 },
                 toggle: function(t) {
                     var n = t !== i ? "number" == typeof t ? C.eq(t) : e(t) : e(this),
                         o = n.next(T),
                         a = o.is(":visible");
                     m.debug("Toggling visibility of content", n), a ? f.collapsible ? m.close.call(n) : m.debug("Cannot close accordion content collapsing is disabled") : m.open.call(n)
                 },
                 open: function(t) {
                     var n = t !== i ? "number" == typeof t ? C.eq(t) : e(t) : e(this),
                         o = n.next(T),
                         a = o.is(":animated"),
                         r = o.hasClass(g.active);
                     a || r || (m.debug("Opening accordion content", n), f.exclusive && m.closeOthers.call(n), n.addClass(g.active), f.animateChildren && (e.fn.transition !== i && w.transition("is supported") ? o.children().transition({
                         animation: "fade in",
                         useFailSafe: !0,
                         debug: f.debug,
                         verbose: f.verbose,
                         duration: f.duration
                     }) : o.children().stop().animate({
                         opacity: 1
                     }, f.duration, m.resetOpacity)), o.stop().slideDown(f.duration, f.easing, function() {
                         o.addClass(g.active), m.reset.display.call(this), f.onOpen.call(this), f.onChange.call(this)
                     }))
                 },
                 close: function(t) {
                     var n = t !== i ? "number" == typeof t ? C.eq(t) : e(t) : e(this),
                         o = n.next(T),
                         a = o.hasClass(g.active);
                     a && (m.debug("Closing accordion content", o), n.removeClass(g.active), o.removeClass(g.active).show(), f.animateChildren && (e.fn.transition !== i && w.transition("is supported") ? o.children().transition({
                         animation: "fade out",
                         useFailSafe: !0,
                         debug: f.debug,
                         verbose: f.verbose,
                         duration: f.duration
                     }) : o.children().stop().animate({
                         opacity: 0
                     }, f.duration, m.resetOpacity)), o.stop().slideUp(f.duration, f.easing, function() {
                         m.reset.display.call(this), f.onClose.call(this), f.onChange.call(this)
                     }))
                 },
                 closeOthers: function(t) {
                     var n, o, a, r = t !== i ? C.eq(t) : e(this),
                         s = r.parents(h.content).prev(h.title),
                         c = r.closest(h.accordion),
                         l = h.title + "." + g.active + ":visible",
                         u = h.content + "." + g.active + ":visible";
                     f.closeNested ? (n = c.find(l).not(s), a = n.next(T)) : (n = c.find(l).not(s), o = c.find(u).find(l).not(s), n = n.not(o), a = n.next(T)), n.length > 0 && (m.debug("Exclusive enabled, closing other content", n), n.removeClass(g.active), f.animateChildren && (e.fn.transition !== i && w.transition("is supported") ? a.children().transition({
                         animation: "fade out",
                         useFailSafe: !0,
                         debug: f.debug,
                         verbose: f.verbose,
                         duration: f.duration
                     }) : a.children().stop().animate({
                         opacity: 0
                     }, f.duration, m.resetOpacity)), a.stop().slideUp(f.duration, f.easing, function() {
                         e(this).removeClass(g.active), m.reset.display.call(this)
                     }))
                 },
                 reset: {
                     display: function() {
                         m.verbose("Removing inline display from element", this), e(this).css("display", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style")
                     },
                     opacity: function() {
                         m.verbose("Removing inline opacity from element", this), e(this).css("opacity", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style")
                     }
                 },
                 setting: function(t, n) {
                     if (m.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 },
                 internal: function(t, n) {
                     return m.debug("Changing internal", t, n), n === i ? m[t] : void(e.isPlainObject(t) ? e.extend(!0, m, t) : m[t] = n)
                 },
                 debug: function() {
                     f.debug && (f.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), m.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     f.verbose && f.debug && (f.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), m.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     m.error = Function.prototype.bind.call(console.error, console, f.name + ":"), m.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         f.performance && (t = (new Date).getTime(), i = r || t, n = t - i, r = t, s.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: k,
                             "Execution Time": n
                         })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 100)
                     },
                     display: function() {
                         var t = f.name + ":",
                             n = 0;
                         r = !1, clearTimeout(m.performance.timer), e.each(s, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", x && (t += " '" + x + "'"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), s = []
                     }
                 },
                 invoke: function(t, n, a) {
                     var r, s, c, l = S;
                     return n = n || u, a = k || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (m.error(v.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, l ? (S === i && m.initialize(), m.invoke(c)) : (S !== i && m.destroy(), m.initialize())
         }), o !== i ? o : this
     }, e.fn.accordion.settings = {
         name: "Accordion",
         namespace: "accordion",
         debug: !1,
         verbose: !0,
         performance: !0,
         exclusive: !0,
         collapsible: !0,
         closeNested: !1,
         animateChildren: !0,
         duration: 500,
         easing: "easeOutQuint",
         onOpen: function() {},
         onClose: function() {},
         onChange: function() {},
         error: {
             method: "The method you called is not defined"
         },
         className: {
             active: "active"
         },
         selector: {
             accordion: ".accordion",
             title: ".title",
             content: ".content"
         }
     }, e.extend(e.easing, {
         easeOutQuint: function(e, t, n, i, o) {
             return i * ((t = t / o - 1) * t * t * t * t + 1) + n
         }
     })
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.checkbox = function(n) {
         var o, a = e(this),
             r = a.selector || "",
             s = (new Date).getTime(),
             c = [],
             l = arguments[0],
             u = "string" == typeof l,
             d = [].slice.call(arguments, 1);
         return a.each(function() {
             var a, m, f = e.extend(!0, {}, e.fn.checkbox.settings, n),
                 g = f.className,
                 p = f.namespace,
                 h = f.selector,
                 v = f.error,
                 b = "." + p,
                 y = "module-" + p,
                 x = e(this),
                 w = e(this).find(h.label).first(),
                 C = e(this).find(h.input),
                 T = x.data(y),
                 k = this;
             m = {
                 initialize: function() {
                     m.verbose("Initializing checkbox", f), m.create.label(), m.add.events(), m.is.checked() ? (m.set.checked(), f.fireOnInit && f.onChecked.call(C.get())) : (m.remove.checked(), f.fireOnInit && f.onUnchecked.call(C.get())), m.observeChanges(), m.instantiate()
                 },
                 instantiate: function() {
                     m.verbose("Storing instance of module", m), T = m, x.data(y, m)
                 },
                 destroy: function() {
                     m.verbose("Destroying module"), m.remove.events(), x.removeData(y)
                 },
                 refresh: function() {
                     x = e(this), w = e(this).find(h.label).first(), C = e(this).find(h.input)
                 },
                 observeChanges: function() {
                     "MutationObserver" in t && (a = new MutationObserver(function() {
                         m.debug("DOM tree modified, updating selector cache"), m.refresh()
                     }), a.observe(k, {
                         childList: !0,
                         subtree: !0
                     }), m.debug("Setting up mutation observer", a))
                 },
                 attachEvents: function(t, n) {
                     var i = e(t);
                     n = e.isFunction(m[n]) ? m[n] : m.toggle, i.length > 0 ? (m.debug("Attaching checkbox events to element", t, n), i.on("click" + b, n)) : m.error(v.notFound)
                 },
                 event: {
                     keydown: function(e) {
                         var t = e.which,
                             n = {
                                 enter: 13,
                                 space: 32,
                                 escape: 27
                             };
                         t == n.escape && (m.verbose("Escape key pressed blurring field"), x.blur()), e.ctrlKey || t != n.enter && t != n.space || (m.verbose("Enter key pressed, toggling checkbox"), m.toggle.call(this), e.preventDefault())
                     }
                 },
                 is: {
                     radio: function() {
                         return x.hasClass(g.radio)
                     },
                     checked: function() {
                         return C.prop("checked") !== i && C.prop("checked")
                     },
                     unchecked: function() {
                         return !m.is.checked()
                     }
                 },
                 can: {
                     change: function() {
                         return !(x.hasClass(g.disabled) || x.hasClass(g.readOnly) || C.prop("disabled"))
                     },
                     uncheck: function() {
                         return "boolean" == typeof f.uncheckable ? f.uncheckable : !m.is.radio()
                     }
                 },
                 set: {
                     checked: function() {
                         x.addClass(g.checked)
                     },
                     tab: function() {
                         C.attr("tabindex") === i && C.attr("tabindex", 0)
                     }
                 },
                 create: {
                     label: function() {
                         C.prevAll(h.label).length > 0 ? (C.prev(h.label).detach().insertAfter(C), m.debug("Moving existing label", w)) : m.has.label() || (w = e("<label>").insertAfter(C), m.debug("Creating label", w))
                     }
                 },
                 has: {
                     label: function() {
                         return w.length > 0
                     }
                 },
                 add: {
                     events: function() {
                         m.verbose("Attaching checkbox events"), x.on("click" + b, m.toggle).on("keydown" + b, h.input, m.event.keydown)
                     }
                 },
                 remove: {
                     checked: function() {
                         x.removeClass(g.checked)
                     },
                     events: function() {
                         m.debug("Removing events"), x.off(b).removeData(y), C.off(b, m.event.keydown), w.off(b)
                     }
                 },
                 enable: function() {
                     m.debug("Enabling checkbox functionality"), x.removeClass(g.disabled), C.prop("disabled", !1), f.onEnabled.call(C.get())
                 },
                 disable: function() {
                     m.debug("Disabling checkbox functionality"), x.addClass(g.disabled), C.prop("disabled", "disabled"), f.onDisabled.call(C.get())
                 },
                 check: function() {
                     m.debug("Enabling checkbox", C), C.prop("checked", !0).trigger("change"), m.set.checked(), f.onChange.call(C.get()), f.onChecked.call(C.get())
                 },
                 uncheck: function() {
                     m.debug("Disabling checkbox"), C.prop("checked", !1).trigger("change"), m.remove.checked(), f.onChange.call(C.get()), f.onUnchecked.call(C.get())
                 },
                 toggle: function() {
                     return m.can.change() ? (m.verbose("Determining new checkbox state"), void(m.is.unchecked() ? m.check() : m.is.checked() && m.can.uncheck() && m.uncheck())) : (console.log(m.can.change()), void m.debug("Checkbox is read-only or disabled, ignoring toggle"))
                 },
                 setting: function(t, n) {
                     if (m.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 },
                 debug: function() {
                     f.debug && (f.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), m.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     f.verbose && f.debug && (f.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), m.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     m.error = Function.prototype.bind.call(console.error, console, f.name + ":"), m.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         f.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: k,
                             "Execution Time": n
                         })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 100)
                     },
                     display: function() {
                         var t = f.name + ":",
                             n = 0;
                         s = !1, clearTimeout(m.performance.timer), e.each(c, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, n, a) {
                     var r, s, c, l = T;
                     return n = n || d, a = k || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (m.error(v.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, u ? (T === i && m.initialize(), m.invoke(l)) : (T !== i && m.destroy(), m.initialize())
         }), o !== i ? o : this
     }, e.fn.checkbox.settings = {
         name: "Checkbox",
         namespace: "checkbox",
         debug: !1,
         verbose: !0,
         performance: !0,
         uncheckable: "auto",
         fireOnInit: !0,
         onChange: function() {},
         onChecked: function() {},
         onUnchecked: function() {},
         onEnabled: function() {},
         onDisabled: function() {},
         className: {
             checked: "checked",
             disabled: "disabled",
             radio: "radio",
             readOnly: "read-only"
         },
         error: {
             method: "The method you called is not defined"
         },
         selector: {
             input: "input[type=checkbox], input[type=radio]",
             label: "label"
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     e.fn.dimmer = function(t) {
         var o, a = e(this),
             r = (new Date).getTime(),
             s = [],
             c = arguments[0],
             l = "string" == typeof c,
             u = [].slice.call(arguments, 1);
         return a.each(function() {
             var d, m, f, g = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.dimmer.settings, t) : e.extend({}, e.fn.dimmer.settings),
                 p = g.selector,
                 h = g.namespace,
                 v = g.className,
                 b = g.error,
                 y = "." + h,
                 x = "module-" + h,
                 w = a.selector || "",
                 C = "ontouchstart" in n.documentElement ? "touchstart" : "click",
                 T = e(this),
                 k = this,
                 S = T.data(x);
             f = {
                 preinitialize: function() {
                     f.is.dimmer() ? (m = T.parent(), d = T) : (m = T, d = f.has.dimmer() ? g.dimmerName ? m.children(p.dimmer).filter("." + g.dimmerName) : m.children(p.dimmer) : f.create())
                 },
                 initialize: function() {
                     f.debug("Initializing dimmer", g), "hover" == g.on ? m.on("mouseenter" + y, f.show).on("mouseleave" + y, f.hide) : "click" == g.on && m.on(C + y, f.toggle), f.is.page() && (f.debug("Setting as a page dimmer", m), f.set.pageDimmer()), f.is.closable() && (f.verbose("Adding dimmer close event", d), d.on(C + y, f.event.click)), f.set.dimmable(), f.instantiate()
                 },
                 instantiate: function() {
                     f.verbose("Storing instance of module", f), S = f, T.data(x, S)
                 },
                 destroy: function() {
                     f.verbose("Destroying previous module", d), T.removeData(x), m.off(y), d.off(y)
                 },
                 event: {
                     click: function(t) {
                         f.verbose("Determining if event occured on dimmer", t), (0 === d.find(t.target).length || e(t.target).is(p.content)) && (f.hide(), t.stopImmediatePropagation())
                     }
                 },
                 addContent: function(t) {
                     var n = e(t);
                     f.debug("Add content to dimmer", n), n.parent()[0] !== d[0] && n.detach().appendTo(d)
                 },
                 create: function() {
                     var t = e(g.template.dimmer());
                     return g.variation && (f.debug("Creating dimmer with variation", g.variation), t.addClass(v.variation)), g.dimmerName && (f.debug("Creating named dimmer", g.dimmerName), t.addClass(g.dimmerName)), t.appendTo(m), t
                 },
                 show: function(t) {
                     t = e.isFunction(t) ? t : function() {}, f.debug("Showing dimmer", d, g), f.is.dimmed() && !f.is.animating() || !f.is.enabled() ? f.debug("Dimmer is already shown or disabled") : (f.animate.show(t), g.onShow.call(k), g.onChange.call(k))
                 },
                 hide: function(t) {
                     t = e.isFunction(t) ? t : function() {}, f.is.dimmed() || f.is.animating() ? (f.debug("Hiding dimmer", d), f.animate.hide(t), g.onHide.call(k), g.onChange.call(k)) : f.debug("Dimmer is not visible")
                 },
                 toggle: function() {
                     f.verbose("Toggling dimmer visibility", d), f.is.dimmed() ? f.hide() : f.show()
                 },
                 animate: {
                     show: function(t) {
                         t = e.isFunction(t) ? t : function() {}, g.useCSS && e.fn.transition !== i && d.transition("is supported") ? d.transition({
                             animation: g.transition + " in",
                             queue: !1,
                             duration: f.get.duration(),
                             onStart: function() {
                                 f.set.dimmed()
                             },
                             onComplete: function() {
                                 f.set.active(), t()
                             }
                         }) : (f.verbose("Showing dimmer animation with javascript"), f.set.dimmed(), d.stop().css({
                             opacity: 0,
                             width: "100%",
                             height: "100%"
                         }).fadeTo(f.get.duration(), 1, function() {
                             d.removeAttr("style"), f.set.active(), t()
                         }))
                     },
                     hide: function(t) {
                         t = e.isFunction(t) ? t : function() {}, g.useCSS && e.fn.transition !== i && d.transition("is supported") ? (f.verbose("Hiding dimmer with css"), d.transition({
                             animation: g.transition + " out",
                             queue: !1,
                             duration: f.get.duration(),
                             onStart: function() {
                                 f.remove.dimmed()
                             },
                             onComplete: function() {
                                 f.remove.active(), t()
                             }
                         })) : (f.verbose("Hiding dimmer with javascript"), f.remove.dimmed(), d.stop().fadeOut(f.get.duration(), function() {
                             f.remove.active(), d.removeAttr("style"), t()
                         }))
                     }
                 },
                 get: {
                     dimmer: function() {
                         return d
                     },
                     duration: function() {
                         return "object" == typeof g.duration ? f.is.active() ? g.duration.hide : g.duration.show : g.duration
                     }
                 },
                 has: {
                     dimmer: function() {
                         return g.dimmerName ? T.children(p.dimmer).filter("." + g.dimmerName).length > 0 : T.children(p.dimmer).length > 0
                     }
                 },
                 is: {
                     active: function() {
                         return d.hasClass(v.active)
                     },
                     animating: function() {
                         return d.is(":animated") || d.hasClass(v.animating)
                     },
                     closable: function() {
                         return "auto" == g.closable ? "hover" == g.on ? !1 : !0 : g.closable
                     },
                     dimmer: function() {
                         return T.is(p.dimmer)
                     },
                     dimmable: function() {
                         return T.is(p.dimmable)
                     },
                     dimmed: function() {
                         return m.hasClass(v.dimmed)
                     },
                     disabled: function() {
                         return m.hasClass(v.disabled)
                     },
                     enabled: function() {
                         return !f.is.disabled()
                     },
                     page: function() {
                         return m.is("body")
                     },
                     pageDimmer: function() {
                         return d.hasClass(v.pageDimmer)
                     }
                 },
                 can: {
                     show: function() {
                         return !d.hasClass(v.disabled)
                     }
                 },
                 set: {
                     active: function() {
                         d.addClass(v.active)
                     },
                     dimmable: function() {
                         m.addClass(v.dimmable)
                     },
                     dimmed: function() {
                         m.addClass(v.dimmed)
                     },
                     pageDimmer: function() {
                         d.addClass(v.pageDimmer)
                     },
                     disabled: function() {
                         d.addClass(v.disabled)
                     }
                 },
                 remove: {
                     active: function() {
                         d.removeClass(v.active)
                     },
                     dimmed: function() {
                         m.removeClass(v.dimmed)
                     },
                     disabled: function() {
                         d.removeClass(v.disabled)
                     }
                 },
                 setting: function(t, n) {
                     if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 },
                 debug: function() {
                     g.debug && (g.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), f.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     g.verbose && g.debug && (g.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), f.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     f.error = Function.prototype.bind.call(console.error, console, g.name + ":"), f.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         g.performance && (t = (new Date).getTime(), i = r || t, n = t - i, r = t, s.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: k,
                             "Execution Time": n
                         })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 100)
                     },
                     display: function() {
                         var t = g.name + ":",
                             n = 0;
                         r = !1, clearTimeout(f.performance.timer), e.each(s, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", w && (t += " '" + w + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), s = []
                     }
                 },
                 invoke: function(t, n, a) {
                     var r, s, c, l = S;
                     return n = n || u, a = k || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (f.error(b.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, f.preinitialize(), l ? (S === i && f.initialize(), f.invoke(c)) : (S !== i && f.destroy(), f.initialize())
         }), o !== i ? o : this
     }, e.fn.dimmer.settings = {
         name: "Dimmer",
         namespace: "dimmer",
         debug: !1,
         verbose: !0,
         performance: !0,
         dimmerName: !1,
         variation: !1,
         closable: "auto",
         transition: "fade",
         useCSS: !0,
         on: !1,
         duration: {
             show: 500,
             hide: 500
         },
         onChange: function() {},
         onShow: function() {},
         onHide: function() {},
         error: {
             method: "The method you called is not defined."
         },
         selector: {
             dimmable: ".dimmable",
             dimmer: ".ui.dimmer",
             content: ".ui.dimmer > .content, .ui.dimmer > .content > .center"
         },
         template: {
             dimmer: function() {
                 return e("<div />").attr("class", "ui dimmer")
             }
         },
         className: {
             active: "active",
             animating: "animating",
             dimmable: "dimmable",
             dimmed: "dimmed",
             disabled: "disabled",
             hide: "hide",
             pageDimmer: "page",
             show: "show"
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.dropdown = function(o) {
         var a, r = e(this),
             s = e(n),
             c = r.selector || "",
             l = "ontouchstart" in n.documentElement,
             u = (new Date).getTime(),
             d = [],
             m = arguments[0],
             f = "string" == typeof m,
             g = [].slice.call(arguments, 1);
         return r.each(function() {
             var p, h, v, b, y = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.dropdown.settings, o) : e.extend({}, e.fn.dropdown.settings),
                 x = y.className,
                 w = y.metadata,
                 C = y.namespace,
                 T = y.selector,
                 k = y.error,
                 S = "." + C,
                 A = "module-" + C,
                 P = e(this),
                 E = P.find(T.text),
                 F = P.find(T.search),
                 R = P.find(T.input),
                 D = P.prev().find(T.text).length > 0 ? P.prev().find(T.text) : P.prev(),
                 O = P.children(T.menu),
                 z = O.find(T.item),
                 j = !1,
                 q = !1,
                 N = this,
                 I = P.data(A);
             b = {
                 initialize: function() {
                     b.debug("Initializing dropdown", y), b.setup.layout(), b.save.defaults(), b.set.selected(), b.create.id(), l && b.bind.touchEvents(), b.bind.mouseEvents(), b.bind.keyboardEvents(), b.observeChanges(), b.instantiate()
                 },
                 instantiate: function() {
                     b.verbose("Storing instance of dropdown", b), I = b, P.data(A, b)
                 },
                 destroy: function() {
                     b.verbose("Destroying previous dropdown for", P), b.remove.tabbable(), P.off(S).removeData(A), s.off(p)
                 },
                 observeChanges: function() {
                     "MutationObserver" in t && (v = new MutationObserver(function() {
                         b.debug("DOM tree modified, updating selector cache"), b.refresh()
                     }), v.observe(N, {
                         childList: !0,
                         subtree: !0
                     }), b.debug("Setting up mutation observer", v))
                 },
                 create: {
                     id: function() {
                         b.verbose("Creating unique id for element"), h = b.get.uniqueID(), p = "." + h
                     }
                 },
                 search: function() {
                     var e;
                     e = F.val(), b.verbose("Searching for query", e), b.filter(e), b.is.searchSelection() && b.can.show() && b.show()
                 },
                 setup: {
                     layout: function() {
                         P.is("select") && b.setup.select(), b.is.search() && !b.is.searchable() && (F = e("<input />").addClass(x.search).insertBefore(E)), y.allowTab && b.set.tabbable()
                     },
                     select: function() {
                         var t = b.get.selectValues();
                         b.debug("Dropdown initialized on a select", t), R = P, R.parents(T.dropdown).length > 0 ? (b.debug("Creating dropdown menu only from template"), P = R.closest(T.dropdown), 0 === P.find("." + x.dropdown).length && e("<div />").addClass(x.menu).html(y.templates.menu(t)).appendTo(P)) : (b.debug("Creating entire dropdown from template"), P = e("<div />").attr("class", R.attr("class")).addClass(x.selection).addClass(x.dropdown).html(y.templates.dropdown(t)).insertBefore(R), R.removeAttr("class").prependTo(P)), b.refresh()
                     }
                 },
                 refresh: function() {
                     E = P.find(T.text), F = P.find(T.search), R = P.find(T.input), O = P.children(T.menu), z = O.find(T.item)
                 },
                 toggle: function() {
                     b.verbose("Toggling menu visibility"), b.is.active() ? b.hide() : b.show()
                 },
                 show: function(t) {
                     t = e.isFunction(t) ? t : function() {}, !b.can.show() || b.is.active() || b.is.allFiltered() || (b.debug("Showing dropdown"), b.animate.show(function() {
                         b.can.click() && b.bind.intent(), b.set.visible(), t.call(N)
                     }), y.onShow.call(N))
                 },
                 hide: function(t) {
                     t = e.isFunction(t) ? t : function() {}, b.is.active() && (b.debug("Hiding dropdown"), b.animate.hide(function() {
                         b.remove.visible(), t.call(N)
                     }), y.onHide.call(N))
                 },
                 hideOthers: function() {
                     b.verbose("Finding other dropdowns to hide"), r.not(P).has(T.menu + ":visible:not(." + x.animating + ")").dropdown("hide")
                 },
                 hideSubMenus: function() {
                     var e = O.find(T.menu);
                     e.transition("hide")
                 },
                 bind: {
                     keyboardEvents: function() {
                         b.debug("Binding keyboard events"), P.on("keydown" + S, b.event.keydown), b.is.searchable() && P.on(b.get.inputEvent(), T.search, b.event.input)
                     },
                     touchEvents: function() {
                         b.debug("Touch device detected binding additional touch events"), b.is.searchSelection() || P.on("touchstart" + S, b.event.test.toggle), O.on("touchstart" + S, T.item, b.event.item.mouseenter)
                     },
                     mouseEvents: function() {
                         b.verbose("Mouse detected binding mouse events"), b.is.searchSelection() ? P.on("mousedown" + S, T.menu, b.event.menu.activate).on("mouseup" + S, T.menu, b.event.menu.deactivate).on("click" + S, T.search, b.show).on("focus" + S, T.search, b.event.searchFocus).on("blur" + S, T.search, b.event.searchBlur).on("click" + S, T.text, b.event.searchTextFocus) : ("click" == y.on ? P.on("click" + S, b.event.test.toggle) : "hover" == y.on ? P.on("mouseenter" + S, b.delay.show).on("mouseleave" + S, b.delay.hide) : P.on(y.on + S, b.toggle), P.on("mousedown" + S, b.event.mousedown).on("mouseup" + S, b.event.mouseup).on("focus" + S, b.event.focus).on("blur" + S, b.event.blur)), O.on("mouseenter" + S, T.item, b.event.item.mouseenter).on("mouseleave" + S, T.item, b.event.item.mouseleave).on("click" + S, T.item, b.event.item.click)
                     },
                     intent: function() {
                         b.verbose("Binding hide intent event to document"), l && s.on("touchstart" + p, b.event.test.touch).on("touchmove" + p, b.event.test.touch), s.on("click" + p, b.event.test.hide)
                     }
                 },
                 unbind: {
                     intent: function() {
                         b.verbose("Removing hide intent event from document"), l && s.off("touchstart" + p).off("touchmove" + p), s.off("click" + p)
                     }
                 },
                 filter: function(t) {
                     var n = e(),
                         i = b.escape.regExp(t),
                         o = new RegExp("^" + i, "igm"),
                         a = new RegExp(i, "ig");
                     b.verbose("Searching for matching values"), z.each(function() {
                         var t = e(this),
                             i = String(b.get.choiceText(t, !1)),
                             r = String(b.get.choiceValue(t, i));
                         i.match(o) || r.match(o) ? n = n.add(t) : y.fullTextSearch && (i.match(a) || r.match(a)) && (n = n.add(t))
                     }), b.debug("Setting filter", t), b.remove.filteredItem(), z.not(n).addClass(x.filtered), b.verbose("Selecting first non-filtered element"), b.remove.selectedItem(), z.not("." + x.filtered).eq(0).addClass(x.selected), b.is.allFiltered() && (b.debug("All items filtered, hiding dropdown", t), b.is.searchSelection() && b.hide(), y.onNoResults.call(N, t))
                 },
                 focusSearch: function() {
                     b.is.search() && F.focus()
                 },
                 event: {
                     mousedown: function() {
                         j = !0
                     },
                     mouseup: function() {
                         j = !1
                     },
                     focus: function() {
                         !j && b.is.hidden() && b.show()
                     },
                     blur: function() {
                         var e = n.activeElement === this;
                         j || e || b.hide()
                     },
                     searchFocus: function() {
                         j = !0, b.show()
                     },
                     searchBlur: function() {
                         var e = n.activeElement === this;
                         q || e || b.hide()
                     },
                     searchTextFocus: function() {
                         j = !0, F.focus()
                     },
                     input: function() {
                         b.is.searchSelection() && b.set.filtered(), clearTimeout(b.timer), b.timer = setTimeout(b.search, y.delay.search)
                     },
                     keydown: function(e) {
                         var t, n = z.not(x.filtered).filter("." + x.selected).eq(0),
                             i = z.not("." + x.filtered),
                             o = e.which,
                             a = {
                                 enter: 13,
                                 escape: 27,
                                 upArrow: 38,
                                 downArrow: 40
                             },
                             r = x.selected,
                             s = i.index(n),
                             c = n.length > 0;
                         if (c || (n = z.filter("." + x.active).eq(0), c = n.length > 0), o == a.escape && (b.verbose("Escape key pressed, closing dropdown"), b.hide()), o == a.downArrow && (b.verbose("Down key pressed, showing dropdown"), b.show()), b.is.visible()) {
                             if (o == a.enter && c) return b.verbose("Enter key pressed, choosing selected item"), b.event.item.click.call(n, e), e.preventDefault(), !1;
                             o == a.upArrow ? (t = c ? n.prevAll(T.item + ":not(." + x.filtered + ")").eq(0) : i.eq(0), 0 !== s && (b.verbose("Up key pressed, changing active item"), z.removeClass(r), t.addClass(r), b.set.scrollPosition(t)), e.preventDefault()) : o == a.downArrow && (t = c ? n.nextAll(T.item + ":not(." + x.filtered + ")").eq(0) : i.eq(0), s + 1 < i.length && (b.verbose("Down key pressed, changing active item"), z.removeClass(r), t.addClass(r), b.set.scrollPosition(t)), e.preventDefault())
                         } else o == a.enter && b.show()
                     },
                     test: {
                         toggle: function(e) {
                             b.determine.eventInMenu(e, b.toggle) && e.preventDefault()
                         },
                         touch: function(e) {
                             b.determine.eventInMenu(e, function() {
                                 "touchstart" == e.type ? b.timer = setTimeout(b.hide, y.delay.touch) : "touchmove" == e.type && clearTimeout(b.timer)
                             }), e.stopPropagation()
                         },
                         hide: function(e) {
                             b.determine.eventInModule(e, b.hide)
                         }
                     },
                     menu: {
                         activate: function() {
                             q = !0
                         },
                         deactivate: function() {
                             q = !1
                         }
                     },
                     item: {
                         mouseenter: function(t) {
                             var n = e(this).children(T.menu),
                                 i = e(this).siblings(T.item).children(T.menu);
                             n.length > 0 && (clearTimeout(b.itemTimer), b.itemTimer = setTimeout(function() {
                                 e.each(i, function() {
                                     b.animate.hide(!1, e(this))
                                 }), b.verbose("Showing sub-menu", n), b.animate.show(!1, n)
                             }, y.delay.show), t.preventDefault())
                         },
                         mouseleave: function() {
                             var t = e(this).children(T.menu);
                             t.length > 0 && (clearTimeout(b.itemTimer), b.itemTimer = setTimeout(function() {
                                 b.verbose("Hiding sub-menu", t), b.animate.hide(!1, t)
                             }, y.delay.hide))
                         },
                         click: function(t) {
                             var n = e(this),
                                 i = e(t.target),
                                 o = n.find(T.menu),
                                 a = b.get.choiceText(n),
                                 r = b.get.choiceValue(n, a),
                                 s = function() {
                                     b.remove.searchTerm(), b.determine.selectAction(a, r)
                                 },
                                 c = o.length > 0,
                                 l = o.find(i).length > 0;
                             return l ? !1 : void((!c || y.allowCategorySelection) && s())
                         }
                     },
                     resetStyle: function() {
                         e(this).removeAttr("style")
                     }
                 },
                 determine: {
                     selectAction: function(t, n) {
                         b.verbose("Determining action", y.action), e.isFunction(b.action[y.action]) ? (b.verbose("Triggering preset action", y.action, t, n), b.action[y.action](t, n)) : e.isFunction(y.action) ? (b.verbose("Triggering user action", y.action, t, n), y.action(t, n)) : b.error(k.action, y.action)
                     },
                     eventInModule: function(t, n) {
                         return n = e.isFunction(n) ? n : function() {}, 0 === e(t.target).closest(P).length ? (b.verbose("Triggering event", n), n(), !0) : (b.verbose("Event occurred in dropdown, canceling callback"), !1)
                     },
                     eventInMenu: function(t, n) {
                         return n = e.isFunction(n) ? n : function() {}, 0 === e(t.target).closest(O).length ? (b.verbose("Triggering event", n), n(), !0) : (b.verbose("Event occurred in dropdown menu, canceling callback"), !1)
                     }
                 },
                 action: {
                     nothing: function() {},
                     hide: function() {
                         b.hide(function() {
                             b.remove.filteredItem()
                         })
                     },
                     select: function(e, t) {
                         t = t !== i ? t : e, b.set.selected(t), b.set.value(t), b.hide(function() {
                             b.remove.filteredItem()
                         })
                     },
                     activate: function(e, t) {
                         t = t !== i ? t : e, b.set.selected(t), b.set.value(t), b.hide(function() {
                             b.remove.filteredItem()
                         })
                     },
                     combo: function(e, t) {
                         t = t !== i ? t : e, b.set.selected(t), b.set.value(t), b.hide(function() {
                             b.remove.filteredItem()
                         })
                     }
                 },
                 get: {
                     text: function() {
                         return E.text()
                     },
                     value: function() {
                         return R.length > 0 ? R.val() : P.data(w.value)
                     },
                     choiceText: function(e, t) {
                         return t = t !== i ? t : y.preserveHTML, e !== i ? (e.find(T.menu).length > 0 && (b.verbose("Retreiving text of element with sub-menu"), e = e.clone(), e.find(T.menu).remove(), e.find(T.menuIcon).remove()), e.data(w.text) !== i ? e.data(w.text) : t ? e.html().trim() : e.text().trim()) : void 0
                     },
                     choiceValue: function(e, t) {
                         return t = t || b.get.choiceText(E), e.data(w.value) !== i ? e.data(w.value) : "string" == typeof t ? t.toLowerCase().trim() : t.trim()
                     },
                     inputEvent: function() {
                         var e = F[0];
                         return e ? e.oninput !== i ? "input" : e.onpropertychange !== i ? "propertychange" : "keyup" : !1
                     },
                     selectValues: function() {
                         var t = {};
                         return t.values = y.sortSelect ? {} : [], P.find("option").each(function() {
                             var n = e(this).html(),
                                 o = e(this).attr("value") !== i ? e(this).attr("value") : n;
                             "" === o ? t.placeholder = n : y.sortSelect ? t.values[o] = {
                                 name: n,
                                 value: o
                             } : t.values.push({
                                 name: n,
                                 value: o
                             })
                         }), y.sortSelect ? b.debug("Retrieved and sorted values from select", t) : b.debug("Retreived values from select", t), t
                     },
                     activeItem: function() {
                         return z.filter("." + x.active)
                     },
                     item: function(t, n) {
                         var o = !1;
                         return t = t !== i ? t : b.get.value() !== i ? b.get.value() : b.get.text(), n = "" === t || 0 === t ? !0 : n || !1, t !== i ? z.each(function() {
                             var i = e(this),
                                 a = b.get.choiceText(i),
                                 r = b.get.choiceValue(i, a);
                             n ? (b.verbose("Ambiguous dropdown value using strict type check", i, t), r === t ? o = e(this) : o || a !== t || (o = e(this))) : r == t ? (b.verbose("Found select item by value", r, t), o = e(this)) : o || a != t || (b.verbose("Found select item by text", a, t), o = e(this))
                         }) : t = b.get.text(), o || !1
                     },
                     uniqueID: function() {
                         return (Math.random().toString(16) + "000000000").substr(2, 8)
                     }
                 },
                 restore: {
                     defaults: function() {
                         b.restore.defaultText(), b.restore.defaultValue()
                     },
                     defaultText: function() {
                         var e = P.data(w.defaultText);
                         b.debug("Restoring default text", e), b.set.text(e), E.addClass(y.className.placeholder)
                     },
                     defaultValue: function() {
                         var e = P.data(w.defaultValue);
                         e !== i && (b.debug("Restoring default value", e), e.length ? (b.set.selected(e), b.set.value(e)) : (b.remove.activeItem(), b.remove.selectedItem()))
                     }
                 },
                 save: {
                     defaults: function() {
                         b.save.defaultText(), b.save.defaultValue()
                     },
                     defaultValue: function() {
                         P.data(w.defaultValue, b.get.value())
                     },
                     defaultText: function() {
                         P.data(w.defaultText, E.text())
                     }
                 },
                 set: {
                     filtered: function() {
                         var e = F.val(),
                             t = "string" == typeof e && e.length > 0;
                         t ? E.addClass(x.filtered) : E.removeClass(x.filtered)
                     },
                     tabbable: function() {
                         b.is.searchable() ? (b.debug("Searchable dropdown initialized"), F.val("").attr("tabindex", 0), O.attr("tabindex", "-1")) : (b.debug("Simple selection dropdown initialized"), P.attr("tabindex") || (P.attr("tabindex", 0), O.attr("tabindex", "-1")))
                     },
                     scrollPosition: function(e, t) {
                         var n, o, a, r, s, c, l, u, d, m = 5;
                         e = e || b.get.activeItem(), n = e && e.length > 0, t = t !== i ? t : !1, e && n && (O.hasClass(x.visible) || O.addClass(x.loading), l = O.height(), a = e.height(), c = O.scrollTop(), s = O.offset().top, r = e.offset().top, o = c - s + r, d = o + m > c + l, u = c > o - m, b.debug("Scrolling to active item", o), (u || d || t) && O.scrollTop(o).removeClass(x.loading))
                     },
                     text: function(e) {
                         "combo" == y.action ? (b.debug("Changing combo button text", e, D), y.preserveHTML ? D.html(e) : D.text(e)) : "select" !== y.action && (b.debug("Changing text", e, E), E.removeClass(x.filtered).removeClass(x.placeholder), y.preserveHTML ? E.html(e) : E.text(e))
                     },
                     value: function(e) {
                         b.debug("Adding selected value to hidden input", e, R), R.length > 0 ? R.val(e).trigger("change") : P.data(w.value, e)
                     },
                     active: function() {
                         P.addClass(x.active)
                     },
                     visible: function() {
                         P.addClass(x.visible)
                     },
                     selected: function(e) {
                         var t, n = b.get.item(e);
                         n && (b.debug("Setting selected menu item to", n), b.remove.activeItem(), b.remove.selectedItem(), n.addClass(x.active).addClass(x.selected), t = b.get.choiceText(n), b.set.text(t), y.onChange.call(N, e, t, n))
                     }
                 },
                 remove: {
                     active: function() {
                         P.removeClass(x.active)
                     },
                     visible: function() {
                         P.removeClass(x.visible)
                     },
                     activeItem: function() {
                         z.removeClass(x.active)
                     },
                     filteredItem: function() {
                         z.removeClass(x.filtered)
                     },
                     searchTerm: function() {
                         F.val("")
                     },
                     selectedItem: function() {
                         z.removeClass(x.selected)
                     },
                     tabbable: function() {
                         b.is.searchable() ? (b.debug("Searchable dropdown initialized"), F.attr("tabindex", "-1"), O.attr("tabindex", "-1")) : (b.debug("Simple selection dropdown initialized"), P.attr("tabindex", "-1"), O.attr("tabindex", "-1"))
                     }
                 },
                 is: {
                     active: function() {
                         return P.hasClass(x.active)
                     },
                     animating: function(e) {
                         return e ? e.is(":animated") || e.transition && e.transition("is animating") : O.is(":animated") || O.transition && O.transition("is animating")
                     },
                     allFiltered: function() {
                         return z.filter("." + x.filtered).length === z.length
                     },
                     hidden: function(e) {
                         return e ? e.is(":hidden") : O.is(":hidden")
                     },
                     search: function() {
                         return P.hasClass(x.search)
                     },
                     searchable: function() {
                         return F.length > 0
                     },
                     searchSelection: function() {
                         return b.is.searchable() && F.parent().is(P)
                     },
                     selection: function() {
                         return P.hasClass(x.selection)
                     },
                     upward: function() {
                         return P.hasClass(x.upward)
                     },
                     visible: function(e) {
                         return e ? e.is(":visible") : O.is(":visible")
                     }
                 },
                 can: {
                     click: function() {
                         return l || "click" == y.on
                     },
                     show: function() {
                         return !P.hasClass(x.disabled)
                     }
                 },
                 animate: {
                     show: function(t, n) {
                         var o = n || O,
                             a = n ? function() {} : function() {
                                 b.hideSubMenus(), b.hideOthers(), b.set.active()
                             };
                         t = e.isFunction(t) ? t : function() {}, b.set.scrollPosition(b.get.activeItem(), !0), b.verbose("Doing menu show animation", o), (b.is.hidden(o) || b.is.animating(o)) && ("auto" == y.transition && (y.transition = b.is.upward() ? "slide up" : "slide down"), "none" == y.transition ? t.call(N) : e.fn.transition !== i && P.transition("is supported") ? o.transition({
                             animation: y.transition + " in",
                             debug: y.debug,
                             verbose: y.verbose,
                             duration: y.duration,
                             queue: !0,
                             onStart: a,
                             onComplete: function() {
                                 t.call(N)
                             }
                         }) : "slide down" == y.transition ? (a(), o.hide().clearQueue().children().clearQueue().css("opacity", 0).delay(50).animate({
                             opacity: 1
                         }, y.duration, "easeOutQuad", b.event.resetStyle).end().slideDown(100, "easeOutQuad", function() {
                             b.event.resetStyle.call(this), t.call(N)
                         })) : "fade" == y.transition ? (a(), o.hide().clearQueue().fadeIn(y.duration, function() {
                             b.event.resetStyle.call(this), t.call(N)
                         })) : b.error(k.transition, y.transition))
                     },
                     hide: function(t, n) {
                         var o = n || O,
                             a = (n ? .9 * y.duration : y.duration, n ? function() {} : function() {
                                 b.can.click() && b.unbind.intent(), b.focusSearch(), b.remove.active()
                             });
                         t = e.isFunction(t) ? t : function() {}, (b.is.visible(o) || b.is.animating(o)) && (b.verbose("Doing menu hide animation", o), "auto" == y.transition && (y.transition = b.is.upward() ? "slide up" : "slide down"), "none" == y.transition ? t.call(N) : e.fn.transition !== i && P.transition("is supported") ? o.transition({
                             animation: y.transition + " out",
                             duration: y.duration,
                             debug: y.debug,
                             verbose: y.verbose,
                             queue: !0,
                             onStart: a,
                             onComplete: function() {
                                 t.call(N)
                             }
                         }) : "slide down" == y.transition ? (a(), o.show().clearQueue().children().clearQueue().css("opacity", 1).animate({
                             opacity: 0
                         }, 100, "easeOutQuad", b.event.resetStyle).end().delay(50).slideUp(100, "easeOutQuad", function() {
                             b.event.resetStyle.call(this), t.call(N)
                         })) : "fade" == y.transition ? (a(), o.show().clearQueue().fadeOut(150, function() {
                             b.event.resetStyle.call(this), t.call(N)
                         })) : b.error(k.transition))
                     }
                 },
                 delay: {
                     show: function() {
                         b.verbose("Delaying show event to ensure user intent"), clearTimeout(b.timer), b.timer = setTimeout(b.show, y.delay.show)
                     },
                     hide: function() {
                         b.verbose("Delaying hide event to ensure user intent"), clearTimeout(b.timer), b.timer = setTimeout(b.hide, y.delay.hide)
                     }
                 },
                 escape: {
                     regExp: function(e) {
                         return e = String(e), e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
                     }
                 },
                 setting: function(t, n) {
                     if (b.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, y, t);
                     else {
                         if (n === i) return y[t];
                         y[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, b, t);
                     else {
                         if (n === i) return b[t];
                         b[t] = n
                     }
                 },
                 debug: function() {
                     y.debug && (y.performance ? b.performance.log(arguments) : (b.debug = Function.prototype.bind.call(console.info, console, y.name + ":"), b.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     y.verbose && y.debug && (y.performance ? b.performance.log(arguments) : (b.verbose = Function.prototype.bind.call(console.info, console, y.name + ":"), b.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     b.error = Function.prototype.bind.call(console.error, console, y.name + ":"), b.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         y.performance && (t = (new Date).getTime(), i = u || t, n = t - i, u = t, d.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: N,
                             "Execution Time": n
                         })), clearTimeout(b.performance.timer), b.performance.timer = setTimeout(b.performance.display, 100)
                     },
                     display: function() {
                         var t = y.name + ":",
                             n = 0;
                         u = !1, clearTimeout(b.performance.timer), e.each(d, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", c && (t += " '" + c + "'"), (console.group !== i || console.table !== i) && d.length > 0 && (console.groupCollapsed(t), console.table ? console.table(d) : e.each(d, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), d = []
                     }
                 },
                 invoke: function(t, n, o) {
                     var r, s, c, l = I;
                     return n = n || g, o = N || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (b.error(k.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, f ? (I === i && b.initialize(), b.invoke(m)) : (I !== i && b.destroy(), b.initialize())
         }), a !== i ? a : this
     }, e.fn.dropdown.settings = {
         debug: !1,
         verbose: !0,
         performance: !0,
         on: "click",
         action: "activate",
         allowTab: !0,
         fullTextSearch: !1,
         preserveHTML: !0,
         sortSelect: !1,
         allowCategorySelection: !1,
         delay: {
             hide: 300,
             show: 200,
             search: 50,
             touch: 50
         },
         transition: "auto",
         duration: 250,
         onNoResults: function() {},
         onChange: function() {},
         onShow: function() {},
         onHide: function() {},
         name: "Dropdown",
         namespace: "dropdown",
         error: {
             action: "You called a dropdown action that was not defined",
             method: "The method you called is not defined.",
             transition: "The requested transition was not found"
         },
         metadata: {
             defaultText: "defaultText",
             defaultValue: "defaultValue",
             text: "text",
             value: "value"
         },
         selector: {
             dropdown: ".ui.dropdown",
             input: '> input[type="hidden"], > select',
             item: ".item",
             menu: ".menu",
             menuIcon: ".dropdown.icon",
             search: "> input.search, .menu > .search > input, .menu > input.search",
             text: "> .text:not(.icon)"
         },
         className: {
             active: "active",
             animating: "animating",
             disabled: "disabled",
             dropdown: "ui dropdown",
             filtered: "filtered",
             loading: "loading",
             menu: "menu",
             placeholder: "default",
             search: "search",
             selected: "selected",
             selection: "selection",
             upward: "upward",
             visible: "visible"
         }
     }, e.fn.dropdown.settings.templates = {
         menu: function(t) {
             var n = (t.placeholder || !1, t.values || {}, "");
             return e.each(t.values, function(e, t) {
                 n += '<div class="item" data-value="' + t.value + '">' + t.name + "</div>"
             }), n
         },
         dropdown: function(t) {
             var n = t.placeholder || !1,
                 i = (t.values || {}, "");
             return i += '<i class="dropdown icon"></i>', i += t.placeholder ? '<div class="default text">' + n + "</div>" : '<div class="text"></div>', i += '<div class="menu">', e.each(t.values, function(e, t) {
                 i += '<div class="item" data-value="' + t.value + '">' + t.name + "</div>"
             }), i += "</div>"
         }
     }, e.extend(e.easing, {
         easeOutQuad: function(e, t, n, i, o) {
             return -i * (t /= o) * (t - 2) + n
         }
     })
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.modal = function(o) {
         var a, r = e(this),
             s = e(t),
             c = e(n),
             l = e("body"),
             u = r.selector || "",
             d = (new Date).getTime(),
             m = [],
             f = arguments[0],
             g = "string" == typeof f,
             p = [].slice.call(arguments, 1),
             h = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                 setTimeout(e, 0)
             };
         return r.each(function() {
             var r, v, b, y, x, w, C, T, k, S = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.modal.settings, o) : e.extend({}, e.fn.modal.settings),
                 A = S.selector,
                 P = S.className,
                 E = S.namespace,
                 F = S.error,
                 R = "." + E,
                 D = "module-" + E,
                 O = e(this),
                 z = e(S.context),
                 j = O.find(A.close),
                 q = this,
                 N = O.data(D);
             k = {
                 initialize: function() {
                     k.verbose("Initializing dimmer", z), k.create.id(), k.create.dimmer(), k.refreshModals(), k.verbose("Attaching close events", j), k.bind.events(), k.observeChanges(), k.instantiate()
                 },
                 instantiate: function() {
                     k.verbose("Storing instance of modal"), N = k, O.data(D, N)
                 },
                 create: {
                     dimmer: function() {
                         var t = {
                                 debug: S.debug,
                                 dimmerName: "modals",
                                 duration: {
                                     show: S.duration,
                                     hide: S.duration
                                 }
                             },
                             n = e.extend(!0, t, S.dimmerSettings);
                         return e.fn.dimmer === i ? void k.error(F.dimmer) : (k.debug("Creating dimmer with settings", n), y = z.dimmer(n), S.detachable && (k.verbose("Modal is detachable, moving content into dimmer"), y.dimmer("add content", O)), void(x = y.dimmer("get dimmer")))
                     },
                     id: function() {
                         k.verbose("Creating unique id for element"), C = k.get.uniqueID(), w = "." + C
                     }
                 },
                 destroy: function() {
                     k.verbose("Destroying previous modal"), O.removeData(D).off(R), s.off(w), j.off(R), z.dimmer("destroy")
                 },
                 observeChanges: function() {
                     "MutationObserver" in t && (T = new MutationObserver(function() {
                         k.debug("DOM tree modified, refreshing"), k.refresh()
                     }), T.observe(q, {
                         childList: !0,
                         subtree: !0
                     }), k.debug("Setting up mutation observer", T))
                 },
                 refresh: function() {
                     k.remove.scrolling(), k.cacheSizes(), k.set.screenHeight(), k.set.type(), k.set.position()
                 },
                 refreshModals: function() {
                     v = O.siblings(A.modal), r = v.add(O)
                 },
                 attachEvents: function(t, n) {
                     var i = e(t);
                     n = e.isFunction(k[n]) ? k[n] : k.toggle, i.length > 0 ? (k.debug("Attaching modal events to element", t, n), i.off(R).on("click" + R, n)) : k.error(F.notFound, t)
                 },
                 bind: {
                     events: function() {
                         j.on("click" + R, k.event.close), s.on("resize" + w, k.event.resize)
                     }
                 },
                 get: {
                     uniqueID: function() {
                         return (Math.random().toString(16) + "000000000").substr(2, 8)
                     }
                 },
                 event: {
                     close: function() {
                         k.verbose("Closing element pressed"), e(this).is(A.approve) ? S.onApprove.call(q) !== !1 ? k.hide() : k.verbose("Approve callback returned false cancelling hide") : e(this).is(A.deny) ? S.onDeny.call(q) !== !1 ? k.hide() : k.verbose("Deny callback returned false cancelling hide") : k.hide()
                     },
                     click: function(t) {
                         0 === e(t.target).closest(O).length && (k.debug("Dimmer clicked, hiding all modals"), k.is.active() && (k.remove.clickaway(), S.allowMultiple ? k.hide() : k.hideAll()))
                     },
                     debounce: function(e, t) {
                         clearTimeout(k.timer), k.timer = setTimeout(e, t)
                     },
                     keyboard: function(e) {
                         var t = e.which,
                             n = 27;
                         t == n && (S.closable ? (k.debug("Escape key pressed hiding modal"), k.hide()) : k.debug("Escape key pressed, but closable is set to false"), e.preventDefault())
                     },
                     resize: function() {
                         y.dimmer("is active") && h(k.refresh)
                     }
                 },
                 toggle: function() {
                     k.is.active() || k.is.animating() ? k.hide() : k.show()
                 },
                 show: function(t) {
                     t = e.isFunction(t) ? t : function() {}, k.refreshModals(), k.showModal(t)
                 },
                 hide: function(t) {
                     t = e.isFunction(t) ? t : function() {}, k.refreshModals(), k.hideModal(t)
                 },
                 showModal: function(t) {
                     t = e.isFunction(t) ? t : function() {}, k.is.animating() || !k.is.active() ? (k.showDimmer(), k.cacheSizes(), k.set.position(), k.set.screenHeight(), k.set.type(), k.set.clickaway(), !S.allowMultiple && v.filter(":visible").length > 0 ? (k.debug("Other modals visible, queueing show animation"), k.hideOthers(k.showModal)) : (S.onShow.call(q), S.transition && e.fn.transition !== i && O.transition("is supported") ? (k.debug("Showing modal with css animations"), O.transition({
                         debug: S.debug,
                         animation: S.transition + " in",
                         queue: S.queue,
                         duration: S.duration,
                         useFailSafe: !0,
                         onComplete: function() {
                             S.onVisible.apply(q), k.add.keyboardShortcuts(), k.save.focus(), k.set.active(), k.set.autofocus(), t()
                         }
                     })) : (k.debug("Showing modal with javascript"), O.fadeIn(S.duration, S.easing, function() {
                         S.onVisible.apply(q), k.add.keyboardShortcuts(), k.save.focus(), k.set.active(), t()
                     })))) : k.debug("Modal is already visible")
                 },
                 hideModal: function(t) {
                     t = e.isFunction(t) ? t : function() {}, k.debug("Hiding modal"), S.onHide.call(q), (k.is.animating() || k.is.active()) && (S.transition && e.fn.transition !== i && O.transition("is supported") ? (k.remove.active(), O.transition({
                         debug: S.debug,
                         animation: S.transition + " out",
                         queue: S.queue,
                         duration: S.duration,
                         useFailSafe: !0,
                         onStart: function() {
                             k.othersActive() || k.hideDimmer(), k.remove.keyboardShortcuts()
                         },
                         onComplete: function() {
                             S.onHidden.call(q), k.restore.focus(), t()
                         }
                     })) : (k.remove.active(), k.othersActive() || k.hideDimmer(), k.remove.keyboardShortcuts(), O.fadeOut(S.duration, S.easing, function() {
                         S.onHidden.call(q), k.restore.focus(), t()
                     })))
                 },
                 showDimmer: function() {
                     y.dimmer("is animating") || !y.dimmer("is active") ? (k.debug("Showing dimmer"), y.dimmer("show")) : k.debug("Dimmer already visible")
                 },
                 hideDimmer: function() {
                     return y.dimmer("is animating") || y.dimmer("is active") ? void y.dimmer("hide", function() {
                         S.transition && e.fn.transition !== i && O.transition("is supported") && (k.remove.clickaway(), k.remove.screenHeight())
                     }) : void k.debug("Dimmer is not visible cannot hide")
                 },
                 hideAll: function(t) {
                     t = e.isFunction(t) ? t : function() {}, r.is(":visible") && (k.debug("Hiding all visible modals"), k.hideDimmer(), r.filter(":visible").modal("hide modal", t))
                 },
                 hideOthers: function(t) {
                     t = e.isFunction(t) ? t : function() {}, v.is(":visible") && (k.debug("Hiding other modals", v), v.filter(":visible").modal("hide modal", t))
                 },
                 othersActive: function() {
                     return v.filter("." + P.active).length > 0
                 },
                 add: {
                     keyboardShortcuts: function() {
                         k.verbose("Adding keyboard shortcuts"), c.on("keyup" + R, k.event.keyboard)
                     }
                 },
                 save: {
                     focus: function() {
                         b = e(n.activeElement).blur()
                     }
                 },
                 restore: {
                     focus: function() {
                         b && b.length > 0 && b.focus()
                     }
                 },
                 remove: {
                     active: function() {
                         O.removeClass(P.active)
                     },
                     clickaway: function() {
                         S.closable && x.off("click" + w)
                     },
                     screenHeight: function() {
                         k.cache.height > k.cache.pageHeight && (k.debug("Removing page height"), l.css("height", ""))
                     },
                     keyboardShortcuts: function() {
                         k.verbose("Removing keyboard shortcuts"), c.off("keyup" + R)
                     },
                     scrolling: function() {
                         y.removeClass(P.scrolling), O.removeClass(P.scrolling)
                     }
                 },
                 cacheSizes: function() {
                     var o = O.outerHeight();
                     (k.cache === i || 0 !== o) && (k.cache = {
                         pageHeight: e(n).outerHeight(),
                         height: o + S.offset,
                         contextHeight: "body" == S.context ? e(t).height() : y.height()
                     }), k.debug("Caching modal and container sizes", k.cache)
                 },
                 can: {
                     fit: function() {
                         return k.cache.height < k.cache.contextHeight
                     }
                 },
                 is: {
                     active: function() {
                         return O.hasClass(P.active)
                     },
                     animating: function() {
                         return O.transition("is supported") ? O.transition("is animating") : O.is(":visible")
                     },
                     scrolling: function() {
                         return y.hasClass(P.scrolling)
                     },
                     modernBrowser: function() {
                         return !(t.ActiveXObject || "ActiveXObject" in t)
                     }
                 },
                 set: {
                     autofocus: function() {
                         if (S.autofocus) {
                             var e = O.find(":input:visible"),
                                 t = e.filter("[autofocus]"),
                                 n = t.length > 0 ? t : e;
                             n.first().focus()
                         }
                     },
                     clickaway: function() {
                         S.closable && x.on("click" + w, k.event.click)
                     },
                     screenHeight: function() {
                         k.cache.height > k.cache.pageHeight ? (k.debug("Modal is taller than page content, resizing page height"), l.css("height", k.cache.height + S.padding)) : l.css("height", "")
                     },
                     active: function() {
                         O.addClass(P.active)
                     },
                     scrolling: function() {
                         y.addClass(P.scrolling), O.addClass(P.scrolling)
                     },
                     type: function() {
                         k.can.fit() ? (k.verbose("Modal fits on screen"), k.othersActive || k.remove.scrolling()) : (k.verbose("Modal cannot fit on screen setting to scrolling"), k.set.scrolling())
                     },
                     position: function() {
                         k.verbose("Centering modal on page", k.cache), O.css(k.can.fit() ? {
                             top: "",
                             marginTop: -(k.cache.height / 2)
                         } : {
                             marginTop: "",
                             top: c.scrollTop()
                         })
                     }
                 },
                 setting: function(t, n) {
                     if (k.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, S, t);
                     else {
                         if (n === i) return S[t];
                         S[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, k, t);
                     else {
                         if (n === i) return k[t];
                         k[t] = n
                     }
                 },
                 debug: function() {
                     S.debug && (S.performance ? k.performance.log(arguments) : (k.debug = Function.prototype.bind.call(console.info, console, S.name + ":"), k.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     S.verbose && S.debug && (S.performance ? k.performance.log(arguments) : (k.verbose = Function.prototype.bind.call(console.info, console, S.name + ":"), k.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     k.error = Function.prototype.bind.call(console.error, console, S.name + ":"), k.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         S.performance && (t = (new Date).getTime(), i = d || t, n = t - i, d = t, m.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: q,
                             "Execution Time": n
                         })), clearTimeout(k.performance.timer), k.performance.timer = setTimeout(k.performance.display, 100)
                     },
                     display: function() {
                         var t = S.name + ":",
                             n = 0;
                         d = !1, clearTimeout(k.performance.timer), e.each(m, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", u && (t += " '" + u + "'"), (console.group !== i || console.table !== i) && m.length > 0 && (console.groupCollapsed(t), console.table ? console.table(m) : e.each(m, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), m = []
                     }
                 },
                 invoke: function(t, n, o) {
                     var r, s, c, l = N;
                     return n = n || p, o = q || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, g ? (N === i && k.initialize(), k.invoke(f)) : (N !== i && k.destroy(), k.initialize())
         }), a !== i ? a : this
     }, e.fn.modal.settings = {
         name: "Modal",
         namespace: "modal",
         debug: !1,
         verbose: !0,
         performance: !0,
         allowMultiple: !1,
         detachable: !0,
         closable: !0,
         autofocus: !0,
         dimmerSettings: {
             closable: !1,
             useCSS: !0
         },
         context: "body",
         queue: !1,
         duration: 500,
         easing: "easeOutExpo",
         offset: 0,
         transition: "scale",
         padding: 30,
         onShow: function() {},
         onHide: function() {},
         onVisible: function() {},
         onHidden: function() {},
         onApprove: function() {
             return !0
         },
         onDeny: function() {
             return !0
         },
         selector: {
             close: ".close, .actions .button",
             approve: ".actions .positive, .actions .approve, .actions .ok",
             deny: ".actions .negative, .actions .deny, .actions .cancel",
             modal: ".ui.modal"
         },
         error: {
             dimmer: "UI Dimmer, a required component is not included in this page",
             method: "The method you called is not defined.",
             notFound: "The element you specified could not be found"
         },
         className: {
             active: "active",
             animating: "animating",
             scrolling: "scrolling"
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.nag = function(n) {
         var o, a = e(this),
             r = a.selector || "",
             s = (new Date).getTime(),
             c = [],
             l = arguments[0],
             u = "string" == typeof l,
             d = [].slice.call(arguments, 1);
         return a.each(function() {
             {
                 var a, m = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.nag.settings, n) : e.extend({}, e.fn.nag.settings),
                     f = (m.className, m.selector),
                     g = m.error,
                     p = m.namespace,
                     h = "." + p,
                     v = p + "-module",
                     b = e(this),
                     y = b.find(f.close),
                     x = e(m.context ? m.context : "body"),
                     w = this,
                     C = b.data(v);
                 t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                     setTimeout(e, 0)
                 }
             }
             a = {
                 initialize: function() {
                     a.verbose("Initializing element"), b.data(v, a), y.on("click" + h, a.dismiss), m.detachable && b.parent()[0] !== x[0] && b.detach().prependTo(x), m.displayTime > 0 && setTimeout(a.hide, m.displayTime), a.show()
                 },
                 destroy: function() {
                     a.verbose("Destroying instance"), b.removeData(v).off(h)
                 },
                 show: function() {
                     a.should.show() && !b.is(":visible") && (a.debug("Showing nag", m.animation.show), "fade" == m.animation.show ? b.fadeIn(m.duration, m.easing) : b.slideDown(m.duration, m.easing))
                 },
                 hide: function() {
                     a.debug("Showing nag", m.animation.hide), "fade" == m.animation.show ? b.fadeIn(m.duration, m.easing) : b.slideUp(m.duration, m.easing)
                 },
                 onHide: function() {
                     a.debug("Removing nag", m.animation.hide), b.remove(), m.onHide && m.onHide()
                 },
                 dismiss: function(e) {
                     m.storageMethod && a.storage.set(m.key, m.value), a.hide(), e.stopImmediatePropagation(), e.preventDefault()
                 },
                 should: {
                     show: function() {
                         return m.persist ? (a.debug("Persistent nag is set, can show nag"), !0) : a.storage.get(m.key) != m.value.toString() ? (a.debug("Stored value is not set, can show nag", a.storage.get(m.key)), !0) : (a.debug("Stored value is set, cannot show nag", a.storage.get(m.key)), !1)
                     }
                 },
                 get: {
                     storageOptions: function() {
                         var e = {};
                         return m.expires && (e.expires = m.expires), m.domain && (e.domain = m.domain), m.path && (e.path = m.path), e
                     }
                 },
                 clear: function() {
                     a.storage.remove(m.key)
                 },
                 storage: {
                     set: function(n, o) {
                         var r = a.get.storageOptions();
                         if ("localstorage" == m.storageMethod && t.localStorage !== i) t.localStorage.setItem(n, o), a.debug("Value stored using local storage", n, o);
                         else {
                             if (e.cookie === i) return void a.error(g.noCookieStorage);
                             e.cookie(n, o, r), a.debug("Value stored using cookie", n, o, r)
                         }
                     },
                     get: function(n) {
                         var o;
                         return "localstorage" == m.storageMethod && t.localStorage !== i ? o = t.localStorage.getItem(n) : e.cookie !== i ? o = e.cookie(n) : a.error(g.noCookieStorage), ("undefined" == o || "null" == o || o === i || null === o) && (o = i), o
                     },
                     remove: function(n) {
                         var o = a.get.storageOptions();
                         "local" == m.storageMethod && t.store !== i ? t.localStorage.removeItem(n) : e.cookie !== i ? e.removeCookie(n, o) : a.error(g.noStorage)
                     }
                 },
                 setting: function(t, n) {
                     if (a.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, a, t);
                     else {
                         if (n === i) return a[t];
                         a[t] = n
                     }
                 },
                 debug: function() {
                     m.debug && (m.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), a.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     m.verbose && m.debug && (m.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), a.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     a.error = Function.prototype.bind.call(console.error, console, m.name + ":"), a.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         m.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: w,
                             "Execution Time": n
                         })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 100)
                     },
                     display: function() {
                         var t = m.name + ":",
                             n = 0;
                         s = !1, clearTimeout(a.performance.timer), e.each(c, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, n, r) {
                     var s, c, l, u = C;
                     return n = n || d, r = w || r, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function(n, o) {
                         var r = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(u[r]) && n != s) u = u[r];
                         else {
                             if (u[r] !== i) return c = u[r], !1;
                             if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (c = u[o], !1) : (a.error(g.method, t), !1);
                             u = u[o]
                         }
                     })), e.isFunction(c) ? l = c.apply(r, n) : c !== i && (l = c), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), c
                 }
             }, u ? (C === i && a.initialize(), a.invoke(l)) : (C !== i && a.destroy(), a.initialize())
         }), o !== i ? o : this
     }, e.fn.nag.settings = {
         name: "Nag",
         debug: !1,
         verbose: !0,
         performance: !0,
         namespace: "Nag",
         persist: !1,
         displayTime: 0,
         animation: {
             show: "slide",
             hide: "slide"
         },
         context: !1,
         detachable: !1,
         expires: 30,
         domain: !1,
         path: "/",
         storageMethod: "cookie",
         key: "nag",
         value: "dismiss",
         error: {
             noStorage: "Neither $.cookie or store is defined. A storage solution is required for storing state",
             method: "The method you called is not defined."
         },
         className: {
             bottom: "bottom",
             fixed: "fixed"
         },
         selector: {
             close: ".close.icon"
         },
         speed: 500,
         easing: "easeOutQuad",
         onHide: function() {}
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.popup = function(o) {
         var a, r = e(this),
             s = e(n),
             c = r.selector || "",
             l = ("ontouchstart" in n.documentElement, (new Date).getTime()),
             u = [],
             d = arguments[0],
             m = "string" == typeof d,
             f = [].slice.call(arguments, 1);
         return r.each(function() {
             var n, r, g, p = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.popup.settings, o) : e.extend({}, e.fn.popup.settings),
                 h = p.selector,
                 v = p.className,
                 b = p.error,
                 y = p.metadata,
                 x = p.namespace,
                 w = "." + p.namespace,
                 C = "module-" + x,
                 T = e(this),
                 k = e(p.context),
                 S = p.target ? e(p.target) : T,
                 A = e(t),
                 P = e("body"),
                 E = 0,
                 F = !1,
                 R = this,
                 D = T.data(C);
             g = {
                 initialize: function() {
                     g.debug("Initializing module", T), "click" == p.on ? T.on("click" + w, g.toggle) : g.get.startEvent() && T.on(g.get.startEvent() + w, g.event.start).on(g.get.endEvent() + w, g.event.end), p.target && g.debug("Target set to element", S), A.on("resize" + w, g.event.resize), !g.exists() && p.preserve && g.create(), g.instantiate()
                 },
                 instantiate: function() {
                     g.verbose("Storing instance of module", g), D = g, T.data(C, D)
                 },
                 refresh: function() {
                     p.popup ? n = e(p.popup) : p.inline && (n = S.next(h.popup)), p.popup ? (n.addClass(v.loading), r = g.get.offsetParent(), n.removeClass(v.loading), g.has.popup() && g.get.offsetParent(n)[0] !== r[0] && (g.debug("Moving popup to the same offset parent as activating element"), n.detach().appendTo(r))) : r = p.inline ? g.get.offsetParent(S) : g.has.popup() ? g.get.offsetParent(n) : P, r.is("html") && (g.debug("Setting page as offset parent"), r = P)
                 },
                 reposition: function() {
                     g.refresh(), g.set.position()
                 },
                 destroy: function() {
                     g.debug("Destroying previous module"), n && !p.preserve && g.removePopup(), clearTimeout(g.hideTimer), clearTimeout(g.showTimer), T.off(w).removeData(C)
                 },
                 event: {
                     start: function() {
                         var t = e.isPlainObject(p.delay) ? p.delay.show : p.delay;
                         clearTimeout(g.hideTimer), g.showTimer = setTimeout(function() {
                             !g.is.hidden() || g.is.active() && g.is.dropdown() || g.show()
                         }, t)
                     },
                     end: function() {
                         var t = e.isPlainObject(p.delay) ? p.delay.hide : p.delay;
                         clearTimeout(g.showTimer), g.hideTimer = setTimeout(function() {
                             g.is.visible() && g.hide()
                         }, t)
                     },
                     resize: function() {
                         g.is.visible() && g.set.position()
                     }
                 },
                 create: function() {
                     var t = T.data(y.html) || p.html,
                         i = T.data(y.variation) || p.variation,
                         o = T.data(y.title) || p.title,
                         a = T.data(y.content) || T.attr("title") || p.content;
                     t || a || o ? (g.debug("Creating pop-up html"), t || (t = p.templates.popup({
                         title: o,
                         content: a
                     })), n = e("<div/>").addClass(v.popup).addClass(i).html(t), i && n.addClass(i), p.inline ? (g.verbose("Inserting popup element inline", n), n.insertAfter(T)) : (g.verbose("Appending popup element to body", n), n.appendTo(k)), g.refresh(), p.hoverable && g.bind.popup(), p.onCreate.call(n, R)) : 0 !== S.next(h.popup).length ? (g.verbose("Pre-existing popup found"), p.inline = !0, p.popup = S.next(h.popup), g.refresh(), p.hoverable && g.bind.popup()) : p.popup ? (g.verbose("Used popup specified in settings"), g.refresh(), p.hoverable && g.bind.popup()) : g.debug("No content specified skipping display", R)
                 },
                 toggle: function() {
                     g.debug("Toggling pop-up"), g.is.hidden() ? (g.debug("Popup is hidden, showing pop-up"), g.unbind.close(), g.hideAll(), g.show()) : (g.debug("Popup is visible, hiding pop-up"), g.hide())
                 },
                 show: function(t) {
                     t = e.isFunction(t) ? t : function() {}, g.debug("Showing pop-up", p.transition), g.exists() ? p.preserve || p.popup || g.refresh() : g.create(), n && g.set.position() && (g.save.conditions(), g.animate.show(t))
                 },
                 hide: function(t) {
                     t = e.isFunction(t) ? t : function() {}, g.remove.visible(), g.unbind.close(), g.is.visible() && (g.restore.conditions(), g.animate.hide(t))
                 },
                 hideAll: function() {
                     e(h.popup).filter(":visible").transition("hide")
                 },
                 hideGracefully: function(t) {
                     t && 0 === e(t.target).closest(h.popup).length ? (g.debug("Click occurred outside popup hiding popup"), g.hide()) : g.debug("Click was inside popup, keeping popup open")
                 },
                 exists: function() {
                     return n ? p.inline || p.popup ? g.has.popup() : n.closest(k).length >= 1 ? !0 : !1 : !1
                 },
                 removePopup: function() {
                     g.debug("Removing popup", n), g.has.popup() && !p.popup && (n.remove(), n = i), p.onRemove.call(n, R)
                 },
                 save: {
                     conditions: function() {
                         g.cache = {
                             title: T.attr("title")
                         }, g.cache.title && T.removeAttr("title"), g.verbose("Saving original attributes", g.cache.title)
                     }
                 },
                 restore: {
                     conditions: function() {
                         return g.cache && g.cache.title && (T.attr("title", g.cache.title), g.verbose("Restoring original attributes", g.cache.title)), !0
                     }
                 },
                 animate: {
                     show: function(t) {
                         t = e.isFunction(t) ? t : function() {}, p.transition && e.fn.transition !== i && T.transition("is supported") ? (g.set.visible(), n.transition({
                             animation: p.transition + " in",
                             queue: !1,
                             debug: p.debug,
                             verbose: p.verbose,
                             duration: p.duration,
                             onComplete: function() {
                                 g.bind.close(), t.call(n, R), p.onVisible.call(n, R)
                             }
                         })) : (g.set.visible(), n.stop().fadeIn(p.duration, p.easing, function() {
                             g.bind.close(), t.call(n, R), p.onVisible.call(n, R)
                         })), p.onShow.call(n, R)
                     },
                     hide: function(t) {
                         t = e.isFunction(t) ? t : function() {}, g.debug("Hiding pop-up"), p.transition && e.fn.transition !== i && T.transition("is supported") ? n.transition({
                             animation: p.transition + " out",
                             queue: !1,
                             duration: p.duration,
                             debug: p.debug,
                             verbose: p.verbose,
                             onComplete: function() {
                                 g.reset(), t.call(n, R), p.onHidden.call(n, R)
                             }
                         }) : n.stop().fadeOut(p.duration, p.easing, function() {
                             g.reset(), t.call(n, R), p.onHidden.call(n, R)
                         }), p.onHide.call(n, R)
                     }
                 },
                 get: {
                     startEvent: function() {
                         return "hover" == p.on ? "mouseenter" : "focus" == p.on ? "focus" : !1
                     },
                     endEvent: function() {
                         return "hover" == p.on ? "mouseleave" : "focus" == p.on ? "blur" : !1
                     },
                     offsetParent: function(t) {
                         var n = t !== i ? t[0] : T[0],
                             o = n.parentNode,
                             a = e(o);
                         if (o)
                             for (var r = "none" === a.css("transform"), s = "static" === a.css("position"), c = a.is("html"); o && !c && s && r;) o = o.parentNode, a = e(o), r = "none" === a.css("transform"), s = "static" === a.css("position"), c = a.is("html");
                         return a && a.length > 0 ? a : e()
                     },
                     offstagePosition: function(i) {
                         var o = {
                                 top: e(t).scrollTop(),
                                 bottom: e(t).scrollTop() + e(t).height(),
                                 left: 0,
                                 right: e(t).width()
                             },
                             a = {
                                 width: n.width(),
                                 height: n.height(),
                                 offset: n.offset()
                             },
                             r = {},
                             s = [];
                         return i = i || !1, a.offset && i && (g.verbose("Checking if outside viewable area", a.offset), r = {
                             top: a.offset.top < o.top,
                             bottom: a.offset.top + a.height > o.bottom,
                             right: a.offset.left + a.width > o.right,
                             left: a.offset.left < o.left
                         }), e.each(r, function(e, t) {
                             t && s.push(e)
                         }), s.length > 0 ? s.join(" ") : !1
                     },
                     positions: function() {
                         return {
                             "top left": !1,
                             "top center": !1,
                             "top right": !1,
                             "bottom left": !1,
                             "bottom center": !1,
                             "bottom right": !1,
                             "left center": !1,
                             "right center": !1
                         }
                     },
                     nextPosition: function(e) {
                         var t = e.split(" "),
                             n = t[0],
                             i = t[1],
                             o = {
                                 top: "bottom",
                                 bottom: "top",
                                 left: "right",
                                 right: "left"
                             },
                             a = {
                                 left: "center",
                                 center: "right",
                                 right: "left"
                             },
                             r = {
                                 "top left": "top center",
                                 "top center": "top right",
                                 "top right": "right center",
                                 "right center": "bottom right",
                                 "bottom right": "bottom center",
                                 "bottom center": "bottom left",
                                 "bottom left": "left center",
                                 "left center": "top left"
                             },
                             s = "top" == n || "bottom" == n,
                             c = !1,
                             l = !1,
                             u = !1;
                         return F || (g.verbose("All available positions available"), F = g.get.positions()), g.debug("Recording last position tried", e), F[e] = !0, "opposite" === p.prefer && (u = [o[n], i], u = u.join(" "), c = F[u] === !0, g.debug("Trying opposite strategy", u)), "adjacent" === p.prefer && s && (u = [n, a[i]], u = u.join(" "), l = F[u] === !0, g.debug("Trying adjacent strategy", u)), (l || c) && (g.debug("Using backup position", u), u = r[e]), u
                     }
                 },
                 set: {
                     position: function(o, a) {
                         var s, c, l, u = (e(t).width(), e(t).height(), S.outerWidth()),
                             d = S.outerHeight(),
                             m = n.outerWidth(),
                             f = n.outerHeight(),
                             h = r.outerWidth(),
                             x = r.outerHeight(),
                             w = p.distanceAway,
                             C = S[0],
                             k = p.inline ? parseInt(t.getComputedStyle(C).getPropertyValue("margin-top"), 10) : 0,
                             A = p.inline ? parseInt(t.getComputedStyle(C).getPropertyValue(g.is.rtl() ? "margin-right" : "margin-left"), 10) : 0,
                             P = p.inline || p.popup ? S.position() : S.offset();
                         switch (o = o || T.data(y.position) || p.position, a = a || T.data(y.offset) || p.offset, E == p.maxSearchDepth && p.lastResort && (g.debug("Using last resort position to display", p.lastResort), o = p.lastResort), p.inline && (g.debug("Adding targets margin to calculation"), "left center" == o || "right center" == o ? (a += k, w += -A) : "top left" == o || "top center" == o || "top right" == o ? (a += A, w -= k) : (a += A, w += k)), g.debug("Calculating popup positioning", o), s = o, g.is.rtl() && (s = s.replace(/left|right/g, function(e) {
                             return "left" == e ? "right" : "left"
                         }), g.debug("RTL: Popup positioning updated", s)), s) {
                             case "top left":
                                 c = {
                                     top: "auto",
                                     bottom: x - P.top + w,
                                     left: P.left + a,
                                     right: "auto"
                                 };
                                 break;
                             case "top center":
                                 c = {
                                     bottom: x - P.top + w,
                                     left: P.left + u / 2 - m / 2 + a,
                                     top: "auto",
                                     right: "auto"
                                 };
                                 break;
                             case "top right":
                                 c = {
                                     bottom: x - P.top + w,
                                     right: h - P.left - u - a,
                                     top: "auto",
                                     left: "auto"
                                 };
                                 break;
                             case "left center":
                                 c = {
                                     top: P.top + d / 2 - f / 2 + a,
                                     right: h - P.left + w,
                                     left: "auto",
                                     bottom: "auto"
                                 };
                                 break;
                             case "right center":
                                 c = {
                                     top: P.top + d / 2 - f / 2 + a,
                                     left: P.left + u + w,
                                     bottom: "auto",
                                     right: "auto"
                                 };
                                 break;
                             case "bottom left":
                                 c = {
                                     top: P.top + d + w,
                                     left: P.left + a,
                                     bottom: "auto",
                                     right: "auto"
                                 };
                                 break;
                             case "bottom center":
                                 c = {
                                     top: P.top + d + w,
                                     left: P.left + u / 2 - m / 2 + a,
                                     bottom: "auto",
                                     right: "auto"
                                 };
                                 break;
                             case "bottom right":
                                 c = {
                                     top: P.top + d + w,
                                     right: h - P.left - u - a,
                                     left: "auto",
                                     bottom: "auto"
                                 }
                         }
                         if (c === i && g.error(b.invalidPosition, o), g.debug("Calculated popup positioning values", c), n.css(c).removeClass(v.position).addClass(o).addClass(v.loading), l = g.get.offstagePosition(o)) {
                             if (g.debug("Popup cant fit into viewport", l), E < p.maxSearchDepth) return E++, o = g.get.nextPosition(o), g.debug("Trying new position", o), n ? g.set.position(o) : !1;
                             if (!p.lastResort) return g.debug("Popup could not find a position in view", n), g.error(b.cannotPlace), g.remove.attempts(), g.remove.loading(), g.reset(), !1
                         }
                         return g.debug("Position is on stage", o), g.remove.attempts(), g.set.fluidWidth(), g.remove.loading(), !0
                     },
                     fluidWidth: function() {
                         p.setFluidWidth && n.hasClass(v.fluid) && n.css("width", r.width())
                     },
                     visible: function() {
                         T.addClass(v.visible)
                     }
                 },
                 remove: {
                     loading: function() {
                         n.removeClass(v.loading)
                     },
                     visible: function() {
                         T.removeClass(v.visible)
                     },
                     attempts: function() {
                         g.verbose("Resetting all searched positions"), E = 0, F = !1
                     }
                 },
                 bind: {
                     popup: function() {
                         g.verbose("Allowing hover events on popup to prevent closing"), n && g.has.popup() && n.on("mouseenter" + w, g.event.start).on("mouseleave" + w, g.event.end)
                     },
                     close: function() {
                         (p.hideOnScroll === !0 || "auto" == p.hideOnScroll && "click" != p.on) && (s.one("touchmove" + w, g.hideGracefully).one("scroll" + w, g.hideGracefully), k.one("touchmove" + w, g.hideGracefully).one("scroll" + w, g.hideGracefully)), "click" == p.on && p.closable && (g.verbose("Binding popup close event to document"), s.on("click" + w, function(e) {
                             g.verbose("Pop-up clickaway intent detected"), g.hideGracefully.call(R, e)
                         }))
                     }
                 },
                 unbind: {
                     close: function() {
                         (p.hideOnScroll === !0 || "auto" == p.hideOnScroll && "click" != p.on) && (s.off("scroll" + w, g.hide), k.off("scroll" + w, g.hide)), "click" == p.on && p.closable && (g.verbose("Removing close event from document"), s.off("click" + w))
                     }
                 },
                 has: {
                     popup: function() {
                         return n && n.length > 0
                     }
                 },
                 is: {
                     active: function() {
                         return T.hasClass(v.active)
                     },
                     animating: function() {
                         return n && n.is(":animated") || n.hasClass(v.animating)
                     },
                     visible: function() {
                         return n && n.is(":visible")
                     },
                     dropdown: function() {
                         return T.hasClass(v.dropdown)
                     },
                     hidden: function() {
                         return !g.is.visible()
                     },
                     rtl: function() {
                         return "rtl" == T.css("direction")
                     }
                 },
                 reset: function() {
                     g.remove.visible(), p.preserve ? e.fn.transition !== i && n.transition("remove transition") : g.removePopup()
                 },
                 setting: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, p, t);
                     else {
                         if (n === i) return p[t];
                         p[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 },
                 debug: function() {
                     p.debug && (p.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), g.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     p.verbose && p.debug && (p.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), g.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     g.error = Function.prototype.bind.call(console.error, console, p.name + ":"), g.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         p.performance && (t = (new Date).getTime(), i = l || t, n = t - i, l = t, u.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: R,
                             "Execution Time": n
                         })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 100)
                     },
                     display: function() {
                         var t = p.name + ":",
                             n = 0;
                         l = !1, clearTimeout(g.performance.timer), e.each(u, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", c && (t += " '" + c + "'"), (console.group !== i || console.table !== i) && u.length > 0 && (console.groupCollapsed(t), console.table ? console.table(u) : e.each(u, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), u = []
                     }
                 },
                 invoke: function(t, n, o) {
                     var r, s, c, l = D;
                     return n = n || f, o = R || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, m ? (D === i && g.initialize(), g.invoke(d)) : (D !== i && g.destroy(), g.initialize())
         }), a !== i ? a : this
     }, e.fn.popup.settings = {
         name: "Popup",
         debug: !1,
         verbose: !0,
         performance: !0,
         namespace: "popup",
         onCreate: function() {},
         onRemove: function() {},
         onShow: function() {},
         onVisible: function() {},
         onHide: function() {},
         onHidden: function() {},
         variation: "",
         content: !1,
         html: !1,
         title: !1,
         on: "hover",
         closable: !0,
         hideOnScroll: "auto",
         context: "body",
         position: "top left",
         prefer: "opposite",
         lastResort: !1,
         delay: {
             show: 30,
             hide: 0
         },
         setFluidWidth: !0,
         target: !1,
         popup: !1,
         inline: !1,
         preserve: !1,
         hoverable: !1,
         duration: 200,
         easing: "easeOutQuint",
         transition: "scale",
         distanceAway: 0,
         offset: 0,
         maxSearchDepth: 20,
         error: {
             invalidPosition: "The position you specified is not a valid position",
             cannotPlace: "No visible position could be found for the popup",
             method: "The method you called is not defined."
         },
         metadata: {
             content: "content",
             html: "html",
             offset: "offset",
             position: "position",
             title: "title",
             variation: "variation"
         },
         className: {
             active: "active",
             animating: "animating",
             dropdown: "dropdown",
             fluid: "fluid",
             loading: "loading",
             popup: "ui popup",
             position: "top left center bottom right",
             visible: "visible"
         },
         selector: {
             popup: ".ui.popup"
         },
         templates: {
             escape: function(e) {
                 var t = /[&<>"'`]/g,
                     n = /[&<>"'`]/,
                     i = {
                         "&": "&amp;",
                         "<": "&lt;",
                         ">": "&gt;",
                         '"': "&quot;",
                         "'": "&#x27;",
                         "`": "&#x60;"
                     },
                     o = function(e) {
                         return i[e]
                     };
                 return n.test(e) ? e.replace(t, o) : e
             },
             popup: function(t) {
                 var n = "",
                     o = e.fn.popup.settings.templates.escape;
                 return typeof t !== i && (typeof t.title !== i && t.title && (t.title = o(t.title), n += '<div class="header">' + t.title + "</div>"), typeof t.content !== i && t.content && (t.content = o(t.content), n += '<div class="content">' + t.content + "</div>")), n
             }
         }
     }, e.extend(e.easing, {
         easeOutQuad: function(e, t, n, i, o) {
             return -i * (t /= o) * (t - 2) + n
         }
     })
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.progress = function(t) {
         var o, a = e(this),
             r = a.selector || "",
             s = (new Date).getTime(),
             c = [],
             l = arguments[0],
             u = "string" == typeof l,
             d = [].slice.call(arguments, 1);
         return a.each(function() {
             var a, m, f = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.progress.settings, t) : e.extend({}, e.fn.progress.settings),
                 g = f.className,
                 p = f.metadata,
                 h = f.namespace,
                 v = f.selector,
                 b = f.error,
                 y = "." + h,
                 x = "module-" + h,
                 w = e(this),
                 C = e(this).find(v.bar),
                 T = e(this).find(v.progress),
                 k = e(this).find(v.label),
                 S = this,
                 A = w.data(x),
                 P = !1;
             m = {
                 initialize: function() {
                     m.debug("Initializing progress bar", f), a = m.get.transitionEnd(), m.read.metadata(), m.set.duration(), m.set.initials(), m.instantiate()
                 },
                 instantiate: function() {
                     m.verbose("Storing instance of progress", m), A = m, w.data(x, m)
                 },
                 destroy: function() {
                     m.verbose("Destroying previous progress for", w), clearInterval(A.interval), m.remove.state(), w.removeData(x), A = i
                 },
                 reset: function() {
                     m.set.percent(0)
                 },
                 complete: function() {
                     (m.percent === i || m.percent < 100) && m.set.percent(100)
                 },
                 read: {
                     metadata: function() {
                         w.data(p.percent) && (m.verbose("Current percent value set from metadata"), m.percent = w.data(p.percent)), w.data(p.total) && (m.verbose("Total value set from metadata"), m.total = w.data(p.total)), w.data(p.value) && (m.verbose("Current value set from metadata"), m.value = w.data(p.value))
                     },
                     currentValue: function() {
                         return m.value !== i ? m.value : !1
                     }
                 },
                 increment: function(e) {
                     var t, n, i, o = m.total || !1;
                     o ? (n = m.value || 0, e = e || 1, i = n + e, t = m.total, m.debug("Incrementing value by", e, n, t), i > t && (m.debug("Value cannot increment above total", t), i = t), m.set.progress(i)) : (n = m.percent || 0, e = e || m.get.randomValue(), i = n + e, t = 100, m.debug("Incrementing percentage by", e, n), i > t && (m.debug("Value cannot increment above 100 percent"), i = t), m.set.progress(i))
                 },
                 decrement: function(e) {
                     var t, n, i = m.total || !1,
                         o = 0;
                     i ? (t = m.value || 0, e = e || 1, n = t - e, m.debug("Decrementing value by", e, t)) : (t = m.percent || 0, e = e || m.get.randomValue(), n = t - e, m.debug("Decrementing percentage by", e, t)), o > n && (m.debug("Value cannot decrement below 0"), n = 0), m.set.progress(n)
                 },
                 get: {
                     text: function(e) {
                         var t = m.value || 0,
                             n = m.total || 0,
                             i = m.is.visible() && P ? m.get.displayPercent() : m.percent || 0,
                             o = m.total > 0 ? n - t : 100 - i;
                         return e = e || "", e = e.replace("{value}", t).replace("{total}", n).replace("{left}", o).replace("{percent}", i), m.debug("Adding variables to progress bar text", e), e
                     },
                     randomValue: function() {
                         return m.debug("Generating random increment percentage"), Math.floor(Math.random() * f.random.max + f.random.min)
                     },
                     transitionEnd: function() {
                         var e, t = n.createElement("element"),
                             o = {
                                 transition: "transitionend",
                                 OTransition: "oTransitionEnd",
                                 MozTransition: "transitionend",
                                 WebkitTransition: "webkitTransitionEnd"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e]
                     },
                     displayPercent: function() {
                         var e = C.width(),
                             t = w.width(),
                             n = parseInt(C.css("min-width"), 10),
                             i = e > n ? e / t * 100 : m.percent;
                         return Math.round(0 === f.precision ? i : 10 * i * f.precision / (10 * f.precision))
                     },
                     percent: function() {
                         return m.percent || 0
                     },
                     value: function() {
                         return m.value || !1
                     },
                     total: function() {
                         return m.total || !1
                     }
                 },
                 is: {
                     success: function() {
                         return w.hasClass(g.success)
                     },
                     warning: function() {
                         return w.hasClass(g.warning)
                     },
                     error: function() {
                         return w.hasClass(g.error)
                     },
                     active: function() {
                         return w.hasClass(g.active)
                     },
                     visible: function() {
                         return w.is(":visible")
                     }
                 },
                 remove: {
                     state: function() {
                         m.verbose("Removing stored state"), delete m.total, delete m.percent, delete m.value
                     },
                     active: function() {
                         m.verbose("Removing active state"), w.removeClass(g.active)
                     },
                     success: function() {
                         m.verbose("Removing success state"), w.removeClass(g.success)
                     },
                     warning: function() {
                         m.verbose("Removing warning state"), w.removeClass(g.warning)
                     },
                     error: function() {
                         m.verbose("Removing error state"), w.removeClass(g.error)
                     }
                 },
                 set: {
                     barWidth: function(e) {
                         e > 100 ? m.error(b.tooHigh, e) : 0 > e ? m.error(b.tooLow, e) : (C.css("width", e + "%"), w.attr("data-percent", parseInt(e, 10)))
                     },
                     duration: function(e) {
                         e = e || f.duration, e = "number" == typeof e ? e + "ms" : e, m.verbose("Setting progress bar transition duration", e), C.css({
                             "-webkit-transition-duration": e,
                             "-moz-transition-duration": e,
                             "-ms-transition-duration": e,
                             "-o-transition-duration": e,
                             "transition-duration": e
                         })
                     },
                     initials: function() {
                         f.total !== !1 && (m.verbose("Current total set in settings", f.total), m.total = f.total), f.value !== !1 && (m.verbose("Current value set in settings", f.value), m.value = f.value), f.percent !== !1 && (m.verbose("Current percent set in settings", f.percent), m.percent = f.percent), m.percent !== i ? m.set.percent(m.percent) : m.value !== i && m.set.progress(m.value)
                     },
                     percent: function(e) {
                         e = "string" == typeof e ? +e.replace("%", "") : e, e > 0 && 1 > e && (m.verbose("Module percentage passed as decimal, converting"), e = 100 * e), e = Math.round(0 === f.precision ? e : 10 * e * f.precision / (10 * f.precision)), m.percent = e, m.total ? m.value = Math.round(e / 100 * m.total) : f.limitValues && (m.value = m.value > 100 ? 100 : m.value < 0 ? 0 : m.value), m.set.barWidth(e), m.is.visible() && m.set.labelInterval(), m.set.labels(), f.onChange.call(S, e, m.value, m.total)
                     },
                     labelInterval: function() {
                         var e = function() {
                             m.verbose("Bar finished animating, removing continuous label updates"), clearInterval(m.interval), P = !1, m.set.labels()
                         };
                         clearInterval(m.interval), C.one(a + y, e), m.timer = setTimeout(e, f.duration + 100), P = !0, m.interval = setInterval(m.set.labels, f.framerate)
                     },
                     labels: function() {
                         m.verbose("Setting both bar progress and outer label text"), m.set.barLabel(), m.set.state()
                     },
                     label: function(e) {
                         e = e || "", e && (e = m.get.text(e), m.debug("Setting label to text", e), k.text(e))
                     },
                     state: function(e) {
                         e = e !== i ? e : m.percent, 100 === e ? !f.autoSuccess || m.is.warning() || m.is.error() ? (m.verbose("Reached 100% removing active state"), m.remove.active()) : (m.set.success(), m.debug("Automatically triggering success at 100%")) : e > 0 ? (m.verbose("Adjusting active progress bar label", e), m.set.active()) : (m.remove.active(), m.set.label(f.text.active))
                     },
                     barLabel: function(e) {
                         e !== i ? T.text(m.get.text(e)) : "ratio" == f.label && m.total ? (m.debug("Adding ratio to bar label"), T.text(m.get.text(f.text.ratio))) : "percent" == f.label && (m.debug("Adding percentage to bar label"), T.text(m.get.text(f.text.percent)))
                     },
                     active: function(e) {
                         e = e || f.text.active, m.debug("Setting active state"), f.showActivity && !m.is.active() && w.addClass(g.active), m.remove.warning(), m.remove.error(), m.remove.success(), e && m.set.label(e), f.onActive.call(S, m.value, m.total)
                     },
                     success: function(e) {
                         e = e || f.text.success, m.debug("Setting success state"), w.addClass(g.success), m.remove.active(), m.remove.warning(), m.remove.error(), m.complete(), e && m.set.label(e), f.onSuccess.call(S, m.total)
                     },
                     warning: function(e) {
                         e = e || f.text.warning, m.debug("Setting warning state"), w.addClass(g.warning), m.remove.active(), m.remove.success(), m.remove.error(), m.complete(), e && m.set.label(e), f.onWarning.call(S, m.value, m.total)
                     },
                     error: function(e) {
                         e = e || f.text.error, m.debug("Setting error state"), w.addClass(g.error), m.remove.active(), m.remove.success(), m.remove.warning(), m.complete(), e && m.set.label(e), f.onError.call(S, m.value, m.total)
                     },
                     total: function(e) {
                         m.total = e
                     },
                     progress: function(e) {
                         var t, n = "string" == typeof e ? "" !== e.replace(/[^\d.]/g, "") ? +e.replace(/[^\d.]/g, "") : !1 : e;
                         n === !1 && m.error(b.nonNumeric, e), m.total ? (m.value = n, t = n / m.total * 100, m.debug("Calculating percent complete from total", t), m.set.percent(t)) : (t = n, m.debug("Setting value to exact percentage value", t), m.set.percent(t))
                     }
                 },
                 setting: function(t, n) {
                     if (m.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 },
                 debug: function() {
                     f.debug && (f.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), m.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     f.verbose && f.debug && (f.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), m.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     m.error = Function.prototype.bind.call(console.error, console, f.name + ":"), m.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         f.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: S,
                             "Execution Time": n
                         })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 100)
                     },
                     display: function() {
                         var t = f.name + ":",
                             n = 0;
                         s = !1, clearTimeout(m.performance.timer), e.each(c, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, n, a) {
                     var r, s, c, l = A;
                     return n = n || d, a = S || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (m.error(b.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, u ? (A === i && m.initialize(), m.invoke(l)) : (A !== i && m.destroy(), m.initialize())
         }), o !== i ? o : this
     }, e.fn.progress.settings = {
         name: "Progress",
         namespace: "progress",
         debug: !1,
         verbose: !0,
         performance: !0,
         random: {
             min: 2,
             max: 5
         },
         duration: 300,
         autoSuccess: !0,
         showActivity: !0,
         limitValues: !0,
         label: "percent",
         precision: 1,
         framerate: 1e3 / 30,
         percent: !1,
         total: !1,
         value: !1,
         onChange: function() {},
         onSuccess: function() {},
         onActive: function() {},
         onError: function() {},
         onWarning: function() {},
         error: {
             method: "The method you called is not defined.",
             nonNumeric: "Progress value is non numeric",
             tooHigh: "Value specified is above 100%",
             tooLow: "Value specified is below 0%"
         },
         regExp: {
             variable: /\{\$*[A-z0-9]+\}/g
         },
         metadata: {
             percent: "percent",
             total: "total",
             value: "value"
         },
         selector: {
             bar: "> .bar",
             label: "> .label",
             progress: ".bar > .progress"
         },
         text: {
             active: !1,
             error: !1,
             success: !1,
             warning: !1,
             percent: "{percent}%",
             ratio: "{value} of {total}"
         },
         className: {
             active: "active",
             error: "error",
             success: "success",
             warning: "warning"
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.rating = function(t) {
         var n, o = e(this),
             a = o.selector || "",
             r = (new Date).getTime(),
             s = [],
             c = arguments[0],
             l = "string" == typeof c,
             u = [].slice.call(arguments, 1);
         return o.each(function() {
             var d, m = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.rating.settings, t) : e.extend({}, e.fn.rating.settings),
                 f = m.namespace,
                 g = m.className,
                 p = m.metadata,
                 h = m.selector,
                 v = (m.error, "." + f),
                 b = "module-" + f,
                 y = this,
                 x = e(this).data(b),
                 w = e(this),
                 C = w.find(h.icon);
             d = {
                 initialize: function() {
                     d.verbose("Initializing rating module", m), 0 === C.length && d.setup.layout(), m.interactive ? d.enable() : d.disable(), m.initialRating && (d.debug("Setting initial rating"), d.setRating(m.initialRating)), w.data(p.rating) && (d.debug("Rating found in metadata"), d.setRating(w.data(p.rating))), d.instantiate()
                 },
                 instantiate: function() {
                     d.verbose("Instantiating module", m), x = d, w.data(b, d)
                 },
                 destroy: function() {
                     d.verbose("Destroying previous instance", x), w.removeData(b), C.off(v)
                 },
                 refresh: function() {
                     C = w.find(h.icon)
                 },
                 setup: {
                     layout: function() {
                         var t = w.data(p.maxRating) || m.maxRating;
                         d.debug("Generating icon html dynamically"), w.html(e.fn.rating.settings.templates.icon(t)), d.refresh()
                     }
                 },
                 event: {
                     mouseenter: function() {
                         var t = e(this);
                         t.nextAll().removeClass(g.selected), w.addClass(g.selected), t.addClass(g.selected).prevAll().addClass(g.selected)
                     },
                     mouseleave: function() {
                         w.removeClass(g.selected), C.removeClass(g.selected)
                     },
                     click: function() {
                         var t = e(this),
                             n = d.getRating(),
                             i = C.index(t) + 1,
                             o = "auto" == m.clearable ? 1 === C.length : m.clearable;
                         o && n == i ? d.clearRating() : d.setRating(i)
                     }
                 },
                 clearRating: function() {
                     d.debug("Clearing current rating"), d.setRating(0)
                 },
                 getRating: function() {
                     var e = C.filter("." + g.active).length;
                     return d.verbose("Current rating retrieved", e), e
                 },
                 enable: function() {
                     d.debug("Setting rating to interactive mode"), C.on("mouseenter" + v, d.event.mouseenter).on("mouseleave" + v, d.event.mouseleave).on("click" + v, d.event.click), w.removeClass(g.disabled)
                 },
                 disable: function() {
                     d.debug("Setting rating to read-only mode"), C.off(v), w.addClass(g.disabled)
                 },
                 setRating: function(e) {
                     var t = e - 1 >= 0 ? e - 1 : 0,
                         n = C.eq(t);
                     w.removeClass(g.selected), C.removeClass(g.selected).removeClass(g.active), e > 0 && (d.verbose("Setting current rating to", e), n.prevAll().andSelf().addClass(g.active)), m.onRate.call(y, e)
                 },
                 setting: function(t, n) {
                     if (d.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, d, t);
                     else {
                         if (n === i) return d[t];
                         d[t] = n
                     }
                 },
                 debug: function() {
                     m.debug && (m.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), d.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     m.verbose && m.debug && (m.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), d.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     d.error = Function.prototype.bind.call(console.error, console, m.name + ":"), d.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         m.performance && (t = (new Date).getTime(), i = r || t, n = t - i, r = t, s.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: y,
                             "Execution Time": n
                         })), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 100)
                     },
                     display: function() {
                         var t = m.name + ":",
                             n = 0;
                         r = !1, clearTimeout(d.performance.timer), e.each(s, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", a && (t += " '" + a + "'"), o.length > 1 && (t += " (" + o.length + ")"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), s = []
                     }
                 },
                 invoke: function(t, o, a) {
                     var r, s, c, l = x;
                     return o = o || u, a = y || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, o) : s !== i && (c = s), e.isArray(n) ? n.push(c) : n !== i ? n = [n, c] : c !== i && (n = c), s
                 }
             }, l ? (x === i && d.initialize(), d.invoke(c)) : (x !== i && d.destroy(), d.initialize())
         }), n !== i ? n : this
     }, e.fn.rating.settings = {
         name: "Rating",
         namespace: "rating",
         debug: !1,
         verbose: !0,
         performance: !0,
         initialRating: 0,
         interactive: !0,
         maxRating: 4,
         clearable: "auto",
         onRate: function() {},
         error: {
             method: "The method you called is not defined",
             noMaximum: "No maximum rating specified. Cannot generate HTML automatically"
         },
         metadata: {
             rating: "rating",
             maxRating: "maxRating"
         },
         className: {
             active: "active",
             disabled: "disabled",
             selected: "selected",
             loading: "loading"
         },
         selector: {
             icon: ".icon"
         },
         templates: {
             icon: function(e) {
                 for (var t = 1, n = ""; e >= t;) n += '<i class="icon"></i>', t++;
                 return n
             }
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.search = function(n) {
         var o, a = e(this),
             r = a.selector || "",
             s = (new Date).getTime(),
             c = [],
             l = arguments[0],
             u = "string" == typeof l,
             d = [].slice.call(arguments, 1);
         return e(this).each(function() {
             var m, f = e.extend(!0, {}, e.fn.search.settings, n),
                 g = f.className,
                 p = f.selector,
                 h = f.error,
                 v = f.namespace,
                 b = "." + v,
                 y = v + "-module",
                 x = e(this),
                 w = x.find(p.prompt),
                 C = x.find(p.searchButton),
                 T = x.find(p.results),
                 k = (x.find(p.result), x.find(p.category), this),
                 S = x.data(y);
             m = {
                 initialize: function() {
                     m.verbose("Initializing module");
                     var e = w[0],
                         t = e !== i && e.oninput !== i ? "input" : e !== i && e.onpropertychange !== i ? "propertychange" : "keyup";
                     f.automatic && w.on(t + b, m.throttle), w.on("focus" + b, m.event.focus).on("blur" + b, m.event.blur).on("keydown" + b, m.handleKeyboard), C.on("click" + b, m.query), T.on("mousedown" + b, m.event.result.mousedown).on("mouseup" + b, m.event.result.mouseup).on("click" + b, p.result, m.event.result.click), m.instantiate()
                 },
                 instantiate: function() {
                     m.verbose("Storing instance of module", m), S = m, x.data(y, m)
                 },
                 destroy: function() {
                     m.verbose("Destroying instance"), x.removeData(y), w.off(b), C.off(b), T.off(b)
                 },
                 event: {
                     focus: function() {
                         x.addClass(g.focus), clearTimeout(m.timer), m.throttle(), m.has.minimumCharacters() && m.showResults()
                     },
                     blur: function() {
                         m.cancel(), x.removeClass(g.focus), m.resultsClicked || (m.timer = setTimeout(m.hideResults, f.hideDelay))
                     },
                     result: {
                         mousedown: function() {
                             m.resultsClicked = !0
                         },
                         mouseup: function() {
                             m.resultsClicked = !1
                         },
                         click: function(n) {
                             m.debug("Search result selected"); {
                                 var i = e(this),
                                     o = i.find(".title");
                                 o.html()
                             }
                             if ("default" == f.onSelect || "default" == f.onSelect.call(this, n)) {
                                 var a = i.find("a[href]").eq(0),
                                     o = i.find(p.title).eq(0),
                                     r = a.attr("href") || !1,
                                     s = a.attr("target") || !1,
                                     c = o.length > 0 ? o.text() : !1;
                                 m.hideResults(), c && w.val(c), r && ("_blank" == s || n.ctrlKey ? t.open(r) : t.location.href = r)
                             }
                         }
                     }
                 },
                 handleKeyboard: function(e) {
                     var t, n = x.find(p.result),
                         i = x.find(p.category),
                         o = e.which,
                         a = {
                             backspace: 8,
                             enter: 13,
                             escape: 27,
                             upArrow: 38,
                             downArrow: 40
                         },
                         r = g.active,
                         s = n.index(n.filter("." + r)),
                         c = n.length;
                     if (o == a.escape && (m.verbose("Escape key pressed, blurring search field"), w.trigger("blur")), T.filter(":visible").length > 0)
                         if (o == a.enter) {
                             if (m.verbose("Enter key pressed, selecting active result"), n.filter("." + r).length > 0) return m.event.result.click.call(n.filter("." + r), e), e.preventDefault(), !1
                         } else o == a.upArrow ? (m.verbose("Up key pressed, changing active result"), t = 0 > s - 1 ? s : s - 1, i.removeClass(r), n.removeClass(r).eq(t).addClass(r).closest(i).addClass(r), e.preventDefault()) : o == a.downArrow && (m.verbose("Down key pressed, changing active result"), t = s + 1 >= c ? s : s + 1, i.removeClass(r), n.removeClass(r).eq(t).addClass(r).closest(i).addClass(r), e.preventDefault());
                     else o == a.enter && (m.verbose("Enter key pressed, executing query"), m.query(), C.addClass(g.down), w.one("keyup", function() {
                         C.removeClass(g.down)
                     }))
                 },
                 query: function() {
                     var t = w.val(),
                         n = m.read.cache(t);
                     n ? (m.debug("Reading result for " + t + " from cache"), m.addResults(n)) : (m.debug("Querying for " + t), e.isPlainObject(f.source) || e.isArray(f.source) ? m.search.local(t) : f.apiSettings ? m.search.remote(t) : e.fn.api !== i && e.api.settings.api.search !== i ? (m.debug("Searching with default search API endpoint"), f.apiSettings = {
                         action: "search"
                     }, m.search.remote(t)) : m.error(h.source), f.onSearchQuery.call(k, t))
                 },
                 search: {
                     local: function(t) {
                         var n, i = [],
                             o = [],
                             a = e.isArray(f.searchFields) ? f.searchFields : [f.searchFields],
                             r = new RegExp("(?:s|^)" + t, "i"),
                             s = new RegExp(t, "i");
                         x.addClass(g.loading), e.each(a, function(t, n) {
                             e.each(f.source, function(t, a) {
                                 var c = "string" == typeof a[n],
                                     l = -1 == e.inArray(a, i) && -1 == e.inArray(a, o);
                                 c && l && (a[n].match(r) ? i.push(a) : f.searchFullText && a[n].match(s) && o.push(a))
                             })
                         }), n = m.generateResults({
                             results: e.merge(i, o)
                         }), x.removeClass(g.loading), m.write.cache(t, n), m.addResults(n)
                     },
                     remote: function(t) {
                         var n, i = {
                             stateContext: x,
                             urlData: {
                                 query: t
                             },
                             onSuccess: function(e) {
                                 n = m.generateResults(e), m.write.cache(t, n), m.addResults(n)
                             },
                             onFailure: m.error
                         };
                         m.cancel(), m.debug("Executing search"), e.extend(!0, i, f.apiSettings), e.api(i)
                     }
                 },
                 throttle: function() {
                     clearTimeout(m.timer), m.has.minimumCharacters() ? m.timer = setTimeout(m.query, f.searchDelay) : m.hideResults()
                 },
                 cancel: function() {
                     var e = x.data("xhr") || !1;
                     e && "resolved" != e.state() && (m.debug("Cancelling last search"), e.abort())
                 },
                 has: {
                     minimumCharacters: function() {
                         var e = w.val(),
                             t = e.length;
                         return t >= f.minCharacters
                     }
                 },
                 read: {
                     cache: function(e) {
                         var t = x.data("cache");
                         return f.cache && "object" == typeof t && t[e] !== i ? t[e] : !1
                     }
                 },
                 write: {
                     cache: function(e, t) {
                         var n = x.data("cache") !== i ? x.data("cache") : {};
                         n[e] = t, x.data("cache", n)
                     }
                 },
                 addResults: function(e) {
                     ("default" == f.onResultsAdd || "default" == f.onResultsAdd.call(T, e)) && T.html(e), m.showResults()
                 },
                 showResults: function() {
                     0 === T.filter(":visible").length && w.filter(":focus").length > 0 && "" !== T.html() && (f.transition && e.fn.transition !== i && x.transition("is supported") && !T.transition("is inward") ? (m.debug("Showing results with css animations"), T.transition({
                         animation: f.transition + " in",
                         duration: f.duration,
                         queue: !0
                     })) : (m.debug("Showing results with javascript"), T.stop().fadeIn(f.duration, f.easing)), f.onResultsOpen.call(T))
                 },
                 hideResults: function() {
                     T.filter(":visible").length > 0 && (f.transition && e.fn.transition !== i && x.transition("is supported") && !T.transition("is outward") ? (m.debug("Hiding results with css animations"), T.transition({
                         animation: f.transition + " out",
                         duration: f.duration,
                         queue: !0
                     })) : (m.debug("Hiding results with javascript"), T.stop().fadeIn(f.duration, f.easing)), f.onResultsClose.call(T))
                 },
                 generateResults: function(t) {
                     m.debug("Generating html from response", t);
                     var n = f.templates[f.type],
                         i = "";
                     return e.isPlainObject(t.results) && !e.isEmptyObject(t.results) || e.isArray(t.results) && t.results.length > 0 ? (f.maxResults > 0 && (t.results = e.isArray(t.results) ? t.results.slice(0, f.maxResults) : t.results), e.isFunction(n) ? i = n(t) : m.error(h.noTemplate, !1)) : i = m.displayMessage(h.noResults, "empty"), f.onResults.call(k, t), i
                 },
                 displayMessage: function(e, t) {
                     return t = t || "standard", m.debug("Displaying message", e, t), m.addResults(f.templates.message(e, t)), f.templates.message(e, t)
                 },
                 setting: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 },
                 debug: function() {
                     f.debug && (f.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), m.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     f.verbose && f.debug && (f.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), m.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     m.error = Function.prototype.bind.call(console.error, console, f.name + ":"), m.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         f.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: k,
                             "Execution Time": n
                         })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 100)
                     },
                     display: function() {
                         var t = f.name + ":",
                             n = 0;
                         s = !1, clearTimeout(m.performance.timer), e.each(c, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, n, a) {
                     var r, s, c, l = S;
                     return n = n || d, a = k || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, u ? (S === i && m.initialize(), m.invoke(l)) : (S !== i && m.destroy(), m.initialize())
         }), o !== i ? o : this
     }, e.fn.search.settings = {
         name: "Search Module",
         namespace: "search",
         debug: !1,
         verbose: !0,
         performance: !0,
         apiSettings: !1,
         type: "standard",
         minCharacters: 1,
         source: !1,
         searchFields: ["title", "description"],
         searchFullText: !0,
         automatic: "true",
         hideDelay: 0,
         searchDelay: 300,
         maxResults: 7,
         cache: !0,
         transition: "scale",
         duration: 300,
         easing: "easeOutExpo",
         onSelect: "default",
         onResultsAdd: "default",
         onSearchQuery: function() {},
         onResults: function() {},
         onResultsOpen: function() {},
         onResultsClose: function() {},
         className: {
             active: "active",
             down: "down",
             focus: "focus",
             empty: "empty",
             loading: "loading"
         },
         error: {
             source: "Cannot search. No source used, and Semantic API module was not included",
             noResults: "Your search returned no results",
             logging: "Error in debug logging, exiting.",
             noTemplate: "A valid template name was not specified.",
             serverError: "There was an issue with querying the server.",
             method: "The method you called is not defined."
         },
         selector: {
             prompt: ".prompt",
             searchButton: ".search.button",
             results: ".results",
             category: ".category",
             result: ".result",
             title: ".title, .name"
         },
         templates: {
             escape: function(e) {
                 var t = /[&<>"'`]/g,
                     n = /[&<>"'`]/,
                     i = {
                         "&": "&amp;",
                         "<": "&lt;",
                         ">": "&gt;",
                         '"': "&quot;",
                         "'": "&#x27;",
                         "`": "&#x60;"
                     },
                     o = function(e) {
                         return i[e]
                     };
                 return n.test(e) ? e.replace(t, o) : e
             },
             message: function(e, t) {
                 var n = "";
                 return e !== i && t !== i && (n += '<div class="message ' + t + '">', n += "empty" == t ? '<div class="header">No Results</div class="header"><div class="description">' + e + '</div class="description">' : ' <div class="description">' + e + "</div>", n += "</div>"), n
             },
             category: function(t) {
                 var n = "",
                     o = e.fn.search.settings.templates.escape;
                 return t.results !== i ? (e.each(t.results, function(t, a) {
                     a.results !== i && a.results.length > 0 && (n += '<div class="category"><div class="name">' + a.name + "</div>", e.each(a.results, function(e, t) {
                         n += '<div class="result">', t.url && (n += '<a href="' + t.url + '"></a>'), t.image !== i && (t.image = o(t.image), n += '<div class="image"> <img src="' + t.image + '" alt=""></div>'), n += '<div class="content">', t.price !== i && (t.price = o(t.price), n += '<div class="price">' + t.price + "</div>"), t.title !== i && (t.title = o(t.title), n += '<div class="title">' + t.title + "</div>"), t.description !== i && (n += '<div class="description">' + t.description + "</div>"), n += "</div></div>"
                     }), n += "</div>")
                 }), t.action && (n += '<a href="' + t.action.url + '" class="action">' + t.action.text + "</a>"), n) : !1
             },
             standard: function(t) {
                 var n = "";
                 return t.results !== i ? (e.each(t.results, function(e, t) {
                     n += t.url ? '<a class="result" href="' + t.url + '">' : '<a class="result">', t.image !== i && (n += '<div class="image"> <img src="' + t.image + '"></div>'), n += '<div class="content">', t.price !== i && (n += '<div class="price">' + t.price + "</div>"), t.title !== i && (n += '<div class="title">' + t.title + "</div>"), t.description !== i && (n += '<div class="description">' + t.description + "</div>"), n += "</div>", n += "</a>"
                 }), t.action && (n += '<a href="' + t.action.url + '" class="action">' + t.action.text + "</a>"), n) : !1
             }
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.shape = function(o) {
         var a, r = e(this),
             s = (e("body"), (new Date).getTime()),
             c = [],
             l = arguments[0],
             u = "string" == typeof l,
             d = [].slice.call(arguments, 1),
             m = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                 setTimeout(e, 0)
             };
         return r.each(function() {
             var t, f, g, p = r.selector || "",
                 h = e.extend(!0, {}, e.fn.shape.settings, o),
                 v = h.namespace,
                 b = h.selector,
                 y = h.error,
                 x = h.className,
                 w = "." + v,
                 C = "module-" + v,
                 T = e(this),
                 k = T.find(b.sides),
                 S = T.find(b.side),
                 A = !1,
                 P = this,
                 E = T.data(C);
             g = {
                 initialize: function() {
                     g.verbose("Initializing module for", P), g.set.defaultSide(), g.instantiate()
                 },
                 instantiate: function() {
                     g.verbose("Storing instance of module", g), E = g, T.data(C, E)
                 },
                 destroy: function() {
                     g.verbose("Destroying previous module for", P), T.removeData(C).off(w)
                 },
                 refresh: function() {
                     g.verbose("Refreshing selector cache for", P), T = e(P), k = e(this).find(b.shape), S = e(this).find(b.side)
                 },
                 repaint: function() {
                     g.verbose("Forcing repaint event"); {
                         var e = k.get(0) || n.createElement("div");
                         e.offsetWidth
                     }
                 },
                 animate: function(e, n) {
                     g.verbose("Animating box with properties", e), n = n || function(e) {
                         g.verbose("Executing animation callback"), e !== i && e.stopPropagation(), g.reset(), g.set.active()
                     }, h.beforeChange.call(f.get()), g.get.transitionEvent() ? (g.verbose("Starting CSS animation"), T.addClass(x.animating), k.css(e).one(g.get.transitionEvent(), n), g.set.duration(h.duration), m(function() {
                         T.addClass(x.animating), t.addClass(x.hidden)
                     })) : n()
                 },
                 queue: function(e) {
                     g.debug("Queueing animation of", e), k.one(g.get.transitionEvent(), function() {
                         g.debug("Executing queued animation"), setTimeout(function() {
                             T.shape(e)
                         }, 0)
                     })
                 },
                 reset: function() {
                     g.verbose("Animating states reset"), T.removeClass(x.animating).attr("style", "").removeAttr("style"), k.attr("style", "").removeAttr("style"), S.attr("style", "").removeAttr("style").removeClass(x.hidden), f.removeClass(x.animating).attr("style", "").removeAttr("style")
                 },
                 is: {
                     complete: function() {
                         return S.filter("." + x.active)[0] == f[0]
                     },
                     animating: function() {
                         return T.hasClass(x.animating)
                     }
                 },
                 set: {
                     defaultSide: function() {
                         t = T.find("." + h.className.active), f = t.next(b.side).length > 0 ? t.next(b.side) : T.find(b.side).first(), A = !1, g.verbose("Active side set to", t), g.verbose("Next side set to", f)
                     },
                     duration: function(e) {
                         e = e || h.duration, e = "number" == typeof e ? e + "ms" : e, g.verbose("Setting animation duration", e), k.add(S).css({
                             "-webkit-transition-duration": e,
                             "-moz-transition-duration": e,
                             "-ms-transition-duration": e,
                             "-o-transition-duration": e,
                             "transition-duration": e
                         })
                     },
                     stageSize: function() {
                         var e = T.clone().addClass(x.loading),
                             t = e.find("." + h.className.active),
                             n = A ? e.find(b.side).eq(A) : t.next(b.side).length > 0 ? t.next(b.side) : e.find(b.side).first(),
                             i = {};
                         t.removeClass(x.active), n.addClass(x.active), e.insertAfter(T), i = {
                             width: n.outerWidth(),
                             height: n.outerHeight()
                         }, e.remove(), T.css(i), g.verbose("Resizing stage to fit new content", i)
                     },
                     nextSide: function(e) {
                         A = e, f = S.filter(e), A = S.index(f), 0 === f.length && (g.set.defaultSide(), g.error(y.side)), g.verbose("Next side manually set to", f)
                     },
                     active: function() {
                         g.verbose("Setting new side to active", f), S.removeClass(x.active), f.addClass(x.active), h.onChange.call(f.get()), g.set.defaultSide()
                     }
                 },
                 flip: {
                     up: function() {
                         return !g.is.complete() || g.is.animating() || h.allowRepeats ? void(g.is.animating() ? g.queue("flip up") : (g.debug("Flipping up", f), g.set.stageSize(), g.stage.above(), g.animate(g.get.transform.up()))) : void g.debug("Side already visible", f)
                     },
                     down: function() {
                         return !g.is.complete() || g.is.animating() || h.allowRepeats ? void(g.is.animating() ? g.queue("flip down") : (g.debug("Flipping down", f), g.set.stageSize(), g.stage.below(), g.animate(g.get.transform.down()))) : void g.debug("Side already visible", f)
                     },
                     left: function() {
                         return !g.is.complete() || g.is.animating() || h.allowRepeats ? void(g.is.animating() ? g.queue("flip left") : (g.debug("Flipping left", f), g.set.stageSize(), g.stage.left(), g.animate(g.get.transform.left()))) : void g.debug("Side already visible", f)
                     },
                     right: function() {
                         return !g.is.complete() || g.is.animating() || h.allowRepeats ? void(g.is.animating() ? g.queue("flip right") : (g.debug("Flipping right", f), g.set.stageSize(), g.stage.right(), g.animate(g.get.transform.right()))) : void g.debug("Side already visible", f)
                     },
                     over: function() {
                         return !g.is.complete() || g.is.animating() || h.allowRepeats ? void(g.is.animating() ? g.queue("flip over") : (g.debug("Flipping over", f), g.set.stageSize(), g.stage.behind(), g.animate(g.get.transform.over()))) : void g.debug("Side already visible", f)
                     },
                     back: function() {
                         return !g.is.complete() || g.is.animating() || h.allowRepeats ? void(g.is.animating() ? g.queue("flip back") : (g.debug("Flipping back", f), g.set.stageSize(), g.stage.behind(), g.animate(g.get.transform.back()))) : void g.debug("Side already visible", f)
                     }
                 },
                 get: {
                     transform: {
                         up: function() {
                             var e = {
                                 y: -((t.outerHeight() - f.outerHeight()) / 2),
                                 z: -(t.outerHeight() / 2)
                             };
                             return {
                                 transform: "translateY(" + e.y + "px) translateZ(" + e.z + "px) rotateX(-90deg)"
                             }
                         },
                         down: function() {
                             var e = {
                                 y: -((t.outerHeight() - f.outerHeight()) / 2),
                                 z: -(t.outerHeight() / 2)
                             };
                             return {
                                 transform: "translateY(" + e.y + "px) translateZ(" + e.z + "px) rotateX(90deg)"
                             }
                         },
                         left: function() {
                             var e = {
                                 x: -((t.outerWidth() - f.outerWidth()) / 2),
                                 z: -(t.outerWidth() / 2)
                             };
                             return {
                                 transform: "translateX(" + e.x + "px) translateZ(" + e.z + "px) rotateY(90deg)"
                             }
                         },
                         right: function() {
                             var e = {
                                 x: -((t.outerWidth() - f.outerWidth()) / 2),
                                 z: -(t.outerWidth() / 2)
                             };
                             return {
                                 transform: "translateX(" + e.x + "px) translateZ(" + e.z + "px) rotateY(-90deg)"
                             }
                         },
                         over: function() {
                             var e = {
                                 x: -((t.outerWidth() - f.outerWidth()) / 2)
                             };
                             return {
                                 transform: "translateX(" + e.x + "px) rotateY(180deg)"
                             }
                         },
                         back: function() {
                             var e = {
                                 x: -((t.outerWidth() - f.outerWidth()) / 2)
                             };
                             return {
                                 transform: "translateX(" + e.x + "px) rotateY(-180deg)"
                             }
                         }
                     },
                     transitionEvent: function() {
                         var e, t = n.createElement("element"),
                             o = {
                                 transition: "transitionend",
                                 OTransition: "oTransitionEnd",
                                 MozTransition: "transitionend",
                                 WebkitTransition: "webkitTransitionEnd"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e]
                     },
                     nextSide: function() {
                         return t.next(b.side).length > 0 ? t.next(b.side) : T.find(b.side).first()
                     }
                 },
                 stage: {
                     above: function() {
                         var e = {
                             origin: (t.outerHeight() - f.outerHeight()) / 2,
                             depth: {
                                 active: f.outerHeight() / 2,
                                 next: t.outerHeight() / 2
                             }
                         };
                         g.verbose("Setting the initial animation position as above", f, e), t.css({
                             transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                         }), f.addClass(x.animating).css({
                             display: "block",
                             top: e.origin + "px",
                             transform: "rotateX(90deg) translateZ(" + e.depth.next + "px)"
                         })
                     },
                     below: function() {
                         var e = {
                             origin: (t.outerHeight() - f.outerHeight()) / 2,
                             depth: {
                                 active: f.outerHeight() / 2,
                                 next: t.outerHeight() / 2
                             }
                         };
                         g.verbose("Setting the initial animation position as below", f, e), t.css({
                             transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                         }), f.addClass(x.animating).css({
                             display: "block",
                             top: e.origin + "px",
                             transform: "rotateX(-90deg) translateZ(" + e.depth.next + "px)"
                         })
                     },
                     left: function() {
                         var e = {
                             origin: (t.outerWidth() - f.outerWidth()) / 2,
                             depth: {
                                 active: f.outerWidth() / 2,
                                 next: t.outerWidth() / 2
                             }
                         };
                         g.verbose("Setting the initial animation position as left", f, e), t.css({
                             transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                         }), f.addClass(x.animating).css({
                             display: "block",
                             left: e.origin + "px",
                             transform: "rotateY(-90deg) translateZ(" + e.depth.next + "px)"
                         })
                     },
                     right: function() {
                         var e = {
                             origin: (t.outerWidth() - f.outerWidth()) / 2,
                             depth: {
                                 active: f.outerWidth() / 2,
                                 next: t.outerWidth() / 2
                             }
                         };
                         g.verbose("Setting the initial animation position as left", f, e), t.css({
                             transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                         }), f.addClass(x.animating).css({
                             display: "block",
                             left: e.origin + "px",
                             transform: "rotateY(90deg) translateZ(" + e.depth.next + "px)"
                         })
                     },
                     behind: function() {
                         var e = {
                             origin: (t.outerWidth() - f.outerWidth()) / 2,
                             depth: {
                                 active: f.outerWidth() / 2,
                                 next: t.outerWidth() / 2
                             }
                         };
                         g.verbose("Setting the initial animation position as behind", f, e), t.css({
                             transform: "rotateY(0deg)"
                         }), f.addClass(x.animating).css({
                             display: "block",
                             left: e.origin + "px",
                             transform: "rotateY(-180deg)"
                         })
                     }
                 },
                 setting: function(t, n) {
                     if (g.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, h, t);
                     else {
                         if (n === i) return h[t];
                         h[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 },
                 debug: function() {
                     h.debug && (h.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, h.name + ":"), g.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     h.verbose && h.debug && (h.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, h.name + ":"), g.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     g.error = Function.prototype.bind.call(console.error, console, h.name + ":"), g.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         h.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: P,
                             "Execution Time": n
                         })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 100)
                     },
                     display: function() {
                         var t = h.name + ":",
                             n = 0;
                         s = !1, clearTimeout(g.performance.timer), e.each(c, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", p && (t += " '" + p + "'"), r.length > 1 && (t += " (" + r.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, n, o) {
                     var r, s, c, l = E;
                     return n = n || d, o = P || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, u ? (E === i && g.initialize(), g.invoke(l)) : (E !== i && g.destroy(), g.initialize())
         }), a !== i ? a : this
     }, e.fn.shape.settings = {
         name: "Shape",
         debug: !1,
         verbose: !0,
         performance: !0,
         namespace: "shape",
         beforeChange: function() {},
         onChange: function() {},
         allowRepeats: !1,
         duration: 700,
         error: {
             side: "You tried to switch to a side that does not exist.",
             method: "The method you called is not defined"
         },
         className: {
             animating: "animating",
             hidden: "hidden",
             loading: "loading",
             active: "active"
         },
         selector: {
             sides: ".sides",
             side: ".side"
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.sidebar = function(o) {
         var a, r = e(this),
             s = e(t),
             c = e(n),
             l = e("html"),
             u = e("head"),
             d = r.selector || "",
             m = (new Date).getTime(),
             f = [],
             g = arguments[0],
             p = "string" == typeof g,
             h = [].slice.call(arguments, 1),
             v = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                 setTimeout(e, 0)
             };
         return r.each(function() {
             var r, b, y, x, w, C, T = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.sidebar.settings, o) : e.extend({}, e.fn.sidebar.settings),
                 k = T.selector,
                 S = T.className,
                 A = T.namespace,
                 P = T.regExp,
                 E = T.error,
                 F = "." + A,
                 R = "module-" + A,
                 D = e(this),
                 O = e(T.context),
                 z = D.children(k.sidebar),
                 j = O.children(k.pusher),
                 q = this,
                 N = D.data(R);
             C = {
                 initialize: function() {
                     C.debug("Initializing sidebar", o), C.create.id(), w = C.get.transitionEvent(), ("auto" == T.useLegacy && C.is.legacy() || T.useLegacy === !0) && (T.transition = "overlay", T.useLegacy = !0), C.is.ios() && C.set.ios(), T.delaySetup ? v(C.setup.layout) : C.setup.layout(), C.instantiate()
                 },
                 instantiate: function() {
                     C.verbose("Storing instance of module", C), N = C, D.data(R, C)
                 },
                 create: {
                     id: function() {
                         C.verbose("Creating unique id for element"), y = C.get.uniqueID(), b = "." + y
                     }
                 },
                 destroy: function() {
                     C.verbose("Destroying previous module for", D), C.remove.direction(), D.off(F).removeData(R), O.off(b), s.off(b), c.off(b)
                 },
                 event: {
                     clickaway: function(t) {
                         0 === e(t.target).closest(k.sidebar).length && (C.verbose("User clicked on dimmed page"), C.hide())
                     },
                     touch: function() {},
                     containScroll: function() {
                         q.scrollTop <= 0 && (q.scrollTop = 1), q.scrollTop + q.offsetHeight >= q.scrollHeight && (q.scrollTop = q.scrollHeight - q.offsetHeight - 1)
                     },
                     scroll: function(t) {
                         0 === e(t.target).closest(k.sidebar).length && t.preventDefault()
                     }
                 },
                 bind: {
                     clickaway: function() {
                         C.verbose("Adding clickaway events to context", O), T.closable && O.on("click" + b, C.event.clickaway).on("touchend" + b, C.event.clickaway)
                     },
                     scrollLock: function() {
                         T.scrollLock && (C.debug("Disabling page scroll"), s.on("DOMMouseScroll" + b, C.event.scroll)), C.verbose("Adding events to contain sidebar scroll"), c.on("touchmove" + b, C.event.touch), D.on("scroll" + F, C.event.containScroll)
                     }
                 },
                 unbind: {
                     clickaway: function() {
                         C.verbose("Removing clickaway events from context", O), O.off(b)
                     },
                     scrollLock: function() {
                         C.verbose("Removing scroll lock from page"), c.off(b), s.off(b), D.off("scroll" + F)
                     }
                 },
                 add: {
                     bodyCSS: function() {
                         var t, n = D.outerWidth(),
                             i = D.outerHeight(),
                             o = C.get.direction(),
                             a = {
                                 left: n,
                                 right: -n,
                                 top: i,
                                 bottom: -i
                             };
                         C.is.rtl() && (C.verbose("RTL detected, flipping widths"), a.left = -n, a.right = n), t = '<style title="' + A + '">', "left" === o || "right" === o ? (C.debug("Adding CSS rules for animation distance", n), t += " .ui.visible." + o + ".sidebar ~ .fixed, .ui.visible." + o + ".sidebar ~ .pusher {   -webkit-transform: translate3d(" + a[o] + "px, 0, 0);           transform: translate3d(" + a[o] + "px, 0, 0); }") : ("top" === o || "bottom" == o) && (t += " .ui.visible." + o + ".sidebar ~ .fixed, .ui.visible." + o + ".sidebar ~ .pusher {   -webkit-transform: translate3d(0, " + a[o] + "px, 0);           transform: translate3d(0, " + a[o] + "px, 0); }"), C.is.ie() && ("left" === o || "right" === o ? (C.debug("Adding CSS rules for animation distance", n), t += " .ui.visible." + o + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(" + a[o] + "px, 0, 0);           transform: translate3d(" + a[o] + "px, 0, 0); }") : ("top" === o || "bottom" == o) && (t += " .ui.visible." + o + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, " + a[o] + "px, 0);           transform: translate3d(0, " + a[o] + "px, 0); }"), t += " .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"), t += "</style>", u.append(t), r = e("style[title=" + A + "]"), C.debug("Adding sizing css to head", r)
                     }
                 },
                 refresh: function() {
                     C.verbose("Refreshing selector cache"), O = e(T.context), z = O.children(k.sidebar), j = O.children(k.pusher)
                 },
                 refreshSidebars: function() {
                     C.verbose("Refreshing other sidebars"), z = O.children(k.sidebar)
                 },
                 repaint: function() {
                     C.verbose("Forcing repaint event"), q.style.display = "none", q.offsetHeight, q.scrollTop = q.scrollTop, q.style.display = ""
                 },
                 setup: {
                     layout: function() {
                         0 === O.children(k.pusher).length && (C.debug("Adding wrapper element for sidebar"), C.error(E.pusher), j = e('<div class="pusher" />'), O.children().not(k.omitted).not(z).wrapAll(j), C.refresh()), (0 === D.nextAll(k.pusher).length || D.nextAll(k.pusher)[0] !== j[0]) && (C.debug("Moved sidebar to correct parent element"), C.error(E.movedSidebar, q), D.detach().prependTo(O), C.refresh()), C.set.pushable(), C.set.direction()
                     }
                 },
                 attachEvents: function(t, n) {
                     var i = e(t);
                     n = e.isFunction(C[n]) ? C[n] : C.toggle, i.length > 0 ? (C.debug("Attaching sidebar events to element", t, n), i.on("click" + F, n)) : C.error(E.notFound, t)
                 },
                 show: function(t) {
                     var n = T.useLegacy === !0 ? C.legacyPushPage : C.pushPage;
                     t = e.isFunction(t) ? t : function() {}, C.is.hidden() ? (C.refreshSidebars(), T.overlay && (C.error(E.overlay), T.transition = "overlay"), C.refresh(), C.othersActive() && "overlay" !== C.get.transition() && (C.debug("Other sidebars currently visible"), T.transition = "overlay", T.exclusive && C.hideOthers()), n(function() {
                         t.call(q), T.onShow.call(q)
                     }), T.onChange.call(q), T.onVisible.call(q)) : C.debug("Sidebar is already visible")
                 },
                 hide: function(t) {
                     var n = T.useLegacy === !0 ? C.legacyPullPage : C.pullPage;
                     t = e.isFunction(t) ? t : function() {}, (C.is.visible() || C.is.animating()) && (C.debug("Hiding sidebar", t), C.refreshSidebars(), n(function() {
                         t.call(q), T.onHidden.call(q)
                     }), T.onChange.call(q), T.onHide.call(q))
                 },
                 othersAnimating: function() {
                     return z.not(D).filter("." + S.animating).length > 0
                 },
                 othersVisible: function() {
                     return z.not(D).filter("." + S.visible).length > 0
                 },
                 othersActive: function() {
                     return C.othersVisible() || C.othersAnimating()
                 },
                 hideOthers: function(e) {
                     var t = z.not(D).filter("." + S.visible),
                         n = t.length,
                         i = 0;
                     e = e || function() {}, t.sidebar("hide", function() {
                         i++, i == n && e()
                     })
                 },
                 toggle: function() {
                     C.verbose("Determining toggled direction"), C.is.hidden() ? C.show() : C.hide()
                 },
                 pushPage: function(t) {
                     var n, i, o = C.get.transition(),
                         a = "safe" == o ? O : "overlay" === o || C.othersActive() ? D : j;
                     t = e.isFunction(t) ? t : function() {}, "scale down" == T.transition && C.scrollToTop(), C.set.transition(), C.repaint(), n = function() {
                         C.bind.clickaway(), C.add.bodyCSS(), C.set.animating(), C.set.visible(), C.othersVisible() || T.dimPage && j.addClass(S.dimmed)
                     }, i = function(e) {
                         e.target == a[0] && (a.off(w + b, i), C.remove.animating(), C.bind.scrollLock(), t.call(q))
                     }, a.off(w + b), a.on(w + b, i), v(n)
                 },
                 pullPage: function(t) {
                     var n, i, o = C.get.transition(),
                         a = "safe" == o ? O : "overlay" == o || C.othersActive() ? D : j;
                     t = e.isFunction(t) ? t : function() {}, C.verbose("Removing context push state", C.get.direction()), C.set.transition(), C.unbind.clickaway(), C.unbind.scrollLock(), n = function() {
                         C.set.animating(), C.remove.visible(), T.dimPage && !C.othersVisible() && j.removeClass(S.dimmed)
                     }, i = function(e) {
                         e.target == a[0] && (a.off(w + b, i), C.remove.animating(), C.remove.transition(), C.remove.bodyCSS(), ("scale down" == o || T.returnScroll && C.is.mobile()) && C.scrollBack(), t.call(q))
                     }, a.off(w + b), a.on(w + b, i), v(n)
                 },
                 legacyPushPage: function(t) {
                     var n = D.width(),
                         i = C.get.direction(),
                         o = {};
                     n = n || D.width(), t = e.isFunction(t) ? t : function() {}, o[i] = n, C.debug("Using javascript to push context", o), C.set.visible(), C.set.transition(), C.set.animating(), T.dimPage && j.addClass(S.dimmed), O.css("position", "relative").animate(o, T.duration, T.easing, function() {
                         C.remove.animating(), C.bind.clickaway(), t.call(q)
                     })
                 },
                 legacyPullPage: function(t) {
                     var n = 0,
                         i = C.get.direction(),
                         o = {};
                     n = n || D.width(), t = e.isFunction(t) ? t : function() {}, o[i] = "0px", C.debug("Using javascript to pull context", o), C.unbind.clickaway(), C.set.animating(), C.remove.visible(), T.dimPage && !C.othersActive() && j.removeClass(S.dimmed), O.css("position", "relative").animate(o, T.duration, T.easing, function() {
                         C.remove.animating(), t.call(q)
                     })
                 },
                 scrollToTop: function() {
                     C.verbose("Scrolling to top of page to avoid animation issues"), x = e(t).scrollTop(), D.scrollTop(0), t.scrollTo(0, 0)
                 },
                 scrollBack: function() {
                     C.verbose("Scrolling back to original page position"), t.scrollTo(0, x)
                 },
                 set: {
                     ios: function() {
                         l.addClass(S.ios)
                     },
                     pushed: function() {
                         O.addClass(S.pushed)
                     },
                     pushable: function() {
                         O.addClass(S.pushable)
                     },
                     active: function() {
                         D.addClass(S.active)
                     },
                     animating: function() {
                         D.addClass(S.animating)
                     },
                     transition: function(e) {
                         e = e || C.get.transition(), D.addClass(e)
                     },
                     direction: function(e) {
                         e = e || C.get.direction(), D.addClass(S[e])
                     },
                     visible: function() {
                         D.addClass(S.visible)
                     },
                     overlay: function() {
                         D.addClass(S.overlay)
                     }
                 },
                 remove: {
                     bodyCSS: function() {
                         C.debug("Removing body css styles", r), r && r.length > 0 && r.remove()
                     },
                     pushed: function() {
                         O.removeClass(S.pushed)
                     },
                     pushable: function() {
                         O.removeClass(S.pushable)
                     },
                     active: function() {
                         D.removeClass(S.active)
                     },
                     animating: function() {
                         D.removeClass(S.animating)
                     },
                     transition: function(e) {
                         e = e || C.get.transition(), D.removeClass(e)
                     },
                     direction: function(e) {
                         e = e || C.get.direction(), D.removeClass(S[e])
                     },
                     visible: function() {
                         D.removeClass(S.visible)
                     },
                     overlay: function() {
                         D.removeClass(S.overlay)
                     }
                 },
                 get: {
                     direction: function() {
                         return D.hasClass(S.top) ? S.top : D.hasClass(S.right) ? S.right : D.hasClass(S.bottom) ? S.bottom : S.left
                     },
                     transition: function() {
                         var e = C.get.direction();
                         return C.is.mobile() ? "auto" == T.mobileTransition ? T.defaultTransition.mobile[e] : T.mobileTransition : "auto" == T.transition ? T.defaultTransition.computer[e] : T.transition
                     },
                     transitionEvent: function() {
                         var e, t = n.createElement("element"),
                             o = {
                                 transition: "transitionend",
                                 OTransition: "oTransitionEnd",
                                 MozTransition: "transitionend",
                                 WebkitTransition: "webkitTransitionEnd"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e]
                     },
                     uniqueID: function() {
                         return (Math.random().toString(16) + "000000000").substr(2, 8)
                     }
                 },
                 is: {
                     ie: function() {
                         var e = !t.ActiveXObject && "ActiveXObject" in t,
                             n = "ActiveXObject" in t;
                         return e || n
                     },
                     legacy: function() {
                         var e, o = n.createElement("div"),
                             a = {
                                 webkitTransform: "-webkit-transform",
                                 OTransform: "-o-transform",
                                 msTransform: "-ms-transform",
                                 MozTransform: "-moz-transform",
                                 transform: "transform"
                             };
                         n.body.insertBefore(o, null);
                         for (var r in a) o.style[r] !== i && (o.style[r] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(o).getPropertyValue(a[r]));
                         return n.body.removeChild(o), !(e !== i && e.length > 0 && "none" !== e)
                     },
                     ios: function() {
                         var e = navigator.userAgent,
                             t = P.ios.test(e);
                         return t ? (C.verbose("Browser was found to be iOS", e), !0) : !1
                     },
                     mobile: function() {
                         var e = navigator.userAgent,
                             t = P.mobile.test(e);
                         return t ? (C.verbose("Browser was found to be mobile", e), !0) : (C.verbose("Browser is not mobile, using regular transition", e), !1)
                     },
                     hidden: function() {
                         return !C.is.visible()
                     },
                     visible: function() {
                         return D.hasClass(S.visible)
                     },
                     open: function() {
                         return C.is.visible()
                     },
                     closed: function() {
                         return C.is.hidden()
                     },
                     vertical: function() {
                         return D.hasClass(S.top)
                     },
                     animating: function() {
                         return O.hasClass(S.animating)
                     },
                     rtl: function() {
                         return "rtl" == D.css("direction")
                     }
                 },
                 setting: function(t, n) {
                     if (C.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, T, t);
                     else {
                         if (n === i) return T[t];
                         T[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, C, t);
                     else {
                         if (n === i) return C[t];
                         C[t] = n
                     }
                 },
                 debug: function() {
                     T.debug && (T.performance ? C.performance.log(arguments) : (C.debug = Function.prototype.bind.call(console.info, console, T.name + ":"), C.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     T.verbose && T.debug && (T.performance ? C.performance.log(arguments) : (C.verbose = Function.prototype.bind.call(console.info, console, T.name + ":"), C.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     C.error = Function.prototype.bind.call(console.error, console, T.name + ":"), C.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         T.performance && (t = (new Date).getTime(), i = m || t, n = t - i, m = t, f.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: q,
                             "Execution Time": n
                         })), clearTimeout(C.performance.timer), C.performance.timer = setTimeout(C.performance.display, 100)
                     },
                     display: function() {
                         var t = T.name + ":",
                             n = 0;
                         m = !1, clearTimeout(C.performance.timer), e.each(f, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", d && (t += " '" + d + "'"), (console.group !== i || console.table !== i) && f.length > 0 && (console.groupCollapsed(t), console.table ? console.table(f) : e.each(f, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), f = []
                     }
                 },
                 invoke: function(t, n, o) {
                     var r, s, c, l = N;
                     return n = n || h, o = q || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (C.error(E.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, p ? (N === i && C.initialize(), C.invoke(g)) : (N !== i && C.invoke("destroy"), C.initialize())
         }), a !== i ? a : this
     }, e.fn.sidebar.settings = {
         name: "Sidebar",
         namespace: "sidebar",
         debug: !1,
         verbose: !0,
         performance: !0,
         transition: "auto",
         mobileTransition: "auto",
         defaultTransition: {
             computer: {
                 left: "uncover",
                 right: "uncover",
                 top: "overlay",
                 bottom: "overlay"
             },
             mobile: {
                 left: "uncover",
                 right: "uncover",
                 top: "overlay",
                 bottom: "overlay"
             }
         },
         context: "body",
         exclusive: !1,
         closable: !0,
         dimPage: !0,
         scrollLock: !1,
         returnScroll: !1,
         delaySetup: !1,
         useLegacy: "auto",
         duration: 500,
         easing: "easeInOutQuint",
         onChange: function() {},
         onShow: function() {},
         onHide: function() {},
         onHidden: function() {},
         onVisible: function() {},
         className: {
             active: "active",
             animating: "animating",
             dimmed: "dimmed",
             ios: "ios",
             pushable: "pushable",
             pushed: "pushed",
             right: "right",
             top: "top",
             left: "left",
             bottom: "bottom",
             visible: "visible"
         },
         selector: {
             fixed: ".fixed",
             omitted: "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",
             pusher: ".pusher",
             sidebar: ".ui.sidebar"
         },
         regExp: {
             ios: /(iPad|iPhone|iPod)/g,
             mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
         },
         error: {
             method: "The method you called is not defined.",
             pusher: "Had to add pusher element. For optimal performance make sure body content is inside a pusher element",
             movedSidebar: "Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",
             overlay: "The overlay setting is no longer supported, use animation: overlay",
             notFound: "There were no elements that matched the specified selector"
         }
     }, e.extend(e.easing, {
         easeInOutQuint: function(e, t, n, i, o) {
             return (t /= o / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
         }
     })
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.sticky = function(n) {
         var o, a = e(this),
             r = a.selector || "",
             s = (new Date).getTime(),
             c = [],
             l = arguments[0],
             u = "string" == typeof l,
             d = [].slice.call(arguments, 1);
         return a.each(function() {
             var a, m, f, g = e.extend(!0, {}, e.fn.sticky.settings, n),
                 p = g.className,
                 h = g.namespace,
                 v = g.error,
                 b = "." + h,
                 y = "module-" + h,
                 x = e(this),
                 w = e(t),
                 C = x.offsetParent(),
                 T = e(g.scrollContext),
                 k = (x.selector || "", x.data(y)),
                 S = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                     setTimeout(e, 0)
                 },
                 A = this;
             f = {
                 initialize: function() {
                     return a = g.context ? e(g.context) : C, 0 === a.length ? void f.error(v.invalidContext, g.context, x) : (f.verbose("Initializing sticky", g, C), f.save.positions(), f.is.hidden() && f.error(v.visible, x), f.cache.element.height > f.cache.context.height ? (f.reset(), void f.error(v.elementSize, x)) : (w.on("resize" + b, f.event.resize), T.on("scroll" + b, f.event.scroll), f.observeChanges(), void f.instantiate()))
                 },
                 instantiate: function() {
                     f.verbose("Storing instance of module", f), k = f, x.data(y, f)
                 },
                 destroy: function() {
                     f.verbose("Destroying previous module"), f.reset(), m && m.disconnect(), w.off("resize" + b, f.event.resize), T.off("scroll" + b, f.event.scroll), x.removeData(y)
                 },
                 observeChanges: function() {
                     var e = a[0];
                     "MutationObserver" in t && (m = new MutationObserver(function() {
                         clearTimeout(f.timer), f.timer = setTimeout(function() {
                             f.verbose("DOM tree modified, updating sticky menu"), f.refresh()
                         }, 200)
                     }), m.observe(A, {
                         childList: !0,
                         subtree: !0
                     }), m.observe(e, {
                         childList: !0,
                         subtree: !0
                     }), f.debug("Setting up mutation observer", m))
                 },
                 event: {
                     resize: function() {
                         S(function() {
                             f.refresh(), f.stick()
                         })
                     },
                     scroll: function() {
                         S(function() {
                             f.stick(), g.onScroll.call(A)
                         })
                     }
                 },
                 refresh: function(e) {
                     f.reset(), e && (C = x.offsetParent()), f.save.positions(), f.stick(), g.onReposition.call(A)
                 },
                 supports: {
                     sticky: function() {
                         {
                             var t = e("<div/>");
                             t.get()
                         }
                         return t.addClass(p.supported), t.css("position").match("sticky")
                     }
                 },
                 save: {
                     scroll: function(e) {
                         f.lastScroll = e
                     },
                     positions: function() {
                         var e = {
                                 height: w.height()
                             },
                             t = {
                                 margin: {
                                     top: parseInt(x.css("margin-top"), 10),
                                     bottom: parseInt(x.css("margin-bottom"), 10)
                                 },
                                 offset: x.offset(),
                                 width: x.outerWidth(),
                                 height: x.outerHeight()
                             },
                             n = {
                                 offset: a.offset(),
                                 height: a.outerHeight()
                             };
                         f.cache = {
                             fits: t.height < e.height,
                             window: {
                                 height: e.height
                             },
                             element: {
                                 margin: t.margin,
                                 top: t.offset.top - t.margin.top,
                                 left: t.offset.left,
                                 width: t.width,
                                 height: t.height,
                                 bottom: t.offset.top + t.height
                             },
                             context: {
                                 top: n.offset.top,
                                 height: n.height,
                                 bottom: n.offset.top + n.height
                             }
                         }, f.set.containerSize(), f.set.length, f.stick(), f.debug("Caching element positions", f.cache)
                     }
                 },
                 get: {
                     direction: function(e) {
                         var t = "down";
                         return e = e || T.scrollTop(), f.lastScroll !== i && (f.lastScroll < e ? t = "down" : f.lastScroll > e && (t = "up")), t
                     },
                     scrollChange: function(e) {
                         return e = e || T.scrollTop(), f.lastScroll ? e - f.lastScroll : 0
                     },
                     currentElementScroll: function() {
                         return f.is.top() ? Math.abs(parseInt(x.css("top"), 10)) || 0 : Math.abs(parseInt(x.css("bottom"), 10)) || 0
                     },
                     elementScroll: function(e) {
                         e = e || T.scrollTop();
                         var t, n = f.cache.element,
                             i = f.cache.window,
                             o = f.get.scrollChange(e),
                             a = n.height - i.height + g.offset,
                             r = f.get.currentElementScroll(),
                             s = r + o;
                         return t = f.cache.fits || 0 > s ? 0 : s > a ? a : s
                     }
                 },
                 remove: {
                     offset: function() {
                         x.css("margin-top", "")
                     }
                 },
                 set: {
                     offset: function() {
                         f.verbose("Setting offset on element", g.offset), x.css("margin-top", g.offset)
                     },
                     containerSize: function() {
                         var e = C.get(0).tagName;
                         "HTML" === e || "body" == e ? C = x.offsetParent() : (f.debug("Settings container size", f.cache.context.height), C.height(f.cache.context.height))
                     },
                     scroll: function(e) {
                         f.debug("Setting scroll on element", e), f.is.top() && x.css("bottom", "").css("top", -e), f.is.bottom() && x.css("top", "").css("bottom", e)
                     },
                     size: function() {
                         0 !== f.cache.element.height && 0 !== f.cache.element.width && x.css({
                             width: f.cache.element.width,
                             height: f.cache.element.height
                         })
                     }
                 },
                 is: {
                     top: function() {
                         return x.hasClass(p.top)
                     },
                     bottom: function() {
                         return x.hasClass(p.bottom)
                     },
                     initialPosition: function() {
                         return !f.is.fixed() && !f.is.bound()
                     },
                     hidden: function() {
                         return !x.is(":visible")
                     },
                     bound: function() {
                         return x.hasClass(p.bound)
                     },
                     fixed: function() {
                         return x.hasClass(p.fixed)
                     }
                 },
                 stick: function() {
                     var e = f.cache,
                         t = e.fits,
                         n = e.element,
                         i = e.window,
                         o = e.context,
                         a = f.is.bottom() && g.pushing ? g.bottomOffset : g.offset,
                         r = {
                             top: T.scrollTop() + a,
                             bottom: T.scrollTop() + a + i.height
                         },
                         s = (f.get.direction(r.top), f.get.elementScroll(r.top)),
                         c = !t,
                         l = 0 !== n.height;
                     f.save.scroll(r.top), l && (f.is.initialPosition() ? r.top >= n.top && (f.debug("Element passed, fixing element to page"), f.fixTop()) : f.is.fixed() ? f.is.top() ? r.top < n.top ? (f.debug("Fixed element reached top of container"), f.setInitialPosition()) : n.height + r.top - s > o.bottom ? (f.debug("Fixed element reached bottom of container"), f.bindBottom()) : c && f.set.scroll(s) : f.is.bottom() && (r.bottom - n.height < n.top ? (f.debug("Bottom fixed rail has reached top of container"), f.setInitialPosition()) : r.bottom > o.bottom ? (f.debug("Bottom fixed rail has reached bottom of container"), f.bindBottom()) : c && f.set.scroll(s)) : f.is.bottom() && (g.pushing ? f.is.bound() && r.bottom < o.bottom && (f.debug("Fixing bottom attached element to bottom of browser."), f.fixBottom()) : f.is.bound() && r.top < o.bottom - n.height && (f.debug("Fixing bottom attached element to top of browser."), f.fixTop())))
                 },
                 bindTop: function() {
                     f.debug("Binding element to top of parent container"), f.remove.offset(), x.css("left", "").css("top", "").css("bottom", "").removeClass(p.fixed).removeClass(p.bottom).addClass(p.bound).addClass(p.top), g.onTop.call(A), g.onUnstick.call(A)
                 },
                 bindBottom: function() {
                     f.debug("Binding element to bottom of parent container"), f.remove.offset(), x.css("left", "").css("top", "").css("bottom", "").removeClass(p.fixed).removeClass(p.top).addClass(p.bound).addClass(p.bottom), g.onBottom.call(A), g.onUnstick.call(A)
                 },
                 setInitialPosition: function() {
                     f.unfix(), f.unbind()
                 },
                 fixTop: function() {
                     f.debug("Fixing element to top of page"), f.set.offset(), x.css("left", f.cache.element.left).removeClass(p.bound).removeClass(p.bottom).addClass(p.fixed).addClass(p.top), g.onStick.call(A)
                 },
                 fixBottom: function() {
                     f.debug("Sticking element to bottom of page"), f.set.offset(), x.css("left", f.cache.element.left).removeClass(p.bound).removeClass(p.top).addClass(p.fixed).addClass(p.bottom), g.onStick.call(A)
                 },
                 unbind: function() {
                     f.debug("Removing absolute position on element"), f.remove.offset(), x.removeClass(p.bound).removeClass(p.top).removeClass(p.bottom)
                 },
                 unfix: function() {
                     f.debug("Removing fixed position on element"), f.remove.offset(), x.removeClass(p.fixed).removeClass(p.top).removeClass(p.bottom), g.onUnstick.call(A)
                 },
                 reset: function() {
                     f.debug("Reseting elements position"), f.unbind(), f.unfix(), f.resetCSS()
                 },
                 resetCSS: function() {
                     x.css({
                         top: "",
                         bottom: "",
                         width: "",
                         height: ""
                     }), C.css({
                         height: ""
                     })
                 },
                 setting: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 },
                 debug: function() {
                     g.debug && (g.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), f.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     g.verbose && g.debug && (g.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), f.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     f.error = Function.prototype.bind.call(console.error, console, g.name + ":"), f.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         g.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: A,
                             "Execution Time": n
                         })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 0)
                     },
                     display: function() {
                         var t = g.name + ":",
                             n = 0;
                         s = !1, clearTimeout(f.performance.timer), e.each(c, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, n, a) {
                     var r, s, c, l = k;
                     return n = n || d, a = A || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, u ? (k === i && f.initialize(), f.invoke(l)) : (k !== i && f.destroy(), f.initialize())
         }), o !== i ? o : this
     }, e.fn.sticky.settings = {
         name: "Sticky",
         namespace: "sticky",
         debug: !1,
         verbose: !1,
         performance: !1,
         pushing: !1,
         context: !1,
         scrollContext: t,
         offset: 0,
         bottomOffset: 0,
         onReposition: function() {},
         onScroll: function() {},
         onStick: function() {},
         onUnstick: function() {},
         onTop: function() {},
         onBottom: function() {},
         error: {
             container: "Sticky element must be inside a relative container",
             visible: "Element is hidden, you must call refresh after element becomes visible",
             method: "The method you called is not defined.",
             invalidContext: "Context specified does not exist",
             elementSize: "Sticky element is larger than its container, cannot create sticky."
         },
         className: {
             bound: "bound",
             fixed: "fixed",
             supported: "native",
             top: "top",
             bottom: "bottom"
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.tab = function(n) {
         var o, a, r = e(e.isFunction(this) ? t : this),
             s = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.tab.settings, n) : e.extend({}, e.fn.tab.settings),
             c = r.selector || "",
             l = (new Date).getTime(),
             u = [],
             d = arguments[0],
             m = "string" == typeof d,
             f = [].slice.call(arguments, 1);
         return r.each(function() {
             var n, g, p, h, v, b = s.className,
                 y = s.metadata,
                 x = s.selector,
                 w = s.error,
                 C = "." + s.namespace,
                 T = "module-" + s.namespace,
                 k = e(this),
                 S = {},
                 A = !0,
                 P = 0,
                 E = this,
                 F = k.data(T);
             o = {
                 initialize: function() {
                     o.debug("Initializing tab menu item", k), o.determineTabs(), o.debug("Determining tabs", s.context, g), s.auto && (o.verbose("Setting up automatic tab retrieval from server"), s.apiSettings = {
                         url: s.path + "/{$tab}"
                     }), e.isWindow(E) || (o.debug("Attaching tab activation events to element", k), k.on("click" + C, o.event.click)), o.instantiate()
                 },
                 determineTabs: function() {
                     var t;
                     "parent" === s.context ? (k.closest(x.ui).length > 0 ? (t = k.closest(x.ui), o.verbose("Using closest UI element for determining parent", t)) : t = k, n = t.parent(), o.verbose("Determined parent element for creating context", n)) : s.context ? (n = e(s.context), o.verbose("Using selector for tab context", s.context, n)) : n = e("body"), s.childrenOnly ? (g = n.children(x.tabs), o.debug("Searching tab context children for tabs", n, g)) : (g = n.find(x.tabs), o.debug("Searching tab context for tabs", n, g))
                 },
                 initializeHistory: function() {
                     if (s.history) {
                         if (o.debug("Initializing page state"), e.address === i) return o.error(w.state), !1;
                         if ("state" == s.historyType) {
                             if (o.debug("Using HTML5 to manage state"), s.path === !1) return o.error(w.path), !1;
                             e.address.history(!0).state(s.path)
                         }
                         e.address.bind("change", o.event.history.change)
                     }
                 },
                 instantiate: function() {
                     o.verbose("Storing instance of module", o), F = o, k.data(T, o)
                 },
                 destroy: function() {
                     o.debug("Destroying tabs", k), k.removeData(T).off(C)
                 },
                 event: {
                     click: function(t) {
                         var n = e(this).data(y.tab);
                         n !== i ? (s.history ? (o.verbose("Updating page state", t), e.address.value(n)) : (o.verbose("Changing tab", t), o.changeTab(n)), t.preventDefault()) : o.debug("No tab specified")
                     },
                     history: {
                         change: function(t) {
                             var n = t.pathNames.join("/") || o.get.initialPath(),
                                 a = s.templates.determineTitle(n) || !1;
                             o.performance.display(), o.debug("History change event", n, t), v = t, n !== i && o.changeTab(n), a && e.address.title(a)
                         }
                     }
                 },
                 refresh: function() {
                     p && (o.debug("Refreshing tab", p), o.changeTab(p))
                 },
                 cache: {
                     read: function(e) {
                         return e !== i ? S[e] : !1
                     },
                     add: function(e, t) {
                         e = e || p, o.debug("Adding cached content for", e), S[e] = t
                     },
                     remove: function(e) {
                         e = e || p, o.debug("Removing cached content for", e), delete S[e]
                     }
                 },
                 set: {
                     state: function(t) {
                         e.address.value(t)
                     }
                 },
                 changeTab: function(i) {
                     var a = t.history && t.history.pushState,
                         r = a && s.ignoreFirstLoad && A,
                         c = s.auto || e.isPlainObject(s.apiSettings),
                         l = c && !r ? o.utilities.pathToArray(i) : o.get.defaultPathArray(i);
                     i = o.utilities.arrayToPath(l), e.each(l, function(t, a) {
                         var u, d, m, f, g = l.slice(0, t + 1),
                             b = o.utilities.arrayToPath(g),
                             y = o.is.tab(b),
                             x = t + 1 == l.length,
                             C = o.get.tabElement(b);
                         if (o.verbose("Looking for tab", a), y) {
                             if (o.verbose("Tab was found", a), p = b, h = o.utilities.filterArray(l, g), x ? f = !0 : (d = l.slice(0, t + 2), m = o.utilities.arrayToPath(d), f = !o.is.tab(m), f && o.verbose("Tab parameters found", d)), f && c) return r ? (o.debug("Ignoring remote content on first tab load", b), A = !1, o.cache.add(i, C.html()), o.activate.all(b), s.onTabInit.call(C, b, h, v), s.onTabLoad.call(C, b, h, v)) : (o.activate.navigation(b), o.content.fetch(b, i)), !1;
                             o.debug("Opened local tab", b), o.activate.all(b), o.cache.read(b) || (o.cache.add(b, !0), o.debug("First time tab loaded calling tab init"), s.onTabInit.call(C, b, h, v)), s.onTabLoad.call(C, b, h, v)
                         } else {
                             if (-1 != i.search("/") || "" === i) return o.error(w.missingTab, k, n, b), !1;
                             if (u = e("#" + i + ', a[name="' + i + '"]'), b = u.closest("[data-tab]").data("tab"), C = o.get.tabElement(b), u && u.length > 0 && b) return o.debug("No tab found, but deep anchor link present, opening parent tab"), o.activate.all(b), o.cache.read(b) || (o.cache.add(b, !0), o.debug("First time tab loaded calling tab init"), s.onTabInit.call(C, b, h, v)), !1
                         }
                     })
                 },
                 content: {
                     fetch: function(t, n) {
                         var a, r, c = o.get.tabElement(t),
                             l = {
                                 dataType: "html",
                                 stateContext: c,
                                 onSuccess: function(e) {
                                     o.cache.add(n, e), o.content.update(t, e), t == p ? (o.debug("Content loaded", t), o.activate.tab(t)) : o.debug("Content loaded in background", t), s.onTabInit.call(c, t, h, v), s.onTabLoad.call(c, t, h, v)
                                 },
                                 urlData: {
                                     tab: n
                                 }
                             },
                             u = c.data(y.promise) || !1,
                             d = u && "pending" === u.state();
                         n = n || t, r = o.cache.read(n), s.cache && r ? (o.debug("Showing existing content", n), o.content.update(t, r), o.activate.tab(t), s.onTabLoad.call(c, t, h, v)) : d ? (o.debug("Content is already loading", n), c.addClass(b.loading)) : e.api !== i ? (a = e.extend(!0, {
                             headers: {
                                 "X-Remote": !0
                             }
                         }, s.apiSettings, l), o.debug("Retrieving remote content", n, a), e.api(a)) : o.error(w.api)
                     },
                     update: function(e, t) {
                         o.debug("Updating html for", e);
                         var n = o.get.tabElement(e);
                         n.html(t)
                     }
                 },
                 activate: {
                     all: function(e) {
                         o.activate.tab(e), o.activate.navigation(e)
                     },
                     tab: function(e) {
                         var t = o.get.tabElement(e);
                         o.verbose("Showing tab content for", t), t.addClass(b.active).siblings(g).removeClass(b.active + " " + b.loading)
                     },
                     navigation: function(e) {
                         var t = o.get.navElement(e);
                         o.verbose("Activating tab navigation for", t, e), t.addClass(b.active).siblings(r).removeClass(b.active + " " + b.loading)
                     }
                 },
                 deactivate: {
                     all: function() {
                         o.deactivate.navigation(), o.deactivate.tabs()
                     },
                     navigation: function() {
                         r.removeClass(b.active)
                     },
                     tabs: function() {
                         g.removeClass(b.active + " " + b.loading)
                     }
                 },
                 is: {
                     tab: function(e) {
                         return e !== i ? o.get.tabElement(e).length > 0 : !1
                     }
                 },
                 get: {
                     initialPath: function() {
                         return r.eq(0).data(y.tab) || g.eq(0).data(y.tab)
                     },
                     path: function() {
                         return e.address.value()
                     },
                     defaultPathArray: function(e) {
                         return o.utilities.pathToArray(o.get.defaultPath(e))
                     },
                     defaultPath: function(e) {
                         var t = r.filter("[data-" + y.tab + '^="' + e + '/"]').eq(0),
                             n = t.data(y.tab) || !1;
                         if (n) {
                             if (o.debug("Found default tab", n), P < s.maxDepth) return P++, o.get.defaultPath(n);
                             o.error(w.recursion)
                         } else o.debug("No default tabs found for", e, g);
                         return P = 0, e
                     },
                     navElement: function(e) {
                         return e = e || p, r.filter("[data-" + y.tab + '="' + e + '"]')
                     },
                     tabElement: function(e) {
                         var t, n, i, a;
                         return e = e || p, i = o.utilities.pathToArray(e), a = o.utilities.last(i), t = g.filter("[data-" + y.tab + '="' + a + '"]'), n = g.filter("[data-" + y.tab + '="' + e + '"]'), t.length > 0 ? t : n
                     },
                     tab: function() {
                         return p
                     }
                 },
                 utilities: {
                     filterArray: function(t, n) {
                         return e.grep(t, function(t) {
                             return -1 == e.inArray(t, n)
                         })
                     },
                     last: function(t) {
                         return e.isArray(t) ? t[t.length - 1] : !1
                     },
                     pathToArray: function(e) {
                         return e === i && (e = p), "string" == typeof e ? e.split("/") : [e]
                     },
                     arrayToPath: function(t) {
                         return e.isArray(t) ? t.join("/") : !1
                     }
                 },
                 setting: function(t, n) {
                     if (o.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, s, t);
                     else {
                         if (n === i) return s[t];
                         s[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, o, t);
                     else {
                         if (n === i) return o[t];
                         o[t] = n
                     }
                 },
                 debug: function() {
                     s.debug && (s.performance ? o.performance.log(arguments) : (o.debug = Function.prototype.bind.call(console.info, console, s.name + ":"), o.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     s.verbose && s.debug && (s.performance ? o.performance.log(arguments) : (o.verbose = Function.prototype.bind.call(console.info, console, s.name + ":"), o.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     o.error = Function.prototype.bind.call(console.error, console, s.name + ":"), o.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         s.performance && (t = (new Date).getTime(), i = l || t, n = t - i, l = t, u.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: E,
                             "Execution Time": n
                         })), clearTimeout(o.performance.timer), o.performance.timer = setTimeout(o.performance.display, 100)
                     },
                     display: function() {
                         var t = s.name + ":",
                             n = 0;
                         l = !1, clearTimeout(o.performance.timer), e.each(u, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", c && (t += " '" + c + "'"), (console.group !== i || console.table !== i) && u.length > 0 && (console.groupCollapsed(t), console.table ? console.table(u) : e.each(u, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), u = []
                     }
                 },
                 invoke: function(t, n, r) {
                     var s, c, l, u = F;
                     return n = n || f, r = E || r, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function(n, a) {
                         var r = n != s ? a + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(u[r]) && n != s) u = u[r];
                         else {
                             if (u[r] !== i) return c = u[r], !1;
                             if (!e.isPlainObject(u[a]) || n == s) return u[a] !== i ? (c = u[a], !1) : (o.error(w.method, t), !1);
                             u = u[a]
                         }
                     })), e.isFunction(c) ? l = c.apply(r, n) : c !== i && (l = c), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), c
                 }
             }, m ? (F === i && o.initialize(), o.invoke(d)) : (F !== i && o.destroy(), o.initialize())
         }), o && !m && o.initializeHistory(), a !== i ? a : this
     }, e.tab = function() {
         e(t).tab.apply(this, arguments)
     }, e.fn.tab.settings = {
         name: "Tab",
         namespace: "tab",
         debug: !1,
         verbose: !0,
         performance: !0,
         auto: !1,
         history: !1,
         historyType: "hash",
         path: !1,
         context: !1,
         childrenOnly: !1,
         maxDepth: 25,
         alwaysRefresh: !1,
         cache: !0,
         ignoreFirstLoad: !1,
         apiSettings: !1,
         onTabInit: function() {},
         onTabLoad: function() {},
         templates: {
             determineTitle: function() {}
         },
         error: {
             api: "You attempted to load content without API module",
             method: "The method you called is not defined",
             missingTab: "Activated tab cannot be found for this context.",
             noContent: "The tab you specified is missing a content url.",
             path: "History enabled, but no path was specified",
             recursion: "Max recursive depth reached",
             state: "History requires Asual's Address library <https://github.com/asual/jquery-address>"
         },
         metadata: {
             tab: "tab",
             loaded: "loaded",
             promise: "promise"
         },
         className: {
             loading: "loading",
             active: "active"
         },
         selector: {
             tabs: ".ui.tab",
             ui: ".ui"
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.transition = function() {
         {
             var o, a = e(this),
                 r = a.selector || "",
                 s = (new Date).getTime(),
                 c = [],
                 l = arguments,
                 u = l[0],
                 d = [].slice.call(arguments, 1),
                 m = "string" == typeof u;
             t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                 setTimeout(e, 0)
             }
         }
         return a.each(function() {
             var t, f, g, p, h, v, b, y, x, w, C, T, k = e(this),
                 S = this;
             T = {
                 initialize: function() {
                     w = "module-" + x, t = T.get.settings.apply(S, l), p = t.className, h = t.metadata, v = T.get.animationStartEvent(), b = T.get.animationEndEvent(), y = T.get.animationName(), g = t.error, x = t.namespace, C = "." + t.namespace, f = k.data(w) || T, m && (m = T.invoke(u)), m === !1 && (T.verbose("Converted arguments into settings object", t), T.animate(), T.instantiate())
                 },
                 instantiate: function() {
                     T.verbose("Storing instance of module", T), k.data(w, f)
                 },
                 destroy: function() {
                     T.verbose("Destroying previous module for", S), k.removeData(w)
                 },
                 refresh: function() {
                     T.verbose("Refreshing display type on next animation"), delete T.displayType
                 },
                 forceRepaint: function() {
                     T.verbose("Forcing element repaint");
                     var e = k.parent(),
                         t = k.next();
                     0 === t.length ? k.detach().appendTo(e) : k.detach().insertBefore(t)
                 },
                 repaint: function() {
                     T.verbose("Repainting element");
                     S.offsetWidth
                 },
                 animate: function(e) {
                     return t = e || t, T.is.supported() ? (T.debug("Preparing animation", t.animation), T.is.animating() && t.queue ? (!t.allowRepeats && T.has.direction() && T.is.occuring() && T.queuing !== !0 ? T.error(g.repeated, t.animation, k) : T.queue(t.animation), !1) : void(T.can.animate() ? T.set.animating(t.animation) : T.error(g.noAnimation, t.animation, S))) : (T.error(g.support), !1)
                 },
                 reset: function() {
                     T.debug("Resetting animation to beginning conditions"), T.remove.animationEndCallback(), T.restore.conditions(), T.remove.animating()
                 },
                 queue: function(e) {
                     T.debug("Queueing animation of", e), T.queuing = !0, k.one(b + C, function() {
                         T.queuing = !1, T.repaint(), T.animate.apply(this, t)
                     })
                 },
                 complete: function() {
                     T.verbose("CSS animation complete", t.animation), T.remove.animationEndCallback(), T.remove.failSafe(), T.is.looping() || (T.is.outward() ? (T.verbose("Animation is outward, hiding element"), T.restore.conditions(), T.hide(), t.onHide.call(this)) : T.is.inward() ? (T.verbose("Animation is outward, showing element"), T.restore.conditions(), T.show(), T.set.display(), t.onShow.call(this)) : T.restore.conditions(), T.remove.animation(), T.remove.animating()), t.onComplete.call(this)
                 },
                 has: {
                     direction: function(e) {
                         return e = e || t.animation, -1 !== e.search(p.inward) || -1 !== e.search(p.outward) ? (T.debug("Direction already set in animation"), !0) : !1
                     },
                     inlineDisplay: function() {
                         var t = k.attr("style") || "";
                         return e.isArray(t.match(/display.*?;/, ""))
                     }
                 },
                 set: {
                     animating: function(e) {
                         e = e || t.animation, T.is.animating() || T.save.conditions(), T.remove.direction(), T.remove.animationEndCallback(), T.can.transition() && !T.has.direction() && T.set.direction(), T.remove.hidden(), T.set.display(), k.addClass(p.animating).addClass(p.transition).addClass(e).one(b + ".complete" + C, T.complete), t.useFailSafe && T.add.failSafe(), T.set.duration(t.duration), t.onStart.call(this), T.debug("Starting tween", e, k.attr("class"))
                     },
                     duration: function(e, n) {
                         n = n || t.duration, n = "number" == typeof n ? n + "ms" : n, T.verbose("Setting animation duration", n), k.css({
                             "-webkit-animation-duration": n,
                             "-moz-animation-duration": n,
                             "-ms-animation-duration": n,
                             "-o-animation-duration": n,
                             "animation-duration": n
                         })
                     },
                     display: function() {
                         var e = T.get.style(),
                             t = T.get.displayType(),
                             n = e + "display: " + t + " !important;";
                         k.css("display", ""), T.refresh(), k.css("display") !== t && (T.verbose("Setting inline visibility to", t), k.attr("style", n))
                     },
                     direction: function() {
                         k.is(":visible") && !T.is.hidden() ? (T.debug("Automatically determining the direction of animation", "Outward"), k.removeClass(p.inward).addClass(p.outward)) : (T.debug("Automatically determining the direction of animation", "Inward"), k.removeClass(p.outward).addClass(p.inward))
                     },
                     looping: function() {
                         T.debug("Transition set to loop"), k.addClass(p.looping)
                     },
                     hidden: function() {
                         T.is.hidden() || (k.addClass(p.transition).addClass(p.hidden), "none" !== k.css("display") && (T.verbose("Overriding default display to hide element"), k.css("display", "none")))
                     },
                     visible: function() {
                         k.addClass(p.transition).addClass(p.visible)
                     }
                 },
                 save: {
                     displayType: function(e) {
                         k.data(h.displayType, e)
                     },
                     transitionExists: function(t, n) {
                         e.fn.transition.exists[t] = n, T.verbose("Saving existence of transition", t, n)
                     },
                     conditions: function() {
                         k.attr("class") || !1, k.attr("style") || "";
                         k.removeClass(t.animation), T.remove.direction(), T.cache = {
                             className: k.attr("class"),
                             style: T.get.style()
                         }, T.verbose("Saving original attributes", T.cache)
                     }
                 },
                 restore: {
                     conditions: function() {
                         return T.cache === i ? !1 : (T.cache.className ? k.attr("class", T.cache.className) : k.removeAttr("class"), T.cache.style && (T.verbose("Restoring original style attribute", T.cache.style), k.attr("style", T.cache.style)), T.is.looping() && T.remove.looping(), void T.verbose("Restoring original attributes", T.cache))
                     }
                 },
                 add: {
                     failSafe: function() {
                         var e = T.get.duration();
                         T.timer = setTimeout(T.complete, e + 100), T.verbose("Adding fail safe timer", T.timer)
                     }
                 },
                 remove: {
                     animating: function() {
                         k.removeClass(p.animating)
                     },
                     animation: function() {
                         k.css({
                             "-webkit-animation": "",
                             "-moz-animation": "",
                             "-ms-animation": "",
                             "-o-animation": "",
                             animation: ""
                         })
                     },
                     animationEndCallback: function() {
                         k.off(".complete")
                     },
                     display: function() {
                         k.css("display", "")
                     },
                     direction: function() {
                         k.removeClass(p.inward).removeClass(p.outward)
                     },
                     failSafe: function() {
                         T.verbose("Removing fail safe timer", T.timer), T.timer && clearTimeout(T.timer)
                     },
                     hidden: function() {
                         k.removeClass(p.hidden)
                     },
                     visible: function() {
                         k.removeClass(p.visible)
                     },
                     looping: function() {
                         T.debug("Transitions are no longer looping"), k.removeClass(p.looping), T.forceRepaint()
                     },
                     transition: function() {
                         k.removeClass(p.visible).removeClass(p.hidden)
                     }
                 },
                 get: {
                     settings: function(t, n, i) {
                         return "object" == typeof t ? e.extend(!0, {}, e.fn.transition.settings, t) : "function" == typeof i ? e.extend({}, e.fn.transition.settings, {
                             animation: t,
                             onComplete: i,
                             duration: n
                         }) : "string" == typeof n || "number" == typeof n ? e.extend({}, e.fn.transition.settings, {
                             animation: t,
                             duration: n
                         }) : "object" == typeof n ? e.extend({}, e.fn.transition.settings, n, {
                             animation: t
                         }) : "function" == typeof n ? e.extend({}, e.fn.transition.settings, {
                             animation: t,
                             onComplete: n
                         }) : e.extend({}, e.fn.transition.settings, {
                             animation: t
                         })
                     },
                     duration: function(e) {
                         return e = e || t.duration, "string" == typeof t.duration ? e.indexOf("ms") > -1 ? parseFloat(e) : 1e3 * parseFloat(e) : e
                     },
                     displayType: function() {
                         return t.displayType ? t.displayType : (k.data(h.displayType) === i && T.can.transition(!0), k.data(h.displayType))
                     },
                     style: function() {
                         var e = k.attr("style") || "";
                         return e.replace(/display.*?;/, "")
                     },
                     transitionExists: function(t) {
                         return e.fn.transition.exists[t]
                     },
                     animationName: function() {
                         var e, t = n.createElement("div"),
                             o = {
                                 animation: "animationName",
                                 OAnimation: "oAnimationName",
                                 MozAnimation: "mozAnimationName",
                                 WebkitAnimation: "webkitAnimationName"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e];
                         return !1
                     },
                     animationStartEvent: function() {
                         var e, t = n.createElement("div"),
                             o = {
                                 animation: "animationstart",
                                 OAnimation: "oAnimationStart",
                                 MozAnimation: "mozAnimationStart",
                                 WebkitAnimation: "webkitAnimationStart"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e];
                         return !1
                     },
                     animationEndEvent: function() {
                         var e, t = n.createElement("div"),
                             o = {
                                 animation: "animationend",
                                 OAnimation: "oAnimationEnd",
                                 MozAnimation: "mozAnimationEnd",
                                 WebkitAnimation: "webkitAnimationEnd"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e];
                         return !1
                     }
                 },
                 can: {
                     transition: function(n) {
                         var o, a, r, s, c, l = k.attr("class"),
                             u = k.prop("tagName"),
                             d = t.animation,
                             m = T.get.transitionExists(d);
                         if (m === i || n) {
                             if (T.verbose("Determining whether animation exists"), o = e("<" + u + " />").addClass(l).insertAfter(k), a = o.addClass(d).removeClass(p.inward).removeClass(p.outward).addClass(p.animating).addClass(p.transition).css(y), r = o.addClass(p.inward).css(y), c = o.attr("class", l).removeAttr("style").removeClass(p.hidden).removeClass(p.visible).show().css("display"), T.verbose("Determining final display state", c), o.remove(), a != r) T.debug("Direction exists for animation", d), s = !0;
                             else {
                                 if ("none" == a || !a) return void T.debug("No animation defined in css", d);
                                 T.debug("Static animation found", d, c), s = !1
                             }
                             T.save.displayType(c), T.save.transitionExists(d, s)
                         }
                         return m !== i ? m : s
                     },
                     animate: function() {
                         return T.can.transition() !== i
                     }
                 },
                 is: {
                     animating: function() {
                         return k.hasClass(p.animating)
                     },
                     inward: function() {
                         return k.hasClass(p.inward)
                     },
                     outward: function() {
                         return k.hasClass(p.outward)
                     },
                     looping: function() {
                         return k.hasClass(p.looping)
                     },
                     occuring: function(e) {
                         return e = e || t.animation, e = e.replace(" ", "."), k.filter(e).length > 0
                     },
                     visible: function() {
                         return k.is(":visible")
                     },
                     hidden: function() {
                         return "hidden" === k.css("visibility")
                     },
                     supported: function() {
                         return y !== !1 && b !== !1
                     }
                 },
                 hide: function() {
                     T.verbose("Hiding element"), T.is.animating() && T.reset(), T.remove.display(), T.remove.visible(), T.set.hidden(), T.repaint()
                 },
                 show: function(e) {
                     T.verbose("Showing element", e), T.remove.hidden(), T.set.visible(), T.repaint()
                 },
                 start: function() {
                     T.verbose("Starting animation"), k.removeClass(p.disabled)
                 },
                 stop: function() {
                     T.debug("Stopping animation"), k.addClass(p.disabled)
                 },
                 toggle: function() {
                     T.debug("Toggling play status"), k.toggleClass(p.disabled)
                 },
                 setting: function(n, o) {
                     if (T.debug("Changing setting", n, o), e.isPlainObject(n)) e.extend(!0, t, n);
                     else {
                         if (o === i) return t[n];
                         t[n] = o
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, T, t);
                     else {
                         if (n === i) return T[t];
                         T[t] = n
                     }
                 },
                 debug: function() {
                     t.debug && (t.performance ? T.performance.log(arguments) : (T.debug = Function.prototype.bind.call(console.info, console, t.name + ":"), T.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     t.verbose && t.debug && (t.performance ? T.performance.log(arguments) : (T.verbose = Function.prototype.bind.call(console.info, console, t.name + ":"), T.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     T.error = Function.prototype.bind.call(console.error, console, t.name + ":"), T.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var n, i, o;
                         t.performance && (n = (new Date).getTime(), o = s || n, i = n - o, s = n, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: S,
                             "Execution Time": i
                         })), clearTimeout(T.performance.timer), T.performance.timer = setTimeout(T.performance.display, 600)
                     },
                     display: function() {
                         var n = t.name + ":",
                             o = 0;
                         s = !1, clearTimeout(T.performance.timer), e.each(c, function(e, t) {
                             o += t["Execution Time"]
                         }), n += " " + o + "ms", r && (n += " '" + r + "'"), a.length > 1 && (n += " (" + a.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(n), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, n, a) {
                     var r, s, c, l = f;
                     return n = n || d, a = S || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s !== i ? s : !1
                 }
             }, T.initialize()
         }), o !== i ? o : this
     }, e.fn.transition.exists = {}, e.fn.transition.settings = {
         name: "Transition",
         debug: !1,
         verbose: !0,
         performance: !0,
         namespace: "transition",
         onStart: function() {},
         onComplete: function() {},
         onShow: function() {},
         onHide: function() {},
         useFailSafe: !0,
         allowRepeats: !1,
         displayType: !1,
         animation: "fade",
         duration: "500ms",
         queue: !0,
         metadata: {
             displayType: "display"
         },
         className: {
             animating: "animating",
             disabled: "disabled",
             hidden: "hidden",
             inward: "in",
             loading: "loading",
             looping: "looping",
             outward: "out",
             transition: "transition",
             visible: "visible"
         },
         error: {
             noAnimation: "There is no css animation matching the one you specified.",
             repeated: "That animation is already occurring, cancelling repeated animation",
             method: "The method you called is not defined",
             support: "This browser does not support CSS animations"
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     "use strict";
     e.fn.video = function(n) {
         {
             var o, a = e(this),
                 r = a.selector || "",
                 s = (new Date).getTime(),
                 c = [],
                 l = arguments[0],
                 u = "string" == typeof l,
                 d = [].slice.call(arguments, 1);
             t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                 setTimeout(e, 0)
             }
         }
         return a.each(function() {
             var m, f = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.video.settings, n) : e.extend({}, e.fn.video.settings),
                 g = f.selector,
                 p = f.className,
                 h = f.error,
                 v = f.metadata,
                 b = f.namespace,
                 y = f.templates,
                 x = "." + b,
                 w = "module-" + b,
                 C = (e(t), e(this)),
                 T = C.find(g.placeholder),
                 k = C.find(g.playButton),
                 S = C.find(g.embed),
                 A = this,
                 P = C.data(w);
             m = {
                 initialize: function() {
                     m.debug("Initializing video"), m.create(), T.on("click" + x, m.play), k.on("click" + x, m.play), m.instantiate()
                 },
                 instantiate: function() {
                     m.verbose("Storing instance of module", m), P = m, C.data(w, m)
                 },
                 create: function() {
                     var e = C.data(v.image),
                         t = y.video(e);
                     C.html(t), m.refresh(), e || m.play(), m.debug("Creating html for video element", t)
                 },
                 destroy: function() {
                     m.verbose("Destroying previous instance of video"), m.reset(), C.removeData(w).off(x), T.off(x), k.off(x)
                 },
                 refresh: function() {
                     m.verbose("Refreshing selector cache"), T = C.find(g.placeholder), k = C.find(g.playButton), S = C.find(g.embed)
                 },
                 change: function(e, t, n) {
                     m.debug("Changing video to ", e, t, n), C.data(v.source, e).data(v.id, t).data(v.url, n), f.onChange()
                 },
                 reset: function() {
                     m.debug("Clearing video embed and showing placeholder"), C.removeClass(p.active), S.html(" "), T.show(), f.onReset()
                 },
                 play: function() {
                     m.debug("Playing video");
                     var e = C.data(v.source) || !1,
                         t = C.data(v.url) || !1,
                         n = C.data(v.id) || !1;
                     S.html(m.generate.html(e, n, t)), C.addClass(p.active), f.onPlay()
                 },
                 get: {
                     source: function(e) {
                         return "string" != typeof e ? !1 : -1 !== e.search("youtube.com") ? "youtube" : -1 !== e.search("vimeo.com") ? "vimeo" : !1
                     },
                     id: function(e) {
                         return e.match(f.regExp.youtube) ? e.match(f.regExp.youtube)[1] : e.match(f.regExp.vimeo) ? e.match(f.regExp.vimeo)[2] : !1
                     }
                 },
                 generate: {
                     html: function(e, t, n) {
                         m.debug("Generating embed html");
                         var i;
                         return e = e || f.source, t = t || f.id, e && t || n ? (e && t || (e = m.get.source(n), t = m.get.id(n)), "vimeo" == e ? i = '<iframe src="//player.vimeo.com/video/' + t + "?=" + m.generate.url(e) + '" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>' : "youtube" == e && (i = '<iframe src="//www.youtube.com/embed/' + t + "?=" + m.generate.url(e) + '" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')) : m.error(h.noVideo), i
                     },
                     url: function(e) {
                         var t = f.api ? 1 : 0,
                             n = "auto" === f.autoplay ? C.data("image") !== i : f.autoplay,
                             o = f.hd ? 1 : 0,
                             a = f.showUI ? 1 : 0,
                             r = f.showUI ? 0 : 1,
                             s = "";
                         return "vimeo" == e && (s = "api=" + t + "&amp;title=" + a + "&amp;byline=" + a + "&amp;portrait=" + a + "&amp;autoplay=" + n, f.color && (s += "&amp;color=" + f.color)), "ustream" == e ? (s = "autoplay=" + n, f.color && (s += "&amp;color=" + f.color)) : "youtube" == e && (s = "enablejsapi=" + t + "&amp;autoplay=" + n + "&amp;autohide=" + r + "&amp;hq=" + o + "&amp;modestbranding=1", f.color && (s += "&amp;color=" + f.color)), s
                     }
                 },
                 setting: function(t, n) {
                     if (m.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 },
                 debug: function() {
                     f.debug && (f.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), m.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     f.verbose && f.debug && (f.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), m.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     m.error = Function.prototype.bind.call(console.error, console, f.name + ":"), m.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         f.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: A,
                             "Execution Time": n
                         })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 100)
                     },
                     display: function() {
                         var t = f.name + ":",
                             n = 0;
                         s = !1, clearTimeout(m.performance.timer), e.each(c, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, n, a) {
                     var r, s, c, l = P;
                     return n = n || d, a = A || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (m.error(h.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, u ? (P === i && m.initialize(), m.invoke(l)) : (P !== i && m.destroy(), m.initialize())
         }), o !== i ? o : this
     }, e.fn.video.settings = {
         name: "Video",
         namespace: "video",
         debug: !1,
         verbose: !0,
         performance: !0,
         metadata: {
             id: "id",
             image: "image",
             source: "source",
             url: "url"
         },
         source: !1,
         url: !1,
         id: !1,
         aspectRatio: 16 / 9,
         onPlay: function() {},
         onReset: function() {},
         onChange: function() {},
         onPause: function() {},
         onStop: function() {},
         width: "auto",
         height: "auto",
         autoplay: "auto",
         color: "#442359",
         hd: !0,
         showUI: !1,
         api: !0,
         regExp: {
             youtube: /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
             vimeo: /http:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/
         },
         error: {
             noVideo: "No video specified",
             method: "The method you called is not defined"
         },
         className: {
             active: "active"
         },
         selector: {
             embed: ".embed",
             placeholder: ".placeholder",
             playButton: ".play"
         }
     }, e.fn.video.settings.templates = {
         video: function(e) {
             var t = "";
             return e && (t += '<i class="video play icon"></i><img class="placeholder" src="' + e + '">'), t += '<div class="embed"></div>'
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     e.api = e.fn.api = function(n) {
         var o, a = e(e.isFunction(this) ? t : this),
             r = a.selector || "",
             s = (new Date).getTime(),
             c = [],
             l = arguments[0],
             u = "string" == typeof l,
             d = [].slice.call(arguments, 1);
         return a.each(function() {
             var t, a, m, f, g, p = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.api.settings, n) : e.extend({}, e.fn.api.settings),
                 h = p.namespace,
                 v = (p.metadata, p.selector),
                 b = p.error,
                 y = p.className,
                 x = "." + h,
                 w = "module-" + h,
                 C = e(this),
                 T = C.closest(v.form),
                 k = p.stateContext ? e(p.stateContext) : C,
                 S = this,
                 A = k.get(),
                 P = C.data(w);
             g = {
                 initialize: function() {
                     var e = g.get.event();
                     u || (e ? (g.debug("Attaching API events to element", e), C.on(e + x, g.event.trigger)) : g.query()), g.instantiate()
                 },
                 instantiate: function() {
                     g.verbose("Storing instance of module", g), P = g, C.data(w, P)
                 },
                 destroy: function() {
                     g.verbose("Destroying previous module for", S), C.removeData(w).off(x)
                 },
                 query: function() {
                     if (g.is.disabled()) return void g.debug("Element is disabled API request aborted");
                     if (g.is.loading() && 0 === p.throttle) return void g.debug("Cancelling request, previous request is still pending");
                     if (p.defaultData && e.extend(!0, p.urlData, g.get.defaultData()), (p.serializeForm !== !1 || k.is("form")) && ("json" == p.serializeForm ? e.extend(!0, p.data, g.get.formData()) : p.data = g.get.formData()), a = g.get.settings(), a === !1) return void g.error(b.beforeSend);
                     if (p.url ? (g.debug("Using specified url", m), m = g.add.urlData(p.url)) : (m = g.add.urlData(g.get.templateURL()), g.debug("Added URL Data to url", m)), !m) {
                         if (!C.is("form")) return void g.error(b.missingURL, p.action);
                         g.debug("No url or action specified, defaulting to form action"), m = C.attr("action")
                     }
                     g.set.loading(), t = e.extend(!0, {}, p, {
                         type: p.method || p.type,
                         data: f,
                         url: p.base + m,
                         beforeSend: p.beforeXHR,
                         success: function() {},
                         failure: function() {},
                         complete: function() {}
                     }), g.verbose("Creating AJAX request with settings", t), g.is.loading() ? g.timer = setTimeout(function() {
                         g.request = g.create.request(), g.xhr = g.create.xhr()
                     }, p.throttle) : (g.request = g.create.request(), g.xhr = g.create.xhr())
                 },
                 is: {
                     disabled: function() {
                         return C.filter(p.filter).length > 0
                     },
                     loading: function() {
                         return g.request && "pending" == g.request.state()
                     }
                 },
                 was: {
                     succesful: function() {
                         return g.request && "resolved" == g.request.state()
                     },
                     failure: function() {
                         return g.request && "rejected" == g.request.state()
                     },
                     complete: function() {
                         return g.request && ("resolved" == g.request.state() || "rejected" == g.request.state())
                     }
                 },
                 add: {
                     urlData: function(t, n) {
                         var o, a;
                         return t && (o = t.match(p.regExp.required), a = t.match(p.regExp.optional), n = n || p.urlData, o && (g.debug("Looking for required URL variables", o), e.each(o, function(o, a) {
                             var r = -1 !== a.indexOf("$") ? a.substr(2, a.length - 3) : a.substr(1, a.length - 2),
                                 s = e.isPlainObject(n) && n[r] !== i ? n[r] : C.data(r) !== i ? C.data(r) : k.data(r) !== i ? k.data(r) : n[r];
                             return s === i ? (g.error(b.requiredParameter, r, t), t = !1, !1) : (g.verbose("Found required variable", r, s), void(t = t.replace(a, s)))
                         })), a && (g.debug("Looking for optional URL variables", o), e.each(a, function(o, a) {
                             var r = -1 !== a.indexOf("$") ? a.substr(3, a.length - 4) : a.substr(2, a.length - 3),
                                 s = e.isPlainObject(n) && n[r] !== i ? n[r] : C.data(r) !== i ? C.data(r) : k.data(r) !== i ? k.data(r) : n[r];
                             s !== i ? (g.verbose("Optional variable Found", r, s), t = t.replace(a, s)) : (g.verbose("Optional variable not found", r), t = -1 !== t.indexOf("/" + a) ? t.replace("/" + a, "") : t.replace(a, ""))
                         }))), t
                     }
                 },
                 event: {
                     trigger: function(e) {
                         g.query(), ("submit" == e.type || "click" == e.type) && e.preventDefault()
                     },
                     xhr: {
                         always: function() {},
                         done: function(e) {
                             var t = this,
                                 n = (new Date).getTime() - s,
                                 i = p.loadingDuration - n;
                             i = i > 0 ? i : 0, setTimeout(function() {
                                 g.request.resolveWith(t, [e])
                             }, i)
                         },
                         fail: function(e, t, n) {
                             var i = this,
                                 o = (new Date).getTime() - s,
                                 a = p.loadingDuration - o;
                             a = a > 0 ? a : 0, setTimeout(function() {
                                 "abort" !== t ? g.request.rejectWith(i, [e, t, n]) : g.reset()
                             }, a)
                         }
                     },
                     request: {
                         complete: function(e) {
                             g.remove.loading(), p.onComplete.call(A, e, C)
                         },
                         done: function(t) {
                             g.debug("API Response Received", t), "json" == p.dataType && e.isFunction(p.successTest) ? (g.debug("Checking JSON returned success", p.successTest, t), p.successTest(t) ? p.onSuccess.call(A, t, C) : (g.debug("JSON test specified by user and response failed", t), p.onFailure.call(A, t, C))) : p.onSuccess.call(A, t, C)
                         },
                         error: function(t, n, o) {
                             var a, r = p.error[n] !== i ? p.error[n] : o;
                             if (t !== i)
                                 if (t.readyState !== i && 4 == t.readyState) {
                                     if (200 != t.status && o !== i && "" !== o) g.error(b.statusMessage + o);
                                     else if ("error" == n && "json" == p.dataType) try {
                                         a = e.parseJSON(t.responseText), a && a.error !== i && (r = a.error)
                                     } catch (s) {
                                         g.error(b.JSONParse)
                                     }
                                     g.remove.loading(), g.set.error(), p.errorDuration && setTimeout(g.remove.error, p.errorDuration), g.debug("API Request error:", r), p.onError.call(A, r, C)
                                 } else p.onAbort.call(A, r, C), g.debug("Request Aborted (Most likely caused by page change or CORS Policy)", n, o)
                         }
                     }
                 },
                 create: {
                     request: function() {
                         return e.Deferred().always(g.event.request.complete).done(g.event.request.done).fail(g.event.request.error)
                     },
                     xhr: function() {
                         e.ajax(t).always(g.event.xhr.always).done(g.event.xhr.done).fail(g.event.xhr.fail)
                     }
                 },
                 set: {
                     error: function() {
                         g.verbose("Adding error state to element", k), k.addClass(y.error)
                     },
                     loading: function() {
                         g.verbose("Adding loading state to element", k), k.addClass(y.loading)
                     }
                 },
                 remove: {
                     error: function() {
                         g.verbose("Removing error state from element", k), k.removeClass(y.error)
                     },
                     loading: function() {
                         g.verbose("Removing loading state from element", k), k.removeClass(y.loading)
                     }
                 },
                 get: {
                     request: function() {
                         return g.request || !1
                     },
                     xhr: function() {
                         return g.xhr || !1
                     },
                     settings: function() {
                         var e;
                         return e = p.beforeSend.call(C, p), e && (e.success !== i && (g.debug("Legacy success callback detected", e), g.error(b.legacyParameters, e.success), e.onSuccess = e.success), e.failure !== i && (g.debug("Legacy failure callback detected", e), g.error(b.legacyParameters, e.failure), e.onFailure = e.failure), e.complete !== i && (g.debug("Legacy complete callback detected", e), g.error(b.legacyParameters, e.complete), e.onComplete = e.complete)), e === i && g.error(b.noReturnedValue), e !== i ? e : p
                     },
                     defaultData: function() {
                         var t = {};
                         return e.isWindow(S) || (C.is("input") ? t.value = C.val() : C.is("form") || (t.text = C.text())), t
                     },
                     event: function() {
                         return e.isWindow(S) || "now" == p.on ? (g.debug("API called without element, no events attached"), !1) : "auto" == p.on ? C.is("input") ? S.oninput !== i ? "input" : S.onpropertychange !== i ? "propertychange" : "keyup" : C.is("form") ? "submit" : "click" : p.on
                     },
                     formData: function() {
                         var t;
                         return e(this).serializeObject() !== i ? t = T.serializeObject() : (g.error(b.missingSerialize), t = T.serialize()), g.debug("Retrieved form data", t), t
                     },
                     templateURL: function(e) {
                         var t;
                         return e = e || C.data(p.metadata.action) || p.action || !1, e && (g.debug("Looking up url for action", e, p.api), p.api[e] !== i ? (t = p.api[e], g.debug("Found template url", t)) : g.error(b.missingAction, p.action, p.api)), t
                     }
                 },
                 reset: function() {
                     g.remove.error(), g.remove.loading()
                 },
                 setting: function(t, n) {
                     if (g.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, p, t);
                     else {
                         if (n === i) return p[t];
                         p[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 },
                 debug: function() {
                     p.debug && (p.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), g.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     p.verbose && p.debug && (p.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), g.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     g.error = Function.prototype.bind.call(console.error, console, p.name + ":"), g.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         p.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             "Execution Time": n
                         })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 100)
                     },
                     display: function() {
                         var t = p.name + ":",
                             n = 0;
                         s = !1, clearTimeout(g.performance.timer), e.each(c, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, n, a) {
                     var r, s, c, l = P;
                     return n = n || d, a = S || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (g.error(b.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, u ? (P === i && g.initialize(), g.invoke(l)) : (P !== i && g.destroy(), g.initialize())
         }), o !== i ? o : this
     }, e.api.settings = {
         name: "API",
         namespace: "api",
         debug: !0,
         verbose: !0,
         performance: !0,
         on: "auto",
         filter: ".disabled",
         stateContext: !1,
         loadingDuration: 0,
         errorDuration: 2e3,
         action: !1,
         url: !1,
         base: "",
         urlData: {},
         defaultData: !0,
         serializeForm: !1,
         throttle: 0,
         method: "get",
         data: {},
         dataType: "json",
         beforeSend: function(e) {
             return e
         },
         beforeXHR: function() {},
         onSuccess: function() {},
         onComplete: function() {},
         onFailure: function() {},
         onError: function() {},
         onAbort: function() {},
         successTest: !1,
         error: {
             beforeSend: "The before send function has aborted the request",
             error: "There was an error with your request",
             exitConditions: "API Request Aborted. Exit conditions met",
             JSONParse: "JSON could not be parsed during error handling",
             legacyParameters: "You are using legacy API success callback names",
             method: "The method you called is not defined",
             missingAction: "API action used but no url was defined",
             missingSerialize: "Required dependency jquery-serialize-object missing, using basic serialize",
             missingURL: "No URL specified for api event",
             noReturnedValue: "The beforeSend callback must return a settings object, beforeSend ignored.",
             parseError: "There was an error parsing your request",
             requiredParameter: "Missing a required URL parameter: ",
             statusMessage: "Server gave an error: ",
             timeout: "Your request timed out"
         },
         regExp: {
             required: /\{\$*[A-z0-9]+\}/g,
             optional: /\{\/\$*[A-z0-9]+\}/g
         },
         className: {
             loading: "loading",
             error: "error"
         },
         selector: {
             form: "form"
         },
         metadata: {
             action: "action",
             request: "request",
             xhr: "xhr"
         }
     }, e.api.settings.api = {}
 }(jQuery, window, document),
 function(e, t, n, i) {
     e.fn.form = function(t, o) {
         var a, r = e(this),
             s = e.extend(!0, {}, e.fn.form.settings, o),
             c = e.extend({}, e.fn.form.settings.defaults, t),
             l = s.namespace,
             u = s.metadata,
             d = s.selector,
             m = s.className,
             f = (s.error, "." + l),
             g = "module-" + l,
             p = r.selector || "",
             h = (new Date).getTime(),
             v = [],
             b = arguments[0],
             y = "string" == typeof b,
             x = [].slice.call(arguments, 1);
         return r.each(function() {
             var t, o = e(this),
                 l = e(this).find(d.field),
                 w = e(this).find(d.group),
                 C = e(this).find(d.message),
                 T = (e(this).find(d.prompt), e(this).find(d.submit)),
                 k = [],
                 S = this,
                 A = o.data(g);
             t = {
                 initialize: function() {
                     t.verbose("Initializing form validation", o, c, s), t.bindEvents(), t.instantiate()
                 },
                 instantiate: function() {
                     t.verbose("Storing instance of module", t), A = t, o.data(g, t)
                 },
                 destroy: function() {
                     t.verbose("Destroying previous module", A), t.removeEvents(), o.removeData(g)
                 },
                 refresh: function() {
                     t.verbose("Refreshing selector cache"), l = o.find(d.field)
                 },
                 submit: function() {
                     t.verbose("Submitting form", o), o.submit()
                 },
                 attachEvents: function(n, i) {
                     i = i || "submit", e(n).on("click", function(e) {
                         t[i](), e.preventDefault()
                     })
                 },
                 bindEvents: function() {
                     s.keyboardShortcuts && l.on("keydown" + f, t.event.field.keydown), o.on("submit" + f, t.validate.form), l.on("blur" + f, t.event.field.blur), t.attachEvents(T, "submit"), l.each(function() {
                         var n = e(this).prop("type"),
                             i = t.get.changeEvent(n);
                         e(this).on(i + f, t.event.field.change)
                     })
                 },
                 removeEvents: function() {
                     o.off(f), l.off(f), T.off(f), l.off(f)
                 },
                 event: {
                     field: {
                         keydown: function(n) {
                             var i = e(this),
                                 o = n.which,
                                 a = {
                                     enter: 13,
                                     escape: 27
                                 };
                             o == a.escape && (t.verbose("Escape key pressed blurring field"), i.blur()), !n.ctrlKey && o == a.enter && i.is(d.input) && i.not(d.checkbox).length > 0 && (t.debug("Enter key pressed, submitting form"), T.addClass(m.down), i.one("keyup" + f, t.event.field.keyup))
                         },
                         keyup: function() {
                             t.verbose("Doing keyboard shortcut form submit"), T.removeClass(m.down), t.submit()
                         },
                         blur: function() {
                             var n = e(this),
                                 i = n.closest(w);
                             i.hasClass(m.error) ? (t.debug("Revalidating field", n, t.get.validation(n)), t.validate.field(t.get.validation(n))) : ("blur" == s.on || "change" == s.on) && t.validate.field(t.get.validation(n))
                         },
                         change: function() {
                             var n = e(this),
                                 i = n.closest(w);
                             ("change" == s.on || i.hasClass(m.error) && s.revalidate) && (clearTimeout(t.timer), t.timer = setTimeout(function() {
                                 t.debug("Revalidating field", n, t.get.validation(n)), t.validate.field(t.get.validation(n))
                             }, s.delay))
                         }
                     }
                 },
                 get: {
                     changeEvent: function(e) {
                         return "checkbox" == e || "radio" == e || "hidden" == e ? "change" : n.createElement("input").oninput !== i ? "input" : n.createElement("input").onpropertychange !== i ? "propertychange" : "keyup"
                     },
                     field: function(n) {
                         return t.verbose("Finding field with identifier", n), l.filter("#" + n).length > 0 ? l.filter("#" + n) : l.filter('[name="' + n + '"]').length > 0 ? l.filter('[name="' + n + '"]') : l.filter("[data-" + u.validate + '="' + n + '"]').length > 0 ? l.filter("[data-" + u.validate + '="' + n + '"]') : e("<input/>")
                     },
                     validation: function(n) {
                         var i;
                         return e.each(c, function(e, o) {
                             t.get.field(o.identifier).get(0) == n.get(0) && (i = o)
                         }), i || !1
                     }
                 },
                 has: {
                     field: function(e) {
                         return t.verbose("Checking for existence of a field with identifier", e), l.filter("#" + e).length > 0 ? !0 : l.filter('[name="' + e + '"]').length > 0 ? !0 : l.filter("[data-" + u.validate + '="' + e + '"]').length > 0 ? !0 : !1
                     }
                 },
                 add: {
                     prompt: function(n, a) {
                         var r = t.get.field(n),
                             c = r.closest(w),
                             l = c.children(d.prompt),
                             u = 0 !== l.length;
                         a = "string" == typeof a ? [a] : a, t.verbose("Adding field error state", n), c.addClass(m.error), s.inline && (u || (l = s.templates.prompt(a), l.appendTo(c)), l.html(a[0]), u ? t.verbose("Inline errors are disabled, no inline error added", n) : s.transition && e.fn.transition !== i && o.transition("is supported") ? (t.verbose("Displaying error with css transition", s.transition), l.transition(s.transition + " in", s.duration)) : (t.verbose("Displaying error with fallback javascript animation"), l.fadeIn(s.duration)))
                     },
                     errors: function(e) {
                         t.debug("Adding form error messages", e), C.html(s.templates.error(e))
                     }
                 },
                 remove: {
                     prompt: function(n) {
                         var a = t.get.field(n.identifier),
                             r = a.closest(w),
                             c = r.children(d.prompt);
                         r.removeClass(m.error), s.inline && c.is(":visible") && (t.verbose("Removing prompt for field", n), s.transition && e.fn.transition !== i && o.transition("is supported") ? c.transition(s.transition + " out", s.duration, function() {
                             c.remove()
                         }) : c.fadeOut(s.duration, function() {
                             c.remove()
                         }))
                     }
                 },
                 set: {
                     success: function() {
                         o.removeClass(m.error).addClass(m.success)
                     },
                     error: function() {
                         o.removeClass(m.success).addClass(m.error)
                     }
                 },
                 validate: {
                     form: function(n) {
                         var a = !0;
                         return k = [], e.each(c, function(e, n) {
                             t.validate.field(n) || (a = !1)
                         }), a ? (t.debug("Form has no validation errors, submitting"), t.set.success(), s.onSuccess.call(S, n)) : (t.debug("Form has errors"), t.set.error(), s.inline || t.add.errors(k), o.data("moduleApi") !== i && n.stopImmediatePropagation(), s.onFailure.call(S, k))
                     },
                     field: function(n) {
                         var o = t.get.field(n.identifier),
                             a = !0,
                             r = [];
                         return o.prop("disabled") ? (t.debug("Field is disabled. Skipping", n.identifier), a = !0) : n.optional && "" === e.trim(o.val()) ? (t.debug("Field is optional and empty. Skipping", n.identifier), a = !0) : n.rules !== i && e.each(n.rules, function(e, i) {
                             t.has.field(n.identifier) && !t.validate.rule(n, i) && (t.debug("Field is invalid", n.identifier, i.type), r.push(i.prompt), a = !1)
                         }), a ? (t.remove.prompt(n, r), s.onValid.call(o), !0) : (k = k.concat(r), t.add.prompt(n.identifier, r), s.onInvalid.call(o, r), !1)
                     },
                     rule: function(n, o) {
                         var a, r, c = t.get.field(n.identifier),
                             l = o.type,
                             u = e.trim(c.val() + ""),
                             d = /\[(.*)\]/i,
                             m = d.exec(l),
                             f = !0;
                         return m !== i && null !== m ? (a = "" + m[1], r = l.replace(m[0], ""), f = s.rules[r].call(S, u, a)) : f = s.rules[l].call(c, u), f
                     }
                 },
                 setting: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, s, t);
                     else {
                         if (n === i) return s[t];
                         s[t] = n
                     }
                 },
                 internal: function(n, o) {
                     if (e.isPlainObject(n)) e.extend(!0, t, n);
                     else {
                         if (o === i) return t[n];
                         t[n] = o
                     }
                 },
                 debug: function() {
                     s.debug && (s.performance ? t.performance.log(arguments) : (t.debug = Function.prototype.bind.call(console.info, console, s.name + ":"), t.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     s.verbose && s.debug && (s.performance ? t.performance.log(arguments) : (t.verbose = Function.prototype.bind.call(console.info, console, s.name + ":"), t.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     t.error = Function.prototype.bind.call(console.error, console, s.name + ":"), t.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var n, i, o;
                         s.performance && (n = (new Date).getTime(), o = h || n, i = n - o, h = n, v.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: S,
                             "Execution Time": i
                         })), clearTimeout(t.performance.timer), t.performance.timer = setTimeout(t.performance.display, 100)
                     },
                     display: function() {
                         var n = s.name + ":",
                             o = 0;
                         h = !1, clearTimeout(t.performance.timer), e.each(v, function(e, t) {
                             o += t["Execution Time"]
                         }), n += " " + o + "ms", p && (n += " '" + p + "'"), r.length > 1 && (n += " (" + r.length + ")"), (console.group !== i || console.table !== i) && v.length > 0 && (console.groupCollapsed(n), console.table ? console.table(v) : e.each(v, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), v = []
                     }
                 },
                 invoke: function(t, n, o) {
                     var r, s, c, l = A;
                     return n = n || x, o = S || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function(n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, y ? (A === i && t.initialize(), t.invoke(b)) : (A !== i && t.destroy(), t.initialize())
         }), a !== i ? a : this
     }, e.fn.form.settings = {
         name: "Form",
         namespace: "form",
         debug: !1,
         verbose: !0,
         performance: !0,
         keyboardShortcuts: !0,
         on: "submit",
         inline: !1,
         delay: 200,
         revalidate: !0,
         transition: "scale",
         duration: 200,
         onValid: function() {},
         onInvalid: function() {},
         onSuccess: function() {
             return !0
         },
         onFailure: function() {
             return !1
         },
         metadata: {
             validate: "validate"
         },
         selector: {
             message: ".error.message",
             field: "input, textarea, select",
             group: ".field",
             checkbox: 'input[type="checkbox"], input[type="radio"]',
             input: "input",
             prompt: ".prompt.label",
             submit: ".submit"
         },
         className: {
             error: "error",
             success: "success",
             down: "down",
             label: "ui prompt label"
         },
         error: {
             method: "The method you called is not defined."
         },
         templates: {
             error: function(t) {
                 var n = '<ul class="list">';
                 return e.each(t, function(e, t) {
                     n += "<li>" + t + "</li>"
                 }), n += "</ul>", e(n)
             },
             prompt: function(t) {
                 return e("<div/>").addClass("ui red pointing prompt label").html(t[0])
             }
         },
         rules: {
             checked: function() {
                 return e(this).filter(":checked").length > 0
             },
             contains: function(e, t) {
                 return t = t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), -1 !== e.search(t)
             },
             email: function(e) {
                 var t = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "i");
                 return t.test(e)
             },
             empty: function(e) {
                 return !(e === i || "" === e)
             },
             integer: function(e, t) {
                 var n, o, a, r = /^\-?\d+$/;
                 return t === i || "" === t || ".." === t || (-1 == t.indexOf("..") ? r.test(t) && (n = o = t - 0) : (a = t.split("..", 2), r.test(a[0]) && (n = a[0] - 0), r.test(a[1]) && (o = a[1] - 0))), r.test(e) && (n === i || e >= n) && (o === i || o >= e)
             },
             is: function(e, t) {
                 return e == t
             },
             length: function(e, t) {
                 return e !== i ? e.length >= t : !1
             },
             match: function(t, n) {
                 var o, a = e(this);
                 return a.find("#" + n).length > 0 ? o = a.find("#" + n).val() : a.find('[name="' + n + '"]').length > 0 ? o = a.find('[name="' + n + '"]').val() : a.find('[data-validate="' + n + '"]').length > 0 && (o = a.find('[data-validate="' + n + '"]').val()), o !== i ? t.toString() == o.toString() : !1
             },
             maxLength: function(e, t) {
                 return e !== i ? e.length <= t : !1
             },
             not: function(e, t) {
                 return e != t
             },
             url: function(e) {
                 var t = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                 return t.test(e)
             }
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     e.fn.state = function(t) {
         var o, a = e(this),
             r = a.selector || "",
             s = ("ontouchstart" in n.documentElement, (new Date).getTime()),
             c = [],
             l = arguments[0],
             u = "string" == typeof l,
             d = [].slice.call(arguments, 1);
         return a.each(function() {
             var n, m = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.state.settings, t) : e.extend({}, e.fn.state.settings),
                 f = m.error,
                 g = m.metadata,
                 p = m.className,
                 h = m.namespace,
                 v = m.states,
                 b = m.text,
                 y = "." + h,
                 x = h + "-module",
                 w = e(this),
                 C = this,
                 T = w.data(x);
             n = {
                 initialize: function() {
                     n.verbose("Initializing module"), m.automatic && n.add.defaults(), m.context && "" !== r ? e(m.context).on(r, "mouseenter" + y, n.change.text).on(r, "mouseleave" + y, n.reset.text).on(r, "click" + y, n.toggle.state) : w.on("mouseenter" + y, n.change.text).on("mouseleave" + y, n.reset.text).on("click" + y, n.toggle.state), n.instantiate()
                 },
                 instantiate: function() {
                     n.verbose("Storing instance of module", n), T = n, w.data(x, n)
                 },
                 destroy: function() {
                     n.verbose("Destroying previous module", T), w.off(y).removeData(x)
                 },
                 refresh: function() {
                     n.verbose("Refreshing selector cache"), w = e(C)
                 },
                 add: {
                     defaults: function() {
                         var o = t && e.isPlainObject(t.states) ? t.states : {};
                         e.each(m.defaults, function(t, a) {
                             n.is[t] !== i && n.is[t]() && (n.verbose("Adding default states", t, C), e.extend(m.states, a, o))
                         })
                     }
                 },
                 is: {
                     active: function() {
                         return w.hasClass(p.active)
                     },
                     loading: function() {
                         return w.hasClass(p.loading)
                     },
                     inactive: function() {
                         return !w.hasClass(p.active)
                     },
                     state: function(e) {
                         return p[e] === i ? !1 : w.hasClass(p[e])
                     },
                     enabled: function() {
                         return !w.is(m.filter.active)
                     },
                     disabled: function() {
                         return w.is(m.filter.active)
                     },
                     textEnabled: function() {
                         return !w.is(m.filter.text)
                     },
                     button: function() {
                         return w.is(".button:not(a, .submit)")
                     },
                     input: function() {
                         return w.is("input")
                     },
                     progress: function() {
                         return w.is(".ui.progress")
                     }
                 },
                 allow: function(e) {
                     n.debug("Now allowing state", e), v[e] = !0
                 },
                 disallow: function(e) {
                     n.debug("No longer allowing", e), v[e] = !1
                 },
                 allows: function(e) {
                     return v[e] || !1
                 },
                 enable: function() {
                     w.removeClass(p.disabled)
                 },
                 disable: function() {
                     w.addClass(p.disabled)
                 },
                 setState: function(e) {
                     n.allows(e) && w.addClass(p[e])
                 },
                 removeState: function(e) {
                     n.allows(e) && w.removeClass(p[e])
                 },
                 toggle: {
                     state: function() {
                         var t;
                         if (n.allows("active") && n.is.enabled()) {
                             if (n.refresh(), e.fn.api !== i && (t = w.api("get request"))) return void n.listenTo(t);
                             n.change.state()
                         }
                     }
                 },
                 listenTo: function(t) {
                     n.debug("API request detected, waiting for state signal", t), t ? (b.loading && n.update.text(b.loading), e.when(t).then(function() {
                         "resolved" == t.state() ? (n.debug("API request succeeded"), m.activateTest = function() {
                             return !0
                         }, m.deactivateTest = function() {
                             return !0
                         }) : (n.debug("API request failed"), m.activateTest = function() {
                             return !1
                         }, m.deactivateTest = function() {
                             return !1
                         }), n.change.state()
                     })) : (m.activateTest = function() {
                         return !1
                     }, m.deactivateTest = function() {
                         return !1
                     })
                 },
                 change: {
                     state: function() {
                         n.debug("Determining state change direction"), n.is.inactive() ? n.activate() : n.deactivate(), m.sync && n.sync(), m.onChange.call(C)
                     },
                     text: function() {
                         n.is.textEnabled() && (n.is.disabled() ? (n.verbose("Changing text to disabled text", b.hover), n.update.text(b.disabled)) : n.is.active() ? b.hover ? (n.verbose("Changing text to hover text", b.hover), n.update.text(b.hover)) : b.deactivate && (n.verbose("Changing text to deactivating text", b.deactivate), n.update.text(b.deactivate)) : b.hover ? (n.verbose("Changing text to hover text", b.hover), n.update.text(b.hover)) : b.activate && (n.verbose("Changing text to activating text", b.activate), n.update.text(b.activate)))
                     }
                 },
                 activate: function() {
                     m.activateTest.call(C) && (n.debug("Setting state to active"), w.addClass(p.active), n.update.text(b.active), m.onActivate.call(C))
                 },
                 deactivate: function() {
                     m.deactivateTest.call(C) && (n.debug("Setting state to inactive"), w.removeClass(p.active), n.update.text(b.inactive), m.onDeactivate.call(C))
                 },
                 sync: function() {
                     n.verbose("Syncing other buttons to current state"), a.not(w).state(n.is.active() ? "activate" : "deactivate")
                 },
                 get: {
                     text: function() {
                         return m.selector.text ? w.find(m.selector.text).text() : w.html()
                     },
                     textFor: function(e) {
                         return b[e] || !1
                     }
                 },
                 flash: {
                     text: function(e, t, i) {
                         var o = n.get.text();
                         n.debug("Flashing text message", e, t), e = e || m.text.flash, t = t || m.flashDuration, i = i || function() {}, n.update.text(e), setTimeout(function() {
                             n.update.text(o), i.call(C)
                         }, t)
                     }
                 },
                 reset: {
                     text: function() {
                         var e = b.active || w.data(g.storedText),
                             t = b.inactive || w.data(g.storedText);
                         n.is.textEnabled() && (n.is.active() && e ? (n.verbose("Resetting active text", e), n.update.text(e)) : t && (n.verbose("Resetting inactive text", e), n.update.text(t)))
                     }
                 },
                 update: {
                     text: function(e) {
                         var t = n.get.text();
                         e && e !== t ? (n.debug("Updating text", e), m.selector.text ? w.data(g.storedText, e).find(m.selector.text).text(e) : w.data(g.storedText, e).html(e)) : n.debug("Text is already sane, ignoring update", e)
                     }
                 },
                 setting: function(t, o) {
                     if (n.debug("Changing setting", t, o), e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (o === i) return m[t];
                         m[t] = o
                     }
                 },
                 internal: function(t, o) {
                     if (e.isPlainObject(t)) e.extend(!0, n, t);
                     else {
                         if (o === i) return n[t];
                         n[t] = o
                     }
                 },
                 debug: function() {
                     m.debug && (m.performance ? n.performance.log(arguments) : (n.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), n.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     m.verbose && m.debug && (m.performance ? n.performance.log(arguments) : (n.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), n.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     n.error = Function.prototype.bind.call(console.error, console, m.name + ":"), n.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, i, o;
                         m.performance && (t = (new Date).getTime(), o = s || t, i = t - o, s = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: C,
                             "Execution Time": i
                         })), clearTimeout(n.performance.timer), n.performance.timer = setTimeout(n.performance.display, 100)
                     },
                     display: function() {
                         var t = m.name + ":",
                             o = 0;
                         s = !1, clearTimeout(n.performance.timer), e.each(c, function(e, t) {
                             o += t["Execution Time"]
                         }), t += " " + o + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function(t, a, r) {
                     var s, c, l, u = T;
                     return a = a || d, r = C || r, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function(o, a) {
                         var r = o != s ? a + t[o + 1].charAt(0).toUpperCase() + t[o + 1].slice(1) : t;
                         if (e.isPlainObject(u[r]) && o != s) u = u[r];
                         else {
                             if (u[r] !== i) return c = u[r], !1;
                             if (!e.isPlainObject(u[a]) || o == s) return u[a] !== i ? (c = u[a], !1) : (n.error(f.method, t), !1);
                             u = u[a]
                         }
                     })), e.isFunction(c) ? l = c.apply(r, a) : c !== i && (l = c), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), c
                 }
             }, u ? (T === i && n.initialize(), n.invoke(l)) : (T !== i && n.destroy(), n.initialize())
         }), o !== i ? o : this
     }, e.fn.state.settings = {
         name: "State",
         debug: !1,
         verbose: !0,
         namespace: "state",
         performance: !0,
         onActivate: function() {},
         onDeactivate: function() {},
         onChange: function() {},
         activateTest: function() {
             return !0
         },
         deactivateTest: function() {
             return !0
         },
         automatic: !0,
         sync: !1,
         flashDuration: 1e3,
         filter: {
             text: ".loading, .disabled",
             active: ".disabled"
         },
         context: !1,
         error: {
             method: "The method you called is not defined."
         },
         metadata: {
             promise: "promise",
             storedText: "stored-text"
         },
         className: {
             active: "active",
             disabled: "disabled",
             error: "error",
             loading: "loading",
             success: "success",
             warning: "warning"
         },
         selector: {
             text: !1
         },
         defaults: {
             input: {
                 disabled: !0,
                 loading: !0,
                 active: !0
             },
             button: {
                 disabled: !0,
                 loading: !0,
                 active: !0
             },
             progress: {
                 active: !0,
                 success: !0,
                 warning: !0,
                 error: !0
             }
         },
         states: {
             active: !0,
             disabled: !0,
             error: !0,
             loading: !0,
             success: !0,
             warning: !0
         },
         text: {
             disabled: !1,
             flash: !1,
             hover: !1,
             active: !1,
             inactive: !1,
             activate: !1,
             deactivate: !1
         }
     }
 }(jQuery, window, document),
 function(e, t, n, i) {
     e.fn.visibility = function(o) {
         var a, r = e(this),
             s = r.selector || "",
             c = (new Date).getTime(),
             l = [],
             u = arguments[0],
             d = "string" == typeof u,
             m = [].slice.call(arguments, 1);
         return r.each(function() {
             var r, f = e.extend(!0, {}, e.fn.visibility.settings, o),
                 g = f.className,
                 p = f.namespace,
                 h = f.error,
                 v = "." + p,
                 b = "module-" + p,
                 y = e(t),
                 x = e(this),
                 w = e(f.context),
                 C = (x.offsetParent(), x.selector || "", x.data(b)),
                 T = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                     setTimeout(e, 0)
                 },
                 k = this;
             r = {
                 initialize: function() {
                     r.verbose("Initializing visibility", f), r.setup.cache(), r.save.position(), r.should.trackChanges() && (r.bindEvents(), "image" == f.type && r.setup.image(), "fixed" == f.type && r.setup.fixed()), r.checkVisibility(), r.instantiate()
                 },
                 instantiate: function() {
                     r.verbose("Storing instance of module", r), C = r, x.data(b, r)
                 },
                 destroy: function() {
                     r.verbose("Destroying previous module"), x.off(v).removeData(b)
                 },
                 bindEvents: function() {
                     r.verbose("Binding visibility events to scroll and resize"), y.on("resize" + v, r.event.refresh), w.on("scroll" + v, r.event.scroll)
                 },
                 event: {
                     refresh: function() {
                         T(r.refresh)
                     },
                     scroll: function() {
                         r.verbose("Scroll position changed"), f.throttle ? (clearTimeout(r.timer), r.timer = setTimeout(r.checkVisibility, f.throttle)) : T(r.checkVisibility)
                     }
                 },
                 precache: function(t, i) {
                     t instanceof Array || (t = [t]);
                     for (var o = t.length, a = 0, r = [], s = n.createElement("img"), c = function() {
                             a++, a >= t.length && e.isFunction(i) && i()
                         }; o--;) s = n.createElement("img"), s.onload = c, s.onerror = c, s.src = t[o], r.push(s)
                 },
                 should: {
                     trackChanges: function() {
                         return d && m.length > 0 ? (r.debug("One time query, no need to bind events"), !1) : (r.debug("Query is attaching callbacks, watching for changes with scroll"), !0)
                     }
                 },
                 setup: {
                     cache: function() {
                         r.cache = {
                             occurred: {},
                             screen: {},
                             element: {}
                         }
                     },
                     image: function() {
                         var e = x.data("src");
                         e && (r.verbose("Lazy loading image", e), r.topVisible(function() {
                             r.precache(e, function() {
                                 r.set.image(e), f.onTopVisible = !1
                             })
                         }))
                     },
                     fixed: function() {
                         r.verbose("Setting up fixed on element pass"), x.visibility({
                             once: !1,
                             continuous: !1,
                             onTopPassed: function() {
                                 x.addClass(g.fixed).css({
                                     position: "fixed",
                                     top: f.offset + "px"
                                 }), f.animation && e.fn.transition !== i && x.transition(f.transition, f.duration)
                             },
                             onTopPassedReverse: function() {
                                 x.removeClass(g.fixed).css({
                                     position: "",
                                     top: ""
                                 })
                             }
                         })
                     }
                 },
                 set: {
                     image: function(t) {
                         var n = r.cache.screen.bottom < r.cache.element.top;
                         x.attr("src", t), n ? (r.verbose("Image outside browser, no show animation"), x.show()) : f.transition && e.fn.transition !== i ? x.transition(f.transition, f.duration) : x.fadeIn(f.duration)
                     }
                 },
                 refresh: function() {
                     r.debug("Refreshing constants (element width/height)"), r.reset(), r.save.position(), r.checkVisibility(), f.onRefresh.call(k)
                 },
                 reset: function() {
                     r.verbose("Reseting all cached values"), e.isPlainObject(r.cache) && (r.cache.screen = {}, r.cache.element = {})
                 },
                 checkVisibility: function() {
                     r.verbose("Checking visibility of element", r.cache.element), r.save.calculations(), r.passed(), r.passingReverse(), r.topVisibleReverse(), r.bottomVisibleReverse(), r.topPassedReverse(), r.bottomPassedReverse(), r.passing(), r.topVisible(), r.bottomVisible(), r.topPassed(), r.bottomPassed()
                 },
                 passed: function(t, n) {
                     var o = r.get.elementCalculations();
                     if (t !== i && n !== i) f.onPassed[t] = n;
                     else {
                         if (t !== i) return r.get.pixelsPassed(t) > o.pixelsPassed;
                         o.passing && e.each(f.onPassed, function(e, t) {
                             o.bottomVisible || o.pixelsPassed > r.get.pixelsPassed(e) ? r.execute(t, e) : f.once || r.remove.occurred(t)
                         })
                     }
                 },
                 passing: function(e) {
                     var t = r.get.elementCalculations(),
                         n = e || f.onPassing,
                         o = "passing";
                     return e && (r.debug("Adding callback for passing", e), f.onPassing = e), t.passing ? r.execute(n, o) : f.once || r.remove.occurred(o), e !== i ? t.passing : void 0
                 },
                 topVisible: function(e) {
                     var t = r.get.elementCalculations(),
                         n = e || f.onTopVisible,
                         o = "topVisible";
                     return e && (r.debug("Adding callback for top visible", e), f.onTopVisible = e), t.topVisible ? r.execute(n, o) : f.once || r.remove.occurred(o), e === i ? t.topVisible : void 0
                 },
                 bottomVisible: function(e) {
                     var t = r.get.elementCalculations(),
                         n = e || f.onBottomVisible,
                         o = "bottomVisible";
                     return e && (r.debug("Adding callback for bottom visible", e), f.onBottomVisible = e), t.bottomVisible ? r.execute(n, o) : f.once || r.remove.occurred(o), e === i ? t.bottomVisible : void 0
                 },
                 topPassed: function(e) {
                     var t = r.get.elementCalculations(),
                         n = e || f.onTopPassed,
                         o = "topPassed";
                     return e && (r.debug("Adding callback for top passed", e), f.onTopPassed = e), t.topPassed ? r.execute(n, o) : f.once || r.remove.occurred(o), e === i ? t.topPassed : void 0
                 },
                 bottomPassed: function(e) {
                     var t = r.get.elementCalculations(),
                         n = e || f.onBottomPassed,
                         o = "bottomPassed";
                     return e && (r.debug("Adding callback for bottom passed", e), f.onBottomPassed = e), t.bottomPassed ? r.execute(n, o) : f.once || r.remove.occurred(o), e === i ? t.bottomPassed : void 0
                 },
                 passingReverse: function(e) {
                     var t = r.get.elementCalculations(),
                         n = e || f.onPassingReverse,
                         o = "passingReverse";
                     return e && (r.debug("Adding callback for passing reverse", e), f.onPassingReverse = e), t.passing ? f.once || r.remove.occurred(o) : r.get.occurred("passing") && r.execute(n, o), e !== i ? !t.passing : void 0
                 },
                 topVisibleReverse: function(e) {
                     var t = r.get.elementCalculations(),
                         n = e || f.onTopVisibleReverse,
                         o = "topVisibleReverse";
                     return e && (r.debug("Adding callback for top visible reverse", e), f.onTopVisibleReverse = e), t.topVisible ? f.once || r.remove.occurred(o) : r.get.occurred("topVisible") && r.execute(n, o), e === i ? !t.topVisible : void 0
                 },
                 bottomVisibleReverse: function(e) {
                     var t = r.get.elementCalculations(),
                         n = e || f.onBottomVisibleReverse,
                         o = "bottomVisibleReverse";
                     return e && (r.debug("Adding callback for bottom visible reverse", e), f.onBottomVisibleReverse = e), t.bottomVisible ? f.once || r.remove.occurred(o) : r.get.occurred("bottomVisible") && r.execute(n, o), e === i ? !t.bottomVisible : void 0
                 },
                 topPassedReverse: function(e) {
                     var t = r.get.elementCalculations(),
                         n = e || f.onTopPassedReverse,
                         o = "topPassedReverse";
                     return e && (r.debug("Adding callback for top passed reverse", e), f.onTopPassedReverse = e), t.topPassed ? f.once || r.remove.occurred(o) : r.get.occurred("topPassed") && r.execute(n, o), e === i ? !t.onTopPassed : void 0
                 },
                 bottomPassedReverse: function(e) {
                     var t = r.get.elementCalculations(),
                         n = e || f.onBottomPassedReverse,
                         o = "bottomPassedReverse";
                     return e && (r.debug("Adding callback for bottom passed reverse", e), f.onBottomPassedReverse = e), t.bottomPassed ? f.once || r.remove.occurred(o) : r.get.occurred("bottomPassed") && r.execute(n, o), e === i ? !t.bottomPassed : void 0
                 },
                 execute: function(e, t) {
                     var n = r.get.elementCalculations(),
                         i = r.get.screenCalculations();
                     e = e || !1, e && (f.continuous ? (r.debug("Callback being called continuously", t, n), e.call(k, n, i)) : r.get.occurred(t) || (r.debug("Conditions met", t, n), e.call(k, n, i))), r.save.occurred(t)
                 },
                 remove: {
                     occurred: function(e) {
                         e ? r.cache.occurred[e] !== i && r.cache.occurred[e] === !0 && (r.debug("Callback can now be called again", e), r.cache.occurred[e] = !1) : r.cache.occurred = {}
                     }
                 },
                 save: {
                     calculations: function() {
                         r.verbose("Saving all calculations necessary to determine positioning"), r.save.scroll(), r.save.direction(), r.save.screenCalculations(), r.save.elementCalculations()
                     },
                     occurred: function(e) {
                         e && (r.cache.occurred[e] === i || r.cache.occurred[e] !== !0) && (r.verbose("Saving callback occurred", e), r.cache.occurred[e] = !0)
                     },
                     scroll: function() {
                         r.cache.scroll = w.scrollTop() + f.offset
                     },
                     direction: function() {
                         var e, t = r.get.scroll(),
                             n = r.get.lastScroll();
                         return e = t > n && n ? "down" : n > t && n ? "up" : "static", r.cache.direction = e, r.cache.direction
                     },
                     elementPosition: function() {
                         var t = r.get.screenSize();
                         return r.verbose("Saving element position"), e.extend(r.cache.element, {
                             margin: {
                                 top: parseInt(x.css("margin-top"), 10),
                                 bottom: parseInt(x.css("margin-bottom"), 10)
                             },
                             fits: k.height < t.height,
                             offset: x.offset(),
                             width: x.outerWidth(),
                             height: x.outerHeight()
                         }), r.cache.element
                     },
                     elementCalculations: function() {
                         var t = r.get.screenCalculations(),
                             n = r.get.elementPosition();
                         f.includeMargin ? e.extend(r.cache.element, {
                             top: n.offset.top - n.margin.top,
                             bottom: n.offset.top + n.height + n.margin.bottom
                         }) : e.extend(r.cache.element, {
                             top: n.offset.top,
                             bottom: n.offset.top + n.height
                         }), e.extend(r.cache.element, {
                             topVisible: t.bottom >= n.top,
                             topPassed: t.top >= n.top,
                             bottomVisible: t.bottom >= n.bottom,
                             bottomPassed: t.top >= n.bottom,
                             pixelsPassed: 0,
                             percentagePassed: 0
                         }), e.extend(r.cache.element, {
                             visible: r.cache.element.topVisible || r.cache.element.bottomVisible,
                             passing: r.cache.element.topPassed && !r.cache.element.bottomPassed,
                             hidden: !r.cache.element.topVisible && !r.cache.element.bottomVisible
                         }), r.cache.element.passing && (r.cache.element.pixelsPassed = t.top - n.top, r.cache.element.percentagePassed = (t.top - n.top) / n.height), r.verbose("Updated element calculations", r.cache.element)
                     },
                     screenCalculations: function() {
                         var t = w.scrollTop() + f.offset;
                         return r.cache.scroll === i && (r.cache.scroll = w.scrollTop() + f.offset), r.save.direction(), e.extend(r.cache.screen, {
                             top: t,
                             bottom: t + r.cache.screen.height
                         }), r.cache.screen
                     },
                     screenSize: function() {
                         r.verbose("Saving window position"), r.cache.screen = {
                             height: w.height()
                         }
                     },
                     position: function() {
                         r.save.screenSize(), r.save.elementPosition()
                     }
                 },
                 get: {
                     pixelsPassed: function(e) {
                         var t = r.get.elementCalculations();
                         return e.search("%") > -1 ? t.height * (parseInt(e, 10) / 100) : parseInt(e, 10)
                     },
                     occurred: function(e) {
                         return r.cache.occurred !== i ? r.cache.occurred[e] || !1 : !1
                     },
                     direction: function() {
                         return r.cache.direction === i && r.save.direction(), r.cache.direction
                     },
                     elementPosition: function() {
                         return r.cache.element === i && r.save.elementPosition(), r.cache.element
                     },
                     elementCalculations: function() {
                         return r.cache.element === i && r.save.elementCalculations(), r.cache.element
                     },
                     screenCalculations: function() {
                         return r.cache.screen === i && r.save.screenCalculations(), r.cache.screen
                     },
                     screenSize: function() {
                         return r.cache.screen === i && r.save.screenSize(), r.cache.screen
                     },
                     scroll: function() {
                         return r.cache.scroll === i && r.save.scroll(), r.cache.scroll
                     },
                     lastScroll: function() {
                         return r.cache.screen === i ? (r.debug("First scroll event, no last scroll could be found"), !1) : r.cache.screen.top
                     }
                 },
                 setting: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 },
                 internal: function(t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, r, t);
                     else {
                         if (n === i) return r[t];
                         r[t] = n
                     }
                 },
                 debug: function() {
                     f.debug && (f.performance ? r.performance.log(arguments) : (r.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), r.debug.apply(console, arguments)))
                 },
                 verbose: function() {
                     f.verbose && f.debug && (f.performance ? r.performance.log(arguments) : (r.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), r.verbose.apply(console, arguments)))
                 },
                 error: function() {
                     r.error = Function.prototype.bind.call(console.error, console, f.name + ":"), r.error.apply(console, arguments)
                 },
                 performance: {
                     log: function(e) {
                         var t, n, i;
                         f.performance && (t = (new Date).getTime(), i = c || t, n = t - i, c = t, l.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: k,
                             "Execution Time": n
                         })), clearTimeout(r.performance.timer), r.performance.timer = setTimeout(r.performance.display, 100)
                     },
                     display: function() {
                         var t = f.name + ":",
                             n = 0;
                         c = !1, clearTimeout(r.performance.timer), e.each(l, function(e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function(e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), l = []
                     }
                 },
                 invoke: function(t, n, o) {
                     var s, c, l, u = C;
                     return n = n || m, o = k || o, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function(n, o) {
                         var a = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(u[a]) && n != s) u = u[a];
                         else {
                             if (u[a] !== i) return c = u[a], !1;
                             if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (c = u[o], !1) : (r.error(h.method, t), !1);
                             u = u[o]
                         }
                     })), e.isFunction(c) ? l = c.apply(o, n) : c !== i && (l = c), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), c
                 }
             }, d ? (C === i && r.initialize(), r.invoke(u)) : (C !== i && r.destroy(), r.initialize())
         }), a !== i ? a : this
     }, e.fn.visibility.settings = {
         name: "Visibility",
         namespace: "visibility",
         className: {
             fixed: "fixed"
         },
         debug: !1,
         verbose: !1,
         performance: !0,
         offset: 0,
         includeMargin: !1,
         context: t,
         throttle: !1,
         type: !1,
         transition: !1,
         duration: 500,
         onPassed: {},
         onPassing: !1,
         onTopVisible: !1,
         onBottomVisible: !1,
         onTopPassed: !1,
         onBottomPassed: !1,
         onPassingReverse: !1,
         onTopVisibleReverse: !1,
         onBottomVisibleReverse: !1,
         onTopPassedReverse: !1,
         onBottomPassedReverse: !1,
         once: !0,
         continuous: !1,
         onRefresh: function() {},
         onScroll: function() {},
         error: {
             method: "The method you called is not defined."
         }
     }
 }(jQuery, window, document);


 /**
 *   Unslider by @idiot
 */
 
(function($, f) {
    //  If there's no jQuery, Unslider can't work, so kill the operation.
    if(!$) return f;
    
    var Unslider = function() {
        //  Set up our elements
        this.el = f;
        this.items = f;
        
        //  Dimensions
        this.sizes = [];
        this.max = [0,0];
        
        //  Current inded
        this.current = 0;
        
        //  Start/stop timer
        this.interval = f;
                
        //  Set some options
        this.opts = {
            speed: 500,
            delay: 3000, // f for no autoplay
            complete: f, // when a slide's finished
            keys: !f, // keyboard shortcuts - disable if it breaks things
            dots: f, // display â€¢â€¢â€¢â€¢oâ€¢ pagination
            fluid: f // is it a percentage width?,
        };
        
        //  Create a deep clone for methods where context changes
        var _ = this;

        this.init = function(el, opts) {
            this.el = el;
            this.ul = el.children('ul');
            this.max = [el.outerWidth(), el.outerHeight()];         
            this.items = this.ul.children('li').each(this.calculate);
            
            //  Check whether we're passing any options in to Unslider
            this.opts = $.extend(this.opts, opts);
            
            //  Set up the Unslider
            this.setup();
            
            return this;
        };
        
        //  Get the width for an element
        //  Pass a jQuery element as the context with .call(), and the index as a parameter: Unslider.calculate.call($('li:first'), 0)
        this.calculate = function(index) {
            var me = $(this),
                width = me.outerWidth(), height = me.outerHeight();
            
            //  Add it to the sizes list
            _.sizes[index] = [width, height];
            
            //  Set the max values
            if(width > _.max[0]) _.max[0] = width;
            if(height > _.max[1]) _.max[1] = height;
        };
        
        //  Work out what methods need calling
        this.setup = function() {
            //  Set the main element
            this.el.css({
                overflow: 'hidden',
                width: _.max[0],
                height: this.items.first().outerHeight()
            });
            
            //  Set the relative widths
            this.ul.css({width: (this.items.length * 100) + '%', position: 'relative'});
            this.items.css('width', (100 / this.items.length) + '%');
            
            if(this.opts.delay !== f) {
                this.start();
                this.el.hover(this.stop, this.start);
            }
            
            //  Custom keyboard support
            this.opts.keys && $(document).keydown(this.keys);
            
            //  Dot pagination
            this.opts.dots && this.dots();
            
            //  Little patch for fluid-width sliders. Screw those guys.
            if(this.opts.fluid) {
                var resize = function() {
                    _.el.css('width', Math.min(Math.round((_.el.outerWidth() / _.el.parent().outerWidth()) * 100), 100) + '%');
                };
                
                resize();
                $(window).resize(resize);
            }
            
            if(this.opts.arrows) {
                this.el.parent().append('<p class="arrows"><span class="prev">â†</span><span class="next">â†’</span></p>')
                    .find('.arrows span').click(function() {
                        $.isFunction(_[this.className]) && _[this.className]();
                    });
            };
            
            //  Swipe support
            if($.event.swipe) {
                this.el.on('swipeleft', _.prev).on('swiperight', _.next);
            }
        };
        
        //  Move Unslider to a slide index
        this.move = function(index, cb) {
            //  If it's out of bounds, go to the first slide
            if(!this.items.eq(index).length) index = 0;
            if(index < 0) index = (this.items.length - 1);
            
            var target = this.items.eq(index);
            var obj = {height: target.outerHeight()};
            var speed = cb ? 5 : this.opts.speed;
            
            if(!this.ul.is(':animated')) {          
                //  Handle those pesky dots
                _.el.find('.dot:eq(' + index + ')').addClass('active').siblings().removeClass('active');

                this.el.animate(obj, speed) && this.ul.animate($.extend({left: '-' + index + '00%'}, obj), speed, function(data) {
                    _.current = index;
                    $.isFunction(_.opts.complete) && !cb && _.opts.complete(_.el);
                });
            }
        };
        
        //  Autoplay functionality
        this.start = function() {
            _.interval = setInterval(function() {
                _.move(_.current + 1);
            }, _.opts.delay);
        };
        
        //  Stop autoplay
        this.stop = function() {
            _.interval = clearInterval(_.interval);
            return _;
        };
        
        //  Keypresses
        this.keys = function(e) {
            var key = e.which;
            var map = {
                //  Prev/next
                37: _.prev,
                39: _.next,
                
                //  Esc
                27: _.stop
            };
            
            if($.isFunction(map[key])) {
                map[key]();
            }
        };
        
        //  Arrow navigation
        this.next = function() { return _.stop().move(_.current + 1) };
        this.prev = function() { return _.stop().move(_.current - 1) };
        
        this.dots = function() {
            //  Create the HTML
            var html = '<ol class="dots">';
                $.each(this.items, function(index) { html += '<li class="dot' + (index < 1 ? ' active' : '') + '">' + (index + 1) + '</li>'; });
                html += '</ol>';
            
            //  Add it to the Unslider
            this.el.addClass('has-dots').append(html).find('.dot').click(function() {
                _.move($(this).index());
            });
        };
    };
    
    //  Create a jQuery plugin
    $.fn.unslider = function(o) {
        var len = this.length;
        
        //  Enable multiple-slider support
        return this.each(function(index) {
            //  Cache a copy of $(this), so it 
            var me = $(this);
            var instance = (new Unslider).init(me, o);
            
            //  Invoke an Unslider instance
            me.data('unslider' + (len > 1 ? '-' + (index + 1) : ''), instance);
        });
    };
})(window.jQuery, false);