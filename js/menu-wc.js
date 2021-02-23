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
                                        'data-target="#injectables-links-module-AuthorizationTokenModule-3f9c256442185182e1c35945fc052120"' : 'data-target="#xs-injectables-links-module-AuthorizationTokenModule-3f9c256442185182e1c35945fc052120"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthorizationTokenModule-3f9c256442185182e1c35945fc052120"' :
                                        'id="xs-injectables-links-module-AuthorizationTokenModule-3f9c256442185182e1c35945fc052120"' }>
                                        <li class="link">
                                            <a href="injectables/AuthorizationTokenService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthorizationTokenService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MomentModule.html" data-type="entity-link">MomentModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link">PrismaModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SecurityModule.html" data-type="entity-link">SecurityModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SecurityModule-0b966a9dbc97ea116dcf03051411337b"' : 'data-target="#xs-injectables-links-module-SecurityModule-0b966a9dbc97ea116dcf03051411337b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SecurityModule-0b966a9dbc97ea116dcf03051411337b"' :
                                        'id="xs-injectables-links-module-SecurityModule-0b966a9dbc97ea116dcf03051411337b"' }>
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
                                        'data-target="#injectables-links-module-TencentCloudModule-f4ba16bdbdcc830ed97783cd99d23e16"' : 'data-target="#xs-injectables-links-module-TencentCloudModule-f4ba16bdbdcc830ed97783cd99d23e16"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TencentCloudModule-f4ba16bdbdcc830ed97783cd99d23e16"' :
                                        'id="xs-injectables-links-module-TencentCloudModule-f4ba16bdbdcc830ed97783cd99d23e16"' }>
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
                                        'data-target="#injectables-links-module-UserModule-73fa7fd528684d90928d2457c862f45b"' : 'data-target="#xs-injectables-links-module-UserModule-73fa7fd528684d90928d2457c862f45b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-73fa7fd528684d90928d2457c862f45b"' :
                                        'id="xs-injectables-links-module-UserModule-73fa7fd528684d90928d2457c862f45b"' }>
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
                                        'data-target="#injectables-links-module-UserProfileModule-bed15332be5eb01966014097dba1f380"' : 'data-target="#xs-injectables-links-module-UserProfileModule-bed15332be5eb01966014097dba1f380"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserProfileModule-bed15332be5eb01966014097dba1f380"' :
                                        'id="xs-injectables-links-module-UserProfileModule-bed15332be5eb01966014097dba1f380"' }>
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
                                <a href="classes/DateTimeFilter.html" data-type="entity-link">DateTimeFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExecutionContext.html" data-type="entity-link">ExecutionContext</a>
                            </li>
                            <li class="link">
                                <a href="classes/MomentAudioMedia.html" data-type="entity-link">MomentAudioMedia</a>
                            </li>
                            <li class="link">
                                <a href="classes/MomentEntity.html" data-type="entity-link">MomentEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/MomentFindFirstArgs.html" data-type="entity-link">MomentFindFirstArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/MomentFindManyArgs.html" data-type="entity-link">MomentFindManyArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/MomentImageMedia.html" data-type="entity-link">MomentImageMedia</a>
                            </li>
                            <li class="link">
                                <a href="classes/MomentListRelationFilter.html" data-type="entity-link">MomentListRelationFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/MomentMediaCommon.html" data-type="entity-link">MomentMediaCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/MomentOrderByInput.html" data-type="entity-link">MomentOrderByInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/MomentResolver.html" data-type="entity-link">MomentResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/MomentVideoMedia.html" data-type="entity-link">MomentVideoMedia</a>
                            </li>
                            <li class="link">
                                <a href="classes/MomentWhereInput.html" data-type="entity-link">MomentWhereInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/MomentWhereUniqueInput.html" data-type="entity-link">MomentWhereUniqueInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SecuritySmsResolver.html" data-type="entity-link">SecuritySmsResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/StringFilter.html" data-type="entity-link">StringFilter</a>
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
                                <a href="classes/UserOrderByInput.html" data-type="entity-link">UserOrderByInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserProfileEntity.html" data-type="entity-link">UserProfileEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserProfileOrderByInput.html" data-type="entity-link">UserProfileOrderByInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserProfileRelationFilter.html" data-type="entity-link">UserProfileRelationFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserProfileResolver.html" data-type="entity-link">UserProfileResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserProfileUpdateInput.html" data-type="entity-link">UserProfileUpdateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserProfileWhereInput.html" data-type="entity-link">UserProfileWhereInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRelationFilter.html" data-type="entity-link">UserRelationFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserResolver.html" data-type="entity-link">UserResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserUpdateInput.html" data-type="entity-link">UserUpdateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserWhereInput.html" data-type="entity-link">UserWhereInput</a>
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
                            <li class="link">
                                <a href="interfaces/SocfonyConfig.html" data-type="entity-link">SocfonyConfig</a>
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