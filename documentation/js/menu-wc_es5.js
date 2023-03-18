'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">frontend documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AdminModule.html\" data-type=\"entity-link\" >AdminModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AdminModule-60e07aa34f208fb8182d6b8cbedd8b7758ae0e50077b3c6b4d3fbbfa864daa011e23b27a72ac70bf2b06a5aec347a4eceeed12d7e560dbdba47d77e4179b2dc4"' : 'data-target="#xs-components-links-module-AdminModule-60e07aa34f208fb8182d6b8cbedd8b7758ae0e50077b3c6b4d3fbbfa864daa011e23b27a72ac70bf2b06a5aec347a4eceeed12d7e560dbdba47d77e4179b2dc4"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AdminModule-60e07aa34f208fb8182d6b8cbedd8b7758ae0e50077b3c6b4d3fbbfa864daa011e23b27a72ac70bf2b06a5aec347a4eceeed12d7e560dbdba47d77e4179b2dc4"' : 'id="xs-components-links-module-AdminModule-60e07aa34f208fb8182d6b8cbedd8b7758ae0e50077b3c6b4d3fbbfa864daa011e23b27a72ac70bf2b06a5aec347a4eceeed12d7e560dbdba47d77e4179b2dc4"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AlayoutComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AlayoutComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DashboardComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DashboardComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SidebarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SidebarComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AdminRoutingModule.html\" data-type=\"entity-link\" >AdminRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-8f01ca3a5446a3ee7f0ce25e5bd62fd5072b789290b2ae39ed04e524aca7e77f8bb5a973f50051ea78a64c5a7994309c3bbe296549cfdc5abbd9cca4e696f77a"' : 'data-target="#xs-components-links-module-AppModule-8f01ca3a5446a3ee7f0ce25e5bd62fd5072b789290b2ae39ed04e524aca7e77f8bb5a973f50051ea78a64c5a7994309c3bbe296549cfdc5abbd9cca4e696f77a"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-8f01ca3a5446a3ee7f0ce25e5bd62fd5072b789290b2ae39ed04e524aca7e77f8bb5a973f50051ea78a64c5a7994309c3bbe296549cfdc5abbd9cca4e696f77a"' : 'id="xs-components-links-module-AppModule-8f01ca3a5446a3ee7f0ce25e5bd62fd5072b789290b2ae39ed04e524aca7e77f8bb5a973f50051ea78a64c5a7994309c3bbe296549cfdc5abbd9cca4e696f77a"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ErrorComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ErrorComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LoginComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoginComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/RegisterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RegisterComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthRoutingModule.html\" data-type=\"entity-link\" >AuthRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ProjectModule.html\" data-type=\"entity-link\" >ProjectModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ProjectModule-a4e7487f439938de927ccb78fea7072950af465a324b196bb91e807244c507d63a31041247ce0ca3744bef7e0ccbb7f2b083faa5eca5588c91be90c3470269e3"' : 'data-target="#xs-components-links-module-ProjectModule-a4e7487f439938de927ccb78fea7072950af465a324b196bb91e807244c507d63a31041247ce0ca3744bef7e0ccbb7f2b083faa5eca5588c91be90c3470269e3"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ProjectModule-a4e7487f439938de927ccb78fea7072950af465a324b196bb91e807244c507d63a31041247ce0ca3744bef7e0ccbb7f2b083faa5eca5588c91be90c3470269e3"' : 'id="xs-components-links-module-ProjectModule-a4e7487f439938de927ccb78fea7072950af465a324b196bb91e807244c507d63a31041247ce0ca3744bef7e0ccbb7f2b083faa5eca5588c91be90c3470269e3"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ProjectsAddComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ProjectsAddComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ProjectsDeleteComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ProjectsDeleteComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ProjectsIndexComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ProjectsIndexComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ProjectsUpdateComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ProjectsUpdateComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ProjectRoutingModule.html\" data-type=\"entity-link\" >ProjectRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PublicModule.html\" data-type=\"entity-link\" >PublicModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-PublicModule-ed8bd714d2b43962c9a4afb45fae847925a2d9ec8637a813d38b94c011caf3467e25b01491079cdfea9795c854b0186c15044afa7ffb15fe3e1a1d4f3b7fb6c8"' : 'data-target="#xs-components-links-module-PublicModule-ed8bd714d2b43962c9a4afb45fae847925a2d9ec8637a813d38b94c011caf3467e25b01491079cdfea9795c854b0186c15044afa7ffb15fe3e1a1d4f3b7fb6c8"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-PublicModule-ed8bd714d2b43962c9a4afb45fae847925a2d9ec8637a813d38b94c011caf3467e25b01491079cdfea9795c854b0186c15044afa7ffb15fe3e1a1d4f3b7fb6c8"' : 'id="xs-components-links-module-PublicModule-ed8bd714d2b43962c9a4afb45fae847925a2d9ec8637a813d38b94c011caf3467e25b01491079cdfea9795c854b0186c15044afa7ffb15fe3e1a1d4f3b7fb6c8"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/HomeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HomeComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NavbarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NavbarComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PlayoutComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PlayoutComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SingleComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SingleComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SkillComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SkillComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SkillModule.html\" data-type=\"entity-link\" >SkillModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-SkillModule-6189c71b0ece2aa30db35da3d55d4f6ce2a12e88b8411d960e4deb72e8917649033f82f67da92f4d22d483f8e4006ab99af158d599071378d48552b4337bf25a"' : 'data-target="#xs-components-links-module-SkillModule-6189c71b0ece2aa30db35da3d55d4f6ce2a12e88b8411d960e4deb72e8917649033f82f67da92f4d22d483f8e4006ab99af158d599071378d48552b4337bf25a"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-SkillModule-6189c71b0ece2aa30db35da3d55d4f6ce2a12e88b8411d960e4deb72e8917649033f82f67da92f4d22d483f8e4006ab99af158d599071378d48552b4337bf25a"' : 'id="xs-components-links-module-SkillModule-6189c71b0ece2aa30db35da3d55d4f6ce2a12e88b8411d960e4deb72e8917649033f82f67da92f4d22d483f8e4006ab99af158d599071378d48552b4337bf25a"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/SkillsAddComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SkillsAddComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SkillsDeleteComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SkillsDeleteComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SkillsIndexComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SkillsIndexComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SkillsUpdateComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SkillsUpdateComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SkillRoutingModule.html\" data-type=\"entity-link\" >SkillRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UserModule.html\" data-type=\"entity-link\" >UserModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-UserModule-7643602e0edf2c8d8eca3175bf37aa64278e1685fc6d013e1174f82d75c35240118eee37f8239d6b7270fc3bddd03101cfc6f0452a096c1a35c1f0974397001e"' : 'data-target="#xs-components-links-module-UserModule-7643602e0edf2c8d8eca3175bf37aa64278e1685fc6d013e1174f82d75c35240118eee37f8239d6b7270fc3bddd03101cfc6f0452a096c1a35c1f0974397001e"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-UserModule-7643602e0edf2c8d8eca3175bf37aa64278e1685fc6d013e1174f82d75c35240118eee37f8239d6b7270fc3bddd03101cfc6f0452a096c1a35c1f0974397001e"' : 'id="xs-components-links-module-UserModule-7643602e0edf2c8d8eca3175bf37aa64278e1685fc6d013e1174f82d75c35240118eee37f8239d6b7270fc3bddd03101cfc6f0452a096c1a35c1f0974397001e"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/UsersAddComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersAddComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/UsersDeleteComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersDeleteComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/UsersIndexComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersIndexComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/UsersUpdateComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersUpdateComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UserRoutingModule.html\" data-type=\"entity-link\" >UserRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"', ">\n                            <span class=\"icon ion-md-cog\"></span>\n                            <span>Components</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="components-links"' : 'id="xs-components-links"', ">\n                            <li class=\"link\">\n                                <a href=\"components/LogoutComponent.html\" data-type=\"entity-link\" >LogoutComponent</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));