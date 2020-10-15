import UserSignIn from './User/SignIn'
import HomeIndex from './Components/Home/Index'

// React Routes Web App Routes Starts here

export const HOME = '/home';
export const USER_SIGN_IN = '/login';


// React Routes Web App Routes ends here

export const publicRoutes = [
  {
    path: USER_SIGN_IN, exact: true, name: 'Sign In', component: UserSignIn,
  },
  
]

export const privateRoutes = [    
    {
      path:HOME, exact: true, name: 'home', component: HomeIndex,
    }, 
  
]

