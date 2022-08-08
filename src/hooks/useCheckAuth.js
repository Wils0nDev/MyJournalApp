
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';
import { startLoadingNotes } from '../store/journal';


export const useCheckAuth = () => {

    const { status } = useSelector(state => state.auth)
    const dispatch = useDispatch();


    useEffect(() => {
      
      //funcion de firebase cuando el estado de la autenticacion cambia
      onAuthStateChanged(FirebaseAuth, async(user)=>{
        if(!user) return dispatch(logout());
        const {uid,email,displayName,photoUrl } = user;
        dispatch(login({uid,email,displayName,photoUrl }));
        dispatch(startLoadingNotes())
      })
      
    }, []);


    return {
        status
    }

  
}
