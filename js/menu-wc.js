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
                    <a href="index.html" data-type="index-link">Socfony Server</a>
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
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
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
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthorizationTokenModule.html" data-type="entity-link">AuthorizationTokenModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthorizationTokenModule-fe3a496ad150f7bca4df8883507fef51"' : 'data-target="#xs-injectables-links-module-AuthorizationTokenModule-fe3a496ad150f7bca4df8883507fef51"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthorizationTokenModule-fe3a496ad150f7bca4df8883507fef51"' :
                                        'id="xs-injectables-links-module-AuthorizationTokenModule-fe3a496ad150f7bca4df8883507fef51"' }>
                                        <li class="link">
                                            <a href="injectables/AuthorizationTokenService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthorizationTokenService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link">PrismaModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SecurityModule.html" data-type="entity-link">SecurityModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SecurityModule-a5bf6428f08e0f2842bf5a1a3ef1a645"' : 'data-target="#xs-injectables-links-module-SecurityModule-a5bf6428f08e0f2842bf5a1a3ef1a645"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SecurityModule-a5bf6428f08e0f2842bf5a1a3ef1a645"' :
                                        'id="xs-injectables-links-module-SecurityModule-a5bf6428f08e0f2842bf5a1a3ef1a645"' }>
                                        <li class="link">
                                            <a href="injectables/SecuritySmsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SecuritySmsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TencentCloudModule.html" data-type="entity-link">TencentCloudModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TencentCloudModule-6c8a45e9c86b71885975d19bef36a977"' : 'data-target="#xs-injectables-links-module-TencentCloudModule-6c8a45e9c86b71885975d19bef36a977"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TencentCloudModule-6c8a45e9c86b71885975d19bef36a977"' :
                                        'id="xs-injectables-links-module-TencentCloudModule-6c8a45e9c86b71885975d19bef36a977"' }>
                                        <li class="link">
                                            <a href="injectables/TencentCloudCosService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TencentCloudCosService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TencentCloudSmsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TencentCloudSmsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TencentCloudStsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TencentCloudStsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-e7f58a242bb2836f792f99da4c499eea"' : 'data-target="#xs-injectables-links-module-UserModule-e7f58a242bb2836f792f99da4c499eea"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-e7f58a242bb2836f792f99da4c499eea"' :
                                        'id="xs-injectables-links-module-UserModule-e7f58a242bb2836f792f99da4c499eea"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserProfileModule.html" data-type="entity-link">UserProfileModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserProfileModule-461c204016852315c11661c4f2c6acd0"' : 'data-target="#xs-injectables-links-module-UserProfileModule-461c204016852315c11661c4f2c6acd0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserProfileModule-461c204016852315c11661c4f2c6acd0"' :
                                        'id="xs-injectables-links-module-UserProfileModule-461c204016852315c11661c4f2c6acd0"' }>
                                        <li class="link">
                                            <a href="injectables/UserProfileService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserProfileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthorizationTokenEntity.html" data-type="entity-link">AuthorizationTokenEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthorizationTokenEntityResolver.html" data-type="entity-link">AuthorizationTokenEntityResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAuthorizationTokenArgs.html" data-type="entity-link">CreateAuthorizationTokenArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExecutionContext.html" data-type="entity-link">ExecutionContext</a>
                            </li>
                            <li class="link">
                                <a href="classes/SecuritySmsResolver.html" data-type="entity-link">SecuritySmsResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/TencentCloudCosCredentials.html" data-type="entity-link">TencentCloudCosCredentials</a>
                            </li>
                            <li class="link">
                                <a href="classes/TencentCloudCosResolver.html" data-type="entity-link">TencentCloudCosResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/TencentCloudStsCredentials.html" data-type="entity-link">TencentCloudStsCredentials</a>
                            </li>
                            <li class="link">
                                <a href="classes/TencentCloudStsFederationToken.html" data-type="entity-link">TencentCloudStsFederationToken</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateViewerArgs.html" data-type="entity-link">UpdateViewerArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserEntity.html" data-type="entity-link">UserEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserInterface.html" data-type="entity-link">UserInterface</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserInterfaceResolver.html" data-type="entity-link">UserInterfaceResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserProfileEntity.html" data-type="entity-link">UserProfileEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserProfileResolver.html" data-type="entity-link">UserProfileResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserProfileUpdateInput.html" data-type="entity-link">UserProfileUpdateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserResolver.html" data-type="entity-link">UserResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserUpdateInput.html" data-type="entity-link">UserUpdateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserWhereUniqueInput.html" data-type="entity-link">UserWhereUniqueInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ViewerEntity.html" data-type="entity-link">ViewerEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ViewerResolver.html" data-type="entity-link">ViewerResolver</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/TencentCloudCosService.html" data-type="entity-link">TencentCloudCosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TencentCloudSmsService.html" data-type="entity-link">TencentCloudSmsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TencentCloudStsService.html" data-type="entity-link">TencentCloudStsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthorizationGuard.html" data-type="entity-link">AuthorizationGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthDecoratorOptions.html" data-type="entity-link">AuthDecoratorOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthorizationTokenValidityPeriod.html" data-type="entity-link">AuthorizationTokenValidityPeriod</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
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