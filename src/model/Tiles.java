package model;
import java.io.Serializable;

public class Tiles implements Serializable {
	private int id;			 /*ID*/
	private String tileName; 	/* 牌名 */
	private int tileKind; /* 牌種類*/
	private int tileNumber; 	/* 牌数 */
	//private timestamp created_at; 	/* 作成日時 */
	//private timestamp update_at; 	/* 更新日時*/

  // 引数のないコンストラクタ
  public Tiles() {

  }

	public Tiles(int id, String tileName, int tileKind, int tileNumber) {
	super();
	this.id = id;
	this.tileName = tileName;
	this.tileKind = tileKind;
	this.tileNumber = tileNumber;
}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTileName() {
		return tileName;
	}

	public void setTileName(String tile_name) {
		this.tileName = tile_name;
	}

	public int getTileKind() {
		return tileKind;
	}

	public void setTileKind(int tile_kind) {
		this.tileKind = tile_kind;
	}

	public int getTileNumber() {
		return tileNumber;
	}

	public void setTileNumber(int tile_number) {
		this.tileNumber = tile_number;
	}
}
