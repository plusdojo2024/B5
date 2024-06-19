package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Mypage;

public class MypageDAO {
	// 引数paramで検索項目を指定し、検索結果のリストを返す
	public List<Mypage> select(Mypage MP) {
		Connection conn = null;//おまじない
		List<Mypage> list = new ArrayList<Mypage>();//入れ物
		try {
			// JDBCドライバを読み込む
			Class.forName("org.h2.Driver");

			// データベースに接続する
			conn = DriverManager.getConnection("jdbc:h2:file:C:/pleiades/workspace/data/B5", "sa", "");

			//ユーザーIDを取得する

			// SQL文を準備する
			String sql = "SELECT * FROM mypage WHERE userid = ?  ORDER BY id";
			PreparedStatement pStmt = conn.prepareStatement(sql);//おまじない
			// SQL文を完成させる
				pStmt.setString(1,MP.getUserid());


				// SQL文を実行し、結果表を取得する
				ResultSet rs = pStmt.executeQuery();

				// 結果表をコレクションにコピーする
				while (rs.next()) {
					Mypage record = new Mypage(
					rs.getInt("id"),
					rs.getInt("image"),
					rs.getString("userId"),
					rs.getString("name"),
					rs.getString("word"),
					rs.getString("likeyaku"),
					rs.getString("record"),
					rs.getString("lastlogin"),
					rs.getString("createdat"),
					rs.getString("updatedat")
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


					public boolean insert(Mypage MP) {
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
							pStmt.setInt(1, MP.getImage());
							pStmt.setString(2, MP.getUserid());
							pStmt.setString(3, MP.getName());
							pStmt.setString(4, MP.getWord());
							pStmt.setString(5, MP.getLikeyaku());
							pStmt.setString(6, MP.getRecord());


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
					public boolean update(Mypage card) {
						Connection conn = null;
						boolean result = false;

						try {
							// JDBCドライバを読み込む
							Class.forName("org.h2.Driver");

							// データベースに接続する
							conn = DriverManager.getConnection("jdbc:h2:file:C:/pleiades/workspace/B5", "sa", "");

							// SQL文を準備する
							String sql = "UPDATE Mypage SET image=?, name=?, word=?, likeyaku=?";
							PreparedStatement pStmt = conn.prepareStatement(sql);

							// SQL文を完成させる

								pStmt.setString(1, null);

								pStmt.setString(2, null);

								pStmt.setString(3, null);

								pStmt.setString(4, null);


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

