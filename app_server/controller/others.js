/* GET homepage */
const about = (req, res) => {
    res.render('generic-text',
      {
        title: 'About Post-it',
        content: 'Post-it allows you to post anything and discover new things.'
      }
    );
  };
  
  module.exports = {
    about
  };