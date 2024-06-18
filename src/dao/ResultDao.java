package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;



public class ResultDao {

	int[] finalTiles = new int[14];

	// 引数paramで検索項目を指定し、検索結果のリストを返す
	public int[] finalTehai(int user_id,int hisroty_id) {
		Connection conn = null;
		try {
			// JDBCドライバを読み込む
			Class.forName("org.h2.Driver");

			// データベースに接続する（追加する）
			conn = DriverManager.getConnection("jdbc:h2:file:C:/pleiades/workspace/data/simpleBC", "sa", "");

			// SQL文を準備する（追加する）
			String sql = "SELECT tile FROM hands WHERE user_id =  ? AND history_id = ? AND dispose_num IS NOT NULL ORDER BY tile";
			PreparedStatement pStmt = conn.prepareStatement(sql);
			// SQL文を完成させる
				pStmt.setInt(1, user_id); //user_idで検索
				pStmt.setInt(2, hisroty_id); //hisroty_idで検索


			// SQL文を実行し、結果表を取得する
			ResultSet rs = pStmt.executeQuery();

			int i=0;
			// 結果表をコレクションにコピーして型に入れる（10個追加）
			while (rs.next()) {
				finalTiles[i]=rs.getInt("tile");
				i++;
			}
		}

			// データベースを切断
			if (conn != null) {
				try {
					conn.close();
				}
				catch (SQLException e) {
					e.printStackTrace();

				}
			}

		// 結果を返す
		return finalTiles;
	}
}
