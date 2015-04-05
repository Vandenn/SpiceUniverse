package controllers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import models.User;
import services.DBHandler;

/**
 * Servlet implementation class SaveController
 */
@WebServlet("/SaveController")
public class SaveController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SaveController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		DBHandler db= new DBHandler();
		HttpSession session = request.getSession();
		User player = (User) session.getAttribute("user");
		player.setCur_chapter(Integer.parseInt(request.getParameter("cur_chapter")));
		player.setSalt(Integer.parseInt(request.getParameter("salt")));
		player.setPepper(Integer.parseInt(request.getParameter("pepper")));
		player.setCumin(Integer.parseInt(request.getParameter("cumin")));
		player.setRoomA(Boolean.parseBoolean(request.getParameter("chap2rooms1")));
		player.setRoomB(Boolean.parseBoolean(request.getParameter("chap2rooms2")));
		player.setRoomC(Boolean.parseBoolean(request.getParameter("chap2rooms3")));
		player.setGun(Integer.parseInt(request.getParameter("gun")));
		player.setMeds(Integer.parseInt(request.getParameter("meds")));
		player.setKnife(Integer.parseInt(request.getParameter("knife")));
		player.setBomb(Integer.parseInt(request.getParameter("bomb")));
		player.setIsBoss(Boolean.parseBoolean(request.getParameter("isBoss")));
		player.setDefeatedBossA(Boolean.parseBoolean(request.getParameter("defeatedBosses1")));
		player.setDefeatedBossB(Boolean.parseBoolean(request.getParameter("defeatedBosses2")));
		player.setDefeatedBossC(Boolean.parseBoolean(request.getParameter("defeatedBosses3")));
		session.setAttribute("user", player);
		if(db.updateUserInfo(player)){
			//successful message
		}
		else{
			//fail message
		}
		response.sendRedirect("game.jsp");
		//redirect back to game screen
	}

}
