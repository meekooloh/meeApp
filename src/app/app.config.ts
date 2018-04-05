import { environment } from './../environments/environment';

//auth = environment.auth;
export 	const AppConfig ={
  hosts : environment.hosts,
  domain : {
  	name: "Meekooloh",
  	filter: ["....com" , "...............com" , "gmail.com", "hotmail.com"]
  },
  api : environment.api
};
