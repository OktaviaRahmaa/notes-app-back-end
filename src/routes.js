const { handler } = require("@hapi/hapi/lib/cors");
const { 
    addNoteHandler, 
    getAllNotesHAndler, 
    getNotesByIdHandler, 
    editNoteByIdHandler, 
    deleteNoteByIdHandler 
} = require("./handler");

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHAndler,
  },
  {
      method: 'GET',
      path: '/notes/{id}',
      handler: getNotesByIdHandler,
  },
  {
      method: 'PUT',
      path: '/notes/{id}',
      handler: editNoteByIdHandler,
  },
  {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: deleteNoteByIdHandler,
  },
];
 
module.exports = routes;