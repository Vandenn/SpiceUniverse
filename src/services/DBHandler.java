package services;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import sun.security.action.GetIntegerAction;
import models.User;

public class DBHandler {
	
	Connection dbConnection;
	
	public boolean isExistingUser(String user){
		
		
		//PLACE CODE FOR ACCESSING DB HERE
		try{
			if(dbConnection == null)
				connectToDatabase();
			
			Statement statement = dbConnection.createStatement();
			String dbQuery = "SELECT * FROM users WHERE username = '" + user +"'"; 
			
			ResultSet set = statement.executeQuery(dbQuery);
			

			if(set.next()){
				return true;
			}
			else{
				return false;
			}
			
		}catch(Exception e){
			System.out.println(e.getMessage());
			return false;
		}
		
	}
	
	public boolean userLogin(String user, String password){
		
		//PLACE CODE FOR ACCESSING DB HERE
		try{
			if(dbConnection == null)
				connectToDatabase();
			Statement statement = dbConnection.createStatement();
			String dbQuery = "SELECT * FROM users WHERE username = '" + user +"' AND password = '" + password +"'"; 
			
			ResultSet set = statement.executeQuery(dbQuery);
			

			if(set.next()){
				return true;
			}
			else{
				return false;
			}
			
		}catch(Exception e){
			System.out.println(e.getMessage());
			return false;
		}
		
	}
	
	public User getUserInfo(String user, String password){
		
		
		//PLACE CODE FOR ACCESSING DB HERE
		if(user == null){
			//login if fail return null
		}
		try{
			if(dbConnection == null)
				connectToDatabase();
			
			Statement statement = dbConnection.createStatement();
			String dbQuery = "SELECT * FROM users WHERE username = '" + user +"' AND password = '" + password +"'"; 
			
			ResultSet set = statement.executeQuery(dbQuery);
			

			if(set.next()){
				return new User(set.getString(1),set.getString(2),set.getInt(3),set.getInt(4),set.getInt(5),set.getInt(6),set.getInt(7),set.getInt(8),set.getInt(9),set.getInt(10),set.getInt(11),set.getInt(12),set.getInt(13),set.getInt(14),set.getInt(15), set.getInt(16), set.getInt(17));
				
			}
			else{
				return null;
			}
		}catch(Exception e){
			System.out.println(e.getMessage());
			return null;
		}
		
	}
	
	public boolean updateUserInfo(User player){
		
		
		//PLACE CODE FOR ACCESSING DB HERE
		if(player.getUsername()==null){
			//login if fail return false
		}
		try{
			if(dbConnection == null)
				connectToDatabase();
			
			
			Statement statement = dbConnection.createStatement();
			String dbQuery = "UPDATE users "
					+ "SET cur_chapter = " +player.getCur_chapter()+ ", salt = " +player.getSalt()+ ", pepper = " +player.getPepper()
					+ ", cumin = " +player.getCumin()+ ", roomA = " +player.roomAToInt()+ ", roomB= " +player.roomBToInt()
					+ ", roomC = " +player.roomCToInt()+ ", gun= " +player.getGun() + ", meds= " +player.getMeds()
					+ ", knife= " +player.getKnife()+ ", bomb = " +player.getBomb()+ ", isBoss = " +player.isBossToInt()
					+ ", defeatedBossA = " +player.defeatedBossAToInt()+ ", defeatedBossB= " +player.defeatedBossBToInt()
					+ ", defeatedBossC = " +player.defeatedBossCToInt()
					+ " WHERE username = '" + player.getUsername() +"' AND password = '" + player.getPassword() +"'"; 
			
			statement.executeUpdate(dbQuery);
			return true;
			
		}catch(Exception e){
			System.out.println(e.getMessage());
			return false;
		}
		
		
		
	}
	
	public boolean userRegister(String user, String password){
		
		//PLACE CODE FOR ACCESSING DB HERE
		if(!isExistingUser(user) && !user.isEmpty() && !password.isEmpty())
			try{
				if(dbConnection == null)
					connectToDatabase();
	
				User register = new User(user,password);
				Statement statement = dbConnection.createStatement();
				String dbQuery = "INSERT INTO users"
						+ " VALUES ('" + register.getUsername() + "', '" + register.getPassword() + "', " + register.getCur_chapter() 
						+ ", " + register.getSalt() + ", " + register.getPepper() + ", " + register.getCumin() + ", " + register.roomAToInt()
						+ ", " + register.roomBToInt() + ", " + register.roomCToInt() + ", " + register.getGun() + ", " + register.getMeds()
						+ ", " + register.getKnife() + ", " + register.getBomb() + ", " + register.isBossToInt() + ", " + register.defeatedBossAToInt()
						+ ", " + register.defeatedBossBToInt() + ", " + register.defeatedBossCToInt() + ");";
				statement.executeUpdate(dbQuery);
				return true;
			}catch(Exception e){
				System.out.println(e.getMessage());
				return false;
			}
		return false;
		
	}
	
	public void connectToDatabase(){
		try{
		String url = "jdbc:mysql://localhost:3306/spiceuniverse";
		Class.forName("com.mysql.jdbc.Driver");
		dbConnection = DriverManager.getConnection(url, "root", "p@ssword");
		}
		catch(Exception e){
			System.out.println(e.getMessage());
		}
	}
	
	public void disconnectFromDatabase(){
		try{
			dbConnection.close();
		}
		catch(Exception e){
			System.out.println(e.getMessage());
		}
	}

	
	/*while(set.next()){
				results.add(new User(set.getString(1),set.getString(2),set.getInt(3),set.getInt(4),set.getInt(5),set.getInt(6),set.getInt(7),set.getInt(8),set.getInt(9),set.getInt(10),set.getInt(11),set.getInt(12),set.getInt(13),set.getInt(14),set.getInt(15), set.getInt(16), set.getInt(17)));
				
			}*/
}
