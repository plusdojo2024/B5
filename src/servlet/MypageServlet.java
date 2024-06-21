package servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import dao.MypageDAO;
import model.Mypages;

/**
 * Servlet implementation class MypageServlet
 */
@WebServlet("/MypageServlet")
public class MypageServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public MypageServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession();
//		String userid = (String)session.getAttribute("userid");
		String userid="yumeka";
		Mypages mp = new Mypages();
		MypageDAO md = new MypageDAO();
		List<Mypages> list =md.select(userid);
		mp = list.get(0);
		request.setAttribute("mypage",mp);
		RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/jsp/mypage.jsp");
		dispatcher.forward(request, response);
		return;

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("UTF-8");
		int id = Integer.parseInt(request.getParameter("id"));
//		String userid = request.getParameter("userid");
		String name = request.getParameter("name");
		String word = request.getParameter("word");
		String likeyaku = request.getParameter("likeyaku");
//		String record = request.getParameter("record");
//		String countyaku = request.getParameter("countyaku");
		int image = Integer.parseInt(request.getParameter("image_data"));
//		String lastlogin = request.getParameter("lastlogin");
//		String createdat = request.getParameter("createdat");
//		String updatedat = request.getParameter("updatedat");
		HttpSession session = request.getSession();
		String userid = (String)session.getAttribute("userid");

		MypageDAO mDao = new MypageDAO();
		//if (request.getParameter("submit").equals("更新")) {
			// ここを改造する
		Mypages mp = new Mypages(id,userid,name,word,likeyaku,"",image,"","","");
			if (mDao.update(mp)) {	// 更新成功
				request.setAttribute("mypage",mp);
				RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/jsp/mypage.jsp");
				dispatcher.forward(request, response);
				//response.sendRedirect("/B5/MypageServlet");
				return;
			}
			else {												// 登録失敗
				RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/jsp/home.jsp");
				dispatcher.forward(request, response);
				return;
			}
		//}
	}

}
