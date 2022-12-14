/////////////////////////////////////////////////////////////////////
// Copyright 2022 Autodesk Inc
// Written by Develope Advocacy and Support
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

class oAuth{ 
  constructor() {  
  }

  async APSSignIn() {
       $.ajax({
        url: '/oauth/url',
        success: function (rootUrl) {
          location.href = rootUrl
        }
      }); 
  }

  async APSLogoff() {
       $.ajax({
        url: '/oauth/logoff',
        success: function (oauthUrl) {
          location.href = oauthUrl;
        }
      }) 
  } 

   getAPSToken() {
      var token = '';
      $.ajax({
        url: '/oauth/publictoken',
        success: function (res) {
          token = res;
        },
        async: false // this request must be synchronous for the APS Viewer
      });
      return token; 
  }

  async getAPSUserProfile() {
    return new Promise((resolve, reject) => {   
         jQuery.ajax({
          url: '/dm/user/profile',
          success: function (profile) {
            resolve(profile);
          }
        })
      })
  }

}
 


