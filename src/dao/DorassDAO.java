package dao;

	import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Doras;

	public class DorassDAO {
		public List<Doras> select(Doras Dr) {
			Connection conn = null;//おまじない
			List<Doras> list = new ArrayList<Doras>();//入れ物

	try {
		//JDBCドライバを読み込む
		Class.forName("org.h2.Driver");
		//データベースに接続する
		conn = DriverManager.getConnection("jdbc:h2:file:C:/pleiades/workspace/data/B5", "sa", "");

		//ユーザーIDを取得する

		// SQL文を準備する
			String sql = "SELECT * FROM hands WHERE user_id = ? AND history_id = ? ORDER BY id DESC";
			PreparedStatement pStmt = conn.prepareStatement(sql);//おまじない
		// SQL文を完成させる
			pStmt.setInt(1,Dr.getUserId());
			pStmt.setInt(2,Dr.getHistoryId());


			// SQL文を実行し、結果表を取得する
			ResultSet rs = pStmt.executeQuery();

			//結果表をコレクションにコピーする。
			while(rs.next()) {
				Doras record = new Doras(
				rs.getInt("id"),
				rs.getInt("user_id"),
				rs.getInt("history_id"),
				rs.getInt("reverse"),
				rs.getInt("tile")
				);
				list.add(record);
			}
		}
		catch(SQLException e) {
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
		public boolean insert(Doras Dr) {
			Connection conn = null;
			boolean result = false;


		try {
			// JDBCドライバを読み込む
			Class.forName("org.h2.Driver");

			// データベースに接続する
			conn = DriverManager.getConnection("jdbc:h2:file:C:/pleiades/workspace/data/B5", "sa", "");

			//IDを取得

			//SQL文を準備する(AUTO_INCREMENTのNUMBER列にはNULLを指定する）
			String sql = "INSERT INTO doras VALUES (NULL, ?, ?, ?, ?, ?, ?)";
			PreparedStatement pStmt = conn.prepareStatement(sql);

			//SQL文を完成させる
			pStmt.setInt(1, Dr.getId());
			pStmt.setInt(2, Dr.getUserId());
			pStmt.setInt(3, Dr.getHistoryId());
			pStmt.setInt(4, Dr.getReverse());
			pStmt.setInt(5, Dr.getTile());

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
