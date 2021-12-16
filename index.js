exports.handler = async (event) => {
   const response = {
       statusCode: 200,
       body: JSON.stringify('Updated Through Github Action Prod Demo by philip '),
   };
   return response;
};
