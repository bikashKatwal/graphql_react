const axios = require('axios');
require('dotenv').config();
const {UPDATE_LINKS} = require('./utils/linkQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async(event)=>{
    if(event.httpMethod !=='PUT'){
        return formattedResponse(405, {err: 'Method not supported'});
    }

    const {_id:id, name, url, description, archived} = JSON.parse(event.body);
    const variables = { id, name, url, description, archived:archived??false};

   try {
       const {updateLink: updatedLink} = await sendQuery(UPDATE_LINKS, variables);
       return formattedResponse( 200, updatedLink);
   } catch (error) {
       console.log('ERRORRS',error);
       return formattedResponse( 500,{err:'Oops!! something went wrong'} );
   }
};
