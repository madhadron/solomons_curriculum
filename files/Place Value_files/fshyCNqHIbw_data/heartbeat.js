(function(g){var window=this;var eEa=function(){return{D:"svg",P:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},L:[{D:"path",P:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}}]}},fEa=function(){return{D:"svg",
P:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},L:[{D:"path",P:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}}]}},t5=function(a,b){g.OO.call(this,a,{D:"div",
I:"ytp-reminder-menu",P:{role:"menu",tabindex:"-1"},L:[{D:"div",I:"ytp-reminder-menu-contents",L:[{D:"div",I:"ytp-reminder-menu-items"}]}]},100,!0);this.u=b;this.A=[];this.menuPopupRenderer=void 0;this.items=this.aa("ytp-reminder-menu-items");this.hide()},hEa=function(a){var b=gEa(a),c=0,d={};
for(c=0;c<b.length;d={Lt:d.Lt},c++){var e=a.A[c];e||(e=new g.X({D:"div",I:"ytp-reminder-menu-item",P:{role:"menuitem",tabindex:"0"},L:[{D:"div",I:"ytp-reminder-menu-item-icon",V:"{{icon}}"},{D:"div",I:"ytp-reminder-menu-item-label",V:"{{text}}"}]}),d.Lt=c,e.ia("click",function(l){return function(){var m=l.Lt;a.Ta();m=gEa(a)[m];a.R("reminderMenuItemClicked",m.serviceEndpoint||m.command)}}(d)),e.Z(a.items),a.A[c]=e);
var f=b[c],h=null;switch(f.icon&&f.icon.iconType){case "NOTIFICATIONS":h=eEa();break;case "NOTIFICATIONS_NONE":h=fEa();break;case "NOTIFICATIONS_ACTIVE":h=g.bO()}f=f.text?g.T(f.text):"";e.update({icon:h,text:f})}for(;c<a.A.length;)a.A.pop().dispose();0===c?a.Ta():a.fc(a.u)},gEa=function(a){return(a.menuPopupRenderer&&a.menuPopupRenderer.items||[]).reduce(function(b,c){c&&c.menuServiceItemRenderer&&b.push(c.menuServiceItemRenderer);
return b},[])},u5=function(a){g.X.call(this,{D:"div",
L:[{D:"button",ca:["ytp-offline-slate-button","ytp-button"],L:[{D:"div",I:"ytp-offline-slate-button-icon",V:"{{icon}}"},{D:"div",I:"ytp-offline-slate-button-text",V:"{{text}}"}]}]});this.H=a;this.upcomingEventReminderButtonRenderer=this.toggleButtonRenderer=null;this.u=void 0;this.B=this.o=null;(this.C=this.aa("ytp-offline-slate-button"))&&this.K(this.C,"click",this.F);this.hide()},iEa=function(a,b,c){!a.toggleButtonRenderer&&b&&b.toggleButtonRenderer?a.toggleButtonRenderer=b.toggleButtonRenderer:
b&&b.toggleButtonRenderer||(a.toggleButtonRenderer=null);
!a.upcomingEventReminderButtonRenderer&&c&&c.upcomingEventReminderButtonRenderer?a.upcomingEventReminderButtonRenderer=c.upcomingEventReminderButtonRenderer:c&&c.upcomingEventReminderButtonRenderer||(a.upcomingEventReminderButtonRenderer=null);v5(a)},v5=function(a){if(a.toggleButtonRenderer){var b=a.toggleButtonRenderer;
if(b.isToggled){var c=b.toggledText?g.T(b.toggledText):"";a.update({text:c,icon:w5(b.toggledIcon)})}else c=b.defaultText?g.T(b.defaultText):"",a.update({text:c,icon:w5(b.defaultIcon)});a.show()}else a.upcomingEventReminderButtonRenderer?(b=jEa(a))?(c=b.text?g.T(b.text):"",a.update({text:c,icon:w5(b.icon)}),a.show()):a.hide():a.hide()},lEa=function(a,b,c){a.B||(a.B=new g.or(a.H.M().T));
var d=g.Fp(a.B.ff||g.Gp());g.As()&&(d.context.clientScreenNonce=g.As());d.params=c;g.Ip(a.B,b,d,{timeout:5E3,onSuccess:function(){a.upcomingEventReminderButtonRenderer&&a.u&&(a.upcomingEventReminderButtonRenderer.currentState=a.u,a.u=void 0)},
onError:function(){kEa(a)},
Jf:function(){kEa(a)}})},kEa=function(a){a.toggleButtonRenderer?(a.toggleButtonRenderer.isToggled=!a.toggleButtonRenderer.isToggled,v5(a)):a.upcomingEventReminderButtonRenderer&&(a.u=void 0,v5(a))},w5=function(a){if(!a)return null;
switch(a.iconType){case "NOTIFICATIONS":return eEa();case "NOTIFICATIONS_NONE":return fEa();case "NOTIFICATIONS_ACTIVE":return g.bO();default:return null}},jEa=function(a){if(!a.upcomingEventReminderButtonRenderer)return null;
var b=a.u||a.upcomingEventReminderButtonRenderer.currentState;a=g.q(a.upcomingEventReminderButtonRenderer.states||[]);for(var c=a.next();!c.done;c=a.next())if((c=c.value.upcomingEventReminderButtonStateRenderer)&&c.state===b&&c.button&&c.button.buttonRenderer)return c.button.buttonRenderer;return null},x5=function(a){g.X.call(this,{D:"div",
I:"ytp-offline-slate",L:[{D:"div",I:"ytp-offline-slate-background"},{D:"div",I:"ytp-offline-slate-bar",L:[{D:"span",I:"ytp-offline-slate-icon",L:[{D:"svg",P:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},L:[{D:"path",P:{d:"M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"}},
{D:"circle",P:{cx:"12",cy:"12",r:"3"}}]}]},{D:"span",I:"ytp-offline-slate-messages",L:[{D:"div",I:"ytp-offline-slate-main-text",V:"{{maintext}}"},{D:"div",I:"ytp-offline-slate-subtitle-text",V:"{{subtitletext}}"}]},{D:"span",I:"ytp-offline-slate-buttons"}]},{D:"button",ca:["ytp-offline-slate-close-button","ytp-button"],L:[g.PN()]},{D:"button",ca:["ytp-offline-slate-open-button","ytp-button"],L:[g.ON()]},{D:"div",I:"ytp-offline-slate-trailer-chip",V:"Trailer"}]});var b=this;this.api=a;this.u=this.o=
null;this.background=this.aa("ytp-offline-slate-background");this.B=this.aa("ytp-offline-slate-bar");this.C=new g.G(function(){g.I(b.B,"ytp-offline-slate-bar-fade")},15E3);
this.F=!1;this.A=new g.G(function(){g.I(b.element,"ytp-offline-slate-collapsed")},15E3);
g.E(this,this.A);g.E(this,this.C);this.countdownTimer=new g.G(this.dF,1E3,this);this.K(a,"presentingplayerstatechange",this.gF);this.K(a,"livestatedata",this.ha);a=this.aa("ytp-offline-slate-close-button");this.K(a,"click",function(){g.I(b.element,"ytp-offline-slate-collapsed")});
a=this.aa("ytp-offline-slate-open-button");this.K(a,"click",function(){g.An(b.element,"ytp-offline-slate-collapsed")});
this.hide();a=this.getVideoData();a.getPlayerResponse()&&(a=a.getPlayerResponse().playabilityStatus)&&this.ha(a)},y5=function(a,b,c){if(b){var d=null!=b.subtitleText?g.T(b.subtitleText):"";
b=c?c:null!=b.mainText?g.T(b.mainText):"";a.getVideoData();a.update({maintext:b,subtitletext:d});g.J(a.element,"ytp-offline-slate-single-text-line",!d)}},A5=function(a){g.pN.call(this,a);
var b=this;this.G=!1;this.J=0;this.C=!1;this.u=new g.G(function(){var e=b.player.M(),f=b.getVideoData();z5(b)&&(mEa(b)?(e=g.Jd(b.heartbeatParams.url,{request_id:g.rs()}),f.Ue&&(e=g.Jd(e,{vvt:f.Ue}),f.mdxEnvironment&&(e=g.Jd(e,{mdx_environment:f.mdxEnvironment}))),f.oauthToken&&(e=g.Jd(e,{access_token:f.oauthToken})),nEa(b,f,e)):oEa(b,e,f))},0);
this.o=this.heartbeatParams=null;this.A=!1;this.F=new g.Ln(1E3,6E4,1);this.sequenceNumber=0;this.offlineSlate=null;this.O=new g.or(void 0);this.utcOffsetMinutes=-(new g.Tf).getTimezoneOffset();this.B=new g.as(this);this.N=void 0;g.E(this,this.u);g.E(this,this.B);pEa(this);this.B.K(a,"heartbeatparams",this.WL);this.B.K(a,"presentingplayerstatechange",this.mJ);this.B.K(a,"videoplayerreset",this.nJ);this.B.K(a,g.$w("heartbeat"),this.lJ);this.A&&this.o&&qEa(this,this.o);var c=new g.Xw(1E3,0x7ffffffffffff,
{priority:0,namespace:"heartbeat"}),d=new g.Xw(0x8000000000000,0x8000000000000,{id:"stream_end",priority:0,namespace:"heartbeat"});g.$M(a,[c,d])},mEa=function(a){var b=a.getVideoData();
return!g.fC(a.getVideoData())||b.bB?!1:g.P(a.player.M().experiments,"use_innertube_hearbeats_for_playready")?!!b.Lc&&"widevine"===b.Lc.flavor:!0},B5=function(a){return mEa(a)?!!a.heartbeatParams:!!a.getVideoData().heartbeatToken},C5=function(a,b){if(!a.u.isActive()&&a.G){var c=a.getVideoData();
if(B5(a)||c.xa){if(void 0===b){if(a.C){var d;c=a.A?7500:(null===(d=a.heartbeatParams)||void 0===d?0:d.interval)?1E3*a.heartbeatParams.interval:a.getVideoData().RA||6E4}else c=1E3;b=c}a.u.start(b)}}},nEa=function(a,b,c){b.hm&&(c=g.Jd(c,{internalipoverride:b.hm}));
var d={cpn:b.clientPlaybackNonce};b.contextParams&&(d.context_params=b.contextParams);b.Fg&&(d.kpt=b.Fg);c=g.Jd(c,d);g.mq(c,{format:"RAW",method:"GET",timeout:3E4,onSuccess:function(e){if(!a.u.isActive()&&z5(a)){a.F.reset();a.sequenceNumber++;e=e.responseText;var f=rEa(e);if(f){a.player.la("onHeartbeat",f);var h="ok"===f.status?f.stop_heartbeat?2:0:"stop"===f.status?1:"live_stream_offline"===f.status?0:-1}else h=(h=e.match(sEa))?"0"===h[1]?0:1:-1;tEa(a,f,e,h)}},
onError:function(e){z5(a)&&D5(a,!0,"net-"+e.status)},
Jf:function(){z5(a)&&D5(a,!0,"timeout")},
withCredentials:!0})},z5=function(a){var b=a.getVideoData();
return 3===a.player.getPresentingPlayerType()||g.U(g.MM(a.player,a.getPlayerType()),4)?!1:B5(a)||b.xa?!0:(E5(a),!1)},oEa=function(a,b,c){var d={videoId:c.videoId,
sequenceNumber:a.sequenceNumber},e=g.PI();null==e.user&&(e.user={});null==e.request&&(e.request={});c.mdxEnvironment&&(e.request.mdxEnvironment=c.mdxEnvironment);c.Fg&&(e.user.kidsParent={oauthToken:c.Fg});c.Ue&&(e.user.credentialTransferTokens=[{token:c.Ue,scope:"VIDEO"}]);var f=b.deviceParams,h=b.T,l={utcOffsetMinutes:a.utcOffsetMinutes};b.experiments.experimentIds&&(l.experimentIds=b.experiments.experimentIds.map(Number));f&&(l.deviceMake=f.cbrand||"www",l.deviceModel=f.cmodel||"www",l.browserName=
f.cbr,l.browserVersion=f.cbrver,l.osName=f.cos,l.osVersion=f.cosver);h&&(l.clientName=h.gm,l.clientVersion=h.innertubeContextClientVersion,l.hl=h.bo,l.gl=h.ao);f=a.player.M();f.homeGroupInfo&&(l.homeGroupInfo=JSON.parse(f.homeGroupInfo));if(h="undefined"!==typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)l.timeZone=h;f.livingRoomAppMode&&(l.tvAppInfo={livingRoomAppMode:f.livingRoomAppMode});e.client=l;c.contextParams&&(l=c.contextParams)&&(e.activePlayers=[],e.activePlayers.push({playerContextParams:l}));
d.context=e;d.cpn=c.clientPlaybackNonce;e={heartbeatChecks:[]};if(l=c.getPlayerResponse())d.heartbeatToken=c.heartbeatToken,(l=l.playabilityStatus)&&(l=l.liveStreamability)&&l.liveStreamabilityRenderer&&e.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_LIVE_STREAM_STATUS");c.heartbeatToken&&e.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_YPC");g.lz(b)&&(e.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_UNPLUGGED"),c.Ed&&(d.context.client.unpluggedLocationInfo=c.Ed),d.context.client.unpluggedAppInfo={enableFilterMode:c.zp},
(b=a.player.getProgressState(a.getPlayerType()).ingestionTime)&&isFinite(b)&&(l={},l.clientPlayerPositionUtcMillis=""+Math.floor(1E3*b),e.unpluggedParams=l));d.heartbeatRequestParams=e;b={timeout:3E4,onSuccess:function(m){if(!a.u.isActive()&&z5(a)){var n=m.playabilityStatus,p=JSON.stringify(n)||"{}",r=-1,t=m.playabilityStatus;t&&(a.player.la("onHeartbeat",t),"OK"===t.status?r=m.stopHeartbeat?2:0:"UNPLAYABLE"===t.status?r=1:"LIVE_STREAM_OFFLINE"===t.status&&(r=0));m=r;a.sequenceNumber&&-1===m||a.F.reset();
a.sequenceNumber++;tEa(a,n,p,m)}},
onError:function(m){z5(a)&&D5(a,!0,"net-"+m.status)},
Jf:function(){z5(a)&&D5(a,!0,"timeout")}};
c.Fe()&&(b.gz="Bearer "+c.Fe());g.Ip(a.O,"player/heartbeat",d,b)},tEa=function(a,b,c,d){if(-1===d)b="decode "+g.nf(c),D5(a,!1,b);
else if(2===d)E5(a),a.C=!0;else if(a.J=0,a.u.stop(),1===d){a.C=!1;a=a.player;d="LICENSE";var e=rEa(c);e?c=e.reason||g.EO[d]||"":((c=c.match(sEa))&&(c=Number(c[1]))&&(d=g.VG(c)),c=g.EO[d]||"");a.app.A.Ad("heartbeat.stop",c,void 0,void 0);g.pr("heartbeatActionPlayerHalted",uEa(b))}else a.C=!0,c=0,a.A&&b&&(c=qEa(a,b),a.player.R("livestatedata",b)),c?C5(a,c):C5(a)},qEa=function(a,b){var c=b.liveStreamability&&b.liveStreamability.liveStreamabilityRenderer,d=!(!c||!c.switchStreamsImmediately),e=vEa(c),
f=a.getVideoData(),h=g.MM(a.player,a.getPlayerType());
if(h.yb()&&!g.mC(f)&&!a.player.isAtLiveHead(a.getPlayerType())&&!d)return e;d=c&&c.streamTransitionEndpoint&&c.streamTransitionEndpoint.watchEndpoint;var l=c&&c.transitionTiming;if(d)if("STREAM_TRANSITION_TIMING_AT_STREAM_END"===l)a.N=d;else if(wEa(a,d))return e;if("OK"===b.status.toUpperCase()){d=c&&c.broadcastId;d=d!==(a.o&&a.o.liveStreamability&&a.o.liveStreamability.liveStreamabilityRenderer&&a.o.liveStreamability.liveStreamabilityRenderer.broadcastId)&&(null!=d||a.player.da("web_player_heartbeat_undefined_killswitch"));
if(!f.hlsvp&&!f.Be||d)return h={video_id:f.videoId},f.kr&&(h.is_live_destination="1"),a.player.da("web_player_heartbeat_request_watch_next")||(h.disable_watch_next=!0,h.raw_watch_next_response=f.watchNextResponse),h.autonav_state=f.autonavState,a.Id()&&g.lN(a.player,8),f.hlsvp||f.Be?d&&F5("HEARTBEAT_ACTION_TRANSITION_REASON_BROADCAST_ID_CHANGED"):F5("HEARTBEAT_ACTION_TRANSITION_REASON_LIVE_STREAM_WENT_ONLINE"),a.player.loadVideoByPlayerVars(h),e;g.aN(a.player,"heartbeat",a.getPlayerType())}c&&c.displayEndscreen&&
(f=a.player.M(),a.offlineSlate?(f=a.offlineSlate,f.F=!0,f.Pa&&g.zT(f.api.app,void 0)):g.P(f.experiments,"html5_heartbeat_set_ended")&&g.dI(h)&&g.zT(a.player.app,void 0));return e},vEa=function(a){var b=0;
a&&a.pollDelayMs&&(a=Number(a.pollDelayMs))&&(b=a);return b},D5=function(a,b,c){if(!a.u.isActive()){a.u.stop();
a.J++;var d=a.getVideoData();if(d.TA||b&&!g.fC(a.getVideoData())&&!B5(a)&&d.xa)var e=!1;else{var f;(null===(e=a.heartbeatParams)||void 0===e?0:e.Zo)?f=a.heartbeatParams.Zo:f=d.SA||5;e=a.J>=f}e?(b?(b="heartbeat.net",e={enforcedPolicyToHaltOnNetworkFailure:!0}):(b="heartbeat.servererror",e=uEa()),g.pr("heartbeatActionPlayerHalted",e),(e=a.getVideoData())&&e.xa?a.player.app.A.Ad(b,"Video playback interrupted. Please try again.",c,void 0):a.player.app.A.Ad(b,"Sorry, there was an error licensing this video.",
c,void 0)):(C5(a,a.F.getValue()),g.Mn(a.F))}},uEa=function(a){var b={enforcedPolicyToHaltOnNetworkFailure:!1};
a&&(b.serializedServerContext=a.additionalLoggingData);return b},F5=function(a){g.pr("heartbeatActionPlayerTransitioned",{trigger:"HEARTBEAT_ACTION_TRIGGER_IMMEDIATE",
reason:a})},E5=function(a){a.J=0;
a.u.stop();a.C=!1;a.sequenceNumber=0},pEa=function(a){var b=a.getVideoData(),c=a.player.M();
if(!b.xa)!g.P(c.experiments,"html5_release_post_live_heartbeat_killswitch")&&g.jb(b.Nd,"heartbeat")&&g.aN(a.player,"heartbeat",a.getPlayerType());else if(!g.Ux(c.B))a.player.app.A.Ad("html5.unsupportedlive","HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nolive.1",void 0);else if(g.P(c.experiments,"live_fresca_v2")){a.A=!0;a.G=!0;if(!g.$y(c)||g.lz(c))a.offlineSlate=new x5(a.player),g.E(a,a.offlineSlate),g.dN(a.player,a.offlineSlate.element,4);(b=b.getPlayerResponse())&&b.playabilityStatus&&(a.o=b.playabilityStatus);
a.o?(b=vEa(a.o.liveStreamability&&a.o.liveStreamability.liveStreamabilityRenderer))?C5(a,b):C5(a,7500):C5(a,1E3)}},wEa=function(a,b){var c=b&&b.videoId;
return c?(g.IU(a.player.app,c,void 0,void 0,!0,b),F5("HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),!0):!1},rEa=function(a){try{var b=JSON.parse(a);
return null!=b?b:void 0}catch(c){}};
g.u(t5,g.OO);t5.prototype.hide=function(){this.u&&this.u.removeAttribute("aria-haspopup");g.OO.prototype.hide.call(this)};
t5.prototype.show=function(){this.u&&this.u.setAttribute("aria-haspopup","true");g.OO.prototype.show.call(this)};
t5.prototype.W=function(){g.ag(this.A);g.OO.prototype.W.call(this)};g.u(u5,g.X);
u5.prototype.F=function(){if(this.toggleButtonRenderer){var a=this.toggleButtonRenderer;a.isToggled?this.A(a.toggledServiceEndpoint):this.A(a.defaultServiceEndpoint);a.isToggled=!a.isToggled;v5(this)}else if(this.upcomingEventReminderButtonRenderer)if(this.o&&this.o.Pa)this.o.Ta();else{var b=jEa(this);b&&this.A(b.serviceEndpoint||b.command);b=g.q(b&&b.command&&b.command.commandExecutorCommand&&b.command.commandExecutorCommand.commands||[]);for(var c=b.next();!c.done;c=b.next())if((c=c.value)&&c.openPopupAction&&
c.openPopupAction.popup&&c.openPopupAction.popup.menuPopupRenderer){a=c.openPopupAction.popup.menuPopupRenderer;break}this.o||(this.o=new t5(this.H,this.C),this.o.Z(this.element),g.E(this,this.o),this.o.subscribe("reminderMenuItemClicked",this.A,this));b=this.o;b.menuPopupRenderer=a;hEa(b)}};
u5.prototype.A=function(a){if(a&&(a.addUpcomingEventReminderEndpoint||a.removeUpcomingEventReminderEndpoint)){if(a.addUpcomingEventReminderEndpoint){var b=a.addUpcomingEventReminderEndpoint;var c="notification/add_upcoming_event_reminder"}else a.removeUpcomingEventReminderEndpoint&&(b=a.removeUpcomingEventReminderEndpoint,c="notification/remove_upcoming_event_reminder");if(c&&b&&b.params)for(lEa(this,c,b.params),a=g.q(b.commands||[]),b=a.next();!b.done;b=a.next())if((b=b.value)&&b.updateUpcomingEventReminderButtonStateCommand){this.u=
b.updateUpcomingEventReminderButtonStateCommand.state;v5(this);break}}};g.u(x5,g.X);g.k=x5.prototype;g.k.getPlayerType=function(){if(this.Id())return 1};
g.k.getVideoData=function(){return this.api.getVideoData(this.getPlayerType())};
g.k.Id=function(){return 8===this.api.getPresentingPlayerType()};
g.k.ha=function(a){var b=a&&a.liveStreamability&&a.liveStreamability.liveStreamabilityRenderer.offlineSlate;if(b){this.o=a;b=b.liveStreamOfflineSlateRenderer;b.canShowCountdown?this.dF():y5(this,b);var c=a&&a.liveStreamability&&a.liveStreamability.liveStreamabilityRenderer&&a.liveStreamability.liveStreamabilityRenderer.offlineSlate&&a.liveStreamability.liveStreamabilityRenderer.offlineSlate.liveStreamOfflineSlateRenderer&&a.liveStreamability.liveStreamabilityRenderer.offlineSlate.liveStreamOfflineSlateRenderer.thumbnail;
if(c){var d=0,e=null;c=c.thumbnails;for(var f=0;f<c.length;f++)c[f].width>d&&(d=c[f].width||0,e=c[f].url);e&&(this.background.style.backgroundImage="url("+e+")")}else this.background.style.backgroundImage="";b.actionButtons||b.reminderButton?(this.u||(this.u=new u5(this.api),this.u.Z(this.aa("ytp-offline-slate-buttons")),g.E(this,this.u)),iEa(this.u,b.actionButtons&&b.actionButtons[0],b.reminderButton)):this.u&&iEa(this.u,null,null);g.An(this.B,"ytp-offline-slate-bar-fade");this.C.start();this.o=
a}else this.o=null;this.gF()};
g.k.gF=function(a){if(this.Id())var b=!0;else{var c=g.MM(this.api),d=this.getVideoData();b=d.xa&&(g.dI(c)||g.U(c,2)||g.U(c,64));var e=2===d.autonavState&&g.U(c,2);c=c.yb()&&!g.mC(d)&&!this.api.isAtLiveHead(void 0,!0);b=b&&!c&&!e}b&&this.o&&"LIVE_STREAM_OFFLINE"===this.o.status.toUpperCase()?this.Pa?a&&g.WJ(a,2)&&(g.An(this.element,"ytp-offline-slate-collapsed"),this.A.stop()):(a=this.Id(),g.J(this.element,"ytp-offline-slate-premiere-trailer",a),this.show(),this.A.start(),this.api.R("offlineslatestatechange"),
this.F&&g.zT(this.api.app,void 0)):this.Pa&&(this.hide(),this.api.R("offlineslatestatechange"))};
g.k.dF=function(){var a=this.o&&this.o.liveStreamability&&this.o.liveStreamability.liveStreamabilityRenderer&&this.o.liveStreamability.liveStreamabilityRenderer.offlineSlate&&this.o.liveStreamability.liveStreamabilityRenderer.offlineSlate.liveStreamOfflineSlateRenderer;if(a){var b=Math.floor(g.z()/1E3),c=a.canShowCountdown&&Number(a.scheduledStartTime);!c||c<=b?(y5(this,a),this.countdownTimer.stop()):(b=g.fD(c-b),y5(this,a,b),this.countdownTimer.ob())}};
g.k.W=function(){this.countdownTimer.dispose();this.countdownTimer=null;g.X.prototype.W.call(this)};g.u(A5,g.pN);g.k=A5.prototype;g.k.W=function(){E5(this);g.BQ(this.player.app,"heartbeat",void 0);g.pN.prototype.W.call(this)};
g.k.lJ=function(a){this.G=!0;C5(this,2E3);a&&"stream_end"===a.getId()&&wEa(this,this.N)};
g.k.WL=function(a){this.heartbeatParams=a;C5(this,2E3)};
g.k.mJ=function(a){this.Id()||(g.U(a.state,2)||g.U(a.state,64)?(E5(this),this.A&&(this.G=!0,C5(this,1E3))):(g.U(a.state,1)||g.U(a.state,8))&&C5(this,2E3))};
g.k.nJ=function(){3!==this.player.getPresentingPlayerType()&&C5(this,2E3)};
g.k.getPlayerType=function(){if(this.Id())return 1};
g.k.getVideoData=function(){return this.player.getVideoData(this.getPlayerType())};
g.k.Id=function(){return 8===this.player.getPresentingPlayerType()};
g.k.Vg=function(a){switch(a){case 4:case 3:return!1}return!0};
g.k.AI=function(){return!!this.offlineSlate&&this.offlineSlate.Pa};
var sEa=/^GLS\/1.0 (\d+) (\w+).*?\r\n\r\n([\S\s]*)$/;g.AN.heartbeat=A5;})(_yt_player);
