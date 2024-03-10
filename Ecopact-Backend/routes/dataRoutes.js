const express=require('express');
const uploadFile = require('../middlewares/uploadFile');
const { addNewReport, getAverageOfAllData, getDataPerMonth, getDataPerYear, getAverageRatePerMonth, getAverageRatePerYear, getDataPerDate } = require('../controllers/dataController');
const { verifyToken } = require('../middlewares/verifyToken');

const dataRoutes=express.Router();

// add new report
dataRoutes.post('/add',verifyToken,uploadFile.single('file'),addNewReport);

// get data per dataType and specific date
dataRoutes.post('/dataPerDate',verifyToken,getDataPerDate)

// get average of all data per dataType
dataRoutes.get(`/average/:type`,verifyToken,getAverageOfAllData)

// get average rate per month and  dataType
dataRoutes.get('/averageRatePerMonth',verifyToken,getAverageRatePerMonth)

// get average rate per year and  dataType
dataRoutes.get('/averageRatePerYear',verifyToken,getAverageRatePerYear)

// get data per month of a given dataType
dataRoutes.post('/dataPerMonth',verifyToken,getDataPerMonth)

// get data per year of a given dataType
dataRoutes.post('/dataPerYear',verifyToken,getDataPerYear)
module.exports={dataRoutes}