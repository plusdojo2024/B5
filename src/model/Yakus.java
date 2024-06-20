package model;
import java.io.Serializable;

public class Yakus implements Serializable {
	private int id;			 /*ID*/
	private String yakuName; 	/* 役名*/
	private int han; /* 翻数*/
	//private timestamp created_at; 	/* 作成日時 */
	//private timestamp update_at; 	/* 更新日時*/

  // 引数のないコンストラクタ
  public Yakus() {

  }

	public Yakus(int id, String yakuName, int han) {
		super();
		this.id = id;
		this.yakuName = yakuName;
		this.han = han;
	}

	public int getId() {
		return id;
	}

	public String getYakuName() {
		return yakuName;
	}

	public int getHan() {
		return han;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setYakuName(String yaku_name) {
		this.yakuName = yaku_name;
	}

	public void setHan(int han) {
		this.han = han;
	}
}
