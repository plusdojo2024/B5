package model;

import java.io.Serializable;

public class Historys implements Serializable{


	private int id;
	private int userId;
	private String matchDay;
	private int rank;
	private int point;
	private int people;

	public Historys() {

	}

	public Historys(int id, int userId, String matchDay, int rank, int point, int people) {
		super();
		this.id = id;
		this.userId = userId;
		this.matchDay = matchDay;
		this.rank = rank;
		this.point = point;
		this.people = people;
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

	public String getMatchDay() {
		return matchDay;
	}

	public void setMatchDay(String matchDay) {
		this.matchDay = matchDay;
	}

	public int getRank() {
		return rank;
	}

	public void setRank(int rank) {
		this.rank = rank;
	}

	public int getPoint() {
		return point;
	}

	public void setPoint(int point) {
		this.point = point;
	}

	public int getPeople() {
		return people;
	}

	public void setPeople(int people) {
		this.people = people;
	}
}
