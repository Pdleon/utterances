parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var c={};function I(){var e=B(location.search.substr(1)),r=null,i=null;if("issue-term"in e){if(void 0!==(r=e["issue-term"])){if(""===r)throw new Error("When issue-term is specified, it cannot be blank.");if(-1!==["title","url","pathname","og:title"].indexOf(r)){if(!e[r])throw new Error("Unable to find \""+r+"\" metadata.");r=e[r]}}}else{if(!("issue-number"in e))throw new Error("\"issue-term\" or \"issue-number\" must be specified.");if((i=+e["issue-number"]).toString(10)!==e["issue-number"])throw new Error("issue-number is invalid. \""+e["issue-number"])}if(!("repo"in e))throw new Error("\"repo\" is required.");if(!("origin"in e))throw new Error("\"origin\" is required.");var t=ja.exec(e.repo);if(null===t)throw new Error("Invalid repo: \""+e.repo+"\"");return{owner:t[1],repo:t[2],issueTerm:r,issueNumber:i,origin:e.origin,url:e.url,title:e.title,description:e.description,label:e.label,theme:e.theme||"github-light"}}var n={};function B(e){for(var r,o=/\+/g,n=/([^&=]+)=?([^&]*)/g,p=function(e){return decodeURIComponent(e.replace(o," "))},a={};r=n.exec(e);)a[p(r[1])]=p(r[2]);return a}function t(e){var r=[];for(var o in e)e.hasOwnProperty(o)&&r.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return r.join("&")}n.deparam=B,n.param=t;var ja=/^([\w-_]+)\/([\w-_.]+)$/i;var a=I();var e={};var s="https://api.utteranc.es";var ia=e&&e.__awaiter||function(e,r,t,n){return new(t||(t=Promise))(function(o,a){function $(e){try{u(n.next(e))}catch(r){a(r)}}function i(e){try{u(n.throw(e))}catch(r){a(r)}}function u(e){e.done?o(e.value):new t(function(r){r(e.value)}).then($,i)}u((n=n.apply(e,r||[])).next())})},fa=e&&e.__generator||function(e,r){var t,n,o,a,$={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;$;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return $.label++,{value:a[1],done:!1};case 5:$.label++,n=a[1],a=[0];continue;case 7:a=$.ops.pop(),$.trys.pop();continue;default:if(!(o=(o=$.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){$=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){$.label=a[1];break}if(6===a[0]&&$.label<o[1]){$.label=o[1],o=a;break}if(o&&$.label<o[2]){$.label=o[2],$.ops.push(a);break}o[2]&&$.ops.pop(),$.trys.pop();continue;}a=r.call(e,$)}catch(i){a=[6,i],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},h={value:null};function u(e){return s+"/authorize?"+t({redirect_uri:e})}function x(){return ia(this,void 0,Promise,function(){var e,r,t;return fa(this,function(n){switch(n.label){case 0:return e=s+"/token",[4,fetch(e,{method:"POST",mode:"cors",credentials:"include"})];case 1:return(r=n.sent()).ok?[4,r.json()]:[3,3];case 2:return t=n.sent(),h.value=t,[2,t];case 3:return[2,null];}})})}e.token=h,e.getLoginUrl=u,e.loadToken=x;function ea(e){return e=e.replace(/\s/g,""),decodeURIComponent(escape(atob(e)))}var d,g,_="https://api.github.com/",E="application/vnd.github.VERSION.html+json",$="application/vnd.github.VERSION.html",p="application/vnd.github.squirrel-girl-preview",v=25;var w="master";function Z(n){d=n.owner,g=n.repo}function i(n,e){(e=e||{}).mode="cors",e.cache="no-cache";var r=new Request(_+n,e);return r.headers.set("Accept",p),/^search\//.test(n)||null===h.value||r.headers.set("Authorization","token "+h.value),r}var z={standard:{limit:Number.MAX_VALUE,remaining:Number.MAX_VALUE,reset:0},search:{limit:Number.MAX_VALUE,remaining:Number.MAX_VALUE,reset:0}};function F(n){var e=n.headers.get("X-RateLimit-Limit"),r=n.headers.get("X-RateLimit-Remaining"),t=n.headers.get("X-RateLimit-Reset"),$=/\/search\//.test(n.url),o=$?z.search:z.standard;if(o.limit=+e,o.remaining=+r,o.reset=+t,403===n.status&&0===o.remaining){var a=new Date(0);a.setUTCSeconds(o.reset);var s=Math.round((a.getTime()-new Date().getTime())/1e3/60),i=$?"search API":"non-search APIs";console.warn("Rate limit exceeded for "+i+". Resets in "+s+" minute"+(1===s?"":"s")+".")}}function f(n){return fetch(n).then(function(e){return 401===e.status&&(h.value=null),403===e.status&&e.json().then(function(n){"Resource not accessible by integration"===n.message&&window.dispatchEvent(new CustomEvent("not-installed"))}),F(e),"GET"===n.method&&-1!==[401,403].indexOf(e.status)&&n.headers.has("Authorization")?(n.headers.delete("Authorization"),f(n)):e})}function T(n,e){void 0===e&&(e=!1);var r=i("repos/"+d+"/"+g+"/contents/"+n+"?ref="+w);return e&&r.headers.set("accept",$),f(r).then(function(r){if(404===r.status)throw new Error("Repo \""+d+"/"+g+"\" does not have a file named \""+n+"\" in the \""+w+"\" branch.");if(!r.ok)throw new Error("Error fetching "+n+".");return e?r.text():r.json()}).then(function(n){if(e)return n;var r=n.content,t=ea(r);return JSON.parse(t)})}function L(n){var e="\""+n+"\" type:issue in:title repo:"+d+"/"+g;return f(i("search/issues?q="+encodeURIComponent(e)+"&sort=created&order=asc")).then(function(n){if(!n.ok)throw new Error("Error fetching issue via search.");return n.json()}).then(function(n){return 0===n.total_count?null:(n.total_count>1&&console.warn("Multiple issues match \""+e+"\". Using earliest created."),n.items[0])})}function X(n){return f(i("repos/"+d+"/"+g+"/issues/"+n)).then(function(n){if(!n.ok)throw new Error("Error fetching issue via issue number.");return n.json()})}function G(n,e){var r=i("repos/"+d+"/"+g+"/issues/"+n+"/comments?page="+e+"&per_page="+v),t=E+","+p;return r.headers.set("Accept",t),r}function q(n,e){return f(G(n,e)).then(function(n){if(!n.ok)throw new Error("Error fetching comments.");return n.json()})}function H(){return null===h.value?Promise.resolve(null):f(i("user")).then(function(n){return n.ok?n.json():null})}function na(n,e,r,t,$){var o=s+"/repos/"+d+"/"+g+"/issues"+($?"?label="+encodeURIComponent($):""),a=new Request(o,{method:"POST",body:JSON.stringify({title:n,body:"# "+r+"\n\n"+t+"\n\n["+e+"]("+e+")"})});return a.headers.set("Accept",p),a.headers.set("Authorization","token "+h.value),fetch(a).then(function(n){if(!n.ok)throw new Error("Error creating comments container issue");return n.json()})}function J(n,e){var r=i("repos/"+d+"/"+g+"/issues/"+n+"/comments",{method:"POST",body:JSON.stringify({body:e})}),t=E+","+p;return r.headers.set("Accept",t),f(r).then(function(n){if(!n.ok)throw new Error("Error posting comment.");return n.json()})}function K(n){return f(i("markdown",{method:"POST",body:JSON.stringify({text:n,mode:"gfm",context:d+"/"+g})})).then(function(n){return n.text()})}var k=[1e3,"second",6e4,"minute",36e5,"hour",864e5,"day",6048e5,"week",23328e5,"month"],M={month:"short",day:"numeric",year:"numeric"};function N(r,e){var $=r-e.getTime();if($<5e3)return"just now";for(var o=0;o+2<k.length&&1.1*$>k[o+2];)o+=2;var t=k[o],a=k[o+1],h=Math.round($/t);return h>3&&o===k.length-2?"on "+e.toLocaleDateString(void 0,M):1===h?("hour"===a?"an":"a")+" "+a+" ago":h+" "+a+"s ago"}var O;function P(e){O=e,addEventListener("resize",b),addEventListener("load",b)}var Q=-1;function R(){var e=document.body.scrollHeight;if(e!==Q){Q=e;var $={type:"resize",height:e};parent.postMessage($,O)}}var S=0;function b(){var e=Date.now();e-S>50&&(S=e,setTimeout(R,50))}var U="?v=3&s=88",V={COLLABORATOR:"Collaborator",CONTRIBUTOR:"Contributor",MEMBER:"Member",OWNER:"Owner"},W=function(){function e(e,r){this.comment=e,this.currentUser=r;var t=e.user,n=e.html_url,a=e.created_at,o=e.body_html,s=e.author_association;this.element=document.createElement("article"),this.element.classList.add("timeline-comment"),t.login===r&&this.element.classList.add("current-user");var l=V[s];this.element.innerHTML="\n      <a class=\"avatar\" href=\""+t.html_url+"\" target=\"_blank\" tabindex=\"-1\">\n        <img alt=\"@"+t.login+"\" height=\"44\" width=\"44\"\n              src=\""+t.avatar_url+U+"\">\n      </a>\n      <div class=\"comment\">\n        <header class=\"comment-header\">\n          <span class=\"comment-meta\">\n            <a class=\"text-link\" href=\""+t.html_url+"\" target=\"_blank\"><strong>"+t.login+"</strong></a>\n            commented\n            <a class=\"text-link\" href=\""+n+"\" target=\"_blank\">"+N(Date.now(),new Date(a))+"</a>\n          </span>\n          "+(l?"<span class=\"author-association-badge\">"+l+"</span>":"")+"\n        </header>\n        <div class=\"markdown-body markdown-body-scrollable\">\n          "+o+"\n        </div>\n      </div>";var i=this.element.lastElementChild.lastElementChild,c=i.querySelector(".email-hidden-toggle a");if(c){var m=i.querySelector(".email-hidden-reply");c.onclick=function(e){e.preventDefault(),m.classList.toggle("expanded")}}A(i)}return e.prototype.setCurrentUser=function(e){this.currentUser!==e&&(this.currentUser=e,this.comment.user.login===this.currentUser?this.element.classList.add("current-user"):this.element.classList.remove("current-user"))},e}();function A(e){Array.from(e.querySelectorAll(":not(.email-hidden-toggle) > a")).forEach(function(e){e.target="_top",e.rel="noopener noreferrer"}),Array.from(e.querySelectorAll("img")).forEach(function(e){return e.onload=b}),Array.from(e.querySelectorAll("a.commit-tease-sha")).forEach(function(e){return e.href="https://github.com"+e.pathname})}var Y=function(){function e(e,t){this.user=e,this.issue=t,this.timeline=[],this.count=0,this.element=document.createElement("main"),this.element.classList.add("timeline"),this.element.innerHTML="\n      <h1 class=\"timeline-header\">\n        <a class=\"text-link\" target=\"_blank\"></a>\n        <em>\n          - powered by\n          <a class=\"text-link\" href=\"https://utteranc.es\" target=\"_blank\">utteranc.es</a>\n        </em>\n      </h1>",this.countAnchor=this.element.firstElementChild.firstElementChild,this.marker=document.createComment("marker"),this.element.appendChild(this.marker),this.setIssue(this.issue),this.renderCount()}return e.prototype.setUser=function(e){this.user=e;for(var t=e?e.login:null,n=0;n<this.timeline.length;n++)this.timeline[n].setCurrentUser(t);b()},e.prototype.setIssue=function(e){this.issue=e,e?(this.count=e.comments,this.countAnchor.href=e.html_url,this.renderCount()):this.countAnchor.removeAttribute("href")},e.prototype.insertComment=function(e,t){var n=new W(e,this.user?this.user.login:null),i=this.timeline.findIndex(function(t){return t.comment.id>=e.id});if(-1===i)this.timeline.push(n),this.element.insertBefore(n.element,this.marker);else{var s=this.timeline[i],r=s.comment.id===e.id;this.element.insertBefore(n.element,s.element),this.timeline.splice(i,r?1:0,n),r&&s.element.remove()}t&&(this.count++,this.renderCount()),b()},e.prototype.insertPageLoader=function(e,t,n){var i=this.timeline.find(function(t){return t.comment.id>=e.id}).element;i.insertAdjacentHTML("afterend","\n      <div class=\"page-loader\">\n        <div class=\"zigzag\"></div>\n        <button type=\"button\" class=\"btn btn-outline btn-large\">\n          "+t+" hidden items<br/>\n          <span>Load more...</span>\n        </button>\n      </div>\n    ");var s=i.nextElementSibling,r=s.lastElementChild,o=r.lastElementChild;return r.onclick=n,{setBusy:function(){o.textContent="Loading...",r.disabled=!0},remove:function(){r.onclick=null,s.remove()}}},e.prototype.renderCount=function(){this.countAnchor.textContent=this.count+" Comment"+(1===this.count?"":"s")},e}();var l={};var r;function D(){return r||(r=T("utterances.json").then(function(r){return Array.isArray(r.origins)||(r.origins=[]),r},function(){return{origins:[a.origin]}})),r}var aa=l&&l.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(a,i){function s(t){try{l(r.next(t))}catch(e){i(e)}}function o(t){try{l(r.throw(t))}catch(e){i(e)}}function l(t){t.done?a(t.value):new n(function(e){e(t.value)}).then(s,o)}l((r=r.apply(t,e||[])).next())})},ba=l&&l.__generator||function(t,e){var n,r,a,i,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(a=(a=s.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue;}i=e.call(t,s)}catch(o){i=[6,o],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},ca="<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 14 16\" version=\"1.1\"><path fill=\"rgb(179,179,179)\" fill-rule=\"evenodd\" d=\"M8 10.5L9 14H5l1-3.5L5.25 9h3.5L8 10.5zM10 6H4L2 7h10l-2-1zM9 2L7 3 5 2 4 5h6L9 2zm4.03 7.75L10 9l1 2-2 3h3.22c.45 0 .86-.31.97-.75l.56-2.28c.14-.53-.19-1.08-.72-1.22zM4 9l-3.03.75c-.53.14-.86.69-.72 1.22l.56 2.28c.11.44.52.75.97.75H5l-2-3 1-2z\"></path></svg>",da="data:image/svg+xml;base64,"+btoa(ca),o="Nothing to preview",C=function(){function t(t,e){var n=this;this.user=t,this.submit=e,this.submitting=!1,this.renderTimeout=0,this.handleInput=function(){D();var t=n.textarea.value,e=/^\s*$/.test(t);n.submitButton.disabled=e,n.textarea.scrollHeight<450&&n.textarea.offsetHeight<n.textarea.scrollHeight&&(n.textarea.style.height=n.textarea.scrollHeight+"px",b()),clearTimeout(n.renderTimeout),e?n.preview.textContent=o:(n.preview.textContent="Loading preview...",n.renderTimeout=setTimeout(function(){return K(t).then(function(t){return n.preview.innerHTML=t}).then(function(){return A(n.preview)}).then(b)},500))},this.handleSubmit=function(t){return aa(n,void 0,void 0,function(){return ba(this,function(e){switch(e.label){case 0:return t.preventDefault(),this.submitting?[2]:(this.submitting=!0,this.textarea.disabled=!0,this.submitButton.disabled=!0,[4,this.submit(this.textarea.value).catch(function(){return 0})]);case 1:return e.sent(),this.submitting=!1,this.textarea.disabled=!this.user,this.textarea.value="",this.submitButton.disabled=!1,this.handleClick({target:this.form.querySelector(".tabnav-tab.tab-write")}),this.preview.textContent=o,[2];}})})},this.handleClick=function(t){var e=t.target;if(e instanceof HTMLButtonElement&&e.classList.contains("tabnav-tab")&&!e.classList.contains("selected")){n.form.querySelector(".tabnav-tab.selected").classList.remove("selected"),e.classList.add("selected");var r=e.classList.contains("tab-preview");n.textarea.style.display=r?"none":"",n.preview.style.display=r?"":"none",b()}},this.handleKeyDown=function(t){var e=t.which,r=t.ctrlKey;13===e&&r&&!n.submitButton.disabled&&n.form.dispatchEvent(new CustomEvent("submit"))},this.element=document.createElement("article"),this.element.classList.add("timeline-comment"),this.element.innerHTML="\n      <a class=\"avatar\" target=\"_blank\" tabindex=\"-1\">\n        <img height=\"44\" width=\"44\">\n      </a>\n      <form class=\"comment\" accept-charset=\"UTF-8\" action=\"javascript:\">\n        <header class=\"new-comment-header\">\n          <nav class=\"tabnav-tabs\" role=\"tablist\">\n            <button type=\"button\" class=\"tabnav-tab tab-write selected\"\n                    role=\"tab\" aria-selected=\"true\">\n              Write\n            </button>\n            <button type=\"button\" class=\"tabnav-tab tab-preview\"\n                    role=\"tab\">\n              Preview\n            </button>\n          </nav>\n        </header>\n        <div class=\"comment-body\">\n          <textarea class=\"form-control\" placeholder=\"Leave a comment\" aria-label=\"comment\"></textarea>\n          <div class=\"markdown-body\" style=\"display: none\">\n            "+o+"\n          </div>\n        </div>\n        <footer class=\"comment-footer\">\n          <a class=\"text-link markdown-info\" tabindex=\"-1\" target=\"_blank\"\n             href=\"https://guides.github.com/features/mastering-markdown/\">\n            <svg class=\"octicon v-align-bottom\" viewBox=\"0 0 16 16\" version=\"1.1\"\n              width=\"16\" height=\"16\" aria-hidden=\"true\">\n              <path fill-rule=\"evenodd\" d=\"M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15\n                13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4\n                8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z\">\n              </path>\n            </svg>\n            Styling with Markdown is supported\n          </a>\n          <button class=\"btn btn-primary\" type=\"submit\">Comment</button>\n          <a class=\"btn btn-primary\" href=\""+u(a.url)+"\" target=\"_top\">Sign in to comment</a>\n        </footer>\n      </form>",this.avatarAnchor=this.element.firstElementChild,this.avatar=this.avatarAnchor.firstElementChild,this.form=this.avatarAnchor.nextElementSibling,this.textarea=this.form.firstElementChild.nextElementSibling.firstElementChild,this.preview=this.form.firstElementChild.nextElementSibling.lastElementChild,this.signInAnchor=this.form.lastElementChild.lastElementChild,this.submitButton=this.signInAnchor.previousElementSibling,this.setUser(t),this.submitButton.disabled=!0,this.textarea.addEventListener("input",this.handleInput),this.form.addEventListener("submit",this.handleSubmit),this.form.addEventListener("click",this.handleClick),this.form.addEventListener("keydown",this.handleKeyDown),ga(this.textarea)}return t.prototype.setUser=function(t){this.user=t,this.submitButton.hidden=!t,this.signInAnchor.hidden=!!t,t?(this.avatarAnchor.href=t.html_url,this.avatar.alt="@"+t.login,this.avatar.src=t.avatar_url+"?v=3&s=88"):(this.avatarAnchor.removeAttribute("href"),this.avatar.alt="@anonymous",this.avatar.src=da,this.textarea.disabled=!0)},t.prototype.clear=function(){this.textarea.value=""},t}();function ga(t){var e=function t(){removeEventListener("mousemove",b),removeEventListener("mouseup",t)};t.addEventListener("mousedown",function(){addEventListener("mousemove",b),addEventListener("mouseup",e)})}l.NewCommentComponent=C;function ha(e,t){return new Promise(function(s){var n=document.createElement("link");n.rel="stylesheet",n.setAttribute("crossorigin","anonymous"),n.onload=s,n.href="/stylesheets/themes/"+e+"/utterances.css",document.head.appendChild(n),addEventListener("message",function(e){e.origin===t&&"set-theme"===e.data.type&&(n.href="/stylesheets/themes/"+e.data.theme+"/utterances.css")})})}var j=c&&c.__awaiter||function(e,r,t,n){return new(t||(t=Promise))(function(o,s){function i(e){try{a(n.next(e))}catch(r){s(r)}}function u(e){try{a(n.throw(e))}catch(r){s(r)}}function a(e){e.done?o(e.value):new t(function(r){r(e.value)}).then(i,u)}a((n=n.apply(e,r||[])).next())})},m=c&&c.__generator||function(e,r){var t,n,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue;}s=r.call(e,i)}catch(u){s=[6,u],n=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};function ka(){return null!==a.issueNumber?X(a.issueNumber):L(a.issueTerm)}function la(){return j(this,void 0,void 0,function(){var e,r,t,n,o,s,i=this;return m(this,function(u){switch(u.label){case 0:return[4,x()];case 1:return u.sent(),[4,Promise.all([ka(),H(),ha(a.theme,a.origin)])];case 2:return e=u.sent(),r=e[0],t=e[1],P(a.origin),n=new Y(t,r),document.body.appendChild(n.element),r&&r.comments>0&&ma(r,n),b(),r&&r.locked?[2]:(o=function(e){return j(i,void 0,void 0,function(){var t;return m(this,function(o){switch(o.label){case 0:return[4,y()];case 1:return o.sent(),r?[3,3]:[4,na(a.issueTerm,a.url,a.title,a.description,a.label)];case 2:r=o.sent(),n.setIssue(r),o.label=3;case 3:return[4,J(r.number,e)];case 4:return t=o.sent(),n.insertComment(t,!0),s.clear(),[2];}})})},s=new C(t,o),n.element.appendChild(s.element),[2]);}})})}function ma(e,r){return j(this,void 0,void 0,function(){var t,n,o,s,i,u,a,$,f,p,c=this;return m(this,function(l){switch(l.label){case 0:return t=function(e){for(var t=0,n=e;t<n.length;t++){var o=n[t];r.insertComment(o,!1)}},n=Math.ceil(e.comments/v),o=[q(e.number,1)],n>1&&o.push(q(e.number,n)),n>2&&e.comments%v<3&&o.push(q(e.number,n-1)),[4,Promise.all(o)];case 1:for(s=l.sent(),i=0,u=s;i<u.length;i++)a=u[i],t(a);return $=n-o.length,f=2,(p=function(n){if(0!==$)var o=n.pop(),s=r.insertPageLoader(o,$*v,function(){return j(c,void 0,void 0,function(){var r;return m(this,function(n){switch(n.label){case 0:return s.setBusy(),[4,q(e.number,f)];case 1:return r=n.sent(),s.remove(),t(r),$--,f++,p(r),[2];}})})})})(s[0]),[2];}})})}function y(){return j(this,void 0,void 0,function(){var e,r,t,n;return m(this,function(o){switch(o.label){case 0:return[4,D()];case 1:if(e=o.sent().origins,r=a.origin,t=a.owner,n=a.repo,-1!==e.indexOf(r))return[2];throw document.querySelector(".timeline").lastElementChild.insertAdjacentHTML("beforebegin","\n  <div class=\"flash flash-error flash-not-installed\">\n    Error: <code>"+r+"</code> is not permitted to post to <code>"+t+"/"+n+"</code>.\n    Confirm this is the correct repo for this site's comments. If you own this repo,\n    <a href=\"https://github.com/"+t+"/"+n+"/edit/master/utterances.json\" target=\"_top\">\n      <strong>update the utterances.json</strong>\n    </a>\n    to include <code>"+r+"</code> in the list of origins.<br/><br/>\n    Suggested configuration:<br/>\n    <pre><code>"+JSON.stringify({origins:[r]},null,2)+"</code></pre>\n  </div>"),b(),new Error("Origin not permitted.");}})})}Z(a),la(),addEventListener("not-installed",function e(){removeEventListener("not-installed",e),document.querySelector(".timeline").insertAdjacentHTML("afterbegin","\n  <div class=\"flash flash-error\">\n    Error: utterances is not installed on <code>"+a.owner+"/"+a.repo+"</code>.\n    If you own this repo,\n    <a href=\"https://github.com/apps/utterances\" target=\"_top\"><strong>install the app</strong></a>.\n    Read more about this change in\n    <a href=\"https://github.com/utterance/utterances/pull/25\" target=\"_top\">the PR</a>.\n  </div>"),b()}),c.assertOrigin=y;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=c}else if(typeof define==="function"&&define.amd){define(function(){return c})}n.__esModule=true;c.__esModule=true;return{"ieWq":n,"fHsu":c};});