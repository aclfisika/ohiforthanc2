"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[281],{42281:(o,e,n)=>{n.r(e),n.d(e,{cornerstone:()=>p,default:()=>g});var i=n(71771),t=n(73577);const s=JSON.parse('{"u2":"@ohif/mode-microscopy"}').u2;function l(o,e,n,i,t,s){return{id:e,icon:n,label:i,type:o,commands:t,tooltip:s}}l.bind(null,"action"),l.bind(null,"toggle");const a=l.bind(null,"tool"),c=[{id:"MeasurementTools",type:"ohif.splitButton",props:{groupId:"MeasurementTools",isRadio:!0,primary:a("line","tool-length","Line",[{commandName:"setToolActive",commandOptions:{toolName:"line"},context:"MICROSCOPY"}],"Line"),secondary:{icon:"chevron-down",label:"",isActive:!0,tooltip:"More Measure Tools"},items:[a("line","tool-length","Line",[{commandName:"setToolActive",commandOptions:{toolName:"line"},context:"MICROSCOPY"}],"Line Tool"),a("point","tool-point","Point",[{commandName:"setToolActive",commandOptions:{toolName:"point"},context:"MICROSCOPY"}],"Point Tool"),a("polygon","tool-polygon","Polygon",[{commandName:"setToolActive",commandOptions:{toolName:"polygon"},context:"MICROSCOPY"}],"Polygon Tool"),a("circle","tool-circle","Circle",[{commandName:"setToolActive",commandOptions:{toolName:"circle"},context:"MICROSCOPY"}],"Circle Tool"),a("box","tool-rectangle","Box",[{commandName:"setToolActive",commandOptions:{toolName:"box"},context:"MICROSCOPY"}],"Box Tool"),a("freehandpolygon","tool-freehand-polygon","Freehand Polygon",[{commandName:"setToolActive",commandOptions:{toolName:"freehandpolygon"},context:"MICROSCOPY"}],"Freehand Polygon Tool"),a("freehandline","tool-freehand-line","Freehand Line",[{commandName:"setToolActive",commandOptions:{toolName:"freehandline"},context:"MICROSCOPY"}],"Freehand Line Tool")]}},{id:"dragPan",type:"ohif.radioGroup",props:{type:"tool",icon:"tool-move",label:"Pan",commands:[{commandName:"setToolActive",commandOptions:{toolName:"dragPan"},context:"MICROSCOPY"}]}}],d="@ohif/extension-default.layoutTemplateModule.viewerLayout",r="@ohif/extension-default.hangingProtocolModule.default",m="@ohif/extension-default.panelModule.seriesList",p={viewport:"@ohif/extension-cornerstone.viewportModule.cornerstone"},u="@ohif/extension-dicom-video.sopClassHandlerModule.dicom-video",f="@ohif/extension-dicom-video.viewportModule.dicom-video",h="@ohif/extension-dicom-pdf.sopClassHandlerModule.dicom-pdf",y="@ohif/extension-dicom-pdf.viewportModule.dicom-pdf",M={"@ohif/extension-default":"^3.0.0","@ohif/extension-cornerstone":"^3.0.0","@ohif/extension-cornerstone-dicom-sr":"^3.0.0","@ohif/extension-dicom-pdf":"^3.0.1","@ohif/extension-dicom-video":"^3.0.1","@ohif/extension-dicom-microscopy":"^3.0.0"};const g={id:s,modeFactory:function({modeConfiguration:o}){return{id:s,routeName:"microscopy",displayName:t.Z.t("Modes:Microscopy"),onModeEnter:({servicesManager:o,extensionManager:e,commandsManager:n})=>{const{toolbarService:i}=o.services;i.init(e),i.addButtons(c),i.createButtonSection("primary",["MeasurementTools","dragPan"])},onModeExit:({servicesManager:o})=>{const{toolbarService:e}=o.services;e.reset()},validationTags:{study:[],series:[]},isValidMode:({modalities:o})=>o.split("\\").includes("SM"),routes:[{path:"microscopy",layoutTemplate:({location:o,servicesManager:e})=>({id:d,props:{leftPanels:[m],leftPanelDefaultClosed:!0,rightPanelDefaultClosed:!0,rightPanels:["@ohif/extension-dicom-microscopy.panelModule.measure"],viewports:[{namespace:"@ohif/extension-dicom-microscopy.viewportModule.microscopy-dicom",displaySetsToDisplay:["@ohif/extension-dicom-microscopy.sopClassHandlerModule.DicomMicroscopySopClassHandler","@ohif/extension-dicom-microscopy.sopClassHandlerModule.DicomMicroscopySRSopClassHandler"]},{namespace:f,displaySetsToDisplay:[u]},{namespace:y,displaySetsToDisplay:[h]}]}})}],extensions:M,hangingProtocols:[r],hangingProtocol:["default"],sopClassHandlers:["@ohif/extension-dicom-microscopy.sopClassHandlerModule.DicomMicroscopySopClassHandler","@ohif/extension-dicom-microscopy.sopClassHandlerModule.DicomMicroscopySRSopClassHandler",u,h],hotkeys:[...i.dD.defaults.hotkeyBindings],...o}},extensionDependencies:M}}}]);
//# sourceMappingURL=281.bundle.5fa45372a3e4d799e388.js.map