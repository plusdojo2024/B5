package servlet;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;

import dao.MypageDAO;
import model.Mypages;

/**
 * Servlet implementation class MypageServlet
 */
@WebServlet("/MypageServlet")
@MultipartConfig(
	    location = "C://pleiades//workspace//B5//WebContent//img",
	    fileSizeThreshold = 1024 * 1024 * 2, // 2MB
	    maxFileSize = 1024 * 1024 * 10,      // 10MB
	    maxRequestSize = 1024 * 1024 * 50    // 50MB
	)   // 50MB
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
		String userid = (String)session.getAttribute("userid");
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
		MypageDAO mDao = new MypageDAO();
		request.setCharacterEncoding("UTF-8");
		int id = Integer.parseInt(request.getParameter("id"));
		String name = request.getParameter("name");
		String word = request.getParameter("word");
		String likeyaku = request.getParameter("likeyaku");
		String image = request.getParameter("image_data");

		HttpSession session = request.getSession();
		String userid = (String)session.getAttribute("userid");

		try {


		// アップロードされたファイルを取得
        Part filePart = request.getPart("imageFile");

        // アップロードされたファイル名を取得
        String fileName = getSubmittedFileName(filePart);


        // アップロード先のディレクトリを設定（適宜変更する）
        String uploadDir = "/pleiades/workspace/B5/WebContent/img/";  // 保存先のディレクトリを指定

        // 保存先のディレクトリが存在しない場合は作成
        File dir = new File(uploadDir);
        if (!dir.exists()) {
            dir.mkdirs();
        }

        // ファイルのフルパス
        String filePath = uploadDir + fileName;
        String fileFullPath = "/B5/img/"+fileName;
        if(fileFullPath.equals("/B5/img/")) {
        	fileFullPath=image;
        }
        image=fileFullPath;
        System.out.println(filePath);
        // ファイルを保存
        try (InputStream input = filePart.getInputStream();
             OutputStream output = new FileOutputStream(filePath)) {
            byte[] buffer = new byte[1024];
            int length;
            while ((length = input.read(buffer)) > 0) {
                output.write(buffer, 0, length);
            }
        }

        // 保存したファイル名をリクエスト スコープに設定
        request.setAttribute("filePath", fileFullPath);
        } catch(FileNotFoundException e) {}


		Mypages mp = new Mypages(id,userid,name,word,likeyaku,"",image,"","","");
			if (mDao.update(mp)) {	// 更新成功
				request.setAttribute("mypage",mp);


			}
			else {												// 登録失敗
				RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/jsp/home.jsp");
				dispatcher.forward(request, response);
				return;
			}

	        RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/jsp/mypage.jsp");
			dispatcher.forward(request, response);


	}

    private String getSubmittedFileName(Part part) {
        for (String cd : part.getHeader("content-disposition").split(";")) {
            if (cd.trim().startsWith("filename")) {
                String fileName = cd.substring(cd.indexOf('=') + 1).trim().replace("\"", "");
                return fileName.substring(fileName.lastIndexOf('/') + 1).substring(fileName.lastIndexOf('\\') + 1);
            }
        }
        return null;
    }

}
