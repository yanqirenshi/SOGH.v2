export default class Matchmaker {
    constructor (sogh) {
        this.sogh = sogh;
    }
    repository (node) {
        this.sogh.node2repository(node, true);
    }
    user (node) {
        this.sogh.node2user(node, true);
    }
    projectV2 (node) {
        this.sogh.node2projectV2(node, true);
    }
    team (node) {
        this.sogh.node2team(node, true);
    }
}
