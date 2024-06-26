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
 * Servlet implementation class MainServlet
 */
@WebServlet("/MainServlet")
public class MainServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public MainServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession();
		int count;
		try {
			count = (int)session.getAttribute("mainCount")+1;
		}
		catch(Exception e) {
			count = 0;
		}
		session.setAttribute("mainCount",count);
		request.setAttribute("mainCount",0);

		RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/jsp/main.jsp");
		dispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession();
		request.setCharacterEncoding("UTF-8");
		int[] hands = new int[13];
		for(int i = 0;i<13;i++) {
			hands[i] = Integer.parseInt(request.getParameter("hands["+i+"]"))+1;
		}
		int lastHands = Integer.parseInt(request.getParameter("lastHands"))+1;
		int result = Integer.parseInt(request.getParameter("lastHands"));
		int[] doras = new int[5];
		for(int i = 0;i<5;i++) {
			doras[i] = Integer.parseInt(request.getParameter("doras["+i+"]"))+1;
		}
		int[] uraDoras = new int[5];
		for(int i = 0;i<5;i++) {
			uraDoras[i] = Integer.parseInt(request.getParameter("uraDoras["+i+"]"))+1;
		}
		int yakusNum = Integer.parseInt(request.getParameter("yakusNum"));
		int[] yakus = new int[yakusNum];
		for(int i = 0;i<yakusNum;i++) {
			yakus[i] = Integer.parseInt(request.getParameter("yakus["+i+"]"));
		}
		int han = Integer.parseInt(request.getParameter("han"));
		int fu = Integer.parseInt(request.getParameter("fu"));
		int point = Integer.parseInt(request.getParameter("point"));
		int title = Integer.parseInt(request.getParameter("title"));

		session.setAttribute("hands", hands);
		session.setAttribute("lastHands", lastHands);
		session.setAttribute("result", result);
		session.setAttribute("Doras", doras);
		session.setAttribute("uraDoras", uraDoras);
		session.setAttribute("yakus", yakus);
		session.setAttribute("han", han);
		session.setAttribute("fu", fu);
		session.setAttribute("point", point);
		session.setAttribute("title", title);

		response.sendRedirect("/B5/ResultServlet");
	}

}
