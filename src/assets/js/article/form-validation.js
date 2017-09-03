$(form)
  .form({
    on: 'blur',
    fields: {
      title: {
        identifier  : 'title',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a title'
          }
        ]
      },
      content: {
        identifier  : 'content',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please select a content'
          }
        ]
      }
    }
  })
;
