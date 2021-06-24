import {AFF_EXEMPLE} from '../Action/types';

const intStateExemple = {affExemple:true,
                         textExemple: "ceci es un exemple" }
                         
const exemple = (state=intStateExemple, action) => {
    console.log("action", action);
    switch (action.type) {
        case AFF_EXEMPLE:
            return action.payload;
            break;
    
        default:
            return state;
            break;
    }
    return state;

}

export default exemple; 