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

'use strict';     

var APSSDK = require('forge-apis');
 
async function getProjects(input) {

  return new Promise((resolve, reject) => { 

    var projectsAPI = new APSSDK.ProjectsApi();;

      projectsAPI.getHubProjects(input.hubId, {},
        input.oAuth,input.credentials)
        .then( (response) =>{

          console.log('get projects succeeded!'); 
          var projects= []; 
          response.body.data.forEach(function (project) {
            var projectType = 'projects';
            //filter out with bim360 or acc projects only

            switch (project.attributes.extension.data.projectType) {
              //case 'projects:autodesk.core:Project':
              //  projectType = 'a360projects';
              //  break;
              case 'BIM360':
                projectType = 'bim360projects';
                projects.push({id:project.id,name:project.attributes.name,type:'bim360projects'})
                break;
              case 'ACC':
                  projectType = 'accprojects';
                  projects.push({id:project.id,name:project.attributes.name,type:'accprojects'})
                  break;
            } 
            //projects.push({id:project.id,name:project.attributes.name,type:'bim360projects'}) 
          }); 
          resolve(projects);    
      })
      .catch(function (error) {
        console.log('get projects failed!'); 
        reject({error:error});
      });
    });
}

async function getProject(input) {

  return new Promise((resolve, reject) => { 

    var projects = new APSSDK.ProjectsApi(); 
    projects.getProject(input.hubId, input.projectId,
                        input.oAuth,input.credentials)
      .then(function (response) {

        console.log('get one project succeeded!'); 
        const data  =  response.body.data
        resolve({id:data.id,
                name:data.attributes.name,
                type:data.attributes.type,
                rootFolder: data.relationships.rootFolder.data.id,
                containerId:data.relationships.issues.data.id});  
      })
      .catch(function (error) {
        console.log('get one project failed!'); 
        reject({error:error});
      });
  });
}

 
module.exports = { 
  getProjects:getProjects,
  getProject:getProject 
}


 


