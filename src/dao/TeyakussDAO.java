package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Teyakus;

public class TeyakussDAO {
	public List<Teyakus> select(Teyakus Te) {
		Connection conn = null;//おまじない
		List<Teyakus> list = new ArrayList<Teyakus>();//入れ物

		try {
			//JDBCドライバを読み込む。
			Class.forName("org.h2.Driver");
			//データベースに接続する
			conn = DriverManager.getConnection("jdbc:h2:file:C:/pleiades/workspace/data/B5", "sa", "");
			//ユーザーIDを取得する

			// SQL文を準備する
			String sql = "SELECT * FROM teyakus WHERE user_id = ? AND history_id = ? ORDER BY id DESC";
			PreparedStatement pStmt = conn.prepareStatement(sql);//おまじない
			// SQL文を完成させる
			pStmt.setInt(1, Te.getUserId());
			pStmt.setInt(2, Te.getHistoryId());

			// SQL文を実行し、結果表を取得する
			ResultSet rs = pStmt.executeQuery();

			//結果表をコレクションにコピーする
			while (rs.next()) {
				Teyakus record = new Teyakus(
						rs.getInt("id"),
						rs.getInt("user_id"),
						rs.getInt("history_id"),
						rs.getInt("teyaku"));
				list.add(record);
			}
		} catch (SQLException e) {
			e.printStackTrace();
			list = null;
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			list = null;
		} finally {
			// データベースを切断
			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
					list = null;
				}
			}
		}

		// 結果を返す
		return list;
	}
	// 引数cardで指定されたレコードを登録し、成功したらtrueを返す
}

