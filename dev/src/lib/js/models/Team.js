import GraphQLNode from './GraphQLNode.js';

export default class Team extends GraphQLNode {
    // constructor (data) {
    //     super(data);
    // }
    name () {
        return this._core.name || null;
    }
    email () {
        return this._core.email || null;
    }
    url () {
        return this._core.url || null;
    }
    description () {
        return this._core.description || null;
    }
    company () {
        return this._core.company || null;
    }
    avatarUrl () {
        return this._core.avatarUrl || null;
    }
    organization () {
        return this._core.organization || null;
    }
}
