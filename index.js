exports.handler = async (event) => {
   const response = {
       statusCode: 200,
       body: JSON.stringify('Updated Through Github Action Prod v2 Demo by philip '),
   };
   return response;
};
