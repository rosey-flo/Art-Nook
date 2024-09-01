const { User, Artwork } = require('../models');
const { sign } = require('jsonwebtoken');
const { GraphQLError } = require('graphql');

function createToken(user_id) {
  const token = sign({ user_id: user_id }, process.env.JWT_SECRET);

  return token;
}

//if we want to set a limit on the token for 1 hour:
//{ expiresIn: '1h' }

const resolvers = {
  Query: {
    async getUser(_, args, context) {
      const user_id = context.user_id;

      if (!user_id) {
        return {
          user: null
        }
      }

      const user = await User.findById(user_id);

      if (!user) {
        return {
          user: null
        }
      }

      return {
        user
      };
    },

    async getUserArtwork(_, args, context) {
      const user_id = context.user_id;

      if (!user_id) {
        throw new GraphQLError({
          message: 'Not Authorized'
        })
      }

      const user = await User.findById(user_id).populate('artwork');

      return user.artwork;
    },


    async getAllArtwork() {
      const artwork = await Artwork.find().populate('artist')

      return artwork;
    }
  },

  Mutation: {
    async registerUser(_, args, context) {
      try {
        const user = await User.create(args);

        // Create a cookie and attach a JWT token
        const token = createToken(user._id);

        context.res.cookie('token', token, {
          httpOnly: true
        });

        return {
          message: 'User registered successfully!',
          user
        }
      } catch (error) {
        console.log('register error', error);

        if (error.code === 11000) {
          throw new GraphQLError('A user with that email address or username already exists')
        }

        throw new GraphQLError(error.message.split(':')[2].trim());
      }
    },

    async loginUser(_, args, context) {
      const user = await User.findOne({
        email: args.email
      });

      if (!user) {
        throw new GraphQLError('No user found by that email address.');
      }

      const valid_pass = await user.validatePassword(args.password);

      if (!valid_pass) {
        throw new GraphQLError('Password incorrect.');
      }

      const token = createToken(user._id); // Create a JWT

      context.res.cookie('token', token, {
        httpOnly: true
      }); // Send a cookie with the JWT attached

      return {
        message: 'Logged in successfully!',
        user
      }
    },

    logoutUser(_, args, context) {
      context.res.clearCookie('token');

      return {
        message: 'Logged out successfully'
      }
    },

    // Artwork Resolvers

    async addArtwork(_, args, context) {
      const user_id = context.user_id;

      if (!user_id) {
        throw new GraphQLError('You are not authorized to perform that action')
      }

      const user = await User.findById(user_id);
      const artwork = await Artwork.create({
        ...args,
        user: user._id,
				
      });

      user.artwork.push(artwork._id);
      await user.save();

			console.log(user)

      return artwork.populate('artist')
    },

    //EXTRA OPTIONAL TO UPDATE ARTWORK
    async updateArtwork(_, args, context) {
      const user_id = context.user_id;
			console.log(args)
      if (!user_id) {
        throw new GraphQLError('You are not authorized to perform that action');
      }

      const artwork = await Artwork.findById(args.id);

      if (!artwork || !artwork.artist.equals(user_id)) {
        throw new GraphQLError('You can only update artworks you created');
      }

      const updatedArtwork = await Artwork.findByIdAndUpdate(args.id, {title: args.title, description: args.description, imageUrl: args.imageUrl}, { new: true });
      return updatedArtwork;
    },

    async deleteArtwork(_, args, context) {
      const user_id = context.user_id;

      if (!user_id) {
        throw new GraphQLError('You are not authorized to perform that action')
      }
			console.log(args)
      const user = await User.findById(user_id);

      if (!user.artwork.includes(args.id)) {
        throw new GraphQLError('You cannot delete an artwork that you did not add');
      }

			

      await Artwork.deleteOne({
        _id: args.id
      });

      user.artwork.pull(args.id);
      await user.save();

      return {
        message: 'Artwork deleted successfully'
      }
    }
  }
};

module.exports = resolvers;