package model;
import java.io.Serializable;

public class Yakus implements Serializable {
	private int id;			 /*ID*/
	private String yaku_name; 	/* 役名*/
	private int han; /* 翻数*/
	//private timestamp created_at; 	/* 作成日時 */
	//private timestamp update_at; 	/* 更新日時*/

  // 引数のないコンストラクタ
  public Yakus() {

  }

	public Yakus(int id, String yaku_name, int han) {
		super();
		this.id = id;
		this.yaku_name = yaku_name;
		this.han = han;
	}

	public int getId() {
		return id;
	}

	public String getYaku_name() {
		return yaku_name;
	}

	public int getHan() {
		return han;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setYaku_name(String yaku_name) {
		this.yaku_name = yaku_name;
	}

	public void setHan(int han) {
		this.han = han;
	}
}
