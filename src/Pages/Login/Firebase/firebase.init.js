import { initializeApp } from "firebase/app";
import firebaseConfig  from "./firebase.config";
 const initializedFirebase =()=> {
     initializeApp(firebaseConfig);
 }

 export default initializedFirebase;

//   const app = initializeApp(firebaseConfig);

/* 
steps for Authentication

---------------------------
step - 1 : initial setup
1. firebase : create project
2. create web app
3.get configuration
4.initialize firebase
5.Enable auth method 

--------------------------

step-2 : setup comment
1.create login component
2. create register component
3. create route for login and register
-----------------------------------------

step-3: set auth system
1.set up sign in method
2.setup sign out method 
3.user state
4. special observer
5.return necessary methods and states from useFirebase

--------------------------------------------------------------

step 4: create auth context hook (useAuth)
1.create a auth context
2.create context provider
3.set context provider context value


*/

