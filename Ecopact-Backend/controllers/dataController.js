const asyncHandler=require('express-async-handler');
const { validateData, Data } = require("../Models/Data");
const xlsx=require('xlsx');
const { default: mongoose } = require('mongoose');


/***---------------------------
 * @desc Add new data
 * @Route /api/data/add
 * @Request post
 * @access user logged in
-----------------------------*/
const addNewReport=asyncHandler(async(req,res)=>{
    const userId=req.user.id;
    if(!req.file){
        return res.status(400).send("no file provided");
     }
     const workbook=xlsx.read(req.file.buffer);
     const sheet = workbook.Sheets[workbook.SheetNames[0]];
     const jsonData = xlsx.utils.sheet_to_json(sheet, { raw: true });
     for(const row of jsonData){
        const {error}=validateData({date:row.date,data:{dataName:row.dataType,dataRate:row.rate}});
        if(error) return res.status(400).send(`${error.details[0].message} in a field of your data`);
        const timeSerie= new Data({
           date:row.date,
           data:{
            dataName:row.dataType,
            dataRate:row.rate
           },
           user:userId 
        })
        const existingData=await Data.findOne({date:timeSerie.date,'data.dataName':timeSerie.data.dataName});
        
        if(!existingData){
         await timeSerie.save()
        }
     }
     return res.status(200).send("file uploaded successfully");
})

/***---------------------------
 * @desc Get Averate Rate of data type given
 * @Route /api/data/dataPerDate
 * @Request post
 * @access user logged in
-----------------------------*/
const getDataPerDate=asyncHandler(async (req,res)=>{
   const dataType=req.body.dataType;
   const givenDate=new Date(req.body.date);
   const data= await Data.findOne({date:givenDate,'data.dataName':dataType});
   if(!data){
      return res.status(404).send(`${dataType} is not found for this date`);
   }
   res.status(200).send(data); 
})

/***---------------------------
 * @desc Get Averate Rate of data type given
 * @Route /api/data/average
 * @Request get
 * @access user logged in
-----------------------------*/
const getAverageOfAllData=asyncHandler(async (req,res)=>{
   const dataType = req.params.type;
   if(!dataType){
      return res.status(400).send("No data given");
   }
   const data= await Data.find({'data.dataName':dataType});
   if(data.length ===0){
      return res.status(404).send("No data found");
   }
   let avg=0;
   for(let i=0;i<data.length;i++){
      avg+=data[i].data.dataRate;
   }
   avg=(avg/data.length).toFixed(2);
   res.status(200).send({averageRate:avg});
})

/***---------------------------
 * @desc Get Averate Rate per month of data type given
 * @Route /api/data/averageRatePerMonth
 * @Request get
 * @access user logged in
-----------------------------*/
const getAverageRatePerMonth=asyncHandler(async (req,res)=>{
   const dataType=req.body.dataType;
   const month=req.body.month;
   const year=req.body.year;
   const data= await Data.find({'data.dataName':dataType});
   if(data.length ===0){
      return res.status(404).send("No data found");
   }
   const filteredData=data.filter(data=> data.date.getMonth()+1===month && data.date.getFullYear()===year);
   if(filteredData.length===0){
      return res.status(404).send({averageRate:0});
   }
   let avg=0;
   for(let i=0;i<filteredData.length;i++){
      avg+=data[i].data.dataRate;
   }
   avg=(avg/data.length).toFixed(2);
   res.status(200).send({averageRate:avg});
})

/***---------------------------
 * @desc Get Averate Rate per year of data type given
 * @Route /api/data/averageRatePerYear
 * @Request get
 * @access user logged in
-----------------------------*/
const getAverageRatePerYear=asyncHandler(async (req,res)=>{
   const dataType=req.body.dataType;
   const year=req.body.year;
   const data= await Data.find({'data.dataName':dataType});
   if(data.length ===0){
      return res.status(404).send("No data found");
   }
   const filteredData=data.filter(data=> data.date.getFullYear()===year);
   if(filteredData.length===0){
      return res.status(404).send({averageRate:0});
   }
   let avg=0;
   for(let i=0;i<filteredData.length;i++){
      avg+=data[i].data.dataRate;
   }
   avg=(avg/data.length).toFixed(2);
   res.status(200).send({averageRate:avg});
})



/***---------------------------
 * @desc Get data of data type and month  given
 * @Route /api/data/dataPerMonth
 * @Request get
 * @access user logged in
-----------------------------*/
const getDataPerMonth=asyncHandler(async (req,res)=>{
   const dataType=req.body.dataType;
   const month=parseInt(req.body.month);
   const year=parseInt(req.body.year);
   
   const data= await Data.find({'data.dataName':dataType});
   if(data.length ===0){
      return res.status(404).send(`${dataType} is not found`);
   }
   
   
   let filteredData=data.filter(data=> data.date.getMonth()+1 ===month && data.date.getFullYear()===year);
   
   if(filteredData.length===0){
      return res.status(404).send(`no data found for this date`);
   }
   
   res.status(200).send(filteredData); 
})


/***---------------------------
 * @desc Get Averate Rate of data type given
 * @Route /api/data/dataPerYear
 * @Request get
 * @access user logged in
-----------------------------*/
const getDataPerYear=asyncHandler(async (req,res)=>{
   const dataType=req.body.dataType;
   const year=parseInt(req.body.year);
   const data= await Data.find({'data.dataName':dataType});
   if(data.length ===0){
      return res.status(404).send(`${dataType} is not found`);
   }
   const filteredData=data.filter(data=> data.date.getFullYear()===year);
   if(filteredData.length===0){
      return res.status(404).send(`no data found for this date`);
   }
   res.status(200).send(filteredData); 
})




module.exports={addNewReport,getAverageOfAllData,getDataPerMonth,getDataPerYear,getAverageRatePerMonth,getAverageRatePerYear,getDataPerDate}