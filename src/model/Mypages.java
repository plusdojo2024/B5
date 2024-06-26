package model;

public class Mypages {
	private int id;
	private String userid;
	private String name;
	private String word;
	private String likeyaku;
	private String record;
	private String image;
	private String lastlogin;
	private String createdat;
	private String updatedat;
	public Mypages() {

	}
	public Mypages(int id, String userid, String name, String word, String likeyaku, String record, String image,
			String lastlogin, String createdat, String updatedat) {
		super();
		this.id = id;
		this.userid = userid;
		this.name = name;
		this.word = word;
		this.likeyaku = likeyaku;
		this.record = record;
		this.image = image;
		this.lastlogin = lastlogin;
		this.createdat = createdat;
		this.updatedat = updatedat;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getWord() {
		return word;
	}
	public void setWord(String word) {
		this.word = word;
	}
	public String getLikeyaku() {
		return likeyaku;
	}
	public void setLikeyaku(String likeyaku) {
		this.likeyaku = likeyaku;
	}
	public String getRecord() {
		return record;
	}
	public void setRecord(String record) {
		this.record = record;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getLastlogin() {
		return lastlogin;
	}
	public void setLastlogin(String lastlogin) {
		this.lastlogin = lastlogin;
	}
	public String getCreatedat() {
		return createdat;
	}
	public void setCreatedat(String createdat) {
		this.createdat = createdat;
	}
	public String getUpdatedat() {
		return updatedat;
	}
	public void setUpdatedat(String updatedat) {
		this.updatedat = updatedat;
	}

}