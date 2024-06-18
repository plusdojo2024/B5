package model;
import java.io.Serializable;

public class Historys  implements Serializable{


	private int id;
	private int userId;
	private String match_day;
	private int rank;
	private int point;
	private int people;


	//引数がないコンストラクタ
	public Historys() {

	}

	//引数があるコンストラクタ
	public Historys(int id, int userId, String match_day, int rank, int point, int people) {
		super();
		this.id = id;
		this.userId = userId;
		this.match_day = match_day;
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

	public void setUserId(int userid) {
		this.userId = userid;
	}

	public String getMatch_day() {
		return match_day;
	}

	public void setMatch_day(String match_day) {
		this.match_day = match_day;
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

