package model;

public class Users {
	private String userid;
	private String password;

	public Users( String userid, String password) {
		super();
		this.userid = userid;
		this.password = password;

	}
	public Users() {
		this.userid = "";
		this.password = "";
	}
	public String getUserid() {
		return userid;
	}
	public void setUser_id(String userid) {
		this.userid = userid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}


}
