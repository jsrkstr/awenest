module.exports = function(mongoose) {
  var collection = 'votes';
  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var schema = new Schema({
    id: ObjectId,
    user_id: String,
    timestamp: Date,
    report_id: String,
    type: String
  });

  return mongoose.model(collection, schema);
};