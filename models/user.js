module.exports = function(mongoose) {
  var collection = 'users';
  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var schema = new Schema({
    id: ObjectId,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    score: Number,
    image_url: String,
    date: Date
  });

  return mongoose.model(collection, schema);
};