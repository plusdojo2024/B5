package servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import dao.TilesDAO;
import dao.YakusDAO;
import model.Tiles;
import model.Yakus;

/**
 * Servlet implementation class ResultServlet
 */
@WebServlet("/ResultServlet")
public class ResultServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ResultServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HttpSession session = request.getSession();
		//手配のデータを取得（handsテーブルからuser_id,hisroty_idをもとに最終的な手牌を）取得
		//そのために「resultDAO」のfinalTehai()メソッドを実行して結果を配列orlistと受け取る

		//session.getAttribute("",);
		int[] tmp = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 }; //テスト用で記載(本来はなし)
		session.setAttribute("hands", tmp);//テスト用で記載(本来はなし)

		int[] hands = (int[]) session.getAttribute("hands"); //スコープから受け取っているところ

		String[] HDP = new String[13]; //手牌変換
		TilesDAO tDAO = new TilesDAO();
		for (int i = 0; i < 13; i++) {
			List<Tiles> tiles = tDAO.select(hands[i]); //変数名[hands]は書き換える必要がある
			HDP[i] = tiles.get(0).getTileName();
		} //変換ここまで

		request.setAttribute("hand", HDP);

		int aa = 1; //テスト用で記載(本来はなし)
		session.setAttribute("lastHands", aa);//テスト用で記載(本来はなし)


		//最後に引いた牌を取得（配列じゃないからfor文はいらない）
		int lastHand = (int) session.getAttribute("lastHands");

		String lh = new String();
		TilesDAO TDAO = new TilesDAO();
			List<Tiles> tiles = TDAO.select(lastHand);
			lh = tiles.get(0).getTileName();
		request.setAttribute("lastHand", lh);

		int bb = 0; //テスト用で記載(本来はなし)
		session.setAttribute("result", bb);//テスト用で記載(本来はなし)

		//ツモ、ロンを取得
		int result = (int) session.getAttribute("result");
		String rs = new String();
		if(result ==0) {
			rs = "ツモ";
		}else {
			rs ="ロン";
		}
		request.setAttribute("result", rs);

		int[] cc = { 1, 2, 3, 4, 5}; //テスト用で記載(本来はなし)
		session.setAttribute("Doras", cc);//テスト用で記載(本来はなし)


		//ドラを取得
		int[] Doras = (int[]) session.getAttribute("Doras");

		String[] dr = new String[5];
		for (int i = 0; i < 5; i++) {
			tiles = TDAO.select(Doras[i]);
			dr[i] = tiles.get(0).getTileName();
		}
		request.setAttribute("Doras", dr);


		int[] dd = { 1, 2, 3, 4, 5}; //テスト用で記載(本来はなし)
		session.setAttribute("uraDoras", dd);//テスト用で記載(本来はなし)

		//裏ドラを取得
		int[] uraDoras = (int[]) session.getAttribute("uraDoras");

		String[] udr = new String[5];
		for (int i = 0; i < 5; i++) {
			tiles = TDAO.select(uraDoras[i]);
			udr[i] = tiles.get(0).getTileName();
		}
		request.setAttribute("uraDoras", udr);


		List<Integer> ee = new ArrayList<Integer>(); //テスト用で記載(本来はなし)
		ee.add(1);
		session.setAttribute("yakus", ee);//テスト用で記載(本来はなし)

		//役が何かを取得
		List<Integer> yakus = (List<Integer>) session.getAttribute("yakus"); //スコープから受け取っているところ


		YakusDAO yDAO = new YakusDAO();
		List<Yakus> yk = new ArrayList<Yakus>();
		for(int i = 0;i<yakus.size();i++) {
			List<Yakus> ys = yDAO.select(yakus.get(i));
			yk.add(ys.get(0));
		}
		request.setAttribute("yakus", yk);


		int ff = 1; //テスト用で記載(本来はなし)
		session.setAttribute("han", ff);//テスト用で記載(本来はなし)

		//役の翻を取得
		int han = (int) session.getAttribute("han");

		request.setAttribute("han", han);

		int gg =2; //テスト用で記載(本来はなし)
		session.setAttribute("fu", gg);//テスト用で記載(本来はなし)


		//役の付を取得
		int fu = (int) session.getAttribute("fu");

		request.setAttribute("fu", fu);

		int hh = 3; //テスト用で記載(本来はなし)
		session.setAttribute("point", hh);//テスト用で記載(本来はなし)

		//点数の種類を取得
		int point = (int) session.getAttribute("point");

		request.setAttribute("point",point);


		int ii = 4;//テスト用で記載(本来はなし)
		session.setAttribute("title", ii);//テスト用で記載(本来はなし)

		//点数を取得
		int title =(int) session.getAttribute("title");

		String ti = new String();
		switch(title) {
			case 0:
				ti = "";
				break;
			case 1:
				ti ="満貫";
				break;
			case 2:
				ti ="跳満";
				break;
			case 3:
				ti ="倍満";
				break;
			case 4:
				ti ="3倍満";
				break;
			case 5:
				ti ="役満";
				break;
			case 6:
				ti ="2倍役満";
				break;
		}
		request.setAttribute("title",ti);

		RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/jsp/result.jsp");
		dispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

		//ResultDao rDao=new ResultDao();
		//int[] finalTiles = new int[14];
		//user_id,hisroty_idは本来は他のページからもらえるが、今回はテストなので
		//それぞれ１のデモデータを表示することにする
		//finalTiles=rDao.finalTehai(1,1);

		//for(int i = 0;i<13;i++) {
		//System.out.println(finalTiles[i]);
		//}

		//session.setAttribute("tiles",0);//(テスト用)
		//int ronTsumo = (int)session.getAttribute("tiles");
		//request.setAttribute("tiles",ronTsumo);

		//if (request.getParameter("submit").equals("ロン")) {
		//ronTsumo=1:
		//}else {

		//}

		//ドラが何かを取得
		//dorasテーブルからuser_idとhistory_idをもとにtileを取得（reverse=0)
		//int Doras = (int)session.getAttribute("");

		//裏ドラが何かを取得
		//dorasテーブルからuser_idとhistory_idをもとにtileを取得（reverse=1)
		//int UraDora = session.getAttribute("");;

		//役が何かを取得
		//teyakusテーブルから
		//teyakusDAO teyaDAO = new teyakusDAO();
		//List<teyakus> tiles = teyaDAO.select(teyakus[i]);
		//役の翻を計算

		//点数の種類を取得
		//int tensuuSy = (int)session.getAttribute("");
		//点数を取得
		//int tensuu =session.getAttribute("");

		//request.setAttribute("revese","reveses");
		//request.setAttribute("tile","tiles");
		//request.setAttribute("Rontumo","RonTumo");
		//request.setAttribute("Dora","Doras");
		//request.setAttribute("UraDora","UraDoras");
		//request.setAttribute("teyaku","teyakus");
		//request.setAttribute("tensuuSy","tensuusys");
		//request.setAttribute("tensuu","tensuus");

		//上記のデータをresult.jspに送る
		//そのためにはjavabeansにまとめてリクエストスコープにいれたほうが管理が楽。
		//「Result.java」というjavabeansに格納する