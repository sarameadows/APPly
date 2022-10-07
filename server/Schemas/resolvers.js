const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: { 
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password');
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
    },
    Mutation: {
        // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
        login: async (parent, { email, password }) => {
            const user = await User.findOne( {email} );

            if(!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
        addJob: async (parent, { input }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                  { _id: context.user._id },
                  { $addToSet: { jobs: input } },
                  { new: true }
                );
                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addLink: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                  { _id: context.user._id },
                  { $addToSet: { ...args } },
                  { new: true }
                );
                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addNote: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                  { _id: context.user._id },
                  { $addToSet: { ...args } },
                  { new: true }
                );
                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
    }
}

module.exports = resolvers;