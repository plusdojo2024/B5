package model;

import java.io.Serializable;

public class HistoryDetails implements Serializable{

	private int id;/*ID*/
	private int userId;/*ユーザーID*/
	private int historyId;/*履歴番号*/
	private int wind;/*場風*/
	private int game;/*局数*/
	private int numbar;/*本場*/
	private int seatWind;/*自風*/
	private int point;/*点数*/
	private int han;/*翻数*/
	private int hu;/*符数*/
	private int result; /*あがり方*/
	private int title; /*点数名*/


	public HistoryDetails() {

	}

	public HistoryDetails(int id, int userId, int historyId, int wind, int game, int numbar, int seatWind, int point,
			int han, int hu, int result, int title) {
		super();
		this.id = id;
		this.userId = userId;
		this.historyId = historyId;
		this.wind = wind;
		this.game = game;
		this.numbar = numbar;
		this.seatWind = seatWind;
		this.point = point;
		this.han = han;
		this.hu = hu;
		this.result = result;
		this.title = title;
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
	public int getHistoryId() {
		return historyId;
	}
	public void setHistoryId(int history_id) {
		this.historyId = history_id;
	}
	public int getWind() {
		return wind;
	}
	public void setWind(int wind) {
		this.wind = wind;
	}
	public int getGame() {
		return game;
	}
	public void setGame(int game) {
		this.game = game;
	}
	public int getNumbar() {
		return numbar;
	}
	public void setNumbar(int numbar) {
		this.numbar = numbar;
	}
	public int getSeatWind() {
		return seatWind;
	}
	public void setSeatWind(int seat_wind) {
		this.seatWind = seat_wind;
	}
	public int getPoint() {
		return point;
	}
	public void setPoint(int point) {
		this.point = point;
	}
	public int getHan() {
		return han;
	}
	public void setHan(int han) {
		this.han = han;
	}
	public int getHu() {
		return hu;
	}
	public void setHu(int hu) {
		this.hu = hu;
	}
	public int getResult() {
		return result;
	}
	public void setResult(int result) {
		this.result = result;
	}
	public int getTitle() {
		return title;
	}
	public void setTitle(int title) {
		this.title = title;
	}
}

