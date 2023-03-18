'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-60e07aa34f208fb8182d6b8cbedd8b7758ae0e50077b3c6b4d3fbbfa864daa011e23b27a72ac70bf2b06a5aec347a4eceeed12d7e560dbdba47d77e4179b2dc4"' : 'data-target="#xs-components-links-module-AdminModule-60e07aa34f208fb8182d6b8cbedd8b7758ae0e50077b3c6b4d3fbbfa864daa011e23b27a72ac70bf2b06a5aec347a4eceeed12d7e560dbdba47d77e4179b2dc4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-60e07aa34f208fb8182d6b8cbedd8b7758ae0e50077b3c6b4d3fbbfa864daa011e23b27a72ac70bf2b06a5aec347a4eceeed12d7e560dbdba47d77e4179b2dc4"' :
                                            'id="xs-components-links-module-AdminModule-60e07aa34f208fb8182d6b8cbedd8b7758ae0e50077b3c6b4d3fbbfa864daa011e23b27a72ac70bf2b06a5aec347a4eceeed12d7e560dbdba47d77e4179b2dc4"' }>
                                            <li class="link">
                                                <a href="components/AlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-8f01ca3a5446a3ee7f0ce25e5bd62fd5072b789290b2ae39ed04e524aca7e77f8bb5a973f50051ea78a64c5a7994309c3bbe296549cfdc5abbd9cca4e696f77a"' : 'data-target="#xs-components-links-module-AppModule-8f01ca3a5446a3ee7f0ce25e5bd62fd5072b789290b2ae39ed04e524aca7e77f8bb5a973f50051ea78a64c5a7994309c3bbe296549cfdc5abbd9cca4e696f77a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8f01ca3a5446a3ee7f0ce25e5bd62fd5072b789290b2ae39ed04e524aca7e77f8bb5a973f50051ea78a64c5a7994309c3bbe296549cfdc5abbd9cca4e696f77a"' :
                                            'id="xs-components-links-module-AppModule-8f01ca3a5446a3ee7f0ce25e5bd62fd5072b789290b2ae39ed04e524aca7e77f8bb5a973f50051ea78a64c5a7994309c3bbe296549cfdc5abbd9cca4e696f77a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectModule.html" data-type="entity-link" >ProjectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProjectModule-a4e7487f439938de927ccb78fea7072950af465a324b196bb91e807244c507d63a31041247ce0ca3744bef7e0ccbb7f2b083faa5eca5588c91be90c3470269e3"' : 'data-target="#xs-components-links-module-ProjectModule-a4e7487f439938de927ccb78fea7072950af465a324b196bb91e807244c507d63a31041247ce0ca3744bef7e0ccbb7f2b083faa5eca5588c91be90c3470269e3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectModule-a4e7487f439938de927ccb78fea7072950af465a324b196bb91e807244c507d63a31041247ce0ca3744bef7e0ccbb7f2b083faa5eca5588c91be90c3470269e3"' :
                                            'id="xs-components-links-module-ProjectModule-a4e7487f439938de927ccb78fea7072950af465a324b196bb91e807244c507d63a31041247ce0ca3744bef7e0ccbb7f2b083faa5eca5588c91be90c3470269e3"' }>
                                            <li class="link">
                                                <a href="components/ProjectsAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectsAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectsDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectsDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectsIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectsIndexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectsUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectsUpdateComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectRoutingModule.html" data-type="entity-link" >ProjectRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-ed8bd714d2b43962c9a4afb45fae847925a2d9ec8637a813d38b94c011caf3467e25b01491079cdfea9795c854b0186c15044afa7ffb15fe3e1a1d4f3b7fb6c8"' : 'data-target="#xs-components-links-module-PublicModule-ed8bd714d2b43962c9a4afb45fae847925a2d9ec8637a813d38b94c011caf3467e25b01491079cdfea9795c854b0186c15044afa7ffb15fe3e1a1d4f3b7fb6c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-ed8bd714d2b43962c9a4afb45fae847925a2d9ec8637a813d38b94c011caf3467e25b01491079cdfea9795c854b0186c15044afa7ffb15fe3e1a1d4f3b7fb6c8"' :
                                            'id="xs-components-links-module-PublicModule-ed8bd714d2b43962c9a4afb45fae847925a2d9ec8637a813d38b94c011caf3467e25b01491079cdfea9795c854b0186c15044afa7ffb15fe3e1a1d4f3b7fb6c8"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SingleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SingleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SkillComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SkillComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SkillModule.html" data-type="entity-link" >SkillModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SkillModule-6189c71b0ece2aa30db35da3d55d4f6ce2a12e88b8411d960e4deb72e8917649033f82f67da92f4d22d483f8e4006ab99af158d599071378d48552b4337bf25a"' : 'data-target="#xs-components-links-module-SkillModule-6189c71b0ece2aa30db35da3d55d4f6ce2a12e88b8411d960e4deb72e8917649033f82f67da92f4d22d483f8e4006ab99af158d599071378d48552b4337bf25a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SkillModule-6189c71b0ece2aa30db35da3d55d4f6ce2a12e88b8411d960e4deb72e8917649033f82f67da92f4d22d483f8e4006ab99af158d599071378d48552b4337bf25a"' :
                                            'id="xs-components-links-module-SkillModule-6189c71b0ece2aa30db35da3d55d4f6ce2a12e88b8411d960e4deb72e8917649033f82f67da92f4d22d483f8e4006ab99af158d599071378d48552b4337bf25a"' }>
                                            <li class="link">
                                                <a href="components/SkillsAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SkillsAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SkillsDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SkillsDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SkillsIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SkillsIndexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SkillsUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SkillsUpdateComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SkillRoutingModule.html" data-type="entity-link" >SkillRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-7643602e0edf2c8d8eca3175bf37aa64278e1685fc6d013e1174f82d75c35240118eee37f8239d6b7270fc3bddd03101cfc6f0452a096c1a35c1f0974397001e"' : 'data-target="#xs-components-links-module-UserModule-7643602e0edf2c8d8eca3175bf37aa64278e1685fc6d013e1174f82d75c35240118eee37f8239d6b7270fc3bddd03101cfc6f0452a096c1a35c1f0974397001e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-7643602e0edf2c8d8eca3175bf37aa64278e1685fc6d013e1174f82d75c35240118eee37f8239d6b7270fc3bddd03101cfc6f0452a096c1a35c1f0974397001e"' :
                                            'id="xs-components-links-module-UserModule-7643602e0edf2c8d8eca3175bf37aa64278e1685fc6d013e1174f82d75c35240118eee37f8239d6b7270fc3bddd03101cfc6f0452a096c1a35c1f0974397001e"' }>
                                            <li class="link">
                                                <a href="components/UsersAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersIndexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersUpdateComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/LogoutComponent.html" data-type="entity-link" >LogoutComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});