const axios = require('axios');
require('dotenv').config();
const {CREATE_LINKS} = require('./utils/linkQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async(event)=>{
    if(event.httpMethod !=='POST'){
        return formattedResponse(405, {err: 'Method not supported'});
    }

    const {name, url, description, archived} = JSON.parse(event.body);
    const variables={name, url, description, archived:archived??false};

   try {
       const {createLink: createdLink} = await sendQuery(CREATE_LINKS, variables);
       return formattedResponse( 200, createdLink);
   } catch (error) {
       console.log('ERRORRS',error);
       return formattedResponse( 500,{err:'Oops!! something went wrong'} );
   }
};
