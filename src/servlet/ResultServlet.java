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


		int[] hands = (int[]) session.getAttribute("hands"); //スコープから受け取っているところ

		String[] HDP = new String[13]; //手牌変換
		TilesDAO tDAO = new TilesDAO();
		for (int i = 0; i < 13; i++) {
			List<Tiles> tiles = tDAO.select(hands[i]); //変数名[hands]は書き換える必要がある
			HDP[i] = tiles.get(0).getTileName();
		} //変換ここまで

		request.setAttribute("hand", HDP);



		//最後に引いた牌を取得（配列じゃないからfor文はいらない）
		int lastHand = (int) session.getAttribute("lastHands");

		String lh = new String();
		TilesDAO TDAO = new TilesDAO();
			List<Tiles> tiles = TDAO.select(lastHand);
			lh = tiles.get(0).getTileName();
		request.setAttribute("lastHand", lh);


		//ツモ、ロンを取得
		int result = (int) session.getAttribute("result");
		String rs = new String();
		if(result ==0) {
			rs = "tr-t";
		}else {
			rs ="tr-r";
		}
		request.setAttribute("result", rs);



		//ドラを取得
		int[] Doras = (int[]) session.getAttribute("Doras");

		String[] dr = new String[5];
		for (int i = 0; i < 5; i++) {
			tiles = TDAO.select(Doras[i]);
			dr[i] = tiles.get(0).getTileName();
		}
		request.setAttribute("Doras", dr);



		//裏ドラを取得
		int[] uraDoras = (int[]) session.getAttribute("uraDoras");

		String[] udr = new String[5];
		for (int i = 0; i < 5; i++) {
			tiles = TDAO.select(uraDoras[i]);
			udr[i] = tiles.get(0).getTileName();
		}
		request.setAttribute("uraDoras", udr);



		//役を取得
		int[] yakus = (int[]) session.getAttribute("yakus");

		String[] yk = new String[yakus.length];
		YakusDAO YDAO = new YakusDAO();
		List<Yakus> list = new ArrayList<Yakus>();//入れ物
		for (int i = 0; i < yakus.length; i++) {
			list = YDAO.select(yakus[i]);
			yk[i] = list.get(0).getYakuName();
		}
		request.setAttribute("yakus", yk);
		//役が何かを取得
//		List<Integer> yakus = (List<Integer>) session.getAttribute("yakus"); //スコープから受け取っているところ
//
//		user_id = 0;
//		his
//
//		YakusDAO yDAO = new YakusDAO();
//		List<String> yk = new ArrayList<String>();
//		yDAO.yaku_select(user_id, hisroty_id);
//		request.setAttribute("yakus", yk);



		//役の翻を取得
		int han = (int) session.getAttribute("han");

		request.setAttribute("han", han);



		//役の付を取得
		int fu = (int) session.getAttribute("fu");

		request.setAttribute("fu", fu);


		//点数の種類を取得
		int point = (int) session.getAttribute("point");

		request.setAttribute("point",point);



		//点数を取得
		int title =(int) session.getAttribute("title");

		String ti = new String();
		switch(title) {
			case 0:
				ti = "";
				break;
			case 1:
				ti ="mankan";
				break;
			case 2:
				ti ="choman";
				break;
			case 3:
				ti ="baiman";
				break;
			case 4:
				ti ="sanbaiman";
				break;
			case 5:
				ti ="yakuman";
				break;
			case 6:
				ti ="nibaiyakuman";
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