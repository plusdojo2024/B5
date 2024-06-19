package model;

public class Result {
	private int id; //ID
	private int user_id; //ユーザーID
	private int history_id; //履歴番号
	private int revese; //裏表
	private int tile; //牌
	private int teyaku; //手役
	

	public Result() {
}

	public Result(int id, int user_id, int history_id, int revese, int tile, int teyaku) {
		super();
		this.id = id;
		this.user_id = user_id;
		this.history_id = history_id;
		this.revese = revese;
		this.tile = tile;
		this.teyaku = teyaku;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public int getHistory_id() {
		return history_id;
	}

	public void setHistory_id(int history_id) {
		this.history_id = history_id;
	}

	public int getRevese() {
		return revese;
	}

	public void setRevese(int revese) {
		this.revese = revese;
	}

	public int getTile() {
		return tile;
	}

	public void setTile(int tile) {
		this.tile = tile;
	}

	public int getTeyaku() {
		return teyaku;
	}

	public void setTeyaku(int teyaku) {
		this.teyaku = teyaku;
	}
}
