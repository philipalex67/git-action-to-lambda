exports.handler = async (event) => {
   const response = {
       statusCode: 200,
       body: JSON.stringify('Updated Through Github Action Demo after changing PR test by philip alexander'),
   };
   return response;
};
