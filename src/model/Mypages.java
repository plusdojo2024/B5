package model;

public class Mypages {
	private int id;
	private int image;
	private String name;
	private String userid;
	private String word;
	private String likeyaku;
	private String record;
	private String lastlogin;
	private String createdat;
	private String updatedat;
	public Mypages() {

	}

	public Mypages(int id, int image, String name, String userid, String word, String likeyaku, String record,
		String lastlogin, String createdat, String updatedat	) {
		super();
		this.id =id;
		this.image=image;
		this.name=name;
		this.userid=userid;
		this.word=word;
		this.likeyaku=likeyaku;
		this.record=record;
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

	public int getImage() {
		return image;
	}

	public void setImage(int image) {
		this.image = image;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUserid() {
		return userid;
	}

	public void setUser_id(String userid) {
		this.userid = userid;
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

	public void setLike_yaku(String likeyaku) {
		this.likeyaku = likeyaku;
	}

	public String getRecord() {
		return record;
	}

	public void setRecord(String record) {
		this.record = record;
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
