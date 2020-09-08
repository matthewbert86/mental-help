webpackHotUpdate("post",{

/***/ "./packages/twentytwenty-theme/src/components/post/post.js":
/*!*****************************************************************!*\
  !*** ./packages/twentytwenty-theme/src/components/post/post.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _featured_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./featured-media */ \"./packages/twentytwenty-theme/src/components/post/featured-media.js\");\n/* harmony import */ var _post_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-item */ \"./packages/twentytwenty-theme/src/components/post/post-item.js\");\n/* harmony import */ var _post_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-categories */ \"./packages/twentytwenty-theme/src/components/post/post-categories.js\");\n/* harmony import */ var _post_tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-tags */ \"./packages/twentytwenty-theme/src/components/post/post-tags.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var Post=(_ref)=>{var{state,actions,libraries}=_ref;// Get information about the current URL.\nvar data=state.source.get(state.router.link);// Get the data of the post.\nvar post=state.source[data.type][data.id];// Get the data of the author.\n// const author = state.source.author[post.author];\n// Get a human readable date.\n// const date = new Date(post.date);\n// Get the html2react component.\nvar Html2React=libraries.html2react.Component;// Get all categories\nvar allCategories=state.source.category;/**\n   * The item's categories is an array of each category id\n   * So, we'll look up the details of each category in allCategories\n   */var categories=post.categories&&post.categories.map(catId=>allCategories[catId]);// Get all tags\nvar allTags=state.source.tag;/**\n   * The item's categories is an array of each tag id\n   * So, we'll look up the details of each tag in allTags\n   */var tags=post.tags&&post.tags.map(tagId=>allTags[tagId]);/**\n   * Once the post has loaded in the DOM, prefetch both the\n   * home posts and the list component so if the user visits\n   * the home page, everything is ready and it loads instantly.\n   */Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(()=>{actions.source.fetch(\"/\");},[]);// Load the post, but only if the data is ready.\nreturn data.isReady?Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(PostArticle,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(Header,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_post_item__WEBPACK_IMPORTED_MODULE_4__[\"SectionContainer\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_post_item__WEBPACK_IMPORTED_MODULE_4__[\"PostTitle\"],{as:\"h1\",className:\"heading-size-1\",dangerouslySetInnerHTML:{__html:post.title.rendered}}))),state.theme.featuredMedia.showOnPost&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(FeaturedImage,{id:post.featured_media,isSinglePost:true}),post.content&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_post_item__WEBPACK_IMPORTED_MODULE_4__[\"PostInner\"],{size:\"thin\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_post_item__WEBPACK_IMPORTED_MODULE_4__[\"EntryContent\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(Html2React,{html:post.content.rendered})),post.tags&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_post_tags__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{tags:tags}))):null;};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Post));var Header=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_post_item__WEBPACK_IMPORTED_MODULE_4__[\"PostHeader\"],{target:\"e62fgu20\",label:\"Header\"})( false?undefined:{name:\"1koa5sw\",styles:\"background-color:#fff;margin:0;padding:4rem 0;@media (min-width:700px){padding:8rem 0;}font-size:50px;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL21lbnRhbC1oZWxwL3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0L3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkZpQyIsImZpbGUiOiIvVXNlcnMvbWF0dGhld2JlcnQvRGVza3RvcC9tZW50YWwtaGVscC9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmVhdHVyZWRNZWRpYSBmcm9tIFwiLi9mZWF0dXJlZC1tZWRpYVwiO1xuaW1wb3J0IHtcbiAgRW50cnlDb250ZW50LFxuICBQb3N0IGFzIF9Qb3N0LFxuICBQb3N0SGVhZGVyLFxuICBQb3N0SW5uZXIsXG4gIFBvc3RUaXRsZSxcbiAgU2VjdGlvbkNvbnRhaW5lclxufSBmcm9tIFwiLi9wb3N0LWl0ZW1cIjtcbmltcG9ydCBQb3N0Q2F0ZWdvcmllcyBmcm9tIFwiLi9wb3N0LWNhdGVnb3JpZXNcIjtcbmltcG9ydCBQb3N0VGFncyBmcm9tIFwiLi9wb3N0LXRhZ3NcIjtcblxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBhY3Rpb25zLCBsaWJyYXJpZXMgfSkgPT4ge1xuICAvLyBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgVVJMLlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgcG9zdC5cbiAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdO1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGF1dGhvci5cbiAgLy8gY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIC8vIEdldCBhIGh1bWFuIHJlYWRhYmxlIGRhdGUuXG4gIC8vIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwb3N0LmRhdGUpO1xuXG4gIC8vIEdldCB0aGUgaHRtbDJyZWFjdCBjb21wb25lbnQuXG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG5cbiAgLy8gR2V0IGFsbCBjYXRlZ29yaWVzXG4gIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBzdGF0ZS5zb3VyY2UuY2F0ZWdvcnk7XG4gIC8qKlxuICAgKiBUaGUgaXRlbSdzIGNhdGVnb3JpZXMgaXMgYW4gYXJyYXkgb2YgZWFjaCBjYXRlZ29yeSBpZFxuICAgKiBTbywgd2UnbGwgbG9vayB1cCB0aGUgZGV0YWlscyBvZiBlYWNoIGNhdGVnb3J5IGluIGFsbENhdGVnb3JpZXNcbiAgICovXG4gIGNvbnN0IGNhdGVnb3JpZXMgPVxuICAgIHBvc3QuY2F0ZWdvcmllcyAmJiBwb3N0LmNhdGVnb3JpZXMubWFwKGNhdElkID0+IGFsbENhdGVnb3JpZXNbY2F0SWRdKTtcblxuICAvLyBHZXQgYWxsIHRhZ3NcbiAgY29uc3QgYWxsVGFncyA9IHN0YXRlLnNvdXJjZS50YWc7XG4gIC8qKlxuICAgKiBUaGUgaXRlbSdzIGNhdGVnb3JpZXMgaXMgYW4gYXJyYXkgb2YgZWFjaCB0YWcgaWRcbiAgICogU28sIHdlJ2xsIGxvb2sgdXAgdGhlIGRldGFpbHMgb2YgZWFjaCB0YWcgaW4gYWxsVGFnc1xuICAgKi9cbiAgY29uc3QgdGFncyA9IHBvc3QudGFncyAmJiBwb3N0LnRhZ3MubWFwKHRhZ0lkID0+IGFsbFRhZ3NbdGFnSWRdKTtcblxuICAvKipcbiAgICogT25jZSB0aGUgcG9zdCBoYXMgbG9hZGVkIGluIHRoZSBET00sIHByZWZldGNoIGJvdGggdGhlXG4gICAqIGhvbWUgcG9zdHMgYW5kIHRoZSBsaXN0IGNvbXBvbmVudCBzbyBpZiB0aGUgdXNlciB2aXNpdHNcbiAgICogdGhlIGhvbWUgcGFnZSwgZXZlcnl0aGluZyBpcyByZWFkeSBhbmQgaXQgbG9hZHMgaW5zdGFudGx5LlxuICAgKi9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9cIik7XG4gIH0sIFtdKTtcblxuICAvLyBMb2FkIHRoZSBwb3N0LCBidXQgb25seSBpZiB0aGUgZGF0YSBpcyByZWFkeS5cbiAgcmV0dXJuIGRhdGEuaXNSZWFkeSA/IChcbiAgICA8UG9zdEFydGljbGU+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8U2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgICB7LyogSWYgdGhlIHBvc3QgaGFzIGNhdGVnb3JpZXMsIHJlbmRlciB0aGUgY2F0ZWdvcmllcyAqL31cbiAgICAgICAgICB7Lyp7cG9zdC5jYXRlZ29yaWVzICYmIDxQb3N0Q2F0ZWdvcmllcyBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPn0qL31cblxuICAgICAgICAgIDxQb3N0VGl0bGVcbiAgICAgICAgICAgIGFzPVwiaDFcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGluZy1zaXplLTFcIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LnRpdGxlLnJlbmRlcmVkIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPC9IZWFkZXI+XG5cbiAgICAgIHsvKlxuICAgICAgICogSWYgdGhlIHdhbnQgdG8gc2hvdyBmZWF0dXJlZCBtZWRpYSBpbiB0aGVcbiAgICAgICAqIGxpc3Qgb2YgZmVhdHVyZWQgcG9zdHMsIHdlIHJlbmRlciB0aGUgbWVkaWEuXG4gICAgICAgKi99XG4gICAgICB7c3RhdGUudGhlbWUuZmVhdHVyZWRNZWRpYS5zaG93T25Qb3N0ICYmIChcbiAgICAgICAgPEZlYXR1cmVkSW1hZ2UgaWQ9e3Bvc3QuZmVhdHVyZWRfbWVkaWF9IGlzU2luZ2xlUG9zdD17dHJ1ZX0gLz5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBJZiB0aGUgcG9zdCBoYXMgYW4gZXhjZXJwdCAoc2hvcnQgc3VtbWFyeSB0ZXh0KSwgd2UgcmVuZGVyIGl0ICovfVxuICAgICAge3Bvc3QuY29udGVudCAmJiAoXG4gICAgICAgIDxQb3N0SW5uZXIgc2l6ZT1cInRoaW5cIj5cbiAgICAgICAgICA8RW50cnlDb250ZW50PlxuICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cG9zdC5jb250ZW50LnJlbmRlcmVkfSAvPlxuICAgICAgICAgIDwvRW50cnlDb250ZW50PlxuICAgICAgICAgIHsvKiBJZiB0aGUgcG9zdCBoYXMgdGFncywgcmVuZGVyIGl0ICovfVxuICAgICAgICAgIHtwb3N0LnRhZ3MgJiYgPFBvc3RUYWdzIHRhZ3M9e3RhZ3N9IC8+fVxuICAgICAgICA8L1Bvc3RJbm5lcj5cbiAgICAgICl9XG4gICAgPC9Qb3N0QXJ0aWNsZT5cbiAgKSA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3QpO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQoUG9zdEhlYWRlcilgXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNHJlbSAwO1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICBwYWRkaW5nOiA4cmVtIDA7XG4gIH1cbiAgZm9udC1zaXplOiA1MHB4O1xuYDtcblxuY29uc3QgUG9zdEFydGljbGUgPSBzdHlsZWQoX1Bvc3QpYFxuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IEZlYXR1cmVkSW1hZ2UgPSBzdHlsZWQoRmVhdHVyZWRNZWRpYSlgXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gID4gZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAmOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var PostArticle=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_post_item__WEBPACK_IMPORTED_MODULE_4__[\"Post\"],{target:\"e62fgu21\",label:\"PostArticle\"})( false?undefined:{name:\"zvb1r2\",styles:\"padding-top:0 !important;background-color:white;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL21lbnRhbC1oZWxwL3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0L3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUdpQyIsImZpbGUiOiIvVXNlcnMvbWF0dGhld2JlcnQvRGVza3RvcC9tZW50YWwtaGVscC9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmVhdHVyZWRNZWRpYSBmcm9tIFwiLi9mZWF0dXJlZC1tZWRpYVwiO1xuaW1wb3J0IHtcbiAgRW50cnlDb250ZW50LFxuICBQb3N0IGFzIF9Qb3N0LFxuICBQb3N0SGVhZGVyLFxuICBQb3N0SW5uZXIsXG4gIFBvc3RUaXRsZSxcbiAgU2VjdGlvbkNvbnRhaW5lclxufSBmcm9tIFwiLi9wb3N0LWl0ZW1cIjtcbmltcG9ydCBQb3N0Q2F0ZWdvcmllcyBmcm9tIFwiLi9wb3N0LWNhdGVnb3JpZXNcIjtcbmltcG9ydCBQb3N0VGFncyBmcm9tIFwiLi9wb3N0LXRhZ3NcIjtcblxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBhY3Rpb25zLCBsaWJyYXJpZXMgfSkgPT4ge1xuICAvLyBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgVVJMLlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgcG9zdC5cbiAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdO1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGF1dGhvci5cbiAgLy8gY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIC8vIEdldCBhIGh1bWFuIHJlYWRhYmxlIGRhdGUuXG4gIC8vIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwb3N0LmRhdGUpO1xuXG4gIC8vIEdldCB0aGUgaHRtbDJyZWFjdCBjb21wb25lbnQuXG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG5cbiAgLy8gR2V0IGFsbCBjYXRlZ29yaWVzXG4gIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBzdGF0ZS5zb3VyY2UuY2F0ZWdvcnk7XG4gIC8qKlxuICAgKiBUaGUgaXRlbSdzIGNhdGVnb3JpZXMgaXMgYW4gYXJyYXkgb2YgZWFjaCBjYXRlZ29yeSBpZFxuICAgKiBTbywgd2UnbGwgbG9vayB1cCB0aGUgZGV0YWlscyBvZiBlYWNoIGNhdGVnb3J5IGluIGFsbENhdGVnb3JpZXNcbiAgICovXG4gIGNvbnN0IGNhdGVnb3JpZXMgPVxuICAgIHBvc3QuY2F0ZWdvcmllcyAmJiBwb3N0LmNhdGVnb3JpZXMubWFwKGNhdElkID0+IGFsbENhdGVnb3JpZXNbY2F0SWRdKTtcblxuICAvLyBHZXQgYWxsIHRhZ3NcbiAgY29uc3QgYWxsVGFncyA9IHN0YXRlLnNvdXJjZS50YWc7XG4gIC8qKlxuICAgKiBUaGUgaXRlbSdzIGNhdGVnb3JpZXMgaXMgYW4gYXJyYXkgb2YgZWFjaCB0YWcgaWRcbiAgICogU28sIHdlJ2xsIGxvb2sgdXAgdGhlIGRldGFpbHMgb2YgZWFjaCB0YWcgaW4gYWxsVGFnc1xuICAgKi9cbiAgY29uc3QgdGFncyA9IHBvc3QudGFncyAmJiBwb3N0LnRhZ3MubWFwKHRhZ0lkID0+IGFsbFRhZ3NbdGFnSWRdKTtcblxuICAvKipcbiAgICogT25jZSB0aGUgcG9zdCBoYXMgbG9hZGVkIGluIHRoZSBET00sIHByZWZldGNoIGJvdGggdGhlXG4gICAqIGhvbWUgcG9zdHMgYW5kIHRoZSBsaXN0IGNvbXBvbmVudCBzbyBpZiB0aGUgdXNlciB2aXNpdHNcbiAgICogdGhlIGhvbWUgcGFnZSwgZXZlcnl0aGluZyBpcyByZWFkeSBhbmQgaXQgbG9hZHMgaW5zdGFudGx5LlxuICAgKi9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9cIik7XG4gIH0sIFtdKTtcblxuICAvLyBMb2FkIHRoZSBwb3N0LCBidXQgb25seSBpZiB0aGUgZGF0YSBpcyByZWFkeS5cbiAgcmV0dXJuIGRhdGEuaXNSZWFkeSA/IChcbiAgICA8UG9zdEFydGljbGU+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8U2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgICB7LyogSWYgdGhlIHBvc3QgaGFzIGNhdGVnb3JpZXMsIHJlbmRlciB0aGUgY2F0ZWdvcmllcyAqL31cbiAgICAgICAgICB7Lyp7cG9zdC5jYXRlZ29yaWVzICYmIDxQb3N0Q2F0ZWdvcmllcyBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPn0qL31cblxuICAgICAgICAgIDxQb3N0VGl0bGVcbiAgICAgICAgICAgIGFzPVwiaDFcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGluZy1zaXplLTFcIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LnRpdGxlLnJlbmRlcmVkIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPC9IZWFkZXI+XG5cbiAgICAgIHsvKlxuICAgICAgICogSWYgdGhlIHdhbnQgdG8gc2hvdyBmZWF0dXJlZCBtZWRpYSBpbiB0aGVcbiAgICAgICAqIGxpc3Qgb2YgZmVhdHVyZWQgcG9zdHMsIHdlIHJlbmRlciB0aGUgbWVkaWEuXG4gICAgICAgKi99XG4gICAgICB7c3RhdGUudGhlbWUuZmVhdHVyZWRNZWRpYS5zaG93T25Qb3N0ICYmIChcbiAgICAgICAgPEZlYXR1cmVkSW1hZ2UgaWQ9e3Bvc3QuZmVhdHVyZWRfbWVkaWF9IGlzU2luZ2xlUG9zdD17dHJ1ZX0gLz5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBJZiB0aGUgcG9zdCBoYXMgYW4gZXhjZXJwdCAoc2hvcnQgc3VtbWFyeSB0ZXh0KSwgd2UgcmVuZGVyIGl0ICovfVxuICAgICAge3Bvc3QuY29udGVudCAmJiAoXG4gICAgICAgIDxQb3N0SW5uZXIgc2l6ZT1cInRoaW5cIj5cbiAgICAgICAgICA8RW50cnlDb250ZW50PlxuICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cG9zdC5jb250ZW50LnJlbmRlcmVkfSAvPlxuICAgICAgICAgIDwvRW50cnlDb250ZW50PlxuICAgICAgICAgIHsvKiBJZiB0aGUgcG9zdCBoYXMgdGFncywgcmVuZGVyIGl0ICovfVxuICAgICAgICAgIHtwb3N0LnRhZ3MgJiYgPFBvc3RUYWdzIHRhZ3M9e3RhZ3N9IC8+fVxuICAgICAgICA8L1Bvc3RJbm5lcj5cbiAgICAgICl9XG4gICAgPC9Qb3N0QXJ0aWNsZT5cbiAgKSA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3QpO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQoUG9zdEhlYWRlcilgXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNHJlbSAwO1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICBwYWRkaW5nOiA4cmVtIDA7XG4gIH1cbiAgZm9udC1zaXplOiA1MHB4O1xuYDtcblxuY29uc3QgUG9zdEFydGljbGUgPSBzdHlsZWQoX1Bvc3QpYFxuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IEZlYXR1cmVkSW1hZ2UgPSBzdHlsZWQoRmVhdHVyZWRNZWRpYSlgXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gID4gZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAmOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var FeaturedImage=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_featured_media__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{target:\"e62fgu22\",label:\"FeaturedImage\"})( false?undefined:{name:\"6a6nzn\",styles:\"margin-top:0 !important;position:relative;> div{position:relative;}&:before{background:#fff;content:\\\"\\\";display:block;position:absolute;bottom:50%;left:0;right:0;top:0;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL21lbnRhbC1oZWxwL3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0L3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEcyQyIsImZpbGUiOiIvVXNlcnMvbWF0dGhld2JlcnQvRGVza3RvcC9tZW50YWwtaGVscC9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmVhdHVyZWRNZWRpYSBmcm9tIFwiLi9mZWF0dXJlZC1tZWRpYVwiO1xuaW1wb3J0IHtcbiAgRW50cnlDb250ZW50LFxuICBQb3N0IGFzIF9Qb3N0LFxuICBQb3N0SGVhZGVyLFxuICBQb3N0SW5uZXIsXG4gIFBvc3RUaXRsZSxcbiAgU2VjdGlvbkNvbnRhaW5lclxufSBmcm9tIFwiLi9wb3N0LWl0ZW1cIjtcbmltcG9ydCBQb3N0Q2F0ZWdvcmllcyBmcm9tIFwiLi9wb3N0LWNhdGVnb3JpZXNcIjtcbmltcG9ydCBQb3N0VGFncyBmcm9tIFwiLi9wb3N0LXRhZ3NcIjtcblxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBhY3Rpb25zLCBsaWJyYXJpZXMgfSkgPT4ge1xuICAvLyBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgVVJMLlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgcG9zdC5cbiAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdO1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGF1dGhvci5cbiAgLy8gY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIC8vIEdldCBhIGh1bWFuIHJlYWRhYmxlIGRhdGUuXG4gIC8vIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwb3N0LmRhdGUpO1xuXG4gIC8vIEdldCB0aGUgaHRtbDJyZWFjdCBjb21wb25lbnQuXG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG5cbiAgLy8gR2V0IGFsbCBjYXRlZ29yaWVzXG4gIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBzdGF0ZS5zb3VyY2UuY2F0ZWdvcnk7XG4gIC8qKlxuICAgKiBUaGUgaXRlbSdzIGNhdGVnb3JpZXMgaXMgYW4gYXJyYXkgb2YgZWFjaCBjYXRlZ29yeSBpZFxuICAgKiBTbywgd2UnbGwgbG9vayB1cCB0aGUgZGV0YWlscyBvZiBlYWNoIGNhdGVnb3J5IGluIGFsbENhdGVnb3JpZXNcbiAgICovXG4gIGNvbnN0IGNhdGVnb3JpZXMgPVxuICAgIHBvc3QuY2F0ZWdvcmllcyAmJiBwb3N0LmNhdGVnb3JpZXMubWFwKGNhdElkID0+IGFsbENhdGVnb3JpZXNbY2F0SWRdKTtcblxuICAvLyBHZXQgYWxsIHRhZ3NcbiAgY29uc3QgYWxsVGFncyA9IHN0YXRlLnNvdXJjZS50YWc7XG4gIC8qKlxuICAgKiBUaGUgaXRlbSdzIGNhdGVnb3JpZXMgaXMgYW4gYXJyYXkgb2YgZWFjaCB0YWcgaWRcbiAgICogU28sIHdlJ2xsIGxvb2sgdXAgdGhlIGRldGFpbHMgb2YgZWFjaCB0YWcgaW4gYWxsVGFnc1xuICAgKi9cbiAgY29uc3QgdGFncyA9IHBvc3QudGFncyAmJiBwb3N0LnRhZ3MubWFwKHRhZ0lkID0+IGFsbFRhZ3NbdGFnSWRdKTtcblxuICAvKipcbiAgICogT25jZSB0aGUgcG9zdCBoYXMgbG9hZGVkIGluIHRoZSBET00sIHByZWZldGNoIGJvdGggdGhlXG4gICAqIGhvbWUgcG9zdHMgYW5kIHRoZSBsaXN0IGNvbXBvbmVudCBzbyBpZiB0aGUgdXNlciB2aXNpdHNcbiAgICogdGhlIGhvbWUgcGFnZSwgZXZlcnl0aGluZyBpcyByZWFkeSBhbmQgaXQgbG9hZHMgaW5zdGFudGx5LlxuICAgKi9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9cIik7XG4gIH0sIFtdKTtcblxuICAvLyBMb2FkIHRoZSBwb3N0LCBidXQgb25seSBpZiB0aGUgZGF0YSBpcyByZWFkeS5cbiAgcmV0dXJuIGRhdGEuaXNSZWFkeSA/IChcbiAgICA8UG9zdEFydGljbGU+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8U2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgICB7LyogSWYgdGhlIHBvc3QgaGFzIGNhdGVnb3JpZXMsIHJlbmRlciB0aGUgY2F0ZWdvcmllcyAqL31cbiAgICAgICAgICB7Lyp7cG9zdC5jYXRlZ29yaWVzICYmIDxQb3N0Q2F0ZWdvcmllcyBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPn0qL31cblxuICAgICAgICAgIDxQb3N0VGl0bGVcbiAgICAgICAgICAgIGFzPVwiaDFcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGluZy1zaXplLTFcIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LnRpdGxlLnJlbmRlcmVkIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPC9IZWFkZXI+XG5cbiAgICAgIHsvKlxuICAgICAgICogSWYgdGhlIHdhbnQgdG8gc2hvdyBmZWF0dXJlZCBtZWRpYSBpbiB0aGVcbiAgICAgICAqIGxpc3Qgb2YgZmVhdHVyZWQgcG9zdHMsIHdlIHJlbmRlciB0aGUgbWVkaWEuXG4gICAgICAgKi99XG4gICAgICB7c3RhdGUudGhlbWUuZmVhdHVyZWRNZWRpYS5zaG93T25Qb3N0ICYmIChcbiAgICAgICAgPEZlYXR1cmVkSW1hZ2UgaWQ9e3Bvc3QuZmVhdHVyZWRfbWVkaWF9IGlzU2luZ2xlUG9zdD17dHJ1ZX0gLz5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBJZiB0aGUgcG9zdCBoYXMgYW4gZXhjZXJwdCAoc2hvcnQgc3VtbWFyeSB0ZXh0KSwgd2UgcmVuZGVyIGl0ICovfVxuICAgICAge3Bvc3QuY29udGVudCAmJiAoXG4gICAgICAgIDxQb3N0SW5uZXIgc2l6ZT1cInRoaW5cIj5cbiAgICAgICAgICA8RW50cnlDb250ZW50PlxuICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cG9zdC5jb250ZW50LnJlbmRlcmVkfSAvPlxuICAgICAgICAgIDwvRW50cnlDb250ZW50PlxuICAgICAgICAgIHsvKiBJZiB0aGUgcG9zdCBoYXMgdGFncywgcmVuZGVyIGl0ICovfVxuICAgICAgICAgIHtwb3N0LnRhZ3MgJiYgPFBvc3RUYWdzIHRhZ3M9e3RhZ3N9IC8+fVxuICAgICAgICA8L1Bvc3RJbm5lcj5cbiAgICAgICl9XG4gICAgPC9Qb3N0QXJ0aWNsZT5cbiAgKSA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3QpO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQoUG9zdEhlYWRlcilgXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNHJlbSAwO1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICBwYWRkaW5nOiA4cmVtIDA7XG4gIH1cbiAgZm9udC1zaXplOiA1MHB4O1xuYDtcblxuY29uc3QgUG9zdEFydGljbGUgPSBzdHlsZWQoX1Bvc3QpYFxuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IEZlYXR1cmVkSW1hZ2UgPSBzdHlsZWQoRmVhdHVyZWRNZWRpYSlgXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gID4gZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAmOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC9wb3N0LmpzPzU2ZWEiXSwibmFtZXMiOlsiUG9zdCIsInN0YXRlIiwiYWN0aW9ucyIsImxpYnJhcmllcyIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwicG9zdCIsInR5cGUiLCJpZCIsIkh0bWwyUmVhY3QiLCJodG1sMnJlYWN0IiwiQ29tcG9uZW50IiwiYWxsQ2F0ZWdvcmllcyIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsIm1hcCIsImNhdElkIiwiYWxsVGFncyIsInRhZyIsInRhZ3MiLCJ0YWdJZCIsInVzZUVmZmVjdCIsImZldGNoIiwiaXNSZWFkeSIsIl9faHRtbCIsInRpdGxlIiwicmVuZGVyZWQiLCJ0aGVtZSIsImZlYXR1cmVkTWVkaWEiLCJzaG93T25Qb3N0IiwiZmVhdHVyZWRfbWVkaWEiLCJjb250ZW50IiwiY29ubmVjdCIsIkhlYWRlciIsIlBvc3RIZWFkZXIiLCJQb3N0QXJ0aWNsZSIsIl9Qb3N0IiwiRmVhdHVyZWRJbWFnZSIsIkZlYXR1cmVkTWVkaWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O3FSQWNBLEdBQU1BLEtBQUksQ0FBRyxRQUFtQyxJQUFsQyxDQUFFQyxLQUFGLENBQVNDLE9BQVQsQ0FBa0JDLFNBQWxCLENBQWtDLE1BQzlDO0FBQ0EsR0FBTUMsS0FBSSxDQUFHSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkwsS0FBSyxDQUFDTSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FDQTtBQUNBLEdBQU1DLEtBQUksQ0FBR1IsS0FBSyxDQUFDSSxNQUFOLENBQWFELElBQUksQ0FBQ00sSUFBbEIsRUFBd0JOLElBQUksQ0FBQ08sRUFBN0IsQ0FBYixDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxHQUFNQyxXQUFVLENBQUdULFNBQVMsQ0FBQ1UsVUFBVixDQUFxQkMsU0FBeEMsQ0FFQTtBQUNBLEdBQU1DLGNBQWEsQ0FBR2QsS0FBSyxDQUFDSSxNQUFOLENBQWFXLFFBQW5DLENBQ0E7OztLQUlBLEdBQU1DLFdBQVUsQ0FDZFIsSUFBSSxDQUFDUSxVQUFMLEVBQW1CUixJQUFJLENBQUNRLFVBQUwsQ0FBZ0JDLEdBQWhCLENBQW9CQyxLQUFLLEVBQUlKLGFBQWEsQ0FBQ0ksS0FBRCxDQUExQyxDQURyQixDQUdBO0FBQ0EsR0FBTUMsUUFBTyxDQUFHbkIsS0FBSyxDQUFDSSxNQUFOLENBQWFnQixHQUE3QixDQUNBOzs7S0FJQSxHQUFNQyxLQUFJLENBQUdiLElBQUksQ0FBQ2EsSUFBTCxFQUFhYixJQUFJLENBQUNhLElBQUwsQ0FBVUosR0FBVixDQUFjSyxLQUFLLEVBQUlILE9BQU8sQ0FBQ0csS0FBRCxDQUE5QixDQUExQixDQUVBOzs7O0tBS0FDLHVEQUFTLENBQUMsSUFBTSxDQUNkdEIsT0FBTyxDQUFDRyxNQUFSLENBQWVvQixLQUFmLENBQXFCLEdBQXJCLEVBQ0QsQ0FGUSxDQUVOLEVBRk0sQ0FBVCxDQUlBO0FBQ0EsTUFBT3JCLEtBQUksQ0FBQ3NCLE9BQUwsQ0FDTCwwREFBQyxXQUFELE1BQ0UsMERBQUMsTUFBRCxNQUNFLDBEQUFDLDJEQUFELE1BSUUsMERBQUMsb0RBQUQsRUFDRSxFQUFFLENBQUMsSUFETCxDQUVFLFNBQVMsQ0FBQyxnQkFGWixDQUdFLHVCQUF1QixDQUFFLENBQUVDLE1BQU0sQ0FBRWxCLElBQUksQ0FBQ21CLEtBQUwsQ0FBV0MsUUFBckIsQ0FIM0IsRUFKRixDQURGLENBREYsQ0FrQkc1QixLQUFLLENBQUM2QixLQUFOLENBQVlDLGFBQVosQ0FBMEJDLFVBQTFCLEVBQ0MsMERBQUMsYUFBRCxFQUFlLEVBQUUsQ0FBRXZCLElBQUksQ0FBQ3dCLGNBQXhCLENBQXdDLFlBQVksQ0FBRSxJQUF0RCxFQW5CSixDQXVCR3hCLElBQUksQ0FBQ3lCLE9BQUwsRUFDQywwREFBQyxvREFBRCxFQUFXLElBQUksQ0FBQyxNQUFoQixFQUNFLDBEQUFDLHVEQUFELE1BQ0UsMERBQUMsVUFBRCxFQUFZLElBQUksQ0FBRXpCLElBQUksQ0FBQ3lCLE9BQUwsQ0FBYUwsUUFBL0IsRUFERixDQURGLENBS0dwQixJQUFJLENBQUNhLElBQUwsRUFBYSwwREFBQyxrREFBRCxFQUFVLElBQUksQ0FBRUEsSUFBaEIsRUFMaEIsQ0F4QkosQ0FESyxDQWtDSCxJQWxDSixDQW1DRCxDQTNFRCxDQTZFZWEsdUhBQU8sQ0FBQ25DLElBQUQsQ0FBdEIsRUFFQSxHQUFNb0MsT0FBTSxDQUFHLGtGQUFPQyxxREFBUCxvQ0FBSCx1dEtBQVosQ0FVQSxHQUFNQyxZQUFXLENBQUcsa0ZBQU9DLCtDQUFQLHlDQUFILGdxS0FBakIsQ0FLQSxHQUFNQyxjQUFhLENBQUcsa0ZBQU9DLHVEQUFQLDJDQUFILDB4S0FBbkIiLCJmaWxlIjoiLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmVhdHVyZWRNZWRpYSBmcm9tIFwiLi9mZWF0dXJlZC1tZWRpYVwiO1xuaW1wb3J0IHtcbiAgRW50cnlDb250ZW50LFxuICBQb3N0IGFzIF9Qb3N0LFxuICBQb3N0SGVhZGVyLFxuICBQb3N0SW5uZXIsXG4gIFBvc3RUaXRsZSxcbiAgU2VjdGlvbkNvbnRhaW5lclxufSBmcm9tIFwiLi9wb3N0LWl0ZW1cIjtcbmltcG9ydCBQb3N0Q2F0ZWdvcmllcyBmcm9tIFwiLi9wb3N0LWNhdGVnb3JpZXNcIjtcbmltcG9ydCBQb3N0VGFncyBmcm9tIFwiLi9wb3N0LXRhZ3NcIjtcblxuY29uc3QgUG9zdCA9ICh7IHN0YXRlLCBhY3Rpb25zLCBsaWJyYXJpZXMgfSkgPT4ge1xuICAvLyBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgVVJMLlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgcG9zdC5cbiAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdO1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGF1dGhvci5cbiAgLy8gY29uc3QgYXV0aG9yID0gc3RhdGUuc291cmNlLmF1dGhvcltwb3N0LmF1dGhvcl07XG4gIC8vIEdldCBhIGh1bWFuIHJlYWRhYmxlIGRhdGUuXG4gIC8vIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwb3N0LmRhdGUpO1xuXG4gIC8vIEdldCB0aGUgaHRtbDJyZWFjdCBjb21wb25lbnQuXG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG5cbiAgLy8gR2V0IGFsbCBjYXRlZ29yaWVzXG4gIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBzdGF0ZS5zb3VyY2UuY2F0ZWdvcnk7XG4gIC8qKlxuICAgKiBUaGUgaXRlbSdzIGNhdGVnb3JpZXMgaXMgYW4gYXJyYXkgb2YgZWFjaCBjYXRlZ29yeSBpZFxuICAgKiBTbywgd2UnbGwgbG9vayB1cCB0aGUgZGV0YWlscyBvZiBlYWNoIGNhdGVnb3J5IGluIGFsbENhdGVnb3JpZXNcbiAgICovXG4gIGNvbnN0IGNhdGVnb3JpZXMgPVxuICAgIHBvc3QuY2F0ZWdvcmllcyAmJiBwb3N0LmNhdGVnb3JpZXMubWFwKGNhdElkID0+IGFsbENhdGVnb3JpZXNbY2F0SWRdKTtcblxuICAvLyBHZXQgYWxsIHRhZ3NcbiAgY29uc3QgYWxsVGFncyA9IHN0YXRlLnNvdXJjZS50YWc7XG4gIC8qKlxuICAgKiBUaGUgaXRlbSdzIGNhdGVnb3JpZXMgaXMgYW4gYXJyYXkgb2YgZWFjaCB0YWcgaWRcbiAgICogU28sIHdlJ2xsIGxvb2sgdXAgdGhlIGRldGFpbHMgb2YgZWFjaCB0YWcgaW4gYWxsVGFnc1xuICAgKi9cbiAgY29uc3QgdGFncyA9IHBvc3QudGFncyAmJiBwb3N0LnRhZ3MubWFwKHRhZ0lkID0+IGFsbFRhZ3NbdGFnSWRdKTtcblxuICAvKipcbiAgICogT25jZSB0aGUgcG9zdCBoYXMgbG9hZGVkIGluIHRoZSBET00sIHByZWZldGNoIGJvdGggdGhlXG4gICAqIGhvbWUgcG9zdHMgYW5kIHRoZSBsaXN0IGNvbXBvbmVudCBzbyBpZiB0aGUgdXNlciB2aXNpdHNcbiAgICogdGhlIGhvbWUgcGFnZSwgZXZlcnl0aGluZyBpcyByZWFkeSBhbmQgaXQgbG9hZHMgaW5zdGFudGx5LlxuICAgKi9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9cIik7XG4gIH0sIFtdKTtcblxuICAvLyBMb2FkIHRoZSBwb3N0LCBidXQgb25seSBpZiB0aGUgZGF0YSBpcyByZWFkeS5cbiAgcmV0dXJuIGRhdGEuaXNSZWFkeSA/IChcbiAgICA8UG9zdEFydGljbGU+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8U2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgICB7LyogSWYgdGhlIHBvc3QgaGFzIGNhdGVnb3JpZXMsIHJlbmRlciB0aGUgY2F0ZWdvcmllcyAqL31cbiAgICAgICAgICB7Lyp7cG9zdC5jYXRlZ29yaWVzICYmIDxQb3N0Q2F0ZWdvcmllcyBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPn0qL31cblxuICAgICAgICAgIDxQb3N0VGl0bGVcbiAgICAgICAgICAgIGFzPVwiaDFcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGluZy1zaXplLTFcIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LnRpdGxlLnJlbmRlcmVkIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPC9IZWFkZXI+XG5cbiAgICAgIHsvKlxuICAgICAgICogSWYgdGhlIHdhbnQgdG8gc2hvdyBmZWF0dXJlZCBtZWRpYSBpbiB0aGVcbiAgICAgICAqIGxpc3Qgb2YgZmVhdHVyZWQgcG9zdHMsIHdlIHJlbmRlciB0aGUgbWVkaWEuXG4gICAgICAgKi99XG4gICAgICB7c3RhdGUudGhlbWUuZmVhdHVyZWRNZWRpYS5zaG93T25Qb3N0ICYmIChcbiAgICAgICAgPEZlYXR1cmVkSW1hZ2UgaWQ9e3Bvc3QuZmVhdHVyZWRfbWVkaWF9IGlzU2luZ2xlUG9zdD17dHJ1ZX0gLz5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBJZiB0aGUgcG9zdCBoYXMgYW4gZXhjZXJwdCAoc2hvcnQgc3VtbWFyeSB0ZXh0KSwgd2UgcmVuZGVyIGl0ICovfVxuICAgICAge3Bvc3QuY29udGVudCAmJiAoXG4gICAgICAgIDxQb3N0SW5uZXIgc2l6ZT1cInRoaW5cIj5cbiAgICAgICAgICA8RW50cnlDb250ZW50PlxuICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cG9zdC5jb250ZW50LnJlbmRlcmVkfSAvPlxuICAgICAgICAgIDwvRW50cnlDb250ZW50PlxuICAgICAgICAgIHsvKiBJZiB0aGUgcG9zdCBoYXMgdGFncywgcmVuZGVyIGl0ICovfVxuICAgICAgICAgIHtwb3N0LnRhZ3MgJiYgPFBvc3RUYWdzIHRhZ3M9e3RhZ3N9IC8+fVxuICAgICAgICA8L1Bvc3RJbm5lcj5cbiAgICAgICl9XG4gICAgPC9Qb3N0QXJ0aWNsZT5cbiAgKSA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3QpO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQoUG9zdEhlYWRlcilgXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNHJlbSAwO1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICBwYWRkaW5nOiA4cmVtIDA7XG4gIH1cbiAgZm9udC1zaXplOiA1MHB4O1xuYDtcblxuY29uc3QgUG9zdEFydGljbGUgPSBzdHlsZWQoX1Bvc3QpYFxuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbmA7XG5cbmNvbnN0IEZlYXR1cmVkSW1hZ2UgPSBzdHlsZWQoRmVhdHVyZWRNZWRpYSlgXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gID4gZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAmOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/components/post/post.js\n");

/***/ })

})