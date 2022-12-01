/////////////////////////////////////////////////////////////////////
// Copyright 2022 Autodesk Inc
// Written by Develope Advocacy and Support
//
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////

'use strict';

const APSBaseUrl = 'https://developer.api.autodesk.com'


module.exports = {

  // set environment variables or hard-code here
  credentials: {
    client_id: process.env.APS_CLIENT_ID || '',
    client_secret: process.env.APS_CLIENT_SECRET || '',
    token_3legged:'' 

  },
  //ensure the callback url is same to what has been registered with the APS app
  callbackURL: process.env.APS_CALLBACK_URL || '',

  // Required scopes for your application on server-side
  scopeInternal: ['data:read'],
  // Required scope of the token sent to the client
  scopePublic: ['viewables:read'],

  //endpoints of Power BI API
  pb: {
    AuthorityUrl: 'https://login.microsoftonline.com/common',
    resourceUrl: 'https://analysis.windows.net/powerbi/api',
    apiUrl: 'https://api.powerbi.com',
    embedUrlBase: 'https://app.powerbi.com',
 
    pbiUsername: '',
    pbiPassword: '',
    applicationId: '',

    //looks screte is not required anymore 
    //applicationSecret: '<Your PowerBI application secret >', 
    workspaceId: '',
    reportId: '',
    datasetId: '',
    tableName: ''
  },

  hqv1: {
    basedUrl: 'https://developer.api.autodesk.com',
    httpHeaders: function (access_token) {
      return {
        Authorization: 'Bearer ' + access_token,
        'Content-Type': 'application/json'
      }
    },
    getUserProfileAtMe: function () {
      return this.basedUrl + '/userprofile/v1/users/@me'
    }
  },
  
  //endpoints of Model Properties API. Will replace when SDK is available
  model_property_api: {
    get_index: `${APSBaseUrl}/construction/index/v2/projects/{0}/indexes/{1}`,
    //***not exposed in the first relase**
    //post_index:`${APSBaseUrl}/construction/index/v2/projects/{0}/indexes:merge`,
    post_index_batchStatus: `${APSBaseUrl}/construction/index/v2/projects/{0}/indexes:batch-status`,

    get_query: `${APSBaseUrl}/construction/index/v2/projects/{0}/indexes/{1}/queries/{2}`,
    post_query: `${APSBaseUrl}/construction/index/v2/projects/{0}/indexes/{1}/queries`,

    get_index_manifest: `${APSBaseUrl}/construction/index/v2/projects/{0}/indexes/{1}/manifest`,
    get_index_fields: `${APSBaseUrl}/construction/index/v2/projects/{0}/indexes/{1}/fields`,
    get_index_properties: `${APSBaseUrl}/construction/index/v2/projects/{0}/indexes/{1}/properties`,

    get_index_query_properties: `${APSBaseUrl}/construction/index/v2/projects/{0}/indexes/{1}/queries/{2}/properties`,
    get_diff_query_properties: `${APSBaseUrl}/construction/index/v2/projects/{0}/diffs/{1}/queries/{2}/properties`,


    get_diff_index: `${APSBaseUrl}/construction/index/v2/projects/{0}/diffs/{1}`,
    //***not exposed in the first relase** 
    //post_diff_index:`${APSBaseUrl}/construction/index/v2/projects/{0}/diffs:merge`,
    post_diff_batchStatus: `${APSBaseUrl}/construction/index/v2/projects/{0}/diffs:batchs-status`,

    get_diff_query: `${APSBaseUrl}/construction/index/v2/projects/{0}/diffs/{1}/queries/{2}`,
    post_diff_query: `${APSBaseUrl}/construction/index/v2/projects/{0}/diffs/{1}/queries`,

    get_diff_manifest: `${APSBaseUrl}/construction/index/v2/projects/{0}/diffs/{1}/manifest`,
    get_diff_fields: `${APSBaseUrl}/construction/index/v2/projects/{0}/diffs/{1}/fields`,
    get_diff_properties: `${APSBaseUrl}/construction/index/v2/projects/{0}/diffs/{1}/properties`
  
  
  },
  httpHeaders: function (access_token) {
      return {
        Authorization: 'Bearer ' + access_token,
        'Content-Type': 'application/json' 
      }
  } 

};