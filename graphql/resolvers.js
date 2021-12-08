import { getById, people } from "./db";

const resolvers = {
    Query: {
        people: () => people,
        persion: (_, { id }) => getById(id)
    }
};

export default resolvers;