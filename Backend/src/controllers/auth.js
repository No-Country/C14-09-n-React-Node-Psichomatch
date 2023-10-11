const authGoogle = async (req, res) => {
    try {
        
        res.send(req.user);
      
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = {
    authGoogle
  }