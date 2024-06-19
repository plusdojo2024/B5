package model;
import java.io.Serializable;

	public class Teyakus implements Serializable {
		private int id; //ID
		private int userId; //ユーザーID
		private int historyId; //履歴番号
		private int teyaku; //手役

	public Teyakus(){
	}

	public Teyakus(int id, int userId, int historyId, int teyaku) {
		super();
		this.id = id;
		this.userId = userId;
		this.historyId = historyId;
		this.teyaku = teyaku;
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

	public void setUser_id(int userId) {
	this.userId = userId;
	}

	public int getHistoryId() {
	return historyId;
	}

	public void setHistoryId(int historyId) {
	this.historyId = historyId;
	}

	public int getTeyaku() {
	return teyaku;
	}

	public void setTeyaku(int teyaku) {
	this.teyaku = teyaku;
	}
}
