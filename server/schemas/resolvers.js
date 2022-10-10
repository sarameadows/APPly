// writing up some basic resolvers to handle expected needs
// importing demo User model
const {User} = require('../models/User');

const resolvers = {
    Query: {
        me: async (_, args, context) => {
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
                    {$addToSet: {jobs: jobData}},
                    {new: true}
                );

                return user;
            }

            // else
            throw new Error('Not logged in.');
        },

        addLink: async (_, args, context) => {
            if (context.user) {
                const {_id} = context.user;
                const {name, link} = args;
                const newLink = {
                    name: name,
                    link: link
                };

                const user = await User.findOneAndUpdate(
                    {_id},
                    {$addToSet: {links: newLink}},
                    {new: true}
                );

                return user;
            }

            // else
            throw new Error('Not logged in.');
        },

        addNote: async (_, args, context) => {
            if (context.user) {
                const {_id} = context.user;
                const {title, text} = args;
                const newNote = {
                    title: title,
                    text: text
                };

                const user = await User.findOneAndUpdate(
                    {_id},
                    {$addToSet: {notes: newNote}},
                    {new: true}
                );

                return user;
            }

            throw new Error('Not logged in.');
        },

        removeJob: async (_, args, context) => {
            if (context.user) {
                const {_id} = context.user;
                const {jobId} = args;

                const user = await User.findOneAndUpdate(
                    {_id},
                    {$pull: {jobs: {jobId}}},
                    {new: true}
                );

                return user;
            }

            throw new Error('Not logged in.');
        },

        removeLink: async (_, args, context) => {
            if (context.user) {
                const {_id} = context.user;
                const {linkId} = args;

                const user = await User.findOneAndUpdate(
                    {_id},
                    {$pull: {links: {linkId}}},
                    {new: true}
                );

                return user;
            }

            throw new Error('Not logged in.');
        },

        removeNote: async (_, args, context) => {
            if (context.user) {
                const {_id} = context.user;
                const {noteId} = args;

                const user = await User.findOneAndUpdate(
                    {_id},
                    {$pull: {notes: {noteId}}},
                    {new: true}
                );

                return user;
            }

            throw new Error('Not logged in.');
        }
        // updateJob
        // updateUser?
        // removeUser?
    }
};

module.exports = resolvers;