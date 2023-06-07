const Topic = require('./../Model/topic');

const getAll = async (req, res) => {
  try {
    const topics = await Topic.find({});
    res.send(topics);
  } catch (error) {
    console.error(error);
  }
};
const postOne = async (req, res) => {
  console.log(req.body)
  try {
    const { title, score } = req.body;
    const date = new Date().toLocaleDateString("de-DE");
    const result = await Topic.create({ title, date, score });
    console.log(result)
    res.send(result);
  } 
  catch (error) {
    console.error(error);
  }
};

const updateOne = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Topic.findOne({ _id: id });
    const { title ,score} = req.body;
    // result.title = title;
    result.score=score;
    await result.save();
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};

const deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Topic.deleteOne({ _id: id });
    // console.log(result);
    res.send(result);
  } catch {
    console.error(error);
  }
};

module.exports = {
  getAll,
  postOne,
  deleteOne,
  updateOne,
};
