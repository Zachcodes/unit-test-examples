module.exports = {
  async getData(req, res) {
    const db = req.app.get('db');
    const [person] = await db.people.find({
      id: 1
    });
    res.send(person);
  }
};
