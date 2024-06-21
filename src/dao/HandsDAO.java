
package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Hands;

public class HandsDAO {
	public List<Hands> select(Hands he) {
		Connection conn = null;//おまじない
		List<Hands> list = new ArrayList<Hands>();//入れ物

		try {
			// JDBCドライバを読み込む
			Class.forName("org.h2.Driver");

			// データベースに接続する
			conn = DriverManager.getConnection("jdbc:h2:file:C:/pleiades/workspace/data/B5", "sa", "");

			//ユーザーIDを取得する

			// SQL文を準備する
			String sql = "SELECT * FROM hands WHERE user_id = ? AND history_id = ? ORDER BY id DESC";
			PreparedStatement pStmt = conn.prepareStatement(sql);//おまじない
			// SQL文を完成させる
				pStmt.setInt(1,he.getUserId());
				pStmt.setInt(2,he.getHistoryId());

			// SQL文を実行し、結果表を取得する
			ResultSet rs = pStmt.executeQuery();

			// 結果表をコレクションにコピーする
			while (rs.next()) {
				Hands record = new Hands(
				rs.getInt("id"),
				rs.getInt("user_id"),
				rs.getInt("history_id"),
				rs.getInt("tile"),
				rs.getInt("game_num"),
				rs.getInt("dispose_num")
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
	public boolean insert(Hands he) {
		Connection conn = null;
		boolean result = false;

		try {
			// JDBCドライバを読み込む
			Class.forName("org.h2.Driver");

			// データベースに接続する
			conn = DriverManager.getConnection("jdbc:h2:file:C:/pleiades/workspace/data/B5", "sa", "");

			//IDを取得

			// SQL文を準備する（AUTO_INCREMENTのNUMBER列にはNULLを指定する）
			String sql = "INSERT INTO hands VALUES (NULL, ?, ?, ?, ?, ?, ?,NULL, NULL)";
			PreparedStatement pStmt = conn.prepareStatement(sql);

			// SQL文を完成させる {
			pStmt.setInt(1, he.getId());
			pStmt.setInt(2, he.getUserId());
			pStmt.setInt(3, he.getHistoryId());
			pStmt.setInt(4, he.getTile());
			pStmt.setInt(5, he.getGameNum());
			pStmt.setInt(6, he.getDisposeNum());

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
