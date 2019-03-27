export default class Level1 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level1'
		});
	}
	preload() {
		this.load.image('boardbg', '/img/boardbg.png');
		this.load.spritesheet('cards', '/img/cards.png',
		{frameWidth:334,
		frameHeight:440,
		});
	}
	create() {
		this.gameBoard = [0, 'a-1', 'a-2', 'a-3', 'a-4', 'a-5', 'a-6', 
		'b-1', 'b-2', 'b-3','b-4','b-5','b-6',
		'c-1','c-2','c-3','c-4','c-5','c-6',
		'd-1','d-2','d-3','d-4','d-5','d-6',
		'e-1','e-2','e-3','e-4','e-5','e-6',
	     'f-1','f-2','f-3','f-4','f-5','f-6'];

		this.boardbg = this.add.image(171, 21, 'boardbg').setOrigin(0, 0).setScale(2.0,2.0);
		this.card=this.add.sprite(171,21,'cards',3).setScale(0.1,0.1).setOrigin(0, 0);

	}
	update(time, delta) {}
}
