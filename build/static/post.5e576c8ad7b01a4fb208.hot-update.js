webpackHotUpdate("post",{

/***/ "./packages/twentytwenty-theme/src/components/post/post.js":
/*!*****************************************************************!*\
  !*** ./packages/twentytwenty-theme/src/components/post/post.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _featured_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./featured-media */ \"./packages/twentytwenty-theme/src/components/post/featured-media.js\");\n/* harmony import */ var _post_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-item */ \"./packages/twentytwenty-theme/src/components/post/post-item.js\");\n/* harmony import */ var _post_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-categories */ \"./packages/twentytwenty-theme/src/components/post/post-categories.js\");\n/* harmony import */ var _post_meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-meta */ \"./packages/twentytwenty-theme/src/components/post/post-meta.js\");\n/* harmony import */ var _post_tags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-tags */ \"./packages/twentytwenty-theme/src/components/post/post-tags.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var Post=(_ref)=>{var{state,actions,libraries}=_ref;// Get information about the current URL.\nvar data=state.source.get(state.router.link);// Get the data of the post.\nvar post=state.source[data.type][data.id];// Get the data of the author.\n// const author = state.source.author[post.author];\n// Get a human readable date.\n// const date = new Date(post.date);\n// Get the html2react component.\nvar Html2React=libraries.html2react.Component;// Get all categories\nvar allCategories=state.source.category;/**\n   * The item's categories is an array of each category id\n   * So, we'll look up the details of each category in allCategories\n   */var categories=post.categories&&post.categories.map(catId=>allCategories[catId]);// Get all tags\nvar allTags=state.source.tag;/**\n   * The item's categories is an array of each tag id\n   * So, we'll look up the details of each tag in allTags\n   */var tags=post.tags&&post.tags.map(tagId=>allTags[tagId]);/**\n   * Once the post has loaded in the DOM, prefetch both the\n   * home posts and the list component so if the user visits\n   * the home page, everything is ready and it loads instantly.\n   */Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(()=>{actions.source.fetch(\"/\");},[]);// Load the post, but only if the data is ready.\nreturn data.isReady?Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(PostArticle,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(Header,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(_post_item__WEBPACK_IMPORTED_MODULE_4__[\"SectionContainer\"],null,post.categories&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(_post_categories__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{categories:categories}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(_post_item__WEBPACK_IMPORTED_MODULE_4__[\"PostTitle\"],{as:\"h1\",className:\"heading-size-1\",dangerouslySetInnerHTML:{__html:post.title.rendered}}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(_post_meta__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{item:post}))),state.theme.featuredMedia.showOnPost&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(FeaturedImage,{id:post.featured_media,isSinglePost:true}),post.content&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(_post_item__WEBPACK_IMPORTED_MODULE_4__[\"PostInner\"],{size:\"thin\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(_post_item__WEBPACK_IMPORTED_MODULE_4__[\"EntryContent\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(Html2React,{html:post.content.rendered})),post.tags&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__[\"jsx\"])(_post_tags__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{tags:tags}))):null;};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Post));var Header=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_post_item__WEBPACK_IMPORTED_MODULE_4__[\"PostHeader\"],{target:\"e62fgu20\",label:\"Header\"})( false?undefined:{name:\"1fn4npt\",styles:\"background-color:#fff;margin:0;padding:4rem 0;@media (min-width:700px){padding:8rem 0;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL21lbnRhbC1oZWxwL3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0L3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUdpQyIsImZpbGUiOiIvVXNlcnMvbWF0dGhld2JlcnQvRGVza3RvcC9tZW50YWwtaGVscC9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmVhdHVyZWRNZWRpYSBmcm9tIFwiLi9mZWF0dXJlZC1tZWRpYVwiO1xuaW1wb3J0IHtcbiAgRW50cnlDb250ZW50LFxuICBQb3N0IGFzIF9Qb3N0LFxuICBQb3N0SGVhZGVyLFxuICBQb3N0SW5uZXIsXG4gIFBvc3RUaXRsZSxcbiAgU2VjdGlvbkNvbnRhaW5lclxufSBmcm9tIFwiLi9wb3N0LWl0ZW1cIjtcbmltcG9ydCBQb3N0Q2F0ZWdvcmllcyBmcm9tIFwiLi9wb3N0LWNhdGVnb3JpZXNcIjtcbmltcG9ydCBQb3N0TWV0YSBmcm9tIFwiLi9wb3N0LW1ldGFcIjtcbmltcG9ydCBQb3N0VGFncyBmcm9tIFwiLi9wb3N0LXRhZ3NcIjtcblxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBhY3Rpb25zLCBsaWJyYXJpZXMgfSkgPT4ge1xuICAvLyBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgVVJMLlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgcG9zdC5cbiAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdO1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGF1dGhvci5cbiAgLy8gY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIC8vIEdldCBhIGh1bWFuIHJlYWRhYmxlIGRhdGUuXG4gIC8vIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwb3N0LmRhdGUpO1xuXG4gIC8vIEdldCB0aGUgaHRtbDJyZWFjdCBjb21wb25lbnQuXG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG5cbiAgLy8gR2V0IGFsbCBjYXRlZ29yaWVzXG4gIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBzdGF0ZS5zb3VyY2UuY2F0ZWdvcnk7XG4gIC8qKlxuICAgKiBUaGUgaXRlbSdzIGNhdGVnb3JpZXMgaXMgYW4gYXJyYXkgb2YgZWFjaCBjYXRlZ29yeSBpZFxuICAgKiBTbywgd2UnbGwgbG9vayB1cCB0aGUgZGV0YWlscyBvZiBlYWNoIGNhdGVnb3J5IGluIGFsbENhdGVnb3JpZXNcbiAgICovXG4gIGNvbnN0IGNhdGVnb3JpZXMgPVxuICAgIHBvc3QuY2F0ZWdvcmllcyAmJiBwb3N0LmNhdGVnb3JpZXMubWFwKGNhdElkID0+IGFsbENhdGVnb3JpZXNbY2F0SWRdKTtcblxuICAvLyBHZXQgYWxsIHRhZ3NcbiAgY29uc3QgYWxsVGFncyA9IHN0YXRlLnNvdXJjZS50YWc7XG4gIC8qKlxuICAgKiBUaGUgaXRlbSdzIGNhdGVnb3JpZXMgaXMgYW4gYXJyYXkgb2YgZWFjaCB0YWcgaWRcbiAgICogU28sIHdlJ2xsIGxvb2sgdXAgdGhlIGRldGFpbHMgb2YgZWFjaCB0YWcgaW4gYWxsVGFnc1xuICAgKi9cbiAgY29uc3QgdGFncyA9IHBvc3QudGFncyAmJiBwb3N0LnRhZ3MubWFwKHRhZ0lkID0+IGFsbFRhZ3NbdGFnSWRdKTtcblxuICAvKipcbiAgICogT25jZSB0aGUgcG9zdCBoYXMgbG9hZGVkIGluIHRoZSBET00sIHByZWZldGNoIGJvdGggdGhlXG4gICAqIGhvbWUgcG9zdHMgYW5kIHRoZSBsaXN0IGNvbXBvbmVudCBzbyBpZiB0aGUgdXNlciB2aXNpdHNcbiAgICogdGhlIGhvbWUgcGFnZSwgZXZlcnl0aGluZyBpcyByZWFkeSBhbmQgaXQgbG9hZHMgaW5zdGFudGx5LlxuICAgKi9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9cIik7XG4gIH0sIFtdKTtcblxuICAvLyBMb2FkIHRoZSBwb3N0LCBidXQgb25seSBpZiB0aGUgZGF0YSBpcyByZWFkeS5cbiAgcmV0dXJuIGRhdGEuaXNSZWFkeSA/IChcbiAgICA8UG9zdEFydGljbGU+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8U2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgICB7LyogSWYgdGhlIHBvc3QgaGFzIGNhdGVnb3JpZXMsIHJlbmRlciB0aGUgY2F0ZWdvcmllcyAqL31cbiAgICAgICAgICB7cG9zdC5jYXRlZ29yaWVzICYmIDxQb3N0Q2F0ZWdvcmllcyBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPn1cblxuICAgICAgICAgIDxQb3N0VGl0bGVcbiAgICAgICAgICAgIGFzPVwiaDFcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGluZy1zaXplLTFcIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LnRpdGxlLnJlbmRlcmVkIH19XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIHsvKiBUaGUgcG9zdCdzIG1ldGFkYXRhIGxpa2UgYXV0aG9yLCBwdWJsaXNoIGRhdGUsIGFuZCBjb21tZW50cyAqL31cbiAgICAgICAgICA8UG9zdE1ldGEgaXRlbT17cG9zdH0gLz5cbiAgICAgICAgPC9TZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPC9IZWFkZXI+XG5cbiAgICAgIHsvKlxuICAgICAgICogSWYgdGhlIHdhbnQgdG8gc2hvdyBmZWF0dXJlZCBtZWRpYSBpbiB0aGVcbiAgICAgICAqIGxpc3Qgb2YgZmVhdHVyZWQgcG9zdHMsIHdlIHJlbmRlciB0aGUgbWVkaWEuXG4gICAgICAgKi99XG4gICAgICB7c3RhdGUudGhlbWUuZmVhdHVyZWRNZWRpYS5zaG93T25Qb3N0ICYmIChcbiAgICAgICAgPEZlYXR1cmVkSW1hZ2UgaWQ9e3Bvc3QuZmVhdHVyZWRfbWVkaWF9IGlzU2luZ2xlUG9zdD17dHJ1ZX0gLz5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBJZiB0aGUgcG9zdCBoYXMgYW4gZXhjZXJwdCAoc2hvcnQgc3VtbWFyeSB0ZXh0KSwgd2UgcmVuZGVyIGl0ICovfVxuICAgICAge3Bvc3QuY29udGVudCAmJiAoXG4gICAgICAgIDxQb3N0SW5uZXIgc2l6ZT1cInRoaW5cIj5cbiAgICAgICAgICA8RW50cnlDb250ZW50PlxuICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cG9zdC5jb250ZW50LnJlbmRlcmVkfSAvPlxuICAgICAgICAgIDwvRW50cnlDb250ZW50PlxuICAgICAgICAgIHsvKiBJZiB0aGUgcG9zdCBoYXMgdGFncywgcmVuZGVyIGl0ICovfVxuICAgICAgICAgIHtwb3N0LnRhZ3MgJiYgPFBvc3RUYWdzIHRhZ3M9e3RhZ3N9IC8+fVxuICAgICAgICA8L1Bvc3RJbm5lcj5cbiAgICAgICl9XG4gICAgPC9Qb3N0QXJ0aWNsZT5cbiAgKSA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3QpO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQoUG9zdEhlYWRlcilgXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNHJlbSAwO1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICBwYWRkaW5nOiA4cmVtIDA7XG4gIH1cbmA7XG5cbmNvbnN0IFBvc3RBcnRpY2xlID0gc3R5bGVkKF9Qb3N0KWBcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5gO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gc3R5bGVkKEZlYXR1cmVkTWVkaWEpYFxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICA+IGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gIH1cbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var PostArticle=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_post_item__WEBPACK_IMPORTED_MODULE_4__[\"Post\"],{target:\"e62fgu21\",label:\"PostArticle\"})( false?undefined:{name:\"zvb1r2\",styles:\"padding-top:0 !important;background-color:white;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL21lbnRhbC1oZWxwL3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0L3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEdpQyIsImZpbGUiOiIvVXNlcnMvbWF0dGhld2JlcnQvRGVza3RvcC9tZW50YWwtaGVscC9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmVhdHVyZWRNZWRpYSBmcm9tIFwiLi9mZWF0dXJlZC1tZWRpYVwiO1xuaW1wb3J0IHtcbiAgRW50cnlDb250ZW50LFxuICBQb3N0IGFzIF9Qb3N0LFxuICBQb3N0SGVhZGVyLFxuICBQb3N0SW5uZXIsXG4gIFBvc3RUaXRsZSxcbiAgU2VjdGlvbkNvbnRhaW5lclxufSBmcm9tIFwiLi9wb3N0LWl0ZW1cIjtcbmltcG9ydCBQb3N0Q2F0ZWdvcmllcyBmcm9tIFwiLi9wb3N0LWNhdGVnb3JpZXNcIjtcbmltcG9ydCBQb3N0TWV0YSBmcm9tIFwiLi9wb3N0LW1ldGFcIjtcbmltcG9ydCBQb3N0VGFncyBmcm9tIFwiLi9wb3N0LXRhZ3NcIjtcblxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBhY3Rpb25zLCBsaWJyYXJpZXMgfSkgPT4ge1xuICAvLyBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgVVJMLlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgcG9zdC5cbiAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdO1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGF1dGhvci5cbiAgLy8gY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIC8vIEdldCBhIGh1bWFuIHJlYWRhYmxlIGRhdGUuXG4gIC8vIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwb3N0LmRhdGUpO1xuXG4gIC8vIEdldCB0aGUgaHRtbDJyZWFjdCBjb21wb25lbnQuXG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG5cbiAgLy8gR2V0IGFsbCBjYXRlZ29yaWVzXG4gIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBzdGF0ZS5zb3VyY2UuY2F0ZWdvcnk7XG4gIC8qKlxuICAgKiBUaGUgaXRlbSdzIGNhdGVnb3JpZXMgaXMgYW4gYXJyYXkgb2YgZWFjaCBjYXRlZ29yeSBpZFxuICAgKiBTbywgd2UnbGwgbG9vayB1cCB0aGUgZGV0YWlscyBvZiBlYWNoIGNhdGVnb3J5IGluIGFsbENhdGVnb3JpZXNcbiAgICovXG4gIGNvbnN0IGNhdGVnb3JpZXMgPVxuICAgIHBvc3QuY2F0ZWdvcmllcyAmJiBwb3N0LmNhdGVnb3JpZXMubWFwKGNhdElkID0+IGFsbENhdGVnb3JpZXNbY2F0SWRdKTtcblxuICAvLyBHZXQgYWxsIHRhZ3NcbiAgY29uc3QgYWxsVGFncyA9IHN0YXRlLnNvdXJjZS50YWc7XG4gIC8qKlxuICAgKiBUaGUgaXRlbSdzIGNhdGVnb3JpZXMgaXMgYW4gYXJyYXkgb2YgZWFjaCB0YWcgaWRcbiAgICogU28sIHdlJ2xsIGxvb2sgdXAgdGhlIGRldGFpbHMgb2YgZWFjaCB0YWcgaW4gYWxsVGFnc1xuICAgKi9cbiAgY29uc3QgdGFncyA9IHBvc3QudGFncyAmJiBwb3N0LnRhZ3MubWFwKHRhZ0lkID0+IGFsbFRhZ3NbdGFnSWRdKTtcblxuICAvKipcbiAgICogT25jZSB0aGUgcG9zdCBoYXMgbG9hZGVkIGluIHRoZSBET00sIHByZWZldGNoIGJvdGggdGhlXG4gICAqIGhvbWUgcG9zdHMgYW5kIHRoZSBsaXN0IGNvbXBvbmVudCBzbyBpZiB0aGUgdXNlciB2aXNpdHNcbiAgICogdGhlIGhvbWUgcGFnZSwgZXZlcnl0aGluZyBpcyByZWFkeSBhbmQgaXQgbG9hZHMgaW5zdGFudGx5LlxuICAgKi9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9cIik7XG4gIH0sIFtdKTtcblxuICAvLyBMb2FkIHRoZSBwb3N0LCBidXQgb25seSBpZiB0aGUgZGF0YSBpcyByZWFkeS5cbiAgcmV0dXJuIGRhdGEuaXNSZWFkeSA/IChcbiAgICA8UG9zdEFydGljbGU+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8U2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgICB7LyogSWYgdGhlIHBvc3QgaGFzIGNhdGVnb3JpZXMsIHJlbmRlciB0aGUgY2F0ZWdvcmllcyAqL31cbiAgICAgICAgICB7cG9zdC5jYXRlZ29yaWVzICYmIDxQb3N0Q2F0ZWdvcmllcyBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPn1cblxuICAgICAgICAgIDxQb3N0VGl0bGVcbiAgICAgICAgICAgIGFzPVwiaDFcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGluZy1zaXplLTFcIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LnRpdGxlLnJlbmRlcmVkIH19XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIHsvKiBUaGUgcG9zdCdzIG1ldGFkYXRhIGxpa2UgYXV0aG9yLCBwdWJsaXNoIGRhdGUsIGFuZCBjb21tZW50cyAqL31cbiAgICAgICAgICA8UG9zdE1ldGEgaXRlbT17cG9zdH0gLz5cbiAgICAgICAgPC9TZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPC9IZWFkZXI+XG5cbiAgICAgIHsvKlxuICAgICAgICogSWYgdGhlIHdhbnQgdG8gc2hvdyBmZWF0dXJlZCBtZWRpYSBpbiB0aGVcbiAgICAgICAqIGxpc3Qgb2YgZmVhdHVyZWQgcG9zdHMsIHdlIHJlbmRlciB0aGUgbWVkaWEuXG4gICAgICAgKi99XG4gICAgICB7c3RhdGUudGhlbWUuZmVhdHVyZWRNZWRpYS5zaG93T25Qb3N0ICYmIChcbiAgICAgICAgPEZlYXR1cmVkSW1hZ2UgaWQ9e3Bvc3QuZmVhdHVyZWRfbWVkaWF9IGlzU2luZ2xlUG9zdD17dHJ1ZX0gLz5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBJZiB0aGUgcG9zdCBoYXMgYW4gZXhjZXJwdCAoc2hvcnQgc3VtbWFyeSB0ZXh0KSwgd2UgcmVuZGVyIGl0ICovfVxuICAgICAge3Bvc3QuY29udGVudCAmJiAoXG4gICAgICAgIDxQb3N0SW5uZXIgc2l6ZT1cInRoaW5cIj5cbiAgICAgICAgICA8RW50cnlDb250ZW50PlxuICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cG9zdC5jb250ZW50LnJlbmRlcmVkfSAvPlxuICAgICAgICAgIDwvRW50cnlDb250ZW50PlxuICAgICAgICAgIHsvKiBJZiB0aGUgcG9zdCBoYXMgdGFncywgcmVuZGVyIGl0ICovfVxuICAgICAgICAgIHtwb3N0LnRhZ3MgJiYgPFBvc3RUYWdzIHRhZ3M9e3RhZ3N9IC8+fVxuICAgICAgICA8L1Bvc3RJbm5lcj5cbiAgICAgICl9XG4gICAgPC9Qb3N0QXJ0aWNsZT5cbiAgKSA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3QpO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQoUG9zdEhlYWRlcilgXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNHJlbSAwO1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICBwYWRkaW5nOiA4cmVtIDA7XG4gIH1cbmA7XG5cbmNvbnN0IFBvc3RBcnRpY2xlID0gc3R5bGVkKF9Qb3N0KWBcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5gO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gc3R5bGVkKEZlYXR1cmVkTWVkaWEpYFxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICA+IGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gIH1cbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var FeaturedImage=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_featured_media__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{target:\"e62fgu22\",label:\"FeaturedImage\"})( false?undefined:{name:\"6a6nzn\",styles:\"margin-top:0 !important;position:relative;> div{position:relative;}&:before{background:#fff;content:\\\"\\\";display:block;position:absolute;bottom:50%;left:0;right:0;top:0;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL21lbnRhbC1oZWxwL3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0L3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0cyQyIsImZpbGUiOiIvVXNlcnMvbWF0dGhld2JlcnQvRGVza3RvcC9tZW50YWwtaGVscC9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmVhdHVyZWRNZWRpYSBmcm9tIFwiLi9mZWF0dXJlZC1tZWRpYVwiO1xuaW1wb3J0IHtcbiAgRW50cnlDb250ZW50LFxuICBQb3N0IGFzIF9Qb3N0LFxuICBQb3N0SGVhZGVyLFxuICBQb3N0SW5uZXIsXG4gIFBvc3RUaXRsZSxcbiAgU2VjdGlvbkNvbnRhaW5lclxufSBmcm9tIFwiLi9wb3N0LWl0ZW1cIjtcbmltcG9ydCBQb3N0Q2F0ZWdvcmllcyBmcm9tIFwiLi9wb3N0LWNhdGVnb3JpZXNcIjtcbmltcG9ydCBQb3N0TWV0YSBmcm9tIFwiLi9wb3N0LW1ldGFcIjtcbmltcG9ydCBQb3N0VGFncyBmcm9tIFwiLi9wb3N0LXRhZ3NcIjtcblxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBhY3Rpb25zLCBsaWJyYXJpZXMgfSkgPT4ge1xuICAvLyBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgVVJMLlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgcG9zdC5cbiAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdO1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGF1dGhvci5cbiAgLy8gY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIC8vIEdldCBhIGh1bWFuIHJlYWRhYmxlIGRhdGUuXG4gIC8vIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwb3N0LmRhdGUpO1xuXG4gIC8vIEdldCB0aGUgaHRtbDJyZWFjdCBjb21wb25lbnQuXG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG5cbiAgLy8gR2V0IGFsbCBjYXRlZ29yaWVzXG4gIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBzdGF0ZS5zb3VyY2UuY2F0ZWdvcnk7XG4gIC8qKlxuICAgKiBUaGUgaXRlbSdzIGNhdGVnb3JpZXMgaXMgYW4gYXJyYXkgb2YgZWFjaCBjYXRlZ29yeSBpZFxuICAgKiBTbywgd2UnbGwgbG9vayB1cCB0aGUgZGV0YWlscyBvZiBlYWNoIGNhdGVnb3J5IGluIGFsbENhdGVnb3JpZXNcbiAgICovXG4gIGNvbnN0IGNhdGVnb3JpZXMgPVxuICAgIHBvc3QuY2F0ZWdvcmllcyAmJiBwb3N0LmNhdGVnb3JpZXMubWFwKGNhdElkID0+IGFsbENhdGVnb3JpZXNbY2F0SWRdKTtcblxuICAvLyBHZXQgYWxsIHRhZ3NcbiAgY29uc3QgYWxsVGFncyA9IHN0YXRlLnNvdXJjZS50YWc7XG4gIC8qKlxuICAgKiBUaGUgaXRlbSdzIGNhdGVnb3JpZXMgaXMgYW4gYXJyYXkgb2YgZWFjaCB0YWcgaWRcbiAgICogU28sIHdlJ2xsIGxvb2sgdXAgdGhlIGRldGFpbHMgb2YgZWFjaCB0YWcgaW4gYWxsVGFnc1xuICAgKi9cbiAgY29uc3QgdGFncyA9IHBvc3QudGFncyAmJiBwb3N0LnRhZ3MubWFwKHRhZ0lkID0+IGFsbFRhZ3NbdGFnSWRdKTtcblxuICAvKipcbiAgICogT25jZSB0aGUgcG9zdCBoYXMgbG9hZGVkIGluIHRoZSBET00sIHByZWZldGNoIGJvdGggdGhlXG4gICAqIGhvbWUgcG9zdHMgYW5kIHRoZSBsaXN0IGNvbXBvbmVudCBzbyBpZiB0aGUgdXNlciB2aXNpdHNcbiAgICogdGhlIGhvbWUgcGFnZSwgZXZlcnl0aGluZyBpcyByZWFkeSBhbmQgaXQgbG9hZHMgaW5zdGFudGx5LlxuICAgKi9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9cIik7XG4gIH0sIFtdKTtcblxuICAvLyBMb2FkIHRoZSBwb3N0LCBidXQgb25seSBpZiB0aGUgZGF0YSBpcyByZWFkeS5cbiAgcmV0dXJuIGRhdGEuaXNSZWFkeSA/IChcbiAgICA8UG9zdEFydGljbGU+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8U2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgICB7LyogSWYgdGhlIHBvc3QgaGFzIGNhdGVnb3JpZXMsIHJlbmRlciB0aGUgY2F0ZWdvcmllcyAqL31cbiAgICAgICAgICB7cG9zdC5jYXRlZ29yaWVzICYmIDxQb3N0Q2F0ZWdvcmllcyBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPn1cblxuICAgICAgICAgIDxQb3N0VGl0bGVcbiAgICAgICAgICAgIGFzPVwiaDFcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGluZy1zaXplLTFcIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LnRpdGxlLnJlbmRlcmVkIH19XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIHsvKiBUaGUgcG9zdCdzIG1ldGFkYXRhIGxpa2UgYXV0aG9yLCBwdWJsaXNoIGRhdGUsIGFuZCBjb21tZW50cyAqL31cbiAgICAgICAgICA8UG9zdE1ldGEgaXRlbT17cG9zdH0gLz5cbiAgICAgICAgPC9TZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPC9IZWFkZXI+XG5cbiAgICAgIHsvKlxuICAgICAgICogSWYgdGhlIHdhbnQgdG8gc2hvdyBmZWF0dXJlZCBtZWRpYSBpbiB0aGVcbiAgICAgICAqIGxpc3Qgb2YgZmVhdHVyZWQgcG9zdHMsIHdlIHJlbmRlciB0aGUgbWVkaWEuXG4gICAgICAgKi99XG4gICAgICB7c3RhdGUudGhlbWUuZmVhdHVyZWRNZWRpYS5zaG93T25Qb3N0ICYmIChcbiAgICAgICAgPEZlYXR1cmVkSW1hZ2UgaWQ9e3Bvc3QuZmVhdHVyZWRfbWVkaWF9IGlzU2luZ2xlUG9zdD17dHJ1ZX0gLz5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBJZiB0aGUgcG9zdCBoYXMgYW4gZXhjZXJwdCAoc2hvcnQgc3VtbWFyeSB0ZXh0KSwgd2UgcmVuZGVyIGl0ICovfVxuICAgICAge3Bvc3QuY29udGVudCAmJiAoXG4gICAgICAgIDxQb3N0SW5uZXIgc2l6ZT1cInRoaW5cIj5cbiAgICAgICAgICA8RW50cnlDb250ZW50PlxuICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cG9zdC5jb250ZW50LnJlbmRlcmVkfSAvPlxuICAgICAgICAgIDwvRW50cnlDb250ZW50PlxuICAgICAgICAgIHsvKiBJZiB0aGUgcG9zdCBoYXMgdGFncywgcmVuZGVyIGl0ICovfVxuICAgICAgICAgIHtwb3N0LnRhZ3MgJiYgPFBvc3RUYWdzIHRhZ3M9e3RhZ3N9IC8+fVxuICAgICAgICA8L1Bvc3RJbm5lcj5cbiAgICAgICl9XG4gICAgPC9Qb3N0QXJ0aWNsZT5cbiAgKSA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3QpO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQoUG9zdEhlYWRlcilgXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNHJlbSAwO1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICBwYWRkaW5nOiA4cmVtIDA7XG4gIH1cbmA7XG5cbmNvbnN0IFBvc3RBcnRpY2xlID0gc3R5bGVkKF9Qb3N0KWBcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5gO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gc3R5bGVkKEZlYXR1cmVkTWVkaWEpYFxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICA+IGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gIH1cbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC9wb3N0LmpzPzU2ZWEiXSwibmFtZXMiOlsiUG9zdCIsInN0YXRlIiwiYWN0aW9ucyIsImxpYnJhcmllcyIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwicG9zdCIsInR5cGUiLCJpZCIsIkh0bWwyUmVhY3QiLCJodG1sMnJlYWN0IiwiQ29tcG9uZW50IiwiYWxsQ2F0ZWdvcmllcyIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsIm1hcCIsImNhdElkIiwiYWxsVGFncyIsInRhZyIsInRhZ3MiLCJ0YWdJZCIsInVzZUVmZmVjdCIsImZldGNoIiwiaXNSZWFkeSIsIl9faHRtbCIsInRpdGxlIiwicmVuZGVyZWQiLCJ0aGVtZSIsImZlYXR1cmVkTWVkaWEiLCJzaG93T25Qb3N0IiwiZmVhdHVyZWRfbWVkaWEiLCJjb250ZW50IiwiY29ubmVjdCIsIkhlYWRlciIsIlBvc3RIZWFkZXIiLCJQb3N0QXJ0aWNsZSIsIl9Qb3N0IiwiRmVhdHVyZWRJbWFnZSIsIkZlYXR1cmVkTWVkaWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztxUkFlQSxHQUFNQSxLQUFJLENBQUcsUUFBbUMsSUFBbEMsQ0FBRUMsS0FBRixDQUFTQyxPQUFULENBQWtCQyxTQUFsQixDQUFrQyxNQUM5QztBQUNBLEdBQU1DLEtBQUksQ0FBR0gsS0FBSyxDQUFDSSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJMLEtBQUssQ0FBQ00sTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0E7QUFDQSxHQUFNQyxLQUFJLENBQUdSLEtBQUssQ0FBQ0ksTUFBTixDQUFhRCxJQUFJLENBQUNNLElBQWxCLEVBQXdCTixJQUFJLENBQUNPLEVBQTdCLENBQWIsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsR0FBTUMsV0FBVSxDQUFHVCxTQUFTLENBQUNVLFVBQVYsQ0FBcUJDLFNBQXhDLENBRUE7QUFDQSxHQUFNQyxjQUFhLENBQUdkLEtBQUssQ0FBQ0ksTUFBTixDQUFhVyxRQUFuQyxDQUNBOzs7S0FJQSxHQUFNQyxXQUFVLENBQ2RSLElBQUksQ0FBQ1EsVUFBTCxFQUFtQlIsSUFBSSxDQUFDUSxVQUFMLENBQWdCQyxHQUFoQixDQUFvQkMsS0FBSyxFQUFJSixhQUFhLENBQUNJLEtBQUQsQ0FBMUMsQ0FEckIsQ0FHQTtBQUNBLEdBQU1DLFFBQU8sQ0FBR25CLEtBQUssQ0FBQ0ksTUFBTixDQUFhZ0IsR0FBN0IsQ0FDQTs7O0tBSUEsR0FBTUMsS0FBSSxDQUFHYixJQUFJLENBQUNhLElBQUwsRUFBYWIsSUFBSSxDQUFDYSxJQUFMLENBQVVKLEdBQVYsQ0FBY0ssS0FBSyxFQUFJSCxPQUFPLENBQUNHLEtBQUQsQ0FBOUIsQ0FBMUIsQ0FFQTs7OztLQUtBQyx1REFBUyxDQUFDLElBQU0sQ0FDZHRCLE9BQU8sQ0FBQ0csTUFBUixDQUFlb0IsS0FBZixDQUFxQixHQUFyQixFQUNELENBRlEsQ0FFTixFQUZNLENBQVQsQ0FJQTtBQUNBLE1BQU9yQixLQUFJLENBQUNzQixPQUFMLENBQ0wsMERBQUMsV0FBRCxNQUNFLDBEQUFDLE1BQUQsTUFDRSwwREFBQywyREFBRCxNQUVHakIsSUFBSSxDQUFDUSxVQUFMLEVBQW1CLDBEQUFDLHdEQUFELEVBQWdCLFVBQVUsQ0FBRUEsVUFBNUIsRUFGdEIsQ0FJRSwwREFBQyxvREFBRCxFQUNFLEVBQUUsQ0FBQyxJQURMLENBRUUsU0FBUyxDQUFDLGdCQUZaLENBR0UsdUJBQXVCLENBQUUsQ0FBRVUsTUFBTSxDQUFFbEIsSUFBSSxDQUFDbUIsS0FBTCxDQUFXQyxRQUFyQixDQUgzQixFQUpGLENBV0UsMERBQUMsa0RBQUQsRUFBVSxJQUFJLENBQUVwQixJQUFoQixFQVhGLENBREYsQ0FERixDQXFCR1IsS0FBSyxDQUFDNkIsS0FBTixDQUFZQyxhQUFaLENBQTBCQyxVQUExQixFQUNDLDBEQUFDLGFBQUQsRUFBZSxFQUFFLENBQUV2QixJQUFJLENBQUN3QixjQUF4QixDQUF3QyxZQUFZLENBQUUsSUFBdEQsRUF0QkosQ0EwQkd4QixJQUFJLENBQUN5QixPQUFMLEVBQ0MsMERBQUMsb0RBQUQsRUFBVyxJQUFJLENBQUMsTUFBaEIsRUFDRSwwREFBQyx1REFBRCxNQUNFLDBEQUFDLFVBQUQsRUFBWSxJQUFJLENBQUV6QixJQUFJLENBQUN5QixPQUFMLENBQWFMLFFBQS9CLEVBREYsQ0FERixDQUtHcEIsSUFBSSxDQUFDYSxJQUFMLEVBQWEsMERBQUMsa0RBQUQsRUFBVSxJQUFJLENBQUVBLElBQWhCLEVBTGhCLENBM0JKLENBREssQ0FxQ0gsSUFyQ0osQ0FzQ0QsQ0E5RUQsQ0FnRmVhLHVIQUFPLENBQUNuQyxJQUFELENBQXRCLEVBRUEsR0FBTW9DLE9BQU0sQ0FBRyxrRkFBT0MscURBQVAsb0NBQUgsbzNLQUFaLENBU0EsR0FBTUMsWUFBVyxDQUFHLGtGQUFPQywrQ0FBUCx5Q0FBSCw0MEtBQWpCLENBS0EsR0FBTUMsY0FBYSxDQUFHLGtGQUFPQyx1REFBUCwyQ0FBSCxzOEtBQW5CIiwiZmlsZSI6Ii4vcGFja2FnZXMvdHdlbnR5dHdlbnR5LXRoZW1lL3NyYy9jb21wb25lbnRzL3Bvc3QvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4vZmVhdHVyZWQtbWVkaWFcIjtcbmltcG9ydCB7XG4gIEVudHJ5Q29udGVudCxcbiAgUG9zdCBhcyBfUG9zdCxcbiAgUG9zdEhlYWRlcixcbiAgUG9zdElubmVyLFxuICBQb3N0VGl0bGUsXG4gIFNlY3Rpb25Db250YWluZXJcbn0gZnJvbSBcIi4vcG9zdC1pdGVtXCI7XG5pbXBvcnQgUG9zdENhdGVnb3JpZXMgZnJvbSBcIi4vcG9zdC1jYXRlZ29yaWVzXCI7XG5pbXBvcnQgUG9zdE1ldGEgZnJvbSBcIi4vcG9zdC1tZXRhXCI7XG5pbXBvcnQgUG9zdFRhZ3MgZnJvbSBcIi4vcG9zdC10YWdzXCI7XG5cbmNvbnN0IFBvc3QgPSAoeyBzdGF0ZSwgYWN0aW9ucywgbGlicmFyaWVzIH0pID0+IHtcbiAgLy8gR2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IFVSTC5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIHBvc3QuXG4gIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXTtcbiAgLy8gR2V0IHRoZSBkYXRhIG9mIHRoZSBhdXRob3IuXG4gIC8vIGNvbnN0IGF1dGhvciA9IHN0YXRlLnNvdXJjZS5hdXRob3JbcG9zdC5hdXRob3JdO1xuICAvLyBHZXQgYSBodW1hbiByZWFkYWJsZSBkYXRlLlxuICAvLyBjb25zdCBkYXRlID0gbmV3IERhdGUocG9zdC5kYXRlKTtcblxuICAvLyBHZXQgdGhlIGh0bWwycmVhY3QgY29tcG9uZW50LlxuICBjb25zdCBIdG1sMlJlYWN0ID0gbGlicmFyaWVzLmh0bWwycmVhY3QuQ29tcG9uZW50O1xuXG4gIC8vIEdldCBhbGwgY2F0ZWdvcmllc1xuICBjb25zdCBhbGxDYXRlZ29yaWVzID0gc3RhdGUuc291cmNlLmNhdGVnb3J5O1xuICAvKipcbiAgICogVGhlIGl0ZW0ncyBjYXRlZ29yaWVzIGlzIGFuIGFycmF5IG9mIGVhY2ggY2F0ZWdvcnkgaWRcbiAgICogU28sIHdlJ2xsIGxvb2sgdXAgdGhlIGRldGFpbHMgb2YgZWFjaCBjYXRlZ29yeSBpbiBhbGxDYXRlZ29yaWVzXG4gICAqL1xuICBjb25zdCBjYXRlZ29yaWVzID1cbiAgICBwb3N0LmNhdGVnb3JpZXMgJiYgcG9zdC5jYXRlZ29yaWVzLm1hcChjYXRJZCA9PiBhbGxDYXRlZ29yaWVzW2NhdElkXSk7XG5cbiAgLy8gR2V0IGFsbCB0YWdzXG4gIGNvbnN0IGFsbFRhZ3MgPSBzdGF0ZS5zb3VyY2UudGFnO1xuICAvKipcbiAgICogVGhlIGl0ZW0ncyBjYXRlZ29yaWVzIGlzIGFuIGFycmF5IG9mIGVhY2ggdGFnIGlkXG4gICAqIFNvLCB3ZSdsbCBsb29rIHVwIHRoZSBkZXRhaWxzIG9mIGVhY2ggdGFnIGluIGFsbFRhZ3NcbiAgICovXG4gIGNvbnN0IHRhZ3MgPSBwb3N0LnRhZ3MgJiYgcG9zdC50YWdzLm1hcCh0YWdJZCA9PiBhbGxUYWdzW3RhZ0lkXSk7XG5cbiAgLyoqXG4gICAqIE9uY2UgdGhlIHBvc3QgaGFzIGxvYWRlZCBpbiB0aGUgRE9NLCBwcmVmZXRjaCBib3RoIHRoZVxuICAgKiBob21lIHBvc3RzIGFuZCB0aGUgbGlzdCBjb21wb25lbnQgc28gaWYgdGhlIHVzZXIgdmlzaXRzXG4gICAqIHRoZSBob21lIHBhZ2UsIGV2ZXJ5dGhpbmcgaXMgcmVhZHkgYW5kIGl0IGxvYWRzIGluc3RhbnRseS5cbiAgICovXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYWN0aW9ucy5zb3VyY2UuZmV0Y2goXCIvXCIpO1xuICB9LCBbXSk7XG5cbiAgLy8gTG9hZCB0aGUgcG9zdCwgYnV0IG9ubHkgaWYgdGhlIGRhdGEgaXMgcmVhZHkuXG4gIHJldHVybiBkYXRhLmlzUmVhZHkgPyAoXG4gICAgPFBvc3RBcnRpY2xlPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPFNlY3Rpb25Db250YWluZXI+XG4gICAgICAgICAgey8qIElmIHRoZSBwb3N0IGhhcyBjYXRlZ29yaWVzLCByZW5kZXIgdGhlIGNhdGVnb3JpZXMgKi99XG4gICAgICAgICAge3Bvc3QuY2F0ZWdvcmllcyAmJiA8UG9zdENhdGVnb3JpZXMgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gLz59XG5cbiAgICAgICAgICA8UG9zdFRpdGxlXG4gICAgICAgICAgICBhcz1cImgxXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRpbmctc2l6ZS0xXCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC50aXRsZS5yZW5kZXJlZCB9fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7LyogVGhlIHBvc3QncyBtZXRhZGF0YSBsaWtlIGF1dGhvciwgcHVibGlzaCBkYXRlLCBhbmQgY29tbWVudHMgKi99XG4gICAgICAgICAgPFBvc3RNZXRhIGl0ZW09e3Bvc3R9IC8+XG4gICAgICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgIDwvSGVhZGVyPlxuXG4gICAgICB7LypcbiAgICAgICAqIElmIHRoZSB3YW50IHRvIHNob3cgZmVhdHVyZWQgbWVkaWEgaW4gdGhlXG4gICAgICAgKiBsaXN0IG9mIGZlYXR1cmVkIHBvc3RzLCB3ZSByZW5kZXIgdGhlIG1lZGlhLlxuICAgICAgICovfVxuICAgICAge3N0YXRlLnRoZW1lLmZlYXR1cmVkTWVkaWEuc2hvd09uUG9zdCAmJiAoXG4gICAgICAgIDxGZWF0dXJlZEltYWdlIGlkPXtwb3N0LmZlYXR1cmVkX21lZGlhfSBpc1NpbmdsZVBvc3Q9e3RydWV9IC8+XG4gICAgICApfVxuXG4gICAgICB7LyogSWYgdGhlIHBvc3QgaGFzIGFuIGV4Y2VycHQgKHNob3J0IHN1bW1hcnkgdGV4dCksIHdlIHJlbmRlciBpdCAqL31cbiAgICAgIHtwb3N0LmNvbnRlbnQgJiYgKFxuICAgICAgICA8UG9zdElubmVyIHNpemU9XCJ0aGluXCI+XG4gICAgICAgICAgPEVudHJ5Q29udGVudD5cbiAgICAgICAgICAgIDxIdG1sMlJlYWN0IGh0bWw9e3Bvc3QuY29udGVudC5yZW5kZXJlZH0gLz5cbiAgICAgICAgICA8L0VudHJ5Q29udGVudD5cbiAgICAgICAgICB7LyogSWYgdGhlIHBvc3QgaGFzIHRhZ3MsIHJlbmRlciBpdCAqL31cbiAgICAgICAgICB7cG9zdC50YWdzICYmIDxQb3N0VGFncyB0YWdzPXt0YWdzfSAvPn1cbiAgICAgICAgPC9Qb3N0SW5uZXI+XG4gICAgICApfVxuICAgIDwvUG9zdEFydGljbGU+XG4gICkgOiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0KTtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkKFBvc3RIZWFkZXIpYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDRyZW0gMDtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgcGFkZGluZzogOHJlbSAwO1xuICB9XG5gO1xuXG5jb25zdCBQb3N0QXJ0aWNsZSA9IHN0eWxlZChfUG9zdClgXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuYDtcblxuY29uc3QgRmVhdHVyZWRJbWFnZSA9IHN0eWxlZChGZWF0dXJlZE1lZGlhKWBcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgPiBkaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gICY6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTAlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/components/post/post.js\n");

/***/ })

})