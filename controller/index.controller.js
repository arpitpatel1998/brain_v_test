const { finbonacci , matrixCalculation } = require('../utils/helper')
exports.answer = async (req,res) => {
    try{
        const {questionId} = req.params;
        if(questionId == 1)
        {
           let { array1 , array2 , array3} = req.body;
            array1 = array1.split(',');
            array2 = array2.split(',');
            array3 = array3.split(',');    
            const ans = matrixCalculation(array1 , array2, array3);
            res.render('index', { title: 'Test' ,  answer : ans });    
        }else{
            const ans = finbonacci(Number(req.body.num));
            res.render('index', { title: 'Test' ,  answer : ans });    
        }
    }catch(err){
        return res.render('index',{ answer : [`${err.message}`] });
    }
}