const { model, Schema } = require('mongoose');

const artworkSchema = new Schema({
  title: {
    type: String,
    // required: true
  },

  description: {
    type: String
  },

  imageUrl: {
    type: String,
    // required: true
  },

  artist: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    
  },

  date: {
    type: String,
    // required: true
  },

  // comments: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Comment'
  // }]
});

const Artwork = model('Artwork', artworkSchema);

module.exports = Artwork;