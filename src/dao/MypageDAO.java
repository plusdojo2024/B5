package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Mypages;

public class MypageDAO {
	// 引数paramで検索項目を指定し、検索結果のリストを返す
	public List<Mypages> select(String userid) {
		Connection conn = null;//おまじない
		List<Mypages> list = new ArrayList<Mypages>();//入れ物
		try {
			// JDBCドライバを読み込む
			Class.forName("org.h2.Driver");

			// データベースに接続する
			conn = DriverManager.getConnection("jdbc:h2:file:C:/pleiades/workspace/data/B5", "sa", "");

			//ユーザーIDを取得する

			// SQL文を準備する
			String sql = "SELECT * FROM mypages WHERE user_id = ?  ORDER BY id";
			PreparedStatement pStmt = conn.prepareStatement(sql);//おまじない
			// SQL文を完成させる
				pStmt.setString(1,userid);


				// SQL文を実行し、結果表を取得する
				ResultSet rs = pStmt.executeQuery();

				// 結果表をコレクションにコピーする
				while (rs.next()) {
					Mypages record = new Mypages(
					rs.getInt("id"),
					rs.getString("user_id"),
					rs.getString("name"),
					rs.getString("word"),
					rs.getString("like_yaku"),
					rs.getString("record"),
					rs.getInt("image"),
					rs.getString("last_login"),
					rs.getString("created_at"),
					rs.getString("updated_at")
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


			public boolean insert(Mypages MP) {
				Connection conn = null;
			boolean result = false;

				try {
						// JDBCドライバを読み込む
				Class.forName("org.h2.Driver");

					// データベースに接続する
				conn = DriverManager.getConnection("jdbc:h2:file:C:/pleiades/workspace/data/B5", "sa", "");

				//IDを取得

				// SQL文を準備する（AUTO_INCREMENTのNUMBER列にはNULLを指定する）
				String sql = "INSERT INTO mypages VALUES (NULL, ?, ?, ?, ?, ?, ?,NULL,NULL,NULL)";
				PreparedStatement pStmt = conn.prepareStatement(sql);

					// SQL文を完成させる {
			pStmt.setString(1, MP.getUserid());
			pStmt.setString(2, MP.getName());
			pStmt.setString(3, MP.getWord());
			pStmt.setString(4, MP.getLikeyaku());
			pStmt.setString(5, MP.getRecord());
			pStmt.setInt(6, MP.getImage());


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
			public boolean update(Mypages card) {
				Connection conn = null;
				boolean result = false;

				try {
					// JDBCドライバを読み込む
					Class.forName("org.h2.Driver");

					// データベースに接続する
					conn = DriverManager.getConnection("jdbc:h2:file:C:/pleiades/workspace/data/B5", "sa", "");

					// SQL文を準備する
					String sql = "UPDATE mypages SET name=?, word=?, like_yaku=?, image=? WHERE id=?";
					PreparedStatement pStmt = conn.prepareStatement(sql);

					// SQL文を完成させる

						pStmt.setString(1, card.getName());

						pStmt.setString(2, card.getWord());

						pStmt.setString(3, card.getLikeyaku());

						pStmt.setInt(4, card.getImage());

						pStmt.setInt(5, card.getId());

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

