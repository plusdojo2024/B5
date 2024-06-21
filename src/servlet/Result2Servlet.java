package servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class Result2Servlet
 */
@WebServlet("/Result2Servlet")
public class Result2Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public Result2Servlet() {
        super();
        // TODO Auto-generated constructor stub
    }
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HttpSession session = request.getSession();
//		if (session.getAttribute("id") == null) {
//			response.sendRedirect("/B5/LoginServlet");
//			return;
//		}
//		// 登録ページにフォワードする
//				RequestDispatcher rd = request.getRequestDispatcher("/WEB-INF/jsp/history.jsp");
//				rd.forward(request, response);
//			}

//		//リクエストパラメータを取得する
//		request.setCharacterEncoding("UTF-8");
//		int id = Integer.parseInt(request.getParameter("id"));
//		int user_id = Integer.parseInt(request.getParameter("user_id"));
//		int history_id = Integer.parseInt(request.getParameter("history_id"));
//		int wind = Integer.parseInt(request.getParameter("wind"));
//		int game = Integer.parseInt(request.getParameter("game"));
//		int number = Integer.parseInt(request.getParameter("number"));
//		int seat_wind = Integer.parseInt(request.getParameter("seat_wind"));
//		int point = Integer.parseInt(request.getParameter("point"));
//		int han = Integer.parseInt(request.getParameter("han"));
//		int hu = Integer.parseInt(request.getParameter("fu"));
//		int result = Integer.parseInt(request.getParameter("result"));
//		int title = Integer.parseInt(request.getParameter("title"));


//		// 登録処理を行う(結果を登録するデータベースの場所はHistoryDetails)
//				HistoryDetailsDAO hDao = new HistoryDetailsDAO();
//				if (hDao.insert(new HistoryDetails(id,user_id,history_id,wind,game,
//						number,seat_wind,point,han,hu,result,title))){

				//登録結果をフォワード
				RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/jsp/result2.jsp");
				dispatcher.forward(request, response);

				return;
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.sendRedirect("/B5/TotalServlet");
		// TODO Auto-generated method stub
	}

}
