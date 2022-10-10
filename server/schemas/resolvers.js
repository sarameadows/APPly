const {User} = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (_, __, context) => {
            if (context.user) {
                // assuming log-in with email
                const {email} = context.user;

                const data = await User.findOne({email}).select('-__v -password');

                return data;
            }

            // else
            throw new Error('Not logged in.');
        },

        getNotes: async (_, __, context) => {
            if (context.user) {
                const {_id} = context.user;

                const data = await User.findOne({_id});

                return data;
            }

            throw new Error('Not logged in.');
        },

        getLinks: async (_, __, context) => {
            if (context.user) {
                const {_id} = context.user;

                const data = await User.findOne({_id});

                return data;
            }

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

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new Error('Incorrect password.');
            }

            const token = signToken(user);
            return {token, user};
        },

        addUser: async (_, args) => {
            const user = await User.create(args);

            const token = signToken(user);
            return {token, user};
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
        },

        updateJob: async (_, args, context) => {
            if (context.user) {
                const {_id} = context.user;
                const {jobId, jobData} = args;

                const test = await User.jobs.id(jobId);
                return test;

                // const user = await User.findOneAndUpdate(
                //     {_id},
                //     {}
                // )
            }

            throw new Error('Not logged in.');
        }
        // updateJob
        // updateUser?
        // removeUser?
    }
};

module.exports = resolvers;