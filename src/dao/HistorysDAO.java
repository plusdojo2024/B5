package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Historys;

public class HistorysDAO {

	// 引数paramで検索項目を指定し、検索結果のリストを返す
	public List<Historys> select(int userId) {
		Connection conn = null;//おまじない
		List<Historys> hislist = new ArrayList<Historys>();//入れ物
		try {
			// JDBCドライバを読み込む
			Class.forName("org.h2.Driver");

			// データベースに接続する
			conn = DriverManager.getConnection("jdbc:h2:file:C:/pleiades/workspace/data/B5", "sa", "");



			// データベースに接続する
			String sql = "SELECT * FROM historys WHERE user_id = ? ORDER BY id DESC";
			PreparedStatement pStmt = conn.prepareStatement(sql);

			pStmt.setInt(1, userId);


			ResultSet rs = pStmt.executeQuery();

			while (rs.next()) {
				Historys record = new Historys(
				rs.getInt("id"),
				rs.getInt("user_id"),
				rs.getString("match_day"),
				rs.getInt("rank"),
				rs.getInt("point"),
				rs.getInt("people")
				);

			hislist.add(record);
	}
		}
	catch (SQLException e) {
		e.printStackTrace();
		hislist = null;
	}
	catch (ClassNotFoundException e) {
		e.printStackTrace();
		hislist = null;
	}
	finally {
		// データベースを切断
		if (conn != null) {
			try {
				conn.close();
			}
			catch (SQLException e) {
				e.printStackTrace();
				hislist = null;
			}
		}
	}
// 結果を返す
return hislist;
}
}
