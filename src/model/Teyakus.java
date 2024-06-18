package model;
import java.io.Serializable;

	public class Teyakus implements Serializable {
		private int id; //ID
		private int user_id; //ユーザーID
		private int history_id; //履歴番号
		private int teyaku; //手役

	public Teyakus(){
	}

	public Teyakus(int id, int user_id, int history_id, int teyaku) {
		super();
		this.id = id;
		this.user_id = user_id;
		this.history_id = history_id;
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

	public int getTeyaku() {
	return teyaku;
	}

	public void setTeyaku(int teyaku) {
	this.teyaku = teyaku;
	}
}
