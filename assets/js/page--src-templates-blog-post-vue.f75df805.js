(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{WXMF:function(t,e,a){"use strict";a.r(e);var s={props:["author"]},r=a("KHd+"),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-wrap"},[a("div",{staticClass:"w-full flex md:w-10/12 mb-4 text-center"},[a("div",{staticClass:"mb-2 sm:mb-0 w-full"},[a("div",{staticClass:"md:flex p-6 pl-0 self-center"},[a("g-image",{staticClass:"h-16 w-16 md:h-24 md:w-24 mx-auto md:mx-0 md:mr-6 rounded-full bg-gray-200",attrs:{src:t.author.image}}),a("div",{staticClass:"text-center md:text-left"},[a("g-link",{staticClass:"text-black",attrs:{to:t.author.path}},[a("h2",{staticClass:"text-lg my-1 mt-2"},[t._v(t._s(t.author.name))])]),a("div",{staticClass:"text-gray-600"},[t._v(t._s(t.author.bio))])],1)],1)])]),a("div",{staticClass:"w-full md:w-2/12 mb-4 self-center md:text-right text-center"},[a("g-link",{staticClass:"text-xs bg-transparent hover:text-blue-700 font-semibold py-2 px-4 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full",attrs:{to:t.author.path}},[t._v("Show more")])],1)])}),[],!1,null,null,null).exports,i=a("r0AA"),l={props:["record"]},c=a("Kw5r"),n=c.a.config.optionMergeStrategies.computed,p={metadata:{siteName:"AnimeTJ"}},d=function(t){var e=t.options;e.__staticData?e.__staticData.data=p:(e.__staticData=c.a.observable({data:p}),e.computed=n({$static:function(){return e.__staticData.data}},e.computed))},g=Object(r.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"post-card text-center bg-gray-900 text-white relative"},[a("header",{staticClass:"pt-10"},[a("small",[t._v("— "+t._s(t.$static.metadata.siteName)+" —")]),a("h3",{staticClass:"font-thin pt-0 mt-0"},[a("g-link",{attrs:{to:t.record.path}},[t._v(t._s(t.record.title))])],1)]),a("div",{staticClass:"justify-center self-center"},[a("div",{staticClass:"text-transparent fill-current stroke-white w-12"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M13 14.5s2 3 5 3 5.5-2.463 5.5-5.5S21 6.5 18 6.5c-5 0-7 11-12 11C2.962 17.5.5 15.037.5 12S3 6.5 6 6.5s4.5 3.5 4.5 3.5"}})])])]),a("div",{staticClass:"post-card-content pt-2"},[a("ul",t._l(t.record.belongsTo.edges,(function(e){return a("li",{key:e.node.id,staticClass:"border-b border-b-teal-700 py-2 mx-4"},[a("g-link",{attrs:{to:e.node.path}},[t._v(t._s(e.node.title))])],1)})),0)]),a("div",{staticClass:"md:absolute inset-x-0 bottom-0 py-5 text-center text-sm"},[a("g-link",{attrs:{to:t.record.path}},[t._v("Show all items ( "+t._s(t.record.belongsTo.totalCount)+" )")])],1)])}),[],!1,null,null,null);"function"==typeof d&&d(g);var u=g.exports,m={components:{Author:o,ListItem:i.a,BlogRelatedCategory:u},metaInfo:function(){return{title:this.$page.blog.title,bodyAttrs:{class:"bg-white"}}}},x=null,b=Object(r.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("section",{staticClass:"post-header container mx-auto px-6 sm:px-0 text-center mt-20 mb-10"},[a("p",{staticClass:"text-blue-500 uppercase tracking-wide text-sm"},[a("time",{attrs:{datetime:t.$page.blog.datetime}},[t._v(t._s(t.$page.blog.humanTime))]),a("span",{staticClass:"text-gray-500"},[t._v("  /  ")]),a("span",[a("g-link",{staticClass:"hover:underline",attrs:{to:t.$page.blog.category.path}},[t._v(t._s(t.$page.blog.category.title))])],1)]),a("h1",{staticClass:"text-4xl font-bold"},[t._v(t._s(t.$page.blog.title))])]),a("section",{staticClass:"post-image mx-auto w-full xl:px-20"},[a("g-image",{attrs:{src:t.$page.blog.image}})],1),a("section",{staticClass:"post-content container mx-auto bg-white relative p-10 font-serif text-gray-700"},[a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-content-excerpt text-xl border-b pb-10 mb-10",domProps:{innerHTML:t._s(t.$page.blog.excerpt)}}),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-content-text text-xl",domProps:{innerHTML:t._s(t.$page.blog.content)}})]),a("section",{staticClass:"post-tags container mx-auto bg-white relative p-10"},t._l(t.$page.blog.tags,(function(e){return a("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1),a("section",{staticClass:"post-author container p-10 mx-auto border-t"},t._l(t.$page.blog.author,(function(t){return a("Author",{key:t.id,attrs:{author:t}})})),1),a("section",{staticClass:"post-related bg-gray-200 py-20 pb-10"},[a("div",{staticClass:"container mx-auto px-6 sm:px-0 flex flex-wrap"},[a("BlogRelatedCategory",{attrs:{record:t.$page.blog.category}}),t.$page.previous?a("ListItem",{attrs:{record:t.$page.previous}}):t._e(),t.$page.next?a("ListItem",{attrs:{record:t.$page.next}}):t._e()],1)])])}),[],!1,null,null,null);"function"==typeof x&&x(b);e.default=b.exports},r0AA:function(t,e,a){"use strict";var s={props:["record"]},r=a("KHd+"),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"post-card bg-white"},[a("a",{staticClass:"post-card-image-link",attrs:{href:t.record.path}},[a("div",{staticClass:"post-card-image"},[a("g-image",{staticClass:"object-cover h-full w-full",attrs:{src:t.record.image}})],1)]),a("div",{staticClass:"post-card-content"},[a("a",{staticClass:"post-card-content-link",attrs:{href:t.record.path}},[a("header",{staticClass:"post-card-header"},[a("span",{staticClass:"text-gray-500 uppercase text-xs font-medium tracking-wide"},[t._v(t._s(t.record.category.title))]),a("h2",{staticClass:"post-card-title text-xl"},[t._v(t._s(t.record.title))])]),a("section",{staticClass:"post-card-excerpt"},[a("p",[t._v(t._s(t.record.excerpt))])])]),a("footer",{staticClass:"post-card-meta mt-4"},[a("ul",{staticClass:"author-list"},t._l(t.record.author,(function(t){return a("li",{key:t.id,staticClass:"author-list-item"},[a("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.name,expression:"author.name"}],attrs:{to:t.path}},[a("g-image",{staticClass:"w-6 h-6 rounded-full bg-gray-200",attrs:{src:t.image,alt:t.name}})],1)],1)})),0),a("span",{staticClass:"text-xs uppercase text-gray-700"},[t._v(t._s(t.record.timeToRead)+" min read")])])])])}),[],!1,null,null,null);e.a=o.exports}}]);