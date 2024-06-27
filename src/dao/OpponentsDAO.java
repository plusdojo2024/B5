package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Opponents;

public class OpponentsDAO {

	// 引数paramで検索項目を指定し、検索結果のリストを返す
		public List<Opponents> select(int historyId) {
			Connection conn = null;
			List<Opponents> oppList = new ArrayList<Opponents>();

			try {
				// JDBCドライバを読み込む
				Class.forName("org.h2.Driver");

				// データベースに接続する
				conn = DriverManager.getConnection("jdbc:h2:file:C:/pleiades/workspace/data/B5", "sa", "");

				// SQL文を準備する
				String sql = "SELECT * FROM opponents WHERE history_id = ?  ORDER BY id ASC";
				PreparedStatement pStmt = conn.prepareStatement(sql);

				pStmt.setInt(1,historyId);


				// SQL文を実行し、結果表を取得する
				ResultSet rs = pStmt.executeQuery();

				// 結果表をコレクションにコピーする
				while (rs.next()) {
					Opponents record = new Opponents(
					rs.getInt("id"),
					rs.getInt("user_id"),
					rs.getInt("history_id"),
					rs.getString("name"),
					rs.getInt("rank"),
					rs.getInt("point")
					);
					oppList.add(record);
				}
			}
			catch (SQLException e) {
				e.printStackTrace();
				oppList = null;
			}
			catch (ClassNotFoundException e) {
				e.printStackTrace();
				oppList = null;
			}
			finally {
				// データベースを切断
				if (conn != null) {
					try {
						conn.close();
					}
					catch (SQLException e) {
						e.printStackTrace();
						oppList = null;
					}
				}
			}

			// 結果を返す
			return oppList;
		}
}
/*		// 引数cardで指定されたレコードを登録し、成功したらtrueを返す
		public boolean insert(Opponents O) {
			Connection conn = null;
			boolean result = false;

			try {
				// JDBCドライバを読み込む
				Class.forName("org.h2.Driver");

				// データベースに接続する
				conn = DriverManager.getConnection("jdbc:h2:file:C:/pleiades/workspace/data/B5", "sa", "");

				// SQL文を準備する（AUTO_INCREMENTのNUMBER列にはNULLを指定する）
				String sql = "INSERT INTO Opponents VALUES (NULL, ?, ?, ?, ?, ?)";
				PreparedStatement pStmt = conn.prepareStatement(sql);

				// SQL文を完成させる
				pStmt.setInt(1, O.getId());
				pStmt.setInt(2, O.getUserId());
				pStmt.setInt(3, O.getHistoryId());
				pStmt.setString(4, O.getName());
				pStmt.setInt(5, O.getRank());
				pStmt.setInt(6, O.getpoint());
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
*/