const GET_LINKS=`
    query {
        allLinks{
          data{
            _id
            name
            url
            description
            archived
          }
        }
      }`;


const CREATE_LINKS=`
    mutation($name: String!, $url: String!, $description: String!,$archived:Boolean){
        createLink(data: {name:$name, url:$url, description:$description, archived:$archived}){
            _id
            name
            url
            description
            archived
        }

    }`;

const UPDATE_LINKS = `
    mutation($id:ID!,$name: String!, $url: String!, $description: String!,$archived:Boolean!){
        updateLink(id:$id,data:{name: $name, url: $url, description: $description, archived: $archived}){
            _id
            name
            url
            description
            archived
          } 
    }`;

const DELETE_LINKS = `
    mutation($id: ID!) {
          deleteLink( id: $id) {
              _id
          }
      }`;

module.exports={
    GET_LINKS,
    CREATE_LINKS,
    UPDATE_LINKS,
    DELETE_LINKS
}