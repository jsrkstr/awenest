module.exports = function(mongoose) {
  var collection = 'comments';
  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var schema = new Schema({
    id: ObjectId,
    user_id: String,
    text: String,
    timestamp: Date,
    report_id: String,
    parent_id: String,
    likes: Number,
    dislikes: Number,
    type: String
  });

  return mongoose.model(collection, schema);
};