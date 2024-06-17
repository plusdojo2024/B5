package model;

import java.io.Serializable;

public class Hands implements Serializable {
	private int id;/*ID*/
	private int userId;/*ユーザーID*/
	private int historyId;/*履歴番号*/
	private int tile;/*牌*/
	private int gameNum;/*巡目*/
	private int disposeNum;/*捨て巡*/

	public Hands(){

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int user_id) {
		this.userId = user_id;
	}

	public int getHistoryId() {
		return historyId;
	}

	public void setHistoryId(int history_id) {
		this.historyId = history_id;
	}

	public int getTile() {
		return tile;
	}

	public void setTile(int tile) {
		this.tile = tile;
	}

	public int getGameNum() {
		return gameNum;
	}

	public void setGameNum(int game_num) {
		this.gameNum = game_num;
	}

	public int getDisposeNum() {
		return disposeNum;
	}

	public void setDisposeNum(int dispose_num) {
		this.disposeNum = dispose_num;
	}
}
