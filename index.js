exports.handler = async (event) => {
   const response = {
       statusCode: 200,
       body: JSON.stringify('Updated Through Github Action Prod Demo with rule change v3 by philip '),
   };
   return response;
};
