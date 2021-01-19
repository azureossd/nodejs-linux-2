module.exports = {
  tableName: "projects", 
  attributes: {
    id: { 
      type: 'number', 
      columnName :"id",
      required : true
    },
    title: {
      type: 'string',
      required: true,
      columnName: 'title'
    },
    project_manager: {
      type: 'string',
      required: true,
      columnName: 'project_manager'
    },
    number_of_tasks: {
      type: 'number',
      required: true,
      columnName: 'number_of_tasks'
    },
    start_date: {
      type: 'string',
      columnName: 'start_date'
    },
    finish_date: {
      type: 'string',
      columnName: 'finish_date'
    },
  }
};
