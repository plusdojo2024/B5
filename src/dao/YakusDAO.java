package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Yakus;

public class YakusDAO {
	public List<Yakus> select(int num) {
		Connection conn = null;//おまじない
		List<Yakus> list = new ArrayList<Yakus>();//入れ物

		try {
			// JDBCドライバを読み込む
			Class.forName("org.h2.Driver");

			// データベースに接続する
			conn = DriverManager.getConnection("jdbc:h2:file:C:/pleiades/workspace/data/B5", "sa", "");

			//ユーザーIDを取得する

			// SQL文を準備する
			String sql = "SELECT * FROM yakus WHERE id = ? ORDER BY id DESC";
			PreparedStatement pStmt = conn.prepareStatement(sql);//おまじない
			// SQL文を完成させる
				pStmt.setInt(1,num);


			// SQL文を実行し、結果表を取得する
			ResultSet rs = pStmt.executeQuery();

			// 結果表をコレクションにコピーする
			while (rs.next()) {
				Yakus record = new Yakus(
				rs.getInt("id"),
				rs.getString("yaku_name"),
				rs.getInt("han")
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
	public boolean insert(Yakus num) {
		Connection conn = null;
		boolean result = false;

		try {
			// JDBCドライバを読み込む
			Class.forName("org.h2.Driver");

			// データベースに接続する
			conn = DriverManager.getConnection("jdbc:h2:file:C:/pleiades/workspace/data/B5", "sa", "");

			//IDを取得

			// SQL文を準備する（AUTO_INCREMENTのNUMBER列にはNULLを指定する）
			String sql = "INSERT INTO yakus VALUES (NULL, ?, ?,)";
			PreparedStatement pStmt = conn.prepareStatement(sql);

			// SQL文を完成させる {
			pStmt.setInt(1, num.getId());
			pStmt.setString(2, num.getYakuName());
			pStmt.setInt(3, num.getHan());

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
