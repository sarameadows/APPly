// writing up some basic resolvers to handle expected needs
// importing demo User model
const {User} = require('../models');

const resolvers = {
    Query: {
        me: async (_, _, context) => {
            // will need to use the context so i'll just have that set up already
            if (context.user) {
                // assuming log-in with email
                const {email} = context.user;

                const data = await User.findOne({email}).select('-__v -password');

                return data;
            }

            // else
            throw new Error('Not logged in.');
        }
    },
    Mutation: {
        login: async (_, args) => {
            const {email, password} = args;

            // look for user
            const user = await User.findOne({email});
            if (!user) {
                throw new Error('User not found.');
            }

            // will need to set up some means to checking if the password is correct
            // this would be defined in the user model
            // dummy method name
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new Error('Incorrect password.');
            }

            // signToken() runs here
            // will return token with user
            return user;
        },

        addUser: async (_, args) => {
            const user = await User.create(args);

            // signToken() runs here
            // will return token with user
            return user;
        },

        addJob: async (_, args, context) => {
            // will use context
            if (context.user) {
                const {_id} = context.user;
                const {jobData} = args;

                const user = await User.findOneAndUpdate(
                    {_id},
                    {$addToSet: {jobsSaved: jobData}},
                    {new: true}
                );

                return user;
            }

            // else
            throw new Error('Not logged in.');
        }
        // removeJob
        // updateJob
        // updateUser?
        // removeUser?
    }
};

module.exports = resolvers;