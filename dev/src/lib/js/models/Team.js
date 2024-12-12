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
        const id = this.core().organization.id;

        if (!id) return null;

        return this.sogh().organization(id) ;
    }
    members () {
        return this.cores2objects(
            (sogh, edge)=> sogh.user(edge.node.id),
            this.core().members);
    }
    projectsV2 () {
        return this.cores2objects(
            (sogh, edge)=> sogh.projectV2(edge.node.id),
            this.core().projectsV2);
    }
    repositories () {
        return this.cores2objects(
            (sogh, edge)=> sogh.repository(edge.node.id),
            this.core().repositories);
    }
    teams () {
        return this.cores2objects(
            (sogh, edge)=> sogh.team(edge.node.id),
            this.core().teams);
    }
}
