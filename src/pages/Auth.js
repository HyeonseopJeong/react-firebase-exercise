import React, {useState, useEffect} from 'react';
import { firebaseApp, db, firebase } from '../firebase';

const Auth = () => {
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPw, setSignupPw] = useState('');

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPw, setLoginPw] = useState('');

    useEffect(() => {
      console.log('In useEffect : ', firebaseApp.auth().currentUser);
    }, []);
    const login = async (email, pw) => {
      try {
        const userCred = await firebaseApp.auth().signInWithEmailAndPassword(email, pw);
        console.log('userCred : ', userCred);
        console.log('user : ', userCred.user);
        console.log(userCred.user === firebaseApp.auth().currentUser);
        console.log(userCred.user.toJSON())
      } catch(e) {
        alert(e.message);
      }
    };
    
    const signup = async (email, pw) => {
      try {
        const userCred = await firebaseApp.auth().createUserWithEmailAndPassword(email, pw);
        console.log('userCred : ', userCred);
        console.log('user : ', userCred.user);
        console.log(userCred.user === firebaseApp.auth().currentUser);
        console.log(userCred.user.toJSON())
      } catch(e) {
        alert(e.message);
      }
    };

    const onLogin = (e) => {
      e.preventDefault();
      login(loginEmail, loginPw);
    };

    const onSignup = (e) => {
      e.preventDefault();
      signup(signupEmail, signupPw);
    }

    return (
      <div>
        <div>
          <form onSubmit={onLogin}>
            <h3>로그인</h3>
            이메일 : <input 
              type="email"
              value={loginEmail}
              onChange={(e)=>{setLoginEmail(e.target.value)}}
            /> <br />

            패스워드 : <input 
              type="password"
              value={loginPw}
              onChange={(e)=>{setLoginPw(e.target.value)}}
            /> <br />

            <button type="submit">로그인!</button>
          </form>
        </div>

        <br /> <br />
        <div>
          <form onSubmit={onSignup}>
            <h3>회원가입</h3>
            이메일 : <input 
              type="email"
              value={signupEmail}
              onChange={(e)=>{setSignupEmail(e.target.value)}}
            /> <br />

            패스워드 : <input 
              type="password"
              value={signupPw}
              onChange={(e)=>{setSignupPw(e.target.value)}}
            /> <br />

            <button type="submit">회원가입!</button>
          </form>
        </div>
      </div>
    );
}

export default Auth;