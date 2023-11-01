import {store} from '@/redux/store'

const ProfileComp = () => {
    const state = store.getState();
console.log('state',state);
    return(
    <><h1> Profile Component </h1>
    <p>check state</p></>
    )
}
export default ProfileComp