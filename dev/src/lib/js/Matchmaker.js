export default class Matchmaker {
    constructor (sogh) {
        this.sogh = sogh;
    }
    repository (node) {
        return node;
        // if (node.owner)
        //     this.sogh.node2user(node.owner);
    }
    user (node) {
        const x = this.sogh.node2user(node, true);
    }
    projectV2 (node) {
        return node;
    }
}
