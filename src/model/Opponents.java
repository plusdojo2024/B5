package model;

import java.io.Serializable;

public class Opponents implements Serializable {


	private int id;
	private int userId;
	private int historyId;
	private String name;
	private int rank;
	private int point;

	public Opponents() {

	}

	public Opponents(int id, int userId, int historyId, String name, int rank, int point) {
		super();
		this.id = id;
		this.userId = userId;
		this.historyId = historyId;
		this.name = name;
		this.rank = rank;
		this.point = point;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getRank() {
		return rank;
	}

	public void setRank(int rank) {
		this.rank = rank;
	}

	public int getpoint() {
		return point;
	}

	public void setPoint(int point) {
		this.point = point;
	}
}
