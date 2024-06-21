package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.HistoryDetails;



public class HistoryDetailsDAO {
	// 引数paramで検索項目を指定し、検索結果のリストを返す
	public List<HistoryDetails> select(HistoryDetails HD) {
		Connection conn = null;//おまじない
		List<HistoryDetails> list = new ArrayList<HistoryDetails>();//入れ物

		try {
			// JDBCドライバを読み込む
			Class.forName("org.h2.Driver");

			// データベースに接続する
			conn = DriverManager.getConnection("jdbc:h2:file:C:/pleiades/workspace/data/B5", "sa", "");

			//ユーザーIDを取得する

			// SQL文を準備する
			String sql = "SELECT * FROM history_details WHERE user_id = ? AND history_id = ? ORDER BY id DESC";
			PreparedStatement pStmt = conn.prepareStatement(sql);//おまじない
			// SQL文を完成させる
				pStmt.setInt(1,HD.getUserId());
				pStmt.setInt(2,HD.getHistoryId());



			// SQL文を実行し、結果表を取得する
			ResultSet rs = pStmt.executeQuery();

			// 結果表をコレクションにコピーする
			while (rs.next()) {
				HistoryDetails record = new HistoryDetails(
				rs.getInt("id"),
				rs.getInt("user_id"),
				rs.getInt("history_id"),
				rs.getInt("wind"),
				rs.getInt("game"),
				rs.getInt("numbar"),
				rs.getInt("seat_wind"),
				rs.getInt("point"),
				rs.getInt("han"),
				rs.getInt("hu"),
				rs.getInt("result"),
				rs.getInt("title")
				);
				list.add(record);
			}
		}
		catch (SQLException e) {
			e.printStackTrace();
			list = null;
		}
		catch (ClassNotFoundException e) {
			e.printStackTrace();
			list = null;
		}
		finally {
			// データベースを切断
			if (conn != null) {
				try {
					conn.close();
				}
				catch (SQLException e) {
					e.printStackTrace();
					list = null;
				}
			}
		}

		// 結果を返す
		return list;
	}

	// 引数cardで指定されたレコードを登録し、成功したらtrueを返す
	public boolean insert(HistoryDetails HD) {
		Connection conn = null;
		boolean result = false;

		try {
			// JDBCドライバを読み込む
			Class.forName("org.h2.Driver");

			// データベースに接続する
			conn = DriverManager.getConnection("jdbc:h2:file:C:/pleiades/workspace/data/B5", "sa", "");

			//IDを取得

			// SQL文を準備する（AUTO_INCREMENTのNUMBER列にはNULLを指定する）
			String sql = "INSERT INTO history_details VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NULL, NULL)";
			PreparedStatement pStmt = conn.prepareStatement(sql);

			// SQL文を完成させる {
			pStmt.setInt(1, HD.getId());
			pStmt.setInt(2, HD.getUserId());
			pStmt.setInt(3, HD.getHistoryId());
			pStmt.setInt(4, HD.getWind());
			pStmt.setInt(5, HD.getGame());
			pStmt.setInt(6, HD.getNumbar());
			pStmt.setInt(7, HD.getSeatWind());
			pStmt.setInt(8, HD.getPoint());
			pStmt.setInt(9, HD.getHan());
			pStmt.setInt(10, HD.getHu());
			pStmt.setInt(11, HD.getResult());
			pStmt.setInt(12, HD.getTitle());

			// SQL文を実行する
			if (pStmt.executeUpdate() == 1) {
				result = true;
			}
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
		catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		finally {
			// データベースを切断
			if (conn != null) {
				try {
					conn.close();
				}
				catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}

		// 結果を返す
		return result;
	}
}

