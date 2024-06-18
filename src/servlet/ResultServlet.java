package servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


		//手配のデータを取得（handsテーブルからuser_id,hisroty_idをもとに最終的な手牌を）取得
		//そのために「resultDAO」のfinalTehai()メソッドを実行して結果を配列orlistと受け取る
		int revese=0;
		int tile =0;

		//ResultDao rDao=new ResultDao();
		//int[] finalTiles = new int[14];
		//user_id,hisroty_idは本来は他のページからもらえるが、今回はテストなので
		//それぞれ１のデモデータを表示することにする
		//finalTiles=rDao.finalTehai(1,1);

		//for(int i = 0;i<13;i++) {
			//System.out.println(finalTiles[i]);
		//}

		//ツモかロンかを取得
		//mainページのロンとツモのsubmitのvalueがロンかツモで設定されている必要がある
		int ronTsumo = 0;

		//if (request.getParameter("submit").equals("ロン")) {
			///ronTsumo=1:
		//}else {

		//}

		//ドラが何かを取得
		//dorasテーブルからuser_idとhistory_idをもとにtileを取得（reverse=0)
		int Doras = 0;

		//裏ドラが何かを取得
		//dorasテーブルからuser_idとhistory_idをもとにtileを取得（reverse=1)
		int UraDora = 0;


		//役が何かを取得
		//teyakusテーブルから
		//役の翻を計算
		int teyakus =0;

		//点数の種類を取得
		int tensuuS = 0;
		//点数を取得
		int tensuu =0;

		//上記のデータをresult.jspに送る
		//そのためにはjavabeansにまとめてリクエストスコープにいれたほうが管理が楽。
		//「Result.java」というjavabeansに格納する












		RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/jsp/result.jsp");
		dispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
