package models;

import java.io.Serializable;

public class User implements Serializable{
	private String username;
	private String password;
	private int cur_chapter;
	private int salt;
	private int pepper;
	private int cumin;
	private boolean roomA;
	private boolean roomB;
	private boolean roomC;
	private int gun;
	private int meds;
	private int knife;
	private int bomb;
	private boolean isBoss;
	private boolean defeatedBossA;
	private boolean defeatedBossB;
	private boolean defeatedBossC;
	
	public User() {
		super();
		this.username = null;
		this.password = null;
		this.cur_chapter = 0;
		this.salt = 0;
		this.pepper = 0;
		this.cumin = 0;
		this.roomA = false;
		this.roomB = false;
		this.roomC = false;
		this.gun = -1;
		this.meds = -1;
		this.knife = -1;
		this.bomb = -1;
		this.isBoss = false;
		this.defeatedBossA = false;
		this.defeatedBossB = false;
		this.defeatedBossC = false;
	}
	
	public User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
		this.cur_chapter = 0;
		this.salt = 0;
		this.pepper = 0;
		this.cumin = 0;
		this.roomA = false;
		this.roomB = false;
		this.roomC = false;
		this.gun = -1;
		this.meds = -1;
		this.knife = -1;
		this.bomb = -1;
		this.isBoss = false;
		this.defeatedBossA = false;
		this.defeatedBossB = false;
		this.defeatedBossC = false;
	}
	
	public User(String username, String password, int cur_chapter, int salt,
			int pepper, int cumin, boolean roomA, boolean roomB, boolean roomC,
			int gun, int meds, int knife, int bomb, boolean isBoss,
			boolean defeatedBossA, boolean defeatedBossB, boolean defeatedBossC) {
		super();
		this.username = username;
		this.password = password;
		this.cur_chapter = cur_chapter;
		this.salt = salt;
		this.pepper = pepper;
		this.cumin = cumin;
		this.roomA = roomA;
		this.roomB = roomB;
		this.roomC = roomC;
		this.gun = gun;
		this.meds = meds;
		this.knife = knife;
		this.bomb = bomb;
		this.isBoss = isBoss;
		this.defeatedBossA = defeatedBossA;
		this.defeatedBossB = defeatedBossB;
		this.defeatedBossC = defeatedBossC;
	}
	
	public User(String username, String password, int cur_chapter, int salt,
			int pepper, int cumin, int roomA, int roomB, int roomC,
			int gun, int meds, int knife, int bomb, int isBoss,
			int defeatedBossA, int defeatedBossB, int defeatedBossC) {
		super();
		this.username = username;
		this.password = password;
		this.cur_chapter = cur_chapter;
		this.salt = salt;
		this.pepper = pepper;
		this.cumin = cumin;
		
		if(roomA == 1)
			this.roomA = true;
		else
			this.roomA = false;
		
		if(roomB == 1)
			this.roomB = true;
		else
			this.roomB = false;
		
		if(roomC == 1)
			this.roomC = true;
		else
			this.roomC = false;
		
		this.gun = gun;
		this.meds = meds;
		this.knife = knife;
		this.bomb = bomb;
		
		if(isBoss == 1)
			this.isBoss = true;
		else
			this.isBoss = false;
		
		if(defeatedBossA == 1)
			this.defeatedBossA = true;
		else
			this.defeatedBossA = false;
		
		if(defeatedBossB == 1)
			this.defeatedBossB = true;
		else
			this.defeatedBossB = false;
		
		if(defeatedBossC == 1)
			this.defeatedBossC = true;
		else
			this.defeatedBossC = false;

	}
	
	public void update(int cur_chapter, int salt,
			int pepper, int cumin, boolean roomA, boolean roomB, boolean roomC,
			int gun, int meds, int knife, int bomb, boolean isBoss,
			boolean defeatedBossA, boolean defeatedBossB, boolean defeatedBossC) {
		this.cur_chapter = cur_chapter;
		this.salt = salt;
		this.pepper = pepper;
		this.cumin = cumin;
		this.roomA = roomA;
		this.roomB = roomB;
		this.roomC = roomC;
		this.gun = gun;
		this.meds = meds;
		this.knife = knife;
		this.bomb = bomb;
		this.isBoss = isBoss;
		this.defeatedBossA = defeatedBossA;
		this.defeatedBossB = defeatedBossB;
		this.defeatedBossC = defeatedBossC;
	}
	
	public void update(int cur_chapter, int salt,
			int pepper, int cumin, int roomA, int roomB, int roomC,
			int gun, int meds, int knife, int bomb, int isBoss,
			int defeatedBossA, int defeatedBossB, int defeatedBossC) {
		this.cur_chapter = cur_chapter;
		this.salt = salt;
		this.pepper = pepper;
		this.cumin = cumin;
		
		if(roomA == 1)
			this.roomA = true;
		else
			this.roomA = false;
		
		if(roomB == 1)
			this.roomB = true;
		else
			this.roomB = false;
		
		if(roomC == 1)
			this.roomC = true;
		else
			this.roomC = false;
		
		this.gun = gun;
		this.meds = meds;
		this.knife = knife;
		this.bomb = bomb;
		
		if(isBoss == 1)
			this.isBoss = true;
		else
			this.isBoss = false;
		
		if(defeatedBossA == 1)
			this.defeatedBossA = true;
		else
			this.defeatedBossA = false;
		
		if(defeatedBossB == 1)
			this.defeatedBossB = true;
		else
			this.defeatedBossB = false;
		
		if(defeatedBossC == 1)
			this.defeatedBossC = true;
		else
			this.defeatedBossC = false;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getCur_chapter() {
		return cur_chapter;
	}
	public void setCur_chapter(int cur_chapter) {
		this.cur_chapter = cur_chapter;
	}
	public int getSalt() {
		return salt;
	}
	public void setSalt(int salt) {
		this.salt = salt;
	}
	public int getPepper() {
		return pepper;
	}
	public void setPepper(int pepper) {
		this.pepper = pepper;
	}
	public int getCumin() {
		return cumin;
	}
	public void setCumin(int cumin) {
		this.cumin = cumin;
	}
	public boolean isRoomA() {
		return roomA;
	}
	public void setRoomA(boolean roomA) {
		this.roomA = roomA;
	}
	public boolean isRoomB() {
		return roomB;
	}
	public void setRoomB(boolean roomB) {
		this.roomB = roomB;
	}
	public boolean isRoomC() {
		return roomC;
	}
	public void setRoomC(boolean roomC) {
		this.roomC = roomC;
	}
	public int getGun() {
		return gun;
	}
	public void setGun(int gun) {
		this.gun = gun;
	}
	public int getMeds() {
		return meds;
	}
	public void setMeds(int meds) {
		this.meds = meds;
	}
	public int getKnife() {
		return knife;
	}
	public void setKnife(int knife) {
		this.knife = knife;
	}
	public int getBomb() {
		return bomb;
	}
	public void setBomb(int bomb) {
		this.bomb = bomb;
	}
	public boolean isBoss() {
		return isBoss;
	}
	public void setBoss(boolean isBoss) {
		this.isBoss = isBoss;
	}
	public boolean hasDefeatedBossA() {
		return defeatedBossA;
	}
	public void setDefeatedBossA(boolean defeatedBossA) {
		this.defeatedBossA = defeatedBossA;
	}
	public boolean hasDefeatedBossB() {
		return defeatedBossB;
	}
	public void setDefeatedBossB(boolean defeatedBossB) {
		this.defeatedBossB = defeatedBossB;
	}
	public boolean hasDefeatedBossC() {
		return defeatedBossC;
	}
	public void setDefeatedBossC(boolean defeatedBossC) {
		this.defeatedBossC = defeatedBossC;
	}
	public int roomAToInt(){
		if(roomA)
			return 1;
		else
			return 0;
	}
	public int roomBToInt(){
		if(roomB)
			return 1;
		else
			return 0;
	}
	public int roomCToInt(){
		if(roomC)
			return 1;
		else
			return 0;
	}
	public int isBossToInt(){
		if(isBoss)
			return 1;
		else
			return 0;
	}
	public int defeatedBossAToInt(){
		if(defeatedBossA)
			return 1;
		else
			return 0;
	}
	public int defeatedBossBToInt(){
		if(defeatedBossB)
			return 1;
		else
			return 0;
	}
	public int defeatedBossCToInt(){
		if(defeatedBossC)
			return 1;
		else
			return 0;
	}
	
	


}
