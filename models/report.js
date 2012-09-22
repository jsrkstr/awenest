module.exports = function(mongoose) {
  var collection = 'reports';
  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var schema = new Schema({
    id: ObjectId,
    user_id: String,
    title: String,
    description: String,
    timestamp: Date,
    category: String,
    location: String,
    rank: Number,
    image_url: String,
    likes: Number,
    dislikes: Number
  });

  return mongoose.model(collection, schema);
};