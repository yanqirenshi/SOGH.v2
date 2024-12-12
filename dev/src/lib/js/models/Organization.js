import GraphQLNode from './GraphQLNode.js';

export default class Organization extends GraphQLNode {
    // constructor (data) {
    //     super(data);
    // }
    name () {
        return this._core.name || null;
    }
    description () {
        return this._core.description || null;
    }
    descriptionHTML () {
        return this._core.descriptionHTML || null;
    }
    url () {
        return this._core.url || null;
    }
    avatarUrl () {
        return this._core.avatarUrl || null;
    }
    cores2objects (getter, cores) {
        if (!cores)
            return [];

        const sogh = this.sogh();

        return cores.edges.map(edge => getter(sogh, edge));
    }
    members () {
        return this.cores2objects(
            (sogh, edge)=> sogh.user(edge.node.id),
            this.core().membersWithRole
        );
    }
    projectsV2 () {
        return this.cores2objects(
            (sogh, edge)=> sogh.projectV2(edge.node.id),
            this.core().projectsV2
        );
    }
    repositories () {
        return this.cores2objects(
            (sogh, edge)=> sogh.repository(edge.node.id),
            this.core().repositories
        );
    }
    teams () {
        return this.cores2objects(
            (sogh, edge)=> sogh.team(edge.node.id),
            this.core().teams
        );
    }
}
