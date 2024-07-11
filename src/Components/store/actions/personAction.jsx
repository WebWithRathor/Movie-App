import instance from "../../utils/axios";
import { loadPersonDetails } from "../reducers/personSlice";
export {removePersonDetails} from "../reducers/personSlice"

export const LoadPersonDetails = (id)=> async(dispatch,getState)=>{
    const personDetail = (await instance.get(`/person/${id}`)).data;
    const credits = (await instance.get(`/person/${id}/combined_credits`)).data;
    const images = (await instance.get(`/person/${id}/images`)).data.profiles;
    const externalIds = (await instance.get(`person/${id}/external_ids`)).data;
    const personDetails = {
        personDetail,
        images,
        externalIds,
        credits
    }
    dispatch(loadPersonDetails(personDetails));
} 