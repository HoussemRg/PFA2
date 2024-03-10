import request from './request';
import { dataActions } from '../slices/dataSlice';
import { toast } from 'react-toastify';



const postFile = (file) => {
    return async (dispatch, getState) => {
      try {
        const res = await request.post('/api/data/add', file, {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
            'Content-Type': "multipart/form-data"
          }
        });
        toast.success(res.data);
      } catch (err) {
        toast.error(err?.response?.data)
      }
    };
  };

const getNH4AverageData=()=>{
    return async (dispatch,getState)=>{
        try{
            
            const res= await request.get(`/api/data/average/NH4`,{
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token, 
                }})
            dispatch(dataActions.getNH4AverageRates(res.data?.averageRate));
        }catch(err){
            toast.error(err?.response?.data)
        }
    }
}

const getPxOyAverageData=()=>{
    return async (dispatch,getState)=>{
        try{
            
            const res= await request.get(`/api/data/average/PxOy`,{
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token, 
                }})
            dispatch(dataActions.getPxOyAverageRates(res.data?.averageRate));
        }catch(err){
            toast.error(err?.response?.data)
        }
    }
}

const getSAverageData=()=>{
    return async (dispatch,getState)=>{
        try{
            
            const res= await request.get(`/api/data/average/S`,{
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token, 
                }})
            dispatch(dataActions.getSAverageRates(res.data?.averageRate));
        }catch(err){
            toast.error(err?.response?.data)
        }
    }
}

const getNH4DataPerDate=(dataType,date)=>{
    return async (dispatch,getState)=>{
        try{
            const res= await request.post(`/api/data/dataPerDate`,{dataType,date},{
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token, 
                }})
            dispatch(dataActions.getNH4PerDate(res.data));
        }catch(err){          
            toast.error(err.response.data)
            dispatch(dataActions.getNH4PerDate(null))
        }
    }
}
const getPxOyDataPerDate=(dataType,date)=>{
    return async (dispatch,getState)=>{
        try{
            const res= await request.post(`/api/data/dataPerDate`,{dataType,date},{
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token, 
                }})
            dispatch(dataActions.getPxOyPerDate(res.data));
        }catch(err){          
            toast.error(err.response.data)
            dispatch(dataActions.getPxOyPerDate(null))
        }
    }
}
const getSDataPerDate=(dataType,date)=>{
    return async (dispatch,getState)=>{
        try{
            const res= await request.post(`/api/data/dataPerDate`,{dataType,date},{
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token, 
                }})
            dispatch(dataActions.getSPerDate(res.data));
        }catch(err){          
            toast.error(err.response.data)
            dispatch(dataActions.getSPerDate(null)) 
        }
    }
}
const getNH4DataPerMonth=(dataType,month,year)=>{
    return async (dispatch,getState)=>{
        try{
           
            const res= await request.post(`/api/data/dataPerMonth`,{dataType,month,year},{
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token, 
                }})
                
            dispatch(dataActions.getNH4PerMonth(res.data));
        }catch(err){
                      
            toast.error(err.response.data)
        }
    }
}

const getPxOyDataPerMonth=(dataType,month,year)=>{
    return async (dispatch,getState)=>{
        try{
            
            const res= await request.post(`/api/data/dataPerMonth`,{dataType,month,year},{
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token, 
                }})
                
            dispatch(dataActions.getPxOyPerMonth(res.data));
        }catch(err){
                      
            toast.error(err.response.data)
        }
    }
}

const getSDataPerMonth=(dataType,month,year)=>{
    return async (dispatch,getState)=>{
        try{
            
            const res= await request.post(`/api/data/dataPerMonth`,{dataType,month,year},{
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token, 
                }})
                
            dispatch(dataActions.getSPerMonth(res.data));
        }catch(err){
                    
            toast.error(err.response.data)
        }
    }
}

const getNH4DataPerYear=(dataType,year)=>{
    return async (dispatch,getState)=>{
        try{
            console.log({dataType,year})
            const res= await request.post(`/api/data/dataPerYear`,{dataType,year},{
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token, 
                }})
                
            dispatch(dataActions.getNH4PerYear(res.data));
        }catch(err){
           
            toast.error(err.response.data)
        }
    }
}
export {getNH4AverageData,getPxOyAverageData,getSAverageData,postFile,getNH4DataPerDate,getPxOyDataPerDate,getSDataPerDate,getNH4DataPerMonth,getPxOyDataPerMonth,getSDataPerMonth,getNH4DataPerYear}