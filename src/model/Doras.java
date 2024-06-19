package model;
import java.io.Serializable;

public class Doras implements Serializable{
	private int id; //ID
	private int userId; //ユーザーID
	private int historyId; //履歴番号
	private int reverse; //裏表
	private int tile; //牌
	//private timestamp created_at;
	//private timestamp updated_at;

	public Doras( ) {

	}

	public Doras(int id,int userId,int historyId,int reverse,int tile) {
		super();
		this.id =id;
		this.userId =userId;
		this.historyId =historyId;
		this.reverse =reverse;
		this.tile =tile;
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

	public int getReverse() {
		return reverse;
	}

	public void setReverse(int reverse) {
		this.reverse = reverse;
	}

	public int getTile() {
		return tile;
	}

	public void setTile(int tile) {
		this.tile = tile;
	}
}

