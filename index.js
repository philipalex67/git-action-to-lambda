exports.handler = async (event) => {
   const response = {
       statusCode: 200,
       body: JSON.stringify('Updated Through Github Action Dev Demo after changing PR test by philip alexander'),
   };
   return response;
};
