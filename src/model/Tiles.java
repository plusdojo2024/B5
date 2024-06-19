package model;
import java.io.Serializable;

public class Tiles implements Serializable {
	private int id;			 /*ID*/
	private String tile_name; 	/* 牌名 */
	private int tile_kind; /* 牌種類*/
	private int tile_number; 	/* 牌数 */
	//private timestamp created_at; 	/* 作成日時 */
	//private timestamp update_at; 	/* 更新日時*/

  // 引数のないコンストラクタ
  public Tiles() {

  }

	public Tiles(int id, String tile_name, int tile_kind, int tile_number) {
	super();
	this.id = id;
	this.tile_name = tile_name;
	this.tile_kind = tile_kind;
	this.tile_number = tile_number;
}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTile_name() {
		return tile_name;
	}

	public void setTile_name(String tile_name) {
		this.tile_name = tile_name;
	}

	public int getTile_kind() {
		return tile_kind;
	}

	public void setTile_kind(int tile_kind) {
		this.tile_kind = tile_kind;
	}

	public int getTile_number() {
		return tile_number;
	}

	public void setTile_number(int tile_number) {
		this.tile_number = tile_number;
	}
}
